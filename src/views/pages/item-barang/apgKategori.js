import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import ThumbViewConfig from "./apgDataKategoriConfig"
import queryString from "query-string"
class ThumbView extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Kategori"
          breadCrumbParent="Item Barang"
          breadCrumbActive="Kategori"
        />
        <Row>
          <Col sm="12">
            <ThumbViewConfig parsedFilter={queryString.parse(this.props.location.search)}/>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default ThumbView
