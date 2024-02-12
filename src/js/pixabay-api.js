import { refs } from "./refs";


export function pixabayApi(textFromUser) {
    const API_KEY = '42331479-49dc52f8d5778d01c5913f31a';
    const url = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + textFromUser + "&image_type=photo&orientation=horizontal&safesearch=true";
    refs.gallery.classList.add("loader");
    return fetch(url).then(res => res.json());
}

