const basic = {
  data() {
    return {
      items: 10,
    };
  },
  mounted() {
    console.log("ini basic mixins");
  },
  methods: {
    onPres() {
      console.log("ini dari onpres mixins");
    },
  },
};
export default basic;
