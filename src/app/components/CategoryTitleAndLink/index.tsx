import Link from 'next/link'
import Image from 'next/image'

import { Typography } from '../Typography'

export type ICategoryTitleAndLinkProps = {
  CategoryTitle: string
  LinkTitle: string
}

export function CategoryTitleAndLink({
  CategoryTitle,
  LinkTitle
}: ICategoryTitleAndLinkProps) {
  return (
    <header className="flex flex-col items-start gap-4 md:gap-0 md:flex-row md:items-center justify-between">
      <div className="flex items-center justify-end gap-[10px]">
        <Typography variant="sub_heading_1">{CategoryTitle}</Typography>

        <Image
          className="mt-1"
          width={35}
          height={3}
          alt="Horizontal line Svg"
          src="/horizontal-line.svg"
        />
      </div>

      <Link href={`/all-article/${CategoryTitle.toLowerCase()}`} passHref>
        <div className="flex items-center justify-end gap-3 cursor-pointer border-b-2 border-transparent transition-all hover:border-black">
          <Typography variant="sub_heading_2">{LinkTitle}</Typography>

          <Image
            className="mt-1"
            width={8}
            height={16}
            alt="Chevron right Svg"
            src="/chevron-right.svg"
          />
        </div>
      </Link>
    </header>
  )
}
