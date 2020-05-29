import React from "react"
import {
  Row,
  Col,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom"

class MoreItems extends React.Component {
  render() {
    return (
      <Row>
        <Col sm="12">
          <div className="text-center pt-0" style={{marginBottom: 25}}>
            <Link to='/apg/katalog-semua'>
              <Button.Ripple outline color="primary"  >
                Lihat Item Lainnya
              </Button.Ripple>
            </Link>
          </div>
        </Col>
      </Row>
    )
  }
}
export default MoreItems
