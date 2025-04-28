'use client'
import { Button } from "@heroui/button";
import { Form } from "@heroui/form"
import { Input } from "@heroui/input"
import Link from "next/link";
import { useState } from "react";
export const RegisterForm = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repassword, setRepassword] = useState<string>('');
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="bg-dark-header p-8 rounded-2xl shadow-lg w-full max-w-md"
      validationBehavior="native"
    >
      <h2 className="text-2xl w-full font-semibold mb-6 text-center text-slate-200">Register</h2>
      <div className="mb-4 w-full">
        <Input
          name="username"
          label="Username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          variant="bordered"
          color="primary"
          classNames={{
            inputWrapper: 'bg-transparent',
            input: 'text-slate-200'
          }}
          className="w-full"
        />
      </div>
      <div className="mb-6 w-full">
        <Input
          name="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          variant="bordered"
          color="primary"
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
      <div className="mb-6 w-full">
        <Input
          name="re-password"
          label="Re-Password"
          type="password"
          placeholder="••••••••"
          variant="bordered"
          color="primary"
          value={repassword}
          classNames={{
            inputWrapper: 'bg-transparent',
            input: 'text-slate-200'
          }}

          onChange={(e) => setRepassword(e.target.value)}
          required
          className="w-full"
        />
      </div>

      <Button type="submit" className="w-full">
        Register
      </Button>
      <div className="text-slate-200 text-sm text-center w-full">
        You already have an account? <Link className="text-blue-500" href={'/register'}>
          Sign up here.
        </Link>
      </div>
    </Form>

  )
}
