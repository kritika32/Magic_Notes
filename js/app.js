
// console.log("Welcome to notes app. This is app.js");
showNotes();


// If we adds a note,  it will add  to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: addTitle.value,
    text: addTxt.value
  }
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
  //   console.log(notesObj);
  showNotes();
});

// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"style="color:black">${element.title}</h5>
                        <p class="card-text" style="color:black"> ${element.text}</p>
                        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">Delete Note</button>
                    </div>
                </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    notesElm.style.color = 'white';
    notesElm.style.fontSize = '25px';
  }
}
// Function to confirm 
// function confirmation(index) {
//   console.log(index);
//   let html = "";
//   let id = index;
//   html +=`<div class="modal" tabindex="-1">
//     <div class="modal-dialog">
//       <div class="modal-content">
//         <div class="modal-header">
//           <h5 class="modal-title">Confirm</h5>
//           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//         </div>
//         <div class="modal-body">
//           <p>Are you sure  ?</p>
//         </div>
//         <div class="modal-footer">
//           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Dismiss</button>
//           <button type="button" class="btn btn-primary" onlick="deleteNote(id)">Delete</button>
//         </div>
//       </div>
//     </div>
//   </div>`;

//   let conf = document.getElementById("confirm");
//   conf.innerHTML= html;


// }

var delete_id = "";

function confirmDelete(){
  index = delete_id;

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();

  document.getElementById('')
 
}


// Function to delete a note
function deleteNote(index) {
  delete_id = index;

  //   console.log("I am deleting", index);

  // $(document).ready(function() {
  //   $("#myModal").modal('show');
  // });

  // document.getElementById('myModal').show();
//   var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus();
// });

}




// let search = document.getElementById('text');
// let input = search.value;

function SEARCH() {
  console.log("clicked");
  let input = document.getElementById("text").value;
  console.log(input);
  let inputVal = input.toLowerCase();
  // console.log('Input event fired!', inputVal);
  let noteCards = document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("h5")[0].innerText;
  //  console.log(element.getElementsByTagName("h5")[0].innerText);
    cardtxt = cardTxt.toLowerCase();
    if (cardtxt.includes(inputVal)) {
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
    }
    // console.log(cardTxt);
  })

}


