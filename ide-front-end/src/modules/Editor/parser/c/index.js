function Parser(src) {
    const idx = src.indexOf('main');
    if(idx !== -1) {
        return [{index: idx, type: "MACRO", token: "main"}]
    }
    return [];
}

export default Parser;