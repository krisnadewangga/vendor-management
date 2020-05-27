import React from "react"
import {
  Row,
  Col,
  Button,
} from "reactstrap";

class MoreItems extends React.Component {
  render() {
    return (
      <Row>
        <Col sm="12">
          <div className="text-center pt-0" style={{marginBottom: 25}}>
            <Button.Ripple outline color="primary">
              Lihat Item Lainnya
            </Button.Ripple>
          </div>
        </Col>
      </Row>
    )
  }
}
export default MoreItems
