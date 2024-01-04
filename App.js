async function saveData(event) {
    event.preventDefault();

    const name = document.getElementById('nameInputTag').value;
    const email = document.getElementById('emailInputTag').value;
    const phn = document.getElementById('phoneInputTag').value;

    const obj = {
        name,
        email,
        phn
    };

    try {
        const res = await axios.post("https://crudcrud.com/api/782909609cf5459982c0a9d0b1cb72b8/data", obj);
        console.log(res.data);
        showUserOnScreen(res.data);
    } catch (err) {
        console.log('Error posting data', err);
    }
}

window .addEventListener("DOMContentLoaded",async ()=>{
    try{
        const res = await axios.get("https://crudcrud.com/api/109a064e403445edbbc1a3eec25932b0/appointmentData")
        for(var i=0;i<res.data.length;i++)
        {
            showUserOnScreen(res.data[i]);
        }
    }
    catch(err){
        console.log(err);
    }
})

function showUserOnScreen(obj) {
    if (!obj) {
        console.error('addToScreen called with undefined');
        return;
    }
    const parentElement = document.getElementById('ul1');
    const li = document.createElement('li');
    const liText = document.createTextNode(`Name: ${obj.name}, Email: ${obj.email}, Phn: ${obj.phn}`);
    li.appendChild(liText);
    parentElement.append(li);
}
