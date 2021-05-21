export const searchFunction = () => {
    domainExtraction();
    pathExtraction();
    schemeExtraction();
}

const domainExtraction = () => {
    let URL = document.getElementById('findtext').value;
    let res = URL.split("/", 1);
    document.getElementById("textDomain").innerHTML = res;
}


const schemeExtraction = () => {
    let URL = document.getElementById('findtext').value;
    document.getElementById("textScheme").innerHTML = URL;

}

const pathExtraction = () => {
    let URL = document.getElementById('findtext').value;
    let res = URL.substring(URL.indexOf('/') + 1);
    document.getElementById("textPath").innerHTML = res;


}