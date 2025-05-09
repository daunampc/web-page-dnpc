'use client'
import { LogIn } from "lucide-react";
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
export default function AuthModal() {
  const [isLoginModal, setIsLoginModal] = useState<boolean>(false)
  const [isRegisterModal, setIsRegisterModal] = useState<boolean>(false)
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={() => {
        onOpen()
        setIsLoginModal(true)
      }}
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg font-semibold"
        radius="full"
      >
        <LogIn />
        Log-In/Register
      </Button>

      <Modal className="p-3" isOpen={isOpen} onOpenChange={onOpenChange} size="lg" backdrop="blur" placement="top" >
        <ModalContent>
          <ModalBody>
            {isLoginModal ? <LoginForm onOpenChange={onOpenChange} /> : isRegisterModal ? <RegisterForm onOpenChange={onOpenChange} /> : <></>}
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
