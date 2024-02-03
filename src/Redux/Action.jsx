/* eslint-disable no-unused-vars */
export function showUser(users){
    return {
        type : "Success",
        payload: users
    }
}


export function showError(error){
    return {
        type : "Error",
        payload: error
    }
}
