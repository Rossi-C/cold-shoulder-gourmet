import React from 'react'
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

const token ="IGQVJXdXVDMlRiZAzQ3MjFIS2VUa2I2bGJwZAEhvcVh2NVFmbTBLV05yREU2bkttOGJ0enJzU0huNVZAEY3ZAYTzc0NHBnUE53bHk3SEZATM094aTVyQXVPWUYtTDIxZAk9VQ21ka0JxZA0hFdzYxX2tYeGJIZAwZDZD"

const InstaGrid = () => {
    return <InstagramFeed token={token}  counter="24"/>
}

export default InstaGrid

