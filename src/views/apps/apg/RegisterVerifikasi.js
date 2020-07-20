import React from "react"
import { api } from '../../../redux/config'
import { history } from "../../../history"

const doDispatch = () => {

}

class RegisterVerifikasi extends React.Component {
  componentDidMount() {
    api.get(this.props.location.pathname + this.props.location.search)
    .then(response => {
      console.log(response)
      var token
      var loggedInUser
      if (response.data) {
        loggedInUser = response.data.user
        token = response.data.jwt
        localStorage.setItem("loggedInUser", JSON.stringify(response.data))
        // this.props.dispatch({
        //   type: "LOGIN_WITH_JWT",
        //   payload: { token, loggedInUser, loggedInWith: "jwt" }
        // })

        history.push("/")
      }
    })
    .catch(err => console.log(err))
  }
  render() {
    return (
        <React.Fragment>
          Loading ...
        </React.Fragment>
    )
  }
}

export default RegisterVerifikasi
