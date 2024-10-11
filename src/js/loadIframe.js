export default function loadIframe() {
  const videoThumb = document.querySelector("[data-video-thumb]");
  const markupIframe = `
    <iframe
      width="406"
      height="722"
      class="w-100 h-100"
      src="https://www.youtube.com/embed/-3o6z9pg_uE"
      title="tem queijo ou não tem queijo?"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  `;

  videoThumb.addEventListener(
    "click",
    function () {
      this.insertAdjacentHTML("beforeend", markupIframe);
    },
    { once: true }
  );
}
