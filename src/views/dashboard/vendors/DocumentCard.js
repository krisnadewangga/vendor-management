import React from "react"
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard"
import { FileText } from "react-feather"
import { Link } from "react-router-dom"

class DocumentCard extends React.Component {
  render() {
    return (
      <Link to="/vendor/profil">
        <StatisticsCard
          iconRight
          icon={<FileText className="primary" size={22} />}
          iconBg="danger"
          stat={`${this.props.data} Dokumen`}
          statTitle="Dokumen belum lengkap"
          hideChart
        />
      </Link>
    )
  }
}
export default DocumentCard
