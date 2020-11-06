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
    case "APG_CART_GET_DATA":{
      return {
        ...state,
        data: action.data,
        params: action.params,
      }
    }
    case "APG_CART_GET_DATA_LIST":{
      return {
        ...state,
        data: action.data,
      }
    }
    case "ADD_DATA_CART":{
      return {
        ...state,
        data: action.data,
      }
    }
    default:
      return state
  }
}

export default DataListReducer
