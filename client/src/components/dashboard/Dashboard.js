import './Dashboard.css';
import '../SharedStyle.css';
import background2 from '../../images/background2.svg'
import edit2 from '../../images/edit2.svg'
import logout2 from '../../images/logout2.svg'
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className='gray-bg'>
      <div className='container gray-bg' >
        <div className="jumbo-dashboard ">
          <Link to='/create-website'>
            <div className="cards">
                {/* <img src={edit2} className='dashboard-cards-icons'/> */}
                <div>
                  <h4><b>Edit website</b></h4> 
                </div>
            </div>
          </Link>
          <Link to='/'>
            <div className="cards">
                {/* <img src={background2} className='dashboard-cards-icons'/> */}
                <div>
                  <h4><b>Change projects background</b></h4> 
                </div>
            </div> 
          </Link>
          <Link to='/'>
            <div className="cards">
                {/* <img src={logout2} className='dashboard-cards-icons'/> */}
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
