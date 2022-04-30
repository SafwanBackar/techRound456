let form = document.querySelector('#upload');
let file = document.querySelector('#file');
let jsonInput = document.querySelector('#jsonInput')
// let jsonView = document.querySelector('#jsonView')

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
        jsonInput.appendChild(P);
    };
    reader.readAsText(file.files[0]);
});


function addData(obj) {
    const data = Object.keys(obj)
    console.log(data)

    data.forEach(key => {
        if (typeof obj[key] === "string" || typeof obj[key] === "boolean") {
            console.log("hii i am in first case");
            jsonInput.append(key)
            var P = document.createElement("INPUT");
            console.log(typeof obj[key])
            P.setAttribute("type", typeof obj[key]);
            P.setAttribute('name', key)
            P.value = obj[key]
            console.log(obj[key])
            jsonInput.appendChild(P);

        } else if (typeof obj[key] === "object") {
            jsonInput.append(key)
            console.log(key)
            addData(obj[key])
            console.log("an object")

        }
    })

}
