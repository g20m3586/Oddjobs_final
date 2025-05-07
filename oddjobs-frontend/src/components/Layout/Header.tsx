import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-primary">
          ODDJobs
        </Link>

        <div className="hidden md:flex space-x-6">
          <NavLink href="/oddjobs">OddJobs</NavLink>
          <NavLink href="/businesses">Businesses</NavLink>
          <NavLink href="/items">Items</NavLink>
          <NavLink href="/my-jobs">My Jobs</NavLink>
        </div>

        <div className="flex space-x-4">
          <NavLink href="/auth/login">Sign In</NavLink>
          <Link
            href="/auth/register"
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:text-primary transition-colors"
    >
      {children}
    </Link>
  )
}