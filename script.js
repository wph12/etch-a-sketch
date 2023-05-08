function createGrid(size) {
    sizeStr = String(Math.round(500/size))+'px';

    let sketchpad = document.getElementById("sketchpad")
    sketchpad.innerHTML = ''
    for(let i = 0; i < size; i++){
        sketchpad.innerHTML += '<div class = "row" ></div>';
    }

    rowArray = document.getElementsByClassName("row")
    for(k = 0; k < size; k++){
        for(let j = 0; j < size; j++){
            rowArray[k].innerHTML += '<div class = "square" ></div>';
        }
    }

    const squares = document.querySelectorAll("div.square");
    var isMouseDown = false;

    document.addEventListener('mousedown', (e)=> {
        isMouseDown = true;
        e.preventDefault();
    })

    document.addEventListener('mouseup', () => {
        isMouseDown = false;
    })

    squares.forEach((square) => {
        square.style.width = sizeStr
        square.style.height = sizeStr
        square.addEventListener('mouseover', () => {
            if(isMouseDown){
                square.style.backgroundColor = "red"
            }
        })
        square.addEventListener('mousedown', ()=> {
            square.style.backgroundColor = "red"
        })
    })
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

document.getElementById("changeSize").addEventListener('click', ()=> {
    createGrid(getSize());
    createSquares();
})