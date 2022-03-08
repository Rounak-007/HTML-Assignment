//1.create a div & add to webpage
let div=document.createElement('div');
div.classList.add('student-list');
let container1div=document.querySelector(".container1");
container1div.appendChild(div);

//2.add event listener
let submitbtn=document.getElementById("mybutton");
submitbtn.addEventListener('click',displayStudentDetails);

//3.create the display function
function displayStudentDetails()
{
    var name=document.getElementById("mytext").value;
    console.log(name);
    let email=document.getElementById("mytext2").value;
    //let website=document.getElementById("mytext1").value;
    let gender=document.querySelector('input[name="gender"]:checked').value;
    console.log(gender);
    var imageLink=document.getElementById("image").value;
    console.log(imageLink);
    let html=`<div class="card">
                    <div class="student-details">
                        <div class="row">
                            <div class="col-8">
                                <div class="std-name">${name}</div>
                                <div class="std-email">${email}</div>
                                
                                <div class="std-email">${gender}</div>
                            </div>
                            <div class="vertical1"></div>
                            <div class="col-2">
                                <img src=${imageLink}; height="70" width="70">
                            </div>
                        </div>
                    </div>
                </div>`;
    div.insertAdjacentHTML("beforeend",html);

}