<template>
  <button class="btn btn-primary bg-brand-primary-dark dark:bg-brand-primary-light hover:!bg-brand-primary-lighter">Button</button>
  <button
    type="button"
    data-theme="custom-theme"
    class="btn btn-primary"
    aria-haspopup="dialog"
    aria-expanded="false"
    aria-controls="overlay-example"
    data-overlay="#overlay-example"
  >
    Open drawer
  </button>

  <div
    id="overlay-example"
    class="overlay overlay-open:translate-x-0 drawer drawer-end hidden"
    role="dialog"
    tabindex="-1"
  >
    <div class="drawer-header">
      <h3 class="drawer-title">Drawer Title</h3>
      <button
        type="button"
        class="btn btn-text btn-circle btn-sm absolute end-3 top-3"
        aria-label="Close"
        data-overlay="#overlay-example"
      >
        <span class="icon-[tabler--x] size-5"></span>
      </button>
    </div>
    <div class="drawer-body">
      <p>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </p>
    </div>
    <div class="drawer-footer">
      <button
        type="button"
        class="btn btn-soft btn-secondary"
        data-overlay="#overlay-example"
      >
        Close
      </button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>

  <div class="mockup-browser bg-base-300">
  <div class="mockup-browser-toolbar">
    <div class="input bg-base-200">https://flyonui.com</div>
  </div>
  <div class="flex h-80 justify-center"><img class="w-full object-cover" src="https://cdn.flyonui.com/fy-assets/components/carousel/image-14.png" alt="browser background" /></div>
</div>
</template>
