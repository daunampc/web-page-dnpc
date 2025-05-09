'use client'
import Link from "next/link"
import SearchModal from "../search/search-modal"
import { useAuth } from "@/context/AuthContext"
import { AccountModal } from "../auth/account/account-modal"
import AuthModal from "../auth/auth-modal"

export default function Header() {
  const { user } = useAuth()
  return (
    <div className="w-full bg-dark-header">
      <div className="flex items-center justify-between container mx-auto py-2.5">
        <Link href={'/'}>
          <div className="text-white font-potta-none font-normal text-xl">
            Itou Toshiro
          </div>
        </Link>
        <div className="hidden items-center text-white font-semibold gap-2 lg:flex">
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
          {!user ? <AuthModal /> : <AccountModal />}

        </div>
      </div>
    </div>
  )
}
