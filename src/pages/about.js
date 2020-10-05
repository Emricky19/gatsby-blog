import React from "react"
import { Link } from "gatsby"
import Footer from '../components/footer'

const AboutPage = () => {
  return (
    <div style={{ color: `teal` }}>
      <h1>About Me</h1>
      <p>I am full time freelancer on Fiverr.</p>
      <p><Link to='/contact'>Want to work with me? Reach out.</Link></p>
      <Footer />
    </div>
  )
}
export default AboutPage