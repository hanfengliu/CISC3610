const button = document.querySelector('#button');
const title = document.querySelector('#title');
const text = document.querySelector('#text');

const backToHomePage = document.querySelector('#return');

backToHomePage.addEventListener('click', (e)=>{
    window.location.replace("../index.html");
})

window.addEventListener('DOMContentLoaded', (event) => {
    const info = JSON.parse(localStorage.getItem("info"));
    if(info==null)
        clear();
    else{
        title.value=info.Title;
        text.value=info.Text;
    }
});

button.addEventListener('click', (e) =>{
    localStorage.removeItem('info');
    clear();
});

function clear(){
    title.value="";
    text.value="";
}

const store = () =>{
    localStorage.setItem("info",JSON.stringify({"Title":title.value, "Text":text.value}));
}

title.addEventListener('input', store);

text.addEventListener('input', store);



