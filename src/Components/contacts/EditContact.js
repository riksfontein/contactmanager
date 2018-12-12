import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputgroup from "../layout/TextInputGroup";
import { axios } from "axios";

export default class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  async;
  onTypeChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    const updContact = {
      name,
      email,
      phone
    };
    const { id } = this.props.match.params;

    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updContact
    );
    dispatch({ type: "UPDATE_CONTACT", payload: res.data });

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });
    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit contact</div>
              <div className="card-body">
                <form onSubmit={this.onFormSubmit.bind(this, dispatch)}>
                  <TextInputgroup
                    label="Name"
                    name="name"
                    placeholder="Enter name..."
                    value={name}
                    onChange={this.onTypeChange}
                    error={errors.name}
                  />
                  <TextInputgroup
                    label="Email"
                    name="email"
                    placeholder="Enter email..."
                    value={email}
                    onChange={this.onTypeChange}
                    type="email"
                    error={errors.email}
                  />
                  <TextInputgroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter phonenumber..."
                    value={phone}
                    onChange={this.onTypeChange}
                    error={errors.phone}
                  />

                  <input
                    type="submit"
                    style={{ cursor: "pointer" }}
                    value="Update contact"
                    className="btn btn-block btn-dark text-white"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
