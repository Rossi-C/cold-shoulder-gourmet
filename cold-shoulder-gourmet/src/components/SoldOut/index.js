function SoldOut({ soldOut }) {
    return (
        <div className="">
            {soldOut ? 'Sold Out' : 'Sandos in Stock'}
        </div>
    );
}

export default SoldOut;