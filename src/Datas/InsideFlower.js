import React from "react";
import Modal from "react-awesome-modal";
import "./InsideFlower.css";
import Detail from "./Detail";
import Axios from "axios";

export default class InsideFlower extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      prepare: false,
      imgUrl: "",
      datas: {},
      ip: ""
    };
  }
  componentDidMount() {
    // this.setState({
    //   prepare: true
    // });
    if (this.props.flower) {
      this.setState({
        prepare: true
      });
    }
  }

  dataOpen = async id => {
    const data2 = await Axios.get(`http://localhost:3001/users/qqq`);
    if (data2.data.cntntsNo === id) {
      this.setState({
        datas: data2,
        visible: true,
        ip: id
      });
    } else {
      this.dataOpen(id);
    }
  };
  openModal = async id => {
    await Axios.post(`http://localhost:3001/users/qwe`, { id });

    this.dataOpen(id);
  };
  closeModal = async e => {
    this.setState({
      visible: false
    });
  };

  render() {
    return this.state.prepare ? (
      <div>
        <div className="a">
          <div className="box_modal">
            <img
              className="Imgae"
              src={this.props.url}
              width="280"
              height="150"
              alt={this.props.flower.cntntsSj}
              onClick={() => this.openModal(this.props.flower.cntntsNo)}
            ></img>
            <Modal
              visible={this.state.visible}
              width="800"
              height="600"
              effect="fadeInDown"
              onClickAway={e => this.closeModal(e)}
            >
              {this.state.visible ? (
                <Detail
                  datas={this.state.datas}
                  select={this.state.ip}
                ></Detail>
              ) : (
                <div>Loading....</div>
              )}
            </Modal>

            <p className="Name">{this.props.flower.cntntsSj}</p>
          </div>
        </div>
      </div>
    ) : (
      <div> 123123Loading ..........</div>
    );
  }
}
