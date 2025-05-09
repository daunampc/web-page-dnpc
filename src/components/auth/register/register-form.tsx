'use client'
import { IAxiosLoading } from "@/interface/axios";
import axiosinstance from "@/lib/axios";
import { Input, Form, Button } from "@heroui/react"
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

interface IRegisterForm {
  onOpenChange: () => void;
}
export default function RegisterForm({ }: IRegisterForm) {
  const router = useRouter()
  const [loading, setLoading] = useState<IAxiosLoading>({
    loading: false,
    error: false,
    message: null,
    data: null
  })
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repassword, setRepassword] = useState<string>('');

  const onActionRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading({ loading: true, error: false })
    const data = Object.fromEntries(new FormData(event.currentTarget));
    try {
      await axiosinstance.post('/auth/register', data)
      setLoading({
        loading: false,
        error: false
      })
      router.refresh()
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setLoading({ loading: false, message: error.response?.data.message, error: true })
      }

    }

  }

  return (
    <Form
      onSubmit={onActionRegister}
      className="rounded-2xl shadow-lg w-full max-w-md"
      validationBehavior="native"
    >
      <h2 className="text-2xl w-full font-semibold mb-6 text-center text-slate-200">Register</h2>
      <div className="mb-4 w-full">
        <Input
          name="email"
          label="Email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          validate={(value) => {
            if (value.length === 0) {
              return 'Password must not be empty'
            }
            return null
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
          validate={(value) => {
            if (value.length === 0) {
              return 'Password must not be empty'
            }
            if (value !== password) {
              return 'Passwords do not match'
            }
            return null
          }}
          classNames={{
            inputWrapper: 'bg-transparent',
            input: 'text-slate-200'
          }}

          onChange={(e) => setRepassword(e.target.value)}
          required
          className="w-full"
        />
      </div>
      <Button type="submit" className="w-full bg-dark-pink-primary rounded-md">
        Register
      </Button>
      <div className="text-sm m-auto text-center text-danger">{loading.error && loading.message}</div>
    </Form>

  )
}
