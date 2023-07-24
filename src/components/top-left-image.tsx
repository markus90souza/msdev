import Image from 'next/image'
import { FC } from 'react'

export const TopLeftImage: FC = () => {
  return (
    <div className="w-[200px] xl:w-[400px] mix-blend-color-dodge z-10 absolute left-0 top-0 opacity-50">
      <Image src={'/top-left-img.png'} alt="" width={400} height={400} />
    </div>
  )
}
