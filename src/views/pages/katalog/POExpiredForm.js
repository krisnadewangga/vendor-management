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
  getDataKatalogPemesananDiprosesById as getProcessedData,
  apgKatalogKirimPesanan as sendConfirmation,
  apgKatalogUploadPdf as sendDatas
} from "../../../redux/actions/apgKatalog"
import { connect } from "react-redux"
import { history } from "../../../history"
import { AlertCircle } from "react-feather"
import { useDropzone } from "react-dropzone"

// function buildFileSelector(){
//   const fileSelector = document.createElement('input');
//   fileSelector.setAttribute('type', 'file');
//   fileSelector.setAttribute('multiple', 'multiple');
//   return fileSelector;
// }

class ListView extends React.Component {
  state = {
    modal: null,
    files: [],
    file: '',
    imagePreviewUrl: ''
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

  download = (data) => {
    // fake server request, getting the file url as response
    setTimeout(() => {
      const response = {
        file: process.env.REACT_APP_URI_API + data.pdf.url,
      };
      // server sent the url to the file!
      // now, let's download:
      window.open(response.file);
      // you could also do:
      // window.location.href = response.file;
    }, 100);
    
  }

  handleSend = obj => {
    this.props.sendConfirmation(obj)
  }

  sendData = (obj, data) => {
    let formData = new FormData();
    // let pdf_upload = true
    formData.append('data', JSON.stringify({pdf_upload: true}))
    formData.append('files.pdf', data)
    this.props.sendDatas(obj, formData)
  }

  handleGetProcessedData = obj => {
    this.props.getProcessedData(obj)
  }
    
  componentDidMount() {
    console.log(this.props)
    this.props.getData(this.props)
    // this.fileSelector = buildFileSelector();
  }

  render() {
    let { data } = this.props.dataList
    const { file } = this.state;
    let imagePreview = null;
    if (file) {
      imagePreview = (<iframe title="FormLocal" src={file} width="100%" height="900px" />);
    } else {
      imagePreview = (<iframe title={data.pdf && data.pdf.name} src={data.pdf && process.env.REACT_APP_URI_API + data.pdf.url} width="100%" height="900px" />);
    }
    return (
      <React.Fragment>
        {imagePreview}
        {/* <iframe title={data.pdf && data.pdf.name} src={data.pdf && process.env.REACT_APP_URI_API + data.pdf.url} width="100%" height="900px" /> */}
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
            <label
              className="btn btn-outline-primary mr-1 mb-md-0 mb-1"
              htmlFor="update-image"
              color="primary">
              <FileText size="15" />
              <span className="align-middle ml-50">Unggah Dokumen</span>
              <input
                type="file"
                id="update-image"
                hidden
                onChange={e =>
                  this.setState({
                    file: URL.createObjectURL(e.target.files[0])
                  }, this.sendData(data, e.target.files[0]))
                }
              />
            </label>
            <Button
              color="primary"
              outline className="mr-1 mb-md-0 mb-1"
              onClick={() => this.download(data)}
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
              onClick={() => this.handleGetProcessedData(data)}
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
  sendConfirmation,
  getProcessedData,
  sendDatas
})(ListView)
