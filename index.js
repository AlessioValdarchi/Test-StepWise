function backEnd(email, password) {
    return new Promise((resolve, reject) => {
        const myObj = {
            email: email,
            password: password
        }
        resolve(myObj)
    })
}


async function myForm() {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const fetchData = await backEnd(email, password);
    console.log('fetchData ', fetchData);
    return fetchData
}



const div = document.getElementById('risposta')
const divPass = document.getElementById('password_res')
const button = document.getElementById('buttonOnSubmit')
button.addEventListener('click', async () => {
    const rispJson = await myForm()
    div.innerHTML = (rispJson.email)
    divPass.innerHTML = (rispJson.password)

})