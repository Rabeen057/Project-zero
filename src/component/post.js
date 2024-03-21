import React, { useState, useEffect } from "react";
import axios from "axios";

function Post() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post(
        "https://jsonplaceholder.typicode.com/posts",
        JSON.stringify({
          title: "foo",
          body: "bar",
          userId: 1,
        })
      )

      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("error fetching data", error);
      });
  }, []);

  const handleChange = () => {
    console.log(data);
  };

  return (
    <div>
      <h1>
        <button onClick={handleChange}>Post Data</button>
      </h1>
    </div>
  );
}

export default Post;
