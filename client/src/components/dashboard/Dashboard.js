import './Dashboard.css';
import '../SharedStyle.css';
import axios from 'axios'
import { Link } from 'react-router-dom';

function Dashboard() {

  const logoutHandle = async (e) => {
    window.location = "http://localhost:8000/auth/dashboard"
  }

  const checkIfLoggedin = async (e) => {
    const isLoggedin = await axios.get('http://localhost:8000/auth/isLoggedin')
    if (isLoggedin){
      window.location = "http://localhost:3000"
    } 
  }

  return (
    <div className='gray-bg'>
      <div className='container gray-bg' >
        <div className="jumbo-dashboard ">
          <Link to='/create-website'>
            <div className="cards">
                <div>
                  <h4><b>Edit website</b></h4> 
                </div>
            </div>
          </Link>
          <Link to='/'>
            <div className="cards">
                <div>
                  <h4><b>Change projects background</b></h4> 
                </div>
            </div> 
          </Link>
          <Link>
            <div className="cards">
                <div onClick={(e)=>checkIfLoggedin(e)}>
                  <h4><b>is logged in ( See website )</b></h4> 
                </div>
            </div>
          </Link>
          <Link >
            <div className="cards" onClick={(e)=>logoutHandle(e)}>
                <div>
                  <h4><b>Logout</b></h4> 
                </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
