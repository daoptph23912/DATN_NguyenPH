import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider as StoreProvider } from "react-redux";
import { Translation } from "react-i18next";
import "./assets/styles/default.scss";
import { RootApp } from './routes';
import store from './services/store/store';
import "../src/assets/language/LangConfig"
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <StoreProvider store={store}>
      <Translation>
        {(translation) => (
          <div>
            <RootApp translation={translation} />
          </div>
        )}
      </Translation>
    </StoreProvider>
  </BrowserRouter>
);
