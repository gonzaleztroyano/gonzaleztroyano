addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request))
})

function genPassword(pathname) {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (pathname == '/') {
        var passwordLength = 24;
    } else {
        pathname = parseInt(pathname.substr(1));
        var passwordLength = pathname;
    }
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    console.log('Ver código: https://pglez.es/genera-password-code');
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
