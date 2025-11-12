//toggle adalah kelas aktif, kalo ada jadi ga ada, yang ga ada jd ada

const navbarNav = document.querySelector(".navbar-nav");

//ketika menu garis 3 diklik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk ngilangin navbar

const menuGaris3 = document.querySelector('#menu');

document.addEventListener('click', function(e){
    if(!menuGaris3.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});
