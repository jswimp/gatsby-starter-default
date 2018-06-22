import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>music for friendly snobs</h1>
    <p>hope you like it :)</p>
    <p>Now go click on a song on page 2.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
