import React from "react"
import queryString from "query-string"
import "../../../assets/scss/pages/app-ecommerce-shop.scss"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import ApgKatalogDetail from "../../ui-elements/cards/apg-product/semua/apgKatalogDetail"

class DetailPage extends React.Component {
  componentDidMount() {
    console.log(this.props, "LIHAT DULU")
  }
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Product Detail"
          breadCrumbParent="Katalog"
          breadCrumbActive="Product Detail"
        />
        <ApgKatalogDetail parsedFilter={queryString.parse(this.props.location.search)} id={this.props.location.pathname.split('/').pop()}/>
      </React.Fragment>
    )
  }

}

export default DetailPage
