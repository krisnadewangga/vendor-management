import React, { Component } from "react"
import { Label, Input, FormGroup, Button, FormText, CustomInput } from "reactstrap"
import { X } from "react-feather"
import PerfectScrollbar from "react-perfect-scrollbar"
import classnames from "classnames"

class DataListSidebar extends Component {
  state = {
    id: "",
    kode: "",
    sub_bidang: "",
    file: null
  }

  addNew = false

  componentDidUpdate(prevProps, prevState) {
    console.log('this.props', this.props, this.props.data !== null);
    console.log('prevProps', prevProps, prevProps.data === null);
    if (this.props.data !== null && prevProps.data === null) {
      if (this.props.data.id !== prevState.id) {
        this.setState({ id: this.props.data.id })
      }
      if (this.props.data.kode !== prevState.kode) {
        this.setState({ kode: this.props.data.kode })
      }
      if (this.props.data.sub_bidang !== prevState.sub_bidang) {
        this.setState({ sub_bidang: this.props.data.sub_bidang })
      }
    }
    if (this.props.data === null && prevProps.data !== null) {
      this.setState({
        id: "",
        kode: "",
        sub_bidang: "",
        file: null
      })
    }
    if (this.addNew) {
      this.setState({
        id: "",
        kode: "",
        sub_bidang: "",
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
    let { kode, sub_bidang } = this.state
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
                <Label for="data-kode">Kode</Label>
                <Input
                  type="text"
                  value={kode}
                  placeholder="kode"
                  onChange={e => this.setState({ kode: e.target.value })}
                  id="data-kode"
                />
              </FormGroup>
              <FormGroup>
                <Label for="data-sub_bidang">Sub Bidang</Label>
                <Input
                  type="text"
                  value={sub_bidang}
                  placeholder="sub_bidang"
                  onChange={e => this.setState({ sub_bidang: e.target.value })}
                  id="data-sub_bidang"
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
