// import visualization libraries {
const { Array2DTracer, Layout, LogTracer, Tracer, VerticalLayout } = require('algorithm-visualizer');
// }


// define input variables
const matrix =[
     [1,1,1]
    ,[1,0,1]
    ,[1,1,1]
];

// define tracer variables {
const tracer = new Array2DTracer('Grid');
Layout.setRoot(new VerticalLayout([tracer]));
tracer.set(matrix);
Tracer.delay();
// }

var m = matrix.length, n = matrix[0].length;
var col = -1, row = -1;

if (matrix[0].indexOf(0) !== -1) {
    row = 0;
}

for (i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
        col = 0; 
        break;
    }
}

for (i = 1; i < m; i++) {
    for (j = 1; j < n; j++) {
        if (matrix[i][j] === 0) {
            matrix[0][j] = 0; 
            matrix[i][0] = 0;
            // visualize {
            tracer.patch(0, j, 0);
            tracer.patch(i, 0, j);
            Tracer.delay();
            // }
        }
    }
}

for (i = 1; i < m; i++) {
    if (matrix[i][0] === 0) {
        matrix[i].fill(0);
        // visualize {
        for (j = 0; j < n; j++) {
            tracer.patch(i, j, 0);
            Tracer.delay();
        }  
        // }
    }
}

for (j = 1; j < n; j++) {
    if (matrix[0][j] === 0) {
        for (i = 0; i < m; i++) {
            matrix[i][j] = 0;
            // visualize {
            tracer.patch(i, j, 0);
            Tracer.delay();
            // }
        }
    }
}

if (col === 0) {
    for (i = 1; i < m; i++) {
        matrix[i][0] = 0;
        // visualize {
        tracer.patch(i, 0, 0);
        Tracer.delay();
        // }
    }
}

if (row === 0) {
    matrix[0].fill(0);
    for (j = 0; j < n; j++) {
    // visualize {
        tracer.patch(0, j, 0);
        Tracer.delay();
    }  
    // }
}
