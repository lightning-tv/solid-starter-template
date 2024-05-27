import { render as solidRender, Canvas } from '@lightningtv/solid';

const RenderOptions = {
  rootId: document.createElement('div')
};

export function render(Component) {
  return solidRender(() => (
    <Canvas options={RenderOptions}>
      <Component />
    </Canvas>
  ));
}
