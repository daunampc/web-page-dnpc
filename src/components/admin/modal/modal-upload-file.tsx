import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, Button, ModalFooter, Progress } from "@heroui/react";
import { CircleX, FileCheck, HardDriveUpload } from "lucide-react";

export default function ModalUploadFilePost() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} endContent={<HardDriveUpload size={20} />} color="primary" radius="sm">
        Upload File Post
      </Button>
      <Modal
        className="font-roboto"
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h1>
                  Upload and attach files
                </h1>
                <p className="text-sm font-medium text-slate-400">Subborted tormats: docs. xls. xlsx</p>

              </ModalHeader>
              <ModalBody>
                <div className="w-full h-52 border-dashed border-2 border-dark-pink-primary relative">
                  <input type="file" className="w-full absolute h-full opacity-0" />
                  <div className="flex justify-center items-center h-full">
                    <div className="flex flex-col items-center">
                      <div className="bg-primary p-3 rounded-full">
                        <HardDriveUpload size={30} />
                      </div>
                      <div className="mt-2 text-center">
                        <div className="text-md">Click to upload or drag and drop</div>
                        <p className="text-sm text-slate-400">Maximum file size 50 MB.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className=" bg-dark-body p-2 rounded-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="bg-slate-700 p-1 rounded-md">
                          <FileCheck size={22} />
                        </div>
                        <div className="space-y-0.5">
                          <h1 className="font-bold text-sm">Report name_Q1.csv</h1>
                          <div className="text-xs text-slate-400 font-semibold">15MB</div>
                        </div>
                      </div>
                      <div>
                        <Button isIconOnly size="sm" className="p-0">
                          <CircleX size={16} />
                        </Button>
                      </div>
                    </div>
                    <div className="mt-1 flex items-center justify-between gap-2">
                      <Progress value={65} aria-label="Loading..." className="max-w-md font-semibold text-sm" size="sm" />
                      <div className="text-xs text-slate-400 font-semibold flex-shrink">65%</div>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button onPress={onClose} className="bg-danger rounded-md">Cancel</Button>
                <Button className="bg-success rounded-md">Upload</Button>
              </ModalFooter>
            </>
          )}

        </ModalContent>

      </Modal>

    </>
  )
}
