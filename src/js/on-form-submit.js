import { pixabayApi } from "./pixabay-api";
import { refs } from "./refs";
import { galleryMarkup } from "./render";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


export function onFormSubmit(e) {
    e.preventDefault();
    const inputValue = e.target.elements.form_input.value.trim();
    
    if (inputValue !== "") {
        pixabayApi(inputValue)
            .then(data => {
                if (data.hits.length === 0) {
                    iziToast.show({
                        message: "Sorry, there are no images matching your search query. Please try again!"
                    })
                } else {
                    galleryMarkup(data);
                }
            })
            .catch()
            .finally(refs.gallery.classList.remove("loader"));
    };

    e.target.reset();
};