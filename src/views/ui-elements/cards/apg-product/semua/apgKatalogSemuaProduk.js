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
import {
  getDataApgKatalog as getData,
  filterDataApgKatalog as filterData
} from "../../../../../redux/actions/apgKatalog"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { ShoppingCart } from "react-feather"
import "../../../../../assets/scss/plugins/forms/react-select/_react-select.scss"

class BasicCards extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (
      props.apgKatalog.data.length !== state.data.length ||
      state.currentPage !== props.parsedFilter.page
    ) {
      return {
        data: props.apgKatalog.data,
        allData: props.apgKatalog.filteredData,
        totalPages: props.apgKatalog.totalPages,
        currentPage: parseInt(props.parsedFilter.page) - 1,
        rowsPerPage: parseInt(props.parsedFilter.perPage),
        totalRecords: props.apgKatalog.totalRecords,
        sortIndex: props.apgKatalog.sortIndex,
      }
    }

    // Return null if the state hasn't changed
    return null
  }

  state = {
    data: [],
    inCart: [],
    inWishlist: [],
    view: "grid-view-apg"
  }

  componentDidMount() {
    this.props.getData(this.props.parsedFilter)
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
    let {
      data,
    } = this.state
    let renderProducts = (data.length && data.map((product, i) => {
      return (
        <Card className="ecommerce-card" key={i}>
          <div className="card-content">
            <div className="item-img text-center">
              <Link to={"/apg/katalog-detail/" + product.id}>
                <img
                  className="img-fluid"
                  src={product.item && (process.env.REACT_APP_URI_API + product.item.gambar.url)}
                  alt={product.nama_item}
                />
              </Link>
            </div>
            <CardBody>
              <div className="item-wrapper">
                <div className="product-price">
                  <h6 className="item-price">{product.harga_satuan}</h6>
                </div>
              </div>
              <div className="item-name">
                <Link to={"/apg/katalog-detail/" + product.id}>
                  {" "}
                  <span>{product.nama_item}</span>
                </Link>
                <p className="item-company">
                  By <span className="company-name">{product.vendor && product.vendor.nama_perusahaan}</span>
                </p>
              </div>
              <div className="item-desc">
                <p className="item-description">{product.item && product.item.deskripsi}</p>
              </div>
            </CardBody>
            <div className="item-options text-center">
              <div className="item-wrapper">
                <div className="product-price">
                  <h6 className="item-price">{product.harga_satuan}</h6>
                </div>
              </div>
              <div className="cart" onClick={() => this.handleAddToCart(i)}>
                <ShoppingCart size={15} />
                <span className="align-middle ml-50">
                  {this.state.inCart.includes(i) ? (
                    <Link to="/apg/checkout" className="text-white">
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
    }))
    

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

const mapStateToProps = state => {
  return {
    apgKatalog: state.apgKatalog
  }
}

export default connect(mapStateToProps, {
  getData,
  filterData
})(BasicCards)
