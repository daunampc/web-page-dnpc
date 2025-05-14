import { useAuth } from "@/context/AuthContext";
import { IAxiosLoading } from "@/interface/axios";
import axiosinstance from "@/lib/axios";
import { Input, Form, Button } from "@heroui/react"
import axios from "axios";
import { FormEvent } from "react";
interface IRegisterForm {
  email: string;
  setEmail: (email: string) => void
  loading: IAxiosLoading
  setLoading: (data: IAxiosLoading) => void
  password: string;
  setPassword: (password: string) => void;
  rePassword: string;
  setRepassword: (password: string) => void;
  onOpenChange: () => void
}
export default function RegisterForm({ onOpenChange, email, setEmail, password, setPassword, rePassword, setRepassword, loading, setLoading }: IRegisterForm) {
  const { setUser } = useAuth()

  const onActionRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading({ loading: true, error: false })

    const data = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const res = await axiosinstance.post('/auth/register', data)
      if (res.data) {
        setLoading({
          loading: false,
          error: false
        })
        setUser(null)
        onOpenChange()
      }
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
          name="re_password"
          label="Reply password"
          type="password"
          placeholder="••••••••"
          variant="bordered"
          color="primary"
          value={rePassword}
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
      <Button isLoading={loading.loading} type="submit" className="w-full bg-dark-pink-primary rounded-md">
        Register
      </Button>
      <div className="text-sm m-auto text-center text-danger">{loading.error && loading.message}</div>
    </Form>

  )
}
