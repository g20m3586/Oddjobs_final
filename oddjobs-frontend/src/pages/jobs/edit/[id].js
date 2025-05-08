import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/AuthContext";
import Layout from "@/components/Layout";

export default function EditJob() {
  const { token } = useContext(AuthContext);
  const router = useRouter();
  const { id } = router.query;

  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    pay: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Redirect if not logged in
  useEffect(() => {
    if (!token) router.push("/login");
  }, [token]);

  // Load job data
  useEffect(() => {
    if (!id || !token) return;

    fetch(`http://localhost:5000/api/jobs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setForm({
          title: data.title || "",
          description: data.description || "",
          location: data.location || "",
          pay: data.pay || "",
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading job:", err);
        setError("Failed to load job data.");
        setLoading(false);
      });
  }, [id, token]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch(`http://localhost:5000/api/jobs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Update failed");

      setSuccess("Job updated successfully!");
      // Optionally redirect after a delay
      // router.push("/my-jobs");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Layout>
      <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Edit Job</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
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
                  className="w-full border rounded p-2"
                  required
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
                Update Job
              </button>
            </form>
          </>
        )}
      </div>
    </Layout>
  );
}
