import React from "react"
import { Row, Col, Button, Form, Input, Label, FormGroup } from "reactstrap"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import Radio from "../../../../components/@vuexy/radio/RadioVuexy"
import { Check, User, MapPin } from "react-feather"
import Select from "react-select"
import chroma from "chroma-js"
import Flatpickr from "react-flatpickr";

import "flatpickr/dist/themes/light.css";
import "../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss"
import _ from "lodash"
import {
  getInitialDataKota,
} from "../../../../redux/actions/profil"
import { connect } from "react-redux"

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = data.color ? chroma(data.color) : "#7367f0"
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled && (isSelected ? data.color : "#7367f0")
      }
    }
  },
  multiValue: (styles, { data }) => {
    const color = data.color ? chroma(data.color) : "#7367f0"
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css()
    }
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color ? data.color : "#7367f0"
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color ? data.color : "#7367f0",
      color: "white"
    }
  })
}
class UserInfoTab extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      nama_perusahaan: "",
      alamat: "",
      nama_cp: "",
      nomor_telepon: "",
      nomor_fax: "",
      email: "",
      website: "",
      kota: [],
      provinsi: [],
      vendorIndustri: [],
      vendorKelas: [],
      vendorSBU: [],
      currentKota: { value: "-", label: "-", color: "#BF1E2E" },
      currentProvinsi: { value: "-", label: "-", color: "#BF1E2E" },
      currentVendorIndustri: { value: "-", label: "-", color: "#BF1E2E" },
      currentVendorKelas: { value: "-", label: "-", color: "#BF1E2E" },
      currentVendorSBU: { value: "-", label: "-", color: "#BF1E2E" },
    }
    if (!_.isEmpty(props.data)) {
      this.state = {
        nama_perusahaan: props.nama_perusahaan,
        alamat: props.alamat,
        nama_cp: props.nama_cp,
        nomor_telepon: props.nomor_telepon,
        nomor_fax: props.nomor_fax,
        email: props.email,
        website: props.website,
        kota: props.kota.map( v => {
          return { value: v.id, label: v.nama, color: "#BF1E2E" }
        }),
        provinsi: props.provinsi.map( v => {
          return { value: v.id, label: v.nama, color: "#BF1E2E" }
        }),
        vendorIndustri: props.vendorIndustri.map( v => {
          return { value: v.id, label: v.nama, color: "#BF1E2E" }
        }),
        vendorKelas: props.vendorKelas.map( v => {
          return { value: v.id, label: `(${v.kbli}) ${v.kegiatan}`, color: "#BF1E2E" }
        }),
        vendorSBU: props.vendorSBU.map( v => {
          return { value: v.id, label: v.sub_bidang, color: "#BF1E2E" }
        }),
        currentProvinsi: { value: props.data.provinsi.id, label: props.data.provinsi.nama, color: "#BF1E2E" },
        currentKota: { value: props.data.kota.id, label: props.data.kota.nama, color: "#BF1E2E" },
        currentVendorIndustri: props.data.vendor_industries.map( v => {
          return { value: v.id, label: v.nama , color: "#BF1E2E" }
        }),
        currentVendorKelas: { value: props.data.vendor_class.id, label: `(${props.data.vendor_class.kbli}) ${props.data.vendor_class.kegiatan}`, color: "#BF1E2E" },
        currentVendorSBU: { value: props.data.sbu.id, label: props.data.sbu.sub_bidang, color: "#BF1E2E" },
      }
    }
  }
  static getDerivedStateFromProps(props, state) {
    if (!_.isEmpty(props.data)) { // berarti data sudah terisi
      if (
        props.kota.length !== state.kota.length ||
        props.provinsi.length !== state.provinsi.length ||
        props.vendorIndustri.length !== state.vendorIndustri.length ||
        props.vendorKelas.length !== state.vendorKelas.length ||
        props.vendorSBU.length !== state.vendorSBU.length
        ) {
        return {
          kota: props.kota.map( v => {
            return { value: v.id, label: v.nama, color: "#BF1E2E" }
          }),
          provinsi: props.provinsi.map( v => {
            return { value: v.id, label: v.nama, color: "#BF1E2E" }
          } ),
          vendorIndustri: props.vendorIndustri.map( v => {
            return { value: v.id, label: v.nama, color: "#BF1E2E" }
          } ),
          vendorKelas: props.vendorKelas.map( v => {
            return { value: v.id, label: `(${v.kbli}) ${v.kegiatan}`, color: "#BF1E2E" }
          } ),
          vendorSBU: props.vendorSBU.map( v => {
            return { value: v.id, label: v.sub_bidang, color: "#BF1E2E" }
          } )
        }
      }
    }

    // Return null if the state hasn't changed
    return null
  }

  handleSubmit = (obj) => (e) => {
    e.preventDefault()
    obj = {
      ...obj,
      provinsi : obj.currentProvinsi.value,
      kota : obj.currentKota.value,
      vendor_industries: obj.currentVendorIndustri.map(v => { return v.value }),
      vendor_class: obj.currentVendorKelas.value,
      sbu: obj.currentVendorSBU.value
    }

    obj = _.pick(obj,
      "nama_perusahaan",
      "alamat",
      "nama_cp",
      "nomor_telepon",
      "nomor_fax",
      "email",
      "website",
      "provinsi",
      "kota",
      "vendor_industries",
      "vendor_class",
      "sbu"
      )

    this.props.updateInfo(obj)
  }

  componentDidUpdate(prevProps, prevState){
    if (!_.isEmpty(this.props.data) && _.isEmpty(prevProps.data)) { // jika data terisi dan prevprops kosong (untuk page setelah refresh)
      if (this.props.nama_perusahaan !== prevState.nama_perusahaan) {
        this.setState({ nama_perusahaan: this.props.nama_perusahaan })
      }
      if (this.props.alamat !== prevState.alamat) {
        this.setState({ alamat: this.props.alamat })
      }
      if (this.props.nama_cp !== prevState.nama_cp) {
        this.setState({ nama_cp: this.props.nama_cp })
      }
      if (this.props.nomor_telepon !== prevState.nomor_telepon) {
        this.setState({ nomor_telepon: this.props.nomor_telepon })
      }
      if (this.props.nomor_fax !== prevState.nomor_fax) {
        this.setState({ nomor_fax: this.props.nomor_fax })
      }
      if (this.props.email !== prevState.email) {
        this.setState({ email: this.props.email })
      }
      if (this.props.website !== prevState.website) {
        this.setState({ website: this.props.website })
      }
      if (this.props.data.provinsi !== null && prevState.currentProvinsi.value === "-") {
        this.setState({ currentProvinsi: { value: this.props.data.provinsi.id, label: this.props.data.provinsi.nama, color: "#BF1E2E" } })
      }
      if (this.props.data.kota !== null && prevState.currentKota.value === "-") {
        this.setState({ currentKota: { value: this.props.data.kota.id, label: this.props.data.kota.nama, color: "#BF1E2E" } })
      }
      if (this.props.data.vendor_industries !== null && prevState.currentVendorIndustri.value === "-") {
        this.setState({ currentVendorIndustri: this.props.data.vendor_industries.map( v => {
            return { value: v.id, label: v.nama , color: "#BF1E2E" }
          })
        })
      }
      if (this.props.data.vendor_class !== null && prevState.currentVendorKelas.value === "-") {
        this.setState({ currentVendorKelas: { value: this.props.data.vendor_class.id, label: `(${this.props.data.vendor_class.kbli}) ${this.props.data.vendor_class.kegiatan}`, color: "#BF1E2E" } })
      }
      if (this.props.data.sbu !== null && prevState.currentVendorSBU.value === "-") {
        this.setState({ currentVendorSBU: { value: this.props.data.sbu.id, label: this.props.data.sbu.sub_bidang, color: "#BF1E2E" } })
      }
    }
    if (this.state.currentProvinsi.value !== prevState.currentProvinsi.value && prevState.currentProvinsi.value !== "-") {
      this.props.getInitialDataKota(this.state.currentProvinsi.value)
      this.setState({ currentKota: { value: null, label: "Pilih Kota", color: "#BF1E2E" } })
    }
  }

  render() {
    let {
      nama_perusahaan,
      alamat,
      nama_cp,
      nomor_telepon,
      nomor_fax,
      email,
      website,
      kota,
      provinsi,
      vendorIndustri,
      vendorKelas,
      vendorSBU,
      currentKota,
      currentProvinsi,
      currentVendorIndustri,
      currentVendorKelas,
      currentVendorSBU
    } = this.state
    return (
      <Form onSubmit={this.handleSubmit(this.state)}>
        <Row className="mt-1">
          <Col className="mt-1" md="6" sm="12">
            <FormGroup>
              <Label for="namaperusahaan">Nama Perusahaan*</Label>
              <Input type="text" id="namaperusahaan" value={nama_perusahaan} onChange={e => this.setState({ nama_perusahaan: e.target.value })} />
            </FormGroup>
            <FormGroup>
              <Label for="kontakperson">Kontak Person*</Label>
              <Input type="text" id="kontakperson" value={nama_cp} onChange={e => this.setState({ nama_cp: e.target.value })} />
            </FormGroup>
            <FormGroup>
              <Label for="industri">Industri Vendor*</Label>
              <Select
                isMulti
                value={currentVendorIndustri}
                isClearable={true}
                styles={colourStyles}
                options={vendorIndustri}
                className="React"
                classNamePrefix="select"
                id="industri"
                onChange={e => this.setState({ currentVendorIndustri: e })}

              />
            </FormGroup>
            <FormGroup>
              <Label for="industri">Kelas Vendor*</Label>
              <Select
                isClearable={true}
                value={currentVendorKelas}
                styles={colourStyles}
                options={vendorKelas}
                className="React"
                classNamePrefix="select"
                id="industri"
                onChange={e => this.setState({ currentVendorKelas: e })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="industri">Sertifikasi Badan Usaha (SBU)</Label>
              <Select
                isClearable={true}
                value={currentVendorSBU}
                styles={colourStyles}
                options={vendorSBU}
                className="React"
                classNamePrefix="select"
                id="industri"
                onChange={e => this.setState({ currentVendorSBU: e })}
              />
            </FormGroup>
          </Col>


          {/* ALAMAT */}

          <Col className="mt-1" md="6" sm="12">
            <FormGroup>
              <Label for="alamat">Alamat</Label>
              <Input type="text" id="alamat" value={alamat} onChange={e => this.setState({ alamat: e.target.value })} />
            </FormGroup>
            <FormGroup>
              <Label for="industri">Provinsi*</Label>
              <Select
                isClearable={true}
                styles={colourStyles}
                value={currentProvinsi}
                options={provinsi}
                className="React"
                classNamePrefix="select"
                id="provinsi"
                onChange={e => this.setState({ currentProvinsi: e })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="industri">Kota*</Label>
              <Select
                isClearable={true}
                styles={colourStyles}
                value={currentKota}
                options={kota}
                className="React"
                classNamePrefix="select"
                id="kota"
                onChange={e => this.setState({ currentKota: e })}
              />
            </FormGroup>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="telepon">Nomor telepon*</Label>
                  <Input type="text" id="telepon" value={nomor_telepon} onChange={e => this.setState({ nomor_telepon: e.target.value })} />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="fax">Nomor Fax</Label>
                  <Input type="text" id="fax" value={nomor_fax} onChange={e => this.setState({ nomor_fax: e.target.value })} />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="email">Email*</Label>
                  <Input type="text" id="email" value={email} onChange={e => this.setState({ email: e.target.value })} />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="website">Website</Label>
                  <Input type="text" id="website" value={website} onChange={e => this.setState({ website: e.target.value })} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
          <Col className="d-flex flex-wrap mt-3" sm="12">
            <Button.Ripple className="mr-1" color="primary" type="submit">
              Simpan Perubahan
            </Button.Ripple>
            <Button.Ripple color="flat-warning">Reset</Button.Ripple>
          </Col>
        </Row>
      </Form>
    )
  }
}
const mapStateToProps = state => {
  return {
    kota: state.profil.kota,
  }
}

export default connect(mapStateToProps, {
  getInitialDataKota,
})(UserInfoTab)
