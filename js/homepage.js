/*------- search button ----------- */

searchform = document.querySelector('.search-form');

/*---- swiper  -------*/
document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".books-list", {
        loop:true,
        centeredSlides:true,
        autoplay:{
            delay:9500,
            disableOnInteraction:false,
        },
        breakpoints: {
            0: {
                slidesPerView:1,
            },
            768: {
                slidesPerView:2,
            },
            1024: {
                slidesPerView:3,
            },
        },
    });
});

/*---- featured section  -------*/

var swiper = new Swiper(".featured-slider", {

    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
      delay:9500,
      disableOnInteraction:false,
    },
   navigation:{
          nextEl:".swiper-button-next",
          prevEl:".swiper-button-prev",
      },
    breakpoints: {
      0: {
        slidesPerView:1,
      },
      450: {
        slidesPerView:2,
      },
      768: {
        slidesPerView:3,
      },
      1024: {
        slidesPerView:4,
      },
    },
});
  
/*-------- window scroll ----*/

window.onscroll = () =>{
  
    searchform.classList.remove('active');
  
    if (window.scrollY > 0){
      document.querySelector('.header .header_two').classList.add('active');
  
    }else{
      document.querySelector('.header .header_two').classList.remove('active');
    }
}
  
window.onload = () => { 
  
    if (window.scrollY > 80){
      document.querySelector('.header .header_two').classList.add('active');
  
    }else{
      document.querySelector('.header .header_two').classList.remove('active');
    }
}

 /*-------- arrivals section start ---------- */

 var swiper = new Swiper('.arrivals-slider', {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
      delay:9500,
      disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView:1,
      },
      768: {
        slidesPerView:2,
      },
      1024: {
        slidesPerView:3,
      },
    },
  });

const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
})

// API
document.addEventListener("DOMContentLoaded", function () {
    const APIKEY = "65c340c1c384b9cc1382e950";
    
    // Login Button
    var loginBtn = document.getElementById('contact-submit');
    if (loginBtn) {
        loginBtn.addEventListener('click', function (e) {
            // Code to be executed when the button is clicked
            e.preventDefault();
            console.log('Button clicked!');

            //Retrieve form data
            let contactEmail = document.getElementById("contact-email").value;
            let contactText = document.getElementById("contact-text").value;

            //Get form value
            let jsondata = {
                "email": contactEmail,
                "text": contactText,
            };

            let settings = {
                method: "GET", 
                headers: {
                "Content-Type": "application/json",
                "x-apikey": APIKEY,
                "Cache-Control": "no-cache"
                },
            }
            
            fetch("https://books4school-5420.restdb.io/rest/contact", settings)
            .then(response => response.json())
            .then(response => {
                console.log('response');

                const matchingUser = response.find(user => user.email === contactEmail && user.password === contactText);

                if (matchingUser) {
                    console.log('Login successful');
                    // Display a successful message to the user
                    window.location.href = "FED_Books4School_website.html";
                    // Open the intended file if credentials are right
                } else {
                    console.log('Invalid email or password');
                    alert('Invalid Email or Password');
                    // Display an error message to the user
                }
            })
        })
    }
    
    // Signup Button
    var signUpBtn = document.getElementById('signup-submit');
    if (signUpBtn) {
        signUpBtn.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Button clicked!');

            // Retrieve form data
            let signupName = document.getElementById("signup-name").value;
            let signupEmail = document.getElementById("signup-email").value;
            let signupPassword = document.getElementById("signup-password").value;

            // Prepare JSON data for the API call
            let jsondata = {
                "name": signupName,
                "email": signupEmail,
                "password": signupPassword
            };

            // Define settings for fetch call
            let settings = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-apikey": APIKEY,
                    "Cache-Control": "no-cache"
                },
                body: JSON.stringify(jsondata),
            };

            // Make the API call to signup
            fetch("https://books4school-5420.restdb.io/rest/contact", settings)
                .then(response => {
                    if (!response.ok) throw new Error('Network response was not ok');
                    return response.json();
                })
                .then(response => {
                    console.log('Signup successful', response);
                    alert('Thank you for signing up!');
                    window.location.href = "FED_Books4School_website.html";
                })
                .catch(error => {
                    console.error('Signup error:', error);
                    alert('Signup error: ' + error.message);
                });
        });
    }
});