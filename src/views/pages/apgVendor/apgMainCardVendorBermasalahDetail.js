import React from "react"
import { Row, Col } from "reactstrap"
import ApgVendorAktifDetail from "./apgVendorAktifDetail"

class ListView extends React.Component {
  render() {
    return (
        <Row>
          <ApgVendorAktifDetail vendor="bermasalah" id={this.props.location.pathname.split('/').pop()}/>
        </Row>
    )
  }
}

export default ListView
