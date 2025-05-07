import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";

export default function JobDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:5000/api/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch job:", err);
        setLoading(false);
      });
  }, [id]);

  return (
    <Layout>
      {loading ? (
        <p>Loading job...</p>
      ) : !job ? (
        <p>Job not found.</p>
      ) : (
        <div className="bg-white p-6 rounded shadow max-w-2xl mx-auto">
          {/* 🔙 Back to jobs */}
          <Link
            href="/"
            className="inline-block mb-4 text-blue-600 hover:underline"
          >
            ← Back to Jobs
          </Link>

          <h1 className="text-2xl font-bold text-blue-700 mb-1">
            {job.title}
          </h1>

          <div className="text-sm text-gray-600 mb-1">{job.location}</div>

          <p className="text-xs text-gray-500 mb-4">
            Posted {formatDistanceToNow(new Date(job.date))} ago
          </p>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-1">Job Description</h2>
            <p className="text-gray-700">{job.description}</p>
          </div>

          <div className="mb-4">
            <span className="font-semibold text-gray-800">Pay:</span>{" "}
            <span className="text-green-700 font-bold">{job.pay}</span>
          </div>

          <div className="mb-2">
            <span className="font-semibold text-gray-800">Posted by:</span>{" "}
            <span className="text-sm text-gray-700">{job.user?.email || "N/A"}</span>
          </div>
        </div>
      )}
    </Layout>
  );
}
