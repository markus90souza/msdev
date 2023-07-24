import { Socials } from '@/components/socials'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export const Header: FC = () => {
  return (
    <header className="w-full z-30 absolute flex items-center px-16 xl:p-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between items-center gap-y-6 py-8 lg:flex-row">
          <Link href={'/'}>
            <Image
              src={'/logo.svg'}
              width={220}
              height={48}
              alt=""
              priority={true}
            />
          </Link>

          <Socials />
        </div>
      </div>
    </header>
  )
}
