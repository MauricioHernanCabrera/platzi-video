import React from 'react'
import Category from './category'

function Categories (props) {
  return (
    <div>
    {
      props.categories.map((category) => {
        return <Category key={category.id} {...category}/>
      })
    }
    </div>
  )
}

export default Categories