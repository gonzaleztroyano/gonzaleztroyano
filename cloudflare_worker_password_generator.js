addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request))
  })
  
   function genPassword() {
      var chars = "0123456789abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var passwordLength = 24;
      var password = "";
    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber +1);
      }
      return password;
      }
  
  async function handleRequest(request) {
    return new Response(genPassword(), {
      headers: { 'content-type': 'text/plain' },
    })
}