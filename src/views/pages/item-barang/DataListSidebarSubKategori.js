import React, { Component } from "react"
import { Label, Input, FormGroup, Button } from "reactstrap"
import { X } from "react-feather"
import PerfectScrollbar from "react-perfect-scrollbar"
import classnames from "classnames"

class DataListSidebar extends Component {
  state = {
    id: "",
    sub_category: "",
  }

  addNew = false

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== null && prevProps.data === null) {
      if (this.props.data.id !== prevState.id) {
        this.setState({ id: this.props.data.id })
      }
      if (this.props.data.sub_category !== prevState.sub_category) {
        this.setState({ sub_category: this.props.data.sub_category })
      }
    }
    if (this.props.data === null && prevProps.data !== null) {
      this.setState({
        id: "",
        sub_category: "",
      })
    }
    if (this.addNew) {
      this.setState({
        id: "",
        sub_category: "",
      })
    }
    this.addNew = false
  }

  handleSubmit = obj => {
    if (this.props.data !== null) {
      this.props.updateDataSubKategori(obj)
    } else {
      this.addNew = true
      this.props.addDataSubKategori(obj)
    }
    let params = Object.keys(this.props.dataParams).length
      ? this.props.dataParams
      : { page: 1, perPage: 4 }
    this.props.handleSidebar(false, true)
    this.props.getDataSubKategori(params)
    this.props.getDataSubKategori(params)
  }

  render() {
    let { show, handleSidebar, data } = this.props
    let { sub_category } = this.state
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
            <Label for="data-name">Sub_kategori</Label>
            <Input
              type="text"
              value={sub_category}
              placeholder="Masukkan Sub kategori"
              onChange={e => this.setState({ sub_category: e.target.value })}
              id="data-name"
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
