import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/260MLsqtWVA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    
  <p><Link to="/">Go back to the homepage</Link></p>
 
  <form name="new music fridays - subscribe" womp>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
  
)

export default SecondPage
