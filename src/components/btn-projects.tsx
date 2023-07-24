import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const BtnProjects = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={'/work'}
        className="relative w-[185px] h-[185px] flex justify-center items-center group bg-center bg-cover bg-no-repeat bg-circleStar"
      >
        <Image
          className="h-full w-full max-w-[141px] max-h-[148px] animate-spin-slow"
          alt=""
          width={141}
          height={148}
          src={'/rounded-text.png'}
        />

        <ArrowRight className="text-4xl absolute group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  )
}
