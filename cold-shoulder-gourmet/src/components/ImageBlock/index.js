import {Parallax} from "react-parallax";
import {Col, Row} from "react-bootstrap";

//TODO  get high quality images for site
function ImageBlock({image, icon: Icon, caption, strength, smallCaption}) {
   return (
       <Row className={""}>
           <Parallax className={"text-center"} bgImage={image} bgImageAlt="the cat" strength={strength}>
               <Col >
                   <Row style={{ height: 250 }}/>
                   <Col  style={{ height: '33%' }}>
                       <Row className={"m-0 justify-content-between text-dark"}>
                           <Col>
                               <Icon />
                           </Col>
                           <Col>
                               <Icon />
                           </Col>
                       </Row>
                       <Row  className={'p-5 m-5 w-50 m-auto font-weight-bold'} style={{fontFamily: 'Stardos Stencil'}}>
                           <h3 style={{letterSpacing:"0.25em"}}>
                               {smallCaption}
                           </h3>
                           <h1 style={{letterSpacing:"0.15em"}}>
                               {caption}
                           </h1>
                       </Row>
                       <Row className={" m-0 justify-content-betweenn text-dark"}>
                           <Col>
                               <Icon />
                           </Col>
                           <Col>
                               <Icon />
                           </Col>
                       </Row>
                   </Col>
                   <Row style={{ height: 250 }}/>
               </Col>
           </Parallax>
       </Row>

   )
}

export default ImageBlock;