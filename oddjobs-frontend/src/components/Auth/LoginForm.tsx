import { useForm } from 'react-hook-form'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { authAPI } from '@/utils/api'
import { useRouter } from 'next/router'
import Link from 'next/link' // Added this import

type FormData = {
  email: string
  password: string
}

export default function LoginForm() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    setError('')
    
    try {
      const response = await authAPI.login(data)
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
        router.push('/my-jobs')
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="p-4 bg-red-50 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* ... rest of the form remains the same ... */}
      </form>
    </div>
  )
}