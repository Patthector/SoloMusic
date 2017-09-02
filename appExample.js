const buttonEdit = document.getElementById("buttonModal");
console.log(buttonEdit.textContent);
buttonEdit.addEventListener('click',function(){
    $('#myModal').modal('show');
    console.log("can you hear me");
});

const buttonEditSaveChanges = document.getElementById("editingPL");
buttonEditSaveChanges.addEventListener('click',function(){
    console.log("im inside");
    let heading = document.getElementsByTagName('h1')[0];
    let input = document.querySelector("div.modal input");
    console.log(input.value);
    heading.textContent = input.value;
    $('#myModal').modal('hide');
});