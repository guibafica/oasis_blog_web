type ILinkProps = {
  text: string
  href: string
  onCLick?: () => void
}

export function Link({ text, href, onCLick = () => {} }: ILinkProps) {
  return (
    <>
      <a
        onClick={onCLick}
        href={href}
        className="relative text-xl font-bold no-underline text-center transition-all border-b-2 border-transparent hover:scale-105 hover:border-yellow"
      >
        {text}
      </a>
    </>
  )
}
