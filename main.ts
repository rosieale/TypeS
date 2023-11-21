interface UserInterface {
    inputElement: HTMLInputElement;
    buttonElement: HTMLButtonElement;
}

document.addEventListener("DOMContentLoaded", () => {
    const userInterface: UserInterface = {
        inputElement: document.getElementById("inputText") as HTMLInputElement,
        buttonElement: document.getElementById("showButton") as HTMLButtonElement
    };

    userInterface.buttonElement.addEventListener("click", () => {
        alert(userInterface.inputElement.value);
    });
});
