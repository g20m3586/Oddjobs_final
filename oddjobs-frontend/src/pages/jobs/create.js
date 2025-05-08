import { useState, useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function CreateJob() {
  const { token } = useContext(AuthContext);
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    pay: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // 🔐 Redirect to login if not logged in
  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:5000/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Job creation failed");

      setSuccess("Job posted successfully!");
      setForm({ title: "", description: "", location: "", pay: "" });

      // Optionally redirect to /my-jobs
      // router.push("/my-jobs");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Layout>
      <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Create a New Job</h1>

        {error && <p className="text-red-600 mb-4">{error}</p>}
        {success && <p className="text-green-600 mb-4">{success}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full border rounded p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="4"
              className="w-full border rounded p-2"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Pay</label>
            <input
              type="text"
              name="pay"
              value={form.pay}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Post Job
          </button>
        </form>
      </div>
    </Layout>
  );
}
