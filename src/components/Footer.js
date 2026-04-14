export function Footer() {
  return `
    <footer class="mt-45 bg-[#7141ad] text-white text-center py-6">
      <div class="px-4">
        <h2 class="text-3xl mb-3">Contact Me</h2>
        <div class="flex flex-col md:flex-row justify-center items-center gap-3 mt-3">
          <a
            class="pixel-panel pixel-panel-compact footer-contact-btn bg-blue-500"
            href="https://discord.com/users/981723864549707857"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p class="text-white font-press-start text-[11px]">Discord</p>
            <img src="/Discord.png" class="w-8 h-8" alt="Discord Icon" />
          </a>

          <a
            class="pixel-panel pixel-panel-compact footer-contact-btn bg-orange-500"
            href="https://instagram.com/brody.cs109"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p class="text-white font-press-start text-[11px]">Instagram</p>
            <img src="/Instagram.png" class="w-8 h-8" alt="Instagram Icon" />
          </a>
        </div>
      </div>
    </footer>
  `;
}