import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const FetchPractice = () => {
  const [postData, setPostData] = useState([]);
  const getDataFromDB = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );

    let data = response.data;
    setPostData(data);
  };
  useEffect(() => {
    getDataFromDB();
  }, []);

  // console.log(postData);
  // show dynamic data
  return (
    <div>
      <h4>Fetch API using useEffect </h4>
      <Container>
        <Row md={5} style={{ justifyContent: "center" }}>
          {postData.map((post) => {
            return (
              <Card userId={post.userId} title={post.title} body={post.body} />
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default FetchPractice;
