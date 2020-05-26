import React from "react"
import { Row, Col } from "reactstrap"
import SalesCard from "./SalesCard"
import SuberscribersGained from "../../ui-elements/cards/statistics/SubscriberGained"
import OrdersReceived from "../../ui-elements/cards/statistics/OrdersReceived"
import "../../../assets/scss/pages/dashboard-analytics.scss"

let $primary = "#7367F0",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $info = "#00cfe8",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292",
  $info_light = "#1edec5",
  $stroke_color = "#e8e8e8",
  $label_color = "#e7eef7",
  $white = "#fff"

class VendorDashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row className="match-height">
          <Col lg="4" md="12">
            <SuberscribersGained />
          </Col>
          <Col lg="4" md="6" sm="12">
            <SuberscribersGained />
          </Col>
          <Col lg="4" md="6" sm="12">
            <OrdersReceived />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default VendorDashboard
