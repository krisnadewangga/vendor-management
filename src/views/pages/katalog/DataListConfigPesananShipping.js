import React, { Component } from "react"
import {
  CardBody,
  Row,
  Col,
  Label,
  Button, 
  Card,
  FormGroup
} from "reactstrap"
import { history } from "../../../history"
import { connect } from "react-redux"
import { ArrowLeft } from "react-feather"
import {
  getDataKatalogPemesananShipping as getProcessedData,
} from "../../../redux/actions/apgKatalog"

class apgKatalogConfig extends Component {
  componentDidMount() {
    this.props.getProcessedData(this.props)
  }
  render(){
    return(
      <Card>
        <CardBody>
          <FormGroup row>
            <Col md="4">
              <span>Nama Pengemudi</span>
            </Col>
            <Col md="8">
              <span>{this.props.apgKatalog && this.props.apgKatalog.data.nama_pengemudi}</span>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="4">
              <span>Plat Kendaraan</span>
            </Col>
            <Col md="8">
              <span>{this.props.apgKatalog && this.props.apgKatalog.data.plat}</span>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="4">
              <span>Jenis Kendaraan</span>
            </Col>
            <Col md="8">
              <span>{this.props.apgKatalog && this.props.apgKatalog.data.jenis_kendaraan}</span>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="4">
              <span>Nomor Surat Jalan</span>
            </Col>
            <Col md="8">
              <span>{this.props.apgKatalog && this.props.apgKatalog.data.no_surat_jalan}</span>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="4">
              <span>ETA Kedatangan</span>
            </Col>
            <Col md="8">
              <span>{this.props.apgKatalog && this.props.apgKatalog.data.kedatangan}</span>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="4">
              <span>Kontak Pengemudi</span>
            </Col>
            <Col md="8">
              <span>{this.props.apgKatalog && this.props.apgKatalog.data.kontak_pengemudi}</span>
            </Col>
          </FormGroup>
          <Button.Ripple 
            color="primary" 
            outline className="mr-1 mb-md-0 mb-1"
            onClick={() => history.go(-1)}>
            <ArrowLeft size="15" />
            <span className="align-middle ml-50">Kembali</span>
          </Button.Ripple>
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    apgKatalog: state.apgKatalog
  }
}

export default connect(mapStateToProps, {
  getProcessedData,
})(apgKatalogConfig)
