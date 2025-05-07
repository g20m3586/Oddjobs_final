import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link' // This is the critical missing import
import Layout from '@/components/Layout'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>ODDJobs - Find or Post Odd Jobs</title>
      </Head>
      
      <Layout>
        <section className="py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Find or Post Odd Jobs in Your Area
          </h1>
          <div className="flex justify-center gap-4 mt-8">
            <Link
              href="/auth/register"
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark"
              legacyBehavior // Add this for Next.js 13+ compatibility
            >
              <a>Get Started</a>
            </Link>
            <Link
              href="/oddjobs"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
              legacyBehavior
            >
              <a>Browse Jobs</a>
            </Link>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default HomePage