import React, { useState } from 'react'
import BlogFormInput from './BlogFormInput'

const BlogForm = ({ handleFormSubmit }) => {
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  function resetForm() {
    setAuthor('')
    setTitle('')
    setUrl('')
  }

  async function onSubmit(event) {
    event.preventDefault()
    const newObject = { author, title, url }
    await handleFormSubmit(newObject)
    resetForm()
  }

  return (
    <div>
      <h2>Create new</h2>
      <form onSubmit={onSubmit}>
        <BlogFormInput
          title='Author'
          value={author}
          handleInputChange={({ target }) => setAuthor(target.value)}
        />
        <BlogFormInput
          title='Title'
          value={title}
          handleInputChange={({ target }) => setTitle(target.value)}
        />
        <BlogFormInput
          title='Url'
          value={url}
          handleInputChange={({ target }) => setUrl(target.value)}
        />
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default BlogForm
