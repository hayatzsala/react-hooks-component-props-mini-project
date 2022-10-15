import Article from "./Article"
export default function ArticleList(props){
    return(
        <main>
            {props.posts.map(x=>
                <Article key={x.id} title={x.title} date={x.date} preview={x.preview}/>)}
        </main>
    )
}