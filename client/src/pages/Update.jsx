import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const bookdId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/books/" + bookdId, book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(book);
  return (
    <div className="form">
      <h1>Update the Book</h1>
      <input
        type="text"
        placeholder="title"
        name="title"
        id=""
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="desc"
        name="description"
        id=""
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="price"
        name="price"
        id=""
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="cover"
        name="cover"
        id=""
        onChange={handleChange}
      />

      <button className="formButton" onClick={handleClick}>
        Update
      </button>
    </div>
  );
};

export default Update;
