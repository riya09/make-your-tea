<template>
  <div class="tea-container">
    <TeaCup
      :tea="teaType"
      :flavor="teaFlavor"
      :pearl="pearl" />
    <div class="stepper">
      <span v-if="teaType" @click="step = 1">{{ teaType }}</span>
      <span v-if="teaFlavor" @click="step = 2">{{ teaFlavor }}</span>
      <span v-if="pearl" @click="step = 3">
      {{ pearl === 'add' ? 'Pearls' : 'No Pearls' }}
      </span>
    </div>
    <TeaOption
      v-if="step === 1"
      :options="teaOptions"
      :chosen-option="teaType"
      @getSelected="getSelectedTea"
    />
    <TeaOption
      v-if="step === 2"
      :options="teaFlavors"
      :chosen-option="teaFlavor"
      @getSelected="getSelectedFlavor"
    />
    <TeaOption
      v-if="step === 3"
      :options="teaPearls"
      :chosen-option="pearl"
      @getSelected="getSelectedPearl"
    />
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
.tea-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
  .stepper {
    margin: 20px 0;
    span {
      display: inline-block;
      padding: 5px 10px;
      background-color: #6fdbff;
      border-radius: 20px;
      color: #fff;
      cursor: pointer;
      font-size: 14px;
      line-height: 20px;
      width: 80px;
      text-align: center;
      &:not(:last-of-type) {
        margin-right: 5px;
      }
    }
  }
</style>
