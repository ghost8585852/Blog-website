$(document).ready(function(){
    const savedpass = localStorage.getItem("passData");
    const passcontainer = savedpass ? JSON.parse(savedpass) : [];

    $(".submit-loginform-btn").on("click", function(e){
        var email = $(".int-m").val().trim();
        var password = $(".int-p").val().trim();
        var string =email+password;
        if(email === "" || password === ""){
            e.preventDefault(); // prevent form submission
            alert("please fill all the fields");
            return;
        }
        if(!passcontainer.includes(string)){
            e.preventDefault(); //prevent form submission
            alert("the email or password is incorrect");
            return;
        }else{
            alert("login successfull");
        }

    });

});