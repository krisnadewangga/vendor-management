import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import ThumbViewConfig from "./DataListVendorKelasConfig"
import queryString from "query-string"
class VendorKategori extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Kelas Vendor"
          breadCrumbParent="Vendor"
          breadCrumbActive="Kelas Vendor"
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
