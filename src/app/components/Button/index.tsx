import { twMerge } from 'tailwind-merge'

export type IButtonProps = {
  children: string | React.ReactNode
  className?: string
  onClick?: () => void
  isDisabled?: boolean
  isLoading?: boolean
}

export function Button({
  children,
  className,
  isDisabled = false,
  isLoading = false,
  onClick = () => {}
}: IButtonProps) {
  return (
    <button
      data-isLoading={isLoading}
      onClick={isLoading || isDisabled ? () => {} : onClick}
      className={twMerge(
        'bg-yellow px-6 py-5 rounded text-white font-bold text-base transition-all data-[isLoading=true]:cursor-progress hover:shadow-md hover:bg-yellow_hover',
        isDisabled &&
          'cursor-not-allowed border-disabled_border bg-disabled_background text-disabled_text hover:border-disabled_border hover:bg-disabled_background hover:shadow-none',
        className
      )}
    >
      {children}
    </button>
  )
}
