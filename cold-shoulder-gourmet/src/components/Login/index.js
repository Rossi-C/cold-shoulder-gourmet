import {auth, googleProvider} from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import {Button, Col} from "react-bootstrap";
import {AiOutlineGoogle} from "react-icons/ai";



function Login({determineIfAdmin}) {

    const googleLogin = async () => {
        try {
            const {user} = await signInWithPopup(auth, googleProvider)
            determineIfAdmin(user.email);
        } catch (e) {
            throw new Error(e)
        }
    }

    return (
        <Col className={'p-4'}>
            <h1 className={'my-5 text-center'}>You must log in to use this page!</h1>
            <Button
                style={{color: 'white', borderWidth: 1, borderColor: 'white'}}
                className={'m-auto'}
                onClick={() => googleLogin()}
            >
                Login With Google  <AiOutlineGoogle style={{fontSize: 30}}/>
            </Button>
        </Col>

    );
}

export default Login;
