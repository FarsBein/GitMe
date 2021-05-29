import './Dashboard.css';
import '../SharedStyle.css';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(true)
  const [username, setUsername] = useState(undefined)

  const logoutHandle = async (e) => {
    window.location = "http://localhost:8000/auth/dashboard"
  }

  const isLoggedinCheck = async () => {
    try {
      const user = await axios.get('http://localhost:8000/user',{ withCredentials: true})
      setUsername(user.data.username)
      setLoggedIn(true)
      console.log(user.data.username)
    } catch(err) {
      setLoggedIn(false)
      console.log('err.message', err.message)
      window.location = "http://localhost:3000"
    }
  }

  useEffect(() => {
    isLoggedinCheck()
  }, [])

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
          <Link to='/my-code'>
            <div className="cards">
                <div>
                  <h4><b>My Code</b></h4> 
                </div>
            </div> 
          </Link>
          <a href={'http://localhost:8000/'+username}>
            <div className="cards">
                <div>
                  <h4><b>My Website</b></h4> 
                </div>
            </div>
          </a>
          <Link>
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
