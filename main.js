//general Variables
let gValue = "none"
let mValue = "0"
let aValue =  "0"
let sValue = ""
let gen = document.querySelector(".generate");
let result = document.querySelector(".result");
let output = "";
let body = document.querySelector("body")


//Generation
gen.addEventListener("click", () => {
    if (aValue == "0") {
        output = chance.name();
        result.innerHTML = output;
    }
    else{
        if (mValue == "0") {
            if(gValue != "none"){
                if (sValue != "") {
                    output = chance.first({ gender: gValue })
                    result.innerHTML = output + " " + sValue;
                }
                else{
                    output = chance.name({ gender: gValue })
                result.innerHTML = output
                }
            }
            if (sValue != "") {
                output = chance.first()
                result.innerHTML = output + " " + sValue;
            }   
        }
        else{
            if(gValue != "none"){
                if (sValue != "") {
                    output = chance.name({ gender: gValue })
                    result.innerHTML = output + " " + sValue;
                }
                else{
                    output = chance.name({ gender: gValue,middle: true })
                    result.innerHTML = output
                }
            }
            output = chance.name({ middle: true })
            result.innerHTML = output
            if (sValue != "") {
                output = chance.name()
                result.innerHTML = output + " " + sValue;
            }
        }
    }
  });

//second Name
let sName = document.querySelector("#secondName")
sName.addEventListener("input",()=>{
    sValue = sName.value;
})
//DropDown Section
let dset = 0;
dropDown = document.querySelector("#dropdown");
dropMenu = document.querySelector(".dropmenu");
//opening dropdown
dropDown.addEventListener("click", () => {
  if (dset == 0) {
    dropMenu.style.display = "flex";
    dset = 1;
  } else {
    dropMenu.style.display = "none";
    dset = 0;
  }
});
//choosing option
gender = document.querySelector("#gender");
male = document.querySelector("#male");
female = document.querySelector("#female");
nb = document.querySelector("#nb");
male.addEventListener("click", () => {
  gender.innerHTML = "Male";
  dropMenu.style.display = "none";
  dset = 0;
  gValue = "Male"
});
female.addEventListener("click", () => {
  gender.innerHTML = "Female";
  dropMenu.style.display = "none";
  dset = 0;
  gValue = "Female"
});
nb.addEventListener("click", () => {
  gender.innerHTML = "Non-Binary";
  dropMenu.style.display = "none";
  dset = 0;
  gValue = "Female"
});
//This section is the menu bar section
menuBar = document.querySelector(".menu_bar");
backButton = document.querySelector("#ib");
menuButton = document.querySelector("#open");

menuButton.addEventListener("click", () => {
  menuBar.style.display = "block";
});

backButton.addEventListener("click", () => {
  menuBar.style.display = "none";
});

//This section is for middle name clicker box
let set = 0;
clicker = document.querySelector(".clicker");
clicker.addEventListener("click", () => {
  if (set == 0) {
    clicker.style.background = "#30ec0e";
    set = 1;
    mValue = "1"
  } else {
    clicker.style.background = "var(--05, #fcfdfe)";
    set = 0;
    mValue = "0"
  }
});
//The Advanced function turn on
features = document.querySelector(".features");

//This section is the checkbox section

let advanced = document.querySelector("#advanced");
let darkmode = document.querySelector("#darkmode");
let checkA = "OFF"; //darkmode
let checkB = "OFF"; //Advanced Features
let src = "";

//function to activate and deactive the checkbox  num = 1 darkmode and num = 2 Advanced features
function activate(num) {
  if (num == 1) {
    let image = document.querySelector("#dm");
    if (checkA == "OFF") {
      src = "./Assets/On.svg";
      checkA = "ON";
      body.style.background = "#bccfe1"
    } else {
      src = "./Assets/Off.svg";
      checkA = "OFF";
      body.style.background = "#fcfdfe"
    }
    image.setAttribute("src", src);
  }
  if (num == 2) {
    let image = document.querySelector("#af");
    if (checkB == "OFF") {
      src = "./Assets/On.svg";
      checkB = "ON";
      menuBar.style.height = "120%"; //Adjust the menubar height to scroll
      features.style.display = "block"; //activating Advanced features
      gen.style.marginTop = "0.8rem";
      aValue = "1"
    } else {
      src = "./Assets/Off.svg";
      checkB = "OFF";
      menuBar.style.height = "100%"; //Adjust the menubar height to scroll
      features.style.display = "none"; //Deactivating Advanced Features
      aValue = "0"
    }
    image.setAttribute("src", src);
  }
}
darkmode.addEventListener("click", () => {
  activate(1);
});
advanced.addEventListener("click", () => {
  activate(2);
});
