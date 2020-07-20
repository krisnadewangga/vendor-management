import React from "react"
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Form } from "reactstrap"
import ImageUpload from "../../ui-elements/cards/apg-product/tambah-item/apgImageUpload"
import InputForm from "../../ui-elements/cards/apg-product/tambah-item/apgInputForm"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"

import "../../../assets/scss/plugins/extensions/dropzone.scss"

class MainCards extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
            breadCrumbTitle="Tambah Item"
            breadCrumbParent="Item Barang"
            breadCrumbActive="Tambah Item"
          />
        <Card>
        <CardBody>
          <Form className="mt-2">
            <Row>
              <Col lg="6" sm="12">
                  <ImageUpload />
              </Col>
              <Col lg="6" sm="12">
                  <InputForm />
              </Col>
            </Row>
          </Form>
        </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}

export default MainCards
