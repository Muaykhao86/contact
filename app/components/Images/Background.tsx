import Image from 'next/image'
import construction from '@/public/cyberCow2.png'
 
export function Background() {
  return (
    <Image
      alt="CYBER COW"
      src={construction}
      placeholder="blur"
      quality={100}
      // fill
      style={{
        // border: '1px solid red',
        // objectFit: 'cover',
        // width: '100%',
        // height: '100%',
        objectPosition: 'top left',
        // zIndex: '10',
      }}
    />
  )
}