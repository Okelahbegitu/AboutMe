export function ProjectGameSection() {
  return `
    <section class="relative min-h-screen overflow-hidden min-w-0 w-full">
      <div class="absolute inset-0 z-0">
        <div class="swiper gameproject-swiper gameproject-bg-slider absolute inset-0 w-full h-full" aria-label="Background gallery">
          <div class="swiper-wrapper h-full">
            <div class="swiper-slide relative isolate h-full bg-[url('/LiveInProject.png')] bg-cover bg-center">
              <div class="absolute inset-0 bg-black/60"></div>
              <div class="relative z-10 flex h-full items-end p-6 md:p-10 text-white">
                <div class="max-w-3xl space-y-2">
                  <h2 class="text-3xl md:text-5xl font-bold">Cheap</h2>
                  <p>Genre: Horror • Puzzle • ARG</p>
                  <p>Status: Discontinued for a while</p>
                  <p>
                    About: You want install some game in Cheap (Ilegal game platform), then you found lost-media game... because its
                    cracked version, you active anti-piracy system, you are in danger. Someone that
                    is not alive is watching you.
                  </p>
                </div>
              </div>
            </div>
            <div class="swiper-slide relative isolate h-full bg-[url('/RedJack.png')] bg-cover bg-center">
              <div class="absolute inset-0 bg-black/55"></div>
              <div class="relative z-10 flex h-full items-end p-6 md:p-10 text-white">
                <div class="max-w-3xl space-y-2">
                  <h2 class="text-3xl md:text-5xl font-bold">Red Jack</h2>
                  <p>Genre: PvB, Card</p>
                  <p>Status: Published (Version 0.8)</p>
                  <p>About: It is like BlackJack, but red.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  `;
}