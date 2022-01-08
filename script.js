var spouse_name = document.getElementById("spouse-name");
var checkbox_child = document.getElementById("check_for_child");
var children = document.getElementById("children");
var child_list = document.getElementById("child-list");
var dakheli = document.getElementById("dakheli");
function btn_sabtnam(){
    dakheli.style.display = "block";
    checkbox_child.style.display = "none";
}
function married(){
    spouse_name.style.display = "block";
    
    checkbox_child.style.display = "block";
}
function single(){
    spouse_name.style.display = "none";
    checkbox_child.style.display = "none";
}
function child(){
    if(document.getElementById('checkbox-child').checked == true){
        children.style.display = "block";
    }
    else{
        children.style.display = "none";
    }
}
function add_child(){
    var input=document.createElement("INPUT");
    input.type='text';
    input.style.width="100%";
    input.style.height="25px";
    input.style.paddingRight ="0px";
    child_list.appendChild(input);
}
function delete_child(){
    child_list.removeChild(child_list.childNodes[0]);

}
function darkMode(){
    if(document.getElementById('dark-mode').checked == true){
        mybody.style.backgroundColor = "#222831"
        sabtenam.style.backgroundColor = "#FD7014"
        dakheli.style.backgroundColor = "#393E46"
        submit.style.backgroundColor = "#FD7014"
    }
    else{
        mybody.style.backgroundColor = "lightgreen"
        sabtenam.style.backgroundColor = "rgb(64, 172, 64)"
        dakheli.style.backgroundColor = "rgb(19, 226, 19)"
        submit.style.backgroundColor = "rgb(64, 172, 64)"
    }
}