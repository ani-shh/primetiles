jQuery(document).ready(function ($) {

  // Scroll logic for #dynamic and #dynamic-mb
  $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
          $('#dynamic').addClass('none-top');
          $('#dynamic-mb').addClass('none-top');
      } else {
          $('#dynamic').removeClass('none-top');
          $('#dynamic-mb').removeClass('none-top');
      }
  });

  // Toggle video controls on hover
  $('.myvideo').hover(function toggleControls() {
      if (this.hasAttribute("controls")) {
          this.removeAttribute("controls");
      } else {
          this.setAttribute("controls", "controls");
      }
  });

  // Bootstrap popover initialization (safe check)
  var exampleEl = document.getElementById('example');
  if (exampleEl) {
      var options = {
          html: true,
          title: "",
          content: $('[data-name="popover-content"]')
      };
      var popover = new bootstrap.Popover(exampleEl, options);
  }

});
jQuery(document).ready(function ($) {
   $(document).ready(function () {


    $('.hero-slide').slick({
      dots: true,
      draggable: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 6000,
      speed: 400, 
      pauseOnFocus: false,
      pauseOnHover: true,
      pauseOnDotsHover: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: "<i class='icon-arrow-right k-left control-c prev slick-prev'></i>",
      nextArrow: "<i class='icon-arrow-left k-right control-c next slick-next'></i>",

      responsive: [

        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: false,

          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            draggable: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            draggable: false,


          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]

    });
    $('.video-slide').slick({
      dots: true,
      infinite: false, // <-- STOPS at last slide
      autoplay: true,
      autoplaySpeed: 100000,
      pauseOnFocus: false,
      pauseOnHover: true,
      pauseOnDotsHover: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: "<i class='icon-arrow-right k-left control-c prev slick-prev'></i>",
      nextArrow: "<i class='icon-arrow-left k-right control-c next slick-next'></i>",
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        }
      ]
    });

    // $('.play-icon').on('click', function () {
    //   let video = $(this).siblings('video')[0]; // Get the related video

    //   if (video.paused) {
    //     // Pause all other videos first
    //     $('video').each(function () {
    //       this.pause();
    //     });

    //     // Play the clicked video
    //     video.play();
    //   } else {
    //     video.pause(); // Pause if it's already playing
    //   }
    // });


    $('.trending-slide').slick({
      infinite: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 100000,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      prevArrow: "<i class='icon-arrow-right k-left control-c prev slick-prev'></i>",
      nextArrow: "<i class='icon-arrow-left k-right control-c next slick-next'></i>",

      responsive: [

        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]

    });

    $('.post-slide').slick({
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 100000,
      pauseOnFocus: false,
      pauseOnHover: true,
      pauseOnDotsHover: false,
      slidesToShow: 3,
      cssEase: 'linear',

      slidesToScroll: 1,
      centerMode: true,
      arrows: true,
      prevArrow: "<i class='icon-arrow-right k-left control-c prev slick-prev'></i>",
      nextArrow: "<i class='icon-arrow-left k-right control-c next slick-next'></i>",

      responsive: [

        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false

          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]

    });

    $('.product-thumb-slide').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 100000,
      pauseOnFocus: false,
      pauseOnHover: true,
      pauseOnDotsHover: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: "<i class='icon-arrow-right k-left control-c prev slick-prev'></i>",
      nextArrow: "<i class='icon-arrow-left k-right control-c next slick-next'></i>",

      responsive: [

        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,

          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]

    });
    $('.similar-tiles').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 100000,
      pauseOnFocus: false,
      pauseOnHover: true,
      pauseOnDotsHover: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: "<i class='icon-arrow-right k-left control-c prev slick-prev'></i>",
      nextArrow: "<i class='icon-arrow-left k-right control-c next slick-next'></i>",

      responsive: [

        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,

          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]

    });

    $('.other-tiles').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 100000,
      pauseOnFocus: false,
      pauseOnHover: true,
      pauseOnDotsHover: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: "<i class='icon-arrow-right k-left control-c prev slick-prev'></i>",
      nextArrow: "<i class='icon-arrow-left k-right control-c next slick-next'></i>",

      responsive: [

        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,

          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]

    });

    $('.trending-blog-slider').slick({
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 100000,
      pauseOnFocus: false,
      pauseOnHover: true,
      pauseOnDotsHover: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: "<i class='icon-arrow-right k-left control-c prev slick-prev'></i>",
      nextArrow: "<i class='icon-arrow-left k-right control-c next slick-next'></i>",

      responsive: [

        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,

          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]

    });




    $('.mobile_tile_slider').slick({
      dots: true,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,

    });

    $('.mobile_tile_slider1').slick({
      dots: true,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,

    });

    $('.spirit_slider').slick({
      dots: true,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,

    });

    if ($(window).width() < 960) {
      $("#threeGrid").click(function () {
        $("#gallery .p_items").css("width", "46%");
        $("#threeGrid").addClass("active");
        $("#fourGrid").removeClass("active");
      });

      $("#fourGrid").click(function () {
        $("#gallery .p_items").css("width", "100%");
        $("#fourGrid").addClass("active");
        $("#threeGrid").removeClass("active");
      });
    } else {
      $("#threeGrid").click(function () {
        $("#gallery .p_items").css("width", "32%");
        $("#threeGrid").addClass("active");
        $("#fourGrid").removeClass("active");
      });

      $("#fourGrid").click(function () {
        $("#gallery .p_items").css("width", "23.5%");
        $("#fourGrid").addClass("active");
        $("#threeGrid").removeClass("active");
      });
    }


    var $mobileNav = $('.navigation');
    var $mobileNavToggle = $('.mobile-nav-toggle > span');

    function toggleMobileNav() {
      $mobileNav.toggleClass('open');
      $('body').toggleClass('mobile-nav-open');
    }

    $(function () {
      $mobileNavToggle.click(toggleMobileNav);
    });

    window.addEventListener("scroll", function () {
      const mobileMenu = document.querySelector(".mobile_menu");
      if (mobileMenu) {
        if (window.scrollY >= 40) {
          mobileMenu.classList.add("scrolled");
        } else {
          mobileMenu.classList.remove("scrolled");
        }
      }
    });

    $(".mobile-nav-toggle").on('click', function () {
      $(".mobile_menu").addClass("scrolled");
    });


    // Open the submenu on click
    $('.submenu_toggle_link').on('click', function (e) {
      e.preventDefault(); // Prevent the default action of anchor links

      // Close any other open submenus
      $('.sub_menu').not($(this).next('.sub_menu')).removeClass('sub_open');
      $('body').removeClass('mobile-subnav-open');

      // Toggle the submenu for the clicked item
      $(this).next('.sub_menu').toggleClass('sub_open');
      $('body').toggleClass('mobile-subnav-open', $(this).next('.sub_menu').hasClass('sub_open'));
    });

    // Close the submenu when clicking "Back" or outside
    $('.sub_menu .close').on('click', function (e) {
      e.preventDefault();
      $(this).closest('.sub_menu').removeClass('sub_open');
      $('body').removeClass('mobile-subnav-open');
    });

    $(document).on('click', function (e) {
      if (!$(e.target).closest('.sub_menu, .submenu_toggle_link').length) {
        $('.sub_menu').removeClass('sub_open');
        $('body').removeClass('mobile-subnav-open');
      }
    });



    // Toggle search_drop on search_ico_ click
    $('.search_ico_').on('click', function () {
      $('.search_drop').slideToggle('fast');
    });

    // Close search_drop on close_btn click
    $('.close_btn').on('click', function () {
      $('.search_drop').slideUp('fast'); // Close the dropdown with slide-up animation
    });

  });

  // Add event listeners after the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    const mainTabs = document.getElementById("main-tabs");
    const yearTabs = document.getElementById("year-tabs");

    const mainTabLeft = document.querySelector(".scroll-button.main-tab-left");
    const mainTabRight = document.querySelector(".scroll-button.main-tab-right");

    const mainYearLeft = document.querySelector(".scroll-button.main-year-left");
    const mainYearRight = document.querySelector(".scroll-button.main-year-right");


    // Scroll Left for Main Tab
    mainTabLeft?.addEventListener("click", () => {
      mainTabs.scrollBy({
        left: -200, // Adjust the scroll distance
        behavior: "smooth",
      });
    });
    // Scroll Right for Main Tab
    mainTabRight?.addEventListener("click", () => {
      mainTabs.scrollBy({
        left: 200, // Adjust the scroll distance
        behavior: "smooth",
      });
    });

    // Scroll Left for Main Year
    mainYearLeft?.addEventListener("click", () => {
      yearTabs.scrollBy({
        left: -200, // Adjust the scroll distance
        behavior: "smooth",
      });
    });
    // Scroll Right for Main Year
    mainYearRight?.addEventListener("click", () => {
      yearTabs.scrollBy({
        left: 200, // Adjust the scroll distance
        behavior: "smooth",
      });
    });

  });

  $(document).ready(function () {
    var $container = $("#main-tabs"); // The scrolling container
    var $containerH = $("#history-tabs"); // The scrolling container
    var scrollAmount = 200; // Adjust this for how much you want to scroll

    $(".main-tab-left").click(function () {
      $container.animate({ scrollLeft: "-=" + scrollAmount }, 300);
    });

    $(".main-tab-right").click(function () {
      $container.animate({ scrollLeft: "+=" + scrollAmount }, 300);
    });

    $(".main-year-left").click(function () {
      $containerH.animate({ scrollLeft: "-=" + scrollAmount }, 300);
    });

    $(".main-year-right").click(function () {
      $containerH.animate({ scrollLeft: "+=" + scrollAmount }, 300);
    });
  });


  $(function () {
    initSlider();
  });


  function initSlider() {

    var slider = $(".csr-slide");

    slider.on("init", function (slick) {
      checkSlides(this, 0);
    });

    slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      $(this).addClass("changing");
    });

    slider.on("afterChange", function (event, slick, currentSlide) {
      $(this).removeClass("changing");
      checkSlides(this, currentSlide);
    });


    slider.slick({
      prevArrow: "<i class='icon-arrow-right k-left control-c prev slick-prev'></i>",
      nextArrow: "<i class='icon-arrow-left k-right control-c next slick-next'></i>",
      // centerMode: true,
      // variableWidth: true,
      dots: false,
      autoplay: true,
      variableWidth: true,
      slidesToShow: 3,
      centerPadding: '6px',
      slidesToScroll: 2,
       autoplaySpeed: 20000,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: false,
            variableWidth: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            autoplay: false,

          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }

  function checkSlides(slider, currentSlide) {
    var slides = $(".slide", $(slider));
    slides.removeClass("prev");
    slides.filter(function (index) {
      return $(this).attr("data-slick-index") < currentSlide;
    }).addClass("prev");;
  }


  $('.book-item-content .post-size').each(function () {
    if ($(this).text().trim() === '') {
      $(this).addClass('h-21');
    }
  });


  document.querySelectorAll(".copy-icon").forEach(function (copyIcon) {
    copyIcon.addEventListener("click", function (event) {
      event.preventDefault();
  
      // Get the email text
      var emailTextEl = this.closest(".queries-box").querySelector(".email-text");
      var emailText = emailTextEl.textContent.trim();
  
      // Copy to clipboard
      var tempInput = document.createElement("textarea");
      tempInput.value = emailText;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
  
      // Create tooltip span inside the copy icon
      const tooltip = document.createElement("span");
      tooltip.className = "copy-tooltip";
      tooltip.innerText = "Copied!";
  
      // Append to the clicked icon link
      this.appendChild(tooltip);
  
      // Remove after delay
      setTimeout(() => {
        tooltip.classList.add("fade-out");
      }, 800);
      setTimeout(() => {
        tooltip.remove();
      }, 1500);
    });
  });



//   var googleSat = L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
//     attribution: "&copy; Google Maps"
//   });

//   var map = L.map("map", {
//     center: [30.7333, 76.7794],
//     zoom: 8,
//     layers: [googleSat] 
//   });

//   var customIcon = L.icon({
//     iconUrl: "images/marker.svg", 
//     iconSize: [23, 30], 
//     iconAnchor: [20, 40], 
//     popupAnchor: [0, -35] 
//   });

//   var marker = L.marker([30.7333, 76.7794], { icon: customIcon }).addTo(map);

//   var popupContent = `
//     <div class="popup-content">
//         <h4>Ceramic Wall &amp; Floor Tiles</h4>
//         <div class="location">CHANDIGARH</div>
//         <div class="address">
//             <p><i class="icon-location_pin"></i><span>SCO 17, 1st Floor Sector 7C, Madhya Marg Chandigarh</span></p>
//             <p><i class="icon-phone-call"></i><span>+91-172-4631418</span></p>
//         </div>
//         <div class="display-footer">
//             <a href="#"><span>Get direction</span><i class="icon-direction-line"></i></a> <span class="text-secondary"></span>
//             <a href="#"><span>Call Now</span><i class="icon-phone-call"></i></a>
//         </div>
//     </div>
// `;

//   marker.bindPopup(popupContent).openPopup();


  $(document).ready(function () {
    // --- Robust Delegated Search Icon Logic for All Pages (ID + Class) ---
    // Remove any old direct event listeners for search/close icons
    $('#search-icon, #close-icon, .icon-search, .icon-close, .mobile_search, .mobile_search_close, .hover_search, .hover_search_close').off('click');

    // Open search (desktop, mobile, hover)
    $(document).on('click', '.icon-search, #search-icon, .mobile_search, .hover_search', function(e) {
      e.preventDefault();
      var $searchDropdown = $('.searchdropdown[data-bs-popper="static"]');
      $searchDropdown.addClass('show');
      document.body.style.overflow = 'hidden';

      // Toggle icons: find siblings by class or id
      $(this).addClass('d-none');
      $(this).siblings('.icon-close, #close-icon, .mobile_search_close, .hover_search_close').removeClass('d-none');
    });

    // Close search (desktop, mobile, hover)
    $(document).on('click', '.icon-close, #close-icon, .mobile_search_close, .hover_search_close', function(e) {
      e.preventDefault();
      var $searchDropdown = $('.searchdropdown[data-bs-popper="static"]');
      $searchDropdown.removeClass('show');
      document.body.style.overflow = '';

      // Toggle icons: find siblings by class or id
      $(this).addClass('d-none');
      $(this).siblings('.icon-search, #search-icon, .mobile_search, .hover_search').removeClass('d-none');
    });

    // Optionally: click outside to close
    $(document).on('click', function(e) {
      var $searchDropdown = $('.searchdropdown[data-bs-popper="static"]');
      var $target = $(e.target);
      if (
        $searchDropdown.hasClass('show') &&
        !$target.closest('.searchdropdown, .icon-search, #search-icon, .icon-close, #close-icon, .mobile_search, .mobile_search_close, .hover_search, .hover_search_close').length
      ) {
        $searchDropdown.removeClass('show');
        document.body.style.overflow = '';
        // Reset icons
        $('.icon-close, #close-icon, .mobile_search_close, .hover_search_close').addClass('d-none');
        $('.icon-search, #search-icon, .mobile_search, .hover_search').removeClass('d-none');
      }
    });
  });

});

// Home Page video Gallery

document.addEventListener('DOMContentLoaded', function () {
  const $videoCarousel = $('.video-slide.home-video-section');

  // Play video on box click
  $videoCarousel.on('click', '.video_sl', function () {
    const $container = $(this);
    const videoType = $container.data('video-type');
    const videoUrl = $container.data('video-url');

    $container.empty(); // Remove thumbnail or existing video

    if (videoType === 'url') {
      const iframe = `<iframe src="${videoUrl}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen class="w-100 h-100" style="width: 100%; height: 100%;"></iframe>`;
      $container.html(iframe);
    } else {
      const video = `<video class="w-100 h-100" autoplay loop playsinline>
          <source src="${videoUrl}" type="video/mp4">
      </video>`;
      $container.html(video);
    }
  });

  // Stop and restore video on slide change
  $videoCarousel.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    const $currentSlide = $(slick.$slides[currentSlide]);

    $currentSlide.find('.video_sl').each(function () {
      const $container = $(this);
      const thumbnail = $container.data('thumbnail');
      const videoType = $container.data('video-type');
      const videoUrl = $container.data('video-url');

      $container.empty(); // Clear iframe or video

      if (thumbnail) {
        $container.html(`
          <img src="${thumbnail}" class="img-fluid w-100 h-100" alt="Video Thumbnail">
          <div class="play-icon"><i class="icon-play"></i></div>
        `);
      } else if (videoType !== 'url') {
        $container.html(`
          <video class="w-100 h-100 myvideo" loop autoplay playsinline>
            <source src="${videoUrl}" type="video/mp4">
          </video>
        `);
      }
    });
  });
});

//Search Script
document.addEventListener("DOMContentLoaded", function () {
  const mobileSearchIcon = document.querySelector(".search_ico_ .mobile_search");
  const mobilecloseIcon = document.querySelector(".search_ico_ .mobile_search_close")
  const hoverSearchIcon = document.querySelector(".search_ico_ .hover_search");
  const hovercloseIcon = document.querySelector(".search_ico_ .hover_search_close")
  const desktopSearchIcon = document.querySelector("#search-icon");
  const desktopCloseIcon = document.querySelector("#close-icon");
  const searchDropdown = document.querySelector('.searchdropdown[data-bs-popper="static"]');

  function toggleSearchDropdown(e) {
    e.preventDefault();
    if (searchDropdown) {
      searchDropdown.classList.toggle("show");
      document.body.style.overflow='hidden';
    }
    if(desktopCloseIcon){
      desktopCloseIcon.classList.remove('d-none');
      desktopSearchIcon.classList.add('d-none');
    }
    if(mobilecloseIcon){
      mobilecloseIcon.classList.remove('d-none');
      mobileSearchIcon.classList.add('d-none')
    }
    if(hovercloseIcon){
      hovercloseIcon.classList.remove('d-none');
      hoverSearchIcon.classList.add('d-none')
    }
  }

  function toggleSearchDropdownClose(e) {
    e.preventDefault();
    if (searchDropdown) {
      searchDropdown.classList.toggle("none");
      document.body.style.overflow='';
    }
    if(desktopCloseIcon){
      desktopCloseIcon.classList.add('d-none');
      desktopSearchIcon.classList.remove('d-none');
    }
    if(mobilecloseIcon){
      mobilecloseIcon.classList.add('d-none');
      mobileSearchIcon.classList.remove('d-none')
    }
    if(hovercloseIcon){
      hovercloseIcon.classList.add('d-none');
      hoverSearchIcon.classList.remove('d-none')
    }
  }
  if (mobileSearchIcon) {
    mobileSearchIcon.addEventListener("click", toggleSearchDropdown);
  }
  if (hoverSearchIcon) {
    hoverSearchIcon.addEventListener("click", toggleSearchDropdown);
  }
  if (desktopSearchIcon) {
    desktopSearchIcon.addEventListener("click", toggleSearchDropdown);
  }
  if(desktopCloseIcon){
    desktopCloseIcon.addEventListener("click", toggleSearchDropdownClose);
  }
  if(mobilecloseIcon){
    mobilecloseIcon.addEventListener("click", toggleSearchDropdownClose);
  }
  if(hovercloseIcon){
    hovercloseIcon.addEventListener("click", toggleSearchDropdownClose);
  }
  // click outside to close ONLY if it's open
  document.addEventListener("click", function (e) {
    const clickedInside =
      searchDropdown.contains(e.target) ||
      mobileSearchIcon.contains(e.target) ||
      hoverSearchIcon.contains(e.target) ||
      desktopSearchIcon.contains(e.target);
    if (!clickedInside && searchDropdown.classList.contains("show")) {
      searchDropdown.classList.remove("show");
    }
  });
});


jQuery(document).ready(function(){
  jQuery("#flip1").click(function(){
    $(this).toggleClass("arrow_up");
    jQuery(".panel_hide1").slideToggle(300);
  });
  jQuery("#flip2").click(function(){
    $(this).toggleClass("arrow_up");
    jQuery(".panel_hide2").slideToggle(300);
  });
  jQuery("#flip3").click(function(){
    $(this).toggleClass("arrow_up");
    jQuery(".panel_hide3").slideToggle(300);
  });
  jQuery("#flip4").click(function(){
    $(this).toggleClass("arrow_up");
    jQuery(".panel_hide4").slideToggle(300);
  });
  jQuery("#flip5").click(function(){
    $(this).toggleClass("arrow_up");
    jQuery(".panel_hide5").slideToggle(300);
  });
  jQuery("#flip6").click(function(){
    $(this).toggleClass("arrow_up");
    jQuery(".panel_hide6").slideToggle(300);
  });
  jQuery("#flip7").click(function(){
    $(this).toggleClass("arrow_up");
    jQuery(".panel_hide7").slideToggle(300);
  });
  jQuery(".accorhead1 .accordion-title").click(function(){
    $(this).toggleClass("arrow_up");
    jQuery("#accorbody1").slideToggle(300);
  });
  jQuery(".accorhead2 .accordion-title").click(function(){
    $(this).toggleClass("arrow_up");
    jQuery("#accorbody2").slideToggle(300);
  });
  // Add for Collections group
  jQuery("#flip1b").click(function(){
    $(this).toggleClass("arrow_up");
    jQuery(".panel_hide1b").slideToggle(300);
  });
});


jQuery(document).ready(function(){

  // var $this = $('#accorbody1');
  // if ($this.find('div').length > 2) {
  //     $('#accorbody1').append('<div><a href="javascript:;" class="showMore"></a></div>');
  // }
  
  // // If more than 2 Education items, hide the remaining
    // $('#accorbody1 .main-check_custom').slice(0,4).addClass('shown');
    // $('#accorbody1 .main-check_custom').not('.shown').hide();
    // $('#accorbody1 .showMore').on('click',function(){
    // 	$('#accorbody1 .main-check_custom').not('.shown').toggle(300);
    // 	$(this).toggleClass('showLess');
    // });


  // var $this = $('#accorbody2');
  // if ($this.find('div').length > 2) {
  //     $('#accorbody2').append('<div><a href="javascript:;" class="showMore"></a></div>');
  // }
  // // If more than 2 Education items, hide the remaining
    // $('#accorbody2 .main-check_custom').slice(0,4).addClass('shown');
    // $('#accorbody2 .main-check_custom').not('.shown').hide();
    // $('#accorbody2 .showMore, #accorbody2 .showMore').on('click',function(){
    // 	$('#accorbody2 .main-check_custom').not('.shown').toggle(300);
    // 	$(this).toggleClass('showLess');
    // });

  var $this = $('.panel_hide2 .bodymain-check_custom');
  if ($this.find('div').length > 2) {
      $('.panel_hide2 .bodymain-check_custom').append('<div><a href="javascript:;" class="showMore"></a></div>');
  }
  // If more than 2 Education items, hide the remaining
    $('.panel_hide2 .bodymain-check_custom .main-check_custom').slice(0,6).addClass('shown');
    $('.panel_hide2 .bodymain-check_custom .main-check_custom').not('.shown').hide();
    $('.panel_hide2 .bodymain-check_custom .showMore, .panel_hide2 .bodymain-check_custom .showMore').on('click',function(){
        $('.panel_hide2 .bodymain-check_custom .main-check_custom').not('.shown').toggle(300);
        $(this).toggleClass('showLess');
    });

  var $this = $('.panel_hide3 .bodymain-check_custom');
  if ($this.find('div').length > 2) {
      $('.panel_hide3 .bodymain-check_custom').append('<div><a href="javascript:;" class="showMore"></a></div>');
  }
  // If more than 2 Education items, hide the remaining
    $('.panel_hide3 .bodymain-check_custom .main-check_custom').slice(0,6).addClass('shown');
    $('.panel_hide3 .bodymain-check_custom .main-check_custom').not('.shown').hide();
    $('.panel_hide3 .bodymain-check_custom .showMore, .panel_hide3 .bodymain-check_custom .showMore').on('click',function(){
        $('.panel_hide3 .bodymain-check_custom .main-check_custom').not('.shown').toggle(300);
        $(this).toggleClass('showLess');
    });

  var $this = $('.panel_hide4');
  if ($this.find('div').length > 2) {
      $('.panel_hide4').append('<div><a href="javascript:;" class="showMore"></a></div>');
  }
  // If more than 2 Education items, hide the remaining
    $('.panel_hide4 .main-check_custom').slice(0,6).addClass('shown');
    $('.panel_hide4 .main-check_custom').not('.shown').hide();
    $('.panel_hide4 .showMore, .panel_hide4 .showMore').on('click',function(){
        $('.panel_hide4 .main-check_custom').not('.shown').toggle(300);
        $(this).toggleClass('showLess');
    });

});

$(function() {
  $('.filter-btn').on('click', function() {
    $('.filter-sidebar').toggleClass('visible-sidebar');
  });
  $('.back-close').on('click', function() {
    $('.filter-sidebar').toggleClass('visible-sidebar');
  });
});

$(function() {
  $('#applied-filters-toggle').on('click', function() {
    $('.filter-divide').toggleClass('flex-column');
  });
});




// Custom jQuery function to check if an element is in the viewport
jQuery.fn.isInViewportone = function () {
  if (this.length === 0) return false; // check if element exists
  
  let elementTop = this.offset().top;
  let elementBottom = elementTop + this.outerHeight();
  let viewportTop = jQuery(window).scrollTop();
  let viewportBottom = viewportTop + jQuery(window).height();
  
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

let animateDoneone = false;

jQuery(window).on("resize scroll load", function () {
  const $counter = jQuery(".counter-count");
  
  if (!animateDoneone && $counter.length && $counter.isInViewportone()) {
    animateDoneone = true;

    $counter.each(function () {
      const $this = jQuery(this);
      const finalValue = parseInt($this.text(), 10);
      
      $this.prop("Counter", 0).animate({
        Counter: finalValue
      }, {
        duration: 3000,
        easing: "swing",
        step: function (now) {
          $this.text(Math.ceil(now));
        }
      });
    });
  }
});


// Check if element is in viewport
jQuery.fn.isInViewport = function () {
  if (this.length === 0) return false; // Prevent error if element doesn't exist

  const elementTop = this.offset().top;
  const elementBottom = elementTop + this.outerHeight();
  const viewportTop = jQuery(window).scrollTop();
  const viewportBottom = viewportTop + jQuery(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

let animateDone = false;

jQuery(window).on("resize scroll load", function () {
  const $counters = jQuery(".counter-counttwo");

  if (!animateDone && $counters.length && $counters.isInViewport()) {
    animateDone = true;

    $counters.each(function () {
      const $this = jQuery(this);
      const originalText = $this.text().replace(/,/g, '').trim();
      const finalValue = parseFloat(originalText);

      if (isNaN(finalValue)) return; // Skip if not a valid number

      const hasDecimal = originalText.includes('.');

      $this.prop("Counter", 0).animate({
        Counter: finalValue
      }, {
        duration: 3000,
        easing: "swing",
        step: function (now) {
          $this.text(hasDecimal ? now.toFixed(2) : Math.floor(now));
        },
        complete: function () {
          $this.text(
            hasDecimal
              ? finalValue.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })
              : finalValue.toLocaleString()
          );
        }
      });
    });
  }
});

$(document).ready(function () {
  function initMobileSlick() {
    if ($(window).width() <= 767) {
      if (!$('.filter-gallery').hasClass('slick-initialized')) {
        $('.filter-gallery').slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          rows: 2,
          infinite: false,
        });
      }

      if (!$('.color-slider').hasClass('slick-initialized')) {
        $('.color-slider').slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          rows: 2,
          infinite: false,
        });
      }
    }
  }

  // Init on load
  initMobileSlick();

  // Re-position slick on tab switch
  $('button[data-bs-toggle="pill"]').on('shown.bs.tab', function () {
    $('.slick-slider').slick('setPosition');
  });

  // Optional: Re-init on resize
  $(window).on('resize', function () {
    initMobileSlick();
  });
});



$(document).ready(function () {
   $.validator.addMethod("name_regex", function (value, element) {
      return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
   }, "Only letters and spaces are allowed");

   $.validator.addMethod("mobile_regex", function (value, element) {
      return this.optional(element) || /^[0-9]{10}$/.test(value);
   }, "Enter a valid 10-digit mobile number");

   $("#enquire_form").validate({
      rules: {
         'form_name': {
            required: true,
            minlength: 1,
            name_regex: true
         },
         'form_phnumber': {
            required: true,
            mobile_regex: true,
            minlength: 10
         },
         'form_email': {
            required: true,
            email: true
         },
         'form_state': {
            required: true
         },
         'form_country': {
            required: true
         },
      },

      messages: {
         'form_name': {
            required: "The Name field is mandatory!"
         },
         'form_phnumber': {
            required: "The Mobile field is mandatory!"
         },
         'form_email': {
            required: "The Email field is mandatory!",
            email: "Enter a valid email address"
         },
         'form_state': {
            required: "Please select a State!"
         },
         'form_country': {
            required: "Please select a Country!"
         },
      },

      submitHandler: function (form) {
         form.submit();
      }
   });
});

$(document).ready(function () {
   $.validator.addMethod("name_regex", function (value, element) {
      return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
   }, "Only letters and spaces are allowed");

   $.validator.addMethod("mobile_regex", function (value, element) {
      return this.optional(element) || /^[0-9]{10}$/.test(value);
   }, "Enter a valid 10-digit mobile number");

   $("#contact_form").validate({
      rules: {
         'form_name': {
            required: true,
            minlength: 1,
            name_regex: true
         },
         'form_phnumber': {
            required: true,
            mobile_regex: true,
            minlength: 10
         },
         'form_email': {
            required: true,
            email: true
         },
         'form_state': {
            required: true
         },
         'form_country': {
            required: true
         },
      },

      messages: {
         'form_name': {
            required: "The Name field is mandatory!"
         },
         'form_phnumber': {
            required: "The Mobile field is mandatory!"
         },
         'form_email': {
            required: "The Email field is mandatory!",
            email: "Enter a valid email address"
         },
         'form_state': {
            required: "Please select a State!"
         },
         'form_country': {
            required: "Please select a Country!"
         },
      },

      submitHandler: function (form) {
         form.submit();
      }
   });
});

$(document).ready(function () {
   $.validator.addMethod("name_regex", function (value, element) {
      return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
   }, "Only letters and spaces are allowed");

   $.validator.addMethod("mobile_regex", function (value, element) {
      return this.optional(element) || /^[0-9]{10}$/.test(value);
   }, "Enter a valid 10-digit mobile number");

   $("#careers-form").validate({
      rules: {
         'first-name': {
            required: true,
            minlength: 1,
            name_regex: true
         },
         'middle-name': {
            required: true,
            minlength: 1,
            mobile_regex: true
         },
         'last-name': {
            required: true,
            email: true
         },
         'function': {
            required: true
         },
         'position': {
            required: true
         },
         'business': {
            required: true
         },
         'location': {
            required: true
         },
         'location_city': {
            required: true
         },
         'marital-status': {
            required: true
         },
         'dob': {
            required: true
         },
         'age': {
            required: true
         },
         'chooseFile': {
            required: true
         },
         'graduation': {
            required: true
         },
         'post-graduation': {
            required: true
         },
         'experience': {
            required: true
         },
         'org-name': {
            required: true
         },
         'working-since': {
            required: true
         },
         'designation': {
            required: true
         },
         'ctc': {
            required: true
         },
         'company-name[]': {
            required: true
         },
         'position[]': {
            required: true
         },
         'years-exp[]': {
            required: true
         },
      },

      messages: {
         'form_name': {
            required: "The Name field is mandatory!"
         },
         'form_phnumber': {
            required: "The Mobile field is mandatory!"
         },
         'form_email': {
            required: "The Email field is mandatory!",
            email: "Enter a valid email address"
         },
      },

      submitHandler: function (form) {
         form.submit();
      }
   });
});

// document.getElementById('chooseFile').addEventListener('change', function (e) {
//    var fileName = e.target.files.length > 0 ? e.target.files[0].name : "Resume (Max file size: 500 KB)";
//    document.getElementById('noFile').textContent = fileName;
// });

$(document).ready(function () {
   $('#inputDate').datepicker({
      format: 'dd-mm-yyyy',
      autoclose: true,
      endDate: new Date(), // Optional: prevent future dates
      todayHighlight: true
   }).on('changeDate', function (e) {
      const selectedDate = e.format(); // gets date as dd-mm-yyyy
      const parts = selectedDate.split('-');
      const dob = new Date(parts[2], parts[1] - 1, parts[0]); // yyyy, mm-1, dd
      const today = new Date();

      let age = today.getFullYear() - dob.getFullYear();
      const monthDiff = today.getMonth() - dob.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
         age--;
      }

      if (!isNaN(age)) {
         $('#ageInput').val(age);
      } else {
         $('#ageInput').val('');
      }
   });
});
jQuery(document).ready(function () {
//Form Validation
  $(document).on(
    "input propertychange",
    "input[name='current_org_name'],input[name='past_company_name[]'],input[name='graduation']",
    function () {
      var c = this.selectionStart,
        r = /[^a-zA-Z0-9 . , - @ ! \n ]/gi,
        v = $(this).val();
      if (r.test(v)) {
        $(this).val(v.replace(r, ""));
        c--;
      }
      this.setSelectionRange(c, c);
  });
  $("input[name='current_designation'],input[name='past_position[]']").bind("input", function () {
    var c = this.selectionStart,
      r = /[^a-zA-Z0-9 ]/gi,
      v = $(this).val();
    if (r.test(v)) {
      $(this).val(v.replace(r, ""));
      c--;
    }
    this.setSelectionRange(c, c);
  });
  $("input[name='current_ctc'],input[name='past_years_exp[]']").bind("input", function () {
    var c = this.selectionStart,
      r = /[^a-zA-Z0-9 . ]/gi,
      v = $(this).val();
    if (r.test(v)) {
      $(this).val(v.replace(r, ""));
      c--;
    }
    this.setSelectionRange(c, c);
  });
  $("input[name=full_name],input[name=country],input[name=city],input[name=other_user],input[name=other_service]").bind("input", function () {
    var c = this.selectionStart,
      r = /[^a-zA-Z ]/gi,
      v = $(this).val();
    if (r.test(v)) {
      $(this).val(v.replace(r, ""));
      c--;
    }
    this.setSelectionRange(c, c);
  });
  $("input[name='mobile']").on("input", function () {
    let value = this.value.replace(/[^0-9]/g, "");
    if (value.length > 15) {
      value = value.slice(0, 15); 
    }
    this.value = value;
    $("#mobile-error").hide();
  });
  $("input[name='mobile']").on("blur", function () {
    const value = this.value;
    if (value.length < 10) {
      $("#mobile-error").text("Mobile number must be at least 10 digits.").show();
    } else {
      $("#mobile-error").hide();
    }
  });
  
    var chooseFileInput = document.getElementById('chooseFile');
    if (chooseFileInput) {
        chooseFileInput.addEventListener('change', function (e) {
            var fileName = e.target.files.length > 0 ? e.target.files[0].name : "Resume (Max file size: 500 KB)";
            var noFileEl = document.getElementById('noFile');
            if (noFileEl) {
                noFileEl.textContent = fileName;
            }
        });
    }
});

// Footer AJAX form submission for landing page injection
function setupFooterFormsJQ() {
    // Newsletter form
    var $newsletterForm = $('#newsletter_form');
    if ($newsletterForm.length) {
        $newsletterForm.on('submit', function(e) {
            e.preventDefault();
            var $form = $(this);
            var $submitBtn = $form.find('button[type="submit"]');
            $submitBtn.prop('disabled', true);
            $.ajax({
                url: $form.attr('action'),
                method: 'POST',
                data: $form.serialize(),
                dataType: 'json',
                xhrFields: { withCredentials: true },
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                success: function(data) {
                    $submitBtn.prop('disabled', false);
                    if (data.success && data.redirect) {
                        window.location.href = data.redirect;
                    } else if (data.success) {
                        showFooterFormMessageJQ($form, 'Subscribed successfully!', 'success');
                    } else if (data.error || data.message) {
                        showFooterFormMessageJQ($form, data.error || data.message, 'error');
                    } else {
                        showFooterFormMessageJQ($form, 'Something went wrong.', 'error');
                    }
                },
                error: function(xhr) {
                    $submitBtn.prop('disabled', false);
                    var msg = 'Network error.';
                    if (xhr.responseJSON && (xhr.responseJSON.error || xhr.responseJSON.message)) {
                        msg = xhr.responseJSON.error || xhr.responseJSON.message;
                    }
                    showFooterFormMessageJQ($form, msg, 'error');
                }
            });
        });
    }

    // Enquiry form
    var $enquiryForm = $('#enquire_form');
    if ($enquiryForm.length) {
        $enquiryForm.on('submit', function(e) {
            e.preventDefault();
            var $form = $(this);
            var $submitBtn = $form.find('button[type="submit"]');
            $submitBtn.prop('disabled', true);
            $.ajax({
                url: $form.attr('action'),
                method: 'POST',
                data: $form.serialize(),
                dataType: 'json',
                xhrFields: { withCredentials: true },
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                success: function(data) {
                    $submitBtn.prop('disabled', false);
                    if (data.success && data.redirect) {
                        window.location.href = data.redirect;
                    } else if (data.success) {
                        showFooterFormMessageJQ($form, 'Enquiry submitted successfully!', 'success');
                    } else if (data.error || data.message) {
                        showFooterFormMessageJQ($form, data.error || data.message, 'error');
                    } else {
                        showFooterFormMessageJQ($form, 'Something went wrong.', 'error');
                    }
                },
                error: function(xhr) {
                    $submitBtn.prop('disabled', false);
                    var msg = 'Network error.';
                    if (xhr.responseJSON && (xhr.responseJSON.error || xhr.responseJSON.message)) {
                        msg = xhr.responseJSON.error || xhr.responseJSON.message;
                    }
                    showFooterFormMessageJQ($form, msg, 'error');
                }
            });
        });
    }
}

function showFooterFormMessageJQ($form, message, type) {
    var $msgDiv = $form.find('.footer-form-message');
    if (!$msgDiv.length) {
        $msgDiv = $('<div class="footer-form-message"></div>');
        $form.append($msgDiv);
    }
    $msgDiv.text(message)
        .css('color', type === 'success' ? 'green' : 'red')
        .css('margin-top', '10px');
    setTimeout(function() { $msgDiv.text(''); }, 5000);
}
// Call this after injecting the footer HTML on landing page
// setupFooterFormsJQ();

