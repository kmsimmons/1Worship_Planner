import React from 'react';
import { Link } from 'react-router-dom'

function LandingPage() {

    return (
        <div>
            Landing Page
            <br />
            <Link to='/subscription_page'>Check out our subs</Link>
        </div>
    )
}

export default LandingPage;
