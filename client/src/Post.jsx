import { useEffect , useState} from 'react';
import { useParams } from 'react-router-dom'

const Posts = () => {
  const [post, setPost] = useState([]);
  const [summary, setSummary] = useState({})
  const {id} = useParams();

  const getPost = async () => {
    try {
      const response = await fetch(`http://localhost:3000/posts/${id}`);
      const data = await response.json();
      setPost(data)
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClick = async()=>{
    try{
    const response = await fetch('http://localhost:3000/api',{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({"id": id})
    }
  );
  if (response.ok) {
    const data = await response.json()
    setSummary(data)
  }
  else{
      throw new Error('analys the content')
  }
}
 catch (error) {
  console.log(error.message);

   };
  }

  const deletePost = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/posts/:{id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        const data = await response.json();
        window.location.href = "/";
      } else {
        throw new error("cannot delete");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
    
  

  useEffect(()=>{
    getPost()
  }, [])

  return (
    <>
         
         <div>
          <form>
            <label htmlFor='language'>Language</label>
            <select name='language' id='language'>
              <option>Select</option>
              <option value='Arabic' >Arabic</option>
              <option value='French' >French</option>
            </select>
            <button>Translate</button>
          </form>
          <br />
          <button>Listen</button>
         </div>
         <div>
            <div>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          </div>
          <div>
            <button onClick={deletePost}>Delete</button>
            <button onClick={handleClick}>Summarize</button>
            {summary ? <p>{summary.summary}</p> : <p>No summary available</p>}
          </div>
         
      
    </>
  )
}

export default Posts