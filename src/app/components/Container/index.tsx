export type IContainerProps = {
  children: React.ReactNode
}

export function Container({ children }: IContainerProps) {
  return (
    <div className="max-w-7xl ml-auto mr-auto pl-[calc(3.2rem/2)] pr-[calc(3.2rem/2)]">
      {children}
    </div>
  )
}
