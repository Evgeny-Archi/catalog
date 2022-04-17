export const getUrlSearchParamsKeys = (url: URL): string[] => {
    return Array.from(url.searchParams.keys());
};

export const getUrlSearchParamsValues = (url: URL): string[] => {
    return Array.from(url.searchParams.values());
};

export const urlKeysToSortedString = (url: URL): string => {
    const stringifyKeys = getUrlSearchParamsKeys(url).join('');
    return [...stringifyKeys].sort().join('');
};
