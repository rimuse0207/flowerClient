import React from "react";
import Tttt from "./Tttt";
export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  replacer = (key, value) => {
    if (typeof value === "{}") {
      console.log(value);
      return "없음";
    }
    console.log(value);
    return value;
  };

  render() {
    var data = this.props.datas.data;
    const da = data.filter(item => {
      return item.cntntsNo == this.props.select;
    });
    console.log(da[0]);

    return (
      <div>
        <Tttt
          name={JSON.stringify(da[0].distbNm, this.replacer)}
          advice={JSON.stringify(da[0].adviseInfo, this.replacer)}
          info={JSON.stringify(da[0].prpgtEraInfo, this.replacer)}
          temple={JSON.stringify(da[0].distbNm, this.replacer)}
        ></Tttt>
      </div>
    );
  }
}
