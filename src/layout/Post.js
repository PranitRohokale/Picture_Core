import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import pic from '../download.png';
import './styles.css';

const Post = (props) => {
  return (
    <Card className="cardbox" style={{ width: '80%',height: '110%', transition: '0.3s ease-in', borderRadius: '8px', boxShadow: '1px 1px 1px 1px #dbd7d7'}}>
    <Card.Img className="icon_img" variant="top" alt="image" src={props.image} />
    <Card.Body>
      <Card.Title> {props.desc}</Card.Title>
      <Card.Text>
        {props.desc_text}
      </Card.Text>  
      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
  </Card>
  );
};

export default Post;