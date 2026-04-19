export default function Skill({
    logoURI, 
    altText,
    width,
    height
}: {
    logoURI: string | undefined, 
    altText: string,
    width: number,
    height: number
}) {
    return <img 
        src={logoURI} 
        width={width} 
        height={height} 
        className='
            p-6 
            w-auto 
            object-contain 
            transition-shadow 
            duration-600 
            ease-in-out 
            hover:drop-shadow-[0_0_2em_rgba(100,108,255,0.6)]' 
        alt={altText}
        loading='lazy'
        decoding='async'
    />
}