// import visualization libraries {
const { Tracer, Array1DTracer, LogTracer, Layout, VerticalLayout } = require('algorithm-visualizer');
// }

const nums =  [0,0,1,1,1,2,2,3,3,4];

// define tracer variables {
const tracer = new Array1DTracer();
const logger = new LogTracer();
Layout.setRoot(new VerticalLayout([tracer, logger]));
tracer.set(nums);
Tracer.delay();
// }

var removeDuplicates = function(nums) {
    var p = 0, q = 1;
    while (q < nums.length) {
        // visualize {
        tracer.select(p);
        tracer.select(q);
        Tracer.delay();
        // }
        if (nums[p] === nums[q]) {
            // visualize {
            tracer.deselect(q);    
            Tracer.delay();
            //}
            q++;
            // visualize {
            tracer.select(q);
            Tracer.delay();
            // }        
        }
        else {
            nums[p+1] = nums[q];
            // visualize {
            tracer.patch(p+1, nums[q]);
            tracer.deselect(p);
            tracer.deselect(q);
            Tracer.delay();
            // }
            q++;
            p++;
        }
    }

    return p+1;
}

logger.println(`Result Array: ${nums.slice(0, removeDuplicates(nums))}`);
