import React from "react"
import { Card, CardBody, Row, Col, Button } from "reactstrap"
import {
  Truck,
  DollarSign,
  ShoppingCart,
} from "react-feather"
import {
  getDataKatalogById as getData,
} from "../../../../../redux/actions/apgKatalog"
import {
  addDataCart as addData,
} from "../../../../../redux/actions/apgCart"
import { connect } from "react-redux"
import NumericInput from "react-numeric-input"
import "swiper/css/swiper.css"
import "../../../../../assets/scss/pages/app-ecommerce-shop.scss"
import { mobileStyle } from "../../../../forms/form-elements/number-input/InputStyles"
const mql = window.matchMedia(`(min-width: 992px)`)

const swiperParams = {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    1600: {
      slidesPerView: 5,
      spaceBetween: 55
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 55
    },
    1260: {
      slidesPerView: 3,
      spaceBetween: 55
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 55
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 55
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 55
    }
  }
}

class MainCards extends React.Component {
  state = {
    sidebarDocked: mql.matches,
    sidebarOpen: false,
    selectedColor: 1,
    value: 0
  }

  componentDidMount() {
    this.props.getData(this.props)
    console.log(this.props, "LIHAT INI")
  }

  toggleSelectedColor = color => this.setState({ selectedColor: color })

  render() {
    let { data } = this.props.dataList
    return (
      <React.Fragment>
        <Card className="overflow-hidden app-ecommerce-details">
          <CardBody className="pb-0">
            <Row className="mb-5 mt-2">
              <Col
                className="d-flex align-items-center justify-content-center mb-2 mb-md-0"
                sm="12"
                md="5"
              >
                <img 
                  src={process.env.REACT_APP_URI_API + data.gambar_item} 
                  alt={data.nama_item} height="250" width="250" 
                />
              </Col>
              <Col md="7" sm="12">
                <h3>{data.nama_item}</h3>
                <p className="text-muted">{data.nama_perusahaan}</p>
                <div className="d-flex flex-wrap">
                  <h3 className="text-primary">Rp {data.harga_satuan}</h3>
                  {/* <div className="ratings border-left ml-1 pl-1">
                    <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                    <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                    <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                    <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                    <Star size={20} fill="#fff" stroke="#b8c2cc" />
                    <span className="ml-1 font-medium-1 text-dark align-middle">
                      424 Ratings
                    </span>
                  </div> */}
                </div>
                <hr />
                <p>
                  {data.deskripsi_item}
                </p>
                {/* <ul className="list-unstyled">
                  <li className="mb-50">
                    <Truck size={15} />
                    <span className="align-middle font-weight-bold ml-50">
                      Free Sheeping
                    </span>
                  </li>
                  <li>
                    <DollarSign size={15} />
                    <span className="align-middle font-weight-bold ml-50">
                      EMI options available
                    </span>
                  </li>
                </ul> */}
                <div className="item-quantity">
                  <NumericInput
                    min={0}
                    max={10}
                    value={this.state.value}
                    onChange={(value) => this.setState({value})}
                    mobile
                    style={mobileStyle}
                  />
                  <span> {data.satuan}</span>
                </div>
                <hr />
                <p className="my-50">
                  <span>Available</span>
                  <span className="mx-50">-</span>
                  <span className="text-success">{data.stok_item}</span>
                </p>
                <div className="action-btns">
                  <Button.Ripple className="mr-1 mb-1" color="primary" 
                    onClick={() => this.props.addData({jumlah: this.state.value, vendor_item: data.id})} >
                    <ShoppingCart size={15} />
                    <span className="align-middle ml-50">Tambahkan ke Keranjang</span>
                  </Button.Ripple>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    dataList: state.apgKatalog
  }
}

export default connect(mapStateToProps, {
  getData,
  addData
})(MainCards)

