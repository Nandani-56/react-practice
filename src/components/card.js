import React, { useState } from "react";
import Col from "react-bootstrap/Col";

const Card = (props) => {
  const { userId, title, body } = props;
  const { postData, setPostData } = useState("");
  const seeUserPost = (data) => {
    let newData = data.body;
    console.log(newData.length);
    // setPostData(newData);
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
      {/* <p>Post: {postData}</p> */}
      <button className="btn btn-primary" onClick={() => seeUserPost({ body })}>
        See Post
      </button>
      {/* <p> {postData.length > 0 ? "true" : " false"}</p> */}
    </Col>
  );
};

export default Card;
