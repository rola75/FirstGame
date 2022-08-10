
const boardBlocks = document.querySelectorAll(".section_button_block");
const resetButton = document.querySelector(".section_button_reset");



let playerTurn = true;

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
    
    playerTurn = !playerTurn;
  
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


const assignColumns = () => {
    for (let i = 0; i < boardBlocks.length; i++) {
        let block = boardBlocks[i];
        const columnIndex = i % 3;
    
        columnArrays[columnIndex].push(block);
      
    }
};


const getTopLeftToBottomRight = () => {
    for (let i = 0; i < 3; i++) {
        const rowIndex = i;
        const columnIndex = i;
    
        const row = rowArrays[i];
        const block = row[columnIndex];
    
        console.log(`block:`, block)
    }
};


const getTopRightToBottomLeft = () => {
    for (let i = 0; i < 3; i++) {
        const rowIndex = i;
        const columnIndex = (rowArrays.length - 1) - i;
    
        const row = rowArrays[i];
        const block = row[columnIndex];
        
        console.log(`block:`, block)
    }
}


const handlerReset = (event) => {
    window.location.reload();
}

resetButton.addEventListener("click", handlerReset);

const countLetterinArray = () => {
    let letters = ["X", "O"];
    boardBlocks.forEach((block, index) => {
        const element = block.innerText;
        if(element == letters[0]) {
           console.log(letters[0])
        }
    });
}

countLetterinArray();

assignRows();
assignColumns();
getTopLeftToBottomRight();
getTopRightToBottomLeft();