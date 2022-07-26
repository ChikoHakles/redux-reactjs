import "../styles/card.css"

function Card(props) {
    return (
        <div className="card">
            <p className="card-title">{props.title}</p>
            <img className="card-img" src={`/${props.image}`} alt="gambar"/>
            <p className="card-desc">{props.desc}</p>
        </div>
    )
}

export default Card