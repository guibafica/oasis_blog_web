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
  color?: 'black' | 'white' | 'dark_gray' | 'gray'
  className?: string
}

export const Typography = ({
  children,
  variant,
  className,
  color = 'black'
}: ITypographyProps) => (
  <h1
    className={twMerge(
      variant === 'heading_1' && 'text-[64px] font-bold',
      variant === 'sub_heading_1' && 'text-2xl font-bold',
      variant === 'sub_heading_2' && 'text-xl font-bold',
      variant === 'paragraph_1' && 'text-xl font-normal',
      variant === 'paragraph_2' && 'text-lg font-normal',
      variant === 'paragraph_3_semi_bold' && 'text-base font-semibold',
      variant === 'paragraph_4' && 'text-sm font-normal',
      color === 'black' && 'text-black',
      color === 'white' && 'text-white',
      color === 'dark_gray' && 'text-dark_gray',
      color === 'gray' && 'text-gray',
      className
    )}
  >
    {children}
  </h1>
)
