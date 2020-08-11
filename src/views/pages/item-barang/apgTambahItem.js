import React, { useState, useEffect } from "react"
import Dropzone from "react-dropzone"
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Form } from "reactstrap"
import InputForm from "../../ui-elements/cards/apg-product/tambah-item/apgInputForm"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import {
  addDataItems,
} from "../../../redux/actions/data-list-apg"
import { connect } from "react-redux"


import "../../../assets/scss/plugins/extensions/dropzone.scss"

class MainCards extends React.Component {
  // componentDidMount() {
  //   this.state.files.forEach(file => URL.revokeObjectURL(file.preview))
  // }

  constructor() {
    super();
    this.onDrop = (files) => {
      this.setState({files: files.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )})
      
    };
    this.state = {
      files: [],
      name: "KODOK"
    };
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    const thumbs = this.state.files.map(file => (
      <div className="dz-thumb" key={file.name}>
        <div className="dz-thumb-inner">
          <img src={file.preview} className="dz-img" alt={file.name} />
        </div>
      </div>
    ))

    return (
      <React.Fragment>
        <Breadcrumbs
            breadCrumbTitle="Tambah Item"
            breadCrumbParent="Item Barang"
            breadCrumbActive="Tambah Item"
          />
        <Card>
        <CardBody>
          <Form className="mt-2" onSubmit={this.handleSubmit}>
            <Row>
              <Col lg="6" sm="12">
              <Dropzone onDrop={this.onDrop}>
                {({getRootProps, getInputProps}) => (
                  <section>
                  <div {...getRootProps({ className: "dropzone" })}>
                    <input {...getInputProps()} />
                    <p className="mx-1">
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                  <aside className="thumb-container">{thumbs}</aside>
                </section>
                )}
              </Dropzone>
              </Col>
              <Col lg="6" sm="12">
                  <InputForm state={this.state} />
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
    dataListApg: state.dataListApg
  }
}

export default connect(mapStateToProps, {
  addDataItems
})(MainCards)
