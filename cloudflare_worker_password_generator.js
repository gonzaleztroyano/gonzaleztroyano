addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request))
})

function genPassword(pathname) {
    let regex_num = new RegExp('^\/[0-9]+$');
    let regex_alpha = new RegExp('^\/[a,n,A]+$');
    let regex_alphanum = new RegExp('^\/[0-9]+\/[a,n,A]+$');
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!#$%&()*+,-./:;<=>?@[\]^_{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (pathname == '/') {
        var passwordLength = 24;
    } else if (regex_num.test(pathname)) {
        pathname = parseInt(pathname.substr(1));
        var passwordLength = pathname;
    } else if (regex_alpha.test(pathname)) {
        var passwordLength = 24;
        pathname = pathname.substr(1);
        if (pathname == 'a') {
            var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        } else if (pathname == 'n') {
            var chars = "1234567890";
        } else if (pathname == 'A'){
            var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        } else {
            return "ERROR en la solicitud. +info: https://pglez.es/genera-password-overview - 1";
        }
    } else if (regex_alphanum.test(pathname)) {
        let gen_opt = pathname.substr(-1);
        var passwordLength = parseInt(pathname.substr(1).slice(0, -2));
        if (gen_opt == 'a') {
            var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        } else if (gen_opt == 'n') {
            var chars = "1234567890";
        } else if (gen_opt == 'A'){
            var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        } else {
            return "ERROR en la solicitud. +info https://pglez.es/genera-password-overview - 2";
        }
    } else {
        return "ERROR en la solicitud. +info: https://pglez.es/genera-password-overview - 3";
    }
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    console.log('Más información: https://pglez.es/genera-password-overview');
    return password;
}

async function handleRequest(request) {
    const url = new URL(request.url);
    return new Response(genPassword(url.pathname), {
        headers: { 'content-type': 'text/plain' },
    })
}

// Esta obra se publica bajo la licenca Creative Commons BY 4.0 Internacional.
// Autor y año de publicación: Pablo González, 2022
// https://creativecommons.org/licenses/by/4.0/deed.en 
