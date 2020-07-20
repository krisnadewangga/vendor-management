import React from "react"
import { toast, ToastContainer } from "react-toastify"
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  CardTitle,
  Row,
  Col,
  Media,
  Table,
  Input,
  Label,
  FormGroup,
} from "reactstrap"
import NumericInput from "react-numeric-input"
import { mobileStyle } from "../../forms/form-elements/number-input/InputStyles"
import Breacrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import Wizard from "../../../components/@vuexy/wizard/WizardComponent"
// import { productsList } from "./cartData"
import { AvInput, AvGroup, AvFeedback } from "availity-reactstrap-validation"
import Select from "react-select"
import { Info, FileText, File, ArrowLeft, X, ShoppingCart } from "react-feather"
import logo from "../../../assets/img/logo/logo.png"

import "../../../assets/scss/pages/app-ecommerce-shop.scss"
import "react-toastify/dist/ReactToastify.css"
import "../../../assets/scss/plugins/extensions/toastr.scss"
import "../../../assets/scss/pages/invoice.scss"

const valueOptions = [
  { value: "opsi1", label: "Vendor Maju Jaya" },
  { value: "opsi2", label: "Vendor Maju Menang" },
  { value: "opsi3", label: "Vendor Maju Sentosa" },
  { value: "opsi4", label: "Vendor Maju Bersama" },
  { value: "opsi5", label: "Vendor Maju Manja" },
]

class Checkout extends React.Component {

  onValidationError = errors => {
    toast.error("Please Enter Valid Details", {
      position: toast.POSITION.BOTTOM_RIGHT
    })
  }

  render() {
    return (
      <React.Fragment>
        <Breacrumbs
          breadCrumbTitle="Pesanan Pembelian"
          breadCrumbParent="Pemesanan"
          breadCrumbActive="Pesanan Pembelian"
        />
        <div className="ecommerce-application">
        <Row>
            <Col className="invoice-wrapper" sm="12">
              <Card className="invoice-page">
                <CardBody>
                  <Row>
                    <Col sm="3" className="pt-1">
                      <Media className="pt-1">
                        <img src={logo} alt="logo" />
                      </Media>
                    </Col>
                    <Col sm="3" className="pt-1">
                    <div className="recipient-info my-2">
                      <p>18 Office Park Lantai 7</p>
                      <p>Jl. TB Simatupang Kav. 18 Jakarta 12510</p>
                      <p>Telp. (021) - 737 83888</p>
                    </div>
                    </Col>
                    <Col sm="3" className="pt-1">
                    <div className="recipient-info my-2 float-right">
                      <h5>Nomor</h5>
                    </div>
                    </Col>
                    <Col sm="3" className="pt-1">
                    <div className="recipient-info my-2">
                      <h5>58/PO/STASIUN LRT/APG/II/2020</h5>
                      <p>Nomor ini harap dituliskan pada faktur, tanda terima, surat jalan, dll.</p>
                    </div>
                    </Col>
                  </Row>
                  <Row className="justify-content-md-center">
                    <Col sm="12" className="pt-1">
                      <h1 style={{textAlign: "center"}}>BON PESANAN PEMBELIAN</h1>
                      <hr />
                      <Row className="mx-5">
                        <Table responsive borderless>
                          <tbody>
                            <tr>
                              <td>Kepada</td>
                              <th>PT SURYA TATA ALAM RAYA</th>
                            </tr>
                            <tr>
                              <td>Bapak/Ibu</td>
                              <th>Sri Wulan</th>
                            </tr>
                            <tr>
                              <td>Alamat</td>
                              <th>Grand Aries Naga Jl. Taman Aries Utama Blok G1 No IV Jakarta Barat</th>
                            </tr>
                            <tr>
                              <td>Email</td>
                              <th>abdullah@starvendor.com</th>
                            </tr>
                            <tr>
                              <td>Telepon</td>
                              <th>(021) 721 0000</th>
                            </tr>
                            <tr>
                              <td>Fax</td>
                              <th>(021) 725 8003</th>
                            </tr>
                            <tr>
                              <td>Berdasarkan</td>
                              <th>Schedule Material Proyek Stasiun Light Rail Transit (LRT)</th>
                            </tr>
                            <tr>
                              <td>Tanggal Penyerahan</td>
                              <th>30 April 2020</th>
                            </tr>
                            <tr>
                              <td>Dikirim Ke</td>
                              <th>PT ADHI PERSADA GEDUNG - PROYEK STASIUN LRT</th>
                            </tr>
                            <tr>
                              <td>Pembayaran</td>
                              <th>SCF 90 Hari</th>
                            </tr>
                            <tr>
                              <td>Angkutan Menggunakan</td>
                              <th>Darat</th>
                            </tr>
                            <tr>
                              <td>Biaya Angkutan Dibebankan Kepada</td>
                              <th>Penjual</th>
                            </tr>
                            <tr>
                              <td>Biaya Asuransi Dibebankan Pada</td>
                              <th>Penjual</th>
                            </tr>
                          </tbody>
                        </Table>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="justify-content-md-center">
                    <Col sm="12" className="pt-1">
                      <h1 style={{textAlign: "center"}}>DENGAN INI KAMI PESAN KEPADA SAUDARA</h1>
                      <hr />
                      <Row>
                        <Table responsive borderless>
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>NAMA BARANG</th>
                            <th>SPESIFIKASI</th>
                            <th>BANYAK</th>
                            <th>SAT</th>
                            <th>HARGA SATUAN</th>
                            <th>JUMLAH (Rp)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>1</th>
                            <th>Mortar Pasangan</th>
                            <th>Star M32f</th>
                            <th>6.177,00</th>
                            <th>Kg</th>
                            <th>30.000,00</th>
                            <th>Rp 185.310.000,00</th>
                          </tr>
                          <tr>
                            <th>2</th>
                            <th>Mortar Pasangan</th>
                            <th>Star M32f</th>
                            <th>6.177,00</th>
                            <th>Kg</th>
                            <th>30.000,00</th>
                            <th>Rp 185.310.000,00</th>
                          </tr>
                          <tr>
                            <th>3</th>
                            <th>Mortar Pasangan</th>
                            <th>Star M32f</th>
                            <th>6.177,00</th>
                            <th>Kg</th>
                            <th>30.000,00</th>
                            <th>Rp 185.310.000,00</th>
                          </tr>
                          <tr>
                            <th>4</th>
                            <th>Mortar Pasangan</th>
                            <th>Star M32f</th>
                            <th>6.177,00</th>
                            <th>Kg</th>
                            <th>30.000,00</th>
                            <th>Rp 185.310.000,00</th>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>JUMLAH</th>
                            <th>Rp 1.185.310.000,00</th>
                          </tr>
                          <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>PPN 10%</th>
                            <th>Rp 118.531.000,00</th>
                          </tr>
                          <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>JUMLAH TOTAL</th>
                            <th>Rp 1.185.310.000,00</th>
                          </tr>
                        </tfoot>
                        </Table>
                      </Row>
                      <hr />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm="2" className="pt-1">
                    <div className="recipient-info my-2">
                      <h5>Keterangan</h5>
                    </div>
                    </Col>
                    <Col sm="auto" className="pt-1">
                    <div className="recipient-info my-2">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laborum!.</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laborum!.</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laborum!.</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laborum!.</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laborum!.</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laborum!.</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laborum!.</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laborum!.</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laborum!.</p>
                    </div>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col sm="8">
                      <p>Menyetujui,</p>
                      <p>Yang Menerima Order</p>
                      <h5 className="mt-2">PT. SURYA TATA ALAM Raya</h5>
                    </Col>
                    <Col sm="4">
                      <p>Jakarta, 2 Maret 2020</p>
                      <h5 className="mt-2">PT. ADHI PERSADA GEDUNG</h5>
                    </Col>
                  </Row>
                  <Row style={{marginTop: 140}}>
                    <Col sm="7">
                      <h5>Sri Wulan</h5>
                      <p>Sales</p>
                    </Col>
                    <Col sm="5">
                      <Row>
                        <Col sm="6">
                          <h5>Ir. Harry Wibowo</h5>
                          <p>Direktur</p>
                        </Col>
                        <Col sm="6">
                          <h5>Lilik Widiyanto, ST</h5>
                          <p>Manager SCM</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <div className="text-left pt-3 invoice-footer">
                    <hr />
                    <p>
                      A. Transfer the amounts to the business amount below. Please
                      include invoice number on your check.
                    </p>
                    <p>
                      B. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laborum!.
                    </p>
                    <p>
                      C. Transfer the amounts to the business amount below. Please
                      include invoice number on your check.
                    </p>
                    <p>
                      D. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laborum!.
                    </p>
                  </div>
                </CardBody>
              </Card>
              <div style={{textAlign: "center"}}>
              <Button.Ripple color="primary" outline className="mr-1 mb-md-0 mb-1">
                <ArrowLeft size="15" />
                <span className="align-middle ml-50">Kembali</span>
              </Button.Ripple>
              <Button
                color="primary"
                // onClick={() => window.print()}
              >
                <FileText size="15" />
                <span className="align-middle ml-50">Konfirm</span>
              </Button>
              </div>
            </Col>
          </Row>
          <ToastContainer />
        </div>
      </React.Fragment>
    )
  }
}

export default Checkout
