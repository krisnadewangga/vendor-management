import React, { Component } from "react"
import {
  Button,
  Progress,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Input,
  UncontrolledButtonDropdown,
  Row,
  Col,
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
import {
  getDataVendorAktif,
  getInitialDataVendorAktif,
  getDataVendorInReview,
  getInitialDataVendorInReview,
  getInitialDataProvinsi,
  getInitialDataKota,
  getInitialDataVendorKategori,
  filterData
} from "../../../redux/actions/apgVendor"
import Sidebar from "./DataListSidebar"
import Chip from "../../../components/@vuexy/chips/ChipComponent"
import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy"

import "../../../assets/scss/plugins/extensions/react-paginate.scss"
import "../../../assets/scss/pages/data-list.scss"

const urlPrefix = "/apg/vendor-aktif"

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

const ActionsComponent = props => {
  return (
    <div className="data-list-action">
      <Edit
        className="cursor-pointer mr-1"
        size={20}
        onClick={() => {
          return props.currentData(props.row)
        }}
      />
      <Trash
        className="cursor-pointer"
        size={20}
        onClick={() => {
          props.deleteRow(props.row)
        }}
      />
    </div>
  )
}

const CustomHeader = props => {
  let modifiers = {
    setMaxHeight: {
      enabled: true,
      order: 890,
      fn: (data) => {
        return {
          ...data,
          styles: {
            ...data.styles,
            overflow: 'auto',
            maxHeight: '100px',
          },
        };
      },
    },
  }
  return (
    <React.Fragment>
      <Row>
        <Col sm={3}>
          <UncontrolledButtonDropdown className="btn-block">
            <Button outline color="primary">Kategori</Button>
            <DropdownToggle
              className="dropdown-toggle-split"
              color="primary"
              caret
              outline
            >
              <ChevronDown size={20} />
            </DropdownToggle>
            <DropdownMenu
              modifiers={modifiers}
              >
              {props.kategori.map((x) => <DropdownItem onClick={() => props.handlePageByKategori({kategori:x.id})} key={x.id}>{x.nama}</DropdownItem>)}
            </DropdownMenu>
            </UncontrolledButtonDropdown>
        </Col>
        <Col sm={3}>
          <UncontrolledButtonDropdown className="btn-block">
            <Button outline color="primary">Propinsi</Button>
            <DropdownToggle
              className="dropdown-toggle-split"
              color="primary"
              caret
              outline
            >
              <ChevronDown size={20} />
            </DropdownToggle>
            <DropdownMenu
              modifiers={modifiers}
              >
              {props.provinsi.map((x) => <DropdownItem onClick={() => props.handlePageByKategori({provinsi:x.id})} key={x.id}>{x.nama}</DropdownItem>)}
            </DropdownMenu>
            </UncontrolledButtonDropdown>
        </Col>
        <Col sm={3}>
          <UncontrolledButtonDropdown className="btn-block">
            <Button outline color="primary">Kota</Button>
            <DropdownToggle
              className="dropdown-toggle-split"
              color="primary"
              caret
              outline
            >
              <ChevronDown size={20} />
            </DropdownToggle>
            <DropdownMenu
              modifiers={modifiers}
              >
              {props.kota.map((x) => <DropdownItem onClick={() => props.handlePageByKategori({kota:x.id})} key={x.id}>{x.nama}</DropdownItem>)}
            </DropdownMenu>
            </UncontrolledButtonDropdown>
        </Col>
        <Col sm={3} className="d-flex flex-wrap mt-sm-0 mt-2">
          <UncontrolledDropdown className="data-list-rows-dropdown mr-1 d-md-block d-none">
            <DropdownToggle color="" className="sort-dropdown">
              <span className="align-middle mx-50">
                {`${props.index[0]} - ${props.index[1]} of ${props.total}`}
              </span>
              <ChevronDown size={15} />
            </DropdownToggle>
            <DropdownMenu tag="div" right>
              <DropdownItem tag="a" onClick={() => props.handleRowsPerPage(4)}>
                4
              </DropdownItem>
              <DropdownItem tag="a" onClick={() => props.handleRowsPerPage(10)}>
                10
              </DropdownItem>
              <DropdownItem tag="a" onClick={() => props.handleRowsPerPage(15)}>
                15
              </DropdownItem>
              <DropdownItem tag="a" onClick={() => props.handleRowsPerPage(20)}>
                20
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className="filter-section">
            <Input type="text" onChange={e => props.handleFilter(e)} />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

class DataListConfig extends Component {
  static getDerivedStateFromProps(props, state) {
    if (
      props.dataList.data.length !== state.data.length ||
      state.currentPage !== props.parsedFilter.page
    ) {
      return {
        data: props.dataList.data,
        allData: props.dataList.filteredData,
        totalPages: props.dataList.totalPages,
        currentPage: parseInt(props.parsedFilter.page) - 1,
        rowsPerPage: parseInt(props.parsedFilter.perPage),
        totalRecords: props.dataList.totalRecords,
        sortIndex: props.dataList.sortIndex,
        kategori: props.dataList.kategori,
        provinsi: props.dataList.provinsi,
        kota: props.dataList.kota
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
        name: "ID",
        selector: "id",
        sortable: true,
        minWidth: "250px",
        cell: row => (
          <p title={row.id} className="text-truncate text-bold-500 mb-0">
            {row.id}
          </p>
        )
      },
      {
        name: "Nama Vendor",
        selector: "nama_vendor",
        sortable: true,
        cell: row => (
          <p title={row.nama_perusahaan} className="text-truncate text-bold-500 mb-0">
            {row.nama_perusahaan}
          </p>
        )
      },
      {
        name: "Alamat",
        selector: "alamat",
        sortable: true,
        cell: row => (
          <p title={row.alamat} className="text-truncate text-bold-500 mb-0">
            {row.alamat}
          </p>
        )
      },
      {
        name: "Kota",
        selector: "kota",
        sortable: true,
        cell: row => (
          <p title={row.kota !== null ? row.kota.nama : ''} className="text-truncate text-bold-500 mb-0">
            {row.kota !== null ? row.kota.nama : ''}
          </p>
        )
      },
      {
        name: "Propinsi",
        selector: "propinsi",
        sortable: true,
        cell: row => (
          <p title={row.provinsi !== null ? row.provinsi.nama : ''} className="text-truncate text-bold-500 mb-0">
            {row.provinsi !== null ? row.provinsi.nama : ''}
          </p>
        )
      },
      {
        name: "Kategori",
        selector: "kategori",
        sortable: true,
        cell: row => (
          <p title={row.vendor_industries.map( x => x.nama)} className="text-truncate text-bold-500 mb-0">
            {row.vendor_industries.map( x => x.nama)}
          </p>
        )
      },
      {
        name: "SBU",
        selector: "sbu",
        sortable: true,
        cell: row => (
          <p title={row.sbu !== null ? row.sbu.kode : ''} className="text-truncate text-bold-500 mb-0">
            {row.sbu !== null ? row.sbu.kode : ''}
          </p>
        )
      },
      {
        name: "Email",
        selector: "email",
        sortable: true,
        cell: row => (
          <p title={row.email} className="text-truncate text-bold-500 mb-0">
            {row.email}
          </p>
        )
      },
      {
        name: "Telepon",
        selector: "telepon",
        sortable: true,
        cell: row => (
          <p title={row.nomor_telepon} className="text-truncate text-bold-500 mb-0">
            {row.nomor_telepon}
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
    activeTab: "1",
    queryKategori: "",
    queryProvinsi: "",
    queryKota: ""
  }

  thumbView = this.props.thumbView

  componentDidMount() {
    this.props.getInitialDataProvinsi()
    this.props.getInitialDataKota()
    this.props.getInitialDataVendorKategori()
    switch (this.props.vendor) {
      case 'aktif':
        this.props.getDataVendorAktif(this.props.parsedFilter)
        this.props.getInitialDataVendorAktif()
        break;

      case 'review':
        this.props.getDataVendorInReview(this.props.parsedFilter)
        this.props.getInitialDataVendorInReview()
        break;

      default:
        break
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.thumbView) {
      this.thumbView = false
      let columns = [
        {
          name: "ID",
          selector: "id",
          sortable: true,
          minWidth: "250px",
          cell: row => (
            <p title={row.id} className="text-truncate text-bold-500 mb-0">
              {row.id}
            </p>
          )
        },
        {
          name: "Nama Vendor",
          selector: "nama_vendor",
          sortable: true,
          cell: row => (
            <p title={row.nama_perusahaan} className="text-truncate text-bold-500 mb-0">
              {row.nama_perusahaan}
            </p>
          )
        },
        {
          name: "Alamat",
          selector: "alamat",
          sortable: true,
          cell: row => (
            <p title={row.alamat} className="text-truncate text-bold-500 mb-0">
              {row.alamat}
            </p>
          )
        },
        {
          name: "Kota",
          selector: "kota",
          sortable: true,
          cell: row => (
            <p title={row.kota !== null ? row.kota.nama : ''} className="text-truncate text-bold-500 mb-0">
              {row.kota !== null ? row.kota.nama : ''}
            </p>
          )
        },
        {
          name: "Propinsi",
          selector: "propinsi",
          sortable: true,
          cell: row => (
            <p title={row.provinsi !== null ? row.provinsi.nama : ''} className="text-truncate text-bold-500 mb-0">
              {row.provinsi !== null ? row.provinsi.nama : ''}
            </p>
          )
        },
        {
          name: "Kategori",
          selector: "kategori",
          sortable: true,
          cell: row => (
            <p title={row.vendor_industries.map( x => x.nama)} className="text-truncate text-bold-500 mb-0">
              {row.vendor_industries.map( x => x.nama)}
            </p>
          )
        },
        {
          name: "SBU",
          selector: "sbu",
          sortable: true,
          cell: row => (
            <p title={row.sbu !== null ? row.sbu.kode : ''} className="text-truncate text-bold-500 mb-0">
              {row.sbu !== null ? row.sbu.kode : ''}
            </p>
          )
        },
        {
          name: "Email",
          selector: "email",
          sortable: true,
          cell: row => (
            <p title={row.email} className="text-truncate text-bold-500 mb-0">
              {row.email}
            </p>
          )
        },
        {
          name: "Telepon",
          selector: "telepon",
          sortable: true,
          cell: row => (
            <p title={row.nomor_telepon} className="text-truncate text-bold-500 mb-0">
              {row.nomor_telepon}
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
    let { parsedFilter, getDataVendorAktif } = this.props
    let page = parsedFilter.page !== undefined ? parsedFilter.page : 1
    let { queryKategori, queryProvinsi, queryKota } = this.state
    let kategori  =  queryKategori
    let provinsi  =  queryProvinsi
    let kota  =  queryKota
    if (kategori) {
      queryKategori = `&kategori=${kategori}`
      this.setState({ queryKategori: kategori })
    } else {
      queryKategori = ''
    }
    if (provinsi) {
      queryProvinsi = `&provinsi=${provinsi}`
      this.setState({ queryProvinsi: provinsi })
    } else {
      queryProvinsi = ''
    }
    if (kota) {
      queryKota = `&kota=${kota}`
      this.setState({ queryKota: kota })
    } else {
      queryKota = ''
    }
    let query = queryKategori + queryProvinsi + queryKota
    history.push(`${urlPrefix}?page=${page}&perPage=${value}${query}`)
    this.setState({ rowsPerPage: value })
    getDataVendorAktif({ page: page, perPage: value, kategori: kategori , provinsi: provinsi, kota: kota })
  }

  handlePageByKategori = value => {
    let { parsedFilter, getDataVendorAktif } = this.props
    let { queryKategori, queryProvinsi, queryKota } = this.state
    let kategori  = value.kategori !== undefined ? value.kategori : queryKategori
    let provinsi  = value.provinsi !== undefined ? value.provinsi : queryProvinsi
    let kota  = value.kota !== undefined ? value.kota : queryKota
    if (kategori) {
      queryKategori = `&kategori=${kategori}`
      this.setState({ queryKategori: kategori })
    } else {
      queryKategori = ''
    }
    if (provinsi) {
      queryProvinsi = `&provinsi=${provinsi}`
      this.setState({ queryProvinsi: provinsi })
    } else {
      queryProvinsi = ''
    }
    if (kota) {
      queryKota = `&kota=${kota}`
      this.setState({ queryKota: kota })
    } else {
      queryKota = ''
    }
    let query = queryKategori + queryProvinsi + queryKota
    let page = parsedFilter.page !== undefined ? parsedFilter.page : 1
    let perPage = parsedFilter.perPage !== undefined ? parsedFilter.perPage : 4
    history.push(`${urlPrefix}?page=${page}&perPage=${perPage}${query}`)
    getDataVendorAktif({ page: page, perPage: perPage, kategori: kategori , provinsi: provinsi, kota: kota })
  }

  handleSidebar = (boolean, addNew = false) => {
    this.setState({ sidebar: boolean })
    if (addNew === true) this.setState({ currentData: null, addNew: true })
  }

  handleDelete = row => {
    this.props.deleteData(row)
    this.props.getDataVendorAktif(this.props.parsedFilter)
    if (this.state.data.length - 1 === 0) {
      history.push(
        `${urlPrefix}?page=${parseInt(
          this.props.parsedFilter.page - 1
        )}&perPage=${this.props.parsedFilter.perPage}`
      )
      this.props.getDataVendorAktif({
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
    let { parsedFilter, getDataVendorAktif } = this.props
    let perPage = parsedFilter.perPage !== undefined ? parsedFilter.perPage : 4
    let { queryKategori, queryProvinsi, queryKota } = this.state
    let kategori  =  queryKategori
    let provinsi  =  queryProvinsi
    let kota  =  queryKota
    if (kategori) {
      queryKategori = `&kategori=${kategori}`
      this.setState({ queryKategori: kategori })
    } else {
      queryKategori = ''
    }
    if (provinsi) {
      queryProvinsi = `&provinsi=${provinsi}`
      this.setState({ queryProvinsi: provinsi })
    } else {
      queryProvinsi = ''
    }
    if (kota) {
      queryKota = `&kota=${kota}`
      this.setState({ queryKota: kota })
    } else {
      queryKota = ''
    }
    let query = queryKategori + queryProvinsi + queryKota
    history.push(`${urlPrefix}?page=${page.selected + 1}&perPage=${perPage}${query}`)
    getDataVendorAktif({ page: page.selected + 1, perPage: perPage })
    this.setState({ currentPage: page.selected, kategori: kategori , provinsi: provinsi, kota: kota })
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
      activeTab,
      kategori,
      kota,
      provinsi
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
          onRowClicked={data => {
            let url;
            switch (this.props.vendor) {
              case 'aktif':
                url = `/apg/vendor-aktif-detail/${data.id}`
                break;

              case 'review':
                url = `/apg/vendor-in-review-detail/${data.id}`
                break;

              default:
                break
            }
            history.push(url)
          }}
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
              kategori={kategori}
              provinsi={provinsi}
              kota={kota}
              handlePageByKategori={data => this.handlePageByKategori(data)}
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
        <Sidebar
          show={sidebar}
          data={currentData}
          updateData={this.props.updateData}
          addData={this.props.addData}
          handleSidebar={this.handleSidebar}
          thumbView={this.props.thumbView}
          getData={this.props.getDataVendorAktif}
          dataParams={this.props.parsedFilter}
          addNew={this.state.addNew}
        />
        <div
          className={classnames("data-list-overlay", {
            show: sidebar
          })}
          onClick={() => this.handleSidebar(false, true)}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dataList: state.apgVendor
  }
}

export default connect(mapStateToProps, {
  getDataVendorAktif,
  getInitialDataVendorAktif,
  getDataVendorInReview,
  getInitialDataVendorInReview,
  getInitialDataProvinsi,
  getInitialDataKota,
  getInitialDataVendorKategori,
  filterData
})(DataListConfig)
