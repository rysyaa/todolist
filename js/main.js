
let form = document.querySelector('form');
let inpTask = document.querySelector('form input');
let list = document.querySelector('ul');

// ? create
function createTask(){
    if(localStorage.getItem('tasks-data') === null){
        localStorage.setItem('tasks-data', '[]');
    }

    let data = JSON.parse(localStorage.getItem('tasks-data'))
    console.log(data);
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    let obj = {
        task: inpTask.value
    };

    let data = JSON.parse(localStorage.getItem('tasks-data'));

    data.push(obj);
    localStorage.setItem('tasks-data',JSON.stringify(data));

    createTask();
});
