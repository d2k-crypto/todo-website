
const todolist=[{name: 'Get 9 gpa in this semester', duedate: '01-01-2025'},{name :'learn javascript in one month',duedate: '02-02-2025'}];

rendertodolist();

function rendertodolist(){
    let todolistHTML='';
    for(let i=0;i<todolist.length;i++){
        const todoObject=todolist[i];
        const {name,duedate}=todoObject;

        const html=`
        <p>
        ${name} ${duedate}
        <button onclick="
            todolist.splice(${i},1);
            rendertodolist();
        ">
        Delete
        </button>
        </p>
        `;
        todolistHTML+=html;
    
    }
    
    
    document.querySelector(".todo-list")
    .innerHTML=todolistHTML;    
}

function addtodolist(){
    const inputElement=document.querySelector(".js-value");
    
    const name=inputElement.value;

    const dateinputelement=document.querySelector(".js-duedate");

    const duedate=dateinputelement.value;

    todolist.push({name,duedate});
    

    inputElement.value='';

    rendertodolist();
}


