window.addEventListener('load', () => {
  document.querySelector('.preloader').style.display = 'none';
});

$('#about_me-link').click(function () {
  document.querySelector('.menu').classList.toggle('open');
  document.querySelector('.navBtn').classList.toggle('open');

  $('html, body').animate(
    {
      scrollTop: $('#index').offset().top - 112,
    },
    1000
  );
});

$('#resume-link').click(function () {
  document.querySelector('.menu').classList.toggle('open');
  document.querySelector('.navBtn').classList.toggle('open');
  $('html, body').animate(
    {
      scrollTop: $('#resume').offset().top - 112,
    },
    1000
  );
});

$('#resume-btn').click(function () {
  $('html, body').animate(
    {
      scrollTop: $('#resume').offset().top - 112,
    },
    1000
  );
});

$('#contact-btn').click(function () {
  $('html, body').animate(
    {
      scrollTop: $('#contact').offset().top - 112,
    },
    1000
  );
});

$('#contact-link').click(function () {
  document.querySelector('.menu').classList.toggle('open');
  document.querySelector('.navBtn').classList.toggle('open');
  $('html, body').animate(
    {
      scrollTop: $('#contact').offset().top - 112,
    },
    1000
  );
});

$('#portfolio-link, #portfolio-btn').click(function () {
  document.querySelector('.menu').classList.toggle('open');
  document.querySelector('.navBtn').classList.toggle('open');
  $('html, body').animate(
    {
      scrollTop: $('#portfolio').offset().top - 112,
    },
    1000
  );
});

$('#skills-link').click(function () {
  document.querySelector('.menu').classList.toggle('open');
  document.querySelector('.navBtn').classList.toggle('open');
  $('html, body').animate(
    {
      scrollTop: $('#skills').offset().top - 112,
    },
    1000
  );
});

document.querySelector('.navBtn').addEventListener('click', (e) => {
  document.querySelector('.menu').classList.toggle('open');
  document.querySelector('.navBtn').classList.toggle('open');
  // document.querySelector('.overlay').classList.toggle('open');
});

if (window.innerWidth < 1000) {
  document.querySelectorAll('.menu-list > li').forEach((li) => {
    // a.preventDefault(0)
    li.addEventListener('click', (e) => {
      li.querySelector('.menu-list-sub').classList.toggle('open');
      li.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
      });
      // console.log(this)
      // console.log(e)
    });
  });
}

$('.seemore-text').on('click', function () {
  $(this).parent().toggleClass('showContent');

  const replaceText = $(this).parent().hasClass('showContent') ? 'See less ' : 'See more ';
  $(this).text(replaceText);
});

$('.owl-carousel').owlCarousel({
  loop: true,
  responsiveClass: true,
  margin: 10,
  rtl: true,
  responsive: {
    0: {
      items: 1,
      // nav: true,
    },
    800: {
      items: 1,
      // nav: true,
    },
    1000: {
      items: 2,
    },
  },
});

let filterBtns = document.querySelectorAll('.filter-btn > a');
let filterItems = Array.from(document.querySelectorAll('.works-list__item'));
filterBtns.forEach((e, i) => {
  e.addEventListener('click', (event) => {
    event.preventDefault();
    filterBtns.forEach((ee) => ee.parentElement.classList.remove('active'));
    var clickedBtn = event.target;
    clickedBtn.parentElement.classList.add('active');

    var target_type = clickedBtn.dataset.type;
    filterItems.forEach((item) => {
      var type_list = JSON.parse(item.dataset.type);
      if (type_list.includes(target_type)) {
        item.classList.remove('hide');
      } else {
        item.classList.add('hide');
      }
    });
  });
});
