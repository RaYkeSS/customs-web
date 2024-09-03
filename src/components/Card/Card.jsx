export default function Card({
    imgUrl,
    title,
    text,
}) {

    return (
        <div>
            <img alt={title} src={imgUrl}></img>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}