export const buildUrl = (url: string, params: Record<string, string | number>) => {
    let newUrl = url;

    Object.entries(params).forEach(([key, value], i) => {
        const sign = !i ? "?" : "&";
        newUrl += `${sign}${key}=${value}`;
    });
    
    return newUrl;
};