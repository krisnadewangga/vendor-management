import React, { Component } from "react"
import { Label, Input, InputGroup, InputGroupAddon, InputGroupText, FormGroup, Button, FormFeedback } from "reactstrap"
import { X } from "react-feather"
import PerfectScrollbar from "react-perfect-scrollbar"
import classnames from "classnames"

class DataListSidebar extends Component {
  state = {
    id: "",
    item: "",
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
      if (this.props.data.item !== prevState.item) {
        this.setState({ item: this.props.data.item })
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
        item: "",
        harga_satuan: "",
        stok: "",
        stok_min: ""
      })
    }
    if (this.addNew) {
      this.setState({
        id: "",
        item: "",
        harga_satuan: "",
        stok: "",
        stok_min: ""
      })
    }
    this.addNew = false
  }

  handleSubmit = obj => {
    console.log(obj);

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
          <FormGroup>
            <Label for="data-item">Item*</Label>
            <Input
              type="select"
              id="data-item"
              value={item}
              onChange={e => this.setState({ item: e.target.value })}>
              <option>Pilih Item</option>
              {items.map((x) => <option value={x.id} key={x.id} >{x.nama_item} ({x.item_unit.unit})</option>)}
            </Input>
          </FormGroup>
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
                <InputGroupText>({item ? items.find(x => x.id == item).item_unit.unit : "-"})</InputGroupText>
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
                <InputGroupText>({item ? items.find(x => x.id == item).item_unit.unit : "-"})</InputGroupText>
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
