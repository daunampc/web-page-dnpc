'use client'
import Link from "next/link"
import SearchModal from "../search/search-modal"
import LoginModal from "../auth/login/login-modal"

export default function Header() {

  return (
    <div className="w-full bg-dark-header">
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
          <SearchModal />
          <LoginModal />
        </div>
      </div>
    </div>
  )
}
