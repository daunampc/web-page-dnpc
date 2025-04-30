'use client'
import ScrollAnimate from "../scroll-animate/scroll-animate"
import { InfoFacebook, InfoGithub, InfoTwiter } from "./info-data"


export default function InfoHomePage() {
  return (
    <div>
      <ScrollAnimate>
        <div className="grid grid-cols-4 gap-6">
          <InfoGithub />
          <InfoTwiter />
          <InfoFacebook />
          <InfoGithub />
        </div>
      </ScrollAnimate>
    </div>
  )
}
