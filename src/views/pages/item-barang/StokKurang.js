import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import DataStokKurangConfig from "./DataStokKurangConfig"
import queryString from "query-string"
class StokKurang extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Stok Kurang"
          breadCrumbParent="Item Barang"
          breadCrumbActive="Stok Kurang"
        />
        <Row>
          <Col sm="12">
            <DataStokKurangConfig thumbView={true} parsedFilter={queryString.parse(this.props.location.search)}/>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default StokKurang
