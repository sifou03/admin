import { Link } from "react-router-dom"
const Abb = ()=>{
    return(
    <>
   <div className="details">
    <div className="recentOrders">
      <div className="cardHeader">
        <h2>Manage patients</h2>
         
        <Link to={"/delete"} className="btn"> Delete</Link>  
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
							 <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
        <th> <span className="custom-checkbox">
  <input type="checkbox" id="selectAll" />
  <label htmlFor="selectAll" />
</span>

               </th>
            <td>...................</td>
            <td>.........@gmail.com</td>
            <td>...................</td>
            <td>+213 **************</td>
            <td>
            <Link to={"/Edt"} className="btn"><button>Edit</button> </Link> 
             <Link to= {"/delete"}> <button>Delete</button></Link>

            </td>
          </tr>
          <tr>
        <th> <span className="custom-checkbox">
  <input type="checkbox" id="selectAll" />
  <label htmlFor="selectAll" />
</span>

               </th>
            <td>...................</td>
            <td>.........@gmail.com</td>
            <td>...................</td>
            <td>+213 **************</td>
            <td>
            <Link to={"/Edt"} className="btn"><button>Edit</button> </Link> 
             <Link to= {"/delete"}> <button>Delete</button></Link>

            </td>
          </tr>
          <tr>
        <th> <span className="custom-checkbox">
  <input type="checkbox" id="selectAll" />
  <label htmlFor="selectAll" />
</span>

               </th>
            <td>...................</td>
            <td>.........@gmail.com</td>
            <td>...................</td>
            <td>+213 **************</td>
            <td>
            <Link to={"/Edt"} className="btn"><button>Edit</button> </Link> 
             <Link to= {"/delete"}> <button>Delete</button></Link>

            </td>
          </tr>
          <tr>
        <th> <span className="custom-checkbox">
  <input type="checkbox" id="selectAll" />
  <label htmlFor="selectAll" />
</span>

               </th>
            <td>...................</td>
            <td>.........@gmail.com</td>
            <td>...................</td>
            <td>+213 **************</td>
            <td>
            <Link to={"/Edt"} className="btn"><button>Edit</button> </Link> 
             <Link to= {"/delete"}> <button>Delete</button></Link>

            </td>
          </tr>
          <tr>
        <th> <span className="custom-checkbox">
  <input type="checkbox" id="selectAll" />
  <label htmlFor="selectAll" />
</span>

               </th>
            <td>...................</td>
            <td>.........@gmail.com</td>
            <td>...................</td>
            <td>+213 **************</td>
            <td>
            <Link to={"/Edt"} className="btn"><button>Edit</button> </Link> 
             <Link to= {"/delete"}> <button>Delete</button></Link>

            </td>
          </tr>
          <tr>
        <th> <span className="custom-checkbox">
  <input type="checkbox" id="selectAll" />
  <label htmlFor="selectAll" />
</span>

               </th>
            <td>...................</td>
            <td>.........@gmail.com</td>
            <td>...................</td>
            <td>+213 **************</td>
            <td>
            <Link to={"/Edt"} className="btn"><button>Edit</button> </Link> 
             <Link to= {"/delete"}> <button>Delete</button></Link>

            </td>
          </tr>
          <tr>
        <th> <span className="custom-checkbox">
  <input type="checkbox" id="selectAll" />
  <label htmlFor="selectAll" />
</span>

               </th>
            <td>...................</td>
            <td>.........@gmail.com</td>
            <td>...................</td>
            <td>+213 **************</td>
            <td>
            <Link to={"/Edt"} className="btn"><button>Edit</button> </Link> 
             <Link to= {"/delete"}> <button>Delete</button></Link>

            </td>
          </tr>
          <tr>
            <td />
            <td />
            <td />
            <td>
              <span className="status inProgress" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    
    </>
    )
}
export default Abb;