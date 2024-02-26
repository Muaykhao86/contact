import Image from 'next/image'
import construction from '@/public/stars3.png'
 
export function Stars() {
  return (
    <Image
      alt="Under Construction"
      src={construction}
      placeholder="blur"
      quality={100}
      // fill
      style={{
        border: '1px solid red',
        position: 'absolute',
        // border: '2px solid rgb(0, 255, 38)',
        // width: '150%',
        // height: '150%',
        // bottom: 0,
        // left:0,
        // objectFit: 'cover',
        // objectPosition: 'top right',
        zIndex: '1',
      }}
    />
  )
}