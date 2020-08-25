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
  Button,
  Input
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
import {
  getData,
  getInitialDataProvinsi,
  getInitialDataKota,
  getInitialDataVendorKategori,
  getInitialDataVendorKelas,
  getInitialDataVendorSbu,
  changePassword,
  updateInfo,
  uploadAva,
  deleteAva
} from "../../../../redux/actions/profil"
import { showAlert} from "../../../../redux/actions/notification";
import { connect } from "react-redux"
import { getLoggedInUser } from "../../../../redux/config"

class VendorEditProfile extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (
      props.data !== state.data
    ) {
      return {
        data: props.data,
      }
    }

    // Return null if the state hasn't changed
    return null
  }

  state = {
    data: [],
    activeTab: "1"
  }

  componentDidMount() {
    this.props.getData()
    this.props.getInitialDataProvinsi()
    this.props.getInitialDataKota(getLoggedInUser().user.vendor.provinsi)
    this.props.getInitialDataVendorKategori()
    this.props.getInitialDataVendorKelas()
    this.props.getInitialDataVendorSbu()
  }

  toggle = tab => {
    this.setState({
      activeTab: tab
    })
  }

  handleUploadAva = (e) => {
    e.preventDefault()
    document.getElementById('uploadAva').click();
    document.getElementById('uploadAva').onchange = (e) =>{
      const file = e.target.files[0] ? e.target.files[0] : null
      if (file !== null) {
        this.props.uploadAva(file)
      }
    }
  }

  handleDeleteAva = (e) => {
    e.preventDefault()
    this.props.deleteAva()
  }

  render() {
    let { data } = this.state

    /*
    pengajuan, confirmed, problem
    000 => -
    100 => Proses Verifikasi
    010 atau 110 => Terverifikasi
    011 atau 111 => Bermasalah
     */
    let status
    if (data.pengajuan && !data.confirmed && !data.problem) {
      status = 'Proses Verifikasi'
    } else if ( (!data.pengajuan && data.confirmed && !data.problem) || (data.pengajuan && data.confirmed && !data.problem) ) {
      status = 'Terverifikasi'
    }else if ( (!data.pengajuan && data.confirmed && data.problem) || (data.pengajuan && data.confirmed && data.problem) ) {
      status = 'Bermasalah'
    }else {
      status = "-"
    }

    let ratingStar = []
    for (let index = 1; index <= 5; index++) {
      if (index <= Math.floor(data.rating)) {
        ratingStar.push(
          <Star key={index} size={20} fill="#ff9f43" stroke="#ff9f43" />
        )
      }else {
        ratingStar.push(
          <Star key={index} size={20} fill="#fff" stroke="#b8c2cc" />
        )
      }
    }

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
                          src={data.user ? (data.user.avatar ? process.env.REACT_APP_URI_API + data.user.avatar.url : userImg) : userImg}
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
                                <div>: {data.user ? data.user.username : ''}</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Email
                                </div>
                                <div className="text-truncate">
                                  <span>: {data.user ? data.user.email : ''}</span>
                                </div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Perusahaan
                                </div>
                                <div>: {data.nama_perusahaan}</div>
                              </div>
                            </div>
                          </Col>
                          <Col md="12" lg="5">
                            <div className="users-page-view-table">
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Status
                                </div>
                                <div>: {status}</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Skor
                                </div>
                                <div>: {data.score}</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Rating
                                </div>
                                <div>
                                  {ratingStar}
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Media>
                    </Media>
                  </Col>
                  <Col className="mt-1 pl-0" sm="12">
                    <Input type="file" id="uploadAva" hidden />
                    <Button.Ripple className="mr-1" color="primary" outline>
                      <Link to="/vendor/ubah-profil" onClick={e => this.handleUploadAva(e)} >
                        <Edit size={15} />
                        <span className="align-middle ml-50">Unggah Foto</span>
                      </Link>
                    </Button.Ripple>
                    <Button.Ripple className="mr-1" color="primary" outline>
                      <Link to="/vendor/ubah-profil" onClick={e => this.handleDeleteAva(e)}>
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
                  <InfoTab
                    data={data}
                    nama_perusahaan={data.nama_perusahaan}
                    alamat={data.alamat}
                    nama_cp={data.nama_cp}
                    nomor_telepon={data.nomor_telepon}
                    nomor_fax={data.nomor_fax}
                    email={data.user ? data.user.email : ''}
                    website={data.website}
                    provinsi={this.props.provinsi}
                    kota={this.props.kota}
                    vendorIndustri={this.props.vendorIndustri}
                    vendorKelas={this.props.vendorKelas}
                    vendorSBU={this.props.vendorSBU}
                    updateInfo={this.props.updateInfo}
                    />
                </TabPane>
                <TabPane tabId="2">
                  <AccountTab changePassword={this.props.changePassword} />
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}
const mapStateToProps = state => {
  return {
    data: state.profil.data,
    provinsi: state.profil.provinsi,
    kota: state.profil.kota,
    vendorIndustri: state.profil.vendorIndustri,
    vendorKelas: state.profil.vendorKelas,
    vendorSBU: state.profil.vendorSBU,
  }
}

export default connect(mapStateToProps, {
  getData,
  showAlert,
  changePassword,
  getInitialDataProvinsi,
  getInitialDataKota,
  getInitialDataVendorKategori,
  getInitialDataVendorKelas,
  getInitialDataVendorSbu,
  updateInfo,
  uploadAva,
  deleteAva
})(VendorEditProfile)
