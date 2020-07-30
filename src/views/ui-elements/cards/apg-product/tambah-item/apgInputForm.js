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

const pilihOptions = {value: null, label: "Pilih"}

class FloatingLabels extends React.Component {
  state = {
    id: "",
    nama_item: "",
    deskripsi: "",
    item_category:"Pilih",
    item_sub_category:"Pilih",
    item_unit:"Pilih",
    tipe_khusus: "",
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== null && this.props.data !== undefined && prevProps.data === undefined) {
      if (this.props.data.id !== prevState.id) {
        this.setState({ id: this.props.data.id })
      }
        if (this.props.data.nama_item !== prevState.nama_item) {
          this.setState({ nama_item: this.props.data.nama_item })
        }
        if (this.props.data.deskripsi !== prevState.deskripsi) {
          this.setState({ deskripsi: this.props.data.deskripsi })
        }
        if (this.props.data.item_category.id !== prevState.item_category) {
          this.setState({ item_category: this.props.data.item_category.id })
        }
        if (this.props.data.item_sub_category.id !== prevState.item_sub_category) {
          this.setState({ item_sub_category: this.props.data.item_sub_category.id })
        }
        if (this.props.data.item_unit.id !== prevState.item_unit) {
          this.setState({ item_unit: this.props.data.item_unit.id })
        }
        if (this.props.data.tipe_khusus !== prevState.tipe_khusus) {
          this.setState({ tipe_khusus: this.props.data.tipe_khusus })
        }
    }
  }

  handleSubmit = (e, obj) => {
    e.preventDefault()
    if (this.props.image) {
      obj = {
        ...obj,
        file: this.props.image,
      }
    }

    obj = {
      ...obj,
      update: this.props.data !== null && this.props.data !== undefined ? true : false
    }
    this.props.sendData(obj)
  }

  render() {
    let { kategori, subKategori, satuan, data } = this.props
    let { nama_item, deskripsi, item_category, item_sub_category, item_unit, tipe_khusus } = this.state
    return (
      <Row>
        <Col sm="12">
          <FormGroup>
            <Label for="nama_item">Nama Item*</Label>
            <Input
              type="text"
              id="nama_item"
              placeholder="Nama Item"
              name="nama_item"
              value={nama_item}
              onChange={(e) => this.setState({ nama_item: e.target.value })}
            />
          </FormGroup>
        </Col>
        <Col sm="12">
          <FormGroup>
            <Label for="deskripsi">Spesifikasi</Label>
            <Input
              type="textarea"
              id="deskripsi"
              rows="2"
              placeholder="Spesifikasi"
              name="deskripsi"
              value={deskripsi}
              onChange={(e) => this.setState({ deskripsi: e.target.value })}
            />
          </FormGroup>
        </Col>
        <Col sm="12">
          <FormGroup>
            <Label for="data-kategori">Kategori*</Label>
            <Input
              type="select"
              id="data-kategori"
              className="React"
              classnameprefix="select"
              value={item_category}
              onChange={e => this.setState({ item_category: parseInt(e.target.value) })}>
                <option value="Pilih">Pilih Kategori</option>
                {kategori.map((x) => <option value={x.id} key={x.id}>{x.category}</option>)}
            </Input>
          </FormGroup>
        </Col>
        <Col sm="12">
          <FormGroup>
            <Label for="data-item_sub_category">Sub Kategori*</Label>
            <Input
              type="select"
              id="data-item_sub_category"
              className="React"
              classnameprefix="select"
              value={item_sub_category}
              onChange={e => this.setState({ item_sub_category: parseInt(e.target.value) })}>
                <option value="Pilih">Pilih Sub Kategori</option>
                {subKategori.map((x) => <option value={x.id} key={x.id}>{x.sub_category}</option>)}
            </Input>
          </FormGroup>
        </Col>
        <Col sm="12">
          <FormGroup>
            <Label for="data-item_unit">Satuan*</Label>
            <Input
              type="select"
              id="data-item_unit"
              className="React"
              classnameprefix="select"
              value={item_unit}
              onChange={e => this.setState({ item_unit: parseInt(e.target.value) })}>
                <option value="Pilih">Pilih Unit</option>
                {satuan.map((x) => <option value={x.id} key={x.id}>{x.unit}</option>)}
            </Input>
          </FormGroup>
        </Col>
        <Col sm="12">
          <FormGroup>
            <Label for="tipe_khusus">Tipe Khusus</Label>
            <Input
              type="text"
              id="tipe_khusus"
              placeholder="Tipe Khusus"
              name="tipe_khusus"
              value={tipe_khusus}
              onChange={(e) => this.setState({ tipe_khusus: e.target.value })}
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
              onClick={(e) => this.handleSubmit(e, this.state)}
            >
              {data !== null && data !== undefined ? 'Ubah' : 'Simpan'}
            </Button.Ripple>
          </FormGroup>
        </Col>
      </Row>
    )
  }
}
export default FloatingLabels
