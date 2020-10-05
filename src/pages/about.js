import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div style={{ color: `teal` }}>
      <h1>About Me</h1>
      <p>I am full time freelancer on Fiverr.</p>
      <p><Link to='/contact'>Want to work with me? Reach out.</Link></p>
    </div>
  )
}
export default AboutPage