import { useState, React, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";

function ApiCRUD() {
  var formData = {
    userName: " ",
    age: "",
    class: "",
    address: "",
    RollNo: "",
    PhonNo: ""
  };

  const [formValues, setFormValues] = useState(formData);
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

  function changeValues(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  /* For Create Data to JSON API */
  const submitData = (e) => {
    e.preventDefault();
    axios
      .post("https://6165722bcb73ea001764200d.mockapi.io/students", formValues)
      .then(function (response) {
        alert("Data added...");
        setFormValues(formData);
        fetchData();

        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  /* For Delete user */

  const deleUser = (id) => {
    axios
      .delete(`https://6165722bcb73ea001764200d.mockapi.io/students/${id}`)
      .then(function (response) {
        fetchData();

        alert("Deleted");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  /* For Add Data to JSON API */
  // const submitData = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("https://6165722bcb73ea001764200d.mockapi.io/students", formValues)
  //     .then(function (response) {
  //       alert("Data added...");
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  return (
    <div>
      <h3 class="head-1">CRUD Operation: </h3>
      <form onSubmit={submitData} class="form-design">
        <label>UserName : {formValues.userName} </label>
        <br />
        <input
          type="text"
          name="userName"
          id="userName"
          value={formValues.userName}
          onChange={changeValues}
        />
        <br />

        <label>Age : {formValues.age} </label>
        <br />
        <input
          type="text"
          name="age"
          value={formValues.age}
          id="age"
          onChange={changeValues}
        />
        <br />

        <label>Class : {formValues.class} </label>
        <br />
        <input
          type="text"
          name="class"
          value={formValues.class}
          id="class"
          onChange={changeValues}
        />
        <br />

        <label>Address : {formValues.address} </label>
        <br />
        <input
          type="text"
          name="address"
          id="address"
          value={formValues.address}
          onChange={changeValues}
        />
        <br />

        <label>Roll No : {formValues.RollNo} </label>
        <br />
        <input
          type="text"
          name="RollNo"
          value={formValues.RollNo}
          id="RollNo"
          onChange={changeValues}
        />
        <br />

        <label>Phone No : {formValues.PhonNo} </label>
        <br />
        <input
          type="text"
          name="PhonNo"
          value={formValues.PhonNo}
          id="PhonNo"
          onChange={changeValues}
        />
        <br />

        <button type="submit" class="btn-add-user">
          Add User
        </button>
      </form>
      <br />

      <h3 class="head-2">View Of Data </h3>
      <table>
        <div className="table1">
          <tr>
            <th>USERNAME</th>
            <th>AGE</th>
            <th>CLASS</th>
            <th>ADDRESS</th>
            <th>ROLL NO</th>
            <th>PHONE NO</th>
            <th>Action</th>
          </tr>
          {getFormData.map((data1) => (
            <tr>
              <td> {data1.userName} </td>
              <td> {data1.age} </td>
              <td> {data1.class} </td>
              <td> {data1.address} </td>
              <td> {data1.RollNo} </td>
              <td> {data1.PhonNo} </td>
              <td>
                {" "}
                <button type="submit" onClick={() => deleUser(data1.id)}>
                  Delete
                </button>
                <Link to={`/userdetails/${data1.id}`} as={Link}>
                  View
                </Link>
                <button type="submit">Edit</button>
              </td>
            </tr>
          ))}{" "}
          ;
        </div>
      </table>
    </div>
  );
}
export default ApiCRUD;
