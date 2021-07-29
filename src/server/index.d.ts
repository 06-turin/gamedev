declare global {
    namespace Express {
        interface Request {
            /** Logger instance associated with current request */
            logger: () => void;
        }

    }
}
