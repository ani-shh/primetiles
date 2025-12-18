document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelector('.product-dropdown');

    dropdownToggle.addEventListener('shown.bs.dropdown', function () {
        dropdownToggle.classList.add('rotated');
    });

    dropdownToggle.addEventListener('hidden.bs.dropdown', function () {
        dropdownToggle.classList.remove('rotated');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelector('.about-dropdown');

    dropdownToggle.addEventListener('shown.bs.dropdown', function () {
        dropdownToggle.classList.add('rotated');
    });

    dropdownToggle.addEventListener('hidden.bs.dropdown', function () {
        dropdownToggle.classList.remove('rotated');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelector('.resources-dropdown');

    dropdownToggle.addEventListener('shown.bs.dropdown', function () {
        dropdownToggle.classList.add('rotated');
    });

    dropdownToggle.addEventListener('hidden.bs.dropdown', function () {
        dropdownToggle.classList.remove('rotated');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelector('.investor-dropdown');

    dropdownToggle.addEventListener('shown.bs.dropdown', function () {
        dropdownToggle.classList.add('rotated');
    });

    dropdownToggle.addEventListener('hidden.bs.dropdown', function () {
        dropdownToggle.classList.remove('rotated');
    });
});


// document.addEventListener("DOMContentLoaded", function () {
//     const searchDropdown = document.querySelector('.dropdown-menu');
//     const searchInput = document.getElementById('search-input');
//     const searchContainer = document.querySelector('.searchdropdown')
//     const el = document.querySelector('.navbar-expand-lg .show');

//     const btn = document.querySelector('.search-custom-btn');

//     // if(searchContainer){
//     //     btn.addEventListener('click', function () {
//     //         setTimeout(() => {
//     //             if (searchDropdown.classList.contains('show')) {
//     //                 document.body.style.overflow = "hidden";
//     //             } else {
//     //                 document.body.style.overflow = "";
//     //             }
//     //         }, 50);
//     //     });
//     // }
    
//     if (searchInput && searchDropdown) {
//         searchInput.addEventListener('focus', () => {
//             // searchDropdown.classList.add('show');
//             document.body.style.overflow = "hidden";

//         });

//         document.addEventListener('click', (e) => {
//             if (!searchDropdown.contains(e.target) && !searchInput.contains(e.target)) {
//                 // searchDropdown.classList.remove('show');
//                 document.body.style.overflow = "";
//             }
//         });
//     }
// });

// Global function to re-initialize Kajaria navigation dropdowns (for external header injection)
function reinitKajariaDropdowns() {
  // Only run if this page is inside an iframe (external integration)
  if (window === window.parent) return;

  var productDropdown = document.querySelector('.product-dropdown');
  if (productDropdown) {
    productDropdown.addEventListener('shown.bs.dropdown', function () {
      productDropdown.classList.add('rotated');
    });
    productDropdown.addEventListener('hidden.bs.dropdown', function () {
      productDropdown.classList.remove('rotated');
    });
  }
  var aboutDropdown = document.querySelector('.about-dropdown');
  if (aboutDropdown) {
    aboutDropdown.addEventListener('shown.bs.dropdown', function () {
      aboutDropdown.classList.add('rotated');
    });
    aboutDropdown.addEventListener('hidden.bs.dropdown', function () {
      aboutDropdown.classList.remove('rotated');
    });
  }
  var resourcesDropdown = document.querySelector('.resources-dropdown');
  if (resourcesDropdown) {
    resourcesDropdown.addEventListener('shown.bs.dropdown', function () {
      resourcesDropdown.classList.add('rotated');
    });
    resourcesDropdown.addEventListener('hidden.bs.dropdown', function () {
      resourcesDropdown.classList.remove('rotated');
    });
  }
  var investorDropdown = document.querySelector('.investor-dropdown');
  if (investorDropdown) {
    investorDropdown.addEventListener('shown.bs.dropdown', function () {
      investorDropdown.classList.add('rotated');
    });
    investorDropdown.addEventListener('hidden.bs.dropdown', function () {
      investorDropdown.classList.remove('rotated');
    });
  }
}

// Global function to re-initialize Kajaria mobile menu and submenus (for external header injection)
function reinitKajariaMobile() {
  // Only run if this page is inside an iframe (external integration)
  if (window === window.parent) return;

  // Mobile menu toggle: toggle 'open' class on .navigation inside #dynamic-mb
  $('#dynamic-mb .mobile-nav-toggle').off('click.kajariaMobile').on('click.kajariaMobile', function () {
    $('#dynamic-mb .navigation').toggleClass('open');
    $('body').toggleClass('mobile-nav-open');
  });

  // Submenu toggles
  $('#dynamic-mb .submenu_toggle_link').off('click.kajariaMobile').on('click.kajariaMobile', function (e) {
    e.preventDefault();
    $('#dynamic-mb .sub_menu').not($(this).next('.sub_menu')).removeClass('sub_open');
    $('body').removeClass('mobile-subnav-open');
    $(this).next('.sub_menu').toggleClass('sub_open');
    $('body').toggleClass('mobile-subnav-open', $(this).next('.sub_menu').hasClass('sub_open'));
  });

  $('#dynamic-mb .sub_menu .close').off('click.kajariaMobile').on('click.kajariaMobile', function (e) {
    e.preventDefault();
    $(this).closest('.sub_menu').removeClass('sub_open');
    $('body').removeClass('mobile-subnav-open');
  });

  $(document).off('click.kajariaMobile').on('click.kajariaMobile', function (e) {
    if (!$(e.target).closest('#dynamic-mb .sub_menu, #dynamic-mb .submenu_toggle_link').length) {
      $('#dynamic-mb .sub_menu').removeClass('sub_open');
      $('body').removeClass('mobile-subnav-open');
    }
  });

  // Show iframe search bar when search icon is clicked (external only)
  $('#shared-header .search_ico_ .icon-search, #shared-header .search_ico_ .mobile_search, #shared-header .search_ico_ .hover_search').off('click.kajariaMobile').on('click.kajariaMobile', function () {
    var $iframe = $('#kajaria-search-iframe');
    if ($iframe.length) {
      $iframe.css('display', 'block');
    }
  });
}

function attachIframeSearchToggle() {
  var searchIcon = document.querySelector('#shared-header #search-icon');
  var closeIcon = document.querySelector('#shared-header #close-icon');
  var mblSearchIcon = document.querySelector('#shared-header #dynamic-mb .icon-search.mobile_search');
  var mblCloseIcon = document.querySelector('#shared-header #dynamic-mb .icon-close.mobile_search_close');
  var mblNavToggle = document.querySelector('#shared-header #dynamic-mb .mobile-nav-toggle');
  var mblNavigation = document.querySelector('#shared-header #dynamic-mb .navigation');
  var searchIframe = document.getElementById('kajaria-search-iframe');
  if (searchIcon && searchIframe) {
    searchIcon.addEventListener('click', function(e) {
      e.preventDefault();
      searchIframe.style.display = 'block';
      searchIcon.classList.add('d-none');
      if (closeIcon) closeIcon.classList.remove('d-none');
    });
  }
  if (mblSearchIcon && searchIframe) {
    mblSearchIcon.addEventListener('click', function(e) {
      e.preventDefault();
      searchIframe.style.display = 'block';
      mblSearchIcon.classList.add('d-none');
      if (mblCloseIcon) mblCloseIcon.classList.remove('d-none');
    });
  }
  if (closeIcon && searchIframe) {
    closeIcon.addEventListener('click', function(e) {
      e.preventDefault();
      searchIframe.style.display = 'none';
      closeIcon.classList.add('d-none');
      if (searchIcon) searchIcon.classList.remove('d-none');
    });
  }
  if (mblCloseIcon && mblSearchIcon) {
    mblCloseIcon.addEventListener('click', function(e) {
      e.preventDefault();
      searchIframe.style.display = 'none';
      mblCloseIcon.classList.add('d-none');
      if (mblSearchIcon) mblSearchIcon.classList.remove('d-none');
    });
  }
  // Mobile menu toggle: toggle 'open' class on .navigation inside #dynamic-mb
  $('#dynamic-mb .mobile-nav-toggle').off('click.kajariaMobile').on('click.kajariaMobile', function () {
    $('#dynamic-mb .navigation').toggleClass('open');
    $('body').toggleClass('mobile-nav-open');
  });

  // Submenu toggles
  $('#dynamic-mb .submenu_toggle_link').off('click.kajariaMobile').on('click.kajariaMobile', function (e) {
    e.preventDefault();
    $('#dynamic-mb .sub_menu').not($(this).next('.sub_menu')).removeClass('sub_open');
    $('body').removeClass('mobile-subnav-open');
    $(this).next('.sub_menu').toggleClass('sub_open');
    $('body').toggleClass('mobile-subnav-open', $(this).next('.sub_menu').hasClass('sub_open'));
  });

  $('#dynamic-mb .sub_menu .close').off('click.kajariaMobile').on('click.kajariaMobile', function (e) {
    e.preventDefault();
    $(this).closest('.sub_menu').removeClass('sub_open');
    $('body').removeClass('mobile-subnav-open');
  });

  $(document).off('click.kajariaMobile').on('click.kajariaMobile', function (e) {
    if (!$(e.target).closest('#dynamic-mb .sub_menu, #dynamic-mb .submenu_toggle_link').length) {
      $('#dynamic-mb .sub_menu').removeClass('sub_open');
      $('body').removeClass('mobile-subnav-open');
    }
  });

  // Show iframe search bar when search icon is clicked (external only)
  $('#shared-header .search_ico_ .icon-search, #shared-header .search_ico_ .mobile_search, #shared-header .search_ico_ .hover_search').off('click.kajariaMobile').on('click.kajariaMobile', function () {
    var $iframe = $('#kajaria-search-iframe');
    if ($iframe.length) {
      $iframe.css('display', 'block');
    }
  });
}