import React, { useState } from 'react'

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] =useState('');

    const handleTitle = (e)=>{
        setTitle(e.target.value)
    }

    const handleContent = (e)=>{
        setContent(e.target.value)
    }
    const handleCategory = (e)=>{
        setCategory(e.target.value)
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const data = {"title": title, "content": content, "category": category};
        try {
            const response = await fetch('http://localhost:3000/posts',{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
              }
            );
            if (response.ok) {
              const data = await response.json();
              window.location = "/";
            }
            else{
                throw new Error('cannot add')
            }
          } catch (error) {
            console.log(error.message);
          }


    }

  return (
    <>
    <div>
        <button>Content suggestion</button>
    </div>
    <div className='add'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type='text' name='title' id='title' value={title} required placeholder='title' onChange={handleTitle}/>
            <label htmlFor="content">Content</label>
            <textarea name='content' id='content' value={content} required placeholder='text' maxLength='7000' onChange={handleContent}/>
            <label htmlFor="categories">Category</label>
            <select name='categories' id='categories' onSelect={handleCategory}>
                <option value="">Select</option>
                <option value>hello</option>
            </select>
            <br />
            <br />
            <label htmlFor='image'>Prompt</label>
            <input type='text' name='prompt' id='image' />
            <br />
    
            <button>Generate Image</button>
            <br />
            <br />
            <button type='submit'>Post</button>
        </form>
    </div>
    </>
  )
}

export default AddPost