import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Media,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Button
} from "reactstrap"
import classnames from "classnames"
import { Edit, Trash, FileText, CheckCircle, Upload, Share, Info, User, Star } from "react-feather"
import AccountTab from "./Account"
import InfoTab from "./Information"
import SocialTab from "./Social"
import { Link } from "react-router-dom"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import userImg from "../../../../assets/img/portrait/small/avatar-s-19.jpg"
import "../../../../assets/scss/pages/users.scss"

class VendorEditProfile extends React.Component {
  state = {
    activeTab: "1"
  }

  toggle = tab => {
    this.setState({
      activeTab: tab
    })
  }
  render() {
    return (
      <Row>

        <Col sm="12">
            <Card>
              <CardHeader>
                <CardTitle>Akun</CardTitle>
              </CardHeader>
              <CardBody>
                <Row className="mx-0" col="12">
                  <Col className="pl-0" sm="12">
                    <Media className="d-sm-flex d-block">
                      <Media className="md-1 mt-0" left>
                        <Media
                          className="rounded mr-2"
                          object
                          src={userImg}
                          alt="Foto Alt Image"
                          height="128"
                          width="128"
                        />
                      </Media>
                      <Media body>
                        <Row>
                          <Col sm="9" md="6" lg="5">
                            <div className="users-page-view-table">
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Nama Pengguna
                                </div>
                                <div>: Muhammad Abdullah</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Email
                                </div>
                                <div className="text-truncate">
                                  <span>: m.abdullah@gmail.com</span>
                                </div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Perusahaan
                                </div>
                                <div>: CV Maju Jaya Teknik</div>
                              </div>
                            </div>
                          </Col>
                          <Col md="12" lg="5">
                            <div className="users-page-view-table">
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Status
                                </div>
                                <div>: Terverifikasi</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Skor
                                </div>
                                <div>: 75%</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Rating
                                </div>
                                <div>
                                  <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                                  <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                                  <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                                  <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                                  <Star size={20} fill="#fff" stroke="#b8c2cc" />
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Media>
                    </Media>
                  </Col>
                  <Col className="mt-1 pl-0" sm="12">
                    <Button.Ripple className="mr-1" color="primary" outline>
                      <Link to="/vendor/ubah-profil">
                        <Edit size={15} />
                        <span className="align-middle ml-50">Unggah Foto</span>
                      </Link>
                    </Button.Ripple>
                    <Button.Ripple className="mr-1" color="primary" outline>
                      <Link to="/vendor/ubah-profil">
                        <Trash size={15} />
                        <span className="align-middle ml-50">Hapus Foto</span>
                      </Link>
                    </Button.Ripple>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>


        <Col sm="12">
          <Card>
            <CardBody className="pt-2">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "1"
                    })}
                    onClick={() => {
                      this.toggle("1")
                    }}
                  >
                    <Info size={16} />
                    <span className="align-middle ml-50">Info Perusahaan</span>
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
                    <User size={16} />
                    <span className="align-middle ml-50">Ubah Kata Sandi</span>
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <InfoTab />
                </TabPane>
                <TabPane tabId="2">
                  <AccountTab />
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}
export default VendorEditProfile
