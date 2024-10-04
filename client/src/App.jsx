import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import BlogLists from './BlogLists'
import Post from './Post'
import AddPost from './AddPost'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='app'>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/:id"></Link>
          </li>
          <li>
            <Link to="/add">Add post</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<BlogLists />} />
        <Route path="/:id" element={<Post />} />
        <Route path="/add" element={<AddPost />} />
      </Routes>
    </div>
  );
}

export default App
