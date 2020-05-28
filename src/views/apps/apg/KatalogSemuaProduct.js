import React from "react"
import { Card, CardBody, Row, Col, Button } from "reactstrap"
import {
  Truck,
  DollarSign,
  ShoppingCart,
} from "react-feather"
import NumericInput from "react-numeric-input"
import Breacrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import macbook from "../../../assets/img/elements/macbook-pro.png"
import "swiper/css/swiper.css"
import "../../../assets/scss/pages/app-ecommerce-shop.scss"
import { mobileStyle } from "../../forms/form-elements/number-input/InputStyles"

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
class DetailPage extends React.Component {
  state = {
    selectedColor: 1
  }
  toggleSelectedColor = color => this.setState({ selectedColor: color })
  render() {
    return (
      <React.Fragment>
        <Breacrumbs
          breadCrumbTitle="Product Detail"
          breadCrumbParent="Katalog"
          breadCrumbActive="Product Detail"
        />
        <Card className="overflow-hidden app-ecommerce-details">
          <CardBody className="pb-0">
            <Row className="mb-5 mt-2">
              <Col
                className="d-flex align-items-center justify-content-center mb-2 mb-md-0"
                sm="12"
                md="5"
              >
                <img src={macbook} alt="Google Home" height="250" width="250" />
              </Col>
              <Col md="7" sm="12">
                <h3>Google - Google Home - White/Slate fabric</h3>
                <p className="text-muted">by Google</p>
                <div className="d-flex flex-wrap">
                  <h3 className="text-primary">$129</h3>
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
                  Simplify your everyday life with the Google Home, a
                  voice-activated speaker powered by the Google Assistant. Use
                  voice commands to enjoy music, get answers from Google and
                  manage everyday tasks. Google Home is compatible with Android
                  and iOS operating systems, and can control compatible smart
                  devices such as Chromecast or Nest.
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
                    value={1}
                    mobile
                    style={mobileStyle}
                  />
                  <span> Sak</span>
                </div>
                <hr />
                <p className="my-50">
                  <span>Available</span>
                  <span className="mx-50">-</span>
                  <span className="text-success">In Stock</span>
                </p>
                <div className="action-btns">
                  <Button.Ripple className="mr-1 mb-1" color="primary">
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
export default DetailPage
