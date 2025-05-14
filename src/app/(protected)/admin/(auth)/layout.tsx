export default function AuthProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 bg-dark-body">
      {children}
    </div>
  )
}
