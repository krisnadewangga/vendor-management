const initialState = {
  data: [],
  params: null,
  allData: [],
  totalPages: 0,
  filteredData: [],
  totalRecords: 0,
  sortIndex: []
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
    case "GET_DATA":
      return {
        ...state,
        data: action.data,
        totalPages: action.totalPages,
        params: action.params,
        sortIndex: getIndex(
          state.allData,
          action.data,
          state.sortIndex,
          action.params
        )
      }
    case "GET_ALL_DATA":
      return {
        ...state,
        allData: action.data,
        totalRecords: action.data.length,
        sortIndex: getIndex(action.data, state.data, state.sortIndex)
      }
    case "FILTER_DATA":
      let filteredData = []
      let value = action.value
      if (value.length) {
        console.log(value, "INININI")
        filteredData = state.allData
          .filter(item => {
            let startsWithCondition =
              item.nama_item.toLowerCase().startsWith(value.toLowerCase())

            let includesCondition =
              item.nama_item.toLowerCase().includes(value.toLowerCase())

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
    case "FILTER_DATA_CATEGORY":
      if (value.length) {
        filteredData = state.allData
          .filter(item => {
            let startsWithCondition =
              item.category.toLowerCase().startsWith(value.toLowerCase())

            let includesCondition =
              item.category.toLowerCase().includes(value.toLowerCase())

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
    case "FILTER_DATA_SUB_CATEGORY":
      if (value.length) {
        filteredData = state.allData
          .filter(item => {
            let startsWithCondition =
              item.sub_category.toLowerCase().startsWith(value.toLowerCase())

            let includesCondition =
              item.sub_category.toLowerCase().includes(value.toLowerCase())

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
    case "FILTER_DATA_SATUAN":
      if (value.length) {
        filteredData = state.allData
          .filter(item => {
            let startsWithCondition =
              item.unit.toLowerCase().startsWith(value.toLowerCase())

            let includesCondition =
              item.unit.toLowerCase().includes(value.toLowerCase())

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
    case "ADD_DATA":
      let id = state.data.slice(-1)[0].id + 1
      state.data.push({
        ...action.obj,
        id,
        popularity: determinePopularity(action.obj.popularity)
      })
      moveIndex(
        state.data,
        state.data.findIndex(item => item.id === id),
        0
      )
      return {
        ...state,
        data: state.data,
        totalRecords: state.allData.length,
        sortIndex: getIndex(state.allData, state.data, state.sortIndex)
      }
    case "UPDATE_DATA":
      state.data.find(item => {
        if (item.id === action.obj.id) {
          return Object.assign(item, { ...action.obj })
        } else {
          return item
        }
      })
      return { ...state }
    case "DELETE_DATA":
      let index = state.data.findIndex(item => item.id === action.obj.id)
      let updatedData = [...state.data]
      updatedData.splice(index, 1)
      return {
        ...state,
        data: updatedData,
        totalRecords: state.allData.length,
        sortIndex: getIndex(
          state.allData,
          state.data,
          state.sortIndex,
          state.params
        )
      }
    default:
      return state
  }
}

export default DataListReducer
