import { useState, useEffect } from 'react';
import { getBusinessInfo } from '../../api';

import SoldOut from '../SoldOut';
import Address from '../Address';
import Hours from '../Hours';


function Home() {
    const [soldOut, setSoldOut] = useState(false);
    const [address, setAddress] = useState(null);
    const [hours, setHours] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getBusinessInfo()
            .then(({ soldOut, address, hours }) => {
                if (soldOut || address || hours) {
                    setSoldOut(soldOut);
                    setAddress(address);
                    setHours(hours);
                    setLoading(false);
                }
            })
    }, [])

    return (
        <>
            <div className="Home">
                {soldOut && <SoldOut soldOut={soldOut} />}
                {address && < Address address={address} />}
                {hours && < Hours hours={hours} />}
                {loading && 'Loading...'}
            </div>
        </>
    );
}

export default Home;