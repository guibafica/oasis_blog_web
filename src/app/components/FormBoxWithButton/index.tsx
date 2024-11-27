import { Button } from '../Button'

type IFormBoxWithButtonProps = {
  buttonText: string
  placeholder?: string
}

export function FormBoxWithButton({
  buttonText,
  placeholder = 'Digite seu e-mail aqui...'
}: IFormBoxWithButtonProps) {
  return (
    <main className="flex flex-col md:flex-row items-center justify-start gap-5">
      <input
        type="text"
        placeholder={placeholder}
        className="h-16 bg-white rounded-lg w-full text-black outline-none placeholder:text-gray p-6 md:w-96"
      />

      <Button className="w-full md:w-auto">{buttonText}</Button>
    </main>
  )
}
