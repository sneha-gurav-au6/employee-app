import React, { Component } from "react";
import axios from "axios";
import Select from "react-select";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../components/style/create.css";
import { ToastContainer, toast } from "react-toastify";

toast.configure();

//user update

class CreateEmpoyee extends Component {
    state = {
        name: "",
        salary: "",
        age: "",
    };

    handleChange = (event) => {
        //get name and value from user input
        const { name, value } = event.target;
        //set all user input value to respective state
        this.setState({ [name]: value });
    };

    //function runs when submit is clicked
    handleFormData = async (e) => {
        e.preventDefault();

        //creating new object with new values
        const formData = {
            name: this.state.name,
            salary: this.state.salary,
            age: this.state.age,
        };
        console.log(formData);
        //calling edit profile route and submittig new values
        const datas = await axios.post(`/create-empolyee`, formData);
        //display succsess msg if no error
        if (datas.status === 200) {
            toast.success("Created Successfully!", {
                position: toast.POSITION.TOP_CENTER,
            });
            this.props.history.push("/all-employee");
        }
    };

    render() {
        console.log(this.props.user);
        return (
            <div className="container-fluid new">
                <div className="formbox">
                    <form onSubmit={this.handleFormData}>
                        <div className="form-group ">
                            <h4 style={{ color: "yellow" }}>Create Employee</h4>
                            {/* add title */}
                            <label for="exampleInputEmail1">
                                {" "}
                                Enter Emloyee Name
                            </label>
                            <input
                                onChange={this.handleChange}
                                type="text"
                                name="name"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Name"
                            />
                        </div>
                        {/* add salary */}
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                                Enter Salary
                            </label>
                            <input
                                onChange={this.handleChange}
                                type="text"
                                name="salary"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        {/* 
add age */}
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                                Enter Age
                            </label>
                            <input
                                onChange={this.handleChange}
                                type="text"
                                name="age"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="eg. 25 Year"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};
export default connect(mapStateToProps)(withRouter(CreateEmpoyee));
