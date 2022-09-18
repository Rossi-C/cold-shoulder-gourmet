function SoldOut({ soldOut }) {
    return (
        <div className="mt-5 mb-3">
            {soldOut ? 'Sold Out' : 'Sandos in Stock'}
        </div>
    );
}

export default SoldOut;