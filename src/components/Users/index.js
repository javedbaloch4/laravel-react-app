import React from "react";
import { Link } from "react-router-dom";
import { async } from "q";
import Axios from "axios";

class Users extends React.Component {
  state = {
    users: [],
    loading: true
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    this.setState({ loading: true });
    const response = await fetch(
      "https://react-training-apis.herokuapp.com/api/users/list"
    );
    const data = await response.json();
    this.setState({
      users: data,
      loading: false
    });
    console.log(this.state.users);
  };

  removeUser = id => {
    Axios.delete(
      `https://react-training-apis.herokuapp.com/api/users/${id}/delete`
    ).then(res => {
      console.log(res);
      console.log(res.data);
      this.getUsers();
    });
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div class="spinner-border spinner-border-sm loader" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        ) : (
          <div class="container">
            <div class="row justify-content-center mt-5">
              <div class="col-md-12">
                <div class="card">
                  <div class="card-header">
                    <h2 class="float-left">
                      <i className={"fa fa-users"} />
                      &nbsp;Users
                    </h2>
                    <div class="float-right">
                      <Link to="/register">
                        <a href="" class="btn btn-dark">
                          Register User
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div class="card-body">
                    <table class="table table-bordered table-hovered">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Gender</th>
                          <th>Profession</th>
                          <th>Address</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.users.map(user => {
                          return (
                            <tr key={user.name}>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>{user.gender}</td>
                              <td>{user.profession}</td>
                              <td>{user.address}</td>
                              <td>
                                <button
                                  className={"btn btn-danger btn-sm"}
                                  onClick={() => this.removeUser(user.id)}
                                >
                                  <i className={"fa fa-trash"} />
                                </button>
                                &nbsp;
                                <button className={"btn btn-dark btn-sm  "}>
                                  <i className={"fa fa-pencil"} />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Users;
