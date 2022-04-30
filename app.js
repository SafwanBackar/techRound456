let form = document.querySelector('#upload');
let file = document.querySelector('#file');
// let jsonView = document.querySelector('#jsonView')

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!file.value.length) return;
    let reader = new FileReader();
    reader.onload = function (event) {
        let str = event.target.result;
        let json = JSON.parse(str);
        // jsonView.append(str)
        console.log(str);
    };
    reader.readAsText(file.files[0]);
});



