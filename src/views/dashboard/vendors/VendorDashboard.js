import React from "react"
import { Row, Col } from "reactstrap"
import DocumentCard from "./DocumentCard"
import StockCard from "./StockCard"
import OrderCard from "./OrderCard"
import InfoCard from "./InfoCard"
import "../../../assets/scss/pages/dashboard-analytics.scss"
import { connect } from "react-redux"
import { getDashboardVendor } from "../../../redux/actions/dashboard"
import { getLoggedInUser } from "../../../redux/config"


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
  componentDidMount() {
    this.props.getDashboardVendor()
  }

  render() {
    let view
    let confirmed = getLoggedInUser().user.vendor.confirmed
    let { doc, item, po, info } = this.props.dashboard

    if (confirmed) {
      view = (
        <Row className="match-height">
          <Col lg="4" md="12">
              <DocumentCard data={doc} />
          </Col>
          <Col lg="4" md="6" sm="12">
            <StockCard data={item} />
          </Col>
          <Col lg="4" md="6" sm="12">
            <OrderCard data={po} />
          </Col>
        </Row>
      )
    } else {
      view = (
        <Row className="match-height">
          <Col lg="4" md="12">
            <DocumentCard data={doc} />
          </Col>
          <Col lg="4" md="6" sm="12">
            <InfoCard data={info} />
          </Col>
        </Row>
      )
    }

    return (
      <React.Fragment>
        {view}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard.dashboardVendor,
  }
}

export default connect(mapStateToProps, { getDashboardVendor })(VendorDashboard)
