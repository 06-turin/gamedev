/* eslint-disable import/no-unresolved */
import { store } from 'client';

declare global {
    namespace Express {
        interface Request {
            /** Logger instance associated with current request */
            logger: () => void;
        }

        interface Response {

            store: ReturnType<typeof store>,

            renderApp(): void

        }
    }
}
