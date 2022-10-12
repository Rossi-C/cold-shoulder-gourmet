
function SoldOut({ soldOut }) {
    return (
        <div className="m-auto w-100" >
            <h1 className={"text-center m-5"} style={{fontFamily: "Stardos Stencil",}}>
                {
                    soldOut ?
                    'We are currently sold out, check back tomorrow!' :
                    'Sandos in Stock'
                }
            </h1>
            <h3  style={{fontFamily: "Cedarville Cursive",}} className={"text-center m-5"}>
                Don't be mad... Be Early
            </h3>
        </div>
    );
}

export default SoldOut;