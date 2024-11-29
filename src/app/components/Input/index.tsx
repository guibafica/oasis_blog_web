import { twMerge } from 'tailwind-merge'

import { Typography } from '../Typography'

export type IInputProps = {
  title: string
  className?: string
}

export function Input({ title, className }: IInputProps) {
  return (
    <main className={twMerge('w-80', className)}>
      <Typography variant="paragraph_3_semi_bold">{title}</Typography>

      <input
        type="text"
        className="h-14 w-full p-4 outline-none bg-white border border-gray rounded-lg mt-2"
      />
    </main>
  )
}
