import React from "react"
import {
  Media,
  Row,
  Col,
  Button,
  Form,
  Input,
  Label,
  FormGroup,
  Table
} from "reactstrap"
import userImg from "../../../../assets/img/portrait/small/avatar-s-19.jpg"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check, Lock } from "react-feather"
class UserAccountTab extends React.Component {
  render() {
    return (
      <Row>
        <Col sm="12">
          <Form onSubmit={e => e.preventDefault()}>
            <Row>
              
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="name">Nama Pengguna</Label>
                  <Input
                    type="text"
                    defaultValue="Muhammad Abdullah"
                    id="name"
                    placeholder="Name"
                  />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="company">Company</Label>
                  <Input
                    type="text"
                    id="company"
                    defaultValue="North Star Aviation Pvt Ltd"
                    placeholder="company"
                  />
                </FormGroup>
              </Col>

              <Col
                className="d-flex justify-content-end flex-wrap mt-2"
                sm="12"
              >
                <Button.Ripple className="mr-1" color="primary">
                  Simpan Perubahan
                </Button.Ripple>
                <Button.Ripple color="flat-warning">Reset</Button.Ripple>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    )
  }
}
export default UserAccountTab
