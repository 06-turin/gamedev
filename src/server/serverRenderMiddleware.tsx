import { renderToString } from 'react-dom/server';
import React from 'react';
import { App } from 'components/organisms/App/App';
import { StaticRouterContext } from 'react-router';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { Request, Response } from 'express';

function makeHTMLPage(content: string) {
  return `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta http-equiv="X-UA-Compatible" content="ie=edge">
              <title>Rendered on server</title>
          </head>
          <body>
              <div id="root">${content}</div>
              <script src="/bundle.js"></script>
          </body>
          </html>
      `;
}

export const serverRenderMiddleware = (req: Request, res: Response) => {
  const location = req.url;
  const context: StaticRouterContext = {};

  console.log('rendering on server');

  const jsx = (
    <Provider store={store}>
      <StaticRouter context={context} location={location}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const appContentHTML = renderToString(jsx);
  res.send(makeHTMLPage(appContentHTML));
};
