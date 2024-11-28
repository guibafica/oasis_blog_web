import { twMerge } from 'tailwind-merge'
import Image from 'next/image'

import { Typography } from '../Typography'

export type ICategoryCardProps = {
  variant?: 'white' | 'yellow'
  text: string
  iconPath: string
  hrefSection?: string
}

export function CategoryCard({
  variant = 'white',
  iconPath,
  text,
  hrefSection = '#'
}: ICategoryCardProps) {
  return (
    <a
      href={hrefSection}
      className={twMerge(
        'w-[220px] h-[280px] cursor-pointer shadow-sm hover:shadow-md hover:scale-105 transition-all rounded-lg flex flex-col items-start justify-center p-8 gap-8',
        variant === 'white' && 'bg-white',
        variant === 'yellow' && 'bg-yellow'
      )}
    >
      <div className="rounded-lg bg-white flex items-center justify-center size-[60px]">
        <Image width={33} height={33} alt="Icon Svg" src={iconPath} />
      </div>

      <Typography
        color={variant === 'white' ? 'black' : 'white'}
        variant="sub_heading_1"
      >
        {text}
      </Typography>
    </a>
  )
}
