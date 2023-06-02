import { useState, React, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


function FetchUserData() {

    const [getFormData, setFormData] = useState([]);

    /* For Read Data to JSON API */
    const fetchData = () => {
        axios
            .get("https://6165722bcb73ea001764200d.mockapi.io/students")
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

    return getFormData; // Returning Data by getFormData Use state
}

export default FetchUserData;