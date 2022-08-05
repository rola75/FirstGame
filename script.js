//The first thing I need is a boad for tic tac toe.
// After I need to be able to put X in all the blocks on click
            //x is on the screen
//how to get o on the screen
            //o is on the screen



const blocks = document.querySelectorAll(".section_button_block");
//console.log(blocks);


const handleBlockClicker = (event) => {
    const blockText = event.target;
    //console.log("checking the handler click");
    let letters = blockText.innerText;
    let playerTurn = true;
    
    if (letters != "") {
        return;
    } else {
        let letters = "";
        if(playerTurn) {      //if playerTurn is false O appears 
            letters = "X";
        } else {
            letters ="O";
        }
        console.log(letters)


        blockText.innerText = letters;
        playerTurn = !playerTurn
        
       //console.log("here is letterinput" + letterInput)
        console.log("letters" + letters);
    }
    

    };

const blockInput = blocks.forEach((block) => {
    block.addEventListener("click", handleBlockClicker)});
    //() =>{ console.log("click is working")});

