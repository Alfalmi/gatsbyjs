import { Link } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            
            <h1>About Me</h1>
            <p>I currently learning</p>
            <p><Link to="/contact">Want to work with me? Reach out</Link></p>
            
        </Layout>
    )
}

export default AboutPage
