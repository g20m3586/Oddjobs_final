import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import JobCard from "@/components/JobCard";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Latest Jobs</h1>

      {loading ? (
        <p>Loading jobs...</p>
      ) : jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      )}
    </Layout>
  );
}
