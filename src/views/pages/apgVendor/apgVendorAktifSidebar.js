import React, { Component } from "react"
import { Label, Input, FormGroup, Button } from "reactstrap"
import { X } from "react-feather"
import PerfectScrollbar from "react-perfect-scrollbar"
import classnames from "classnames"
import { Legend } from "recharts"

class DataListSidebar extends Component {
  state = {
    id: "",
    confirmed_SPT: "",
    confirmed_TDP: "",
    confirmed_FIDK: "",
    confirmed_PaktaIntegritas: "",
    confirmed_SITU: "",
    confirmed_SIUP: "",
    confirmed_NPWP: "",
    confirmed_CompanyProfile: "",
    confirmed_K3: "",
    confirmed_AP: "",
    confirmed_PK: "",
    confirmed_APT: "",
    confirmed_PKP: "",
    confirmed_SBU: "",
    confirmed_SIUJK: "",
    confirmed_LKT: ""
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== null && prevProps.data === null) {
      if (this.props.data.id !== prevState.id) {
        this.setState({ id: this.props.data.id })
      }
      if (this.props.data.confirmed_SPT !== prevState.confirmed_SPT) {
        this.setState({ confirmed_SPT: this.props.data.confirmed_SPT })
      }
      if (this.props.data.confirmed_TDP !== prevState.confirmed_TDP) {
        this.setState({ confirmed_TDP: this.props.data.confirmed_TDP })
      }
      if (this.props.data.confirmed_FIDK !== prevState.confirmed_FIDK) {
        this.setState({ confirmed_FIDK: this.props.data.confirmed_FIDK })
      }
      if (this.props.data.confirmed_PaktaIntegritas !== prevState.confirmed_PaktaIntegritas) {
        this.setState({ confirmed_PaktaIntegritas: this.props.data.confirmed_PaktaIntegritas })
      }
      if (this.props.data.confirmed_SITU !== prevState.confirmed_SITU) {
        this.setState({ confirmed_SITU: this.props.data.confirmed_SITU })
      }
      if (this.props.data.confirmed_SIUP !== prevState.confirmed_SIUP) {
        this.setState({ confirmed_SIUP: this.props.data.confirmed_SIUP })
      }
      if (this.props.data.confirmed_NPWP !== prevState.confirmed_NPWP) {
        this.setState({ confirmed_NPWP: this.props.data.confirmed_NPWP })
      }
      if (this.props.data.confirmed_CompanyProfile !== prevState.confirmed_CompanyProfile) {
        this.setState({ confirmed_CompanyProfile: this.props.data.confirmed_CompanyProfile })
      }
      if (this.props.data.confirmed_K3 !== prevState.confirmed_K3) {
        this.setState({ confirmed_K3: this.props.data.confirmed_K3 })
      }
      if (this.props.data.confirmed_AP !== prevState.confirmed_AP) {
        this.setState({ confirmed_AP: this.props.data.confirmed_AP })
      }
      if (this.props.data.confirmed_PK !== prevState.confirmed_PK) {
        this.setState({ confirmed_PK: this.props.data.confirmed_PK })
      }
      if (this.props.data.confirmed_APT !== prevState.confirmed_APT) {
        this.setState({ confirmed_APT: this.props.data.confirmed_APT })
      }
      if (this.props.data.confirmed_PKP !== prevState.confirmed_PKP) {
        this.setState({ confirmed_PKP: this.props.data.confirmed_PKP })
      }
      if (this.props.data.confirmed_SBU !== prevState.confirmed_SBU) {
        this.setState({ confirmed_SBU: this.props.data.confirmed_SBU })
      }
      if (this.props.data.confirmed_SIUJK !== prevState.confirmed_SIUJK) {
        this.setState({ confirmed_SIUJK: this.props.data.confirmed_SIUJK })
      }
      if (this.props.data.confirmed_LK !== prevState.confirmed_LK) {
        this.setState({ confirmed_LK: this.props.data.confirmed_LK })
      }
    }
    if (this.props.data === null && prevProps.data !== null) {
      this.setState({
        id: "",
        confirmed_SPT: "",
        confirmed_TDP: "",
        confirmed_FIDK: "",
        confirmed_PaktaIntegritas: "",
        confirmed_SITU: "",
        confirmed_SIUP: "",
        confirmed_NPWP: "",
        confirmed_CompanyProfile: "",
        confirmed_K3: "",
        confirmed_AP: "",
        confirmed_PK: "",
        confirmed_APT: "",
        confirmed_PKP: "",
        confirmed_SBU: "",
        confirmed_SIUJK: "",
        confirmed_LKT: ""
      })
    }
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
    let { show, handleSidebar, data } = this.props
    let { verifikasi } = this.state
    console.log(this.props);
    return (
      <div
        className={classnames("data-list-sidebar", {
          show: show
        })}>
        <div className="data-list-sidebar-header mt-2 px-2 d-flex justify-content-between">
          <h4>Verifikasi Dokumen</h4>
          <X size={20} onClick={() => handleSidebar(false)} />
        </div>
        <PerfectScrollbar
          className="data-list-fields px-2 mt-3"
          options={{ wheelPropagation: false }}>
          <FormGroup>
            <Legend>Veriffikasi dokuman bla bla</Legend>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="verifikasi" value={false} />{true}
                Terverifikasi dengan baik
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="verifikasi" value={false} />{false}
                Dokumen bermasalah
              </Label>
            </FormGroup>
          </FormGroup>
        </PerfectScrollbar>
        <div className="data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1">
          <Button color="primary" onClick={() => this.handleSubmit(this.state)}>
            Simpan
          </Button>
          <Button
            className="ml-1"
            color="danger"
            outline
            onClick={() => handleSidebar(false)}>
            Kembali
          </Button>
        </div>
      </div>
    )
  }
}
export default DataListSidebar
