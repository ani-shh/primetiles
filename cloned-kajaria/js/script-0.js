

// // $(document).ready(function () {
// //     $('.mobile-carousel-wrapper').slick({
// //         dots: true,
// //         infinite: true,
// //         autoplay: true,
// //         autoplaySpeed: 5000,
// //         pauseOnFocus: false,
// //         pauseOnHover: true,
// //         slidesToShow: 1,
// //         slidesToScroll: 1,
// //         arrows: true,
// //         prevArrow: "<i class='icon-arrow-right k-left control-c prev slick-prev'></i>",
// //         nextArrow: "<i class='icon-arrow-left k-right control-c next slick-next'></i>",
// //         responsive: [
// //             {
// //                 breakpoint: 480,
// //                 settings: {
// //                     arrows: true,
// //                     dots: true
// //                 }
// //             }
// //         ]
// //     });
// // });

// function initSlickCarousel($carousel) {
//     if (!$carousel.hasClass('slick-initialized')) {
//         $carousel.slick({
//             dots: true,
//             // infinite: true,
//             autoplay: false,
//             autoplaySpeed: 5000,
//             pauseOnFocus: false,
//             pauseOnHover: true,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             arrows: true,
//             prevArrow: "<i class='icon-arrow-right k-left control-c prev slick-prev'></i>",
//             nextArrow: "<i class='icon-arrow-left k-right control-c next slick-next'></i>",
//             responsive: [
//                 {
//                     breakpoint: 480,
//                     settings: {
//                         arrows: true,
//                         dots: true
//                     }
//                 }
//             ]
//         });
//     }
// }

// $(document).ready(function () {
//     // Initialize Slick for the first tab
//     initSlickCarousel($('.tab-pane.show.active .mobile-carousel-wrapper'));

//     // On tab change
//     $('button[data-bs-toggle="pill"]').on('shown.bs.tab', function (e) {
//         let targetId = $(e.target).data('bs-target'); // e.g., #pills-category-slug
//         let $targetCarousel = $(targetId).find('.mobile-carousel-wrapper');
//         initSlickCarousel($targetCarousel);
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelectorAll('.video-thumbnail-overlay').forEach(thumbnail => {
//        thumbnail.addEventListener('click', () => {
//           const type = thumbnail.getAttribute('data-type');
//           const videoUrl = thumbnail.getAttribute('data-video-url');
//           const wrapper = thumbnail.nextElementSibling;
 
//           let embed;
 
//           if (type === 'url') {
//              embed = document.createElement('iframe');
//              embed.src = videoUrl;
//              embed.frameBorder = '0';
//              embed.allowFullscreen = true;
//              embed.allow = "autoplay; encrypted-media";
//              embed.className = 'w-100 h-100';
//           } else {
//              embed = document.createElement('video');
//              embed.src = videoUrl;
//              embed.controls = true;
//              embed.autoplay = true;
//              embed.className = 'w-100 h-100 object-fit-cover';
//           }
 
//           wrapper.innerHTML = '';
//           wrapper.appendChild(embed);
//           thumbnail.remove();
//        });
//     });
//  });
 