import React from "react"
import { Row, Col } from "reactstrap"
import MainCard from "../../ui-elements/cards/apg-product/semua/apgMainCardSemuaProduk"  
import "../../../assets/scss/pages/dashboard-analytics.scss"
import Breacrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"

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
  render() {
    return (
      <React.Fragment>
        <Breacrumbs
          breadCrumbTitle="Semua Produk"
          breadCrumbParent="Katalog"
          breadCrumbActive="Semua Produk"
        />
        <Row className="match-height">
          <MainCard />
        </Row>
      </React.Fragment>
    )
  }
}

export default KatalogSemuaProduct
