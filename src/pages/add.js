import React from 'react';
import { Link } from 'react-router-dom';
const Add = () => {
  return (
    <div className="custom-modal" id="addEmployeeModal">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Add doctor</h2>
          
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" required="" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" required="" />
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea
              className="form-control"
              required=""
              defaultValue={""}
            />
          </div>
          <div className="form-group">
            <label>specialty</label>
            <input type="text" className="form-control" required="" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="text" className="form-control" required="" />
          </div>
        </div>
       
        <div className="modal-footer">
          <Link to={"/doctor"} className="btn">
          <button
            type="button"
            className="btn btn-secondary"
           
          >
            Cancel
          </button></Link>
          <button type="button" className="btn btn-success">
           Add doctor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;
