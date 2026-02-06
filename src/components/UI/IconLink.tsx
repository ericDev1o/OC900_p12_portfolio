type IconLinkProps = {
  href: string
  src: string | undefined
  alt: string
  width: number
  height: number
  p?: number
  h?: number
}

export function IconLink({
  href,
  src,
  alt,
  width,
  height,
  p,
  h
}: IconLinkProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='
        focus-visible:outline-2
        focus-visible:outline-blue-500
        hover:drop-shadow-[0_0_2em_rgba(100,108,255,0.6)]
        focus-visible:drop-shadow-[0_0_2em_rgba(100,108,255,0.6)]
      '
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`
          p-${p}
          h-${h}
          transition-shadow
          duration-600
          ease-in-out
        `}
        loading='lazy'
      />
    </a>
  )
}