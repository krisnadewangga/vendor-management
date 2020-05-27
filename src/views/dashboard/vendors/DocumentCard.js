import React from "react"
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard"
import { FileText } from "react-feather"


class DocumentCard extends React.Component {
  render() {
    return (
      <StatisticsCard
        iconRight
        icon={<FileText className="primary" size={22} />}
        iconBg="danger"
        stat="5 Dokumen"
        statTitle="Dokumen belum lengkap"
        hideChart
      />
    )
  }
}
export default DocumentCard
