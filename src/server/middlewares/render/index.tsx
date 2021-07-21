import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { Request, Response } from 'express';
import { App } from 'components/organisms/App/App';
import { StaticRouter } from 'react-router-dom';
import { StaticRouterContext } from 'react-router';
import { Provider } from 'react-redux';
import { RootState, store } from 'store/store';
import { renderObject } from 'utils/renderObject';

interface PageHtmlParams {
  // bundleName: string;
  bundleHtml: string;
  // data: {};
  reduxState: RootState;
}

function getPageHtml(params: PageHtmlParams) {
  const html = renderToStaticMarkup(
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="/main.css" />
        <title>Bomb Attack!</title>
      </head>
      <body>
        <div
          id="root"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: params.bundleHtml }}
        />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `window.__PRELOADED_STATE__ = ${renderObject(params.reduxState)}`,
          }}
        />
        <script src="/main.js" />
      </body>
    </html>,
  );

  return ` <!DOCTYPE html>${html}`;
}

export const ServerRenderMiddleware = (req: Request, res: Response) => {
  const location = req.url;
  const context: StaticRouterContext = {};

  const bundleHtml = renderToString(
    (
      <Provider store={store}>
        <StaticRouter context={context} location={location}>
          <App />
        </StaticRouter>
      </Provider>
    ),
  );

  const pageHtml = getPageHtml({
    bundleHtml,
    reduxState: store.getState(),
  });

  if (context.url) {
    res.redirect(context.url);
    return;
  }

  res
    .status(context.statusCode || 200)
    .send(pageHtml);
};
