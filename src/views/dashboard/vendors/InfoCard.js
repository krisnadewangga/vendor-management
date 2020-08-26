import React from "react"
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard"
import { Archive } from "react-feather"
import { Link } from "react-router-dom"

class InfoCard extends React.Component {
  render() {
    return (
      <Link to="/vendor/profil">
        <StatisticsCard
          iconRight
          icon={<Archive className="primary" size={22} />}
          iconBg="warning"
          stat={`${this.props.data} Informasi`}
          statTitle="Profil belum lengkap"
          hideChart
        />
      </Link>
    )
  }
}
export default InfoCard
