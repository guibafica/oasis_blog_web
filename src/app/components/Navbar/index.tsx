import NextLink from 'next/link'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

import { Link } from './Link'
import { Logo } from '../Logo'

type ILinksLiProps = {
  className?: string
}

type INavbarProps = {
  onChangeText?: (text: string) => void
}

export function Navbar({ onChangeText = () => {} }: INavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const LinksLi = ({ className }: ILinksLiProps) => (
    <div className={className}>
      <Link href="/#home" text="Home" onCLick={() => setIsOpen(false)} />
      <Link
        href="/#categories"
        text="Categorias"
        onCLick={() => setIsOpen(false)}
      />
      <Link href="/contact" text="Contato" onCLick={() => setIsOpen(false)} />
    </div>
  )

  return (
    <>
      <menu className="fixed top-0 z-20 w-screen flex items-center justify-center shadow-sm bg-light_gray_1 py-6">
        <div className="pl-[calc(3.2rem/2)] pr-[calc(3.2rem/2)] w-full max-w-7xl flex flex-row items-center justify-between">
          <Menu
            className="cursor-pointer md:hidden"
            color="rgba(var(--black))"
            aria-label="abrir menu"
            onClick={() => setIsOpen(true)}
          />

          <div className="absolute left-1/2 -translate-x-1/2 md:relative md:left-auto md:translate-x-0">
            <NextLink href="/" passHref>
              <Logo hasText={false} />
            </NextLink>
          </div>

          <div className="flex items-center gap-12">
            <LinksLi className="hidden md:flex items-center gap-12" />

            <div className="hidden md:flex items-center gap-2">
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
                className="placeholder:text-xl placeholder:font-bold placeholder:text-black text-xl font-bold text-black w-32 bg-transparent border-none outline-none"
                onChange={(e) => onChangeText(e.target.value)}
              />
            </div>
          </div>
        </div>
      </menu>

      <nav
        aria-hidden={!isOpen}
        className={twMerge(
          'z-30 py-5 px-4 flex flex-col bg-light_gray_1 fixed transition-opacity top-0 bottom-0 left-0 right-0 h-screen overflow-hidden',
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
