import React from "react"
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard"
import { Users } from "react-feather"
import { subscribersGained, subscribersGainedSeries } from "./StatisticsData"

class DocumentInfo extends React.Component {
  render() {
    return (
      <StatisticsCard
        icon={<Users className="primary" size={22} />}
        stat="5"
        statTitle="Subscribers Gained"
        options={subscribersGained}
        series={subscribersGainedSeries}
        type="area"
      />
    )
  }
}
export default DocumentInfo
