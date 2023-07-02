const randomMsgDisplay = document.getElementById('genRandomMsg');
const alertDisplay = document.getElementById('alertMsg');
const randomImgDisplay = document.getElementById('genRandomImg');
const pressButton = document.getElementById('button');
const pressButton2 = document.getElementById('button2');

pressButton.addEventListener('click', () => {
    //Display the random message
    const reveal = QuirkyGenerator.randomMsg();
    randomMsgDisplay.innerText = reveal;
    return randomImgDisplay.innerText;
    //Set the correct disabled state for the button
    pressButton.removeAttribute('disabled');
});

pressButton2.addEventListener('click', () => {
    //Display the random message
    const reveal = InspirationalGenerator.randomMsg();
    randomMsgDisplay.innerText = reveal;
    return randomImgDisplay.innerText;
    //Set the correct disabled state for the button
    pressButton.removeAttribute('disabled');
});



