import React from "react";
import InsideFlower from "./Datas/InsideFlower";
import axios from "axios";

import "./Main.css";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      flowers: [],
      dataOn: false,
      url: ""
    };
  }

  componentDidMount() {
    this.dataSet();
  }
  DataList = data => {
    this.setState({
      users: data
    });
  };

  dataSet = async () => {
    const data = await axios.get("http://localhost:3001/users");

    this.setState({ flowers: data, dataOn: true });
    console.log("dataOn");
  };
  setUrl = data => {
    // var cut = data.rtnStreFileNm.split("|");
    // var imgUrl = `http://www.nongsaro.go.kr/cms_contents/301/${cut[0]}`;
    // this.setState({ dataOn: true, url: imgUrl });
    // console.log(imgUrl);
  };

  render() {
    return (
      <>
        <div className="container">
          <section className="section">
            <div className="wrap">
              {this.state.dataOn
                ? this.state.flowers.data.map((data, i) => {
                    if (data.rtnStreFileNm) {
                      const cut = data.rtnStreFileNm.split("|");
                      var imgUrl = `http://www.nongsaro.go.kr/cms_contents/301/${cut[0]}`;
                      return (
                        <InsideFlower
                          url={imgUrl}
                          flower={data}
                          key={i}
                        ></InsideFlower>
                      );
                    } else {
                      return this.onUnload();
                    }
                  })
                : "Loading"}
            </div>
          </section>
        </div>
      </>
    );
  }
}
