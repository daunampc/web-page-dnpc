import { Button } from "@heroui/button";
import { Form } from "@heroui/react"
import { Input } from "@heroui/input"
import Link from "next/link";
import { FormEvent } from "react"; import axiosinstance from "@/lib/axios";
import { useAuth } from "@/context/AuthContext";
import { IAxiosLoading } from "@/interface/axios";
import { isAxiosError } from "axios";

interface ILoginForm {
  email: string;
  setEmail: (email: string) => void
  password: string;
  setPassword: (password: string) => void;
  loading: IAxiosLoading;
  setLoading: (data: IAxiosLoading) => void;
  onOpenChange: () => void;
}
export default function LoginForm({ onOpenChange, email, setEmail, password, setPassword, loading, setLoading }: ILoginForm) {
  const { setUser } = useAuth()


  const onActionLogin = async (event: FormEvent<HTMLFormElement>) => {
    setLoading({ loading: true, error: false })
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const res = await axiosinstance.post('/auth/login', data)
      if (res.data) {
        setUser(res.data)
        onOpenChange()
      }
    } catch (error) {
      if (isAxiosError(error)) {
        setLoading({ loading: false, message: error.response?.data.message, error: true })
      }
    }
  }
  return (
    <Form
      className="rounded-2xl shadow-lg w-full max-w-lg"
      validationBehavior="native"
      onSubmit={onActionLogin}
    >


      <h2 className="text-4xl font-bold mb-6 text-center text-slate-200 w-full">Login</h2>
      <div className="mb-4 w-full">
        <Input
          name="email"
          label="Email"
          type="email"
          size="lg"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          variant="bordered"
          classNames={{
            inputWrapper: 'bg-transparent',
            input: 'text-slate-200'
          }}
          className="w-full"
          validate={(value) => {
            return value.length === 0 ? 'Email must not be empty' : null
          }}
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
          validate={(value) => {
            return value.length === 0 ? 'Password must not be empty' : null
          }}
        />
      </div>
      <div className="flex justify-between w-full">
        <div className="text-slate-200">
          Remember me
        </div>
        <Link className="text-blue-500" href={'#'}>Forgot password?</Link>
      </div>

      <Button isLoading={loading.loading} type="submit" size="lg" className="w-full mt-2 bg-dark-pink-primary rounded-md">
        Sign In
      </Button>
      <div className="font-semibold text-sm text-center m-auto text-danger">
        {loading.error && loading.error}
      </div>
    </Form>
  )
}
