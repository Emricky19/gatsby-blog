import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'

const ContactPage = () => {
    return (
        <div>
            <h1>Contact Me.</h1>
            <p>The bes way to react me is via <Link to="https://twitter.com/Richard_Emrick">@Richard_Emrick</Link> on twitter</p>
            <Footer />
        </div>
    )
}

export default ContactPage
