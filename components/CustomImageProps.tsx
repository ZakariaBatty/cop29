import Image, { ImageProps } from 'next/image'

type CustomImageProps = Omit<ImageProps, 'src'> & {
  src: string;
}

export default function CustomImage({ src, alt, ...props }: CustomImageProps) {
  const fullSrc = src.startsWith('http') ? src : `/cop29${src}`
  return (
    <Image
      src={fullSrc}
      alt={alt}
      {...props}
    />
  )
}