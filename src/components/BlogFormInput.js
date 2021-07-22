import React from 'react'

const BlogFormInput = ({ title, value, handleInputChange }) => {
  return (
    <div>
      <div>
        {title}
        <input value={value} type='text' onChange={handleInputChange} />
      </div>
    </div>
  )
}

export default BlogFormInput
