import React from "react";
import PropTypes from "prop-types";

export default class Detail extends React.Component {
  render() {
    const lifetemp = this.props.datas.data.grwhTpCode;
    let temp, winTemp, sumTemp;
    const specInfo = JSON.stringify(this.props.datas.data.speclmanageInfo);
    const qweqwe = specInfo.split("\n").map(data => {
      return data;
    });
    console.log(qweqwe);
    if (this.props.datas.data.grwhTpCode === "082001") {
      temp = "10~15도";
    } else if (this.props.datas.data.grwhTpCode === "082002") {
      temp = "16~20도";
    } else if (this.props.datas.data.grwhTpCode === "082003") {
      temp = "21~25도";
    } else if (this.props.datas.data.grwhTpCode === "082001") {
      temp = "26~30도";
    }

    if (this.props.datas.data.watercycleSummerCode === "053001") {
      sumTemp = "항상 흙을 축축하게 유지함(물에 잠김)";
    } else if (this.props.datas.data.watercycleSummerCode === "053002") {
      sumTemp = "흙을 촉촉하게 유지함(물에 잠기지 않도록 주의)";
    } else if (this.props.datas.data.watercycleSummerCode === "053003") {
      sumTemp = "토양 표면이 말랐을때 충분히 관수함";
    } else if (this.props.datas.data.watercycleSummerCode === "053004") {
      sumTemp = "화분 흙 대부분 말랐을때 충분히 관수함";
    } else {
      sumTemp = "없음";
    }

    if (this.props.datas.data.watercycleWinterCode === "053001") {
      winTemp = "항상 흙을 축축하게 유지함(물에 잠김)";
    } else if (this.props.datas.data.watercycleWinterCode === "053002") {
      winTemp = "흙을 촉촉하게 유지함(물에 잠기지 않도록 주의)";
    } else if (this.props.datas.data.watercycleWinterCode === "053003") {
      winTemp = "토양 표면이 말랐을때 충분히 관수함";
    } else if (this.props.datas.data.watercycleWinterCode === "053004") {
      winTemp = "화분 흙 대부분 말랐을때 충분히 관수함";
    } else {
      winTemp = "없음";
    }

    return (
      <div>
        <div>상세 이름:{JSON.stringify(this.props.datas.data.distbNm)}</div>
        <div>조언 정보:{JSON.stringify(this.props.datas.data.adviseInfo)}</div>
        <div>기능 정보:{JSON.stringify(this.props.datas.data.fncltyInfo)}</div>
        <div>
          잎 형태 정보:{JSON.stringify(this.props.datas.data.lefStleInfo)}
        </div>
        <div>
          번식 시기 정보:{JSON.stringify(this.props.datas.data.prpgtEraInfo)}
        </div>
        <div>특별 관리 정보:{specInfo}</div>
        <div>생육 온도:{temp}</div>
        <div>여름 물 주기:{sumTemp}</div>
        <div>겨울 물 주기:{winTemp}</div>
      </div>
    );
  }
}
Detail.propTypes = {};

Detail.defaultProps = {};
