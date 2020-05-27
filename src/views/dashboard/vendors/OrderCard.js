import React from "react"
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard"
import { ShoppingCart } from "react-feather"


class OrderCard extends React.Component {
  render() {
    return (
      <StatisticsCard
        iconRight
        icon={<ShoppingCart className="success" size={22} />}
        iconBg="info"
        stat="4 PO"
        statTitle="Pemesanan"
        hideChart
      />
    )
  }
}
export default OrderCard
