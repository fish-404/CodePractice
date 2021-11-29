/* You can visualizer this code in https://algorithm-visualizer.org/ */
// import visualization libraries {
const { Array2DTracer, Layout, LogTracer, Tracer, VerticalLayout } = require('algorithm-visualizer');
// }
const MAX_COMMANDS = 10000;

// define input variables
const board = [
     [".",".","4",".",".",".","6","3","."]
    ,[".",".",".",".",".",".",".",".","."]
    ,["5",".",".",".",".",".",".","9","."]
    ,[".",".",".","5","6",".",".",".","."]
    ,["4",".","3",".",".",".",".",".","1"]
    ,[".",".",".","7",".",".",".",".","."]
    ,[".",".",".","5",".",".",".",".","."]
    ,[".",".",".",".",".",".",".",".","."]
    ,[".",".",".",".",".",".",".",".","."]
];


// define tracer variables {
const tracer = new Array2DTracer('Grid');
const logTracer = new LogTracer('Console');
Layout.setRoot(new VerticalLayout([tracer, logTracer]));
tracer.set(board);
Tracer.delay();
// }

function isValidSudoku(board) {
    // check Row column
    for (i = 0; i < 9; i++) {
        if (!isValidRow(board, i)){
            return false;
        }
        if (!isValidColumn(board, i)){
            return false;
        }
    }
    
    
    for (i = 0; i < 9; i+= 3) {
        for (j = 0; j < 9; j+= 3) {
            if (!isValidBlock(board, i, j))
                return false;
        }
    }
    
    
    return true;
}


function isValidRow(board, rowIndex) {
    var tempRowSet = new Set();
    for (col = 0; col < 9; col++) {
        // visualize {
        tracer.select(rowIndex, col);
        Tracer.delay();
        // }
        if (board[rowIndex][col] !== '.') {
            if (tempRowSet.has(board[rowIndex][col])) {
                // visualize {
                tracer.patch(rowIndex, col);
                Tracer.delay();
                // }
                return false;
            }
            else
                tempRowSet.add(board[rowIndex][col]);
        }
    }
    // visualize {
    tracer.deselectRow(rowIndex, 0, 8);
    Tracer.delay();
    // }
    return true;
}

function isValidColumn(board, columnIndex) {
    var tempColSet = new Set();
    for (row = 0; row < 9; row++) {
        // visualize {
        tracer.select(row, columnIndex);
        Tracer.delay();
        // }
        if (board[row][columnIndex] !== '.') {
            if (tempColSet.has(board[row][columnIndex])) {
                // visualize {
                tracer.patch(row, columnIndex);
                Tracer.delay();
                // }
                return false;
            }
            else
                tempColSet.add(board[row][columnIndex]);
        }
    }
    // visualize {
    tracer.deselectCol(columnIndex, 0, 8);
    Tracer.delay();
    // }
    return true;
}

function isValidBlock(board, blockStartRow, blockStartColumn) {
    var tempBlockSet = new Set();
    for (x = 0; x < 3; x++) {
        for (y = 0; y < 3; y++) {
            // visualize {
            tracer.select(blockStartRow + x, blockStartColumn + y);
            Tracer.delay();
            // }
            var curNum = board[blockStartRow + x][blockStartColumn + y];
            if (curNum !== '.') {
                if (tempBlockSet.has(curNum)) {
                    // visualize {
                    tracer.patch(blockStartRow + x, blockStartColumn + y);
                    Tracer.delay();
                    return false;
                    // }
                }
                else 
                    tempBlockSet.add(curNum);
            }
        }
    }
    return true;
}



const valid = isValidSudoku(board);
if (valid) {
    // logger {
    logTracer.println(`Soduku Valid! 😀`);
    //}
}
else {
    // logger {
    logTracer.println(`Soduku inValid! 🙁`);
    //}
}
