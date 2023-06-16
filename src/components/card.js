import React, { useState } from "react";
import Col from "react-bootstrap/Col";

const Card = (props) => {
  const { userId, title, body } = props;
  const postDataa = "";
  const [postData, setPostData] = useState(postDataa);
  const [isPostVisible, setIsPostVisible] = useState(false);

  const seeUserPost = (data) => {
    let newData = data.body;
    isPostVisible === false ? setPostData(newData) : setPostData(postDataa);
    setIsPostVisible(!isPostVisible);
  };

  // console.log(postData.length);
  return (
    <Col
      style={{
        border: "1px solid black",
        borderRadius: "10px",
        marginTop: "30px",
        marginLeft: "10px",
        padding: "10px",
      }}
    >
      <h5>UserId : {userId}</h5>
      <p>Title : {title}</p>
      <p>Post: {postData}</p>
      <button className="btn btn-primary" onClick={() => seeUserPost({ body })}>
        {isPostVisible === false ? "See Post" : "Hide Post"}
      </button>
    </Col>
  );
};

export default Card;
