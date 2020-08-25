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
  state = {
    username: "",
    oldPassword: "",
    password: "",
    passwordConfirmation: ""
  }

  handleSubmit = obj => {
    this.props.changePassword(obj)
  }

  handleReset = () => {
    this.setState({
      username: "",
      oldPassword: "",
      password: "",
      passwordConfirmation: ""
    })
  }

  render() {
    let { username, oldPassword, password, passwordConfirmation } = this.state
    return (
      <Form>
        <Row className="mt-1">
          <Col className="mt-1" md="6" sm="12">
            <FormGroup>
              <Label for="name">Nama Pengguna*</Label>
              <Input type="text" id="namapengguna" value={username} onChange={e => this.setState({ username: e.target.value })} />
            </FormGroup>
            <FormGroup>
              <Label for="password">Kata Sandi</Label>
              <Input type="password" id="password" value={oldPassword} onChange={e => this.setState({ oldPassword: e.target.value })} />
            </FormGroup>
            <FormGroup>
              <Label for="passwordbaru">Kata Sandi Baru</Label>
              <Input type="password" id="passwordbaru" value={password} onChange={e => this.setState({ password: e.target.value })} />
            </FormGroup>
            <FormGroup>
              <Label for="passwordkonfirmasi">Konfirmasi Kata Sandi</Label>
              <Input type="password" id="passwordkonfirmasi" value={passwordConfirmation} onChange={e => this.setState({ passwordConfirmation: e.target.value })} />
            </FormGroup>
          </Col>

          <Col className="d-flex flex-wrap mt-3" sm="12">
            <Button.Ripple className="mr-1" color="primary" onClick={() => this.handleSubmit(this.state)}>
              Simpan Perubahan
            </Button.Ripple>
            <Button.Ripple color="flat-warning" onClick={() => this.handleReset()}>Reset</Button.Ripple>
          </Col>
        </Row>
      </Form>
    )
  }
}
export default UserAccountTab
