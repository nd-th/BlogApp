import {useEffect, useState} from 'react'
import './App.css'


const BlogLists = () => {
    const [posts, setPosts] = useState([])

    const getPosts = async() =>{
        try {
            const response = await fetch("http://localhost:3000/posts");
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])
  return (
    <div className='home'>
        {/* <p>{JSON.stringify(posts)}</p> */}
      
        {posts.map((post) => {
          return (
            <div key={post.id} style={{backgroundColor: post.sentiment}}>
              <a href={`http://localhost:5173/${post.id}`}>
                {post.title}
              </a>
            </div>
          );
        })}
      
      
    </div>
  );
}

export default BlogLists