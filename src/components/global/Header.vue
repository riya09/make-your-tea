<template>
  <div id="header">
    <h1>Make Your Tea</h1>
    <a href="https://github.com/riya09/make-your-tea" target="_blank">
      <svg viewBox="0 0 16 16" width="14" height="14">
        <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
      <span>Fork</span>
    </a>
  </div>
</template>

<style lang="scss" scoped>

#header {
  position: sticky;
  top: 0;
  padding: 5px 10px;
  text-align: center;
  background: var(--frost);
  position: relative;
  h1 {
    color: var(--white);
    margin: 0;
    font-size: 32px;
    font-family: 'Lobster', cursive;
  }
  a {
    position: absolute;
    top: 10px;
    left: 94%;
    height: 15px;
    padding: 5px 15px;
    font-size: 11px;
    font-weight: 600;
    line-height: 14px;
    vertical-align: bottom;
    cursor: pointer;
    user-select: none;
    color: #24292f;
    background-color: #ebf0f4;
    display: flex;
    border-radius: 3px;
    text-decoration: none;
    svg {
      padding-right: 4px;
    }
  }
}
</style>
