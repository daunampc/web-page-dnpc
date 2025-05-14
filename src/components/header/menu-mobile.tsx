import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  useDisclosure,
} from "@heroui/react";
import { CircleX, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MenuMobile() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button isIconOnly onPress={onOpen}>
        <Menu />
      </Button>
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange} size="full">
        <DrawerContent>
          <>
            <DrawerHeader className="flex flex-col gap-1 p-0 relative">
              <Image src={'/images/mobile-menu-header.jpg'} alt="mobile-menu-banner" width={600} height={400} className="w-full h-40 object-cover rounded-b-lg" />
              <div className="absolute w-full h-full bg-black/15"></div>
              <div onClick={onOpenChange} className="absolute z-10 bg-dark-pink-primary rounded-full top-1 right-1"><CircleX size={20} /></div>
            </DrawerHeader>
            <DrawerBody className="mt-3 px-2 gap-3">
              <Link href={'/'} className="w-full font-semibold py-1 px-2 text-xs rounded-sm border-b border-b-slate-600">
                Login/Register
              </Link>
              <Link href={'/'} className="w-full font-semibold py-1 px-2 text-xs rounded-sm border-b border-b-slate-600">
                Login/Register
              </Link>

            </DrawerBody>
          </>
        </DrawerContent>
      </Drawer>
    </>
  );
}

