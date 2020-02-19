import React from "react";
import axios from "axios";
import "./Login.css";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [{ email: "", password: "" }]
    };
  }

  onClick = () => {
    this.ServerSend(this.state.email, this.state.password);
  };

  ServerSend = async (email, password, res) => {
    try {
      await axios.post("http://localhost:3001/users/login", {
        email,
        password
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = e => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  render() {
    return (
      <>
        <form>
          <div className="Login_imgcontainer">
            <img></img>
          </div>

          <div className="Login_container">
            <label className="uname">
              <b>UserName</b>
            </label>
            <input
              className="Login"
              type="text"
              value={this.state.email}
              name="email"
              onChange={this.handleChange}
              placeholder="Enter UserName"
            ></input>
            <label classaName="psw">
              <b>Password</b>
            </label>
            <input
              className="Login"
              type="password"
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
              placeholder="Enter Password"
            ></input>
            <label>
              <input type="checkbox" checked="checked" name="remember"></input>
              Remember me
            </label>
          </div>

          <div className="Login_container">
            <button className="" onClick={this.onClick}>
              LOGIN
            </button>
            <button className="Login_cancelbtn">Cancle</button>
            <span className="Login_psw">
              Forgot <a href=""></a>
            </span>
          </div>
        </form>
      </>
    );
  }
}
