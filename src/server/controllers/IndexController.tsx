import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';
import { App } from 'components/organisms/App/App';
import { StaticRouterContext } from 'react-router';
import { RootState } from 'store/store';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { Request, Response } from 'express';

function makeHTMLPage(content: string, reduxState: RootState) {
  return `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta http-equiv="X-UA-Compatible" content="ie=edge">
              <title>Rendered on server</title>
              <link href="/main.css" rel="stylesheet">
          </head>
          <body>
              <div id="root">${content}</div>
              <script>
                window.__INITIAL_STATE__ = ${JSON.stringify({ ...reduxState })}
              </script>
              <script src="/main.js"></script>
          </body>
          </html>
      `;
}

export const IndexController = {

  renderApp: (req: Request, res: Response) => {
    const location = req.url;
    const context: StaticRouterContext = {};

    const jsx = (
      <Provider store={res.store}>
        <StaticRouter context={context} location={location}>
          <App />
        </StaticRouter>
      </Provider>
    );

    const reduxState = res.store.getState();

    if (context.url) {
      res.redirect(context.url);
      return;
    }

    const appContentHTML = renderToStaticMarkup(jsx);

    res
      .status(context.statusCode || 200)
      .send(makeHTMLPage(appContentHTML, reduxState));
  },
};
