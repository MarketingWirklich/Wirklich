type ImageProps = {

    source?: string;
    alt?: string;
    classes?: string;
}


export function Image({source, alt, classes}: ImageProps) {
    return (
        <img className={classes} src={source} alt={alt}></img>
    )
}