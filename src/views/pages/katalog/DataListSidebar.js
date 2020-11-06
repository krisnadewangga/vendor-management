import React, { Component } from "react"
import { Label, Input, FormGroup, Button, Form } from "reactstrap"
import { X } from "react-feather"
import PerfectScrollbar from "react-perfect-scrollbar"
import classnames from "classnames"

class DataListSidebar extends Component {
  state = {
    id_po: "",
    id_item: "",
    nama_barang: "",
    deskripsi: "",
    no_dpb: "",
    jumlah_terima: ""
  }

  addNew = false

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== null && prevProps.data === null) {
      if (this.props.id_po!== prevState.id) {
        this.setState({ id_po: this.props.id_po })
      }
      if (this.props.data.id !== prevState.id) {
        this.setState({ id_item: this.props.data.id })
      }
      if (this.props.data.po_item !== prevState.po_item) {
        this.setState({ nama_barang: this.props.data.po_item.nama_barang })
      }
      if (this.props.data.po_item !== prevState.deskripsi) {
        this.setState({ deskripsi: this.props.data.po_item.deskripsi })
      }
      if (this.props.data.no_dpb !== prevState.no_dpb) {
        this.setState({ no_dpb: this.props.data.no_dpb })
      }
      if (this.props.data.jumlah_terima !== prevState.jumlah_terima) {
        this.setState({ jumlah_terima: this.props.data.jumlah_terima })
      }
    }
    if (this.props.data === null && prevProps.data !== null) {
      this.setState({
        id_po: "",
        id_item: "",
        nama_barang: "",
        deskripsi: "",
        no_dpb: "",
        jumlah_terima: ""
      })
    }
    if (this.addNew) {
      this.setState({
        id_po: "",
        id_item: "",
        nama_barang: "",
        deskripsi: "",
        no_dpb: "",
        jumlah_terima: ""
      })
    }
    this.addNew = false
  }

  handleSubmit = obj => {
    if (this.props.data !== null) {
      let temp = {
        id_po: this.props.id_po,
        id: obj.id_item,
        no_dpb: obj.no_dpb,
        jumlah_terima: obj.jumlah_terima
      }
      Object.assign(this.props.data, temp)
    }
    this.props.handleSidebar(false, true)
    // console.log(this.props.allData)
    this.props.updateDataLocal(this.props.allData)
  }

  render() {
    let { show, handleSidebar, data } = this.props
    let { nama_barang, deskripsi, no_dpb, jumlah_terima } = this.state
    return (
      <div
        className={classnames("data-list-sidebar", {
          show: show
        })}>
        <div className="data-list-sidebar-header mt-2 px-2 d-flex justify-content-between">
          <h4>{data !== null ? "UPDATE DATA" : "ADD NEW DATA"}</h4>
          <X size={20} onClick={() => handleSidebar(false, true)} />
        </div>
        <PerfectScrollbar
          className="data-list-fields px-2 mt-3"
          options={{ wheelPropagation: false }}>
          <FormGroup>
            <h4>{nama_barang}</h4>
          </FormGroup>
          <FormGroup>
            <h6>{deskripsi}</h6>
          </FormGroup>
          <FormGroup>
            <Label for="data-name">No. DPB</Label>
            <Input
              type="text"
              value={no_dpb}
              placeholder="Masukkan No. DPB"
              onChange={e => this.setState({ no_dpb: e.target.value })}
              id="data-dpb"
            />
          </FormGroup>
          <FormGroup>
            <Label for="data-name">Jumlah Terima</Label>
            <Input
              type="text"
              value={jumlah_terima}
              placeholder="Masukkan Jumlah Terima"
              onChange={e => this.setState({ jumlah_terima: e.target.value })}
              id="data-terima"
            />
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
