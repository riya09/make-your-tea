<template>
  <div class="container">
    <div class="tea-container">
      <div class="cup-wrapper">
        <TeaCup
          :tea="teaType"
          :flavor="teaFlavor"
          :pearl="pearl" />
      </div>
      <div class="option-wrapper">
        <transition name="slide-up" mode="out-in" appear>
          <TeaOption
            v-if="step === 1"
            header-text="Select tea"
            :options="teaOptions"
            :chosen-option="teaType"
            :key="1"
            alignment="column"
            @getSelected="getSelectedTea"
          />
          <TeaOption
            v-if="step === 2"
            header-text="Select flavor"
            :options="teaFlavors"
            :chosen-option="teaFlavor"
            :key="2"
            @getSelected="getSelectedFlavor"
          />
          <TeaOption
            v-if="step === 3"
            header-text="Want pearls?"
            alignment="column"
            :options="teaPearls"
            :chosen-option="pearl"
            :key="3"
            @getSelected="getSelectedPearl"
          />
        </transition>
        <div class="stepper" v-if="teaType && step <= 3">
          <transition-group name="fade" tag="div" class="stepper">
            <span
              v-if="stepper[step - 2]"
              :key="step-2"
              class="step prev"
              @click="step = step - 1">
              {{ stepper[step - 2] }}
            </span>
            <span
              v-if="stepper[step]"
              :key="step + 1"
              class="step next"
              @click="step = step + 1">
              {{ stepper[step] }}
            </span>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TeaCup from "@/components/cup/TeaCup.vue";
import TeaOption from "@/components/content/TeaOption.vue";

export default {
  name: "Container",
  components: {
    TeaCup,
    TeaOption,
  },
  data() {
    return {
      step: 1,
      teaType: "",
      teaFlavor: "",
      pearl: '',
      teaOptions: [
        {
          type: "green",
          text: "Green Tea",
        },
        {
          type: "black",
          text: "Black Tea",
        },
        {
          type: "milk",
          text: "Milk Tea",
        },
      ],
      teaFlavors: [
        {
          type: "strawberry",
          text: "Strawberry",
        },
        {
          type: "orange",
          text: "Orange",
        },
        {
          type: "kiwi",
          text: "Kiwi",
        },
        {
          type: "blueberry",
          text: "blueberry",
        },
        {
          type: "lemon",
          text: "Lemon",
        },
      ],
      teaPearls: [
        {
          type: "add",
          text: "Add Pearls",
        },
        {
          type: "remove",
          text: "No Pearls",
        },
      ],
      stepper: ['Tea', 'Flavor', 'Pearl'],
    };
  },
  methods: {
    getOptions() {
      if (this.step === 1) {
        return this.teaOptions;
      }
      if (this.step === 2) {
        return this.teaFlavors;
      }
      if (this.step === 3) {
        return this.teaPearls;
      }
      return [];
    },
    getSelectedTea(tea) {
      this.teaType = tea;
      this.step += 1;
    },
    getSelectedFlavor(flavor) {
      this.teaFlavor = flavor;
      this.step += 1;
    },
    getSelectedPearl(pearl) {
      this.pearl = pearl;
      this.step += 1;
    },
  },
};
</script>

<style lang="scss" scoped>
  .container {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    .tea-container {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      .cup-wrapper {
        padding: 10px 40px;
      }
      .option-wrapper {
        padding: 10px 20px;
        flex-basis: 300px;
        width: 300px;
        height: 240px;
        margin: 0 20px;
        box-shadow: 15px 20px 0 4px rgba(0,0,0,0.1);
        border-radius: 10px;
        background-color: var(--naples-yellow);
        overflow: hidden;
        position: relative;
        transition: transform 0.6s ease-out;
        transition-delay: 0.8s;
    .stepper {
          margin: 5px 0;
          position: absolute;
          left: 0;
          bottom: 10px;
          width: 100%;
          div {
            display: flex;
            position: relative;
        span {
          padding: 5px 10px;
              color: var(--frost);
          cursor: pointer;
              font-size: 12px;
              font-weight: 600;
          line-height: 20px;
              flex: 1 1 0;
              position: absolute;
              &.prev {
                text-align: left;
                left: 0;
                &:before {
                  content: '<';
                }
              }
              &.next {
                text-align: right;
                right: 0;
                &:after {
                  content: '>';
                }
              }
            }
          }
          }
        }
      }
  }
  .slide-up-enter-active, .slide-up-leave-active {
    transition: all 0.4s ease-out;
  }
  .slide-up-enter {
    opacity: 0;
    transform: translateY(50%);
  }
  .slide-up-leave-to {
    opacity: 0;
    transform: translateY(-50%);
    transition-delay: 0.6s;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.4s ease-out;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
