import React from "react"
import { Link } from "react-router-dom"
import { CardBody, FormGroup, Form, Input, Button, Label } from "reactstrap"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Mail, Lock, Check } from "react-feather"
import { loginWithJWT } from "../../../../redux/actions/auth/loginActions"
import { connect } from "react-redux"
import { history } from "../../../../history"

class LoginJWT extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.role !== state.role) {
      return {
        role: props.role
      }
    }
    // Return null if the state hasn't changed
    return null
  }

  state = {
    identifier: "isur@test.com",
    password: "123456",
    remember: false,
    role: this.props.role
  }

  handleLogin = e => {
    e.preventDefault()
    this.props.loginWithJWT(this.state)
  }
  render() {
    return (
      <React.Fragment>
        <CardBody className="pt-1">
          <Form action="/" onSubmit={this.handleLogin}>
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="text"
                placeholder="Nama Pengguna / Email"
                value={this.state.identifier}
                onChange={e => this.setState({ identifier: e.target.value })}
                required
              />
              <div className="form-control-position">
                <Mail size={15} />
              </div>
              <Label>Nama Pengguna / Email</Label>
            </FormGroup>
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                required
              />
              <div className="form-control-position">
                <Lock size={15} />
              </div>
              <Label>Password</Label>
            </FormGroup>
            <FormGroup className="d-flex justify-content-between align-items-center">
              <Checkbox
                color="primary"
                icon={<Check className="vx-icon" size={16} />}
                label="Ingatkan saya"
                defaultChecked={false}
                onChange={this.handleRemember}
              />
              <div className="float-right">
                <Link to="/pages/forgot-password">Lupa Password?</Link>
              </div>
            </FormGroup>
            <div className="d-flex justify-content-between">
              {this.state.role === 'vendor' ? (
                <Button.Ripple
                  color="primary"
                  outline
                  onClick={() => {
                    history.push("/pages/register")
                  }}
                >
                  Registerasi Rekanan
                </Button.Ripple>
              ) : null}
              <Button.Ripple color="primary" type="submit">
                Masuk
              </Button.Ripple>
            </div>
          </Form>
        </CardBody>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    values: state.auth.login,
    role: state.auth.login.userRole
  }
}
export default connect(mapStateToProps, { loginWithJWT })(LoginJWT)
