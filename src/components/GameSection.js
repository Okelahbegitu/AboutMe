export function GameSection() {
  return `
    <section class="w-full bg-[url('/Hall.png')] h-screen bg-cover bg-center bg-no-repeat px-4 py-10">
      <div class="mx-auto w-full max-w-6xl mt-00 h-full flex flex-col items-center justify-center">
        <h2 class="mb-8 text-center text-7xl font-bold font-press-start drop-shadow-[0_2px_0_rgba(0,0,0,0.8)]">
          My Favorie GameS
        </h2>

        <div class="embla w-full" role="group" aria-label="Game carousel">
          <div class="embla__viewport w-full h-64 overflow-hidden">
            <div class="embla__container h-64">
              <div class="embla__slide embla__slide--ghost" aria-hidden="true"></div>
              <div class="embla__slide embla__slide--ghost" aria-hidden="true"></div>

              <div class="embla__slide pixel-panel bg-black flex items-center h-64 justify-center p-4 rounded-2xl">
                <img src="/Undertale.png" alt="Undertale Cover" class=" object-cover rounded-xl" />
              </div>
              <div class="embla__slide pixel-panel bg-black flex items-center h-64 justify-center p-4 rounded-2xl">
                <img src="/Deltarune.png" alt="Deltarune Cover" class=" object-cover rounded-xl" />
              </div>
              <div class="embla__slide pixel-panel bg-black flex items-center h-64 justify-center p-4 rounded-2xl">
                <img src="/Portal2.webp" alt="Portal 2" class=" object-cover rounded-xl" />
              </div>
              <div class="embla__slide pixel-panel bg-green-700 flex items-center h-64 justify-center p-4 rounded-2xl">
                <img src="/Minecraft.webp" alt="Minecraft" class=" object-cover rounded-xl" />
              </div>
              <div class="embla__slide pixel-panel bg-blue-500 flex items-center h-64 justify-center p-4 rounded-2xl">
                <img src="/Subnautica.png" alt="Subnautica" class=" object-cover rounded-xl" />
              </div>

              <div class="embla__slide embla__slide--ghost" aria-hidden="true"></div>
              <div class="embla__slide embla__slide--ghost" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}