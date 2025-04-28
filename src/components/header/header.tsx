'use client'
import { Button } from "@heroui/button"
import { Input } from "@heroui/input"
import { LogIn, Search, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export const Header = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false)
  const [query, setQuery] = useState<string>('')
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        toggleSearch(true)
      }
      if (e.key === 'Escape') {
        toggleSearch(false)
      }
    }
    window.addEventListener('keydown', down)
    return () => window.removeEventListener('keydown', down)
  }, [])
  const toggleSearch = (is_show: boolean) => {
    setQuery('')
    setOpenSearch(is_show)
  }
  return (
    <div className="w-full bg-dark-header">

      {openSearch && (

        <div
          onClick={() => toggleSearch(false)}
          className="fixed inset-0 z-50 flex items-start justify-center
                     bg-black bg-opacity-50 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-lg mx-4 top-24" onClick={e => e.stopPropagation()}>
            <div className={`relative bg-gray-800 dark:bg-gray-900  p-2 ${query ? 'rounded-t-lg' : 'rounded-lg'}`}>

              <div className="relative">
                {
                  query ? <X
                    size={24}
                    onClick={() => toggleSearch(false)}
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
          </div>
        </div>
      )}
      <div className="flex items-center justify-between container mx-auto py-2.5">
        <Link href={'/'}>
          <div className="text-white font-potta-none font-normal text-xl">
            DNPC-HOYOPLAY
          </div>
        </Link>
        <div className="flex items-center text-white font-semibold gap-2">
          <Link href={'/'}>
            <div className="px-3">
              Home
            </div>
          </Link>
          <div className="px-3">
            About-Us
          </div>
          <div className="px-3">
            Blog
          </div>
          <div className="px-3">
            Support
          </div>
          <div className="px-3">
            Contact
          </div>
          <Button onClick={() => setOpenSearch(true)} isIconOnly aria-label="search" className="bg-slate-100">
            <Search />
          </Button>
          <Link href={'/login'}>
            <Button
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg font-semibold"
              radius="full"
            >
              <LogIn />
              Log-In/Register
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
