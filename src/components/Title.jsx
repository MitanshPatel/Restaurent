import React from 'react'
import titlecss from '../astyles/title.module.css'

function Title() {
  return (
    <div className={titlecss.title}>
      <h1 className={titlecss.titleHead} >La Cuisine Magique</h1>
      <p className={titlecss.titleSub}>Exquisite French cuisine in an elegant ambience.</p>
    </div>
  )
}

export default Title
