import { Link } from "react-router-dom"
import React from "react"

const Abo = ()=>{
    return (
      <>
      <div className="details">
       <div className="recentOrders">
         <div className="cardHeader">
           <h2>Manage Doctors</h2>
            
           <Link to={"/add"} className="btn"> add new Doctor</Link>  
           <Link to={"/"} className="btn"> back home</Link>  
         </div>
         <table>
           <thead>
             <tr>
               <th><span className="custom-checkbox">
     <input type="checkbox" id="selectAll" />
     <label htmlFor="selectAll" />
   </span>
   </th>
             <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                 
                  <th>Phone</th>
                  <th>specialty</th>
             </tr>
           </thead>
           <tbody>
            
           
           </tbody>
         </table>
       </div>
       </div>
       
       </>
    )

}
export default Abo