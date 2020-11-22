var button = document.getElementById('button');
button.addEventListener('click', searchjob); 
function searchjob() {
}


function goBack(){
    window.history.back();
}


function sendEmail(){
    var info = document.getElementById('contactInfo');
    info.style.display = "none";
    var sent = document.getElementById('contactSent');
    sent.style.display = "block";
}