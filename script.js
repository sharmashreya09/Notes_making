/*console.log("hello")
window.onload=function()
{
    //let val=this.document.getElementById('addarea')
    let button=this.document.getElementById('adbtn')
    let cont=this.document.getElementById('content')
    let empty=this.document.getElementById('empty')
    let i=0;
    /*val.onclick=function()
    {
        let str=String(val.value)
        if(str.length>0)
        {
           empty.remove()
           let elem=document.createElement('div')
           elem.classList.add("mainbox")
           let hd=document.createElement('div')
           hd.classList.add("hding")
           i=i+1;
           hd.innerText=('Note' +i)
           elem.appendChild(hd)
           let txt=document.createElement('div')
           txt.classList.add("txt")
           txt.innerText=str
           elem.appendChild(txt)
           let del=document.createElement('button')
           del.classList.add("remove")
           del.innerText=('Remove Note')
           elem.appendChild(del)
           cont.appendChild(elem)


        }
    }*/

    
    /*let hding=document.createElement('div')
    hding.className="hding"
    i=i+1;
    /*hding.innerText="Note" 
    ele.appendChild('hding')
    let text=document.createElement("div")
    text.className="text"
    let str=val.value
    text.innerText=str
    ele.appendChild('text')
    let del=document.createElement("button")
    del.className="del"
    del.innerText="Remove"
    ele.appendChild('del')
    cont.appendChild('ele')*/


/*btn.addEventListener('click',function func(e){

    //let str=val.value;
    let ele=document.createElement('div')
    ele.className="';mynote"
    /*let heading=document.createElement('div')
    heading.className=('heading')
    i=i+1;
    heading.innerText=('Note' + i)
    ele.appendChild(heading)
    let text=document.createElement('div')
    text.className="text";
    text.innerText=str
    ele.appendChild(text)
    let del=document.createElement('button')
    del.className="del"
    del.innerText="Remove"
    ele.appendChild(del)
})*/
/*val.addEventListener('input',function handleChange(event){

    let str=String(event.target.value)
    if(str.length===0 && btn.addEventListener('click', function func(e)))
    {
        alert(" Write a note first")
    }
    
});*/
showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
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
  notesObj.forEach(function(element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

// Function to delete a note
function deleteNote(index) {
//   console.log("I am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})
