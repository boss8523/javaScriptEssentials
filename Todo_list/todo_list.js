

let btn= document.getElementById("add_task")
 let taskList=document.getElementById("task_list")
 let list_array=[]
 let listTask_display=[]
 function addTask(){
    let task = document.getElementById("input_task").value
    console.log(task)
    list_array.push(task)
    let result=`
          <label class="task">
        <div class="checkbox">
          <input type="checkbox" aria-label="Mark done" />
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>

        <div class="content">
          <div class="title">${task}</div>
          <div class="meta">Due today • <span class="tag">Work</span></div>
        </div>

        <div class="actions" aria-hidden="true">
          <button class="icon-btn" title="Edit">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 21l3-1 11-11a2.8 2.8 0 0 0 0-4L15 2a2.8 2.8 0 0 0-4 0L1 12v8z" stroke="rgba(230,238,248,0.6)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <button class="icon-btn" title="Delete" id="task">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 6h18" stroke="rgba(230,238,248,0.6)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 6v14a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6" stroke="rgba(230,238,248,0.6)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </label>
    
    `
    listTask_display.push(result)
    
    
    list_display()
}

function list_display(){
    let result=listTask_display.join(" ")
     taskList.innerHTML=result
}
btn.addEventListener("click",()=>{addTask()})