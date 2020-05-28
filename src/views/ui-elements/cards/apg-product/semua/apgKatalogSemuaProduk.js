import React from "react"
import {
  Card,
  CardBody,
  CardImg,
  Row,
  Col,
  Button,
  Progress
} from "reactstrap"
import { data } from "./shopData"
import { Link } from "react-router-dom"
import { ShoppingCart } from "react-feather"
import "../../../../../assets/scss/plugins/forms/react-select/_react-select.scss"

class BasicCards extends React.Component {
  state = {
    inCart: [],
    inWishlist: [],
    view: "grid-view-apg"
  }

  handleAddToCart = i => {
    let cartArr = this.state.inCart
    cartArr.push(i)
    this.setState({
      inCart: cartArr
    })
  }

  handleView = view => {
    this.setState({
      view
    })
  }

  handleWishlist = i => {
    let wishlistArr = this.state.inWishlist
    if (!wishlistArr.includes(i)) wishlistArr.push(i)
    else wishlistArr.splice(wishlistArr.indexOf(i), 1)
    this.setState({
      inWishlist: wishlistArr
    })
  }

  render() {
    let renderProducts = data.map((product, i) => {
      return (
        <Card className="ecommerce-card" key={i}>
          <div className="card-content">
            <div className="item-img text-center">
              <Link to="/apg/katalog-detail">
                <img
                  className="img-fluid"
                  src={product.img}
                  alt={product.name}
                />
              </Link>
            </div>
            <CardBody>
              <div className="item-wrapper">
                <div className="product-price">
                  <h6 className="item-price">{product.price}</h6>
                </div>
              </div>
              <div className="item-name">
                <Link to="/apg/katalog-detail">
                  {" "}
                  <span>{product.name}</span>
                </Link>
                <p className="item-company">
                  By <span className="company-name">{product.by}</span>
                </p>
              </div>
              <div className="item-desc">
                <p className="item-description">{product.desc}</p>
              </div>
            </CardBody>
            <div className="item-options text-center">
              <div className="item-wrapper">
                <div className="product-price">
                  <h6 className="item-price">{product.price}</h6>
                </div>
              </div>
              <div className="cart" onClick={() => this.handleAddToCart(i)}>
                <ShoppingCart size={15} />
                <span className="align-middle ml-50">
                  {this.state.inCart.includes(i) ? (
                    <Link to="/ecommerce/checkout" className="text-white">
                      {" "}
                      Lihat Keranjang{" "}
                    </Link>
                  ) : (
                    "Tambahkan Keranjang"
                  )}
                </span>
              </div>
            </div>
          </div>
        </Card>
      )
    })

    return (
      <Row>
        <Col sm="12">
          <div id="ecommerce-products" className={this.state.view}>
            {renderProducts}
          </div>
        </Col>
      </Row>
    )
  }
}
export default BasicCards
