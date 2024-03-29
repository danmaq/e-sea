import React from 'react';
import { render as domRender, hydrate } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// Your top level component
import App from './App';

// Export your top level component as JSX (for static rendering)
export default App;

// Render your app
if (typeof document !== 'undefined') {
  const target = document.getElementById('root');

  const renderMethod = target?.hasChildNodes() ? hydrate : domRender;

  const render = (Component: React.FC) => {
    renderMethod(
      <AppContainer>
        <Component />
      </AppContainer>,
      target
    );
  };

  // Render!
  render(App);

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept('./App', () => render(App));
  }
}
