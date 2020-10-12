import React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout'

const HomePage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <p>I'm Ademola, a fullstack developer living in beautiful Nigeria.</p>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default HomePage
