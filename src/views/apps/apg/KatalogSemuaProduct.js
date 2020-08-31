import React from "react"
import { Row, Col } from "reactstrap"
import KatalogDetail from "../../ui-elements/cards/apg-product/semua/apgKatalogSemuaProduk"
import KatalogFilter from "../../ui-elements/cards/apg-product/semua/apgKatalogFilter" 
import "../../../assets/scss/pages/dashboard-analytics.scss"
import "../../../assets/scss/pages/app-ecommerce-shop.scss"
import Breacrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import queryString from "query-string"
const mql = window.matchMedia(`(min-width: 992px)`)
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

class KatalogSemuaProduct extends React.Component {
  state = {
    sidebarDocked: mql.matches,
    sidebarOpen: false
  }
  
  render() {
    return (
      <React.Fragment>
        <Breacrumbs
          breadCrumbTitle="Semua Produk"
          breadCrumbParent="Katalog"
          breadCrumbActive="Semua Produk"
        />
        <Row className="match-height">
          <Col sm="12">
            <div className="ecommerce-application">
              <KatalogFilter />
              <KatalogDetail parsedFilter={queryString.parse(this.props.location.search)}/>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default KatalogSemuaProduct
