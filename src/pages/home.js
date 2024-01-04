import { Link } from "react-router-dom"
import customer01 from './imgs/customer01.jpg'
import customer02 from './imgs/customer02.jpg'
const HomePage = ()=>{
    return <main>   <>
    {/* =============== Navigation ================ */}
    <div className="container">
      <div className="navigation">
        <ul>
          <li>
            <a href="#">
              <span className="icon">
               
              </span>
              <span className="title"><h3>Homepage</h3></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="home-outline" />
              </span>
              <span className="title">Dashboard</span>
            </a>
          </li>
          <li>
             <Link to={"/patient"}>
             <span className="icon">
               
               </span>
              <span className="title">Patient</span></Link>       
                </li>
                <li>
          <Link to={"/doctor"}>
              <span className="icon">
                <ion-icon name="lock-closed-outline" />
              </span>
              <span className="title">Doctors</span>
              </Link>  
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="chatbubble-outline" />
              </span>
              <span className="title">Messages</span>
            </a>
          </li>
          <li>
          <Link to={"/quest"}>
              <span className="icon">
                <ion-icon name="help-outline" />
              </span>
              <span className="title">Questions</span>
              </Link>
          </li>
          <li>
            <a href="#">
            <span className="icon">
                <ion-icon name="log-out-outline" />
              </span>
              <span className="title">Settings</span>
            </a>
          </li>
          
          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="log-out-outline" />
              </span>
              <span className="title">Sign Out</span>
            </a>
          </li>
        </ul>
      </div>
      {/* ========================= Main ==================== */}
      <div className="main">
        <div className="topbar">
          <div className="toggle">
            <ion-icon name="menu-outline" />
          </div>
          <div className="search">
            <label>
              <input type="text" placeholder="Search here" />
              <ion-icon name="search-outline" />
            </label>
          </div>
          
          
          <div className="user">
             <img src={customer01} alt="Description de l'image" />
          </div>

        </div>
        {/* ======================= Cards ================== */}
        <div className="cardBox">
          <div className="card">
            <div>
              <div className="numbers">14</div>
              <div className="cardName">Docrors</div>
            </div>
            <div className="iconBx">
              <ion-icon name="" />
            </div>
          </div>
          <div className="card">
            <div>
              <div className="numbers">80</div>
              <div className="cardName">patients</div>
            </div>
            <div className="iconBx">
              <ion-icon name="" />
            </div>
          </div>
          <div className="card">
            <div>
              <div className="numbers">84</div>
              <div className="cardName">messages</div>
            </div>
            <div className="iconBx">
              <ion-icon name="chatbubbles-outline" />
            </div>
          </div>
          <div className="card">
            <div>
              <div className="numbers" />
              <div className="cardName" />
            </div>
            <div className="iconBx">
              <ion-icon name="" />
            </div>
          </div>
        </div>
        {/* ================ Order Details List ================= */}
        <>
  {/* Hello world */}
  <div className="details">
    <div className="recentOrders">
      <div className="cardHeader">
        <h2>Patients List</h2>
      
        <Link to={"/patient"}className="btn">
          View All
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>email</td>
            <td>Address</td>
            <td>Phone</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>.......</td>
            <td>...........</td>
            <td>........@gmail.com</td>
            <td>.**********</td>
           
          </tr>
          <tr>
            <td />
            <td />
            <td />
            <td>
              <span className="status pending" />
            </td>
          </tr>
          <tr>
            <td />
            <td />
            <td />
            <td>
              <span className="status return" />
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
          <tr>
            <td />
            <td />
            <td />
            <td>
              <span className="status delivered" />
            </td>
          </tr>
          <tr>
            <td />
            <td />
            <td />
            <td>
              <span className="status pending" />
            </td>
          </tr>
          <tr>
            <td />
            <td />
            <td />
            <td>
              <span className="status return" />
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
    {/* ================= New Customers ================ */}
    <div className="recentCustomers">
      <div className="cardHeader">
        <h2>Doctors List</h2>
      </div>
      <table>
        <tbody>
          <tr>
            <td width="60px">
              <div className="imgBx">
              <img src={customer01} alt="Description de l'image" />
              </div>
            </td>
            <td>
              <h4>
                David <br /> <span>Italy</span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div className="imgBx">
              <img src={customer02} alt="Description de l'image" />
              </div>
            </td>
            <td>
              <h4>
                Amit <br /> <span>India</span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div className="imgBx">
              <img src={customer01} alt="Description de l'image" />
              </div>
            </td>
            <td>
              <h4>
                David <br /> <span>Italy</span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div className="imgBx">
              <img src={customer02} alt="Description de l'image" />
              </div>
            </td>
            <td>
              <h4>
                Amit <br /> <span>India</span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div className="imgBx">
              <img src={customer01} alt="Description de l'image" />
              </div>
            </td>
            <td>
              <h4>
                David <br /> <span>Italy</span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div className="imgBx">
              <img src={customer02} alt="Description de l'image" />
              </div>
            </td>
            <td>
              <h4>
                Amit <br /> <span>India</span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div className="imgBx">
              <img src={customer01} alt="Description de l'image" />
              </div>
            </td>
            <td>
              <h4>
                David <br /> <span>Italy</span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div className="imgBx">
              <img src={customer02} alt="Description de l'image" />
              </div>
            </td>
            <td>
              <h4>
                Amit <br /> <span>India</span>
              </h4>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</>

      </div>
    </div>
   
    
  
  
      </></main>
}
export default HomePage