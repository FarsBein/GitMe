import './questions.css';
import '../SharedStyle.css';
import * as ReactBootStrap from "react-bootstrap"

function Url() {
    const [loading,setLoading] = useState(false)
    const [nameAvailable,setNameAvailable] = useState(false)
  
    const checkButtonHandler = async () => {
      setLoading(true)
      await new Promise(function(resolve) { 
        setTimeout(resolve.bind(null, '3'), 100)
      });
  
      setLoading(false)
      setNameAvailable(!nameAvailable)
    }
   
  return (
    <ReactBootStrap.Form className='form-area'>
        <h3>Your Unique URL</h3> <br/>
        <ReactBootStrap.InputGroup className="mb-2">
        <ReactBootStrap.InputGroup.Prepend>
            <ReactBootStrap.InputGroup.Text>www.gitme.ml/</ReactBootStrap.InputGroup.Text>
        </ReactBootStrap.InputGroup.Prepend>
        <ReactBootStrap.FormControl id="url" placeholder="Username"  type="text" required isValid={nameAvailable} isInvalid={!nameAvailable}  />
        <ReactBootStrap.Form.Control.Feedback type="invalid">
            &nbsp;Username is Already Taken!
        </ReactBootStrap.Form.Control.Feedback>
        </ReactBootStrap.InputGroup>
        <div className='space-between'>
            <div>
            </div>
            <ReactBootStrap.Button variant="warning" onClick={() => checkButtonHandler()} className='check-button'>
            {loading ? <ReactBootStrap.Spinner animation="border" /> : 'Check Availability'}
            </ReactBootStrap.Button>
        </div>
    </ReactBootStrap.Form> 
  );
}

export default Url;
