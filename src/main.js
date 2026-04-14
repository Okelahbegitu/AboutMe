import './style.css';
import 'swiper/css/bundle';
import 'aos/dist/aos.css';

import AOS from 'aos';
import Swiper from 'swiper/bundle';
import EmblaCarousel from 'embla-carousel';
import Chart from 'chart.js/auto';

import { renderApp } from './App';

renderApp(document.getElementById('site-root'));

initIntroScreen();
initAos();
initHeroSlider();
initEmblaCarousels();
initGameProjectSlider();
initProgrammingChart();

function initIntroScreen() {
  const intro = document.getElementById('intro');
  const logo = document.getElementById('logo');

  if (logo) {
    logo.classList.add('glow');
  }

  if (!intro) {
    return;
  }

  intro.style.transition = 'opacity 500ms ease';

  window.setTimeout(() => {
    intro.style.opacity = '0';
    intro.style.pointerEvents = 'none';
  }, 2000);

  intro.addEventListener(
    'transitionend',
    () => {
      intro.remove();
    },
    { once: true },
  );
}

function initAos() {
  AOS.init({ once: true });
}

function initHeroSlider() {
  const heroSlider = document.querySelector('.hero-swiper');
  if (!heroSlider) {
    return;
  }

  new Swiper(heroSlider, {
    loop: true,
    speed: 1000,
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
  });
}

function initEmblaCarousels() {
  const emblaRoots = document.querySelectorAll('.embla');
  if (!emblaRoots.length) return;

  emblaRoots.forEach((root) => {
    const viewport = root.querySelector('.embla__viewport');
    if (!viewport) return;

    const slides = Array.from(root.querySelectorAll('.embla__slide'));
    const firstRealSlideIndex = slides.findIndex(
      (slide) => !slide.classList.contains('embla__slide--ghost'),
    );
    const startIndex = firstRealSlideIndex >= 0 ? firstRealSlideIndex : 0;

    const embla = EmblaCarousel(viewport, {
      loop: false,
      align: 'center',
      dragFree: false,
      containScroll: 'keepSnaps',
      slidesToScroll: 1,
      startIndex,
    });

    const updateSelectedSlide = () => {
      const selectedIndex = embla.selectedScrollSnap();
      slides.forEach((slide, index) => {
        const isGhost = slide.classList.contains('embla__slide--ghost');
        slide.classList.toggle('selected', !isGhost && index === selectedIndex);
      });
    };

    embla.on('init', updateSelectedSlide);
    embla.on('reInit', updateSelectedSlide);
    embla.on('select', updateSelectedSlide);
    updateSelectedSlide();
  });
}



function initProgrammingChart() {
  const canvas = document.getElementById('programing-chart');
  if (!(canvas instanceof HTMLCanvasElement)) {
    return;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    return;
  }

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['C# (Unity)', 'Java', 'Js', 'Lua (Roblox)'],
      datasets: [
        {
          label: 'Mastery Level %',
          data: [45, 25, 30, 5],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#ffffff',
          },
        },
      },
    },
  });
}

function initGameProjectSlider() {
  const gameProjectSlider = document.querySelector('.gameproject-swiper');
  if (!gameProjectSlider) {
    return;
  }

  new Swiper(gameProjectSlider, {
    loop: true,
    speed: 1000,
    allowTouchMove: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
  });
}