import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions/userAction";
import "./todo.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
toast.configure();

//displaying all user list with details
class AllEmployee extends Component {
    state = {
        users: "",
        showCollapsedMenu: false,
    };

    //calling all user list route
    async componentDidMount() {
        const user = await axios.get("/getalluser");
        //seting user list in state

        this.setState({ users: user.data });
        console.log(this.state.users.length);
    }
    //redirecting to update todo
    handleCreate = (e) => {
        //getting id for which update is clicked

        e.preventDefault();
        //sending user id to update profile component
        this.props.history.push({ pathname: "/create-employee" });
    };

    //deleting particular user
    handlechange = async (e) => {
        e.preventDefault();
        //getting id for which delet is clicked
        const id1 = e.target.id;
        console.log(id1);
        const datas = await axios.post(`/delet-employes/${id1}`);
        //display msg if user deleted
        if (datas.status === 200) {
            toast.success("Deleted Succefully!", {
                position: toast.POSITION.TOP_CENTER,
            });
            this.props.history.push("/");
        }
    };
    handleLogout = async (e) => {
        e.preventDefault();
        //dispatchng data
        this.props.logoutUser();
        toast.success("Logout Successfully!", {
            position: toast.POSITION.TOP_CENTER,
        });
        this.props.history.push("/login");
    };
    toggleMenu = () => {
        this.setState({
            showCollapsedMenu: !this.state.showCollapsedMenu,
        });
    };
    render() {
        console.log(this.props.user);
        const show1 = this.state.showCollapsedMenu ? "show" : null;
        return (
            <div className="main">
                <div className="">
                    <div className="">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                            <b
                                class="navbar-brand"
                                style={{ fontWeight: "bolder" }}
                            >
                                Employee App
                            </b>
                            <button
                                className="navbar-toggler"
                                data-toggle="collapse"
                                data-target="#navbar-menu"
                                type="button"
                                aria-controls="navbarSupportedContent1"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                                onClick={this.toggleMenu}
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div
                                className={"collapse navbar-collapse " + show1}
                                id="navbarNav"
                            >
                                <ul class="navbar-nav  mr-auto">
                                    <li class="nav-item active"></li>
                                </ul>
                                <ul className="navbar-nav">
                                    <div>
                                        <button
                                            type="button"
                                            className="btn btn-danger card-link"
                                            onClick={this.handleCreate}
                                        >
                                            Create Empolyee
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger card-link"
                                            onClick={this.handleLogout}
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <div>
                    {/* if user list is empty show no data found or still loads else show user list */}
                    {this.state.users.length != 0 ? (
                        <div className="row">
                            {this.state.users.map((p, i) => (
                                <div className="col-md-3 ">
                                    <div
                                        className="card"
                                        style={{ width: "18rem" }}
                                    >
                                        <div className="card-body">
                                            <h3 className="card-title">
                                                {p.name}
                                            </h3>
                                            <h6>Id : {i + 1}</h6>

                                            <h6 className="card-subtitle mb-2 text-muted">
                                                Salary:
                                                {p.salary}
                                            </h6>
                                            <h6 className="card-subtitle mb-2 text-muted">
                                                Age :{p.age}
                                            </h6>

                                            <button
                                                type="button"
                                                className="btn btn-danger card-link"
                                                id={p._id}
                                                onClick={this.handlechange}
                                            >
                                                Delet Employee
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <h3 style={{ color: "white" }}>
                                Not Created Employee??
                            </h3>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.todo,
    };
};
export default connect(mapStateToProps, { logoutUser })(
    withRouter(AllEmployee)
);
