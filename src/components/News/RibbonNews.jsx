import { Post } from "../Profile/Posts/ribbonPosts";
import s from "./RibbonNews.module.css"


const News = (props) => {
    return (
        <div className={s.container}>
            {props.news.textData.map(post => <Post avatar={post.avatar} date={post.date} time={post.time} message={post.message} img={post.img}/>)}
        </div>
        
    )
}
export default News;