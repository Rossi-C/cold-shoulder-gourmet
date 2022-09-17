function Hours({ hours }) {
    return (
        <div className="">
            <p>Sunday - {hours.Sunday}</p>
            <p>Monday - {hours.Monday}</p>
            <p>Tuesday - {hours.Tuesday}</p>
            <p>Wednesday - {hours.Wednesday}</p>
            <p>Thursday - {hours.Thursday}</p>
            <p>Friday - {hours.Friday}</p>
            <p>Saturday - {hours.Saturday}</p>
        </div>
    );
}

export default Hours;