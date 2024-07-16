import { SdfTrFontFace } from "@lightningjs/renderer";

const basePath = ""; //import.meta.env.BASE_URL || '/';

export function loadFonts(stage) {
  stage.fontManager.addFontFace(
    new SdfTrFontFace("msdf", {
      fontFamily: "Ubuntu",
      descriptors: {
        weight: 700,
      },
      atlasDataUrl: basePath + "fonts/Ubuntu-Bold.msdf.json",
      atlasUrl: basePath + "fonts/Ubuntu-Bold.msdf.png",
      stage,
    }),
  );
  stage.fontManager.addFontFace(
    new SdfTrFontFace("msdf", {
      fontFamily: "Ubuntu",
      descriptors: {
        weight: 400,
      },
      atlasDataUrl: basePath + "fonts/Ubuntu-Regular.msdf.json",
      atlasUrl: basePath + "fonts/Ubuntu-Regular.msdf.png",
      stage,
    }),
  );

  stage.fontManager.addFontFace(
    new SdfTrFontFace("msdf", {
      fontFamily: "Arial",
      descriptors: {
        weight: 500,
      },
      atlasDataUrl: basePath + "fonts/Ubuntu-Regular.msdf.json",
      atlasUrl: basePath + "fonts/Ubuntu-Regular.msdf.png",
      stage,
    }),
  );
}
