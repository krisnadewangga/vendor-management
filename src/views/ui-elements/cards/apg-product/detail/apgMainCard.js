import React from "react"
import { Col } from "reactstrap"
import ProductDetail from "./apgKatalogProductDetail"
import MoreProduct from "./apgKatalogMoreProduct"
import RecommendedVendor from "./apgRecommendedVendor"

import "../../../../../assets/scss/pages/app-ecommerce-shop.scss"

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
          <ProductDetail />
          <MoreProduct />
          <RecommendedVendor />
        </div>
      </Col>
    )
  }
}

export default MainCards
