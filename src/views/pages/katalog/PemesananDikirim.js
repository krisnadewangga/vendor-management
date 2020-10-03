import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import ListViewConfig from "./DataListConfigPesananDikirim"
import queryString from "query-string"
import { connect } from "react-redux"
import {
  getDataKatalogPemesananById as getData,
} from "../../../redux/actions/apgKatalog"
class ListView extends React.Component {
  render() {
    let path = this.props.location.pathname.split('/').pop();
    let splited = path.split('&')
    let id = splited[0].split("=").pop()
    let shipping_id = splited[1].split("=").pop()
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Barang Dikirim"
          breadCrumbParent="Katalog"
          breadCrumbActive="Pemesanan"
        />
        <h4 style={{color: "red"}}>{this.props.dataList && this.props.dataList.nomor}</h4>
        <Row>
          <Col sm="12">
            <ListViewConfig parsedFilter={queryString.parse(this.props.location.search)} id={id} po_shipping_id={shipping_id} />
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
