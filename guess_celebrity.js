//global var score 
const points = document.createElement("p");
points.innerText = "0";
points.id = "points";
let nameVal=0;
let i;
//best overall score 
const b_points = document.createElement("p");
b_points.innerText = "0";
b_points.id = "b_points";

//best persons score so far 
//let name_curr = 0;
const name_points = document.createElement("p");
name_points.innerText = "0";
name_points.id = "name_points";

//all the scores
const all_scores = document.createElement("div");
all_scores.id = "all_scores";

let pic = 0;
let bal = 0;
//let best = 0;
let s = new Array();
let ind;
//page1 tag
const page1 = document.createElement("div");
page1.id = "page1"; 
const header1 = document.createElement("H1"); 
const header1_text = document.createTextNode("Welcome to the Guess Celebrity Game The Office Edition!");
header1.appendChild(header1_text);
page1.appendChild(header1);
//name form
const name_form = document.createElement("div");
name_form.setAttribute("id","name_form");
const form = document.createElement("FORM");
form.setAttribute("id", "myForm");
form.setAttribute("value", "Name:");
const input = document.createElement("INPUT");
input.setAttribute("type", "text");
input.setAttribute("value", "Name");
input.setAttribute("id", "name");

form.appendChild(input);
form.setAttribute("onsubmit","myForm()");
const label = document.createElement("LABEL");
label.setAttribute("for", "fname");
label.setAttribute("value", "Name:");
form.appendChild(label);
const button = document.createElement("INPUT");
button.id = "myBtn";
button.setAttribute("type", "button");
button.setAttribute("value", "Submit");

//button.setAttribute("onClick", "myForm()");

form.appendChild(button);
name_form.appendChild(form);


function myForm(){
    ind = 0;
    let inputName= document.getElementById("name");
    nameVal = inputName.value;
    const letters = /^[0-9a-zA-Z]+$/;
    if (nameVal.match(letters)){
        bal = 0;
        localStorage.setItem("name", nameVal);
        body.removeChild(page1);
        score.innerText = `${localStorage.getItem("name")}'s score: `;
        name_score.innerText = `${localStorage.getItem("name")}'s best score: `;
        b_score.innerText = "Overall best score: ";
        //document.getElementById("points").innerText = ${localStorage.getItem("best_score")};
        page2.appendChild(photo);
        page2.appendChild(options);
        page2.appendChild(button2);     
        body.appendChild(page2);
        document.getElementById("button2").addEventListener("click", checkAnswer);
        document.getElementById("points").innerText = bal;
        document.getElementById("b_points").innerText = localStorage.getItem("best_score");
        if(localStorage.getItem(nameVal)==null){
            document.getElementById("name_points").innerText="0";
        }
        else{
            document.getElementById("name_points").innerText = localStorage.getItem(nameVal);
        }
        s = new Array();
        chooseChar();
    }
    else{
        window.alert("Please make sure your name uses alphanumeric characters.");
    }
    
}

//append to body
const body = document.getElementById("body");




//page 2 
//let curr_score = 0
const page2 = document.createElement("div");
page2.id = "page2"; 

const score = document.createElement("p");
const name_score = document.createElement("p");
const b_score = document.createElement("p");
score.id = "score";


all_scores.appendChild(score);

all_scores.appendChild(points);
all_scores.appendChild(b_score);
all_scores.appendChild(b_points);
all_scores.appendChild(name_score);
all_scores.appendChild(name_points);

page2.appendChild(all_scores);


//The game itself


//Options form 
const options = document.createElement("FORM");
const div1 = document.createElement("div");
options.id = "options";
const option_1 = document.createElement("INPUT");
option_1.id = "option_1";
option_1.setAttribute("type","radio");
//option_1.setAttribute("value","1");
option_1.setAttribute("name","group");

const option_1_label = document.createElement("LABEL");
const br = document.createElement("BR");





div1.appendChild(option_1);
div1.appendChild(option_1_label);
div1.appendChild(br);
options.appendChild(div1);
options.appendChild(option_1);
//option_1_label.id="option_1_label";

//option_1_label.innerHTML="option_1_label";
//document.getElementById("option_1_label").innerHTML = "AAAAAAAA";

//option_1.appendChild(br);
const option_2 = document.createElement("INPUT");
option_2.id = "option_2";
option_2.setAttribute("type","radio");
//option_2.setAttribute("value","2");
option_2.setAttribute("name","group");

//option_2.appendChild(br);
const div2 = document.createElement("div");
const option_2_label = document.createElement("LABEL");
const br_2 = document.createElement("BR");
div2.appendChild(option_2);
div2.appendChild(option_2_label);
div2.appendChild(br_2);
options.appendChild(div2);
options.appendChild(option_2);

const option_3 = document.createElement("INPUT");
option_3.setAttribute("type","radio");
option_3.setAttribute("name","group");
//option_3.setAttribute("value","3");
option_3.id = "option_3";
const div3 = document.createElement("div");
const option_3_label = document.createElement("LABEL");
const br_3 = document.createElement("BR");
div3.appendChild(option_3);
div3.appendChild(option_3_label);
div3.appendChild(br_3);
options.appendChild(div3);
options.appendChild(option_3);
const option_4 = document.createElement("INPUT");
option_4.setAttribute("type","radio");
//option_4.setAttribute("value","4");
option_4.setAttribute("name","group");

option_4.id = "option_4";
const div4 = document.createElement("div");
const option_4_label = document.createElement("LABEL");
const br_4 = document.createElement("BR");
div4.appendChild(option_4);
div4.appendChild(option_4_label);
div4.appendChild(br_4);
options.appendChild(div4);
options.appendChild(option_4);
//document.getElementById("option_1").ilabel = "Hello";
//options.appendChild(option_2);
//options.appendChild(option_3);
options.appendChild(option_4);
const names = new Array("Michael Scott","Pam Beesly","Angela Martin","Dwight Schrutte","Jim Halpert","Meredith Palmer","Ryan Howard","Stanley Hudson","Toby Flenderson","Creed Bratton");
//const names = new Array("Michael Scott","Pam Beesly","Angela Martin","Dwight Schrutte","Jim Halpert","Meredith Palmer","Ryan Howard","Stanley Hudson","Toby Flenderson","Creed Bratton","David Wallace","Karen Fillippelli","Jo Bennett","Danny Cordray","Jan Levinson","Roy Anderson","Kevin Malone","Oscar Martinez","Phyllis Lapin","Kelly Kapoor","Gabe Lewis","Darryl Philbin","Erin Hannon","Holly Flax","Pete Miller","Clark Green","Andy Bernard");
//creates the options for the names

let option_1_text = document.createTextNode("Value1");
option_1.setAttribute("value","value1");
option_1_label.appendChild(option_1_text);
let option_2_text = document.createTextNode("Value2");
option_2.setAttribute("value","value2");
option_2_label.appendChild(option_2_text);
let option_3_text = document.createTextNode("Value3");
option_3.setAttribute("value","value3");
option_3_label.appendChild(option_3_text);
let option_4_text = document.createTextNode("Value4");
option_4.setAttribute("value","value4");
option_4_label.appendChild(option_4_text);
function chooseOption(){
    
    let nameOpt = new Array();
   //nameOpt[0] = names[pic];
    let index = 0;
    let right =  Math.floor(Math.random() * 4);
    
    while(nameOpt.length!=4){
        let random = Math.floor(Math.random() * names.length);
        if(index==right){
            index++;
            nameOpt[right] = names[pic];
        }
        
        
        else{
            if(random!=pic&&!nameOpt.includes(names[random])){
                nameOpt[index] = names[random];
                index++;
            }
    }

    }

    option_1_text.nodeValue = nameOpt[0];
    option_1.setAttribute("value",nameOpt[0]);
    option_2_text.nodeValue = nameOpt[1];
    option_2.setAttribute("value",nameOpt[1]);
    option_3_text.nodeValue = nameOpt[2];
    option_3.setAttribute("value",nameOpt[2]);
    option_4_text.nodeValue = nameOpt[3];
    option_4.setAttribute("value",nameOpt[3]);
    
    
}






//Photo part 

const photo = document.createElement("div");
const img = new Image();
img.id="img";
img.setAttribute("width", "300");
img.setAttribute("height", "350");
const pics = new Array("michael.png","pam.jpg","angela.jpg","dwight.jpg","jim.png","meredith.jpg","ryan.png","stanley.jpg","toby.jpg","creed.jpg");
function chooseChar(){
    let random = Math.floor(Math.random() * pics.length);
    let size = s.length;
    while(s.length!=size+1){
         random = Math.floor(Math.random() * pics.length);
         if(!s.includes(random)){
            s[ind]=random;
            ind++;
         }
    }
    
    document.getElementById("img").src = pics[random];
    pic = random;
    chooseOption();
}

//Submit answer part 
const button2 = document.createElement("INPUT");
button2.id = "button2";
button2.setAttribute("type", "button");

button2.setAttribute("value", "Submit");

//check the answer 
function checkAnswer(){
    //option_1_label.removeChild(option_1_text);
    let inputVal;
    let answers = document.getElementsByName('group'); 
        for(i = 0; i < answers.length; i++) { 
            if(answers[i].checked){
                inputVal = answers[i].value; 
            }
        } 
    if(inputVal==names[pic]){
        bal+=1;
        if(bal>localStorage.getItem(nameVal)){
            localStorage.setItem(nameVal, bal);
        }
        document.getElementById("points").innerText = bal;
        document.getElementById("name_points").innerText = localStorage.getItem(nameVal);
        if(localStorage.getItem("best_score")<bal){
            localStorage.setItem("best_score", bal);
        }
        if(localStorage.getItem(nameVal)<bal){
            localStorage.setItem(nameVal, bal);
        }
        document.getElementById("b_points").innerText = localStorage.getItem("best_score");
    }
    if(s.length!=10){
        chooseChar();
    }
    else{
        if(localStorage.getItem("best_score")<bal){
            localStorage.setItem("best_score", bal);
        }
        if(localStorage.getItem(nameVal)<bal){
            localStorage.setItem(nameVal, bal);
        }
        page2.removeChild(photo);
        page2.removeChild(options);
        page2.removeChild(button2);
        page2.appendChild(button3);
        document.getElementById("button3").addEventListener("click", retry);
    }
}
//page 3
const button3 = document.createElement("INPUT");
button3.id = "button3";
button3.setAttribute("type", "button");

button3.setAttribute("value", "Retry");


function retry(){
    //body.removeChild(page3);
    body.removeChild(page2);
    body.appendChild(page1);
    page2.removeChild(button3);
}
photo.appendChild(img);

body.appendChild(page1);

page1.appendChild(name_form);

document.getElementById("myBtn").addEventListener("click", myForm);
