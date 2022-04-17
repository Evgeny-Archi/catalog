import { IncomingMessage } from 'http';
import { urlKeysToSortedString, getUrlSearchParamsKeys } from '../lib/url-search-params';

const urlHandler = (template: string, req: IncomingMessage): string => {
    const { url, headers } = req;
    if (!url) return '';

    if (getUrlSearchParamsKeys(new URL(url, `http://${headers.host}`)).length === 0) {
        return new URL(template, `http://${headers.host}`).pathname;
    }

    if (
        urlKeysToSortedString(new URL(url, `http://${headers.host}`)) ===
        urlKeysToSortedString(new URL(template, `http://${headers.host}`))
    ) {
        return url;
    }

    return '';
};

export default urlHandler;
