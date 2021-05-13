import '../Doc.css';
import * as ReactBootStrap from "react-bootstrap"


function Sidebar() {
  return (
        <div>
            <h1>Documentation</h1>
            <div className="desktop">
                <ReactBootStrap.ListGroup defaultActiveKey="#link1" >
                    <ReactBootStrap.ListGroup.Item action href="#link1" variant='success'>
                        Edit Website
                    </ReactBootStrap.ListGroup.Item>
                    <ReactBootStrap.ListGroup.Item action href="#link2">
                        Choose specific repos
                    </ReactBootStrap.ListGroup.Item>
                    <ReactBootStrap.ListGroup.Item action href="#link3"> {/*onClick={}*/}
                        Change url
                    </ReactBootStrap.ListGroup.Item>
                    <ReactBootStrap.ListGroup.Item action href="#link3"> {/*onClick={}*/}
                        Change url
                    </ReactBootStrap.ListGroup.Item>
                    <ReactBootStrap.ListGroup.Item action href="#link3"> {/*onClick={}*/}
                        Change url
                    </ReactBootStrap.ListGroup.Item>
                    <ReactBootStrap.ListGroup.Item action href="#link3"> {/*onClick={}*/}
                        Change url
                    </ReactBootStrap.ListGroup.Item>
                    <ReactBootStrap.ListGroup.Item action href="#link3"> {/*onClick={}*/}
                        Change url
                    </ReactBootStrap.ListGroup.Item>
                </ReactBootStrap.ListGroup>          
            </div>        
        </div>
  );
}

export default Sidebar;
