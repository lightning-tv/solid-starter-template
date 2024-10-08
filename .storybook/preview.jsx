import { createRenderer, Config, loadFonts } from "@lightningtv/solid";
import { useFocusManager } from "@lightningtv/solid/primitives";
import { WebGlCoreRenderer, SdfTextRenderer } from "@lightningjs/renderer/webgl";
import { Inspector } from "@lightningjs/renderer/inspector";
import fonts from "../src/fonts";

Config.rendererOptions = {
  rootId: "storybook-root",
  appWidth: 800,
  appHeight: 600,
  fontEngines: [SdfTextRenderer],
  renderEngine: WebGlCoreRenderer,
  inspector: Inspector,
  devicePhysicalPixelRatio: 1,
};

Config.fontSettings.fontFamily = "Ubuntu";
Config.fontSettings.color = 0xffffffff;

let dispose;
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    Story => {
      const solidRoot = document.createElement("div");
      // teardown previous render (cleans up keyhandling)
      if (dispose) {
        dispose();
      }

      const { render } = createRenderer(undefined, solidRoot);
      loadFonts(fonts);

      dispose = render(() => {
        useFocusManager();
        return <Story />;
      });

      return solidRoot;
    },
  ],
};

export default preview;
