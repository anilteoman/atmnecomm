export function getOptimizedProductImg(url, width = 600) {
    return `${url}?auto=compress&cs=tinysrgb&w=${width}`;
}