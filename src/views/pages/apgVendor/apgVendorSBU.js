import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import ThumbViewConfig from "./DataListVendorSBUConfig"
import queryString from "query-string"
class VendorKategori extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Setifikat Badan Usaha (SBU)"
          breadCrumbParent="Vendor"
          breadCrumbActive="Setifikat Badan Usaha (SBU)"
        />
        <Row>
          <Col sm="12">
            <ThumbViewConfig parsedFilter={queryString.parse(this.props.location.search)}/>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default VendorKategori
