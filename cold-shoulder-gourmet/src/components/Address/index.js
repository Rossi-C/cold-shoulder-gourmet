
// TODO RENAME
function Address({ address: { Street, City, State, Zip }, phone }) {
    return (
        <div className="my-4">
            <Col>
                <p className={"link-light"} >
                    <p>{Street}</p>
                    <p>{City}, {State} {Zip}</p>
                    <p>{phone}</p>
                </p>

                <a className={"link-light"} href="https://www.instagram.com/coldshouldergourmet/" >
                    <AiFillInstagram style={{fontSize: 30}}/>
                </a>
                <a className={"link-light"} href="https://www.yelp.com/biz/cold-shoulder-gourmet-charleston" >
                    <FaYelp style={{fontSize: 30}}/>
                </a>
                <a className={"link-light"} href="https://goo.gl/maps/LtASenwskeKSNuBV9" >
                    <AiOutlineGoogle style={{fontSize: 30}}/>
                </a>
            </Col>
        </div>
    );
}

export default Address;