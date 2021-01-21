function login() {
    let uname = document.getElementById("defaultForm-email");
    let pass = document.getElementById("defaultForm-pass");

    console.log("Username : " + uname.value);
    console.log("Password : " + pass.value);
    if (uname.value == "admin" && pass.value == "123"){
        alert("Selamat Datang!")
    }else{
        alert("Usernam atau Password salah!")
    }
}