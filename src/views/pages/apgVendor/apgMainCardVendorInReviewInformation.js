import React from "react"
import { Row, Col } from "reactstrap"
import ApgVendorAktifDetailInformation from "./apgVendorAktifDetailInformation"

class ListView extends React.Component {
  render() {
    return (
        <Row>
          <ApgVendorAktifDetailInformation vendor="review" id={this.props.location.pathname.split('/').pop()}/>
        </Row>
    )
  }
}

export default ListView
