import React from "react"
import {
  FormGroup,
  Row,
  Col,
  Input,
  Button,
  Label
} from "reactstrap"
import Select from "react-select"

const valueOptions = [
  { value: "opsi1", label: "Pilih opsi 1" },
  { value: "opsi2", label: "Pilih opsi 2" },
  { value: "opsi3", label: "Pilih opsi 3" },
  { value: "opsi4", label: "Pilih opsi 4" },
  { value: "opsi5", label: "Pilih opsi 5" },
]


class FloatingLabels extends React.Component {
  render() {
    return (
      <Row>
        <Col sm="12">
          <FormGroup>
            <Label for="nama">Nama Item</Label>
            <Input
              type="text"
              id="nama"
              placeholder="Nama Item"
            />
          </FormGroup>
        </Col>
        <Col sm="12">
          <FormGroup>
            <Label for="spesifikasi">Spesifikasi</Label>
            <Input
              type="textarea"
              id="spesifikasi"
              rows="2"
              placeholder="Spesifikasi"
            />
          </FormGroup>
        </Col>
        <Col sm="12">
          <FormGroup>
            <Label for="mobileFloating">Kategori</Label>
            <Select
              className="React"
              classNamePrefix="select"
              defaultValue={valueOptions[0]}
              name="color"
              options={valueOptions}
            />
          </FormGroup>
        </Col>
        <Col sm="12">
          <FormGroup>
            <Label for="passwordFloating">Sub Kategori</Label>
            <Select
              className="React"
              classNamePrefix="select"
              defaultValue={valueOptions[0]}
              name="color"
              options={valueOptions}
            />
          </FormGroup>
        </Col>
        <Col sm="12">
          <FormGroup>
            <Label for="passwordFloating">Satuan</Label>
            <Select
              className="React"
              classNamePrefix="select"
              defaultValue={valueOptions[0]}
              name="color"
              options={valueOptions}
            />
          </FormGroup>
        </Col>
        <Col sm="12">
          <FormGroup>
            <Label for="tipe-khusus">Tipe Khusus</Label>
            <Input
              type="text"
              id="tipe-khusus"
              placeholder="Tipe Khusus"
            />
          </FormGroup>
        </Col>
        <Col sm="12">
          <FormGroup className="float-right">
            <Button.Ripple
              outline
              color="warning"
              type="reset"
              className="mr-1 mb-1"
            >
              Batal
            </Button.Ripple>
            <Button.Ripple
              color="primary"
              type="submit"
              className="mb-1"
              onClick={e => e.preventDefault()}
            >
              Simpan
            </Button.Ripple>
          </FormGroup>
        </Col>
      </Row>
    )
  }
}
export default FloatingLabels
