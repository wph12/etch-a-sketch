function createGrid(size) {
    let sketchpad = document.getElementById("sketchpad")
    console.log(size);
    sketchpad.innerHTML = ''
    for(let i = 0; i < size; i++){
        sketchpad.innerHTML += '<div class = "row" ></div>';
    }

    rowArray = document.getElementsByClassName("row")
    console.log(rowArray)
    for(k = 0; k < size; k++){
        for(let j = 0; j < size; j++){
            rowArray[k].innerHTML += '<div class = "square" ></div>';
        }
    }

}


function getSize(){
    let text = prompt("Please enter your desired grid size (1-100)", "8");
    let size = parseInt(text); 
    if(size){
        if(size >= 1 && size <= 100){
            return size;
        }
    }
    else{
        alert("Please enter a valid integer from range 1-100!")
    }
}

createGrid(8);
createSquares();





function createSquares() {
    const squares = document.querySelectorAll("div.square")
    var isMouseDown = false

    document.getElementById("sketchpad").addEventListener('mouseleave', () => {
        isMouseDown = false;
    })

    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.addEventListener('mousedown', () => {
                isMouseDown = true;
                square.style.backgroundColor = "black";
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
}


document.getElementById("changeSize").addEventListener('click', ()=> {
    createGrid(getSize());
    createSquares();
})