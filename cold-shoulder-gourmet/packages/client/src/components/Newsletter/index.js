import {Button, Col, Row} from "react-bootstrap";
import {useState} from "react";
import {updateNewsLetter} from "../../api";

//TODO  Get about us from craig
function Newsletter() {
    const [sent, setSent] = useState(false)
    const [email, setEmail] = useState('')
    const handleSubmit = async () => {
        await updateNewsLetter(email)
        setSent(true)
    }

    return (
        <Row>
            {
                !sent ?
                    <>
                        <Row>
                            <Col style={{fontSize: 14}}>
                                <label>Sign up for our newsletter: </label>
                            </Col>
                            <Col>
                                <input className={'p-2'} placeholder={'Email address'} value={email}
                                       onChange={(e) => setEmail(e.target.value)}/>
                            </Col>
                            <Col>
                                <Button size={"sm"} variant="outline-dark"
                                        style={{color: 'white', borderColor: 'white', borderWidth: 1}}
                                        className={"m-auto"}
                                        onClick={async (e) => {
                                            e.preventDefault()
                                            await handleSubmit()
                                        }}
                                >
                                    Sign Up!
                                </Button>
                            </Col>

                        </Row>
                    </> :
                    <p>Thanks for signing up for our newsletter!</p>
            }

        </Row>
    );
}

export default Newsletter;