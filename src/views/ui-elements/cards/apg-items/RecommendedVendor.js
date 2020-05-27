import React from "react"
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Button,
} from "reactstrap"
import { Users, Briefcase } from 'react-feather'
import DataTableCustom from './DataTableCustom'
import StatisticsCard from '../../../../components/@vuexy/statisticsCard/StatisticsCard'


class MoreItems extends React.Component {
  render() {
    return (
      <Row>
        <Col lg="8" sm="12">
          <Card>
            <CardHeader className="justify-content-between">
              <div className="card-heading">
                <CardTitle className="w-100">Vendor Terbaik</CardTitle>
              </div>
            </CardHeader>
            <DataTableCustom />
          </Card>
        </Col>
        <Col lg="4" sm="6">
          <Col>
            <StatisticsCard
              hideChart
              iconRight
              iconBg="primary"
              icon={<Briefcase className="primary" size={22} />}
              stat="4 PO"
              statTitle="Pemesanan"
              height="200"
            />
          </Col>
          <Col>
            <StatisticsCard
              hideChart
              iconRight
              iconBg="primary"
              icon={<Users className="primary" size={22} />}
              stat="1 Vendor"
              statTitle="Vendor Bermasalah"
              height="200"
            />
          </Col>
        </Col>
      </Row>
    )
  }
}
export default MoreItems
