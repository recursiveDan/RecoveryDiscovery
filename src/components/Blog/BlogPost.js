import './BlogPost.css'
import Map from './map.jpeg'

const BlogPost = () =>{
    return(

        <div className={'blogpost'}>
            <div className={'blogpost-title'}>
            <h2>Recovery On Your Time</h2>
            </div>

            <img src={Map} alt={"map"} className={'blog-image'}/>
            <div>
            <p>lorem ipsem yadayadayada</p>
            </div>
        </div>
    )
}
export default BlogPost;