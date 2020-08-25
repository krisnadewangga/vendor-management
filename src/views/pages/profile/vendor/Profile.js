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
  Label,
  FormGroup,
  FormText,
  CustomInput,
  Input
} from "reactstrap"
import { Edit, Trash, FileText, CheckCircle, Upload, FileMinus, FilePlus, AlertTriangle, Star, Check } from "react-feather"
import { Link, withRouter } from "react-router-dom"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import userImg from "../../../../assets/img/portrait/small/avatar-s-19.jpg"
import "../../../../assets/scss/pages/users.scss"
import {
  getData,
  updateInfo,
  uploadFile
} from "../../../../redux/actions/profil"
import { showAlert} from '../../../../redux/actions/notification';
import { connect } from "react-redux"

const CustomAnchor = props => {
  let prop = {}

  if (props.param === undefined || props.param === null) {
    prop.href = "#"
  } else {
    prop.href = process.env.REACT_APP_URI_API + props.param.url
    prop.target = "_blank"
    prop.rel = "noopener noreferrer"
  }

  return (
    <a {...prop} >
      <span>{props.text}</span>
    </a>
  )
}

class VendorProfile extends React.Component {
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
  }

  componentDidMount() {
    this.props.getData()
  }

  fileUploadButton = (param) => (e) => {
    e.preventDefault()
    let newFiles = {}
    newFiles = {...this.state.files}
    const id_file = `file_${param}`
    document.getElementById(id_file).click();
    document.getElementById(id_file).onchange = (e) =>{
      const file = e.target.files[0] ? e.target.files[0] : null
      newFiles["param"] = param
      newFiles[param] = file
      newFiles[`confirmed_${param}`] = null

      if (file !== null) {
        this.props.uploadFile(newFiles)
      }
    }
  }

  handleRequestVerification = (e) => {
    e.preventDefault()
    this.props.updateInfo({ pengajuan:true })
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
                <span className="align-middle ml-50">Dokumen</span>
              </CardTitle>
            </CardHeader>
            <CardBody>
              <ListGroup flush>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <CustomAnchor param={data.SPT} text="Bukti Pelunasan Kewajiban Tahun Terakhir (SPT/PPh)*"/>
                  <span>
                    <Input type="file" id="file_SPT" hidden />
                    <Button.Ripple className="mr-2" outline size="sm">
                      <Link to='#' onClick={this.fileUploadButton('SPT')}>
                        <Upload size={15} />
                        <span className="align-middle ml-50" id="unggah_SPT">Unggah</span>
                      </Link>
                    </Button.Ripple>
                    {data.SPT === undefined || data.SPT === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_SPT === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <CustomAnchor param={data.TDP} text="Tanda Daftar Perusahaan (TDP)*"/>
                  <span>
                    <Input type="file" id="file_TDP" hidden />
                    <Button.Ripple className="mr-2" outline size="sm">
                      <Link to='#' onClick={this.fileUploadButton('TDP')}>
                        <Upload size={15} />
                        <span className="align-middle ml-50">Unggah</span>
                      </Link>
                    </Button.Ripple>
                    {data.TDP === undefined || data.TDP === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_TDP === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <CustomAnchor param={data.FIDK} text="Formulir Isian Dokumen Kualifikasi*"/>
                  <span>
                    <Input type="file" id="file_FIDK" hidden />
                    <Button.Ripple className="mr-2" outline size="sm">
                      <Link to='#' onClick={this.fileUploadButton('FIDK')}>
                        <Upload size={15} />
                        <span className="align-middle ml-50">Unggah</span>
                      </Link>
                    </Button.Ripple>
                    {data.FIDK === undefined || data.FIDK === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_FIDK === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <CustomAnchor param={data.PaktaIntegritas} text="Pakta Integritas*"/>
                  <span>
                    <Input type="file" id="file_PaktaIntegritas" hidden />
                    <Button.Ripple className="mr-2" outline size="sm">
                      <Link to='#' onClick={this.fileUploadButton('PaktaIntegritas')}>
                        <Upload size={15} />
                        <span className="align-middle ml-50">Unggah</span>
                      </Link>
                    </Button.Ripple>
                    {data.PaktaIntegritas === undefined || data.PaktaIntegritas === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_PaktaIntegritas === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <CustomAnchor param={data.SITU} text="Surat Ijin Tempat Usaha (SITU)/Izin Gangguan*"/>
                  <span>
                    <Input type="file" id="file_SITU" hidden />
                    <Button.Ripple className="mr-2" outline size="sm">
                      <Link to='#' onClick={this.fileUploadButton('SITU')}>
                        <Upload size={15} />
                        <span className="align-middle ml-50">Unggah</span>
                      </Link>
                    </Button.Ripple>
                    {data.SITU === undefined || data.SITU === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_SITU === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <CustomAnchor param={data.SIUP} text="Surat Ijin Usaha Perdagangan (SIUP)*"/>
                  <span>
                    <Input type="file" id="file_SIUP" hidden />
                    <Button.Ripple className="mr-2" outline size="sm">
                      <Link to='#' onClick={this.fileUploadButton('SIUP')}>
                        <Upload size={15} />
                        <span className="align-middle ml-50">Unggah</span>
                      </Link>
                    </Button.Ripple>
                    {data.SIUP === undefined || data.SIUP === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_SIUP === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <CustomAnchor param={data.NPWP} text="NPWP + SPPKP*"/>
                  <span>
                    <Input type="file" id="file_NPWP" hidden />
                    <Button.Ripple className="mr-2" outline size="sm">
                      <Link to='#' onClick={this.fileUploadButton('NPWP')}>
                        <Upload size={15} />
                        <span className="align-middle ml-50">Unggah</span>
                      </Link>
                    </Button.Ripple>
                    {data.NPWP === undefined || data.NPWP === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_NPWP === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <CustomAnchor param={data.CompanyProfile} text="Profil Perusahaan*"/>
                  <span>
                    <Input type="file" id="file_CompanyProfile" hidden />
                    <Button.Ripple className="mr-2" outline size="sm">
                      <Link to='#' onClick={this.fileUploadButton('CompanyProfile')}>
                        <Upload size={15} />
                        <span className="align-middle ml-50">Unggah</span>
                      </Link>
                    </Button.Ripple>
                    {data.CompanyProfile === undefined || data.CompanyProfile === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_CompanyProfile === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <CustomAnchor param={data.K3} text="Sertifikat K3/HSE"/>
                  <span>
                    <Input type="file" id="file_K3" hidden />
                    <Button.Ripple className="mr-2" outline size="sm">
                      <Link to='#' onClick={this.fileUploadButton('K3')}>
                        <Upload size={15} />
                        <span className="align-middle ml-50">Unggah</span>
                      </Link>
                    </Button.Ripple>
                    {data.K3 === undefined || data.K3 === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_K3 === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <CustomAnchor param={data.AP} text="Akte Pendirian*"/>
                  <span>
                    <Input type="file" id="file_AP" hidden />
                    <Button.Ripple className="mr-2" outline size="sm">
                      <Link to='#' onClick={this.fileUploadButton('AP')}>
                        <Upload size={15} />
                        <span className="align-middle ml-50">Unggah</span>
                      </Link>
                    </Button.Ripple>
                    {data.AP === undefined || data.AP === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_AP === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <CustomAnchor param={data.PK} text="Pengesahan Kehakiman*"/>
                  <span>
                    <Input type="file" id="file_PK" hidden />
                    <Button.Ripple className="mr-2" outline size="sm">
                      <Link to='#' onClick={this.fileUploadButton('PK')}>
                        <Upload size={15} />
                        <span className="align-middle ml-50">Unggah</span>
                      </Link>
                    </Button.Ripple>
                    {data.PK === undefined || data.PK === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_PK === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <CustomAnchor param={data.APT} text="Akte Perubahan Terakhir"/>
                  <span>
                    <Input type="file" id="file_APT" hidden />
                    <Button.Ripple className="mr-2" outline size="sm">
                      <Link to='#' onClick={this.fileUploadButton('APT')}>
                        <Upload size={15} />
                        <span className="align-middle ml-50">Unggah</span>
                      </Link>
                    </Button.Ripple>
                    {data.APT === undefined || data.APT === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_APT === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <CustomAnchor param={data.PKP} text="Pengesahan Kehakiman Perubahan"/>
                  <span>
                    <Input type="file" id="file_PKP" hidden />
                    <Button.Ripple className="mr-2" outline size="sm">
                      <Link to='#' onClick={this.fileUploadButton('PKP')}>
                        <Upload size={15} />
                        <span className="align-middle ml-50">Unggah</span>
                      </Link>
                    </Button.Ripple>
                    {data.PKP === undefined || data.PKP === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_PKP === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <CustomAnchor param={data.SBU} text="Sertifikat Badan Usaha (SBU)"/>
                  <span>
                    <Input type="file" id="file_SBU" hidden />
                    <Button.Ripple className="mr-2" outline size="sm">
                      <Link to='#' onClick={this.fileUploadButton('SBU')}>
                        <Upload size={15} />
                        <span className="align-middle ml-50">Unggah</span>
                      </Link>
                    </Button.Ripple>
                    {data.SBU === undefined || data.SBU === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_SBU === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <CustomAnchor param={data.SIUJK} text="Surat Ijin Usaha Jasa Konstruksi (SIUJK)"/>
                  <span>
                    <Input type="file" id="file_SIUJK" hidden />
                    <Button.Ripple className="mr-2" outline size="sm">
                      <Link to='#' onClick={this.fileUploadButton('SIUJK')}>
                        <Upload size={15} />
                        <span className="align-middle ml-50">Unggah</span>
                      </Link>
                    </Button.Ripple>
                    {data.SIUJK === undefined || data.SIUJK === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_SIUJK === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <CustomAnchor param={data.LKT} text="Laporan Keuangan Terakhir*"/>
                  <span>
                    <Input type="file" id="file_LKT" hidden />
                    <Button.Ripple className="mr-2" outline size="sm">
                      <Link to='#' onClick={this.fileUploadButton('LKT')}>
                        <Upload size={15} />
                        <span className="align-middle ml-50">Unggah</span>
                      </Link>
                    </Button.Ripple>
                    {data.LKT === undefined || data.LKT === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_LKT === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
              </ListGroup>

              {data.confirmed || (data.pengajuan === true && data.confirmed === false) ? null : (
                <Button.Ripple className="mt-2" color="primary">
                  <Link to="#" onClick={e => this.handleRequestVerification(e)}>
                    <CheckCircle size={15} color="white" />
                    <span className="align-middle ml-50 white">Ajukan Verifikasi Vendor</span>
                  </Link>
                </Button.Ripple>
              )}
            </CardBody>
          </Card>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    data: state.profil.data
  }
}

export default connect(mapStateToProps, {
  getData,
  showAlert,
  updateInfo,
  uploadFile
})(VendorProfile)
