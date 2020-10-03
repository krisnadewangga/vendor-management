import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import ListViewConfig from "./DataListConfigPesananDiproses"
import queryString from "query-string"
import { connect } from "react-redux"
import {
  getDataKatalogPemesananById as getData,
} from "../../../redux/actions/apgKatalog"
class ListView extends React.Component {

  // componentDidMount() {
  //   this.props.getData(this.props.location.pathname.split('/').pop())
  // }

  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Barang Telah Diterima"
          breadCrumbParent="Katalog"
          breadCrumbActive="Pemesanan"
        />
        <h4 style={{color: "red"}}>{this.props.dataList && this.props.dataList.nomor}</h4>
        <Row>
          <Col sm="12">
            <ListViewConfig parsedFilter={queryString.parse(this.props.location.search)} id={this.props.location.pathname.split('/').pop()}/>
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
