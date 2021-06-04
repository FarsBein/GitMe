import './Homepage.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Default() {
  const [username, setUsername] = useState(undefined)
  
  const connectCheck = async () => {
    setUsername(window.location.pathname.slice(4))
    try {
      const profile = await axios.post('https://jl9fu2pz4g.execute-api.us-east-2.amazonaws.com/dev/profile', {
        username:window.location.pathname.slice(4)
      })
      console.log('profile:', profile.data)
    } catch(err) {
      console.log('err.message', err.message)
    }
  }

  useEffect(() => {
    connectCheck()
  }, [])

  return (
      <div className='default-container container center'>
        {username}
      </div>
  );
}

export default Default;
