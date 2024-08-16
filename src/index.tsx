import { createRenderer, Config, loadFonts } from "@lightningtv/solid";
import { HashRouter, Route } from "@solidjs/router";
import App from "./pages/App";
import HelloWorld from "./pages/HelloWorld";
import TextPage from "./pages/Text";
import NotFound from "./pages/NotFound";
import fonts from "./fonts";

Config.debug = false;
Config.fontSettings.fontFamily = "Roboto";
Config.fontSettings.color = 0xffffffff;
Config.rendererOptions = {
  numImageWorkers: 2,
  // Set the resolution based on window height
  // 720p = 0.666667, 1080p = 1, 1440p = 1.5, 2160p = 2
  deviceLogicalPixelRatio: window.innerHeight / 1080,
  enableInspector: true,
  // Increase to preload images coming from offscreen
  boundsMargin: 20,
};

const { render } = createRenderer();
loadFonts(fonts);
render(() => (
  <HashRouter root={App}>
    <Route path="/" component={HelloWorld} />
    <Route path="/text" component={TextPage} />
    <Route path="/*all" component={NotFound} />
  </HashRouter>
));
