Component({
  options: {
    multipleSlots: true,
  },
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: "default value",
    },
    listData: {
      type: Array,
      value: [],
    },
  },
  data: {
    txt: "first",
  },
  observers: {
    listData(list) {
      console.log("trigger");
      this.setData({ txt: list.join(",") });
    },
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () {},
  },
});
