<template>
  <svg width="344" height="372" viewBox="0 0 344 372" fill="none">
    <g>
      <rect
        ref="rect"
        x="0"
        width="350"
        height="372"
        clip-path="url(#clip-cup)"
        fill="url(#stroke-color)"
      />
      <rect
        ref="rect-flavor"
        x="0"
        width="350"
        height="372"
        clip-path="url(#clip-cup)"
        fill="url(#tea-flavor)"
      />
      <path
        d="M0 58H47M344 58H294M294 58L267 370H76L47 58M294 58H47"
        stroke="url(#stroke-color)"
        stroke-width="8"
      />
      <!-- dynamic stroke gradient of tea cup -->
      <defs>
        <linearGradient id="stroke-color" x1="172" y1="0" x2="172" y2="344">
          <stop :stop-color="cupFill.stop1" />
          <stop offset="1" :stop-color="cupFill.stop2" />
        </linearGradient>
      </defs>
      <!---->
      <!--dynamic gradient of tea flavor-->
      <defs>
        <linearGradient
          id="tea-flavor"
          x1="195"
          y1="0"
          x2="195"
          y2="273"
          gradientUnits="userSpaceOnUse"
        >
          <stop :stop-color="flavorColor.stop1" stop-opacity="0" />
          <stop
            offset="1"
            :stop-color="flavorColor.stop2"
            stop-opacity="0.56"
          />
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
    flavor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      fillColor: {
        green: { stop1: "#8ECC9F", stop2: "#00B78B" },
        black: { stop1: "#8C8C8C", stop2: "#081C17" },
        milk: { stop1: "#F5BF33", stop2: "#E3CA44" },
        orange: { stop1: "#FFD978", stop2: "#FFA928" },
        strawberry: { stop1: "#F8B1B1", stop2: "#F97B7B" },
        lemon: { stop1: "#ECFF78", stop2: "#FFF850" },
        kiwi: { stop1: "#9CFF8C", stop2: "#50FF96" },
        blueberry: { stop1: "#BDE7FF", stop2: "#82FFF7" },
      },
    };
  },
  computed: {
    cupFill() {
      return this.getGradientColor(this.tea);
    },
    flavorColor() {
      return this.getGradientColor(this.flavor);
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
    getGradientColor(type) {
      return {
        stop1: this.fillColor[type]
          ? this.fillColor[type].stop1
          : "#8FCCE7",
        stop2: this.fillColor[type]
          ? this.fillColor[type].stop2
          : "#8FCCE7",
      };
    },
  },
  watch: {
    tea(val, newVal) {
      if (val !== newVal) {
        this.toggleDomClass("rect", "fill");
      }
    },
    flavor(val, newVal) {
      if (val !== newVal) {
        this.toggleDomClass("rect-flavor", "fill");
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
      y: 80;
      transition: 0.4s ease-out;
    }
  }
}
</style>
