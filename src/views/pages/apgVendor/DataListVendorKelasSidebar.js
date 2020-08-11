import React, { Component } from "react"
import { Label, Input, FormGroup, Button, FormText, CustomInput } from "reactstrap"
import { X } from "react-feather"
import PerfectScrollbar from "react-perfect-scrollbar"
import classnames from "classnames"

class DataListSidebar extends Component {
  state = {
    id: "",
    kbli: "",
    kegiatan: "",
    file: null
  }

  addNew = false

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== null && prevProps.data === null) {
      if (this.props.data.id !== prevState.id) {
        this.setState({ id: this.props.data.id })
      }
      if (this.props.data.kbli !== prevState.kbli) {
        this.setState({ kbli: this.props.data.kbli })
      }
      if (this.props.data.kegiatan !== prevState.kegiatan) {
        this.setState({ kegiatan: this.props.data.kegiatan })
      }
    }
    if (this.props.data === null && prevProps.data !== null) {
      this.setState({
        id: "",
        kbli: "",
        kegiatan: "",
        file: null
      })
    }
    if (this.addNew) {
      this.setState({
        id: "",
        kbli: "",
        kegiatan: "",
        file: null
      })
    }
    this.addNew = false
  }

  handleSubmit = obj => {
    if (this.props.importData) {
      /* do import */
      this.props.import(obj.file)
    } else {
      if (this.props.data !== null) {
        this.props.updateData(obj)
      } else {
        this.addNew = true
        this.props.addData(obj)
      }
    }
    let params = Object.keys(this.props.dataParams).length
      ? this.props.dataParams
      : { page: 1, perPage: 4 }
    this.props.handleSidebar(false, true)
    this.props.getData(params)
  }

  render() {
    let { show, handleSidebar, data, importData } = this.props
    let { kbli, kegiatan } = this.state
    return (
      <div
        className={classnames("data-list-sidebar", {
          show: show
        })}>
        <div className="data-list-sidebar-header mt-2 px-2 d-flex justify-content-between">
          <h4>{importData ? "IMPORT DATA EXCEL" : data !== null ? "UPDATE DATA" : "ADD NEW DATA"}</h4>
          <X size={20} onClick={() => handleSidebar(false, true)} />
        </div>
        <PerfectScrollbar
          className="data-list-fields px-2 mt-3"
          options={{ wheelPropagation: false }}>
          {importData ? (
            <FormGroup>
              <Label for="import-file">File</Label>
              <CustomInput type="file" name="file" id="import-file" onChange={e => this.setState({ file: e.target.files[0] })} />
              <FormText color="muted">
                Hanya file excel yang diizinkan
              </FormText>
            </FormGroup>
          ) : (
            <>
              <FormGroup>
                <Label for="data-kbli">KBLI</Label>
                <Input
                  type="text"
                  value={kbli}
                  placeholder="KBLI"
                  onChange={e => this.setState({ kbli: e.target.value })}
                  id="data-kbli"
                />
              </FormGroup>
              <FormGroup>
                <Label for="data-kegiatan">Kegiatan</Label>
                <Input
                  type="text"
                  value={kegiatan}
                  placeholder="Kegiatan"
                  onChange={e => this.setState({ kegiatan: e.target.value })}
                  id="data-kegiatan"
                />
              </FormGroup>
            </>
          )}
        </PerfectScrollbar>
        <div className="data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1">
          <Button color="primary" onClick={() => this.handleSubmit(this.state)}>
            {importData ? "Upload" : data !== null ? "Update" : "Submit"}
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
