import Image from 'next/image'
import message from '@/public/newMsg.jpeg'
 
export function MessageImage() {
  return (
    <Image
      alt="Message Me"
      src={message}
      placeholder="blur"
      quality={100}
      fill
      style={{
        // display: 'flex',
        // objectFit: 'contain',
        // overflow: 'hidden',
        // objectPosition: 'top',
        // width: '400px',
        // height: '400px',
        // padding: '20px',
        // borderRadius: '4%',
      }}
    />
  )
}