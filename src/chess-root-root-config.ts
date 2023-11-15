import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@chess/board",
  app: () => System.import<LifeCycles>("@chess/board"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
