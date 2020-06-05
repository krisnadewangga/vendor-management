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


const industri = [
  { value: "listrik", label: "Listrik", color: "#BF1E2E" },
  { value: "bahan-bangunan", label: "Bahan Bangunan", color: "#BF1E2E" },
  { value: "pipa", label: "Spanish", color: "#BF1E2E" },
  { value: "besi", label: "Besi", color: "#BF1E2E" },
  { value: "batu", label: "Batu", color: "#BF1E2E" }
]

const kelas = [
  { value: "listrik", label: "Listrik", color: "#BF1E2E" },
  { value: "bahan-bangunan", label: "Bahan Bangunan", color: "#BF1E2E" },
  { value: "pipa", label: "Spanish", color: "#BF1E2E" },
  { value: "besi", label: "Besi", color: "#BF1E2E" },
  { value: "batu", label: "Batu", color: "#BF1E2E" }
]

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
  state = {
    dob: new Date("1995-05-22")
  }
  handledob = date => {
    this.setState({
      dob: date
    })
  }
  render() {
    return (
      <Form onSubmit={e => e.preventDefault()}>
        <Row className="mt-1">
          <Col className="mt-1" md="6" sm="12">
            <FormGroup>
              <Label for="namaperusahaan">Nama Perusahaan*</Label>
              <Input type="url" id="namaperusahaan" />
            </FormGroup>
            <FormGroup>
              <Label for="kontakperson">Kontak Person*</Label>
              <Input type="number" id="kontakperson"/>
            </FormGroup>
            <FormGroup>
              <Label for="industri">Industri Vendor*</Label>
              <Select
                isMulti
                defaultValue={[industri[0], industri[1], industri[2]]}
                isClearable={true}
                styles={colourStyles}
                options={industri}
                className="React"
                classNamePrefix="select"
                id="industri"
              />
            </FormGroup>
            <FormGroup>
              <Label for="industri">Kelas Vendor*</Label>
              <Select
                isClearable={true}
                styles={colourStyles}
                options={industri}
                className="React"
                classNamePrefix="select"
                id="industri"
              />
            </FormGroup>
            <FormGroup>
              <Label for="industri">Sertifikasi Badan Usaha (SBU)</Label>
              <Select
                isClearable={true}
                styles={colourStyles}
                options={industri}
                className="React"
                classNamePrefix="select"
                id="industri"
              />
            </FormGroup>            
          </Col>


          {/* ALAMAT */}

          <Col className="mt-1" md="6" sm="12">
            <FormGroup>
              <Label for="alamat">Alamat</Label>
              <Input type="text" id="alamat" />
            </FormGroup>
            <FormGroup>
              <Label for="industri">Kota*</Label>
              <Select
                isClearable={true}
                styles={colourStyles}
                options={industri}
                className="React"
                classNamePrefix="select"
                id="kota"
              />
            </FormGroup>
            <FormGroup>
              <Label for="industri">Provinsi*</Label>
              <Select
                isClearable={true}
                styles={colourStyles}
                options={industri}
                className="React"
                classNamePrefix="select"
                id="provinsi"
              />
            </FormGroup>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="telepon">Nomor telepon*</Label>
                  <Input type="number" id="telepon"/>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="fax">Nomor Fax</Label>
                  <Input type="number" id="fax"/>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="email">Email*</Label>
                  <Input type="text" id="email" />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="website">Website</Label>
                  <Input type="text" id="website" />
                </FormGroup>
              </Col>
            </Row>
          </Col>
          <Col className="d-flex flex-wrap mt-3" sm="12">
            <Button.Ripple className="mr-1" color="primary">
              Simpan Perubahan
            </Button.Ripple>
            <Button.Ripple color="flat-warning">Reset</Button.Ripple>
          </Col>
        </Row>
      </Form>
    )
  }
}
export default UserInfoTab
