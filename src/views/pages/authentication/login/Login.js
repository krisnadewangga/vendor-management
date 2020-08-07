import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap"
import classnames from "classnames"
import loginImg from "../../../../assets/img/pages//login/login-foto.png"
import "../../../../assets/scss/pages/authentication.scss"
import LoginAuth0 from "./LoginAuth0"
import LoginFirebase from "./LoginFirebase"
import LoginJWT from "./LoginJWT"
import axios from "axios"
import { changeRole } from "../../../../redux/actions/auth/loginActions"
import { connect } from "react-redux"

class Login extends React.Component {
  constructor(props) {
    super(props);
    // always set apg to default
    this.props.changeRole("apg")
  }

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
    activeTab: "1",
    role: 'apg'
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }

    if (tab === "1") {
      this.props.changeRole("apg")
    } else if (tab === "2") {
      this.props.changeRole("vendor")
    }
  }

  // componentDidMount(){
    // axios.get("https://apgbe.btoz.co.id/register-verifikasi/?confirmation=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTM3LCJpYXQiOjE1OTI4MTk4OTAsImV4cCI6MTU5NTQxMTg5MH0.5h5OPBfLZYOvqWJDv5kh6CIXStleDqTtGtLbZ315l2M")
    // .then(response => console.log(response))
    // .catch(response => console.log(response))
  // }
  render() {
    return (
      <Row className="m-0 justify-content-center">
        <Col
          sm="8"
          xl="7"
          lg="10"
          md="8"
          className="d-flex justify-content-center"
        >
          <Card className="bg-authentication login-card rounded-0 mb-0 w-100">
            <Row className="m-0">
              <Col
                lg="6"
                className="d-lg-block d-none text-center align-self-center px-1 py-0"
              >
                {/* <img src={loginImg} alt="loginImg" /> */}
              </Col>
              <Col lg="6" md="12" className="p-0">
                <Card className="rounded-0 mb-0 px-2 login-tabs-container">
                  <CardHeader className="pb-1">
                    <CardTitle>
                      {/* <h4 className="mb-0">Login</h4> */}
                    </CardTitle>
                  </CardHeader>
                  <h1 className="px-2 auth-title">
                    Vendor <br />Management <br />System.
                  </h1>
                  <h1 className="px-2 py-1 auth-title">
                    eCatalog.
                  </h1>
                  <Nav tabs className="px-2">
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.activeTab === "1"
                        })}
                        onClick={() => {
                          this.toggle("1")
                        }}
                      >
                        APG
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.activeTab === "2"
                        })}
                        onClick={() => {
                          this.toggle("2")
                        }}
                      >
                        Vendor
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      <LoginJWT />
                    </TabPane>
                    <TabPane tabId="2">
                      <LoginJWT />
                    </TabPane>
                  </TabContent>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => {
  return {
    role: state.auth.login.userRole
  }
}
export default connect(mapStateToProps, { changeRole })(Login)
