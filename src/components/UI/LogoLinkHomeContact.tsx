import { IconLink } from './IconLink';

export default function LogoLinkHomeContact(
    {
        href,
        src,
        altText,
        classNameImageWidthHeight
    }:
    {
        href: string,
        src: string | undefined,
        altText: string,
        classNameImageWidthHeight: string
    }
){
    return <IconLink
        href={ href }
        src={ src }
        alt={ altText }
        classNameA='p-6'
        classNameImgWidthHeight={ classNameImageWidthHeight }
    />
}