<template>
  <div>
    <header>
      <label for="list-collapse">=</label>
      G2M
    </header>
    <input id="list-collapse" type="checkbox">
    <side-bar class="side-bar"/>
    <main>
      <slot></slot>
    </main>
    <footer>2022</footer>
  </div>
</template>

<style scoped lang="scss">
$header-footer-height: 5vh;
$side-bar-width: 12vw;
$side-bar-left: $side-bar-width * -.66;

main {
  margin-top: $header-footer-height;
  margin-left: ($side-bar-width + $side-bar-left);
  height: calc(100% - $header-footer-height * 10);
}

header, footer {
  background-color: scale-color($app-color-theme, $lightness: -15%);
  width: 100%;
  height: $header-footer-height;
  line-height: $header-footer-height;
  padding-left: 2vh;
  position: fixed;
}

header {
  top: 0;
}

footer {
  bottom: 0;
}

.side-bar {
  background-color: scale-color($app-color-theme, $lightness: -7%);
  width: $side-bar-width;
  height: calc(100% - $header-footer-height * 2);
  position: fixed;
  top: $header-footer-height;
  left: $side-bar-left;
  transition: .25s all;
  z-index: 2;
}

.side-bar:hover {
  left: 0;
}

label, #list-collapse {
  display: none;
}

@media screen and(max-width: $app-mobile-width) {
  main {
    margin-left: 0;
  }

  .side-bar {
    width: 100%;
    height: auto;
    left: 0;
  }

  label {
    display: inline;
  }

  #list-collapse:checked ~ .side-bar {
    display: none;
  }
}
</style>
