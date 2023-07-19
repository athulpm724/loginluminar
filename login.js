
function login(){
    id="-";
    pass="-";
    id=document.getElementById("id").value;
    pass=document.getElementById("pass").value;
    console.log(id,pass);
    if(id=="luminar" && pass=="1234")
    {
        alert("LOGIN SUCCESSFUL");
    }
    else
    {
        alert("try again");
    }
}