import "@tarojs/async-await";
import Taro, { Component } from "@tarojs/taro";
import Index from "./pages/index";

import "./app.css";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== "production" && process.env.TARO_ENV === "h5") {
//   require("nerv-devtools");
// }

class App extends Component {
  config = {
    pages: ["pages/index/index"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

export const mount = async () => {
  console.log("mount");
  Taro.render(<App />, document.getElementById("app"));
};

export async function unmount() {
  console.log("unmount");
  Taro.unmountComponentAtNode(document.getElementById("app"));
}

window.mount = mount;
window.unmount = unmount;
