import Image from 'next/image'

import { Typography } from '../Typography'
import { FormBoxWithButton } from '../FormBoxWithButton'

export function Newsletter() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image width={130} height={130} alt="Mail box svg" src="/mail-box.svg" />

      <Typography className="mt-8" variant="sub_heading_2">
        Inscreva-se Para Receber Últimas Atualizações
      </Typography>

      <Typography className="mt-2" color="gray" variant="paragraph_1">
        Subscribe to newsletter and never miss the new post every week.
      </Typography>

      <FormBoxWithButton
        className="w-full md:w-auto mt-8"
        buttonText="Inscrever-se"
      />
    </div>
  )
}
