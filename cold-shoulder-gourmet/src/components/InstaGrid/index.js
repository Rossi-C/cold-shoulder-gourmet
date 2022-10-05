//
// import * as React from 'react';
// import withInstagramFeed from 'origen-react-instagram-feed';
// import { compose } from 'recompose';
// import {Col, Container} from "react-bootstrap";
//
//
// const InstaGrid = ({ classes, media, account, status}) => {
//     return (
//         <Container>
//             {media &&
//                 status === 'completed' &&
//                 media.map(({ displayImage, id, postLink, accessibilityCaption }) => (
//                     <Col xs={12} sm={6} md={4} key={id || displayImage}>
//                         <a href={postLink || `https://www.instagram.com/${account}`}>
//                                 <img
//                                     src={displayImage}
//                                     alt={accessibilityCaption || 'Instagram picture'}
//                                     className={classes.image}
//                                 />
//                         </a>
//                     </Col>
//                 ))}
//             {status === 'loading' && <p>loading...</p>}
//             {status === 'failed' && <p>Check instagram here</p>}
//         </Container>
//     );
// };
//
// export default compose(
//     withInstagramFeed,
// )(InstaGrid);