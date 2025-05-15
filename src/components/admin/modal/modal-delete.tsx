import { Button, Divider, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";
import { TriangleAlert } from "lucide-react";

interface IModalDelete {
  post_id: string
  isOpenModal: boolean;
  onCloseModal: () => void
  children: React.ReactNode
}
export default function ModalDelete({ post_id, isOpenModal, onCloseModal, children }: IModalDelete) {
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure({ isOpen: isOpenModal, onClose: onCloseModal })

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-slate-300 items-center">
          <div className="bg-[#FFE0E9] text-danger rounded-full p-1.5">
            <TriangleAlert size={35} />
          </div>
          <div className="font-bold">
            Xác nhận hành động này ?
          </div>
        </ModalHeader>
        <Divider />
        <ModalBody>
          {children}
        </ModalBody>
        <ModalFooter className="flex flex-col">
          <Button className="bg-danger-2 text-slate-200" onPress={onClose}>
            Delete field
          </Button>
          <Button variant="light" onPress={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>

  )

}
