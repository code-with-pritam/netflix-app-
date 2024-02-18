import Featured from "../../component/featured/Featured";
import List from "../../component/list/List";
import Navbar from "../../component/navbar/Navbar";
import axios from "axios";
import "./home.scss";
import React, { useEffect, useState } from "react";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M2ZjNTliODhkYTE2YWE2ODBiMGQ3YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5OTM4MjI3MywiZXhwIjoxNjk5ODE0MjczfQ.ASH-gKM31FxFBFHRI5IbTtkz3AFAtDNijpAT0IdnU1I",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type}  />
      {lists.map((list,index) => (
        <List key={index} list={list} />
      ))}
    </div>
  );
};

export default Home;
