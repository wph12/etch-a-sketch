function createGrid() {
    const sketchpad = document.getElementById("sketchpad")
    for(let i = 0; i < 8; i++){
        sketchpad.innerHTML += '<div class = "row" ></div>'
    }

    rowArray = document.getElementsByClassName("row")
    console.log(rowArray)
    for(k = 0; k < 8; k++){
        for(let j = 0; j < 8; j++){
            rowArray[k].innerHTML += '<div class = "square" ></div>'
        }
    }
}

createGrid();


const squares = document.querySelectorAll("div.square")
var isMouseDown = false

document.getElementById("sketchpad").addEventListener('mouseleave', () => {
    isMouseDown = false;
})

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.addEventListener('mousedown', () => {
            isMouseDown = true;
        })

        square.addEventListener('mouseup', () => {
            isMouseDown = false;
        })

        square.addEventListener('mousemove', () =>{
            if(isMouseDown){
                square.style.backgroundColor = "black";
            }
        }) 
    })
})