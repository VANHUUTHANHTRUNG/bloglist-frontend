import React, { useState } from 'react'
const Blog = ({ blog, handleLike }) => {
  const [detailView, setDetailView] = useState(false)

  const showWhenDetail = { display: detailView ? '' : 'none' }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }

  return (
    <div style={blogStyle}>
      <div>
        {blog.title} {blog.author}
        <button onClick={() => setDetailView(!detailView)}>
          {detailView ? 'hide' : 'view'}
        </button>
      </div>
      <div style={showWhenDetail}>
        <p>
          <a href={blog.url}>{blog.url}</a>
        </p>
        <p>
          likes : {blog.likes}
          <button type='button' onClick={() => handleLike(blog)}>
            like
          </button>
        </p>
        <p>posted here by {blog.user.username} </p>
      </div>
    </div>
  )
}

export default Blog
