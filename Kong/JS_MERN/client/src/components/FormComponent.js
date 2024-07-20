/**
 * จัดเก็บหน้าตา Form
 */

import { useState } from "react";
import NavbarComponent from "./NavbarComponent";
import axios from "axios";

const FormComponent = () => {
  const [state, setState] = useState({
    title: "",
    content: "",
    author: "",
  });
  const { title, content, author } = state;

  const inputValue = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log("API URL:", process.env.REACT_APP_API);
    axios
      .post(`${process.env.REACT_APP_API}/create`, {
        title,
        content,
        author,
      })
      .then((response) => {
        alert("บันทึกข้อมูลเรียบร้อย");
      })
      .catch((err) => {
        // error จากที่เราตั้งไว้ใน controller ที่ server
        alert(err.response.data.error);
      });
  };

  return (
    <div className="container p-5">
      <NavbarComponent />
      <h1>เขียนบทความ</h1>
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label>ชื่อบทความ</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={inputValue("title")}
          />
        </div>
        <div className="form-group">
          <label>รายละเอียด</label>
          <textarea
            className="form-control"
            value={content}
            onChange={inputValue("content")}
          ></textarea>
        </div>
        <div className="form-group">
          <label>ผู้แต่ง</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={inputValue("author")}
          />
        </div>
        <br />
        <input type="submit" value="บันทึก" className="btn btn-primary" />
        <a className="btn btn-success" href="/">
          หน้าแรก
        </a>
      </form>
    </div>
  );
};

export default FormComponent;
