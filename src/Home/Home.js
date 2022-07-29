import './Home.css'
import BlogPost from '../components/Blog/BlogPost'
import Map from '../components/Blog/map.jpeg'
const Home = () =>{
    return(
        <body>
            <header className={'header-container'}>
                <h2>Recovery Discovery</h2>
            </header>

            <h2 className={'blog-title'}>Blog</h2>
            <section className={'body-content'}>
                <div className={'blogpost-container'}>
                <BlogPost/>
                    <BlogPost/>
                    <BlogPost/>
                    <BlogPost/>
                </div>
            </section>
        </body>
    )
}
export default Home;