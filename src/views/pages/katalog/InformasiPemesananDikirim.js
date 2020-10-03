import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import ListViewConfig from "./DataListConfigPesananShipping"
import queryString from "query-string"
import { connect } from "react-redux"
import {
  getDataKatalogPemesananShipping as getData,
} from "../../../redux/actions/apgKatalog"
class ListView extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Barang Dikirim"
          breadCrumbParent="Katalog"
          breadCrumbActive="Pemesanan"
        />
        <h4 style={{color: "red"}}>{this.props.dataList.data.po && this.props.dataList.data.po.nomor}</h4>
        <Row>
          <Col sm="12">
            <ListViewConfig parsedFilter={queryString.parse(this.props.location.search)} id={this.props.dataList.data.po_shipping_item && this.props.dataList.data.po_shipping_item.id}/>
          </Col>
        </Row>
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
})(ListView)
