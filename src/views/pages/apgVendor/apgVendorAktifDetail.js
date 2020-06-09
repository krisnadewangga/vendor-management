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
import { Edit, Trash, FileText, CheckCircle, Upload, FileMinus, FilePlus, AlertTriangle, Star, DownloadCloud, MoreHorizontal } from "react-feather"
import { Link } from "react-router-dom"
import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy"
import userImg from "../../../assets/img/portrait/small/avatar-s-3.jpg"
import "../../../assets/scss/pages/users.scss"

class VendorProfile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Row className="mx-0" col="12">
                  <Col className="pl-0" sm="12">
                    <Media className="d-sm-flex d-block">
                      <Media className="md-1 mt-0" left>
                        <img
                          src={userImg}
                          alt="porfileImg"
                          className="img-fluid img-border rounded-circle box-shadow-1"
                        />
                      </Media>
                      <Media body className="ml-2 just align-self-center"> 
                        <Row>
                          <Col>
                            <div className="users-page-view-table">
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  <h3>CV Maju Makmur</h3>
                                </div>
                              </div>
                                <div className="user-info-title font-weight-bold">
                                  <Row>
                                  <Col sm={8}>
                                    <Button.Ripple className="mr-1" color="primary" outline>
                                      <Link to="/apg/vendor-aktif-detail-information">
                                        <Edit size={15} />
                                        <span className="align-middle ml-50">Informasi Vendor</span>
                                      </Link>
                                    </Button.Ripple>
                                    <span className="align-middle ml-50 mr-1">Skor:</span>
                                    <span className="align-middle ml-50 mr-1">60 %</span>
                                    <span className="align-middle ml-50 mr-1">Rating:</span>
                                    <span>
                                      <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                                      <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                                      <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                                      <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                                      <Star size={20} fill="#fff" stroke="#b8c2cc" />
                                    </span>
                                  </Col>
                                  <Col sm={4}>
                                    <Button.Ripple className="float-right" color="primary" outline>
                                      <Link to="/vendor/ubah-profil">
                                        <Edit size={15} />
                                        <span className="align-middle ml-50">Pindahkan ke Vendor Bermasalah</span>
                                      </Link>
                                    </Button.Ripple>
                                  </Col>
                                  </Row>
                                </div>
                            </div>
                          </Col>
                        </Row>
                      </Media>
                    </Media>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
  
          <Col sm="12">
            <Card>
              <CardHeader className="border-bottom pb-1 mx-2 px-0">
                <CardTitle>
                  <span className="align-middle ml-50">Dokumen</span>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <ListGroup flush>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">
                    <span>Biscuit jelly beans macaroon danish pudding.</span>
                    <span>
                      <Link className="mr-2" to="#">
                        <DownloadCloud size={20} color="grey" />
                      </Link>
                      <CheckCircle size={18} color="green" className="mr-2" />
                      <Link to="/app/user/edit">
                        <MoreHorizontal size={18} color="grey" />
                      </Link>
                    </span>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">
                    <span>chocolate cheesecake candy.</span>
                    <span>
                      <Link className="mr-2" to="#">
                        <DownloadCloud size={20} color="grey" />
                      </Link>
                      <AlertTriangle size={18} color="red" className="mr-2" />
                      <Link to="/app/user/edit">
                        <MoreHorizontal size={18} color="grey" />
                      </Link>
                    </span>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">
                    <span>Oat cake icing pastry pie carrot.</span>
                    <span>
                      <Link className="mr-2" to="#">
                        <DownloadCloud size={20} color="grey" />
                      </Link>
                      <CheckCircle size={18} color="green" className="mr-2 hide" />
                      <Link to="/app/user/edit">
                        <MoreHorizontal size={18} color="grey" />
                      </Link>
                    </span>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">
                    <span>Biscuit jelly beans macaroon danish pudding.</span>
                    <span>
                      <Link className="mr-2" to="#">
                        <DownloadCloud size={20} color="grey" />
                      </Link>
                      <CheckCircle size={18} color="green" className="mr-2 hide" />
                      <Link to="/app/user/edit">
                        <MoreHorizontal size={18} color="grey" />
                      </Link>
                    </span>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">
                    <span>chocolate cheesecake candy.</span>
                    <span>
                      <Link className="mr-2" to="#">
                        <DownloadCloud size={20} color="grey" />
                      </Link>
                      <AlertTriangle size={18} color="red" className="mr-2" />
                      <Link to="/app/user/edit">
                        <MoreHorizontal size={18} color="grey" />
                      </Link>
                    </span>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">
                    <span>Oat cake icing pastry pie carrot.</span>
                    <span>
                      <Link className="mr-2" to="#">
                        <DownloadCloud size={20} color="grey" />
                      </Link>
                      <CheckCircle size={18} color="green" className="mr-2" />
                      <Link to="/app/user/edit">
                        <MoreHorizontal size={18} color="grey" />
                      </Link>
                    </span>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">
                    <span>Biscuit jelly beans macaroon danish pudding.</span>
                    <span>
                      <Link className="mr-2" to="#">
                        <DownloadCloud size={20} color="grey" />
                      </Link>
                      <CheckCircle size={18} color="green" className="mr-2 hide" />
                      <Link to="/app/user/edit">
                        <MoreHorizontal size={18} color="grey" />
                      </Link>
                    </span>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">
                    <span>chocolate cheesecake candy.</span>
                    <span>
                      <Link className="mr-2" to="#">
                        <DownloadCloud size={20} color="grey" />
                      </Link>
                      <CheckCircle size={18} color="green" className="mr-2" />
                      <Link to="/app/user/edit">
                        <MoreHorizontal size={18} color="grey" />
                      </Link>
                    </span>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">
                    <span>Oat cake icing pastry pie carrot.</span>
                    <span>
                      <Link className="mr-2" to="#">
                        <DownloadCloud size={20} color="grey" />
                      </Link>
                      <CheckCircle size={18} color="green" className="mr-2 hide" />
                      <Link to="/app/user/edit">
                        <MoreHorizontal size={18} color="grey" />
                      </Link>
                    </span>
                  </ListGroupItem>
                </ListGroup>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default VendorProfile
