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
import { productsList } from "./cartData"
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
  state = {
    activeStep: 0,
    steps: [
      {
        title: <ShoppingCart size={22} />,
        content: (
          <div className="list-view product-checkout">
            <div className="checkout-items">
              {productsList.map((item, i) => (
                <Card className="ecommerce-card" key={i}>
                  <div className="card-content">
                    <div className="item-img text-center">
                      <img src={item.img} alt="Product" />
                    </div>
                    <CardBody>
                      <div className="item-name">
                        <span>{item.name}</span>
                        <p className="item-company">
                          By <span className="company-name">{item.by}</span>
                        </p>
                        <p className="stock-status-in">In Stock</p>
                        <div className="item-quantity">
                          <p className="quantity-title">Quantity</p>
                          <NumericInput
                            min={0}
                            max={10}
                            value={1}
                            mobile
                            style={mobileStyle}
                          />
                        </div>
                        {/* <p className="delivery-date">{item.deliveryBy}</p>
                        <p className="offers">{item.offers}</p> */}
                      </div>
                    </CardBody>
                    <div className="item-options text-center">
                      <div className="item-wrapper">
                        {/* <div className="item-rating">
                          <Badge color="primary" className="badge-md mr-25">
                            <span className="align-middle">4</span>{" "}
                            <Star size={15} />
                          </Badge>
                        </div> */}
                        <div className="item-cost">
                          <h6 className="item-price">{item.price}</h6>
                        </div>
                      </div>
                      <div className="wishlist">
                        <X size={15} />
                        <span className="align-middle ml-25">Hapus</span>
                      </div>
                      {/* <div className="cart">
                        <Heart size={15} />
                        <span className="align-middle ml-25">Wishlist</span>
                      </div> */}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="checkout-options">
              <Card>
                <CardBody>
                  <Row>
                    <Col sm="12">
                    <FormGroup>
                      <Label for="passwordFloating">Vendor</Label>
                      <Select
                        className="React"
                        classNamePrefix="select"
                        defaultValue={valueOptions[0]}
                        name="color"
                        options={valueOptions}
                      />
                    </FormGroup>
                    </Col>
                  </Row>
                  <hr />
                  {/* <div className="price-details">
                    <p>Price Details</p>
                  </div>
                  <div className="detail">
                    <div className="detail-title">Total MRP</div>
                    <div className="detail-amt">$598</div>
                  </div>
                  <div className="detail">
                    <div className="detail-title">Bag Discount</div>
                    <div className="detail-amt discount-amt">-25$</div>
                  </div>
                  <div className="detail">
                    <div className="detail-title">Estimated Tax</div>
                    <div className="detail-amt">$1.3</div>
                  </div>
                  <div className="detail">
                    <div className="detail-title">EMI Eligibility</div>
                    <div className="detail-amt emi-details">Details</div>
                  </div>
                  <div className="detail">
                    <div className="detail-title">Delivery Charges</div>
                    <div className="detail-amt discount-amt">Free</div>
                  </div>
                  <hr /> */}
                  <div className="detail">
                    <div className="detail-title detail-total">Total</div>
                    <div className="detail-amt total-amt">$574</div>
                  </div>
                  <Button.Ripple
                    type="submit"
                    block
                    color="primary"
                    className="btn-block"
                    onClick={() => this.handleActiveStep(1)}>
                    Buat Pesanan
                  </Button.Ripple>
                </CardBody>
              </Card>
            </div>
          </div>
        )
      },
      {
        title: <Info size={22} />,
        content: (
          <div className="list-view product-checkout">
            <Card>
              <CardHeader className="flex-column align-items-start">
                <CardTitle>Informasi Pemesanan</CardTitle>
                <p className="text-muted mt-25">
                  Lengkapi informasi pemesanan berikut
                </p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="6" sm="12">
                    <AvGroup>
                      <Label for="name">Dasar Pemesanan</Label>
                      <AvInput id="name" name="name" type="text" required />
                      <AvFeedback>Please enter valid value</AvFeedback>
                    </AvGroup>
                  </Col>
                  <Col md="6" sm="12">
                    <FormGroup>
                      <Label for="opsiJatuhTempo">Jatuh Tempo</Label>
                      <Input type="select" name="select" id="opsiJatuhTempo-type">
                        <option>23 Maret 2021</option>
                        <option>24 Maret 2021</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md="6" sm="12">
                    <FormGroup>
                      <Label for="opsiPembayaran">Cara Pembayaran</Label>
                      <Input type="select" name="select" id="opsiPembayaran-type">
                        <option>SCF</option>
                        <option>FCS</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md="6" sm="12">
                    <FormGroup>
                      <Label for="opsiWaktu">Jangka Waktu</Label>
                      <Input type="select" name="select" id="opsiWaktu-type">
                        <option>90 Hari</option>
                        <option>60 Hari</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md="6" sm="12">
                    <FormGroup>
                      <Label for="opsiBank">Bank</Label>
                      <Input type="select" name="select" id="opsiBank-type">
                        <option>Bank Mandiri</option>
                        <option>BCA</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md="6" sm="12">
                    <FormGroup>
                      <Label for="opsiAngkutan">Angkutan Pengiriman</Label>
                      <Input type="select" name="select" id="opsiAngkutan-type">
                        <option>Darat</option>
                        <option>Laut</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md="6" sm="12">
                    <FormGroup>
                      <Label for="biayaAsuransi">Beban Biaya Asuransi</Label>
                      <Input type="select" name="select" id="biayaAsuransi-type">
                        <option>Penjual</option>
                        <option>Pembeli</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md="6" sm="12">
                    <FormGroup>
                      <Label for="biayaPengiriman">Beban Biaya Pengiriman</Label>
                      <Input type="select" name="select" id="biayaPengiriman-type">
                        <option>Penjual</option>
                        <option>Pembeli</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  {/* <Col sm="6" md={{ offset: 6, size: 6 }}>
                    <Button.Ripple
                      type="submit"
                      color="primary"
                      onClick={() => this.handleActiveStep(2)}>
                      SAVE AND DELIVER HERE
                    </Button.Ripple>
                  </Col> */}
                </Row>
              </CardBody>
            </Card>
            <div className="customer-card">
              <Card>
                <CardBody>
                      <AvGroup>
                        <Label for="tujuan">Tujuan Pengiriman</Label>
                        <AvInput id="tujuan" name="name" type="text" required />
                        <AvFeedback>Please enter valid value</AvFeedback>
                      </AvGroup>
                      <AvGroup>
                        <Label for="proyek">Nama Proyek</Label>
                        <AvInput id="proyek" name="name" type="text" required />
                        <AvFeedback>Please enter valid value</AvFeedback>
                      </AvGroup>
                    <hr />
                    <Button.Ripple
                      type="submit"
                      block
                      color="primary"
                      className="btn-block"
                      onClick={() => this.handleActiveStep(1)}>
                      Lanjutkan
                    </Button.Ripple>
                </CardBody>
              </Card>
            </div>
          </div>
        )
      },
      {
        title: <File size={22} />,
        content: (
          <Row>
            {/* <Col className="mb-1 invoice-header" md="5" sm="12">
              <InputGroup>
                <Input placeholder="Email" />
                <InputGroupAddon addonType="append">
                  <Button.Ripple color="primary" outline>
                    Send Invoice
                  </Button.Ripple>
                </InputGroupAddon>
              </InputGroup>
            </Col>
            <Col
              className="d-flex flex-column flex-md-row justify-content-end invoice-header mb-1"
              md="7"
              sm="12"
            >
              <Button
                className="mr-1 mb-md-0 mb-1"
                color="primary"
                onClick={() => window.print()}
              >
                <FileText size="15" />
                <span className="align-middle ml-50">Print</span>
              </Button>
              <Button.Ripple color="primary" outline>
                <Download size="15" />
                <span className="align-middle ml-50">Download</span>
              </Button.Ripple>
            </Col> */}
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
                <span className="align-middle ml-50">Minta Persetujuan</span>
              </Button>
              </div>
            </Col>
          </Row>
        )
      }
    ]
  }

  handleActiveStep = index => {
    this.setState({ activeStep: index })
  }

  onValidationError = errors => {
    toast.error("Please Enter Valid Details", {
      position: toast.POSITION.BOTTOM_RIGHT
    })
  }

  render() {
    const { steps, activeStep } = this.state
    return (
      <React.Fragment>
        <Breacrumbs
          breadCrumbTitle="Pesanan Anda"
          breadCrumbParent="Katalog"
          breadCrumbActive="Pesanan Anda"
        />
        <div className="ecommerce-application">
          <Wizard
            steps={steps}
            activeStep={activeStep}
            pagination={false}
            enableAllSteps
            validate
            tabPaneClass="mt-5"
            onValidationError={this.onValidationError}
          />
          <ToastContainer />
        </div>
      </React.Fragment>
    )
  }
}

export default Checkout
