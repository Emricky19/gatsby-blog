import React from "react"
import { Link } from "gatsby"
import Footer from '../components/footer'

const HomePage = () => {
  return (
    <div>
      <h1>Hello.</h1>
      <p>I'm Ademola, a fullstack developer living in beautiful Nigeria.</p>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
      <Footer />
    </div>
  )
}

export default HomePage
