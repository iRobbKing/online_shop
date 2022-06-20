<template>
  <div>
    <header>G2M</header>
    <side-bar class="side-bar"/>
    <main>
      <slot></slot>
    </main>
    <footer>Footer</footer>
  </div>
</template>

<style scoped lang="scss">
$header-footer-height: 5vh;
$side-bar-width: 12vw;

main {
  margin-top: $header-footer-height;
  margin-left: $side-bar-width;
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
}
</style>
