import React from "react";
import Main from "./Main";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";
import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Modal from "react-awesome-modal";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleLogin: false,
      visibleSignUp: false
    };
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="navigation">
            <div className="Link">
              <Link to="/">Home</Link>
            </div>
            <div className="Link">
              <Link
                onClick={() => {
                  this.setState({ visibleLogin: true });
                }}
              >
                LOGIN
              </Link>
            </div>
            <div className="Link">
              <Link
                onClick={() => {
                  this.setState({ visibleSignUp: true });
                }}
              >
                SINGUP
              </Link>
            </div>
          </div>
          <Route path="/" exact component={Main}></Route>
          <Modal
            visible={this.state.visibleLogin}
            width="600"
            height="365"
            effect="fadeInDown"
            onClickAway={e => {
              this.setState({ visibleLogin: false });
            }}
          >
            {this.state.visibleLogin ? (
              <Link to="/Login" component={Login}></Link>
            ) : (
              <div>
                <Route path="/"></Route>
              </div>
            )}
          </Modal>
          {/* <Route path="/Login" component={Login}></Route> */}
          {/* <Route path="/SignUp" component={SignUp}></Route> */}
          <Modal
            visible={this.state.visibleSignUp}
            width="800"
            height="510"
            effect="fadeInDown"
            onClickAway={e => {
              this.setState({ visibleSignUp: false });
            }}
          >
            {this.state.visibleSignUp ? (
              <Link to="/SignUp" component={SignUp}></Link>
            ) : (
              <div>
                <Route path="/"></Route>
              </div>
            )}
          </Modal>
        </BrowserRouter>
      </div>
    );
  }
}
