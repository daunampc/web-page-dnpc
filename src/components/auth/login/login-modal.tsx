'use client'
import { LogIn } from "lucide-react";
import {
  Button,
  useDisclosure
} from "@heroui/react";
export default function LoginModal() {
  const { onOpen } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg font-semibold"
        radius="full"
      >
        <LogIn />
        Log-In/Register
      </Button>

    </>
  )
}
