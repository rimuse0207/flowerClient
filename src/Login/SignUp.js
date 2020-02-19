import React from "react";
import axios from "axios";
import "./SignUp.css";
export default class SinUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  handleClick = () => {
    this.ServerSend(this.state.users);
  };
  ServerSend = async data => {
    console.log(data);
    await axios.post("http://localhost:3001/users/sinup", {
      data
    });
  };

  onChange = e => {
    let users = {};
    users[e.target.name] = e.target.value;
    this.setState(users);
  };

  render() {
    return (
      <>
        <form>
          <div className="SignUp_container">
            <h1>Sign Up</h1>
            <p>Please fill in this from to create an account.</p>
            <hr></hr>
            <label for="email">
              <b>Email</b>
            </label>
            <input
              className="Signup_input"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              placeholder="Enter Email"
            ></input>
            <label for="psw">
              <b>Password</b>
            </label>
            <input
              className="Signup_input"
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
              placeholder="Enter Password"
            ></input>
            <label for="SignUp_psw-repeat">
              <b>Repeat Password</b>
            </label>
            <input
              className="Signup_input"
              type="text"
              name="passwordCheck"
              value={this.state.passwordCheck}
              onChange={this.onChange}
              placeholder="Repeat Password"
            ></input>
            <div className="SignUp_cleearfix">
              <button className="SignUp_signupbtn" onClick={this.handleClick}>
                SinUp
              </button>
              <button className="SignUp_cancelbtn">Cancel</button>
            </div>
          </div>
        </form>
      </>
    );
  }
}
