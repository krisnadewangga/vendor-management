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
          breadCrumbTitle="Vendor Bermasalah"
          breadCrumbParent="Vendor"
          breadCrumbActive="Vendor Bermasalah"
        />
        <Row>
          <Col sm="12">
            <ListViewConfig vendor="bermasalah" parsedFilter={queryString.parse(this.props.location.search)}/>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default ListView
