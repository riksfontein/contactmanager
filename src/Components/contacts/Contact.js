import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    contactInfo: false
  };

  showContactInfo = e =>
    this.setState({
      contactInfo: !this.state.contactInfo
    });

  deleteContactInfo = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { contactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4 className="pl-1">
                {name}&nbsp;
                <i
                  className="fa fa fa-caret-down"
                  onClick={this.showContactInfo}
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fa fa-times"
                  onClick={this.deleteContactInfo.bind(this, id, dispatch)}
                  style={{ color: "red", cursor: "pointer", float: "right" }}
                />
                <Link to={`contact/edit/${id}`}>
                  <i className="fas fa-pencil-alt" style={{cursor: "pointer", float: "right", color: "black", marginRight: "1rem" }} />
                </Link>
              </h4>
              {contactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
