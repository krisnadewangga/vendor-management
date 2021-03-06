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
import {
  getDataApgKatalogPOExpired as getData,
  getInitialDataApgKatalogPOExpired as getInitialData,
  filterDataApgKatalogExpired as filterData
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
        name: "Nomor PO",
        selector: "name",
        sortable: true,
        minWidth: "250px",
        cell: row => (
          <p title={row.nomor} className="text-truncate text-bold-500 mb-0">
            {row.nomor}
          </p>
        )
      },
      {
        name: "Tanggal",
        selector: "tanggal",
        sortable: true,
        cell: row => (
          <p title={row.created_at} className="text-truncate text-bold-500 mb-0">
            {row.created_at}
          </p>
        )
      },
      {
        name: "Vendor",
        selector: "vendor",
        sortable: true,
        cell: row => (
          <p title={row.kepada} className="text-truncate text-bold-500 mb-0">
            {row.kepada}
          </p>
        )
      },
      {
        name: "Jatuh Tempo",
        selector: "jatuh-tempo",
        sortable: true,
        cell: row => (
          <p title={row.tgl_penyerahan} className="text-truncate text-bold-500 mb-0">
            {row.tgl_penyerahan}
          </p>
        )
      },
      {
        name: "Total Harga",
        selector: "total-harga",
        sortable: true,
        cell: row => (
          <p title={row.total} className="text-truncate text-bold-500 mb-0">
            {row.total}
          </p>
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
    addNew: "",
    activeTab: "1"
  }

  thumbView = this.props.thumbView

  componentDidMount() {
    this.props.getData(this.props.parsedFilter)
    this.props.getInitialData()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.thumbView) {
      this.thumbView = false
      let columns = [
        {
          name: "Nomor PO",
          selector: "name",
          sortable: true,
          minWidth: "250px",
          cell: row => (
            <p title={row.nomor} className="text-truncate text-bold-500 mb-0">
              {row.nomor}
            </p>
          )
        },
        {
          name: "Tanggal",
          selector: "tanggal",
          sortable: true,
          cell: row => (
            <p title={row.created_at} className="text-truncate text-bold-500 mb-0">
              {row.created_at}
            </p>
          )
        },
        {
          name: "Vendor",
          selector: "vendor",
          sortable: true,
          cell: row => (
            <p title={row.kepada} className="text-truncate text-bold-500 mb-0">
              {row.kepada}
            </p>
          )
        },
        {
          name: "Jatuh Tempo",
          selector: "jatuh-tempo",
          sortable: true,
          cell: row => (
            <p title={row.tgl_penyerahan} className="text-truncate text-bold-500 mb-0">
              {row.tgl_penyerahan}
            </p>
          )
        },
        {
          name: "Total Harga",
          selector: "total-harga",
          sortable: true,
          cell: row => (
            <p title={row.total} className="text-truncate text-bold-500 mb-0">
              {row.total}
            </p>
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
    history.push(`/apg/katalog-po-expired/list-view?page=${page}&perPage=${value}`)
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
      let urlPrefix = "/apg/katalog-po-expired/"
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
    let urlPrefix = "/apg/katalog-po-expired/"
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
          onRowClicked={data => {
            let url = `/apg/katalog-po-detail/${data.id}`
            history.push(url)
          }}
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
  getData,
  getInitialData,
  filterData
})(apgKatalogConfig)
