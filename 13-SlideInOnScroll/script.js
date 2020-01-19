const images = document.querySelectorAll('img');

// Debounce function waits 20 seconds before letting the function again (stops spamming scrolling)
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

function slideIn(e) {
    images.forEach(image => {
        if(checkVisible(image)) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}

function checkVisible(elm) {
    // window.scrollY is the amount of pixels we have scrolled down (from the top of the page)
    // window.innerHeight is the size of the visible area (viewport)
    // scrollAmount gives us the position of what we can see on-screen plus the amount we've scrolled
    const scrollAmount = (window.scrollY + window.innerHeight);

    // offsetTop is the position of the top of the image in relation to the top of the page (how far is the image from the top of the page)
    // imageBottom is the position of the bottom of the image
    const imageBottom = elm.offsetTop + elm.height;

    // Check if the image is halfway shown
    const halfwayShown = scrollAmount > (elm.offsetTop + elm.height * 0.5);

    // If we've scrolled past the image, hide it again
    const isNotScrolledPast = window.scrollY < imageBottom;

    if(halfwayShown && isNotScrolledPast) {
        return true;
    }
    return false;
   
    
  }

window.addEventListener('scroll', debounce(slideIn));