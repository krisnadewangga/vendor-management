import React from "react"
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard"
import { ShoppingCart } from "react-feather"
import { Link } from "react-router-dom"

class OrderCard extends React.Component {
  render() {
    return (
      <Link to="/vendor/pemesanan">
        <StatisticsCard
          iconRight
          icon={<ShoppingCart className="success" size={22} />}
          iconBg="info"
          stat={`${this.props.data} PO`}
          statTitle="Pemesanan"
          hideChart
        />
      </Link>
    )
  }
}
export default OrderCard
