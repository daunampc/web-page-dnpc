'use client'
import { Button } from "@heroui/button";
import { Form } from "@heroui/form"
import { Input } from "@heroui/input"
import Link from "next/link";
import { useState } from "react";

export const LoginForm = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="bg-dark-header p-8 rounded-2xl shadow-lg w-full max-w-lg"
      validationBehavior="native"
    >
      <h2 className="text-4xl font-bold mb-6 text-center text-slate-200 w-full">Login</h2>
      <div className="mb-4 w-full">
        <Input
          name="username"
          label="Username"
          type="text"
          size="lg"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          variant="bordered"
          classNames={{
            inputWrapper: 'bg-transparent',
            input: 'text-slate-200'
          }}
          className="w-full"
        />
      </div>
      <div className="mb-2 w-full">
        <Input
          name="password"
          label="Password"
          type="password"
          size="lg"
          placeholder="••••••••"
          variant="bordered"
          value={password}
          classNames={{
            inputWrapper: 'bg-transparent',
            input: 'text-slate-200'
          }}

          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full"
        />
      </div>
      <div className="flex justify-between w-full">
        <div className="text-slate-200">
          Remember me
        </div>
        <Link className="text-blue-500" href={'#'}>Forgot password?</Link>
      </div>

      <Button type="submit" size="lg" className="w-full mt-2">
        Sign In
      </Button>
      <div className="text-slate-200 text-sm text-center w-full">
        Need an account? <Link className="text-blue-500" href={'/register'}>
          Sign up here.
        </Link>
      </div>
    </Form>
  )
}
