import { useForm } from 'react-hook-form'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { authAPI } from '@/utils/api'
import { useRouter } from 'next/router'
import Link from 'next/link' // Added this import

type FormData = {
  name: string
  email: string
  password: string
  passwordConfirm: string
  role: 'customer' | 'business'
  terms: boolean
}

export default function RegisterForm() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      role: 'customer',
    },
  })

  const password = watch('password')

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    setError('')
    
    try {
      const response = await authAPI.register({
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role,
      })
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
        router.push(data.role === 'business' ? '/business/dashboard' : '/my-jobs')
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.')
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