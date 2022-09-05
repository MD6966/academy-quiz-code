import { createSlice, } from "@reduxjs/toolkit";
// import axios from "axios";

// const baseURL = "https://localhost:8003/register"


const initialState ={
    value : false
}
// export const registerUser = createAsyncThunk("changeValue/registerUser", async (userData) =>{
//     console.log(userData)
//     try {
//         const res =  await axios.post(baseURL , userData)
//         return res.data  
//         console.log(res)
//     }
//     catch (err) {
//         console.log(err)
//     }


// } )
// export const registerUser =(userData) => async() => {
//     try{
//             const  name =userData.name;
//             const  fName = userData.fName;
//             const   cnic = userData.cnic;
//             const   regId = userData.regId;
//             const   corseType = userData.corseType;
//             const   email = userData.email;
//             const   password= userData.password;
//             const   quizmarks = userData.quizmarks;
//             const   typingmarks=userData.typingmarks;
//             const   oralmarks = userData.oralmarks;

//             const body = {
//                 name, fName, cnic, regId, corseType,email, password, quizmarks, typingmarks, oralmarks
//             };
//            const res = await axios.post("https://localhost:8003/register", body)
//            console.log(res)
//     }
//     catch(err) {
//         console.log(err)
//     }
// }
export const counterSlice = createSlice({

    name :'changeValue',
    initialState,

    reducers : {
        authentication : (state, action) => {
            state.value = action.payload
        }
    }


})

export const {authentication} = counterSlice.actions
export default counterSlice.reducer