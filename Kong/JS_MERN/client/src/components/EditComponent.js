import { useEffect, useState } from "react";
import NavbarComponent from "./NavbarComponent";
import axios from "axios";
import Swal from "sweetalert2";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditComponent = (props) => {
  const [state, setState] = useState({
    title: "",
    author: "",
    slug: "",
  });
  const { title, author, slug } = state;
  const [content, setContent] = useState("");

  const submitContent = (event) => {
    setContent(event);
  };

  const inputValue = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log("API URL:", process.env.REACT_APP_API);
    axios
      .put(`${process.env.REACT_APP_API}/blog/${slug}`, {
        title,
        content,
        author,
      })
      .then((response) => {
        Swal.fire({
          title: "แจ้งเตือน",
          text: "อัพเดตบทความเรียบร้อย",
          icon: "success",
        });
        const { title, content, author, slug } = response.data;
        setState({ ...state, title, author, slug });
        setContent(content);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const showUpdateForm = () => (
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
        <ReactQuill
          value={content}
          onChange={submitContent}
          theme="snow"
          className="pb-5 mb-3"
          style={{ border: "1px solid #666" }}
        />
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
      <input type="submit" value="อัพเดต" className="btn btn-primary" />
    </form>
  );

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/blog/${props.match.params.slug}`)
      .then((response) => {
        const { title, content, author, slug } = response.data;
        setState({ ...state, title, author, slug });
        setContent(content);
      })
      .catch((err) => alert(err));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container p-5">
      <NavbarComponent />
      <h1>แก้ไขบทความ</h1>
      {showUpdateForm()}
    </div>
  );
};

export default EditComponent;
