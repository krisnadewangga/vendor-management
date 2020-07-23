import React, { Component } from "react"
import { Label, Input, InputGroup, InputGroupAddon, InputGroupText, FormGroup, Button, FormFeedback, Container, Row, Col } from "reactstrap"
import { X } from "react-feather"
import PerfectScrollbar from "react-perfect-scrollbar"
import classnames from "classnames"

class DataListSidebar extends Component {
  state = {
    id: "",
    item: "pilih",
    harga_satuan: "",
    stok: "",
    stok_min: ""
  }

  addNew = false

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== null && prevProps.data === null) {
      if (this.props.data.id !== prevState.id) {
        this.setState({ id: this.props.data.id })
      }
      if (this.props.data.item.id !== prevState.item) {
        this.setState({ item: this.props.data.item.id })

      }
      if (this.props.data.harga_satuan !== prevState.harga_satuan) {
        this.setState({ harga_satuan: this.props.data.harga_satuan })
      }
      if (this.props.data.stok !== prevState.stok) {
        this.setState({ stok: this.props.data.stok })
      }
      if (this.props.data.stok_min !== prevState.stok_min) {
        this.setState({ stok_min: this.props.data.stok_min })
      }
    }
    if (this.props.data === null && prevProps.data !== null) {
      this.setState({
        id: "",
        item: "pilih",
        harga_satuan: "",
        stok: "",
        stok_min: ""
      })
    }
    if (this.addNew) {
      this.setState({
        id: "",
        item: "pilih",
        harga_satuan: "",
        stok: "",
        stok_min: ""
      })
    }
    this.addNew = false
  }

  handleSubmit = obj => {
    if (this.props.data !== null) {
      this.props.updateData(obj)
    } else {
      this.addNew = true
      this.props.addData(obj)
    }
    let params = Object.keys(this.props.dataParams).length
      ? this.props.dataParams
      : { page: 1, perPage: 4 }
    this.props.handleSidebar(false, true)
    this.props.getData(params)
  }

  render() {
    let { show, handleSidebar, data, items } = this.props
    let { item, harga_satuan, stok, stok_min } = this.state
    return (
      <div
        className={classnames("data-list-sidebar", {
          show: show
        })}>
        <div className="data-list-sidebar-header mt-2 px-2 d-flex justify-content-between">
          <h4>{data !== null ? "UPDATE DATA" : "TAMBAH ITEM"}</h4>
          <X size={20} onClick={() => handleSidebar(false, true)} />
        </div>
        <PerfectScrollbar
          className="data-list-fields px-2 mt-3"
          options={{ wheelPropagation: false }}>
          {data !== null ? (
            <Row>
              <Col>
                <img className="img-fluid" src={process.env.REACT_APP_URI_API + data.item.gambar.url} alt={data.item.nama_item} />
                <h1>{data.item.nama_item}</h1>
                <hr></hr>
                <p>{data.item.deskripsi}</p>
                <Row>
                  <Col><p>Kategori</p></Col>
                  <Col><p>{data.item.item_category.category}</p></Col>
                </Row>
                <Row>
                  <Col><p>Sub Kategori</p></Col>
                  <Col><p>{data.item.item_sub_category.sub_category}</p></Col>
                </Row>
                <Row>
                  <Col><p>Satuan</p></Col>
                  <Col><p>{data.item.item_unit.unit}</p></Col>
                </Row>
                <Row>
                  <Col><p>Tipe Khusus</p></Col>
                  <Col><p>{data.item.tipe_khusus}</p></Col>
                </Row>
              </Col>
            </Row>
          ) : null}
          {data !== null ? null : (
            <FormGroup>
              <Label for="data-item">Item*</Label>
              <Input
                type="select"
                id="data-item"
                value={item}
                onChange={e => this.setState({ item: e.target.value })}>
                  <option value="pilih">Pilih Item</option>
                  {items.map((x) => <option value={x.id} key={x.id}>{x.nama_item} ({x.item_unit.unit})</option>)}
              </Input>
            </FormGroup>
          )}
          <FormGroup>
            <Label for="data-harga_satuan">Harga (Berlaku 2 Bulan)*</Label>
            <Input
              type="number"
              id="data-harga_satuan"
              value={harga_satuan}
              placeholder="100000"
              onChange={e => this.setState({ harga_satuan: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label for="data-stok">Stok*</Label>
            <InputGroup>
              <Input
                type="number"
                id="data-stok"
                value={stok}
                placeholder="1000"
                onChange={e => this.setState({ stok: e.target.value })}
               />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  {data !== null ? `(${data.item.item_unit.unit})` : (item === "pilih" ? null : `(${items.find(x => x.id == item).item_unit.unit})`)}
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <Label for="data-stok_min">Stok Minimum*</Label>
            <InputGroup>
              <Input
                type="number"
                id="data-stok_min"
                value={stok_min}
                placeholder="100"
                onChange={e => this.setState({ stok_min: e.target.value })}
               />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  {data !== null ? `(${data.item.item_unit.unit})` : (item === "pilih" ? null : `(${items.find(x => x.id == item).item_unit.unit})`)}
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
        </PerfectScrollbar>
        <div className="data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1">
          <Button color="primary" onClick={() => this.handleSubmit(this.state)}>
            {data !== null ? "Update" : "Submit"}
          </Button>
          <Button
            className="ml-1"
            color="danger"
            outline
            onClick={() => handleSidebar(false, true)}>
            Cancel
          </Button>
        </div>
      </div>
    )
  }
}
export default DataListSidebar
