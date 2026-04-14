export function HeroSection() {
  return `
    <section class="relative min-h-screen overflow-hidden min-w-0 w-full">
      <div class="absolute inset-0 z-0">
        <div class="swiper hero-swiper hero-bg-slider absolute inset-0 w-full h-full" aria-label="Background gallery">
          <div class="swiper-wrapper h-full">
            <div class="swiper-slide h-full"><img src="/liveIncode.png" class="w-full h-full object-cover" alt="Live in code" /></div>
            <div class="swiper-slide h-full"><img src="/3dmodel.png" class="w-full h-full object-cover" alt="3D model project" /></div>
            <div class="swiper-slide h-full"><img src="/LiveInProject.png" class="w-full h-full object-cover" alt="Live project" /></div>
          </div>
        </div>
      </div>

      <div class="absolute inset-0 bg-black/60 z-10"></div>

      <div data-aos="fade-up" data-aos-delay="2000" class="relative z-20 min-h-full p-15">
        <h1 class="text-4xl font-bold mb-4 text-white">Hi, I'm Brody!</h1>

        <p class="text-[#FA9A1D] mt-2">Game Developer • Pixel Artist • 3D Modeler Low Poly</p>

        <p class="text-gray-400 mt-3">
          A junior developer who enjoys coding, making games, and pixel art.
        </p>

        <div data-aos="fade-right" data-aos-delay="2000" class="flex space-x-4 mt-6">
          <img src="/processed_image.png" class="h-8" alt="Unity" />
          <img src="/Logo_Aseprite.svg.png" class="w-8" alt="Aseprite" />
          <img src="/processed_cs (1).png" class="w-8" alt="C Sharp" />
          <img src="/BlockBench.webp" class="w-8" alt="BlockBench" />
        </div>
      </div>
    </section>
  `;
}
