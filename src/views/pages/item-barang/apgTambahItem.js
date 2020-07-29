import React from "react"
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Form } from "reactstrap"
import ImageUpload from "../../ui-elements/cards/apg-product/tambah-item/apgImageUpload"
import InputForm from "../../ui-elements/cards/apg-product/tambah-item/apgInputForm"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import {
  getInitialDataKategori,
  getInitialDataSatuan,
  getInitialDataSubKategori,
  addDataItem
} from "../../../redux/actions/data-list-apg"
import { connect } from "react-redux"
import { history } from "../../../history"

import "../../../assets/scss/plugins/extensions/dropzone.scss"

class MainCards extends React.Component {
  state = {
    file: ""
  }

  componentDidMount() {
    this.props.getInitialDataKategori()
    this.props.getInitialDataSubKategori()
    this.props.getInitialDataSatuan()
  }

  handleSubmit = obj => {
    this.props.addDataItem(obj)
    window.location.href = '/apg/items-semua'
    // history.push('/apg/items-semua')

    // obj.preventDefault()
    // console.log(obj, obj.target, this.state);
    // if (this.props.importData) {
    //   /* do import */
    //   this.props.import(obj.file)
    // } else {
    //   if (this.props.data !== null) {
    //     this.props.updateData(obj)
    //   } else {
    //     this.addNew = true
    //     this.props.addData(obj)
    //   }
    // }
    // let params = Object.keys(this.props.dataParams).length
    //   ? this.props.dataParams
    //   : { page: 1, perPage: 4 }
    // this.props.handleSidebar(false, true)
    // this.props.getData(params)
  }

  passImage = file => {
    this.setState({ file:file })
  }

  render() {
    let { kategori, subKategori, satuan } = this.props
    let { file } = this.state
    return (
      <React.Fragment>
        <Breadcrumbs
            breadCrumbTitle="Tambah Item"
            breadCrumbParent="Item Barang"
            breadCrumbActive="Tambah Item"
          />
        <Card>
        <CardBody>
          <Form className="mt-2" >
            <Row>
              <Col lg="6" sm="12">
                  <ImageUpload passImage={this.passImage} />
              </Col>
              <Col lg="6" sm="12">
                  <InputForm sendData={this.handleSubmit} kategori={kategori} subKategori={subKategori} satuan={satuan} image={file} />
              </Col>
            </Row>
          </Form>
        </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    kategori: state.dataListApg.kategori,
    subKategori: state.dataListApg.subKategori,
    satuan: state.dataListApg.satuan,
  }
}

export default connect(mapStateToProps, {
  getInitialDataKategori,
  getInitialDataSatuan,
  getInitialDataSubKategori,
  addDataItem
})(MainCards)
