import React, { Component } from "react"
import {
  Button,
  Progress,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Input
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
  getData,
  getInitialData,
  deleteData,
  updateData,
  addData,
  filterData
} from "../../../redux/actions/data-list-vendor/"
import { getInitialData as getItems } from "../../../redux/actions/data-list-apg/"
import Sidebar from "./vendorSemuaItemSidebar"
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
  return (
    <div className="data-list-header d-flex justify-content-between flex-wrap">
      <div className="actions-left d-flex flex-wrap">
        <UncontrolledDropdown className="data-list-dropdown mr-1">
          <DropdownToggle className="p-1" color="primary">
            <span className="align-middle mr-1">Tindakan</span>
            <ChevronDown size={15} />
          </DropdownToggle>
          <DropdownMenu tag="div" right>
            <DropdownItem tag="a">Hapus</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <Button
          className="add-new-btn"
          color="primary"
          onClick={() => props.handleSidebar(true, true)}
          outline>
          <Plus size={15} />
          <span className="align-middle">Tambah Item</span>
        </Button>
      </div>
      <div className="actions-right d-flex flex-wrap mt-sm-0 mt-2">
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
      </div>
    </div>
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
        items: props.items
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
        name: "Gambar",
        selector: "img",
        minWidth: "120px",
        cell: row => <img src={process.env.REACT_APP_URI_API + row.item.gambar.url} height="100" alt={row.item.deskripsi} />
      },
      {
        name: "Nama Item",
        selector: "name",
        sortable: true,
        minWidth: "250px",
        cell: row => (
          <p title={row.item.nama_item} className="text-truncate text-bold-500 mb-0">
            {row.item.nama_item}
          </p>
        )
      },
      {
        name: "Satuan",
        selector: "satuan",
        sortable: true,
        cell: row => (
          <p title={row.item.item_unit.unit} className="text-truncate text-bold-500 mb-0">
            {row.item.item_unit.unit}
          </p>
        )
      },
      {
        name: "Kategori",
        selector: "category",
        sortable: true,
        cell: row => (
          <p title={row.item.item_category.category} className="text-truncate text-bold-500 mb-0">
            {row.item.item_category.category}
          </p>
        )
      },
      {
        name: "Sub Kategori",
        selector: "sub_category",
        sortable: true,
        cell: row => (
          <p title={row.item.item_sub_category.sub_category} className="text-truncate text-bold-500 mb-0">
            {row.item.item_sub_category.sub_category}
          </p>
        )
      },
      {
        name: "Tipe Khusus",
        selector: "tipe_khusus",
        sortable: true,
        cell: row => (
          <p title={row.item.tipe_khusus} className="text-truncate text-bold-500 mb-0">
            {row.item.tipe_khusus}
          </p>
        )
      },
      {
        name: "Harga",
        selector: "price",
        sortable: true,
        cell: row => `$${row.harga_satuan}`
      },
      {
        name: "Stok",
        selector: "stok",
        sortable: true,
        cell: row => `${row.stok}`
      },
      {
        name: "Stok Minimum",
        selector: "stok_minimum",
        sortable: true,
        cell: row => `${row.stok_min}`
      },
      {
        name: "Actions",
        sortable: true,
        cell: row => (
          <ActionsComponent
            row={row}
            getData={this.props.getData}
            parsedFilter={this.props.parsedFilter}
            currentData={this.handleCurrentData}
            deleteRow={this.handleDelete}
          />
        )
      }
    ],
    allData: [],
    value: "",
    rowsPerPage: 4,
    sidebar: false,
    currentData: null,
    selected: [],
    totalRecords: 0,
    sortIndex: [],
    addNew: ""
  }

  thumbView = this.props.thumbView

  componentDidMount() {
    this.props.getInitialData()
    this.props.getData(this.props.parsedFilter)
    this.props.getItems()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.thumbView) {
      this.thumbView = false
      let columns = [
        {
          name: "Gambar",
          selector: "img",
          minWidth: "120px",
          cell: row => <img src={process.env.REACT_APP_URI_API + row.item.gambar.url} height="100" alt={row.item.deskripsi} />
        },
        {
          name: "Nama Item",
          selector: "name",
          sortable: true,
          minWidth: "250px",
          cell: row => (
            <p title={row.item.nama_item} className="text-truncate text-bold-500 mb-0">
              {row.item.nama_item}
            </p>
          )
        },
        {
          name: "Satuan",
          selector: "satuan",
          sortable: true,
          cell: row => (
            <p title={row.item.item_unit.unit} className="text-truncate text-bold-500 mb-0">
              {row.item.item_unit.unit}
            </p>
          )
        },
        {
          name: "Kategori",
          selector: "category",
          sortable: true,
          cell: row => (
            <p title={row.item.item_category.category} className="text-truncate text-bold-500 mb-0">
              {row.item.item_category.category}
            </p>
          )
        },
        {
          name: "Sub Kategori",
          selector: "sub_category",
          sortable: true,
          cell: row => (
            <p title={row.item.item_sub_category.sub_category} className="text-truncate text-bold-500 mb-0">
              {row.item.item_sub_category.sub_category}
            </p>
          )
        },
        {
          name: "Tipe Khusus",
          selector: "tipe_khusus",
          sortable: true,
          cell: row => (
            <p title={row.item.tipe_khusus} className="text-truncate text-bold-500 mb-0">
              {row.item.tipe_khusus}
            </p>
          )
        },
        {
          name: "Harga",
          selector: "price",
          sortable: true,
          cell: row => `Rp. ${row.harga_satuan}`
        },
        {
          name: "Stok",
          selector: "stok",
          sortable: true,
          cell: row => `${row.stok}`
        },
        {
          name: "Stok Minimum",
          selector: "stok_minimum",
          sortable: true,
          cell: row => `${row.stok_min}`
        },
        {
          name: "Actions",
          sortable: true,
          cell: row => (
            <ActionsComponent
              row={row}
              getData={this.props.getData}
              parsedFilter={this.props.parsedFilter}
              currentData={this.handleCurrentData}
              deleteRow={this.handleDelete}
            />
          )
        }
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
    history.push(`/vendor/semua-item/list-view?page=${page}&perPage=${value}`)
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
      let urlPrefix = "/vendor/semua-item/"
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
    let urlPrefix = "/vendor/semua-item/"
    history.push(
      `${urlPrefix}list-view?page=${page.selected + 1}&perPage=${perPage}`
    )
    getData({ page: page.selected + 1, perPage: perPage })
    this.setState({ currentPage: page.selected })
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
      sortIndex
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
          selectableRows
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
              rowsPerPage={rowsPerPage}
              total={totalRecords}
              index={sortIndex}
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
          getData={this.props.getData}
          dataParams={this.props.parsedFilter}
          addNew={this.state.addNew}
          items={this.state.items}
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
    dataList: state.dataListVendor,
    items: state.dataListApg.allData
  }
}

export default connect(mapStateToProps, {
  getData,
  deleteData,
  updateData,
  addData,
  getInitialData,
  getItems,
  filterData
})(DataListConfig)
