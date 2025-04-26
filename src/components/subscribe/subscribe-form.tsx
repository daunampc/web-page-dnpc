'use client'
import { Button } from "@heroui/button"
import { Input } from "@heroui/input"
import { useState } from "react"

export const SubscribeForm = () => {
  const [email, setEmail] = useState('')
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: xử lý logic subscribe ở đây (gửi API, hiển thị thông báo,…)
    console.log('Subscribing:', email)
  }

  return (
    <div className="flex flex-col items-center px-24 py-12 justify-center">
      <div className="text-center">
        <h1 className="text-5xl  max-w-4xl text-slate-200  font-bold">Join me on a behind-the-scenes coding journey.
        </h1>
        <p className="mt-2 text-xl text-slate-400">Updates on my projects, tutorials, tips, and videos</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex w-full bg-transparent max-w-2xl mt-2 items-start gap-2 space-y-1"
      >
        {/* Input */}
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="jamie@example.com"
          className="rounded-none w-full"
          size="lg"
          required
        />

        {/* Button */}
        <Button
          type="submit"
          className="bg-blue-600 text-white rounded-md"
        >
          Subscribe
        </Button>
      </form>
    </div>
  )
}
