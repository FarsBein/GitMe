import '../Doc.css';
import * as ReactBootStrap from "react-bootstrap"


function Sidebar() {
  return (
    <ReactBootStrap.ListGroup defaultActiveKey="#link1">
        <ReactBootStrap.ListGroup.Item action href="#link1">
            Edit Website
        </ReactBootStrap.ListGroup.Item>
        <ReactBootStrap.ListGroup.Item action href="#link2">
            Choose specific repos
        </ReactBootStrap.ListGroup.Item>
        <ReactBootStrap.ListGroup.Item action href="#link3"> {/*onClick={}*/}
            Change url
        </ReactBootStrap.ListGroup.Item>
    </ReactBootStrap.ListGroup>
  );
}

export default Sidebar;
