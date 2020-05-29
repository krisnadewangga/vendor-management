import React from "react"
import {
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  TabContent,
  TabPane,
  Col,
  Row,
  FormGroup,
  Input,
  Button,
} from "reactstrap"
import { Search } from "react-feather"
import { ChevronDown } from "react-feather"

class DropdownFlat extends React.Component {
  state = {
    activeTab: "1"
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="3">
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
          <Col sm="3">
            <UncontrolledButtonDropdown className="btn-block">
              <Button outline color="primary">Sub Kategori</Button>
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
          <Col sm="3">
            <UncontrolledButtonDropdown className="btn-block">
              <Button outline color="primary">Urutkan</Button>
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
          <Col sm="3">
            <div className="ecommerce-searchbar">
            <FormGroup className="position-relative">
              <Input
                className="search-product"
                placeholder="Search Here..."
              />
              <div className="form-control-position">
                <Search size={22} />
              </div>
            </FormGroup>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default DropdownFlat