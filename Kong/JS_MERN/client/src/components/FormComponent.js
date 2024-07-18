/**
 * จัดเก็บหน้าตา Form
 */

const FormComponent = () => {
  return (
    <div className="container p-5">
      <h1>เขียนบทความ</h1>
      <form>
        <div className="form-group">
          <label>ชื่อบทความ</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>รายละเอียด</label>
          <textarea className="form-control"></textarea>
        </div>
        <div className="form-group">
          <label>ผู้แต่ง</label>
          <input type="text" className="form-control" />
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
