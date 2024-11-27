type ILinkProps = {
  text: string
  href: string
}

export function Link({ text, href }: ILinkProps) {
  return (
    <>
      <a
        href={href}
        className="relative text-xl font-bold no-underline text-center transition-all border-b-2 border-transparent hover:scale-105 hover:border-yellow"
      >
        {text}
      </a>
    </>
  )
}
