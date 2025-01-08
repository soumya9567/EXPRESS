// async function handleSubmit(){


//     const name = document.getElementById('first_Name')
//     console.log(name.value,"first name")

//     // fetchData(name);

// }




// async function fetchData(){
//     console.log("call back")


//     const response = await  fetch("http://localhost//3000/add",{

//         method:"post"


//     }

//     ) 

//     const data = await response.json()
//     console.log(data,"data is fetch")



// }


import mongoose from "mongoose"

const UserSchema = mongoose.Schema(
    {
        name: {

            type: String,
            required: [true, "please enter the name "],


        },

        email: {
            type: String,
            required: true,
        }
    },

    {
        timestamps : true,
    }
)

const User = mongoose.model("User",UserSchema);
export default User


