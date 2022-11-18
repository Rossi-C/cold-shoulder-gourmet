import React from 'react'
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'
import {Spinner} from "react-bootstrap";

const InstaGrid = ({igKey}) => {
    return(
            igKey ? <InstagramFeed token={igKey}  counter="24"/> :
                <Spinner className="m-auto" animation="border" role="status" variant={"light"}>
                    <span className="visually-hidden">Loading Instagram...</span>
                </Spinner>

    )
}

export default InstaGrid

