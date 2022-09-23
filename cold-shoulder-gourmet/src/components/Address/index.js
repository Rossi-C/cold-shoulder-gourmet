function Address({ address: { Street, City, State, Zip } }) {
    return (
        <div className="">
            <h3>{Street}</h3>
            <h3>{City}, {State} {Zip}</h3>
        </div>
    );
}

export default Address;