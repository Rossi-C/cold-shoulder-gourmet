import {Parallax} from "react-parallax";
import {Col, Row} from "react-bootstrap";

//TODO  get high quality images for site
function SiteHeaderImageBlock({image, strength, address}) {
   return (
       <Row className={""} style={{fontFamily: "Oswald"}}>
           <Parallax className={"text-center"} bgImageStyle={{opacity: 0.5}} bgImage={image} bgImageAlt="the cat" strength={strength}>
               <Col className={'image-children'}>
                   <Col>
                       <Row  className={'p-5 m-5 w-50 m-auto font-weight-bold'}>

                           <h1 style={{ fontSize: 88}}>
                               WELCOME TO COLD SHOULDER
                           </h1>
                           <h3 style={{fontSize: 40}}>
                               Charleston's New Go-To Sandwich Spot
                           </h3>
                           <h4 style={{fontSize: 28}} className={'my-4'}>
                               Slinging the Classics < br />
                               NO BS < br />
                               Just good food & espresso to-go < br />
                           </h4>
                           <h4 style={{fontSize: 28}} className={'mt-4'}>
                               #LimitedProduction. Miss out? Sorry Peeps...Tough Love... Catch us tomorrow #COLDSHOULDER
                           </h4>
                           <h4 style={{fontSize: 28}} className={'mt-4'}>
                               {`${address.Street} ${address.State}, ${address.Zip}`}
                           </h4>
                       </Row>
                   </Col>
               </Col>
           </Parallax>
       </Row>

   )
}

export default SiteHeaderImageBlock;