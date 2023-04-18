let loader = document.getElementById('preloader');

window.onload = function() {
    setTimeout(() => {
        loader.classList.add('loaded');
    }, 1000);
  };