/**
 * จัดเก็บหน้าตา Form
 */

import { useState } from "react";
import NavbarComponent from "./NavbarComponent";

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

  return (
    <div className="container p-5">
      <NavbarComponent />
      <h1>เขียนบทความ</h1>
      <form>
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
