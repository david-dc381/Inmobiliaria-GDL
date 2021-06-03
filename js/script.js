(function(){

  let bar = document.getElementById('bar');
  let heightHeader = window.scrollY;

  if (window.innerWidth >= 769) {
    // bar.style.backgroundColor = "transparent";

    window.onscroll = () => {
      if (document.documentElement.scrollTop >= 400) {
        bar.style.backgroundColor = "#ffc107";
        bar.style.transition = "all .5s ease-out";
      } else {
        bar.style.backgroundColor = "transparent";
        bar.style.transition = "all .5s ease-in";
      }
    };
  } else if (window.innerWidth <= 768) {
    bar.style.backgroundColor = "#ffc107";
  }
})();