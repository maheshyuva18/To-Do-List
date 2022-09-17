
function update() {
    let tit = document.getElementById("title").value;
    let desc = document.getElementById("description").value;

    if (localStorage.getItem('itemList') == null) {
        var todoarray = [];
        localStorage.setItem("itemList", JSON.stringify(todoarray))
    }
    else {
        var retriveData = localStorage.getItem('itemList')
        todoarray = JSON.parse(retriveData)
        todoarray.push([tit, desc])
        localStorage.setItem("itemList", JSON.stringify(todoarray))
    }
    updateAll()
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";

}

function updateAll(){

    if (localStorage.getItem('itemList') == null) {
        var todoarray = [];
        localStorage.setItem("itemList", JSON.stringify(todoarray))
    }
    else{
        var retriveData = localStorage.getItem('itemList')
        todoarray = JSON.parse(retriveData)

        var tableList = document.getElementById("tble")
        var temp = ""
            todoarray.forEach((Elements, index) => {
                temp += `<tr>
                    <th scope="row">${index + 1}</th>
                    <td>${Elements[0]}</td>
                    <td>${Elements[1]}</td>
                    <td><button class="btn btn-sm btn-primary " onclick = "deleteItem(${index})">Delete</button></td>
                </tr>`
    
            })
            tableList.innerHTML = temp;
    }
}

function clearAll() {
    if (confirm("Are Your Sure!!")) {
        localStorage.clear()
        update()
    }
}

function deleteItem(index) {
    var retriveData = localStorage.getItem('itemList')
    todoarray = JSON.parse(retriveData)
    todoarray.splice(index, 1);
    localStorage.setItem("itemList", JSON.stringify(todoarray))
    updateAll()
}


const add = document.getElementById("add");
add.addEventListener('click', update);

updateAll()