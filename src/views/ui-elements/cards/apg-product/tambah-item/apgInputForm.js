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

class FloatingLabels extends React.Component {
  state = {
    id: "",
    nama_item: "",
    deskripsi: "",
    item_category:"",
    item_sub_category:"",
    item_unit:"",
    tipe_khusus: "",
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== null && prevProps.data === null) {
      if (this.props.data.id !== prevState.id) {
        this.setState({ id: this.props.data.id })
      }
      if (this.props.data.nama_item !== prevState.nama_item) {
        this.setState({ nama_item: this.props.data.nama_item })
      }
      if (this.props.data.deskripsi !== prevState.deskripsi) {
        this.setState({ deskripsi: this.props.data.deskripsi })
      }
      if (this.props.data.item_category !== prevState.item_category) {
        this.setState({ item_category: this.props.data.item_category })
      }
      if (this.props.data.item_sub_category !== prevState.item_sub_category) {
        this.setState({ item_sub_category: this.props.data.item_sub_category })
      }
      if (this.props.data.item_unit !== prevState.item_unit) {
        this.setState({ item_unit: this.props.data.item_unit })
      }
      if (this.props.data.tipe_khusus !== prevState.tipe_khusus) {
        this.setState({ tipe_khusus: this.props.data.tipe_khusus })
      }
    }
    if (this.props.data === null && prevProps.data !== null) {
      this.setState({
        id: "",
        nama_item: "",
        deskripsi: "",
        item_category:"",
        item_sub_category:"",
        item_unit:"",
        tipe_khusus: "",
      })
    }
    if (this.addNew) {
      this.setState({
        id: "",
        nama_item: "",
        deskripsi: "",
        item_category:"",
        item_sub_category:"",
        item_unit:"",
        tipe_khusus: "",
      })
    }
  }

  handleSubmit = (e, obj) => {
    e.preventDefault()
    if (this.props.image) {
      obj = {
        ...obj,
        file: this.props.image
      }
    }
    this.props.sendData(obj)
    // console.log(obj);
    // console.log('input', obj.item_category === "", obj.item_category === undefined, obj.item_category === null);
    // console.log(obj, obj.target, this.state);
    // if (this.props.importData) {
    //   /* do import */
    //   this.props.import(obj.file)
    // } else {
    //   if (this.props.data !== null) {
    //     this.props.updateData(obj)
    //   } else {
    //     this.addNew = true
    //     this.props.addData(obj)
    //   }
    // }
    // let params = Object.keys(this.props.dataParams).length
    //   ? this.props.dataParams
    //   : { page: 1, perPage: 4 }
    // this.props.handleSidebar(false, true)
    // this.props.getData(params)
  }

  render() {
    let { kategori, subKategori, satuan } = this.props
    let { nama_item, deskripsi, tipe_khusus } = this.state

    let valueKategori = kategori.map(element => {
      return {
        value: element.id, label: element.category
      }
    });

    let valueSubKategori = subKategori.map(element => {
      return {
        value: element.id, label: element.sub_category
      }
    });

    let valueSatuan = satuan.map(element => {
      return {
        value: element.id, label: element.unit
      }
    });

    return (
      <Row>
        <Col sm="12">
          <FormGroup>
            <Label for="nama">Nama Item</Label>
            <Input
              type="text"
              id="nama"
              placeholder="Nama Item"
              name="nama_item"
              value={nama_item}
              onChange={(e) => this.setState({ nama_item: e.target.value })}
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
              name="deskripsi"
              value={deskripsi}
              onChange={(e) => this.setState({ deskripsi: e.target.value })}
            />
          </FormGroup>
        </Col>
        <Col sm="12">
          <FormGroup>
            <Label for="mobileFloating">Kategori</Label>
            <Select
              className="React"
              classNamePrefix="select"
              defaultValue={kategori}
              name="color"
              options={valueKategori}
              onChange={(e) => this.setState({ item_category: e.value })}
            />
          </FormGroup>
        </Col>
        <Col sm="12">
          <FormGroup>
            <Label for="passwordFloating">Sub Kategori</Label>
            <Select
              className="React"
              classNamePrefix="select"
              defaultValue={subKategori}
              name="color"
              options={valueSubKategori}
              onChange={(e) => this.setState({ item_sub_category: e.value })}
            />
          </FormGroup>
        </Col>
        <Col sm="12">
          <FormGroup>
            <Label for="passwordFloating">Satuan</Label>
            <Select
              className="React"
              classNamePrefix="select"
              defaultValue={satuan}
              name="color"
              options={valueSatuan}
              onChange={(e) => this.setState({ item_unit: e.value })}
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
              Simpan
            </Button.Ripple>
          </FormGroup>
        </Col>
      </Row>
    )
  }
}
export default FloatingLabels
