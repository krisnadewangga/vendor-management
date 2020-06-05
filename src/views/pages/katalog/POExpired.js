import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import ListViewConfig from "./DataListConfigPOExpired"
import queryString from "query-string"
class ListView extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Pesanan Kadaluwarsa"
          breadCrumbParent="Katalog"
          breadCrumbActive="Pesanan Kadaluwarsa"
        />
        <Row>
          <Col sm="12">
            <ListViewConfig parsedFilter={queryString.parse(this.props.location.search)}/>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default ListView
