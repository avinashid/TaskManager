let listTask = document.querySelector(".list");
let getData = document.querySelector(".inputField");
let list = [];
let newButton = document.querySelector('.invertedButtonLook');
let searchButton = document.querySelector('.buttonLook');
let listTextDeco=[];

// For rendering a list
let addOneTask = (e,index) =>{
    let eachItem = document.createElement('div');
    eachItem.setAttribute("class","listItem");
    eachItem.textContent = e;
    listTask.appendChild(eachItem);
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
        let item = document.querySelector(".list:nth-child(1)");
        console.log(item);
        addOneTask(e,index);
        
    })
}


// on click event for New Button
newButton.addEventListener("click",()=>{
    listTextDeco.push(0);
    if((""+getData.value).length>=2){
        list.push(getData.value.trim());
        getData.value = "";
        addTask();
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


