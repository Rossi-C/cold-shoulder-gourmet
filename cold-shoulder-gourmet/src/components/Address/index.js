function Address({ address: { street, city, state, zip } }) {
    return (
        <div className="">
            <h3>{street}</h3>
            <h3>{city}, {state} {zip}</h3>
        </div>
    );
}

export default Address;