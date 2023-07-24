import Link from 'next/link'
import { FC } from 'react'

import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiWhatsappLine,
} from 'react-icons/ri'

export const Socials: FC = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href="" className="transition-all duration-300 hover:text-accent">
        <RiInstagramLine />
      </Link>

      <Link href="" className="transition-all duration-300 hover:text-accent">
        <RiLinkedinLine />
      </Link>

      <Link href="" className="transition-all duration-300 hover:text-accent">
        <RiWhatsappLine />
      </Link>

      <Link href="" className="transition-all duration-300 hover:text-accent">
        <RiGithubLine />
      </Link>
    </div>
  )
}
