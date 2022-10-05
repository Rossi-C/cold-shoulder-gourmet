import {Button, Col, Container, Row, Spinner} from "react-bootstrap";
import {useState} from "react";

//TODO  Get about us from craig
function ContactUs() {
    const waitFor = (x) =>
        new Promise((resolve) => setTimeout(resolve, x));
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [info, setInfo] = useState('')
    const [loading, setLoading] = useState(false)
    const [sent, setSent] = useState(false)

    const handleSubmit = async () => {
        setLoading(true)
        // TODO Change email to coldshoulder
        const message = {
            to: 'mattdpalumbo@gmail.com',
            message: {
                html: `<h1>Name: ${name}</h1> <h1>Phone: ${phone}</h1> <h1>Email: ${email}</h1> <p>${info}</p>`
            }
        }
        console.log(message)
        await waitFor(3000)
        setLoading(false)
        setSent(true)
    }

    return (
        !sent ?
            !loading ? <Container style={{fontSize: 24}} className={'w-50'}>
                    <Col>
                        <Row className={'m-2'}>
                            <label>
                                Email Address
                            </label>
                            <input value={email} onChange={e => setEmail(e.target.value)}/>
                        </Row>
                        <Row className={'m-2'}>
                            <label>
                                Name
                            </label>
                            <input value={name} onChange={e => setName(e.target.value)}/>
                        </Row>
                        <Row className={'m-2'}>
                            <label>
                                Phone Number
                            </label>
                            <input value={phone} onChange={e => setPhone(e.target.value)}/>
                        </Row>

                        <Row className={'m-2'}>
                            <label>
                                What can we do/answer for you?
                            </label>
                            <textarea value={info} onChange={e => setInfo(e.target.value)}/>
                        </Row>
                    </Col>


                    <Button variant="outline-dark" style={{color: 'white', borderColor: 'white', borderWidth: 1}}
                            className={"m-2"}
                            onClick={(e) => {
                                e.preventDefault()
                                handleSubmit()
                            }}
                    >
                        Submit
                    </Button>
                </Container>
                : <Row>
                    <Spinner variant={"light"} className={'m-auto'} animation={'border'}/>
                </Row> :
            <h1 className={'m-auto text-center'}>
                Thank you for contacting us, we'll reach out as soon as we can!
            </h1>
    );
}

export default ContactUs;