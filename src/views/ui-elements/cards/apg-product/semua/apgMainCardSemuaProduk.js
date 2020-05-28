import React from "react"
import { Col } from "reactstrap"
import KatalogDetail from "../semua/apgKatalogSemuaProduk"
import KatalogFilter from "../semua/apgKatalogFilter"

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
          <KatalogFilter />
          <KatalogDetail />
        </div>
      </Col>
    )
  }
}

export default MainCards
