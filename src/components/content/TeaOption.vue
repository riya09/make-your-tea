<template>
  <ul>
    <li
     v-for="option in options"
     :key="option.type"
     >
      <input
        type="radio"
        name="tea-option"
        v-model="selectedOption"
        :value="option.type"
        :id="option.type"
        @change="getSelectedOption"
      />
      <label :for="option.type">
        {{ option.text }}
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => ([]),
    },
    chosenOption: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      selectedOption: this.chosenOption,
    };
  },
  methods: {
    getSelectedOption() {
      this.$emit("getSelected", this.selectedOption);
    },
  },
  watch: {
    chosenOption(val) {
      if (val) {
        this.selectedOption = val
      }
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 10px 0;
  padding: 0;
  width: 120px;
  max-width: 100%;
  li {
    input {
      display: none;
    }
    label {
      padding: 10px;
      display: block;
      cursor: pointer;
      background: transparent;
      color: #f86f97;
      transition: background 0.25s ease-out;
      font-size: 12px;
      border: 1px solid #f86f97;
      border-radius: 5px;
      text-align: center;
    }
    input:checked + label {
      background: #f86f97;
      color: #fff;
    }
    &:not(:last-of-type) {
      margin-bottom: 20px;
    }
  }
}
</style>
