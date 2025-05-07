import Layout from '@/components/Layout'
import LoginForm from '@/components/Auth/LoginForm'

export default function LoginPage() {
  return (
    <Layout>
      <div className="max-w-md mx-auto py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Sign In</h1>
        <LoginForm />
        <p className="mt-4 text-gray-600">
          Don't have an account?{' '}
          <a href="/auth/register" className="text-primary hover:underline">
            Register here
          </a>
        </p>
      </div>
    </Layout>
  )
}