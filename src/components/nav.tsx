'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import {
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiRectangleGroup,
  HiUser,
  HiViewColumns,
} from 'react-icons/hi2'

import { LayoutGrid } from 'lucide-react'
const links = [
  { name: 'Inicio', path: '/', icon: <LayoutGrid /> },
  { name: 'Sobre', path: '/about', icon: <HiUser /> },
  { name: 'Meus Serviços', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'Projetos', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'Contato',
    path: '/contact',
    icon: <HiEnvelope />,
  },
]

export const Nav: FC = () => {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col items-center xl:w-16 xl:max-w-md xl:h-screen h-max xl:right-[2%] mt-auto gap-y-4 xl:justify-center w-full fixed top-0 z-50 bottom-0">
      <div className="flex bg-white/10 xl:text-xl xl:rounded-full backdrop-blur-sm text-3xl py-8 w-full h-[80px] xl:h-max items-center justify-between gap-y-10 px-4 md:px-40 xl:flex-col xl:justify-center xl:px-0">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`${
              pathname === link.path && 'text-accent'
            } flex items-center group hover:text-accent transition-all duration-300`}
          >
            <div className="absolute hidden pr-16 right-0 xl:group-hover:flex">
              <div className="flex relative items-center bg-white text-primary p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>

                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2" />
              </div>
            </div>

            <div className="">{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  )
}
