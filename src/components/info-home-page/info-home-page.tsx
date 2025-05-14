'use client'
import { InfoFacebook, InfoGithub, InfoTwiter } from "./info-data"


export default function InfoHomePage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:grid-cols-4">
      <InfoGithub />
      <InfoTwiter />
      <InfoFacebook />
      <InfoGithub />
    </div>
  )
}
