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
      <Form onSubmit={e => e.preventDefault()}>
        <Row className="mt-1">
          <Col className="mt-1" md="6" sm="12">
            <FormGroup>
              <Label for="name">Nama Pengguna*</Label>
              <Input type="text" defaultValue="Muhammad Abdullah" id="namapengguna"/>
            </FormGroup>
            <FormGroup>
              <Label for="password">Kata Sandi</Label>
              <Input type="password" id="password" defaultValue="bismillah" />
            </FormGroup>
            <FormGroup>
              <Label for="passwordbaru">Kata Sandi Baru</Label>
              <Input type="passwordbaru" id="passwordbaru" defaultValue="bismillah" />
            </FormGroup>
            <FormGroup>
              <Label for="passwordkonfirmasi">Konfirmasi Kata Sandi</Label>
              <Input type="passwordkonfirmasi" id="passwordkonfirmasi" defaultValue="bismillah" />
            </FormGroup>
          </Col>

          <Col className="d-flex flex-wrap mt-3" sm="12">
            <Button.Ripple className="mr-1" color="primary">
              Simpan Perubahan
            </Button.Ripple>
            <Button.Ripple color="flat-warning">Reset</Button.Ripple>
          </Col>
        </Row>
      </Form>
    )
  }
}
export default UserAccountTab
