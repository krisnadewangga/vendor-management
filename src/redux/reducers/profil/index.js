const initialState = {
  data: [],
  provinsi: [],
  kota: [],
  vendorIndustri: [],
  vendorKelas: [],
  vendorSBU: []
}

const DataListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PROFIL_GET_DATA":{
      return {...state, data: action.data}
    }
    case "PROVINSI_GET_ALL_DATA":{
      return {...state, provinsi: action.data }
    }
    case "KOTA_GET_ALL_DATA":{
      return {...state, kota: action.data }
    }
    case "VENDOR_KATEGORI_GET_ALL_DATA":{
      return {...state, vendorIndustri: action.data }
    }
    case "VENDOR_KELAS_GET_ALL_DATA":{
      return {...state, vendorKelas: action.data }
    }
    case "VENDOR_SBU_GET_ALL_DATA":{
      return {...state, vendorSBU: action.data }
    }
    case "PROFIL_UPLOAD_AVA":{
      return {
        ...state,
        data: {
          ...state.data,
          user: {
            ...state.data.user,
            avatar: action.data[0]
          }
        }
      }
    }
    case "PROFIL_DELETE_AVA":{
      return {
        ...state,
        data: {
          ...state.data,
          user: {
            ...state.data.user,
            avatar: null
          }
        }
      }
    }
    default:
      return state
  }
}

export default DataListReducer
