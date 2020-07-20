import React from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check, Phone, File } from "react-feather"
import { connect } from "react-redux"
import { signupWithJWT } from "../../../../redux/actions/auth/registerActions"
import { history } from "../../../../history"

class RegisterJWT extends React.Component {
  state = {
    company: "",
    nama_lengkap: "",
    email: "",
    password: "",
    confirmPass: ""
  }

  handleRegister = e => {
    e.preventDefault()
    this.props.signupWithJWT(
      this.state.company,
      this.state.nama_lengkap,
      this.state.email,
      this.state.password,
      this.state.confirmPass,
    )
  }

  render() {
    return (
      <Form action="/" onSubmit={this.handleRegister}>
        <FormGroup>
          <Label>Nama Perusahaan*</Label>
          <Input
            type="text"
            required
            value={this.state.company}
            onChange={e => this.setState({ company: e.target.value })}
          />
          {/* <div className="form-control-position"><Phone size={15} /></div> */}
        </FormGroup>
        <FormGroup>
          <Label>Nama Lengkap*</Label>
          <Input
            type="text"
            required
            value={this.state.nama_lengkap}
            onChange={e => this.setState({ nama_lengkap: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email*</Label>
          <Input
            type="email"
            required
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label>Kata Sandi*</Label>
          <Input
            type="password"
            required
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label>Konfirmasi Kata Sandi*</Label>
          <Input
            type="password"
            required
            value={this.state.confirmPass}
            onChange={e => this.setState({ confirmPass: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Checkbox
            color="primary"
            icon={<Check className="vx-icon" size={16} />}
            label={<span>Saya sudah membaca <a href="/">Kebijakan SCM/ Procurement</a>.</span>}
            defaultChecked={true}
          />
        </FormGroup>
        <div className="d-flex justify-content-between">
          <Button.Ripple color="primary" type="submit">
            Registrasi
          </Button.Ripple>
          <Button.Ripple
            color="primary"
            outline
            onClick={() => {
              history.push("/pages/login")
            }}
          >
            Masuk
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
