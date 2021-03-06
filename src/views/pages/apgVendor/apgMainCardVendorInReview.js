import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import ListViewConfig from "./DataListConfigVendor"
import queryString from "query-string"
class ListView extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Vendor Belum Terverifikasi"
          breadCrumbParent="Vendor"
          breadCrumbActive="Vendor Belum Terverifikasi"
        />
        <Row>
          <Col sm="12">
            <ListViewConfig vendor="review" parsedFilter={queryString.parse(this.props.location.search)}/>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default ListView
