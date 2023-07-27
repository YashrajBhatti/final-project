	
function toggleMenu(svg) {
	svg.classList.toggle("HamburgerActive")
	let mobileMenu = document.getElementById("MobileMenu");
	mobileMenu.classList.toggle("MobileActive");

	if (svg.classList.contains("HamburgerActive")) {
	let wishHeight = mobileMenu.scrollHeight + 39;
		console.log(wishHeight)
    let openCont = mobileMenu.animate([
      // keyframes
      {
        height: '0px'
      },
      {
        height: wishHeight + 'px'
      }
    ], {
      // timing options
      duration: 200
    });
    openCont.onfinish = function () {
      mobileMenu.style.height = 'auto';
    }
  } else {
    let aktHeight = mobileMenu.clientHeight;
	  console.log(aktHeight)
    let closeCont = mobileMenu.animate([
      // keyframes
      {
        height: aktHeight + 'px'
      },
      {
        height: '0px'
      }
    ], {
      // timing options
      duration: 200
    });
    closeCont.onfinish = function () {
      mobileMenu.style.height = "0px";
    }
  }
}
	