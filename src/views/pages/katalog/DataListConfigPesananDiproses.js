import React, { Component } from "react"
import {
  Button,
  Progress,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Input,
  TabContent,
  TabPane,
} from "reactstrap"
import DataTable from "react-data-table-component"
import classnames from "classnames"
import ReactPaginate from "react-paginate"
import { history } from "../../../history"
import {
  Edit,
  Trash,
  ChevronDown,
  Plus,
  Check,
  ChevronLeft,
  ChevronRight
} from "react-feather"
import { connect } from "react-redux"
import { ArrowLeft } from "react-feather"
import {
  getDataKatalogPemesananDiprosesById as getProcessedData,
} from "../../../redux/actions/apgKatalog"
import Chip from "../../../components/@vuexy/chips/ChipComponent"
import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy"

import "../../../assets/scss/plugins/extensions/react-paginate.scss"
import "../../../assets/scss/pages/data-list.scss"

const chipColors = {
  "on hold": "warning",
  delivered: "success",
  pending: "primary",
  canceled: "danger"
}

const selectedStyle = {
  rows: {
    selectedHighlighStyle: {
      backgroundColor: "rgba(115,103,240,.05)",
      color: "#7367F0 !important",
      boxShadow: "0 0 1px 0 #7367F0 !important",
      "&:hover": {
        transform: "translateY(0px) !important"
      }
    }
  }
}

const CustomHeader = props => {
  return (
    <React.Fragment>
      <div className="actions-right float-right d-flex flex-wrap mt-sm-0 mt-2">
        <Button.Ripple 
            color="primary" 
            outline className="mr-1 mb-md-0 mb-1"
            onClick={() => history.go(-1)}>
            <ArrowLeft size="15" />
            <span className="align-middle ml-50">Kembali</span>
          </Button.Ripple>
      </div>
    </React.Fragment>
  )
}

class apgKatalogConfig extends Component {
  static getDerivedStateFromProps(props, state) {
    if (
      props.apgKatalog.data.length !== state.data.length ||
      state.currentPage !== props.parsedFilter.page
    ) {
      return {
        data: props.apgKatalog.data,
        allData: props.apgKatalog.filteredData,
        totalPages: props.apgKatalog.totalPages,
        currentPage: parseInt(props.parsedFilter.page) - 1,
        rowsPerPage: parseInt(props.parsedFilter.perPage),
        totalRecords: props.apgKatalog.totalRecords,
        sortIndex: props.apgKatalog.sortIndex,
      }
    }

    // Return null if the state hasn't changed
    return null
  }

  state = {
    data: [],
    totalPages: 0,
    currentPage: 0,
    columns : [
      {
        name: "Nama Barang",
        selector: "name",
        sortable: true,
        minWidth: "250px",
        cell: row => (
          <p title={row.po_item && row.po_item.nama_barang} className="text-truncate text-bold-500 mb-0">
            {row.po_item && row.po_item.nama_barang}
          </p>
        )
      },
      {
        name: "Spesifikasi",
        selector: "spec",
        sortable: true,
        cell: row => (
          <p title={row.po_item && row.po_item.deskripsi} className="text-truncate text-bold-500 mb-0">
            {row.po_item && row.po_item.deskripsi}
          </p>
        )
      },
      {
        name: "Jumlah Pesan",
        selector: "pesan",
        sortable: true,
        cell: row => (
          <p title={row.po_item && row.po_item.banyak} className="text-truncate text-bold-500 mb-0">
            {row.po_item && row.po_item.banyak}
          </p>
        )
      },
      {
        name: "Jumlah Kirim",
        selector: "kirim",
        sortable: true,
        cell: row => (
          <p title={row.jumlah_kirim} className="text-truncate text-bold-500 mb-0">
            {row.jumlah_kirim}
          </p>
        )
      },
      {
        name: "Satuan",
        selector: "total-harga",
        sortable: true,
        cell: row => (
          <p title={row.po_item && row.po_item.unit} className="text-truncate text-bold-500 mb-0">
            {row.po_item && row.po_item.unit}
          </p>
        )      
      },
      {
        name: "No DPB",
        selector: "total-harga",
        sortable: true,
        cell: row => (
          <p title={row.no_dpb} className="text-truncate text-bold-500 mb-0">
            {row.no_dpb}
          </p>
        )      
      },
      {
        name: "Jumlah Diterima",
        selector: "terima",
        sortable: true,
        cell: row => (
          <p title={row.jumlah_terima} className="text-truncate text-bold-500 mb-0">
            {row.jumlah_terima}
          </p>
        )      
      },
      {
        name: "Belum Diterima",
        selector: "belum_terima",
        sortable: true,
        cell: row => (
          <p title={row.belum_terima} className="text-truncate text-bold-500 mb-0">
            {row.belum_terima}
          </p>
        )      
      },
    ],
    allData: [],
    value: "",
    rowsPerPage: 4,
    sidebar: false,
    currentData: null,
    selected: [],
    totalRecords: 0,
    sortIndex: [],
    addNew: "",
    activeTab: "1"
  }

  thumbView = this.props.thumbView

  componentDidMount() {
    this.props.getProcessedData(this.props)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.thumbView) {
      this.thumbView = false
      let columns = [
        {
          name: "Nama Barang",
          selector: "name",
          sortable: true,
          minWidth: "250px",
          cell: row => (
            <p title={row.po_item && row.po_item.nama_barang} className="text-truncate text-bold-500 mb-0">
              {row.po_item && row.po_item.nama_barang}
            </p>
          )
        },
        {
          name: "Spesifikasi",
          selector: "spec",
          sortable: true,
          cell: row => (
            <p title={row.po_item && row.po_item.deskripsi} className="text-truncate text-bold-500 mb-0">
              {row.po_item && row.po_item.deskripsi}
            </p>
          )
        },
        {
          name: "Jumlah Pesan",
          selector: "pesan",
          sortable: true,
          cell: row => (
            <p title={row.po_item && row.po_item.banyak} className="text-truncate text-bold-500 mb-0">
              {row.po_item && row.po_item.banyak}
            </p>
          )
        },
        {
          name: "Jumlah Kirim",
          selector: "kirim",
          sortable: true,
          cell: row => (
            <p title={row.jumlah_kirim} className="text-truncate text-bold-500 mb-0">
              {row.jumlah_kirim}
            </p>
          )
        },
        {
          name: "Satuan",
          selector: "total-harga",
          sortable: true,
          cell: row => (
            <p title={row.po_item && row.po_item.unit} className="text-truncate text-bold-500 mb-0">
              {row.po_item && row.po_item.unit}
            </p>
          )      
        },
        {
          name: "No DPB",
          selector: "total-harga",
          sortable: true,
          cell: row => (
            <p title={row.no_dpb} className="text-truncate text-bold-500 mb-0">
              {row.no_dpb}
            </p>
          )      
        },
        {
          name: "Jumlah Diterima",
          selector: "terima",
          sortable: true,
          cell: row => (
            <p title={row.jumlah_terima} className="text-truncate text-bold-500 mb-0">
              {row.jumlah_terima}
            </p>
          )      
        },
        {
          name: "Belum Diterima",
          selector: "belum_terima",
          sortable: true,
          cell: row => (
            <p title={row.belum_terima} className="text-truncate text-bold-500 mb-0">
              {row.belum_terima}
            </p>
          )      
        },
      ]
      this.setState({ columns })
    }
  }

  handleFilter = e => {
    this.setState({ value: e.target.value })
    this.props.filterData(e.target.value)
  }

  handleRowsPerPage = value => {
    let { parsedFilter, getData } = this.props
    let page = parsedFilter.page !== undefined ? parsedFilter.page : 1
    history.push(`/apg/katalog-pemesanan-diproses/list-view?page=${page}&perPage=${value}`)
    this.setState({ rowsPerPage: value })
    getData({ page: page, perPage: value })
  }

  handleSidebar = (boolean, addNew = false) => {
    this.setState({ sidebar: boolean })
    if (addNew === true) this.setState({ currentData: null, addNew: true })
  }

  handleDelete = row => {
    this.props.deleteData(row)
    this.props.getData(this.props.parsedFilter)
    if (this.state.data.length - 1 === 0) {
      let urlPrefix = "/apg/katalog-pemesanan-diproses/"
      history.push(
        `${urlPrefix}list-view?page=${parseInt(
          this.props.parsedFilter.page - 1
        )}&perPage=${this.props.parsedFilter.perPage}`
      )
      this.props.getData({
        page: this.props.parsedFilter.page - 1,
        perPage: this.props.parsedFilter.perPage
      })
    }
  }

  handleCurrentData = obj => {
    this.setState({ currentData: obj })
    this.handleSidebar(true)
  }

  handlePagination = page => {
    let { parsedFilter, getData } = this.props
    let perPage = parsedFilter.perPage !== undefined ? parsedFilter.perPage : 4
    let urlPrefix = "/apg/katalog-pemesanan-diproses/"
    history.push(
      `${urlPrefix}list-view?page=${page.selected + 1}&perPage=${perPage}`
    )
    getData({ page: page.selected + 1, perPage: perPage })
    this.setState({ currentPage: page.selected })
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  render() {
    let {
      columns,
      data,
      allData,
      totalPages,
      value,
      rowsPerPage,
      currentData,
      sidebar,
      totalRecords,
      sortIndex,
      activeTab
    } = this.state
    return (
      <div
        className={`data-list ${
          this.props.thumbView ? "thumb-view" : "list-view"
        }`}>
        <DataTable
          columns={columns}
          data={value.length ? allData : data}
          pagination
          paginationServer
          paginationComponent={() => (
            <ReactPaginate
              previousLabel={<ChevronLeft size={15} />}
              nextLabel={<ChevronRight size={15} />}
              breakLabel="..."
              breakClassName="break-me"
              pageCount={totalPages}
              containerClassName="vx-pagination separated-pagination pagination-end pagination-sm mb-0 mt-2"
              activeClassName="active"
              forcePage={
                this.props.parsedFilter.page
                  ? parseInt(this.props.parsedFilter.page - 1)
                  : 0
              }
              onPageChange={page => this.handlePagination(page)}
            />
          )}
          noHeader
          subHeader
          responsive
          pointerOnHover
          selectableRowsHighlight
          onSelectedRowsChange={data =>
            this.setState({ selected: data.selectedRows })
          }
          customStyles={selectedStyle}
          subHeaderComponent={
            <CustomHeader
              handleSidebar={this.handleSidebar}
              handleFilter={this.handleFilter}
              handleRowsPerPage={this.handleRowsPerPage}
              toggleTab={this.toggleTab}
              rowsPerPage={rowsPerPage}
              total={totalRecords}
              index={sortIndex}
              activeTab={activeTab}
            />
          }
          sortIcon={<ChevronDown />}
          selectableRowsComponent={Checkbox}
          selectableRowsComponentProps={{
            color: "primary",
            icon: <Check className="vx-icon" size={12} />,
            label: "",
            size: "sm"
          }}
        />
        <div
          className={classnames("data-list-overlay", {
            show: sidebar
          })}
          onClick={() => this.handleSidebar(false, true)}
        />
        {/* {this.props.apgKatalog.data} */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    apgKatalog: state.apgKatalog
  }
}

export default connect(mapStateToProps, {
  getProcessedData,
})(apgKatalogConfig)
