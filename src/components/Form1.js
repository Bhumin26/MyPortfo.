import "./formStyles.css"


import React from 'react'

export const Form1 = () => {
  return (
    <form action="">
      <div className="form">

        <input type="text" placeholder="Your Name "></input>

        <input type="email" placeholder="Email"></input>

        <input type="text" placeholder="Subject"></input>

        <textarea rows={6} placeholder="Start your message here ..." />
        <button className="btn">Submit</button>
      </div>
    </form>

  )
}
export default Form1;