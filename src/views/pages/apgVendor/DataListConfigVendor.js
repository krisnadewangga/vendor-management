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
  getData,
  getInitialData,
  deleteData,
  updateData,
  addData,
  filterData
} from "../../../redux/actions/data-list"
import Sidebar from "./DataListSidebar"
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
            <DropdownMenu>
              <DropdownItem tag="a">Option 1</DropdownItem>
              <DropdownItem tag="a">Option 2</DropdownItem>
              <DropdownItem tag="a">Option 3</DropdownItem>
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
            <DropdownMenu>
              <DropdownItem tag="a">Option 1</DropdownItem>
              <DropdownItem tag="a">Option 2</DropdownItem>
              <DropdownItem tag="a">Option 3</DropdownItem>
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
            <DropdownMenu>
              <DropdownItem tag="a">Option 1</DropdownItem>
              <DropdownItem tag="a">Option 2</DropdownItem>
              <DropdownItem tag="a">Option 3</DropdownItem>
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
        sortIndex: props.dataList.sortIndex
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
        selector: "name",
        sortable: true,
        minWidth: "250px",
        cell: row => (
          <p title={row.name} className="text-truncate text-bold-500 mb-0">
            {row.name}
          </p>
        )
      },
      {
        name: "Nama Vendor",
        selector: "category",
        sortable: true
      },
      {
        name: "Alamat",
        selector: "category",
        sortable: true
      },
      {
        name: "Kota",
        selector: "category",
        sortable: true
      },
      {
        name: "Propinsi",
        selector: "category",
        sortable: true
      },
      {
        name: "Kategori",
        selector: "category",
        sortable: true
      },
      {
        name: "SBU",
        selector: "category",
        sortable: true
      },
      {
        name: "Email",
        selector: "category",
        sortable: true
      },
      {
        name: "Telepon",
        selector: "category",
        sortable: true
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
    this.props.getData(this.props.parsedFilter)
    this.props.getInitialData()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.thumbView) {
      this.thumbView = false
      let columns = [
        {
          name: "Id",
          selector: "name",
          sortable: true,
          minWidth: "250px",
          cell: row => (
            <p title={row.name} className="text-truncate text-bold-500 mb-0">
              {row.name}
            </p>
          )
        },
        {
          name: "Nama Vendor",
          selector: "category",
          sortable: true
        },
        {
          name: "Alamat",
          selector: "category",
          sortable: true
        },
        {
          name: "Kota",
          selector: "category",
          sortable: true
        },
        {
          name: "Propinsi",
          selector: "category",
          sortable: true
        },
        {
          name: "Kategori",
          selector: "category",
          sortable: true
        },
        {
          name: "SBU",
          selector: "category",
          sortable: true
        },
        {
          name: "Email",
          selector: "category",
          sortable: true
        },
        {
          name: "Telepon",
          selector: "category",
          sortable: true
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
    history.push(`/apg/vendor-aktif/list-view?page=${page}&perPage=${value}`)
    this.setState({ rowsPerPage: value })
    getData({ page: parsedFilter.page, perPage: value })
  }

  handleSidebar = (boolean, addNew = false) => {
    this.setState({ sidebar: boolean })
    if (addNew === true) this.setState({ currentData: null, addNew: true })
  }

  handleDelete = row => {
    this.props.deleteData(row)
    this.props.getData(this.props.parsedFilter)
    if (this.state.data.length - 1 === 0) {
      let urlPrefix = "/apg/vendor-aktif/"
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
    let urlPrefix = "/apg/vendor-aktif/"
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
          onRowClicked={data => {
            history.push("/apg/vendor-aktif-detail");
            console.log(data)
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
    dataList: state.dataList
  }
}

export default connect(mapStateToProps, {
  getData,
  deleteData,
  updateData,
  addData,
  getInitialData,
  filterData
})(DataListConfig)