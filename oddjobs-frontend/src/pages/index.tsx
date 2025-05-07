import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import JobCard from "@/components/JobCard";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch jobs:", err);
        setLoading(false);
      });
  }, []);

  // 🔍 Filter jobs by search
  const filteredJobs = jobs.filter((job) =>
    (job.title + job.location)
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // 📄 Pagination logic
  const indexOfLast = currentPage * jobsPerPage;
  const indexOfFirst = indexOfLast - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Latest Jobs</h1>

      {/* 🔍 Search bar */}
      <input
        type="text"
        placeholder="Search title or location..."
        className="w-full md:w-1/2 p-2 border rounded mb-6"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1); // Reset to page 1 on new search
        }}
      />

      {/* 🌀 Loading / Empty / Jobs */}
      {loading ? (
        <p>Loading jobs...</p>
      ) : filteredJobs.length === 0 ? (
        <p>No jobs match your search.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentJobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>

          {/* 🔄 Pagination controls */}
          <div className="mt-6 flex flex-wrap gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </Layout>
  );
}
