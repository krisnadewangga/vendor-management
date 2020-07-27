import React from "react"
import { Row, Col } from "reactstrap"
import ApgVendorAktifDetailInformation from "./apgVendorAktifDetailInformation"
// import queryString from "query-string"

class ListView extends React.Component {
  render() {
    return (
        <Row>
          <ApgVendorAktifDetailInformation id={this.props.location.pathname.split('/').pop()}/>
        </Row>
    )
  }
}

export default ListView
