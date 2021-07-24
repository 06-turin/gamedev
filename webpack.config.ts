import clientConfig from './webpapck/client.config';
import serverConfig from './webpapck/server.config';
import { IS_DEV } from './webpapck/env';

const configs = [serverConfig];
if (!IS_DEV) {
  configs.push(clientConfig);
}

export default configs;
