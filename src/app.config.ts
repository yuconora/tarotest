export default {
  pages: ["pages/index/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  "dynamicLib": {
    // 'myDynamicLib' 是个可自定义的别名。
    "myDynamicLib": {
      // provider 是要引用的动态库的名字，在此为 'swan-interaction'。
      "provider": "swan-interaction",
    },
  },
};
