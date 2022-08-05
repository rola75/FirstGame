//The first thing I need is a boad for tic tac toe.
// After I need to be able to put X in all the blocks on click
//x is on the screen
//how to get o on the screen
//o is on the screen
//how to switch between x and o
//how to check column rows and diagonals



const blocks = document.querySelectorAll(".section_button_block");
//console.log(blocks);

let rows = [
    [],
    [],
    [],
];//console.log(rows);

let columns =[
    [],
    [],
    [],
];//console.log(columns);

let diagonals = [
    [],
    [],
];//console.log(diagonals);



const handleBlockClicker = (event) => {
    const blockText = event.target;
    //console.log("checking the handler click" + blockText.innerText);
    let letters = blockText.innerText;
    let playerTurn = true;

    if (letters != "") {
        return;
    } else {
        let letters = "";
        if (playerTurn) { //if playerTurn is false O appears 
            letters = "X";
        } else {
            letters = "O";
        }
        blockText.innerText = letters;
        //playerTurn = !playerTurn
        //console.log("here is letterinput" + letterInput)
        //console.log("letters" + letters);
        //console.log(letters)
    }


};

blocks.forEach((block) => {
    block.addEventListener("click", handleBlockClicker)
});        


const createRowArrys = () => {
    //console.log("blocks", blocks);
   //console.log("blockLength", blocks.length);
    blocks.forEach((index) => {
        let currentRow = null;
        //console.log("index", index);
        if(index < 3) {
            currentRow = rows[0];
            //console.log("row", rows[0]);
        } else if(index < 6) {
            currentRow = rows[1];
        } else{
            currentRow = rows[2];
        }
        currentRow.push(blocks);
        //console.log("currentArray" + blocks);
    });    
}

// const createColumnsArry = () => {
//     for(let index = 0; index < blocks.length; index++) {
//     let currentColumn = null;
//     if(index == 0 || index == 3 || index == 6){
//         currentColumn = columns[0];
//     } else if(index == 1 || index == 4 || index == 7) {
//         currentColumn = columns[1];
//     }
//     }
// }

const createColumnsArry = () => {
    for(let index = 0; index < blocks.length; index++) {
    let currentColumn = null;
    if([0,3,6].includes(index)){
        currentColumn = columns[0];
    } else if([1,4,7].includes(index)) {
        currentColumn = columns[1];
    } else {
        currentColumn = columns[2];
    } 
    currentColumn.push(columns);
    console.log("columns", currentColumn)
    }
};


const createDiagonalsArrys = () => {
    for(let index = 0; index < blocks.length; index++) {
    let currentDiagonal = null;
    if([0,4,8].includes(index)) {
        currentDiagonal = diagonals[0];
    } else if([2,4,6].includes(index)) {
        currentDiagonal = diagonals[1];
    } else {
        return;
    }
    currentDiagonal.push(diagonals);
    console.log("diagonals", currentDiagonal);
    }
};

createRowArrys();
createColumnsArry();
createDiagonalsArrys();
