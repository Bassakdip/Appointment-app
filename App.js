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
        const res = await axios.post("https://crudcrud.com/api/24a5b2be862a4525af736dfd573e3798/appointmentData", obj);
        console.log(res.data);
        showUserOnScreen(res.data);
    } catch (err) {
        console.log('Error posting data', err);
    }
}

window.addEventListener("DOMContentLoaded", async () => {
    try {
        const res = await axios.get("https://crudcrud.com/api/24a5b2be862a4525af736dfd573e3798/appointmentData")
        for (var i = 0; i < res.data.length; i++) {
            showUserOnScreen(res.data[i]);
        }
    }
    catch (err) {
        console.log(err);
    }
})


function showUserOnScreen(obj) {

    const parentNode = document.getElementById('ul1');
    const childHTML = `<li id=${obj._id} > ${obj.name} - ${obj.email} - ${obj.phn}
                        <button onclick=deleteDataFromCrudCrud('${obj._id}')>Delete</button>
                        <button onclick="editUser('${obj.name}','${obj.email}','${obj.phn}','${obj._id}')">Edit</button> 
                        </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

async function editUser(name, email, phn, id) {

    document.getElementById('nameInputTag').value = name;
    document.getElementById('emailInputTag').value = email;
    document.getElementById('phoneInputTag').value = phn;

    deleteDataFromCrudCrud(id);
}

async function deleteDataFromCrudCrud(id) {
    try {
        await axios.delete(`https://crudcrud.com/api/24a5b2be862a4525af736dfd573e3798/appointmentData/${id}`)
        removeUserOnScreen(id);
    }
    catch (err) {
        console.log(err)
    }
}
function removeUserOnScreen(id) {
    const parentaNode = document.getElementById('ul1');
    const deletedNode = document.getElementById(id);
    if (deletedNode) {
        parentaNode.removeChild(deletedNode)
    }
}
