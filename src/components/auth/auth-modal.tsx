'use client'
import { CircleUser, LogIn } from "lucide-react";
import {
  Modal,
  ModalContent,
  Button,
  useDisclosure,
  ModalBody
} from "@heroui/react";
import LoginForm from "@/components/auth/login/login-form";
import { useState } from "react";
import RegisterForm from "./register/register-form";
import { IAxiosLoading } from "@/interface/axios";
export default function AuthModal() {
  const [isLoginModal, setIsLoginModal] = useState<boolean>(false)
  const [isRegisterModal, setIsRegisterModal] = useState<boolean>(false)
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState<IAxiosLoading>({
    loading: false,
    error: false,
    message: null,
    data: null
  })
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repassword, setRepassword] = useState<string>('');
  return (
    <>
      <div className="lg:block hidden">
        <Button onPress={() => {
          onOpen()
          setIsLoginModal(true)
        }}
          className="bg-dark-pink-primary text-white shadow-lg font-semibold"
        >
          <LogIn />
          Log-In/Register
        </Button>
      </div>
      <div className="lg:hidden">
        <Button onPress={() => {
          onOpen()
          setIsLoginModal(true)
        }}
          isIconOnly
          className="bg-dark-pink-primary text-white shadow-lg font-semibold"
        >
          <CircleUser />
        </Button>
      </div>

      <Modal className="p-3" isOpen={isOpen} onOpenChange={onOpenChange} size="lg" backdrop="blur" placement="top" >
        <ModalContent>
          <ModalBody>
            {isLoginModal ?
              <LoginForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                setLoading={setLoading}
                onOpenChange={onOpenChange}
                loading={loading} /> :
              isRegisterModal ?
                <RegisterForm
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  rePassword={repassword}
                  setRepassword={setRepassword}
                  onOpenChange={onOpenChange}
                  setLoading={setLoading}
                  loading={loading}

                /> : <></>}

          </ModalBody>
          {isLoginModal ? <>
            <div className="text-slate-200 text-sm text-center w-full mt-2">
              Need an account? <div onClick={() => {
                setIsLoginModal(false)
                setIsRegisterModal(true)
              }} className="text-blue-500 font-semibold cursor-pointer">
                Sign up here.
              </div>
            </div>

          </> : <div className="text-slate-200 text-sm text-center w-full">
            You already have an account? <div onClick={() => {

              setIsRegisterModal(false)
              setIsLoginModal(true)
            }} className="text-blue-500 font-semibold cursor-pointer">
              Sign In.
            </div>
          </div>}
        </ModalContent>
      </Modal>
    </>
  )
}
