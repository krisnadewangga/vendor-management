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
import Chip from "../../../components/@vuexy/chips/ChipComponent"
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
                                      <Link to="/apg/vendor-aktif-detail">
                                        <Edit size={15} />
                                        <span className="align-middle ml-50">Dokumen</span>
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
                  <span className="align-middle ml-50">Info Perusahaan</span>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive borderless>
                  <tbody>
                    <tr>
                      <th>Nama Perusahaan</th>
                      <th>PT SURYA TATA ALAM RAYA</th>
                    </tr>
                    <tr>
                      <th>Alamat</th>
                      <th>Grand Aries Naga Jl. Taman Aries Utama Blok G1 No IV Jakarta Barat</th>
                    </tr>
                    <tr>
                      <th>Kota</th>
                      <th>Jakarta Selatan</th>
                    </tr>
                    <tr>
                      <th>Propinsi</th>
                      <th>DKI Jakarta</th>
                    </tr>
                    <tr>
                      <th>Nomor Telepon</th>
                      <th>(021) 721 0000</th>
                    </tr>
                    <tr>
                      <th>Nomor Fax</th>
                      <th>(021) 725 8003</th>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <th>abdullah@starvendor.com</th>
                    </tr>
                    <tr>
                      <th>Website</th>
                      <th>www.majumakmur.com</th>
                    </tr>
                    <tr>
                      <th>Kontak</th>
                      <th>Abudllah</th>
                    </tr>
                    <tr>
                      <th>Industri Vendor</th>
                      <th>
                        <span>
                          <Chip
                            className="mr-1"
                            text={"Listrik"}
                          />
                        </span>
                        <span>
                          <Chip
                            className="mr-1"
                            text={"Bahan Bangunan"}
                          />
                        </span>
                        <span>
                          <Chip
                            className="mr-1"
                            text={"Pipa"}
                          />
                        </span>
                      </th>
                    </tr>
                    <tr>
                      <th>Kelas Vendor</th>
                      <th>Perdagangan Besar Bahan dan Perlengkapan Bangunan</th>
                    </tr>
                    <tr>
                      <th>Sertifikat Badan Usaha</th>
                      <th>BG004 - Jasa Pelaksana Konstruksi Bangunan Komersial</th>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default VendorProfile
