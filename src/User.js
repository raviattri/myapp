import { useState, React, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  const [getFormData, setFormData] = useState([]);

  const fetchData = () => {
    axios
      .get(`https://6165722bcb73ea001764200d.mockapi.io/students/${id}`)
      .then(function (response) {
        setFormData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

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
              <li> <a href="#">Add User</a></li>
            </ul>
          </div>
        </Col>
        <Col sm={4}>
          <div class="user-design">
            <h2>Student Record</h2><br/><br/><br/><br/>
            <img src="/images/user.png" class="user-img"></img>
            <br/><br/>
            <p>Name: {getFormData.userName}</p>
            <p>Age: {getFormData.age}</p>
            <p>Class: {getFormData.class}</p>
            <p>Address: {getFormData.address}</p>
            <p>Roll No.: {getFormData.RollNo}</p>
            <p>Phone Number: {getFormData.PhonNo}</p>
          </div>

        </Col>
        <Col sm={4}>

        </Col>
      </Row>
    </Container>
  );
}

// function MiovetoHome() {
//   return (
//     <BrowserRouter>
//       <Routes>
//       <Route path="Home" element={<Home />} />
//       </Routes>
//     </BrowserRouter>

//   );
// }
