import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

import { Link } from './Link'
import { Logo } from '../Logo'

type ILinksLiProps = {
  className?: string
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const LinksLi = ({ className }: ILinksLiProps) => (
    <div className={className}>
      <Link href="#" text="Home" />
      <Link href="#" text="Categorias" />
      <Link href="#" text="Contato" />
    </div>
  )

  return (
    <>
      <menu className="bg-light_gray_1 shadow-sm py-6 flex items-center justify-between relative md:justify-end">
        <Menu
          className="cursor-pointer md:hidden"
          color="rgba(var(--black))"
          aria-label="abrir menu"
          onClick={() => setIsOpen(true)}
        />

        <div className="absolute left-1/2 -translate-x-1/2 md:top-5 md:left-0 md:translate-x-0">
          <Logo hasText={false} />
        </div>

        <div className="flex items-center gap-12">
          <LinksLi className="hidden md:flex items-center gap-12" />

          <div className="flex items-center gap-2">
            <Image
              className="cursor-pointer"
              aria-label="buscar"
              width={14}
              height={14}
              alt="Search Svg"
              src="/search.svg"
            />

            <input
              type="text"
              placeholder="Procurar"
              className="hidden md:flex placeholder:text-xl placeholder:font-bold placeholder:text-black text-xl font-bold text-black w-32 bg-transparent border-none outline-none"
            />
          </div>
        </div>
      </menu>

      <nav
        aria-hidden={!isOpen}
        className={twMerge(
          'py-5 px-4 flex flex-col bg-light_gray_1 absolute transition-opacity top-0 bottom-0 left-0 right-0 h-screen overflow-hidden',
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        <X
          className="cursor-pointer absolute top-5 right-4"
          color="rgba(var(--black))"
          aria-label="fechar menu"
          onClick={() => setIsOpen(false)}
        />

        <div
          className={twMerge(
            'flex items-center justify-center flex-1 flex-col gap-4 transition-all',
            isOpen ? 'translate-y-12' : 'translate-y-0'
          )}
        >
          <LinksLi className="flex flex-col gap-4" />
        </div>
      </nav>
    </>
  )
}
