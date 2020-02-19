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
    this.setState({
      prepare: true
    });
    var cut = this.props.flower.rtnStreFileNm.split("|");
    var imgUrl = `http://www.nongsaro.go.kr/cms_contents/301/${cut[0]}`;
    this.setState({
      imgUrl
    });
  }

  openModal = async ip => {
    var datas = await Axios.get(`http://localhost:3001/users/qwe`);

    this.setState({
      datas: datas,
      visible: true,
      ip: ip
    });
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
              src={this.state.imgUrl}
              width="280"
              height="150"
              alt={this.props.flower.cntntsSj}
              onClick={() => this.openModal(this.props.flower.cntntsNo)}
            ></img>
            <Modal
              visible={this.state.visible}
              width="400"
              height="300"
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
