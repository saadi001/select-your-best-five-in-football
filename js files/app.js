
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

    if(nameBox.length > 4){
        alert('You can not selected more than Five');
        return;
    }

    nameBox.push(pnames);
    displayname();
    element.setAttribute('disabled',true);
    element.innerText = 'Selected';
    
    
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
    const perPlayerAmount = inputField('per-player');
    // checking NaN and minus value 
    if(isNaN(perPlayerAmount) || perPlayerAmount<0){
        alert('Please provide valid input!');
        return;
    }

    const playerExpense = totalnames * perPlayerAmount;
    document.getElementById('player-expense').innerText = playerExpense;
}
// evenhaldle listener for total calculation 
document.getElementById('total-calulation').addEventListener('click',function(){
    const subTotal = elementField('player-expense');
    const managerMoney = inputField('manager-amount');
    const coachMoney = inputField('coach-amount');
    // checking NaN and minus value 
    if(isNaN(managerMoney) || isNaN(coachMoney) || managerMoney<0 || coachMoney<0){
        alert('please provide a valid input!')
        return;
    }
    const totalMoney = subTotal + managerMoney + coachMoney;

    document.getElementById('total').innerText = totalMoney;
})