import { api } from "../../config"

export const getDataApgCart = () => {
  return async dispatch => {
    await api.get("/carts").then(response => {
      console.log(response, "CART")
      dispatch({
        type: "APG_CART_GET_DATA",
        data: response.data,
      })
      dispatch(getDataApgCartList(response))
    })
  }
}

export const getDataApgCartList = response => {
  return async dispatch => {
    if(response !== undefined){
      console.log(response, "UWAAAW")
      dispatch({
        type: "APG_CART_GET_DATA_LIST",
        data: response.data,
      })
    }else{
      console.log(response, "ADIDAW DATA KOSONG")
    }
  }
}

export const addDataCart = obj => {
  return (dispatch, getState) => {
    console.log(obj)
    api.post("/carts", obj ).then(response => {
      console.log(response)
      dispatch({ 
        type: "ADD_DATA_CART", 
        data: response.data,
      })
    })
    .catch(response => {
      console.log("GAGAL", response.response)
    })
  }
}