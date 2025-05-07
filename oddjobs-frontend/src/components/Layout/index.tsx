import Layout from '@/components/Layout'
import Link from 'next/link' // This import was missing

export default function HomePage() {
  return (
    <Layout>
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Find or Post Odd Jobs in Your Area
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect with people looking for help or offer your services for quick tasks and odd jobs.
        </p>
        
        <div className="flex justify-center gap-4">
          <Link
            href="/auth/register"
            className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/oddjobs"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
          >
            Browse Jobs
          </Link>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          How It Works
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-primary text-3xl mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">Create an Account</h3>
            <p className="text-gray-600">
              Sign up as either a customer looking for help or a business offering services.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-primary text-3xl mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2">Post or Browse</h3>
            <p className="text-gray-600">
              Create a job listing or browse available opportunities in your area.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-primary text-3xl mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2">Connect & Complete</h3>
            <p className="text-gray-600">
              Communicate with the other party and get the job done!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}