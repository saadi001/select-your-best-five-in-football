const nameBox = [];


// function for display name 
function displayname() {
    const nameContainer = document.getElementById('products-cart');
    nameContainer.innerText = '';

    for (let i = 0; i < nameBox.length; i++) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <tr>
            <th>${i+1}</th>
            <td>${nameBox[i].playerName}</td>
        </tr>
        
        `
        nameContainer.appendChild(tr);
    }
}

// function for button to add player name 
function addPlayerName(element) {
    const playerName = element.parentNode.children[0].innerText;

    const pnames = {
        playerName: playerName
    }
    nameBox.push(pnames);
    displayname();
    element.setAttribute('disabled',true);

    if(nameBox.length > 5){
        alert('You can not selected more than Five');
        return;
    }
    
}

// function for get input field value 
function inputField(inputId){
    const inputFieldElement = document.getElementById(inputId);
    const inputFieldString = inputFieldElement.value;
    const inputFieldAmount = parseFloat(inputFieldString);
    return inputFieldAmount;
}
// function for getting element value 
function elementField(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementValue = parseFloat(elementString);
    return elementValue; 
}

// function for calcute expense button 
function calcuteExpense(){
    const totalnames = nameBox.length;
    const perPlayerAmount = 
}