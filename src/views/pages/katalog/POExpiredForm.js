import React from "react"
import {
  Button,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap"
import { FileText, ArrowLeft } from "react-feather"
import {
  getDataKatalogPemesananById as getData,
  apgKatalogKirimPesanan as sendConfirmation
} from "../../../redux/actions/apgKatalog"
import { connect } from "react-redux"
import { history } from "../../../history"
import { AlertCircle } from "react-feather"


class ListView extends React.Component {
  state = {
    modal: null
  }

  toggleModal = id => {
    if (this.state.modal !== id) {
      this.setState({
        modal: id
      })
    } else {
      this.setState({
        modal: null
      })
    }
  }

  handleSend = obj => {
    this.props.sendConfirmation(obj)
  }

  componentDidMount() {
    console.log(this.props)
    this.props.getData(this.props)
  }
  render() {
    let { data } = this.props.dataList
    return (
      <React.Fragment>
        <iframe title={data.pdf && data.pdf.name} src={data.pdf && process.env.REACT_APP_URI_API + data.pdf.url} width="100%" height="900px" />
        <Col className="invoice-wrapper" sm="12">
          <div style={{textAlign: "center"}}>
          <Button.Ripple 
            color="primary" 
            outline className="mr-1 mb-md-0 mb-1"
            onClick={() => history.go(-1)}>
            <ArrowLeft size="15" />
            <span className="align-middle ml-50">Kembali</span>
          </Button.Ripple>

          {data.status === "Persetujuan" && 
          <React.Fragment>
            <Button
              color="primary"
              className="mr-1 mb-md-0 mb-1"
              onClick={() => this.toggleModal(data.id)}
            >
              <FileText size="15" />
              <span className="align-middle ml-50">Kirim Pesanan</span>
            </Button>
            <Button
              color="primary"
              outline className="mr-1 mb-md-0 mb-1"
              // onClick={() => window.print()}
            >
              <FileText size="15" />
              <span className="align-middle ml-50">Unggah Dokumen</span>
            </Button>
            <Button
              color="primary"
              outline className="mr-1 mb-md-0 mb-1"
            // onClick={() => window.print()}
            >
              <FileText size="15" />
              <span className="align-middle ml-50">Unduh Dokumen</span>
            </Button>
          </React.Fragment>
          }

          {data.status === "Diproses" && 
            <Button
              color="primary"
              className="mr-1 mb-md-0 mb-1"
              // onClick={() => window.print()}
            >
              <FileText size="15" />
              <span className="align-middle ml-50">Barang Telah Diterima</span>
            </Button>
          }

        {data.status === "Dikirim" && 
          <React.Fragment>
            <Button
              color="primary"
              outline className="mr-1 mb-md-0 mb-1"
              // onClick={() => window.print()}
            >
              <FileText size="15" />
              <span className="align-middle ml-50">Informasi Pengiriman</span>
            </Button>
            <Button
              color="primary"
              className="mr-1 mb-md-0 mb-1"
              // onClick={() => window.print()}
            >
              <FileText size="15" />
              <span className="align-middle ml-50">Barang Diterima</span>
            </Button>
          </React.Fragment>
          }

        {data.status === "Diterima" && 
          <React.Fragment>
            <Button
              color="primary"
              outline className="mr-1 mb-md-0 mb-1"
              // onClick={() => window.print()}
            >
              <FileText size="15" />
              <span className="align-middle ml-50">Barang Telah Diterima</span>
            </Button>
            <Button
              color="primary"
              className="mr-1 mb-md-0 mb-1"
              // onClick={() => window.print()}
            >
              <FileText size="15" />
              <span className="align-middle ml-50">Pesanan Selesai</span>
            </Button>
          </React.Fragment>
          }

          {data.status === "Expired" && 
          <Button
            color="primary"
            className="mr-1 mb-md-0 mb-1"
            // onClick={() => window.print()}
          >
            <FileText size="15" />
            <span className="align-middle ml-50">Barang Telah Diterima</span>
          </Button>} 

          {data.status === "Selesai" && 
          <Button
            color="primary"
            className="mr-1 mb-md-0 mb-1"
            // onClick={() => window.print()}
          >
            <FileText size="15" />
            <span className="align-middle ml-50">Barang Telah Diterima</span>
          </Button>}

          </div>
        </Col>
        
        <Modal
          isOpen={this.state.modal === data.id && data.status === "Persetujuan"}
          toggle={() => this.toggleModal(data.id)}
          className='modal-dialog-centered'
          key={data.id}
        >
          {/* <ModalHeader toggle={() => this.toggleModal(data.id)}>
            {item.modalTitle}
            {item.title}
          </ModalHeader> */}
          <ModalBody className="text-center">
            <AlertCircle className="vx-icon" size={150} />
            <h2>Kirim pesanan</h2>
            Anda yakin pesanan ini akan dikirim ke Vendor?
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              className="mr-1 mb-md-0 mb-1"
              onClick={() => this.handleSend(data)}
              outline
            >
              Ya
            </Button>
            <Button
              color="primary"
              className="mr-1 mb-md-0 mb-1"
              onClick={() => this.toggleModal(data.id)}
            >
              Tidak
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    dataList: state.apgKatalog
  }
}

export default connect(mapStateToProps, {
  getData,
  sendConfirmation
})(ListView)
