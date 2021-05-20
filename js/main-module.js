
export const SearchFunction = () => {
    let URL = document.getElementById('findtext').value;
    let res = URL.split("/", 1);
    console.log(res);
    document.getElementById("textDomain").innerHTML = res;
}