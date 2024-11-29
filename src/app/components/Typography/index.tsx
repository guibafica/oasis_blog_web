import { twMerge } from 'tailwind-merge'

export type ITypographyProps = {
  children: string
  variant:
    | 'heading_1'
    | 'sub_heading_1'
    | 'sub_heading_2'
    | 'paragraph_1'
    | 'paragraph_2'
    | 'paragraph_3_semi_bold'
    | 'paragraph_4'
  color?: 'black' | 'white' | 'dark_gray' | 'gray' | 'yellow'
  className?: string
}

export function Typography({
  children,
  variant,
  className,
  color = 'black'
}: ITypographyProps) {
  return (
    <h1
      className={twMerge(
        variant === 'heading_1' && 'text-[64px] font-bold leading-none',
        variant === 'sub_heading_1' && 'text-2xl font-bold leading-none',
        variant === 'sub_heading_2' && 'text-xl font-bold leading-none',
        variant === 'paragraph_1' && 'text-xl font-normal leading-none',
        variant === 'paragraph_2' && 'text-lg font-normal leading-none',
        variant === 'paragraph_3_semi_bold' &&
          'text-base font-semibold leading-none',
        variant === 'paragraph_4' && 'text-sm font-normal leading-none',
        color === 'black' && 'text-black',
        color === 'white' && 'text-white',
        color === 'dark_gray' && 'text-dark_gray',
        color === 'gray' && 'text-gray',
        color === 'yellow' && 'text-yellow',
        className
      )}
    >
      {children}
    </h1>
  )
}
