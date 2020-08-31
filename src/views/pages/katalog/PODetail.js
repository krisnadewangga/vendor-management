import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import ListViewConfig from "./POExpiredForm"
import queryString from "query-string"

class ListView extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Pesanan Pembelian"
          breadCrumbParent="Katalog"
          breadCrumbActive="Pesanan Pembelian"
        />
        <Row>
          <Col sm="12">
            <ListViewConfig parsedFilter={queryString.parse(this.props.location.search)} id={this.props.location.pathname.split('/').pop()}/>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default ListView
