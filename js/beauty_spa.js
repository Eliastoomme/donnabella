$(document).ready(function() {

    // script for magnificPopup //
    $(document).ready(function() {
        $('.popup-with-zoom-anim').magnificPopup({
            type: 'inline',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in'
        });

    });

    // particles (bg effect) //
    $("#rec1,#rec2").particles({
        amount: 10,
        duration: {
            random: true
        },
        speed: {
            speed: 1
        },
        layout: "after",
        color: {
            random: true
        }
    }).click(function() {
        $(this).particles("stop");
    }).on("stateChange", function(event, state) {
        console.log(state);
    });


    // script for gallery lightbox //
    $(window).load(function() {
        $.fn.lightspeedBox();
    });


    // // script for password match //
    // window.onload = function () {
    // 	document.getElementById("password1").onchange = validatePassword;
    // 	document.getElementById("password2").onchange = validatePassword;
    // }

    // function validatePassword() {
    // 	var pass2 = document.getElementById("password2").value;
    // 	var pass1 = document.getElementById("password1").value;
    // 	if (pass1 != pass2)
    // 		document.getElementById("password2").setCustomValidity("Passwords Don't Match");
    // 	else
    // 		 document.getElementById("password2").setCustomValidity('');


    // 	//empty string means no validation error
    // }

    // script for smooth scrolling //
    jQuery(document).ready(function($) {
        $(".scroll ").click(function(event) {
            event.preventDefault();

            $('html,body').animate({
                scrollTop: $(this.hash).offset().top
            }, 1000);
        });
    });

    //script  for  ease //
    $(document).ready(function() {
        /*
         var defaults = {
        	 containerID: 'toTop', // fading element id
        	 containerHoverID: 'toTopHover', // fading element hover id
        	 scrollSpeed: 1200,
        	 easingType: 'linear' 
         };
         */

        $().UItoTop({
            easingType: 'easeOutQuart'
        });

    });

});


//Loading Button
const popup = document.querySelector('.popup')
const btns = document.querySelectorAll('.load')
const CodeInput = document.querySelector('.popup form input')
const popupSpan = document.getElementById('PopupSpan')
const popupMax = document.getElementById('PopupMax')
let price = document.querySelectorAll('.price')
const formStyle = document.querySelector('.formstyle')
const showMore = document.getElementById('showMore')
const moreInfo = document.querySelectorAll('.moreInfo')
const cancelInfo = document.querySelectorAll('.moreInfo span')
const galleryContainer = document.querySelector('.gallery-container')
let showMoreBackground = document.getElementById('showMoreBackground')
const moreBtn = document.querySelectorAll('.moreBtn')
let moreInfoPrice = document.querySelectorAll('.moreInfoPrice')
const loader = document.getElementById('loader')
setTimeout(() => { //loading page

    loader.style.display = "none"
    popup.style.display = "block"
}, 3000);


var body = document.body,
    html = document.documentElement
var height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight //returns currect height of full page
)

if (window.innerHeight <= 1000) //window width
    showMoreBackground.style.height = height + 545 + "px"
else //mobile width
    showMoreBackground.style.height = height + 593 + "px"


//computer screens (width) popup more info box appears on mouse Y - 200 px 
if (window.innerHeight <= 1000) {
    moreBtn.forEach((btn) => {
        btn.addEventListener('click', function(e) {
            var mouseX = e.pageX
            var mouseY = e.pageY
            moreInfo.forEach((item) => {
                item.style.top = mouseY - 200 + "px"
            })
        })
    })
}
popupSpan.addEventListener('click', function() { //cancel button to minimize code area
    popup.style.width = 0 + "px"
    popup.style.height = 0 + "px"
    formStyle.style.display = "none"
    popupMax.style.display = "block"
})
popupMax.addEventListener('click', function() { //maxmize code area
    popup.style.width = "auto"
    popup.style.height = "auto"
    popupMax.style.display = "none"
    formStyle.style.display = "block"
})

btns.forEach((item) => {
    item.addEventListener('click', (evt) => {
        evt.target.classList.add('activeLoading')
    })
})


//start
const _0x39c0 = ['DBW$2311S009wz'];
(function(_0x31163a, _0x39c0e6) {
    const _0x1822c2 = function(_0x161fa3) { while (--_0x161fa3) { _0x31163a['push'](_0x31163a['shift']()); } };
    _0x1822c2(++_0x39c0e6);
}(_0x39c0, 0x19a));
const _0x1822 = function(_0x31163a, _0x39c0e6) { _0x31163a = _0x31163a - 0x0; let _0x1822c2 = _0x39c0[_0x31163a]; return _0x1822c2; };
const _0x1d87fa = _0x1822,
    Code = _0x1d87fa('0x0'); //end 
//correct discount code


const correctText = 'الرمز صحيح! حصلتي على خصم %15' //correct text for sale
const wrongText = 'الرمز خاطئ, الرجاء المحاولة مجددا' //uncorrect text code 
let TriedBefore = false //to make sure wrongText appears just once


function formatMoney(number, decPlaces, decSep, thouSep) {
    decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
        decSep = typeof decSep === "undefined" ? "." : decSep;
    thouSep = typeof thouSep === "undefined" ? "," : thouSep;
    var sign = number < 0 ? "-" : "";
    var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
    var j = (j = i.length) > 3 ? j % 3 : 0;

    return sign +
        (j ? i.substr(0, j) + thouSep : "") +
        i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
        (decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : "");

}


let checkCode = function() {
    if (CodeInput.value == Code) { //if code matches, change the price with 15% discount

        //remove code and display welcome message
        setTimeout(function() {
            price.forEach((item) => {

                item.textContent = formatMoney(item.textContent - ((item.textContent * 15) / 100)) + ' ل.س' //discount 15%
                item.style.backgroundColor = 'green'
            })
            moreInfoPrice.forEach((item) => {
                item.textContent = formatMoney(item.textContent - ((item.textContent * 15) / 100)) + ' ل.س' + ' (بعد الخصم) ' //discount 15%
            })
            formStyle.style.display = 'none'
            let node = document.createElement('h2')
            let textnode = document.createTextNode(correctText)
            node.appendChild(textnode)
            popup.appendChild(node)
        }, 2000)
    } else { //if code doesn't match
        setTimeout(function() {
            btns.forEach((item) => {
                item.classList.remove('activeLoading')
            })
            let node = document.createElement('h6')
            let textnode = document.createTextNode(wrongText)
            if (TriedBefore == false) {
                node.appendChild(textnode)
                formStyle.appendChild(node)
                TriedBefore = true // wrongText must uppear just once
            }

        }, 2000)
    }

}

// cancel button for popup show more box
cancelInfo.forEach((item) => {
    item.addEventListener('click', function() {
        moreInfo.forEach((item) => {
            item.style.display = "none"
            showMoreBackground.style.display = "none"
        })
    })
})

moreBtn.forEach((item) => { // show more button clicked
    item.addEventListener('click', function() {
        showMoreBackground.style.display = "block"
    })
})

//click outside the info box to close
showMoreBackground.addEventListener('click', function(e) {
    moreInfo.forEach((item) => {
        if (e.target != item) {
            item.style.display = "none"
            showMoreBackground.style.display = "none"
        }
    })
})

//press esc key to close info popup box
window.onkeyup = function(event) {
    if (event.keyCode == 27) { //esc key code = 27
        moreInfo.forEach((item) => {
            item.style.display = "none"
            showMoreBackground.style.display = "none"
        })
    }
}