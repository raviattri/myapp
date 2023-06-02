import { useState, React, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import FetchUserData from "./FetchAPI";
   

function ApiHome() {

    const fetchAllUser = FetchUserData(); // Fetch Data from function and store to a variable


/* For Delete user */
    const deleteUser = (id) => {
        axios
            .delete(`https://6165722bcb73ea001764200d.mockapi.io/students/${id}`)
            .then(function (response) {
            //    const del= FetchUserData();
                alert("Deleted");
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(() => {
        deleteUser();
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
                            <li><Link to={`/adduser`} as={Link} >
                                Add User
                            </Link></li>
                        </ul>
                    </div>
                </Col>
                <Col sm={8}>
                    <Row>
                        <Col>
                            <div class="top-menu">
                                <ul>
                                    <li> <a href="#">Home</a></li>
                                    <li> <a href="#">About</a></li>
                                    <li> <a href="#">All User</a></li>
                                    <li> <a href="#">Add User</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {fetchAllUser.map((obj) => (
                            <Col md={4}>
                                <div className="card-box">
                                    <div class="card">
                                        <img src="https://cdn.pixabay.com/photo/2023/05/21/07/47/horse-8008038_1280.jpg" />
                                        <img src="/images/user.png" class="user-img-1" />
                                        <br />
                                        <p> {obj.userName}</p>
                                        {/* <p> {data1.age}</p>
                                        <p> {data1.class}</p>
                                        <p> {data1.address}</p>
                                        <p> {data1.RollNo}</p>
                                        <p> {data1.PhonNo}</p> */}
                                        <button class="btn-sendmsg">Send Message</button>
                                        {" "}
                                        <Row>
                                            <Col>
                                                <button type="submit" class="btn-delete" onClick={() => deleteUser(obj.id)}>
                                                    Delete
                                                </button>
                                                <button class="btn-view"><Link to={`/userdetails/${obj.id}`} as={Link} >
                                                    View
                                                </Link></button>
                                                <button type="submit" class="btn-delete">Edit</button>
                                            </Col>
                                        </Row>

                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
export default ApiHome;
