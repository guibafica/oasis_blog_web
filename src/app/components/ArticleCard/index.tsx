import Link from 'next/link'
import { Dot } from 'lucide-react'
import Image from 'next/image'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { Typography } from '../Typography'

export type IArticleCard = {
  topic: string
  topicImageUrl: string
  creatorImageUrl: string
  creatorName: string
  created_at: Date | string
}

export function ArticleCard({
  topic,
  topicImageUrl,
  creatorImageUrl,
  creatorName,
  created_at
}: IArticleCard) {
  dayjs.extend(relativeTime)
  dayjs.locale('pt-br')

  const formattedDate = dayjs(new Date(created_at)).format('MMM DD, YYYY')
  const timeAgo = dayjs()
    .to(dayjs(new Date(created_at)))
    .replace('há', '')

  return (
    <Link href={`/article/${topic}`} passHref>
      <main className="border border-light_gray_1 md:border-0 w-[300px] h-[425px] p-5 bg-white rounded-xl flex flex-col items-center justify-between transition-all cursor-pointer hover:scale-105 hover:shadow-md">
        <div>
          <div className="h-[198px] w-[260px] bg-black rounded-xl flex items-center justify-center">
            <Image
              width={260}
              height={198}
              alt="Article Image"
              className="rounded-xl"
              src={topicImageUrl}
              style={{ objectFit: 'cover' }}
            />
          </div>

          <Typography className="mt-6" variant="sub_heading_2">
            {topic}
          </Typography>
        </div>

        <div className="flex w-full items-center justify-start gap-4">
          <div className="rounded-full size-[57px] overflow-hidden flex items-center justify-center">
            <Image
              width={57}
              height={57}
              alt="Topic Creator Image"
              className="w-full h-full object-cover"
              src={creatorImageUrl}
            />
          </div>

          <div>
            <Typography variant="paragraph_3_semi_bold">
              {creatorName}
            </Typography>

            <div className="flex items-center">
              <Typography variant="paragraph_4">{formattedDate}</Typography>

              <Dot size={20} color="rgba(var(--black))" />

              <Typography variant="paragraph_4">{timeAgo}</Typography>
            </div>
          </div>
        </div>
      </main>
    </Link>
  )
}
