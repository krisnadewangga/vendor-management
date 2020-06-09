import React from "react"
import { Row, Col } from "reactstrap"
import ApgVendorAktifDetail from "./apgVendorAktifDetail"

class ListView extends React.Component {
  render() {
    return (
        <Row>
          <ApgVendorAktifDetail />
        </Row>
    )
  }
}

export default ListView
