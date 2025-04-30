'use client'
import {
  Modal,
  ModalContent,
  Button,
  useDisclosure,
  Input
} from "@heroui/react";
import { Search, X } from "lucide-react";
import { useState } from "react";
export default function SearchModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [query, setQuery] = useState<string>('')
  const toggleSearch = () => {
    setQuery('')
  }
  return (
    <>
      <Button onPress={onOpen} isIconOnly aria-label="search" className="bg-transparent">
        <Search size={18} />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg" backdrop="blur" placement="top">
        <ModalContent className="mt-12">
          <div className={`relative bg-gray-800 dark:bg-gray-900  p-2 ${query ? 'rounded-t-lg' : 'rounded-lg'}`}>

            <div className="relative">
              {
                query ? <X
                  size={24}
                  onClick={() => toggleSearch()}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 z-10"
                /> : <Search
                  size={24}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"
                />
              }
              <Input
                value={query}
                variant="underlined"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                size="lg"
                style={{ fontSize: '1.1rem', fontWeight: 600, background: 'none', }}
                className="w-full pl-12  font-semibold text-white"
              />
            </div>
          </div>

          {/* thông tin khi có dữ liệu */}
          {query.trim() !== '' && (
            <div className="bg-gray-900 ">
              <div className="text-white font-semibold px-5 py-1">Post</div>
              <div className="max-h-[440px]">
                <div className="py-3 bg-gray-800 px-5 transition-all duration-300">
                  <h2 className="font-semibold text-slate-300">What I did for upgrading React Native to 0.79.1 from 0.74.2</h2>
                  <p className="text-slate-400 text-sm">Hi, its Takuya here, the developer of Inkdrop – a Markdown note-taking app that supports syncing and offline-first</p>
                </div>
                <div className="py-3 px-5 transition-all duration-300">
                  <h2 className="font-semibold text-slate-300">What I did for upgrading React Native to 0.79.1 from 0.74.2</h2>
                  <p className="text-slate-400 text-sm">Hi, its Takuya here, the developer of Inkdrop – a Markdown note-taking app that supports syncing and offline-first</p>
                </div>
                <div className="py-3 px-5 transition-all duration-300">
                  <h2 className="font-semibold text-slate-300">What I did for upgrading React Native to 0.79.1 from 0.74.2</h2>
                  <p className="text-slate-400 text-sm">Hi, its Takuya here, the developer of Inkdrop – a Markdown note-taking app that supports syncing and offline-first</p>
                </div>
                <div className="py-3 px-5 transition-all duration-300">
                  <h2 className="font-semibold text-slate-300">What I did for upgrading React Native to 0.79.1 from 0.74.2</h2>
                  <p className="text-slate-400 text-sm">Hi, its Takuya here, the developer of Inkdrop – a Markdown note-taking app that supports syncing and offline-first</p>
                </div>
                <div className="py-3 px-5 transition-all duration-300">
                  <h2 className="font-semibold text-slate-300">What I did for upgrading React Native to 0.79.1 from 0.74.2</h2>
                  <p className="text-slate-400 text-sm">Hi, its Takuya here, the developer of Inkdrop – a Markdown note-taking app that supports syncing and offline-first</p>
                </div>
              </div>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
