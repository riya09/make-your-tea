<template>
<div class="option-container">
  <h2>{{ headerText }}</h2>
  <ul :class="alignment">
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
</div>
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
    },
    headerText: {
      type: String,
      default: '',
    },
    alignment: {
      type: String,
      default: 'row',
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
  .option-container {
    width: inherit;
    height: auto;
    text-align: center;
    margin-top: 10px;
    ul {
      list-style: none;
      margin: 10px 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      li {
        width: 85px;
        max-width: 100%;
        &:not(:last-of-type) {
          margin-right: 5px;
        }
        input {
          display: none;
        }
        label {
          padding: 10px;
          display: block;
          cursor: pointer;
          background: transparent;
          color: var(--frost);
          transition: background 0.25s ease-out;
          font-size: 12px;
          border: 1px solid var(--frost);
          border-radius: 20px;
          text-align: center;
        }
        input:checked + label {
          background: var(--frost);
          color: var(--white);
        }
        &:not(:last-of-type) {
          margin-bottom: 15px;
        }
      }
    }
    ul.column {
      flex-direction: column;
      align-items: center;
      li {
        width: 80%;
      }
    }
  }
</style>
