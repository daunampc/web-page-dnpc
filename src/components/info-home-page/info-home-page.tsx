'use client'
import ScrollAnimate from "../scroll-animate/scroll-animate"
import { InfoFacebook, InfoGithub, InfoTwiter } from "./info-data"


export default function InfoHomePage() {
  return (
    <ScrollAnimate>
      <div className="grid grid-cols-2 gap-6 xl:grid-cols-4">
        <InfoGithub />
        <InfoTwiter />
        <InfoFacebook />
        <InfoGithub />
      </div>
    </ScrollAnimate>
  )
}
