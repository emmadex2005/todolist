
const input = document.querySelector('#input')
const button = document.querySelector('#button')
const list = document.querySelector('#list')
const del = document.querySelector('.button-btn')



button.addEventListener('click', function () {
    if (input.value === "") {
        alert('Input a task')
    } else {
         const correctInput = input.value.trim().toUpperCase(); 
    const Newlist = document.createElement('li')

    Newlist.append(correctInput);

    // Newlist.innerHTML = `
    //     ${taskText}
    //     <button class="delete-btn" onclick="deleteTask(this)">X</button>
    //   `;
    list.appendChild(Newlist);
    input.value = "";
    Newlist.innerHTML = `
    ${correctInput}
    <button class="delete-btn" onclick="deleteTask(this)">X</button>`
    }
    
   
})
Newlist.addEventListener('click', function () {
     li.classList.toggle("completed");
})

function deleteTask(button) {
      const Newlist = button.parentElement;
      Newlist.remove();
    }


