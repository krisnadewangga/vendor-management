import React from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"
import { connect } from "react-redux"
import { signupWithJWT } from "../../../../redux/actions/auth/registerActions"
import { history } from "../../../../history"

class RegisterJWT extends React.Component {
  state = {
    email: "",
    password: "",
    name: "",
    confirmPass: ""
  }

  handleRegister = e => {
    e.preventDefault()
    this.props.signupWithJWT(
      this.state.email,
      this.state.password,
      this.state.name
    )
  }

  render() {
    return (
      <Form action="/" onSubmit={this.handleRegister}>
        <FormGroup className="form-label-group">
          <Input
            type="text"
            placeholder="Nama Lengkap"
            required
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <Label>Nama</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="email"
            placeholder="Email"
            required
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Label>Email</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="password"
            placeholder="Password"
            required
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <Label>Password</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="password"
            placeholder="Konfirmasi Password"
            required
            value={this.state.confirmPass}
            onChange={e => this.setState({ confirmPass: e.target.value })}
          />
          <Label>Konfirmasi Password</Label>
        </FormGroup>
        <FormGroup>
          <Checkbox
            color="primary"
            icon={<Check className="vx-icon" size={16} />}
            label=" Saya setuju dengan Syarat & Ketentuan."
            defaultChecked={true}
          />
        </FormGroup>
        <div className="d-flex justify-content-between">
          <Button.Ripple
            color="primary"
            outline
            onClick={() => {
              history.push("/pages/login")
            }}
          >
            Masuk
          </Button.Ripple>
          <Button.Ripple color="primary" type="submit">
            Registrasi
          </Button.Ripple>
        </div>
        
      </Form>
    )
  }
}
const mapStateToProps = state => {
  return {
    values: state.auth.register
  }
}
export default connect(mapStateToProps, { signupWithJWT })(RegisterJWT)
