import { useState, React, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


function AddUser() {
  var userData = {
    userName: "",
    age: "",
    class: "",
    address: "",
    RollNo: "",
    PhonNo: ""
  };

  const [formEntries, setFormEntries] = useState(userData);
  const [getFormData, setFormData] = useState([]);


  /*Use Effect Render Data */
  // useEffect(() => {
  //   fetchData();
  // }, []);

  function changeValues(e) {
    setFormEntries({ ...formEntries, [e.target.name]: e.target.value });
  }


  // const fetchData = () => {
  //   axios
  //     .get("https://6165722bcb73ea001764200d.mockapi.io/students")
  //     .then(function (response) {
  //       setFormData(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  const addDatatoForm = (e) => {
    e.preventDefault();
    axios.post("https://6165722bcb73ea001764200d.mockapi.io/students", formEntries)
      .then(function (response) {
        alert("User Details Added...");
        setFormEntries(userData);
        // fetchData();
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <div class="sidebar">
            <img src="/images/logo.png" />
            <ul>
              <li><Link to={`/`} as={Link} >
                Home
              </Link></li>
              <li> <a href="#">About</a></li>
              <li><Link to={`/`} as={Link} >
                All User
              </Link></li>
              <li><Link to={`/adduser`} as={Link} >
                Add User
              </Link></li>
            </ul>
          </div>
        </Col>
        <Col sm={8}>
          <div class="form-design">
            <form onSubmit={addDatatoForm} >
              <label>UserName : {formEntries.userName} </label>
              <br />
              <input
                type="text"
                name="userName"
                id="userName"
                value={formEntries.userName}
                onChange={changeValues}
              />
              <br />

              <label>Age : {formEntries.age} </label>
              <br />
              <input
                type="text"
                name="age"
                value={formEntries.age}
                id="age"
                onChange={changeValues}
              />
              <br />

              <label>Class : {formEntries.class} </label>
              <br />
              <input
                type="text"
                name="class"
                value={formEntries.class}
                id="class"
                onChange={changeValues}
              />
              <br />

              <label>Address : {formEntries.address} </label>
              <br />
              <input
                type="text"
                name="address"
                id="address"
                value={formEntries.address}
                onChange={changeValues}
              />
              <br />

              <label>Roll No : {formEntries.RollNo} </label>
              <br />
              <input
                type="text"
                name="RollNo"
                value={formEntries.RollNo}
                id="RollNo"
                onChange={changeValues}
              />
              <br />

              <label>Phone No : {formEntries.PhonNo} </label>
              <br />
              <input
                type="text"
                name="PhonNo"
                value={formEntries.PhonNo}
                id="PhonNo"
                onChange={changeValues}
              />
              <br />
              <button type="submit" class="btn-add-user">
                Add User
              </button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default AddUser;