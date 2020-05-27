import React from "react"
import { Col } from "reactstrap"
import ApgItems from "./ApgItems"
import MoreItems from "./MoreItems"
import RecommendedVendor from "./RecommendedVendor"

import "../../../../assets/scss/pages/app-ecommerce-shop.scss"

const mql = window.matchMedia(`(min-width: 992px)`)
class MainCards extends React.Component {
  state = {
    sidebarDocked: mql.matches,
    sidebarOpen: false
  }

  render() {
    return (
      <Col sm="12">
        <div className="ecommerce-application">
          <ApgItems />
          <MoreItems />
          <RecommendedVendor />
        </div>
      </Col>
    )
  }
}

export default MainCards
