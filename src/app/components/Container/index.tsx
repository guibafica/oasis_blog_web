import { twMerge } from 'tailwind-merge'

export type IContainerProps = {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Container({ children, className, id = '' }: IContainerProps) {
  return (
    <section id={id} className={twMerge('w-full', className)}>
      <div className="max-w-7xl ml-auto mr-auto pl-[calc(3.2rem/2)] pr-[calc(3.2rem/2)]">
        {children}
      </div>
    </section>
  )
}
