import { twMerge } from 'tailwind-merge'

import { Button } from '../Button'

type IFormBoxWithButtonProps = {
  buttonText: string
  placeholder?: string
  className?: string
}

export function FormBoxWithButton({
  buttonText,
  placeholder = 'Digite seu e-mail aqui...',
  className
}: IFormBoxWithButtonProps) {
  return (
    <main
      className={twMerge(
        'flex flex-col md:flex-row items-center justify-start gap-5',
        className
      )}
    >
      <input
        type="text"
        placeholder={placeholder}
        className="h-16 bg-white border-[2px] border-gray rounded-lg w-full text-black outline-none placeholder:text-gray p-6 md:w-96"
      />

      <Button className="w-full md:w-auto">{buttonText}</Button>
    </main>
  )
}
