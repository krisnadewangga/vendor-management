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
import {
  getDataVendorById as getData,
  updateDataVendorAktif as updateData
} from "../../../redux/actions/apgVendor"
import { connect } from "react-redux"
import { history } from "../../../history"

class VendorProfile extends React.Component {
  componentDidMount() {
    this.props.getData(this.props)
  }

  handleVendorBermasalah() {
    let { data } = this.props.dataList
    let obj = {
      id : data.id,
      problem : true
    }
    this.props.updateData(obj)
    history.push('/apg/vendor-aktif')
  }

  render() {
    let { data } = this.props.dataList
    let linkTo;
    switch (this.props.vendor) {
      case 'aktif':
        linkTo = `/apg/vendor-aktif-detail/${data.id}`
        break

      case 'review':
        linkTo = `/apg/vendor-in-review-detail/${data.id}`
        break

      case 'bermasalah':
        linkTo = `/apg/vendor-bermasalah-detail/${data.id}`
        break

      default:
        break
    }
    return (
      <React.Fragment>
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
                                <h3>{data.nama_perusahaan}</h3>
                              </div>
                            </div>
                              <div className="user-info-title font-weight-bold">
                                <Row>
                                <Col sm={8}>
                                  <Button.Ripple className="mr-1" color="primary" outline>
                                    <Link to={linkTo}>
                                      <Edit size={15} />
                                      <span className="align-middle ml-50">Dokumen</span>
                                    </Link>
                                  </Button.Ripple>
                                  <span className="align-middle ml-50 mr-1">Skor:</span>
                                  <span className="align-middle ml-50 mr-1">{this.props.vendor === 'review' ? "-" : data.score === null ? '0 %' : `${data.score} %`}</span>
                                  <span className="align-middle ml-50 mr-1">Rating:</span>
                                  {this.props.vendor === 'review' ?
                                  <span>
                                    <Star size={20} fill="#fff" stroke="#b8c2cc" />
                                    <Star size={20} fill="#fff" stroke="#b8c2cc" />
                                    <Star size={20} fill="#fff" stroke="#b8c2cc" />
                                    <Star size={20} fill="#fff" stroke="#b8c2cc" />
                                    <Star size={20} fill="#fff" stroke="#b8c2cc" />
                                  </span>
                                  :
                                  <span>
                                    <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                                    <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                                    <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                                    <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                                    <Star size={20} fill="#fff" stroke="#b8c2cc" />
                                  </span>
                                  }
                                </Col>
                                {this.props.vendor === 'aktif' ?
                                <Col sm={4}>
                                  <Button.Ripple className="float-right" color="primary" outline onClick={() => this.handleVendorBermasalah()}>
                                    <Edit size={15} />
                                    <span className="align-middle ml-50">Pindahkan ke Vendor Bermasalah</span>
                                  </Button.Ripple>
                                </Col>
                                : ''}
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
                    <th>{data.nama_perusahaan}</th>
                  </tr>
                  <tr>
                    <th>Alamat</th>
                    <th>{data.alamat}</th>
                  </tr>
                  <tr>
                    <th>Kota</th>
                    <th>{data.kota !== null ? data.kota.nama : '-'}</th>
                  </tr>
                  <tr>
                    <th>Propinsi</th>
                    <th>{data.provinsi !== null ? data.provinsi.nama : '-'}</th>
                  </tr>
                  <tr>
                    <th>Nomor Telepon</th>
                    <th>{data.nomor_telepon}</th>
                  </tr>
                  <tr>
                    <th>Nomor Fax</th>
                    <th>{data.nomor_fax}</th>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <th>{data.user !== null ? data.user.email : '-'}</th>
                  </tr>
                  <tr>
                    <th>Website</th>
                    <th>{data.website}</th>
                  </tr>
                  <tr>
                    <th>Kontak</th>
                    <th>{data.nama_cp}</th>
                  </tr>
                  <tr>
                    <th>Industri Vendor</th>
                    <th>
                      { data.vendor_industries.map(x => <span> <Chip className="mr-1" text={x.nama} key={x.id} /> </span>) }
                    </th>
                  </tr>
                  <tr>
                    <th>Kelas Vendor</th>
                    <th>{data.vendor_class !== null ? data.vendor_class.kegiatan : '-'}</th>
                  </tr>
                  <tr>
                    <th>Sertifikat Badan Usaha</th>
                    <th>{data.sbu !== null ? `${data.sbu.kode} - ${data.sbu.sub_bidang}` : '-'}</th>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    dataList: state.apgVendor
  }
}

export default connect(mapStateToProps, {
  getData,
  updateData
})(VendorProfile)
