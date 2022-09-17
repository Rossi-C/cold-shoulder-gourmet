import { useState, useEffect } from 'react';
import { getBusinessInfo } from '../../api';

function SoldOut() {
    const [soldOut, setSoldOut] = useState(false);
    useEffect(() => {
        getBusinessInfo();
    }, [])

    return (
        <div className="">
            {soldOut ? 'Sold Out' : 'Sandos in Stock'}

            <button
                onClick={() => { setSoldOut(!soldOut) }}
            >
                Update Sold Out
            </button>
        </div>
    );
}

export default SoldOut;