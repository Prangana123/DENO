export const createDomElement = (tag, classes, text, id) => {
    const el = document.createElement(tag);
    if(classes) el.classList = classes;
    if(text) el.textContext = text;
    if (id) el.id = id;
    return el;
}