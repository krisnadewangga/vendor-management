import React from "react"
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard"
import { Box } from "react-feather"


class DocumentCard extends React.Component {
  render() {
    return (
      <StatisticsCard
        iconRight
        icon={<Box className="primary" size={24} />}
        iconBg="warning"
        stat={`${this.props.data} Item Barang`}
        statTitle="Stok kurang"
        hideChart
      />
    )
  }
}
export default DocumentCard
