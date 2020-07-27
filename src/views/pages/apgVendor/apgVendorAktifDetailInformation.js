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
  getDataVendorAktifById as getData,
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
  }

  render() {
    let { data } = this.props.dataList
    console.log(data, data.AP === null);
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
                                      <Edit size={15} />
                                      <span className="align-middle ml-50">Dokumen</span>
                                  </Button.Ripple>
                                  <span className="align-middle ml-50 mr-1">Skor:</span>
                                  <span className="align-middle ml-50 mr-1">{this.props.inreview ? "-" : `${data.score} %`}</span>
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
                                  <Button.Ripple className="float-right" color="primary" outline onClick={() => this.handleVendorBermasalah()}>
                                    <Edit size={15} />
                                    <span className="align-middle ml-50">Pindahkan ke Vendor Bermasalah</span>
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
                    <th>{data.nama_perusahaan}</th>
                  </tr>
                  <tr>
                    <th>Alamat</th>
                    <th>{data.alamat}</th>
                  </tr>
                  <tr>
                    <th>Kota</th>
                    <th>{data.kota !== undefined ? data.kota.nama : '-'}</th>
                  </tr>
                  <tr>
                    <th>Propinsi</th>
                    <th>{data.provinsi !== undefined ? data.provinsi.nama : '-'}</th>
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
                    <th>{data.user !== undefined ? data.user.email : '-'}</th>
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
                      { data.vendor_industries !== undefined ? data.vendor_industries.map(x => <span> <Chip className="mr-1" text={x.nama} key={x.id} /> </span>) : '-' }
                    </th>
                  </tr>
                  <tr>
                    <th>Kelas Vendor</th>
                    <th>{data.vendor_class !== undefined ? data.vendor_class.kegiatan : '-'}</th>
                  </tr>
                  <tr>
                    <th>Sertifikat Badan Usaha</th>
                    <th>{data.sbu !== undefined ? `${data.sbu.kode} - ${data.sbu.sub_bidang}` : '-'}</th>
                  </tr>
                </tbody>
              </Table>
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
                  <span>Bukti Pelunasan Kewajiban Tahun Terakhir (SPT/PPh)</span>
                  <span>
                    <Button.Ripple className="mr-2" outline size="sm">
                      <a href={data.SPT === undefined || data.SPT === null ? '#' : process.env.REACT_APP_URI_API + data.SPT.url} target="_blank">
                        <DownloadCloud size={15} />
                        <span className="align-middle ml-50">Unduh</span>
                      </a>
                    </Button.Ripple>
                    {data.SPT === undefined || data.SPT === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_SPT === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <span>Tanda Daftar Perusahaan (TDP)</span>
                  <span>
                    <Button.Ripple className="mr-2" outline size="sm">
                      <a href={data.TDP === undefined || data.TDP === null ? '#' : process.env.REACT_APP_URI_API + data.TDP.url} target="_blank">
                        <DownloadCloud size={15} />
                        <span className="align-middle ml-50">Unduh</span>
                      </a>
                    </Button.Ripple>
                    {data.TDP === undefined || data.TDP === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_TDP === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <span>Formulir Isian Dokumen Kualifikasi</span>
                  <span>
                    <Button.Ripple className="mr-2" outline size="sm">
                      <a href={data.FIDK === undefined || data.FIDK === null ? '#' : process.env.REACT_APP_URI_API + data.FIDK.url} target="_blank">
                        <DownloadCloud size={15} />
                        <span className="align-middle ml-50">Unduh</span>
                      </a>
                    </Button.Ripple>
                    {data.FIDK === undefined || data.FIDK === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_FIDK === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <span>Pakta Integritas</span>
                  <span>
                    <Button.Ripple className="mr-2" outline size="sm">
                      <a href={data.PaktaIntegritas === undefined || data.PaktaIntegritas === null ? '#' : process.env.REACT_APP_URI_API + data.PaktaIntegritas.url} target="_blank">
                        <DownloadCloud size={15} />
                        <span className="align-middle ml-50">Unduh</span>
                      </a>
                    </Button.Ripple>
                    {data.PaktaIntegritas === undefined || data.PaktaIntegritas === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_PaktaIntegritas === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <span>Surat Ijin Tempat Usaha (SITU)/Izin Gangguan</span>
                  <span>
                    <Button.Ripple className="mr-2" outline size="sm">
                      <a href={data.SITU === undefined || data.SITU === null ? '#' : process.env.REACT_APP_URI_API + data.SITU.url} target="_blank">
                        <DownloadCloud size={15} />
                        <span className="align-middle ml-50">Unduh</span>
                      </a>
                    </Button.Ripple>
                    {data.SITU === undefined || data.SITU === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_SITU === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <span>Surat Ijin Usaha Perdagangan (SIUP)</span>
                  <span>
                    <Button.Ripple className="mr-2" outline size="sm">
                      <a href={data.SIUP === undefined || data.SIUP === null ? '#' : process.env.REACT_APP_URI_API + data.SIUP.url} target="_blank">
                        <DownloadCloud size={15} />
                        <span className="align-middle ml-50">Unduh</span>
                      </a>
                    </Button.Ripple>
                    {data.SIUP === undefined || data.SIUP === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_SIUP === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <span>NPWP + SPPKP</span>
                  <span>
                    <Button.Ripple className="mr-2" outline size="sm">
                      <a href={data.NPWP === undefined || data.NPWP === null ? '#' : process.env.REACT_APP_URI_API + data.NPWP.url} target="_blank">
                        <DownloadCloud size={15} />
                        <span className="align-middle ml-50">Unduh</span>
                      </a>
                    </Button.Ripple>
                    {data.NPWP === undefined || data.NPWP === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_NPWP === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <span>Profil Perusahaan</span>
                  <span>
                    <Button.Ripple className="mr-2" outline size="sm">
                      <a href={data.CompanyProfile === undefined || data.CompanyProfile === null ? '#' : process.env.REACT_APP_URI_API + data.CompanyProfile.url} target="_blank">
                        <DownloadCloud size={15} />
                        <span className="align-middle ml-50">Unduh</span>
                      </a>
                    </Button.Ripple>
                    {data.CompanyProfile === undefined || data.CompanyProfile === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_CompanyProfile === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <span>Sertifikat K3/HSE</span>
                  <span>
                    <Button.Ripple className="mr-2" outline size="sm">
                      <a href={data.K3 === undefined || data.K3 === null ? '#' : process.env.REACT_APP_URI_API + data.K3.url} target="_blank">
                        <DownloadCloud size={15} />
                        <span className="align-middle ml-50">Unduh</span>
                      </a>
                    </Button.Ripple>
                    {data.K3 === undefined || data.K3 === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_K3 === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <span>Akte Pendirian</span>
                  <span>
                    <Button.Ripple className="mr-2" outline size="sm">
                      <a href={data.AP === undefined || data.AP === null ? '#' : process.env.REACT_APP_URI_API + data.AP.url} target="_blank" target="_blank">
                        <DownloadCloud size={15} />
                        <span className="align-middle ml-50">Unduh</span>
                      </a>
                    </Button.Ripple>
                    {data.AP === undefined || data.AP === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_AP === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <span>Pengesahan Kehakiman</span>
                  <span>
                    <Button.Ripple className="mr-2" outline size="sm">
                      <a href={data.PK === undefined || data.PK === null ? '#' : process.env.REACT_APP_URI_API + data.PK.url} target="_blank">
                        <DownloadCloud size={15} />
                        <span className="align-middle ml-50">Unduh</span>
                      </a>
                    </Button.Ripple>
                    {data.PK === undefined || data.PK === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_PK === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <span>Akte Perubahan Terakhir</span>
                  <span>
                    <Button.Ripple className="mr-2" outline size="sm">
                      <a href={data.APT === undefined || data.APT === null ? '#' : process.env.REACT_APP_URI_API + data.APT.url} target="_blank">
                        <DownloadCloud size={15} />
                        <span className="align-middle ml-50">Unduh</span>
                      </a>
                    </Button.Ripple>
                    {data.APT === undefined || data.APT === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_APT === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <span>Pengesahan Kehakiman Perubahan</span>
                  <span>
                    <Button.Ripple className="mr-2" outline size="sm">
                      <a href={data.PKP === undefined || data.PKP === null ? '#' : process.env.REACT_APP_URI_API + data.PKP.url} target="_blank">
                        <DownloadCloud size={15} />
                        <span className="align-middle ml-50">Unduh</span>
                      </a>
                    </Button.Ripple>
                    {data.PKP === undefined || data.PKP === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_PKP === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <span>Sertifikat Badan Usaha (SBU)</span>
                  <span>
                    <Button.Ripple className="mr-2" outline size="sm">
                      <a href={data.SBU === undefined || data.SBU === null ? '#' : process.env.REACT_APP_URI_API + data.SBU.url} target="_blank">
                        <DownloadCloud size={15} />
                        <span className="align-middle ml-50">Unduh</span>
                      </a>
                    </Button.Ripple>
                    {data.SBU === undefined || data.SBU === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_SBU === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <span>Surat Ijin Usaha Jasa Konstruksi (SIUJK)</span>
                  <span>
                    <Button.Ripple className="mr-2" outline size="sm">
                      <a href={data.SIUJK === undefined || data.SIUJK === null ? '#' : process.env.REACT_APP_URI_API + data.SIUJK.url} target="_blank">
                        <DownloadCloud size={15} />
                        <span className="align-middle ml-50">Unduh</span>
                      </a>
                    </Button.Ripple>
                    {data.SIUJK === undefined || data.SIUJK === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_SIUJK === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <span>Laporan Keuangan Terakhir</span>
                  <span>
                    <Button.Ripple className="mr-2" outline size="sm">
                      <a href={data.LKT === undefined || data.LKT === null ? '#' : process.env.REACT_APP_URI_API + data.LKT.url} target="_blank">
                        <DownloadCloud size={15} />
                        <span className="align-middle ml-50">Unduh</span>
                      </a>
                    </Button.Ripple>
                    {data.LKT === undefined || data.LKT === null ? <CheckCircle size={18} className="hide" /> : data.confirmed_LKT === true ? <CheckCircle size={18} color="green" /> : <AlertTriangle size={18} color="red" />}
                  </span>
                </ListGroupItem>
              </ListGroup>
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
