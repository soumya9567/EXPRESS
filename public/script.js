async function handleSubmit(){


    const name = document.getElementById('first_Name').value
    console.log(name)
}



async function fetchData(){
    cobnsole.log("call back")


    const response = await  fetch("http://localhost//3000/add") 
    const data = await response.json()
    console.log(data,"data is fetch")



}

fetchData();


