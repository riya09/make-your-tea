<template>
  <svg width="344" height="372" viewBox="0 0 344 372" fill="none">
    <g>
      <rect
        ref="rect"
        x="0"
        width="350"
        height="372"
        clip-path="url(#clip-cup)"
        :fill="cupFill"
      />
      <path
        d="M0 58H47M344 58H294M294 58L267 370H76L47 58M294 58H47"
        stroke="url(#stroke-color)"
        stroke-width="8"
      />
      <!-- dynamic stroke gradient of tea cup -->
      <defs>
        <linearGradient id="stroke-color" x1="172" y1="0" x2="172" y2="344">
          <stop :stop-color="cupStroke.stop1" />
          <stop offset="1" :stop-color="cupStroke.stop2" />
        </linearGradient>
      </defs>
      <!---->
      <!--clip path of cup-->
      <defs>
        <clipPath id="clip-cup">
          <path d="M0 58H47M344 58H294M294 58L267 370H76L47 58M294 58H47" />
        </clipPath>
      </defs>
      <!---->
    </g>
    <path d="M268 1L217 234" stroke="#8FCCE7" stroke-width="8" />
  </svg>
</template>


<script>
export default {
  props: {
    tea: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      strokeColor: {
        green: { stop1: "#8ECC9F", stop2: "#00B78B" },
        black: { stop1: "#8C8C8C", stop2: "#081C17" },
        milk: { stop1: "#F5BF33", stop2: "#E3CA44" },
      },
    };
  },
  computed: {
    cupStroke() {
      const teaType = this.tea;
      return {
        stop1: this.strokeColor[teaType]
          ? this.strokeColor[teaType].stop1
          : "#8FCCE7",
        stop2: this.strokeColor[teaType]
          ? this.strokeColor[teaType].stop2
          : "#8FCCE7",
      };
    },
    cupFill() {
      return this.tea && this.strokeColor[this.tea]
        ? this.strokeColor[this.tea].stop1
        : "none";
    },
  },
  methods: {
    toggleDomClass(refName, className) {
      if (this.$refs[refName]) {
        this.$refs[refName].classList.remove(className);
        setTimeout(() => {
          this.$refs[refName].classList.add(className);
        }, 100);
      }
    },
  },
  watch: {
    tea(val, newVal) {
      if (val !== newVal) {
        this.toggleDomClass("rect", "fill");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
svg {
  width: 200px;
  height: auto;
  rect {
    y: 372;
    &.fill {
      y: 100;
      transition: 0.4s ease-out;
    }
  }
}
</style>
