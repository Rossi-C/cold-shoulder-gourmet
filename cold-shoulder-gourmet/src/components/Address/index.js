function Address({ address: { street, city, state, zip } }) {
    return (
        <div className="">
            <p>{street}</p>
            <>{city}, {state} {zip}</>
        </div>
    );
}

export default Address;