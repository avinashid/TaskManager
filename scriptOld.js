let listTask = document.querySelector(".list");
let getData = document.querySelector(".inputField");
let list = [];
let newButton = document.querySelector('.invertedButtonLook');
let searchButton = document.querySelector('.buttonLook');
let listTextDeco=[];


// for changing text underline
let textUnderline= ()=>{
    list.forEach((e,index)=>{
        let id = "node"+index;
        console.log(id);
        select = document.getElementById(id);
        listTextDeco[index]==1?select.style.textDecoration="line-through":select.style.textDecoration="none";       
    })
}


// For rendering a list
let addOneTask = (e,index) =>{
    let eachItem = document.createElement('div');
    eachItem.setAttribute("class","listItem");
    eachItem.setAttribute("id","node"+index);
    eachItem.textContent = e;
    listTask.appendChild(eachItem);
    let trash = document.createElement('i');
    trash.setAttribute("class","fa-solid fa-trash")
    eachItem.addEventListener("click",()=>{
        listTextDeco[index]==0?listTextDeco[index]=1:listTextDeco[index]=0;
        addTask();
    })
}


// This will re render the list menu
let addTask = ()=>{
    console.log(listTextDeco)
    listTask.textContent = "";
    list.forEach((e,index)=>{
        addOneTask(e,index);
        let id = "node"+index;
        select = document.getElementById(id);
        select.style.textDecoration="line-through"
        listTextDeco==1?select.style.textDecoration="line-through":select.style.textDecoration="none";
        // console.log(item);
        
    })
}


// on click event for New Button
newButton.addEventListener("click",()=>{
    listTextDeco.push(0);
    if((""+getData.value).length>=2){
        list.push(getData.value.trim());
        getData.value = "";
        addTask();
        textUnderline();
    }
})


// On click event for searching
searchButton.addEventListener("click",()=>{
    
    let temp = 0;
    listTask.textContent="";
    list.forEach((val)=>{
        if(val.includes(getData.value)){
            temp++;
            addOneTask(val);
        }
    })
    
    temp==0 || getData.value==="" ? document.getElementById("found").textContent="":document.getElementById("found").textContent=temp+" found";
    if(list.length==0 || temp==0){
        listTask.textContent="";
        addOneTask("Not Found");
    }

    getData.textContent="";
})


listTask.addEventListener("click",()=>{
    console.log(true)
    textUnderline();
    
})



