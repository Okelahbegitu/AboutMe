export function ProfileSection() {
  return `
    <section class="flex flex-col gap-8 bg-blue-300 px-4 sm:px-8 lg:flex-row lg:justify-between lg:px-15">
      <div class="mt-15 w-full lg:w-auto">
        <h2 class="text-4xl font-bold mb-4">About Me</h2>
        <div class="pixel-panel box-border w-full max-w-[500px] bg-[#e5d8c3] p-4">
          <div class="flex gap-4 items-center">
            <div class="w-24 h-32 bg-[#7141AD] flex items-center justify-center">
              <img src="/BrodyHead.png" class="w-16" alt="Brody profile" />
            </div>

            <div class="text-black text-sm space-y-1">
              <p><span class="font-bold">Name:</span> Muhammad Fardan</p>
              <p><span class="font-bold">Birth:</span> Aug 4, 2009</p>
              <p><span class="font-bold">Location:</span> Samarinda</p>
              <p><span class="font-bold">Hobbies:</span> Coding, Gaming</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-15 w-full lg:w-auto">
        <h2 class="text-2xl font-bold mb-4">Programming Languages I Use</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div class="pixel-panel box-border w-full bg-[#7141AD] flex justify-center">
            <div class="w-fit h-34">
              <canvas id="programing-chart"></canvas>
            </div>
          </div>
          <div class="flex justify-center">
            <img src="/BrodyWorking.gif" class="w-50 image-pixel block rounded-full" alt="Brody working animation" />
          </div>
        </div>
      </div>
    </section>
    
  `;
}
