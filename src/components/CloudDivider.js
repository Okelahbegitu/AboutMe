export function CloudDivider() {
  return `
    <div class="relative z-30 h-0 pointer-events-none" aria-hidden="true">
      <div
        class="absolute inset-x-0  h-20 bg-repeat-x bg-bottom-left bg-size-[auto_100%] image-pixel"
        style="background-image: url('/CloudBorder.png');"
      ></div>
    </div>
  `;
}
