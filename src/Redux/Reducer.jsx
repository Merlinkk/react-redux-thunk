


export default function reducer(state = {users : [], error: ''},action){
    switch (action.type){
        case "Success":
            return {
                users : action.payload,
                error: '',
            }
        case "Error":
            return{
                users: [],
                error : action.payload
            }
        default:
            return state
        }
}