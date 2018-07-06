let model;

const modelURL = 'http://localhost:5000/model';

const preview = document.getElementById("preview");
const predictButton = document.querySelector("#predict");
const clearButton = document.querySelector("#clear");


const predict = async (modelURL) => {
    if (!model) model = await tf.loadModel(modelURL);
    let files = document.getElementById('file').files;

    [...files].map(async (img) => {
        const data = new FormData();
        data.append('file', img);

        const image = await fetch("/api/prepare",
            {
                method: 'POST',
                body: data
            }).then(response => {
            return response.json();
        }).then(t => {
            return tf.tensor2d(t['image']);
        });
        const im = tf.reshape(image, shape = [1, 28, 28, 1]);
        const prediction = model.predict(im);
        const label = prediction.argMax(axis = 1).get([0]);

        const reader = new FileReader();
        reader.onload = () => {
            preview.innerHTML += `<div class="image-block">
                                      <img src="${reader.result}" class="image-block_loaded" id="source"/>
                                       <h2 class="image-block__label">${label}</h2>
                                      </div>`;

        };
        reader.readAsDataURL(img);
    })

};


predictButton.addEventListener("click", () => predict(modelURL));
clearButton.addEventListener("click", () => preview.innerHTML = "");
