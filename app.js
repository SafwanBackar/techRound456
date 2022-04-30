let form = document.querySelector('#upload');
let file = document.querySelector('#file');
let jsonInput = document.querySelector('#jsonInput')


form.addEventListener('submit', function (event) {
    event.preventDefault();
    let reader = new FileReader();
    reader.onload = function (event) {
        let str = event.target.result;
        let json = JSON.parse(str);
        jsonInput.innerHTML = ''
        addData(json)
        var P = document.createElement("BUTTON");
        P.setAttribute("type", "submit");
        P.innerHTML = 'Submit'
        P.style.backgroundColor = 'green'
        P.style.color = 'white'
        P.style.borderRadius = '2px'
        P.style.display = 'block'
        jsonInput.appendChild(P);
    };
    reader.readAsText(file.files[0]);
});

function addData(obj) {
    const data = Object.keys(obj)
    data.forEach(key => {
        if (typeof obj[key] === "string" || typeof obj[key] === "boolean") {
            jsonInput.append(key)
            var P = document.createElement("INPUT");
            P.setAttribute("type", typeof obj[key]);
            P.setAttribute('name', key)
            P.value = obj[key]
            P.style.display = 'block'
            P.style.padding = '10px 0'
            P.style.margin = '10px 0'
            jsonInput.appendChild(P);

        } else if (typeof obj[key] === "object") {
            jsonInput.append(key)
            console.log(key)
            addData(obj[key])
        }
    })
}



jsonInput.addEventListener('submit', function (event) {
    let obj = {}
    event.preventDefault();
    const form = new FormData(jsonInput);
    for (let [key, value] of form) {
        obj[key] = value
    }
    const jsonData = JSON.stringify(obj);
    const jsonToBlob = new Blob([jsonData], { type: 'text/plain' });
    const sFileName = 'updatedData.json';



    let newLink = document.createElement('a');
    newLink.download = sFileName;

    if (window.webkitURL !== null) {
        newLink.href = window.webkitURL.createObjectURL(jsonToBlob);
    }
    else {
        newLink.href = window.URL.createObjectURL(jsonToBlob);
        newLink.style.display = 'none';
        document.body.appendChild(newLink)

    }
    newLink.click();

})