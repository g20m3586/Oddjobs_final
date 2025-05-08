import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import JobCard from "@/components/JobCard";
import { useRouter } from "next/router";

export default function MyJobs() {
  const { token } = useContext(AuthContext);
  const router = useRouter();

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Redirect if not logged in
  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token]);

  // Fetch user's jobs
  useEffect(() => {
    if (!token) return;

    fetch("http://localhost:5000/api/jobs/my", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log("Raw response:", res);
        return res.json(); // This will fail if the backend returns HTML
      })
      .then((data) => {
        console.log("Parsed jobs:", data);
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch my jobs:", err);
        setLoading(false);
      });
    
  }, [token]);

  // 🔴 Handle job deletion
  const handleDelete = async (jobId) => {
    const confirmDelete = confirm("Are you sure you want to delete this job?");
    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:5000/api/jobs/${jobId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Remove job from UI
      setJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">My Job Listings</h1>

      {!token ? (
        <p>Redirecting...</p>
      ) : loading ? (
        <p>Loading your jobs...</p>
      ) : jobs.length === 0 ? (
        <p>You haven't posted any jobs yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <JobCard
              key={job._id}
              job={job}
              showActions={true}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </Layout>
  );
}
