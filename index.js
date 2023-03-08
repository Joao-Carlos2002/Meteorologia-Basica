function getUrl(url) {
    let request = fetch(url)
        .then((result) => {
            result.json()
        })
        .then((data) => {
            data.json()
        })
        .catch((err) => {
            console.log(err)
        });
    return request;
}

function createElement(user) {

}

function main() {
    let users = getUrl("https://api.hgbrasil.com/weather")
    console.log(users)
}

main();