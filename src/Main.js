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
      dataOn: false
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
    this.setState({ flowers: data });
    this.setState({ dataOn: true });
  };

  render() {
    return (
      <>
        <div className="container">
          <section className="section">
            <div className="wrap">
              {this.state.dataOn
                ? this.state.flowers.data.map((data, i) => {
                    return <InsideFlower flower={data} key={i}></InsideFlower>;
                  })
                : "Loading"}
            </div>
          </section>
        </div>
      </>
    );
  }
}
