import { LogIn } from "lucide-react";
import { LoginForm } from "./login-form"
import {
  Modal,
  ModalContent,
  Button,
  useDisclosure

} from "@heroui/react";
export const LoginModal = () => {
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

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg" backdrop="blur" >
        <ModalContent className="">
          <LoginForm />
        </ModalContent>
      </Modal>
    </>
  )
}
