const initialState = {
  data: [],
  params: null,
  allData: [],
  totalPages: 0,
  filteredData: [],
  totalRecords: 0,
  sortIndex: [],
  kategori: [],
  provinsi: [],
  kota: [],
  nomor: ""
}

const determinePopularity = val => {
  if (val >= 75) return { popValue: val, color: "success" }
  else if (val < 75 && val >= 55) return { popValue: val, color: "primary" }
  else if (val < 55 && val >= 35) return { popValue: val, color: "warning" }
  else if (val < 35 && val >= 0) return { popValue: val, color: "danger" }
  else return { popValue: 0, color: "danger" }
}

const moveIndex = (arr, from, to) => {
  let el = arr[from]
  arr.splice(from, 1)
  arr.splice(to, 0, el)
}

const getIndex = (arr, arr2, arr3, params = {}) => {
  if (arr2.length > 0) {
    let startIndex = arr.findIndex(i => i.id === arr2[0].id) + 1
    let endIndex = arr.findIndex(i => i.id === arr2[arr2.length - 1].id) + 1
    let finalArr = [startIndex, endIndex]
    return (arr3 = finalArr)
  } else {
    let finalArr = [arr.length - parseInt(params.perPage), arr.length]
    return (arr3 = finalArr)
  }
}

const DataListReducer = (state = initialState, action) => {
  let value = action.value
  let filteredData = []

  switch (action.type) {
    // case "VENDOR_AKTIF_GET_DATA":{
    //   let total_items = state.allData.length
    //   let limit = action.params._limit
    //   let totalPages = Math.ceil(total_items/limit)
    //   return {
    //     ...state,
    //     data: action.data,
    //     totalPages: totalPages === 0 ? action.totalPages : totalPages,
    //     params: action.params,
    //     sortIndex: getIndex(
    //       state.allData,
    //       action.data,
    //       state.sortIndex,
    //       action.params
    //     )
    //   }
    // }
    // case "VENDOR_AKTIF_GET_ALL_DATA":
    //   return {
    //     ...state,
    //     allData: action.data,
    //     totalRecords: action.data.length,
    //     sortIndex: getIndex(action.data, state.data, state.sortIndex)
    //   }
    // case "VENDOR_IN_REVIEW_GET_DATA":{
    //   let total_items = state.allData.length
    //   let limit = action.params._limit
    //   let totalPages = Math.ceil(total_items/limit)
    //   return {
    //     ...state,
    //     data: action.data,
    //     totalPages: totalPages === 0 ? action.totalPages : totalPages,
    //     params: action.params,
    //     sortIndex: getIndex(
    //       state.allData,
    //       action.data,
    //       state.sortIndex,
    //       action.params
    //     )
    //   }
    // }
    // case "VENDOR_IN_REVIEW_GET_ALL_DATA":
    //   return {
    //     ...state,
    //     allData: action.data,
    //     totalRecords: action.data.length,
    //     sortIndex: getIndex(action.data, state.data, state.sortIndex)
    //   }
    // case "VENDOR_PROBLEM_GET_DATA":{
    //   let total_items = state.allData.length
    //   let limit = action.params._limit
    //   let totalPages = Math.ceil(total_items/limit)
    //   return {
    //     ...state,
    //     data: action.data,
    //     totalPages: totalPages === 0 ? action.totalPages : totalPages,
    //     params: action.params,
    //     sortIndex: getIndex(
    //       state.allData,
    //       action.data,
    //       state.sortIndex,
    //       action.params
    //     )
    //   }
    // }
    // case "VENDOR_PROBLEM_GET_ALL_DATA":
    //   return {
    //     ...state,
    //     allData: action.data,
    //     totalRecords: action.data.length,
    //     sortIndex: getIndex(action.data, state.data, state.sortIndex)
    //   }
    case "KATALOG_PEMESANAN_GET_DATA_BY_ID":
      return {
        ...state,
        data: action.data,
      }
    case "KATALOG_PEMESANAN_GET_DATA_DIPROSES_BY_ID":
      return {
        ...state,
        data: action.data.po_send_items,
        nomor: action.data.nomor,
      }
    case "KATALOG_PEMESANAN_GET_DATA_SHIPPING":
      return {
        ...state,
        data: action.data,
      }
    case "KATALOG_PEMESANAN_GET_DATA_DIKIRIM":
      return {
        ...state,
        nomor: action.data.nomor,
        data: action.data.po_send_items,
      }
    case "KATALOG_GET_DATA_BY_ID":
    return {
      ...state,
      data: action.data,
    }
    case "KATALOG_PEMESANAN_GET_UPDATE":
    return {
      ...state,
      data: action.data,
    }
    case "FILTER_DATA_APG_KATALOG":
    if (value.length) {
      filteredData = state.allData
        .filter(item => {
          let startsWithCondition =
            item.nomor.toLowerCase().startsWith(value.toLowerCase())

          let includesCondition =
            item.nomor.toLowerCase().includes(value.toLowerCase()) 

          if (startsWithCondition) {
            return startsWithCondition
          } else if (!startsWithCondition && includesCondition) {
            return includesCondition
          } else return null
        })
        .slice(state.params.page - 1, state.params.perPage)
      return { ...state, filteredData }
    } else {
      filteredData = state.data
      return { ...state, filteredData }
    }
    case "FILTER_DATA_APG_KATALOG_PO_EXPIRED":
      if (value.length) {
        filteredData = state.allData
          .filter(item => {
            let startsWithCondition =
              item.nomor.toLowerCase().startsWith(value.toLowerCase()) ||
              item.created_at.toLowerCase().startsWith(value.toLowerCase()) ||
              item.kepada.toLowerCase().startsWith(value.toLowerCase()) ||
              item.tgl_penyerahan.toLowerCase().startsWith(value.toLowerCase())

            let includesCondition =
              item.nomor.toLowerCase().includes(value.toLowerCase()) ||
              item.created_at.toLowerCase().includes(value.toLowerCase()) ||
              item.kepada.toLowerCase().includes(value.toLowerCase()) ||
              item.tgl_penyerahan.toLowerCase().includes(value.toLowerCase()) 

            if (startsWithCondition) {
              return startsWithCondition
            } else if (!startsWithCondition && includesCondition) {
              return includesCondition
            } else return null
          })
          .slice(state.params.page - 1, state.params.perPage)
        return { ...state, filteredData }
      } else {
        filteredData = state.data
        return { ...state, filteredData }
      }
    case "FILTER_DATA_APG_KATALOG_PEMESANAN":
    if (value.length) {
      filteredData = state.allData
        .filter(item => {
          let startsWithCondition =
            item.nomor.toLowerCase().startsWith(value.toLowerCase()) ||
            item.created_at.toLowerCase().startsWith(value.toLowerCase()) ||
            item.kepada.toLowerCase().startsWith(value.toLowerCase()) ||
            item.status.toLowerCase().startsWith(value.toLowerCase()) ||
            item.tgl_penyerahan.toLowerCase().startsWith(value.toLowerCase())

          let includesCondition =
            item.nomor.toLowerCase().includes(value.toLowerCase()) ||
            item.created_at.toLowerCase().includes(value.toLowerCase()) ||
            item.kepada.toLowerCase().includes(value.toLowerCase()) ||
            item.status.toLowerCase().includes(value.toLowerCase()) ||
            item.tgl_penyerahan.toLowerCase().includes(value.toLowerCase()) 

          if (startsWithCondition) {
            return startsWithCondition
          } else if (!startsWithCondition && includesCondition) {
            return includesCondition
          } else return null
        })
        .slice(state.params.page - 1, state.params.perPage)
      return { ...state, filteredData }
    } else {
      filteredData = state.data
      return { ...state, filteredData }
    }
    case "FILTER_DATA_APG_KATALOG_PEMESANAN_STATUS":
      if (value) {
        filteredData = state.allData
        .filter(item => { 
          let includesCondition =
            item.status.toLowerCase().includes(value.toLowerCase())

          if (includesCondition) {
            return includesCondition
          } else return null
        })
        .slice(state.params.page - 1, state.params.perPage)
      return { ...state, filteredData }
    } else {
      filteredData = state.data
      return { ...state, filteredData }
    }
    // case "VENDOR_AKTIF_UPDATE_DATA":
    //   // state.data.find(item => {
    //   //   if (item.id === action.obj.id) {
    //   //     // let popularity = determinePopularity(action.obj.popularity.popValue)
    //   //     // return Object.assign(item, { ...action.obj, popularity })
    //   //   } else {
    //   //     return item
    //   //   }
    //   // })
    //   return { ...state }
    // case "VENDOR_TERVERIFIKASI":
    //   return { ...state }
    // case "VENDOR_PERSYARATAN_BELUM_TERPENUHI":
    //   return { ...state }
    case "APG_KATALOG_GET_DATA":{
      let total_items = state.allData.length
      let limit = action.params._limit
      let totalPages = Math.ceil(total_items/limit)
      return {
        ...state,
        data: action.data,
        totalPages: totalPages === 0 ? action.totalPages : totalPages,
        params: action.params,
        sortIndex: getIndex(
          state.allData,
          action.data,
          state.sortIndex,
          action.params
        )
      }
    }
    case "APG_KATALOG_GET_DATA_PO_EXPIRED":{
      let total_items = state.allData.length
      let limit = action.params._limit
      let totalPages = Math.ceil(total_items/limit)
      return {
        ...state,
        data: action.data,
        totalPages: totalPages === 0 ? action.totalPages : totalPages,
        params: action.params,
        sortIndex: getIndex(
          state.allData,
          action.data,
          state.sortIndex,
          action.params
        )
      }
    }
    case "APG_KATALOG_GET_ALL_DATA_PO_EXPIRED":
      return {
        ...state,
        allData: action.data,
        totalRecords: action.data.length,
        sortIndex: getIndex(action.data, state.data, state.sortIndex)
      }
      case "APG_KATALOG_GET_DATA_PEMESANAN":{
        let total_items = state.allData.length
        let limit = action.params._limit
        let totalPages = Math.ceil(total_items/limit)
        return {
          ...state,
          data: action.data,
          totalPages: totalPages === 0 ? action.totalPages : totalPages,
          params: action.params,
          sortIndex: getIndex(
            state.allData,
            action.data,
            state.sortIndex,
            action.params
          )
        }
      }
      case "APG_KATALOG_GET_ALL_DATA_PEMESANAN":
        return {
          ...state,
          allData: action.data,
          totalRecords: action.data.length,
          sortIndex: getIndex(action.data, state.data, state.sortIndex)
        }
    //   case "VENDOR_KATEGORI_ADD_DATA":{
    //     let id = state.data.slice(-1)[0].id + 1
    //     state.data.push({
    //       ...action.obj,
    //       id,
    //       // popularity: determinePopularity(action.obj.popularity)
    //     })
    //     moveIndex(
    //       state.data,
    //       state.data.findIndex(item => item.id === id),
    //       0
    //     )
    //     return {
    //       ...state,
    //       data: state.data,
    //       totalRecords: state.allData.length,
    //       sortIndex: getIndex(state.allData, state.data, state.sortIndex)
    //     }
    //   }
    //   case "VENDOR_KATEGORI_UPDATE_DATA":{
    //     state.data.find(item => {
    //       if (item.id === action.obj.id) {
    //         // let popularity = determinePopularity(action.obj.popularity.popValue)
    //         // return Object.assign(item, { ...action.obj, popularity })
    //         return Object.assign(item, { ...action.obj })
    //       } else {
    //         return item
    //       }
    //     })
    //     return { ...state }
    //   }
    //   case "VENDOR_KATEGORI_DELETE_DATA":{
    //     let index = state.data.findIndex(item => item.id === action.obj.id)
    //     let updatedData = [...state.data]
    //     updatedData.splice(index, 1)
    //     return {
    //       ...state,
    //       data: updatedData,
    //       totalRecords: state.allData.length,
    //       sortIndex: getIndex(
    //         state.allData,
    //         state.data,
    //         state.sortIndex,
    //         state.params
    //       )
    //     }
    //   }
    // case "VENDOR_KELAS_GET_DATA":{
    //   let total_items = state.allData.length
    //   let limit = action.params._limit
    //   let totalPages = Math.ceil(total_items/limit)
    //   return {
    //     ...state,
    //     data: action.data,
    //     totalPages: totalPages === 0 ? action.totalPages : totalPages,
    //     params: action.params,
    //     sortIndex: getIndex(
    //       state.allData,
    //       action.data,
    //       state.sortIndex,
    //       action.params
    //     )
    //   }
    // }
    // case "VENDOR_KELAS_GET_ALL_DATA":
    //   return {
    //     ...state,
    //     kategori: action.data,
    //     allData: action.data,
    //     totalRecords: action.data.length,
    //     sortIndex: getIndex(action.data, state.data, state.sortIndex)
    //   }
    // case "VENDOR_KELAS_ADD_DATA":{
    //   let id = state.data.slice(-1)[0].id + 1
    //   state.data.push({
    //     ...action.obj,
    //     id,
    //     // popularity: determinePopularity(action.obj.popularity)
    //   })
    //   moveIndex(
    //     state.data,
    //     state.data.findIndex(item => item.id === id),
    //     0
    //   )
    //   return {
    //     ...state,
    //     data: state.data,
    //     totalRecords: state.allData.length,
    //     sortIndex: getIndex(state.allData, state.data, state.sortIndex)
    //   }
    // }
    // case "VENDOR_KELAS_UPDATE_DATA":{
    //   state.data.find(item => {
    //     if (item.id === action.obj.id) {
    //       // let popularity = determinePopularity(action.obj.popularity.popValue)
    //       // return Object.assign(item, { ...action.obj, popularity })
    //       return Object.assign(item, { ...action.obj })
    //     } else {
    //       return item
    //     }
    //   })
    //   return { ...state }
    // }
    // case "VENDOR_KELAS_DELETE_DATA":{
    //   let index = state.data.findIndex(item => item.id === action.obj.id)
    //   let updatedData = [...state.data]
    //   updatedData.splice(index, 1)
    //   return {
    //     ...state,
    //     data: updatedData,
    //     totalRecords: state.allData.length,
    //     sortIndex: getIndex(
    //       state.allData,
    //       state.data,
    //       state.sortIndex,
    //       state.params
    //     )
    //   }
    // }
    // case "VENDOR_KELAS_IMPORT_DATA":{
    //   action.obj.forEach(element => {
    //     let id = state.data.slice(-1)[0].id + 1
    //     state.data.push({
    //       ...element,
    //       id,
    //       // popularity: determinePopularity(action.obj.popularity)
    //     })
    //     moveIndex(
    //       state.data,
    //       state.data.findIndex(item => item.id === id),
    //       0
    //     )
    //   });
    //   return {
    //     ...state,
    //     data: state.data,
    //     totalRecords: state.allData.length,
    //     sortIndex: getIndex(state.allData, state.data, state.sortIndex)
    //   }
    // }
    // case "VENDOR_SBU_GET_DATA":{
    //   let total_items = state.allData.length
    //   let limit = action.params._limit
    //   let totalPages = Math.ceil(total_items/limit)
    //   return {
    //     ...state,
    //     data: action.data,
    //     totalPages: totalPages === 0 ? action.totalPages : totalPages,
    //     params: action.params,
    //     sortIndex: getIndex(
    //       state.allData,
    //       action.data,
    //       state.sortIndex,
    //       action.params
    //     )
    //   }
    // }
    // case "VENDOR_SBU_GET_ALL_DATA":
    //   return {
    //     ...state,
    //     kategori: action.data,
    //     allData: action.data,
    //     totalRecords: action.data.length,
    //     sortIndex: getIndex(action.data, state.data, state.sortIndex)
    //   }
    case "KATALOG_PEMESANAN_KIRIM_PESANAN":{
      return {
        ...state,
        data: state.data,
      }
    }
    case "KATALOG_PEMESANAN_SELESAI":{
      return {
        ...state,
        data: state.data,
      }
    }
    case "KATALOG_PEMESANAN_UPLOAD_PDF":{
      return {
        ...state,
        data: state.data,
      }
    }
    // case "VENDOR_SBU_UPDATE_DATA":{
    //   state.data.find(item => {
    //     if (item.id === action.obj.id) {
    //       // let popularity = determinePopularity(action.obj.popularity.popValue)
    //       // return Object.assign(item, { ...action.obj, popularity })
    //       return Object.assign(item, { ...action.obj })
    //     } else {
    //       return item
    //     }
    //   })
    //   return { ...state }
    // }
    // case "VENDOR_SBU_DELETE_DATA":{
    //   let index = state.data.findIndex(item => item.id === action.obj.id)
    //   let updatedData = [...state.data]
    //   updatedData.splice(index, 1)
    //   return {
    //     ...state,
    //     data: updatedData,
    //     totalRecords: state.allData.length,
    //     sortIndex: getIndex(
    //       state.allData,
    //       state.data,
    //       state.sortIndex,
    //       state.params
    //     )
    //   }
    // }
    // case "VENDOR_SBU_IMPORT_DATA":{
    //   action.obj.forEach(element => {
    //     let id = state.data.slice(-1)[0].id + 1
    //     state.data.push({
    //       ...element,
    //       id,
    //       // popularity: determinePopularity(action.obj.popularity)
    //     })
    //     moveIndex(
    //       state.data,
    //       state.data.findIndex(item => item.id === id),
    //       0
    //     )
    //   });
    //   return {
    //     ...state,
    //     data: state.data,
    //     totalRecords: state.allData.length,
    //     sortIndex: getIndex(state.allData, state.data, state.sortIndex)
    //   }
    // }
    // case "PROVINSI_GET_ALL_DATA":
    //   return {
    //     ...state,
    //     provinsi: action.data
    //   }
    // case "KOTA_GET_ALL_DATA":
    //   return {
    //     ...state,
    //     kota: action.data
    //   }
    case "UPDATE_DATA":
      state.data.find(item => {
        if (item.id === action.obj.id) {
          return Object.assign(item, { ...action.obj })
        } else {
          return item
        }
      })
      return { ...state }
    default:
      return state
  }
}

export default DataListReducer
