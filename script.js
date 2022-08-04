//The first thing I need is a boad for tic tac toe.
// After I need to be able to put X in all the blocks on click


const blocks = document.querySelectorAll(".section_button_block");
//console.log(blocks);


const handleBlockClicker = (event) => {
    const element = event.target;
    console.log("checking the handler click");

    const letterInput = element.innerText;
    console.log(letterInput);

    };

const blockInput = blocks.forEach((block) => {
    block.addEventListener("click", handleBlockClicker)});
    //() =>{ console.log("click is working")});

