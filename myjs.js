function myRequest(){
    document.getElementById('form1').style.display="block";       
}

//Function to Hide Popup
function div_hide(){
    document.getElementById('form1').style.display = "none";  
} 
function div_hide1(){
    document.getElementById('content').style.display = "none";
}
/* content display */

function myContent(){
    document.getElementById('content').style.display="block";
    
}

/*---Searchbar--*/
function myFunction(){
    var input, filter, ul, i, li;
    input = document.getElementById('search').value;
    filter = input.toUpperCase();
    ul= document.getElementById('notify');
    li = ul.getElementsByTagName('li')

    for(i =0; i<li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(filter)>-1){
            li[i].style.display = "";
        }
        else{
            li[i].style.display = "none";
        }
    }

}
/*make new request form*/

const addUserRequests = () =>{
    let table = document.querySelector("tbody");
    let name = document.querySelector("#name1")
    let dep = document.querySelector("#dep1");
    let date = document.querySelector("#date");
    let req1 = document.querySelector("#req1");
    let des = document.querySelector("#des1");
    let status = document.querySelector('#status')

    //values
    name.innerHTML = document.querySelector('form#name').value;
    dep.innerHTML = document.querySelector('form#department').value;
    date.innerHTML = new Date();
    req1.innerHTML = document.querySelector('form#request_type').value;
    des.innerHTML = document.querySelector('form#description').value;
    
    row = document.createElement("tr");
    row.insertCell(date);
    row.insertCell(name);
    row.insertCell(dep);
    row.insertCell(req1);
    row.insertCell(des);
    row.insertCell(status);

    table.insertRow(row);
};





