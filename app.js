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
        // jsonView.append(str)
        jsonInput.innerHTML = ''
        Object.keys(json).forEach(key => {
            jsonInput.append(key)
            // jsonInput.append(json[key])
            var P = document.createElement("INPUT");
            P.setAttribute("type", "text");
            for (let i = 0; i < key.length; i++) {
                P.value = 'ksj'
            }
            jsonInput.appendChild(P);
            // console.log(json[key])
            // if (json[key] === Boolean) {
            //     console.log(key)
            // }
        })
    };
    reader.readAsText(file.files[0]);
});



