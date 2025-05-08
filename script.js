document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.mySwiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: false,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  });