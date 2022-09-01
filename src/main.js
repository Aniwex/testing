import Vue from "vue";
import App from "./App.vue";

const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "login.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(8080, () => {
  console.log("JSON Server is running");
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
