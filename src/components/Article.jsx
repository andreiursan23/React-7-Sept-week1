function Article(props){
    return (
        <div className="card full-width">
            <h1 style={{ color: props.color }} onClick={props.click}>{props.title}</h1>
            <p>{props.children}</p>
        </div>
    )
}

export default Article;