'use client'
import { LogIn } from "lucide-react";
import {
  Modal,
  ModalContent,
  Button,
  useDisclosure
} from "@heroui/react";
import LoginForm from "@/components/auth/login/login-form";
export default function LoginModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg font-semibold"
        radius="full"
      >
        <LogIn />
        Log-In/Register
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg" backdrop="blur" placement="top" >
        <ModalContent>
          <LoginForm onOpenChange={onOpenChange} />
        </ModalContent>
      </Modal>
    </>
  )
}
