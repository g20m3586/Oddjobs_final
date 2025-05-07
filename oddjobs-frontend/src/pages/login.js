import { useState } from "react";
import Layout from "@/components/Layout";
import FormInput from "@/components/FormInput";
import { useRouter } from "next/router";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.msg || data.error || "Login failed");

      localStorage.setItem("token", data.token);
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-xl font-bold mb-4">Login</h1>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded mt-2">
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
}
