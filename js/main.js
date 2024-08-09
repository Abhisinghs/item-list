// var form = document.getElementById('addForm');
// var itemList = document.getElementById('items');
// var filter = document.getElementById('filter');

// // Form submit event
// form.addEventListener('submit', addItem);
// // Delete event
// itemList.addEventListener('click', removeItem);
// // Filter event
// filter.addEventListener('keyup', filterItems);

// // Add item
// function addItem(e){
//   e.preventDefault();

//   // Get input value
//   var newItem = document.getElementById('item').value;

//   // Create new li element
//   var li = document.createElement('li');
//   // Add class
//   li.className = 'text-xs flex justify-between items-center  border-gray-300 border-b bg-white px-4 py-2';
//   // Add text node with input value
//   li.appendChild(document.createTextNode(newItem));

//   // Create del button element
//   var deleteBtn = document.createElement('button');

//   // Add classes to del button
//   deleteBtn.className = 'bg-red-600 text-white text-xs rounded p-1 delete';

//   // Append text node
//   deleteBtn.appendChild(document.createTextNode('X'));

//   // Append button to li
//   li.appendChild(deleteBtn);

//   // Append li to list
//   itemList.appendChild(li);

//   //remove the target value
//   let inputs = document.querySelectorAll('input[type="text"]');
//   inputs[1].value = "";
  
// }

// // Remove item
// function removeItem(e){
//   if(e.target.classList.contains('delete')){
//     if(confirm('Are You Sure?')){
//       var li = e.target.parentElement;
//       itemList.removeChild(li);
//     }
//   }
// }

// // Filter Items
// function filterItems(e){
//   // convert text to lowercase
//   var text = e.target.value.toLowerCase();
//   // Get lis
//   var items = itemList.getElementsByTagName('li');
//   // Convert to an array
//   Array.from(items).forEach(function(item){
//     var itemName = item.firstChild.textContent;
//     if(itemName.toLowerCase().indexOf(text) != -1){
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// }


//this will do same thing but in a different way
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter')

//form submit event 
form.addEventListener('submit',addItem);
//delete event
itemList.addEventListener('click',removeItem);
//filter event 
filter.addEventListener('keyup',filterList);

//add item 
function addItem(e){

    //prevent default
    e.preventDefault();

    //get the content from input value
    let newContent = document.getElementById('item').value;

    //create a list item 
    let item = document.createElement('li');

    //append the class name 
    item.classList = "text-xs flex justify-between items-center  border-gray-300 border-b bg-white px-4 py-2";

    //append text to list item
    item.innerText = newContent;
    
    //create a delete button 
    let btn = document.createElement('button');

    //add class to btn 
    btn.classList = "bg-red-600 text-white  text-xs rounded p-1 delete"

    //add text 
    btn.innerText = "X";
    
    //append button to list item 
    item.appendChild(btn);

    //append item to the list-group 
    itemList.appendChild(item);

    //clear the input value
    let input = document.getElementById('item');
    input.value = "";
}

//remove list item 
function removeItem(e){

    //check the class name 
    if(e.target.classList.contains('delete')){
        //get the parent list
        let list = e.target.parentElement;
        if(confirm("Are you sure")){
            // removeChild form list-group 
            itemList.removeChild(list);
        }
    }
}


function filterList(e){
    
    //text 
    let text = e.target.value.toLowerCase();

    //get Lists 
    let items = itemList.getElementsByTagName('li');

    //convert an array 
    Array.from(items).forEach((item)=>{
        let listText = item.textContent;
        
        if(listText.toLowerCase().includes(text)){
            item.style.display="block"
        }else{
            item.style.display = "none"
        }
    })
}



