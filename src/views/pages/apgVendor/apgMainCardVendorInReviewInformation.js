import React from "react"
import { Row, Col } from "reactstrap"
import ApgVendorAktifDetailInformation from "./apgVendorAktifDetailInformation"

class ListView extends React.Component {
  render() {
    return (
        <Row>
          <ApgVendorAktifDetailInformation inreview={true} />
        </Row>
    )
  }
}

export default ListView
