import typer from "./typer.js"

const inputBox = document.getElementById("mainI")
const body = document.querySelector("body")
let Rarr = [];
let hArr = [];
inputBox.addEventListener('keypress',function(e){
    
    if(e.key == 'Enter'){
    while(Rarr.length){Rarr.pop()}
    while(hArr.length){hArr.pop()}
    let text = inputBox.value.toLowerCase();
    if(text == "hello"){
        resp('Hello there!',text)
        body.dispatchEvent(new Event('Type'))
    }else if(text == 'resume'){
        resp('Redirecting to Resume...',text)
        body.dispatchEvent(new Event('Type'))

    }else if(text === 'github'){
        resp('Redirecting to Github...',text)
        body.dispatchEvent(new Event('Type'))
    }
    else if(text == 'help' || text == 'commands' || text == 'man'){
        resp('Commands: help, resume, email, hello, github ',text)
        body.dispatchEvent(new Event('Type'))

    }
    else if(text =='email'){
        resp('Please email me at : n.santos2619@gmail.com',text)
        body.dispatchEvent(new Event('Type'))

    }
    else{
        resp("Command Not Found: try 'help' for commands",text)
        body.dispatchEvent(new Event('Type'))
    }
    }

})

function resp(send,rec){
        hArr.push(">>: ")
        hArr.push(rec);
        let lArray = send.split('');
        Rarr.push(":<< ")
        lArray.forEach(l => Rarr.push(l));
        inputBox.value = ""
}



typer('#rArea').listen('Type').run(() =>{
    inputBox.hidden = true;
}).line().line(hArr,30).line(Rarr,30).run(() =>{
    inputBox.hidden = false;
    if(Rarr.join("") == ':<< Redirecting to Resume...'){
        window.open("https://docs.google.com/document/d/1y6xtr-AD9hRW-wfHuB_SMFWoIWG-EuFdPBvJkF4zlmM/edit?usp=sharing")
    }if(Rarr.join("") == ':<< Redirecting to Github...'){
        window.open("https://github.com/nsantos19");
    }
    inputBox.focus();
}).cursor(false).repeat(Infinity);

typer('#welcome').line(':<< SANTOS COMMUNCATIONS TERMINAL',{military:.3}).cursor(false);
typer('#welcome2').line(":<< Type 'help' for commands ",{military:2}).cursor(false);

inputBox.focus();
// //kill typer
//make a new one
// //.run(()=>{
//     let p = document.createElement("p");
//     p.innerHTML = arr.toString();
//     History.appendChild(p)
// }).