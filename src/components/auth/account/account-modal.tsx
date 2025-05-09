'use client'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Divider,
} from "@heroui/react";
import { ArrowLeft, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AccountPreferencesForm, AccountSettingForm } from "./account-setting-form";
import axiosinstance from "@/lib/axios";
import { useAuth } from "@/context/AuthContext";

export const AccountModal = () => {
  const { setUser } = useAuth()

  const [loading, setLoading] = useState<boolean>(false)
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalSetting, setModalSetting] = useState<boolean>(false)
  const [modalPreferences, setModalPreferences] = useState<boolean>(false)

  useEffect(() => {
    setModalPreferences(false)
    setModalSetting(false)
  }, [isOpen])
  const onLogout = async () => {
    setLoading(true)
    try {
      await axiosinstance.post('/auth/logout')
      setLoading(false)
      onOpenChange()
      setUser(null)
    } catch {
      setLoading(false)
    }
  }
  return (
    <div>
      <Button onPress={onOpen} className="bg-dark-pink-primary px-5 py-1.5 rounded-xl">
        Account
      </Button>
      <Modal isOpen={isOpen} hideCloseButton onOpenChange={onOpenChange} placement="top" backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className={`flex items-center ${modalPreferences || modalSetting ? 'justify-between' : 'justify-center'}`}>
                  {
                    modalSetting || modalPreferences ? <>
                      <div onClick={() => {
                        setModalSetting(false)
                        setModalPreferences(false)
                      }} className="flex items-center cursor-pointer hover:-translate-x-2 transition-all duration-300">
                        <ArrowLeft />
                        <span className="text-sm text-slate-300">Back</span>
                      </div>
                    </> : ""
                  }
                  <h1 className="text-2xl font-semibold">
                    {modalSetting ? 'Account settings' : modalPreferences ? 'Email preferences' : 'Your account'}
                  </h1>
                  {modalSetting || modalPreferences ? <X onClick={onOpenChange} /> : ""}
                </div>
              </ModalHeader>
              <ModalBody>
                {
                  modalSetting ? <>
                    <AccountSettingForm />
                  </> : modalPreferences ? <>
                    <AccountPreferencesForm />
                  </> : <>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">Itou Toshiro</div>
                        <div className="text-sm text-slate-400 font-semibold">toshiroitdv@gmail.com</div>
                      </div>
                      <div onClick={() => setModalSetting(true)} className="cursor-pointer font-semibold text-sm text-primary">Edit</div>
                    </div>
                    <Divider />
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">Emails</div>
                        <div className="text-sm text-slate-400 font-semibold">Update your preferences</div>
                      </div>
                      <div onClick={() => setModalPreferences(true)} className="cursor-pointer font-semibold text-sm text-primary">Manage</div>
                    </div>
                  </>
                }
              </ModalBody>
              <>
                {
                  modalSetting || modalPreferences ? <>

                  </> : <ModalFooter className="flex justify-between">
                    <Button isLoading={loading} onPress={onLogout} color="danger">
                      Sign Out
                    </Button>
                    <Button disabled={loading} color="primary" onPress={onClose}>
                      Contact Support
                    </Button>
                  </ModalFooter>
                }
              </>
            </>
          )}
        </ModalContent>
      </Modal>
    </div >
  )
}
