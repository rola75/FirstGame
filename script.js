// I need letter on the board
//to get buttons on the board i need to be able to click and x or o to display
/*when making click event to click on boxes and make x and o appears mean I
need and event listener and I need a function that is an event handler*/
//on click I need the letter to appear and I need them to change



const boardBlocks = document.querySelectorAll(".section_button_block");
//console.log(clickToPlaceLetter);


let playerTurn = true;
/*const winningGroups = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];*/


let rowArrays = [
    [],
    [],
    []
];
let columnArrays = [
    [],
    [],
    []
];
let diagonalArrays = [
    [],
    []
];


console.log(JSON.stringify(rowArrays));
// console.log(columnArrays);
// console.log(diagonalArrays);

const handlerButtonClick = (e) => {
    const blockText = e.target;
    let letters = "";

    if (blockText.innerText != "") {
        return
    } else {
        if (playerTurn) {
            letters = "X";
        } else {
            letters = "O";
        }
    }
    blockText.innerText = letters;
    //console.log("inner", blockText.innerText);
    //console.log(playerTurn, blockText.innerText,letters);
    //console.log("playerTurn", playerTurn);
    playerTurn = !playerTurn;
    //console.log("playerTurnAfter", playerTurn);
    // if(playerTurn == true){
    //     playerTurn = false;
    // }else {
    //     playerTurn = true;
    // }
};

for (let index = 0; index < boardBlocks.length; index++) {
    boardBlocks[index].addEventListener("click", handlerButtonClick)
};

const assignRows = () => {
    for (let i = 0; i < boardBlocks.length; i++) {
        let block = boardBlocks[i];
        let currentArray;
        if (i < 3) {
            currentArray = rowArrays[0];
        } else if (i < 6) {
            currentArray = rowArrays[1];
        } else {
            currentArray = rowArrays[2];
        }
        currentArray.push(block);
    }
}


const checkColumns = () => {
    for (let i = 0; i < boardBlocks.length; i++) {
        let block = boardBlocks[i];
        const columnIndex = i % 3;
    
        columnArrays[columnIndex].push(block);
      
    }
};


// const checkColumns = () => {
//     for (let i = 0; i < boardBlocks.length; i++) {
//         let block = boardBlocks[i];
//         const columnIndex = i % 3;
//         let currentArray = columnArrays[columnIndex]; 
        
//         // if ([0, 3, 6].includes(i)) {
//         //     currentArray = columnArrays[0];
//         // } else if ([1, 4, 7].includes(i)) {
//         //     currentArray = columnArrays[1];
//         // } else {
//         //     currentArray = columnArrays[2];
//         // }
//         currentArray.push(block);
//         //console.log("arr", JSON.stringify(currentArray));
//     }
// };

const rows = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],

]

const getTopLeftToBottomRight = () => {
    for (let i = 0; i < 3; i++) {
        const rowIndex = i;
        const columnIndex = i;
    
        const row = rowArrays[i];
        const cell = row[columnIndex];
    
        console.log(`cell:`, cell)
    }
}


const getTopRightToBottomLeft = () => {
    for (let i = 0; i < 3; i++) {
        const rowIndex = i;
        const columnIndex = (rows.length - 1) - i;
    
        const row = rowArrays[i];
        const cell = row[columnIndex];
        
        console.log(`cell:`, cell)
    }
}

assignRows();
checkColumns();
getTopLeftToBottomRight();
getTopRightToBottomLeft();

// const checkDiagonals = () => {
//     for(let i = 0; i < boardBlocks.length; i++){
//         let currentArray;
//         if([0,4,8].includes(i)){
//             currentArray =  diagonalArrays[0];
//         } else if([2,4,6].includes(i)){
//             currentArray =  diagonalArrays[1];
//         } else{          
//         }
//         currentArray.push(i);
//         console.log("dia array", diagonalArrays)
//     }   
// }
//checkDiagonals();
//console.log("before", rowArrays);
//console.log("after", rowArrays);