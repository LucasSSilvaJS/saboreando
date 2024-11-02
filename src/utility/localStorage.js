//local storage já usados
// - @register-step-1

function getLocalStorage(name){
    return JSON.parse(localStorage.getItem(name));
}

function setLocalStorage(name, value){
    localStorage.setItem(name, JSON.stringify(value))
}

function removeLocalStorage(name){
    localStorage.removeItem(name);
}

export {getLocalStorage, setLocalStorage, removeLocalStorage};