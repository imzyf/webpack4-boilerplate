import "./css/reset.css";
import "./scss/public.scss";
import bgImg from "./images/spikes.png";

var func = str => {
  document.getElementById("app").innerHTML = str;
};
func("我现在在使用 es6 新语法-箭头函数!");

document.getElementById("postcss").innerHTML =
  "<h1>我自动添加了浏览器前缀</h1><img src='" + bgImg + "'/>";
