function validator (obj) {
    let validMetod = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let uriPattern = /^[\w.]+$/g;
    let supportedVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let specialChr = [`<`, `>`, `\\`, `&`, `'`, `"`];



    if (!validMetod.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }
    if (!obj.hasOwnProperty('uri')) {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (obj.uri !== "*" && !obj.uri.match(uriPattern)) {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (!supportedVersion.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }
    if(!obj.hasOwnProperty('message')) {
        throw new Error('Invalid request header: Invalid Message');
    }
    
    for (const ch of obj.message) {
        if (specialChr.includes(ch)) {
            throw new Error('Invalid request header: Invalid Message');
        }
    }
    return obj
}
validator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
    });