import React from 'react';
import { Link } from 'react-router-dom';
const Delpatient = () => {
  return (  
    <>
     <div className="confirmation-message">
  <h1>Delete Patients</h1>
  <p>Are You Sure You Want To Delete This Records</p>
  <p>This Action Cannot Be Undone</p>
  <div className="confirmation-buttons">
   <Link to={"/patient"}><button id="cancel-btn">Cancel</button></Link>
    <button id="delete-btn">Delete</button>
  </div>
</div>

</>
    
  );
};

export default Delpatient;