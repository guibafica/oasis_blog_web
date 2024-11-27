import { twMerge } from 'tailwind-merge'

interface IButtonProps {
  children: string | React.ReactNode
  className?: string
  onClick?: () => void
  isDisabled?: boolean
}

export function Button({
  children,
  className,
  isDisabled = false,
  onClick = () => {}
}: IButtonProps) {
  return (
    <button
      onClick={isDisabled ? () => {} : onClick}
      className={twMerge(
        'bg-yellow px-6 py-5 rounded text-white font-bold hover:shadow-md text-base transition-all hover:bg-yellow_hover',
        isDisabled &&
          'cursor-not-allowed border-disabled_border bg-disabled_background text-disabled_text hover:border-disabled_border hover:bg-disabled_background hover:shadow-none',
        className
      )}
    >
      {children}
    </button>
  )
}
