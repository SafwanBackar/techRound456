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
        // console.log(json)
        // jsonView.append(str)
        jsonInput.innerHTML = ''
        const data = Object.keys(json)
        console.log(data)
        // const dataAdding=()=>{

        // }
        data.forEach(key => {
            jsonInput.append(key)
            var P = document.createElement("INPUT");
            P.setAttribute("type", typeof json[key]);
            P.setAttribute('name', key)
            P.value = json[key]
            console.log(json[key])
            jsonInput.appendChild(P);
        })
        var P = document.createElement("BUTTON");
        P.setAttribute("type", "submit");
        P.innerHTML = 'Submit'
        jsonInput.appendChild(P);
    };
    reader.readAsText(file.files[0]);
});



