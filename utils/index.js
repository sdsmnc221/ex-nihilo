const truncate = (str, ln = 96, ellipsis= true ) => str.substring(0, ln) + (ellipsis ? '...' : '');

export { truncate };