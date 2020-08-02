import React from "react"
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Form } from "reactstrap"
import ImageUpload from "../../ui-elements/cards/apg-product/tambah-item/apgImageUpload"
import InputForm from "../../ui-elements/cards/apg-product/tambah-item/apgInputForm"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import {
  getInitialDataKategori,
  getInitialDataSatuan,
  getInitialDataSubKategori,
  addDataItem,
  getDataItemById,
  updateDataItem
} from "../../../redux/actions/data-list-apg"
import { connect } from "react-redux"
import { history } from "../../../history"

import "../../../assets/scss/plugins/extensions/dropzone.scss"

class MainCards extends React.Component {
  static getDerivedStateFromProps(props, state) {
    const id = props.location.pathname.split('/').pop();
    if (!isNaN(id)) {
      return {
        currentData: props.data
      }
    }

    // Return null if the state hasn't changed
    return null
  }

  state = {
    file: "",
    currentData: null
  }

  componentDidMount() {
    this.props.getInitialDataKategori()
    this.props.getInitialDataSubKategori()
    this.props.getInitialDataSatuan()

    const id = this.props.location.pathname.split('/').pop();
    if (!isNaN(id)) {
      this.props.getDataItemById(id)
    }
  }

  handleSubmit = obj => {
    console.log(obj);
    if (obj.update) {
      this.props.updateDataItem(obj)
    }else {
      this.props.addDataItem(obj)
    }
  }

  passImage = file => {
    this.setState({ file:file })
  }

  render() {
    let { kategori, subKategori, satuan } = this.props
    let { file, currentData } = this.state
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
                  <ImageUpload passImage={this.passImage} data={currentData} />
              </Col>
              <Col lg="6" sm="12">
                  <InputForm sendData={this.handleSubmit} kategori={kategori} subKategori={subKategori} satuan={satuan} image={file} data={currentData} />
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
    data: state.dataListApg.dataById
  }
}

export default connect(mapStateToProps, {
  getInitialDataKategori,
  getInitialDataSatuan,
  getInitialDataSubKategori,
  addDataItem,
  getDataItemById,
  updateDataItem
})(MainCards)
