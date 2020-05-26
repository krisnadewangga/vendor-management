import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap"
import classnames from "classnames"
import RegisterFirebase from "./RegisterFirebase"
import RegisterAuth0 from "./RegisterAuth0"
import RegisterJWT from "./RegisterJWT"
import registerImg from "../../../../assets/img/pages/register.jpg"
import "../../../../assets/scss/pages/authentication.scss"

class Register extends React.Component {
  state = {
    activeTab: "1"
  }
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }
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
          <Card className="bg-authentication register-card rounded-0 mb-0 w-100">
            <Row className="m-0">
              <Col
                lg="6"
                className="d-lg-block d-none text-center align-self-center px-1 py-0"
              >
                {/* <img className="mr-1" src={registerImg} alt="registerImg" /> */}
              </Col>
              <Col lg="6" md="12" className="p-0">
                <Card className="rounded-0 mb-0 p-2">
                  <CardHeader className="pb-1 pt-50">
                    <CardTitle>
                      {/* <h4 className="mb-0">Buat Akun</h4> */}
                    </CardTitle>
                  </CardHeader>
                  <h1 className="px-2 auth-title">
                    Vendor <br />Management <br />System.
                  </h1>
                  <h1 className="px-2 py-1 auth-title">
                    eCatalog.
                  </h1>
                  <CardBody className="pt-1 pb-50">
                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId="1">
                        <RegisterJWT />
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}
export default Register
