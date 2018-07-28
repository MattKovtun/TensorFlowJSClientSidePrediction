let model;


const modelURL = 'http://46.101.201.216/model';

const preview = document.getElementById("preview");
const predictButton = document.getElementById("predict");
const clearButton = document.getElementById("clear");
const numberOfFiles = document.getElementById("number-of-files");
const fileInput = document.getElementById('file');

const predict = async (modelURL) => {
    // load model here

    const files = fileInput.files;

    [...files].map(async (img) => {
        const data = new FormData();
        data.append('file', img);

        const processedImage = await fetch("http://46.101.201.216/api/prepare",
            {
                method: 'POST',
                body: data
            }).then(response => {
            return response.json();
        }).then(result => {
            // return processed image
        });

        // reshape image
        // shape has to be the same as it was for training of the model

        const label = 1;
        renderImageLabel(img, label);
    })
};

const renderImageLabel = (img, label) => {
    const reader = new FileReader();
    reader.onload = () => {
        preview.innerHTML += `<div class="image-block">
                                      <img src="${reader.result}" class="image-block_loaded" id="source"/>
                                       <h2 class="image-block__label">${label}</h2>
                              </div>`;

    };
    reader.readAsDataURL(img);
};


fileInput.addEventListener("change", () => numberOfFiles.innerHTML = "Selected " + fileInput.files.length + " files", false);
predictButton.addEventListener("click", () => predict(modelURL));
clearButton.addEventListener("click", () => preview.innerHTML = "");
