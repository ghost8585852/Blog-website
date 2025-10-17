$(document).ready(function (){
    const passcontainer= [];


    const savedpass=localStorage.getItem("passData");
    if(savedpass){
        const parsedpass=JSON.parse(savedpass);
        parsedpass.forEach(content => {
            passcontainer.push(content);
            
        });
    }

    function passchecker(){
       var p1 =$(".int-email").val().trim();
       var p2 =$(".int-password-1").val().trim();
       var p3 =$("#reg-pass").val().trim();
       var string= p1+p2; 
       if(p1==="" || p2==="" ||p3===""){
              alert("please fill all the fields");
       }
         if(passcontainer.includes(string)){
           alert("This email and password already exists");
         }else{
            if(p2!==p3){
                alert("passwords do not match");
            }
            else{
                passcontainer.push(string);
                localStorage.setItem("passData",JSON.stringify(passcontainer));
                alert("Registration successful");
            }
         }
    }
    $(".submit-regform-btn").on("click",function(e){
        e.preventDefault(); //prevent from submitting the form.
        passchecker();
    });

    




});