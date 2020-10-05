import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact Me.</h1>
      <p>
        The bes way to react me is via{" "}
        <Link to="https://twitter.com/Richard_Emrick">@Richard_Emrick</Link> on
        twitter
      </p>
    </Layout>
  )
}

export default ContactPage
