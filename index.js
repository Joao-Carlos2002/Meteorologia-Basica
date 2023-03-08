function getUrl(url) {
    let request = fetch(url)
        .then((result) => {
            result.json()
        })
        .then((data) => {
            data.json()
        })
        .catch((err) => {
            console.log("Deu errado")
        });
    return request;
}

function createElement(user) {

}

function main() {
    console.log(getUrl("https://api.hgbrasil.com/weather?key=870600af"))
}

main();