import { Elm } from './elm.js';
import { renderReactComponent } from './reactBridge.js';

const app = Elm.Main.init({
  node: document.getElementById('elm-root')
});

app.ports.renderReact.subscribe(({ divId, initialValue }) => {
  renderReactComponent(divId, {
    initialValue,
    onChange: (newValue) => app.ports.receiveFromReact.send(newValue)
  });
});
