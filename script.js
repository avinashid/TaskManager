let listTask = document.querySelector(".list");
let getData = document.querySelector(".inputField");
// let hh = document.querySelector("")
let list = [];
let newButton = document.querySelector('.invertedButtonLook');
let searchButton = document.querySelector('.buttonLook');
let listTextDeco=[];
let count = 0;
let timeLeftSec = 0;
const timerEvent = document.querySelector(".dropdown");

const listData = {
    id : "",
    description :"",
    timeLeft :0,
    textDeco:"none"

}
const taskCompleted=(task)=>{
   
}
const addList=(listData)=>{
    list.push(listData)
    let listWrapper = document.createElement("div");
    listWrapper.setAttribute("class","listWrapper");
    listTask.appendChild(listWrapper);
    let listItem = document.createElement("div");  
    listItem.setAttribute("class","listItem");
    listItem.setAttribute("id","node"+count++);
    listItem.textContent=listData;
    listWrapper.appendChild(listItem);
    let trash = document.createElement("i");
    trash.setAttribute("class","fa-solid fa-trash");
    trash.setAttribute("id","trash");
    listWrapper.appendChild(trash);
    console.log(trash);
    listItem.addEventListener("click",()=>{
        if(listItem.style.textDecoration!="line-through"){
            listItem.style.textDecoration="line-through";
        }else{
            listItem.style.textDecoration="none";
        }
    });
    trash.addEventListener("click",()=>{
        listItem.style.display="none";
        trash.style.display="none";
    })
}


// Adding data to list

newButton.addEventListener("click",()=>{
    timerEvent.style.display="flex";
    list.push(getData.value);
    console.log(list)
    if((""+getData.value).length>1){
        addList(getData.value);
        getData.value = "";

    }else{
        getData.textContent="";
        getData.setAttribute("placeholder","Description should be at least 2 character");
    }  
})

searchButton.addEventListener("click",()=>{
    let listData = document.querySelectorAll(".listItem");
    let listTemp = document.querySelectorAll(".listWrapper");
    listData.forEach((val,index)=>{
        if(val.textContent.includes(getData.value)){
            console.log("Thisis true")
            listTemp[index].style.display="flex";
        }else{
            console.log("This is false")
            console.log(listTemp[index]);
            listTemp[index].style.display="none";
        }
    })
    getData.value = "";
})
// For dropdown

// adding increment and decrement functionality

const increDecreVal=(val, id )=>{
    if(val==1){
        // if(id.addEventListener)
    }
}

document.querySelector(".invertedSubmitBtn").addEventListener("click",()=>{
    timerEvent.style.display="none";
})


