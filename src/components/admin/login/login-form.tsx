'use client'
import { CheckIcon, EyeIcon } from "lucide-react";
import { FormEvent, useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState<string>('')
  const [showPass, setShowPass] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('')
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

  }
  return (
    <div className="relative w-full max-w-5xl bg-dark-header border-2 border-dark-gray-1 rounded-2xl p-6 pb-28 pt-28">
      <h1 className="text-center text-slate-200 text-4xl font-semibold">Itou Toshiro </h1>
      <div className="text-center">Admin Dashboard Login Page</div>
      <div className="flex flex-col items-center mt-16">
        <div className="text-2xl font-semibold">Welcome Back</div>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-sm w-full mt-16 font-roboto">
          {/* Email */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm text-gray-200">Email</label>
            <div className="relative">
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-b-slate-500
                         text-white placeholder-white pb-1 focus:outline-none"
              />
              <CheckIcon className="w-5 h-5 text-blue-500 absolute right-0 bottom-1" />
            </div>
            <p className="hidden text-xs text-danger">Perfect!</p>
          </div>

          {/* Password */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="text-sm text-gray-200">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPass ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-b-slate-500 max-w-[90%]
                         text-white pb-1 focus:outline-none"
              />
              <EyeIcon
                onClick={() => setShowPass(v => !v)}
                className="w-5 h-5 text-blue-500 absolute right-0 bottom-1 cursor-pointer"
              />
            </div>
            <p className="hidden text-xs text-danger">Your password is strong.</p>
          </div>

          {/* Sign In */}
          <button
            type="submit"
            className="w-full py-3 bg-dark-pink-primary text-slate-200 font-semibold
                     rounded-lg hover:bg-dark-pink-primary/80 transition"
          >
            Sign in
          </button>
        </form>
        <div className="mt-4 text-center">

        </div>
      </div>
    </div>

  )
}
