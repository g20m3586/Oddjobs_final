import Layout from "@/components/Layout";
import Link from "next/link";
import { FaSearch, FaHandshake, FaShieldAlt, FaDollarSign, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function Landing() {
  return (
    <Layout>
      {/* Hero Section - Enhanced */}
      <section className="relative text-center py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            OddJobs — Your Local Gig Marketplace
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Connect with skilled helpers or earn money doing quick tasks in your community.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/jobs"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-all font-medium flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <FaSearch /> Browse Jobs
            </Link>
            <Link
              href="/register"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all font-medium flex items-center gap-2"
            >
              Get Started
            </Link>
            <Link
              href="/jobs/create"
              className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-all font-medium flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Post a Job
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - New */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">500+</h3>
            <p className="text-gray-600">Jobs Completed</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">200+</h3>
            <p className="text-gray-600">Active Users</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">95%</h3>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">24h</h3>
            <p className="text-gray-600">Avg. Response Time</p>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How OddJobs Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaHandshake className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Post Your Job</h3>
              <p className="text-gray-600 text-center">
                List any short-term task and reach local job seekers instantly. Set your budget and requirements.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaSearch className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Find Gigs Fast</h3>
              <p className="text-gray-600 text-center">
                Browse jobs by location, pay, and category to find the perfect fit for your skills and schedule.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaShieldAlt className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Stay Secure</h3>
              <p className="text-gray-600 text-center">
                Verified users, secure payments, and review system ensure a safe experience for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - New */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sarah K.</h4>
                  <p className="text-gray-500 text-sm">Homeowner</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Found a helper to assemble my furniture within an hour! The platform is so easy to use and saved me so much time."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Mike T.</h4>
                  <p className="text-gray-500 text-sm">Handyman</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I've earned over $2,000 in my spare time doing odd jobs. It's perfect for students looking for flexible work."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - New */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of locals who are already earning and getting things done.
          </p>
          <Link
            href="/register"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-all font-medium inline-block shadow-lg hover:shadow-xl"
          >
            Sign Up Now - It's Free
          </Link>
        </div>
      </section>
    </Layout>
  );
}