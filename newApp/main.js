//Initial
const gid  = (id)=> {return document.getElementById(id)};
const gcl  = (cl)=> {return document.getElementsByClassName(cl)};
const gtg  = (tg)=> {return document.getElementsByTagName(tg)};
const qusel = (sl)=> {return document.querySelector(sl)};
const quall  = (sl)=> {return document.querySelectorAll(sl)};      

const crtel =(el)=> {return document.createElement(el)};

const setlo = (keyName,keyVal)=>{window.localStorage.setItem(keyName,keyVal)};
const getlo = (keyName)=>{return window.localStorage.getItem(keyName)};
const setse = (keyName,keyVal)=>{window.sessionStorage.setItem(keyName,keyVal)};
const getse = (keyName)=>{return window.sessionStorage.getItem(keyName)};

const eaclp = function(arr,func){arr.forEach(function(r){func(r)})}; //forEachLoop

const fth =async (url) => { //FetchRequest
                const response = await fetch(url);
                return response.json();
				}; 

//app main element
const navside = gid('navside');
const header = gid('header');
const main = gid('main');
const footer = gid('navbottom');

//control method
    // Side navigation
function w3_open(id) {
    var x = gid(id);
    x.style.width = "100%";
    x.style.height = "100%";
    x.style.fontSize = "20px";
    x.style.paddingTop = "10%";
    x.style.display = "block";
    if(id==="navside"){
        loadnav();        
    }
  }
  
  function w3_close(id){
    gid(id).style.display = "none";
  }


function loadnav(){
    let navside_menu = gid("navside_menu");
    navside_menu.innerHTML="";
    
    let ns = [
        {link:"N/A",item:"我的檔案"},
        {link:"N/A",item:"可選擇更期"},
        {link:"N/A",item:"我的更期"},
        {link:"N/A",item:"無法上班日子"},
        {link:"N/A",item:"收入"},
        {link:"N/A",item:"推薦朋友獎金"},
        {link:"N/A",item:"幫助"},
        {link:"N/A",item:"私隱政策"},
        {link:"N/A",item:"設定"},
        {link:"N/A",item:"登出"}
        ];

    let act = function(r){
        let container = crtel("div")
        let add = `<a href="${r.link}" class="w3-bar-item w3-button w3-animate-left">${r.item}</a>`;
        container.innerHTML =add;
        navside_menu.append(container);        
    }      

eaclp(ns,act);
}



