export const searchFunction = () => {
    domainExtraction();
    pathExtraction();
    schemeExtraction();
    fetchcHttp();
}

const domainExtraction = () => {
    let URL = document.getElementById('findtext').value;
    let res = URL.split("/", 1);
    document.getElementById("textDomain").innerHTML = res;
}

const schemeExtraction = () => {
    document.getElementById("textScheme").innerHTML = "HTTP";
}

const pathExtraction = () => {
    let URL = document.getElementById('findtext').value;
    let res = URL.substring(URL.indexOf('/') + 1);
    document.getElementById("textPath").innerHTML = res;
}

const fetchcHttp = () => {
    fetch('https://run.mocky.io/v3/2883afdb-7c4f-4dad-bb72-5183e5a0c599', {
    })
        .then(response => response.json())
        .then(result => {
            document.getElementById("ResponseTextVersion").innerHTML = ("Version: " + result.response.version);
            document.getElementById("ResponseTextData").innerHTML = ("Date: " + result.response.data);
            document.getElementById("ResponseTextServer").innerHTML = ("Server: " + result.response.server);
            document.getElementById("ResponseTextLocation").innerHTML = ("Location: " + result.response.location);
            document.getElementById("ResponseTextServer2").innerHTML = ("Server: " + result.response.server);
            document.getElementById("ResponseTextVersion2").innerHTML = ("Version: " + result.response.version);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}