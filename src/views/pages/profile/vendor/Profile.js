import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Media,
  Row,
  Col,
  Button,
  Table,
  ListGroup,
  ListGroupItem,
  Badge,
} from "reactstrap"
import { Edit, Trash, FileText, CheckCircle, Upload, FileMinus, FilePlus, AlertTriangle, Star } from "react-feather"
import { Link } from "react-router-dom"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import userImg from "../../../../assets/img/portrait/small/avatar-s-19.jpg"
import "../../../../assets/scss/pages/users.scss"

class VendorProfile extends React.Component {
  render() {
    return (
      <React.Fragment>
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
                        <span className="align-middle ml-50">Ubah Informasi</span>
                      </Link>
                    </Button.Ripple>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
  
          <Col sm="12">
            <Card>
              <CardHeader className="border-bottom pb-1 mx-2 px-0">
                <CardTitle>
                  <FileText size={18} />
                  <span className="align-middle ml-50">Validasi & Kelengkapan Dokumen</span>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <ListGroup flush>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">
                    <span>Biscuit jelly beans macaroon danish pudding.</span>
                    <span>
                      <Button.Ripple className="mr-2" outline size="sm">
                        <Link to="/app/user/edit">
                          <Upload size={15} />
                          <span className="align-middle ml-50">Unggah</span>
                        </Link>
                      </Button.Ripple>
                      <CheckCircle size={18} color="green" />
                    </span>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">
                    <span>chocolate cheesecake candy.</span>
                    <span>
                      <Button.Ripple className="mr-2" outline size="sm">
                        <Link to="/app/user/edit">
                          <Upload size={15} />
                          <span className="align-middle ml-50">Unggah</span>
                        </Link>
                      </Button.Ripple>
                      <AlertTriangle size={18} color="red" />
                    </span>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">
                    <span>Oat cake icing pastry pie carrot.</span>
                    <span>
                      <Button.Ripple className="mr-2" outline size="sm">
                        <Link to="/app/user/edit">
                          <Upload size={15} />
                          <span className="align-middle ml-50">Unggah</span>
                        </Link>
                      </Button.Ripple>
                      <CheckCircle size={18} className="hide" />
                    </span>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">
                    <span>Biscuit jelly beans macaroon danish pudding.</span>
                    <span>
                      <Button.Ripple className="mr-2" outline size="sm">
                        <Link to="/app/user/edit">
                          <Upload size={15} />
                          <span className="align-middle ml-50">Unggah</span>
                        </Link>
                      </Button.Ripple>
                      <CheckCircle size={18} color="green" />
                    </span>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">
                    <span>chocolate cheesecake candy.</span>
                    <span>
                      <Button.Ripple className="mr-2" outline size="sm">
                        <Link to="/app/user/edit">
                          <Upload size={15} />
                          <span className="align-middle ml-50">Unggah</span>
                        </Link>
                      </Button.Ripple>
                      <CheckCircle size={18} className="hide" />
                    </span>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">
                    <span>Oat cake icing pastry pie carrot.</span>
                    <span>
                      <Button.Ripple className="mr-2" outline size="sm">
                        <Link to="/app/user/edit">
                          <Upload size={15} />
                          <span className="align-middle ml-50">Unggah</span>
                        </Link>
                      </Button.Ripple>
                      <CheckCircle size={18} color="green" />
                    </span>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">
                    <span>Biscuit jelly beans macaroon danish pudding.</span>
                    <span>
                      <Button.Ripple className="mr-2" outline size="sm">
                        <Link to="/app/user/edit">
                          <Upload size={15} />
                          <span className="align-middle ml-50">Unggah</span>
                        </Link>
                      </Button.Ripple>
                      <AlertTriangle size={18} color="red" />
                    </span>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">
                    <span>chocolate cheesecake candy.</span>
                    <span>
                      <Button.Ripple className="mr-2" outline size="sm">
                        <Link to="/app/user/edit">
                          <Upload size={15} />
                          <span className="align-middle ml-50">Unggah</span>
                        </Link>
                      </Button.Ripple>
                      <CheckCircle size={18} color="green" />
                    </span>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">
                    <span>Oat cake icing pastry pie carrot.</span>
                    <span>
                      {/* <Link to="/"><Upload size={18} className="mr-2 red" /></Link> */}
                      <Button.Ripple className="mr-2" outline size="sm">
                        <Link to="/app/user/edit">
                          <Upload size={15} />
                          <span className="align-middle ml-50">Unggah</span>
                        </Link>
                      </Button.Ripple>
                      <AlertTriangle size={18} color="red" />
                    </span>
                  </ListGroupItem>
                </ListGroup>

                <Button.Ripple className="mt-2 inactive" color="primary">
                  <Link to="/app/user/edit">
                    <Edit size={15} color="white" />
                    <span className="align-middle ml-50 white">Registrasi</span>
                  </Link>
                </Button.Ripple>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default VendorProfile
