type IconLinkProps = {
  href: string
  src: string | undefined
  alt: string
  classNameImgWidthHeight: string
  classNameA?: string
  srcSet?: string
}

export function IconLink({
  href,
  src,
  alt,
  classNameImgWidthHeight='',
  classNameA='',
  srcSet=''
}: IconLinkProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`
        focus-visible:outline-2
        focus-visible:outline-blue-500
        hover:drop-shadow-[0_0_2em_rgba(100,108,255,0.6)]
        focus-visible:drop-shadow-[0_0_2em_rgba(100,108,255,0.6)]
        focus-visible:ring-4 
        focus-visible:ring-blue-300 
        focus-visible:ring-offset-2
        ${classNameA}
      `}
    >
      <img
        src={src}
        srcSet={srcSet}
        alt={alt}
        className={`
          transition-shadow
          duration-600
          ease-in-out 
          ${classNameImgWidthHeight}
        `}
        loading='lazy'
        decoding='async'
      />
    </a>
  )
}