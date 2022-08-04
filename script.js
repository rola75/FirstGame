//The first thing I need is a boad for tic tac toe.
// After I need to be able to put X in all the blocks on click


const blocks = document.querySelectorAll(".blocks");
//console.log(blocks);




const blockDisplayer = blocks.forEach((block) => {
    block.addEventListener("click", () =>{
        console.log("click is working");
    } );
})