import React from "react"
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard"
import { Box } from "react-feather"
import { Link } from "react-router-dom"

class DocumentCard extends React.Component {
  render() {
    return (
      <Link to="/vendor/stok-kurang">
        <StatisticsCard
          iconRight
          icon={<Box className="primary" size={24} />}
          iconBg="warning"
          stat={`${this.props.data} Item Barang`}
          statTitle="Stok kurang"
          hideChart
        />
      </Link>
    )
  }
}
export default DocumentCard
