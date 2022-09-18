function Address({ address: { street, city, state, zip } }) {
    return (
        <div className="">
            <h5>{street}</h5>
            <h5>{city}, {state} {zip}</h5>
        </div>
    );
}

export default Address;