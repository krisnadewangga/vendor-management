import { api, getLoggedInUser } from "../../config"
import { showAlert} from '../notification';

export const getData = obj => {
  return async dispatch => {
    const loggedInUser = getLoggedInUser()
    const { id } = loggedInUser.user.vendor
    await api.get(`/vendors/${id}`).then(response => {
      dispatch({ type: "PROFIL_GET_DATA", data: response.data })
    })
  }
}

export const getInitialDataProvinsi = () => {
  return async dispatch => {
    await api.get("/reg-provinces").then(response => {
      dispatch({ type: "PROVINSI_GET_ALL_DATA", data: response.data })
    })
  }
}

export const getInitialDataKota = provinsi => {
  return async dispatch => {
    await api.get("/reg-regencies", { params: {reg_province: provinsi} }).then(response => {
      dispatch({ type: "KOTA_GET_ALL_DATA", data: response.data })
    })
  }
}

export const getInitialDataVendorKategori = () => {
  return async dispatch => {
    await api.get("/vendor-categories").then(response => {
      dispatch({ type: "VENDOR_KATEGORI_GET_ALL_DATA", data: response.data })
    })
  }
}

export const getInitialDataVendorKelas = () => {
  return async dispatch => {
    await api.get("/vendor-classes").then(response => {
      dispatch({ type: "VENDOR_KELAS_GET_ALL_DATA", data: response.data })
    })
  }
}

export const getInitialDataVendorSbu = () => {
  return async dispatch => {
    await api.get("/sbus").then(response => {
      dispatch({ type: "VENDOR_SBU_GET_ALL_DATA", data: response.data })
    })
  }
}

export const uploadFile = obj => {
  return async dispatch => {
    const loggedInUser = getLoggedInUser()
    const { id } = loggedInUser.user.vendor
    const { param } = obj
    const data = { [`confirmed_${param}`] : obj[`confirmed_${param}`] }

    const formData = new FormData()
    formData.append('data', JSON.stringify( data ))
    formData.append(`files.${param}`, obj[param])
    await api.put(`/vendors/${id}`, formData, { headers: {'content-type': 'multipart/form-data'} })
    .then(response => {
      dispatch(showAlert({
        type: 'success',
        title: 'File Upload',
        content: 'Your files uploaded!',
      }))
      dispatch({ type: "PROFIL_GET_DATA", data: response.data })
    })
    .catch(error => {
      const err = error.response.data
      dispatch(showAlert({
        type: 'error',
        title: err.message,
        content: err.data[0].messages[0].message,
      }))
    })
  }
}

export const changePassword = obj => {
  return async dispatch => {
    await api.put(`/change-password`, obj)
    .then(response => {
      // localStorage.setItem("loggedInUser", JSON.stringify(response.data))
      dispatch(showAlert({
        type: 'success',
        title: 'Sukses',
        content: 'Password telah diperbarui.',
      }))
    })
    .catch(error => {
      const err = error.response.data
      dispatch(showAlert({
        type: 'error',
        title: err.error,
        content: err.data[0].messages[0].message,
      }))
    })
  }
}

export const updateInfo = obj => {
  return async (dispatch, getState) => {
    const loggedInUser = getLoggedInUser()
    const { id } = loggedInUser.user.vendor
    console.log(obj)

    await api.put(`/vendors/${id}`, obj)
    .then(response => {
      dispatch({ type: "PROFIL_GET_DATA", data: response.data })
      dispatch(showAlert({
        type: 'success',
        title: 'Sukses',
        content: 'Info perusahaan telah diperbarui',
      }))
    })
    .catch(error => {
      const err = error.response.data
      dispatch(showAlert({
        type: 'error',
        title: err.error,
        content: err.data[0].messages[0].message,
      }))
    })
  }
}

export const uploadAva = file => {
  return async dispatch => {
    const loggedInUser = getLoggedInUser()
    const { id } = loggedInUser.user

    const formData = new FormData()
    formData.append('refId', id)
    formData.append('ref', "user")
    formData.append('field', "avatar")
    formData.append('source', "users-permissions")
    formData.append(`files`, file)
    await api.post(`/upload`, formData, { headers: {'content-type': 'multipart/form-data'} })
    .then(response => {
      dispatch(showAlert({
        type: 'success',
        title: 'File Upload',
        content: 'Your files uploaded!',
      }))
      dispatch({ type: "PROFIL_UPLOAD_AVA", data: response.data })
    })
    .catch(error => {
      const err = error.response.data
      dispatch(showAlert({
        type: 'error',
        title: err.message,
        content: err.data.errors[0].message,
      }))
    })
  }
}

export const deleteAva = () => {
  return async (dispatch) => {
    const loggedInUser = getLoggedInUser()
    const { id } = loggedInUser.user.avatar

    await api.delete(`/upload/files/${id}`)
    .then(response => {
      dispatch({ type: "PROFIL_DELETE_AVA", data: response.data })
      dispatch(showAlert({
        type: 'success',
        title: 'Sukses',
        content: 'Berhasil hapus foto',
      }))
    })
    .catch(error => {
      const err = error.response.data
      dispatch(showAlert({
        type: 'error',
        title: err.error,
        content: err.data[0].messages[0].message,
      }))
    })
  }
}
