import mojs from 'mo-js';

// var shape = new mojs.Shape({
//     shape: 'circle',
//     isShowStart: true,
//   });

// var shape = new mojs.Shape({
//     shape:        'circle',  // shape "circle" is default
//     radius:       25,        // shape radius
//     fill:         'white',   // same as 'transparent'
//     stroke:       '#F64040', // or 'cyan'
//     strokeWidth:  5,         // width of the stroke
//     isShowStart:  true,      // show before any animation starts
//   });


// var shape = new mojs.Shape({
//     shape:        'circle',
//     top:          '50%',
//     x:            'rand(-250, 250)',
//     isShowStart:  true,
//   });


// var shape = new mojs.Shape({
//     shape:        'circle',
//     radius:       25,
//     radiusX:      35, // explicit radiusX
//     fill:         'transparent',
//     stroke:       '#F64040',
//     strokeWidth:  7,
//     isShowStart:  true,
//   });

// var circle = new mojs.Shape({
//     shape:        'circle',
//     radius:       10,
//     radiusX:      20, // explicit radiusX
//     left:         '25%',
//     fill:         'deeppink',
//     isShowStart:  true,
//   });
  
//   var rect = new mojs.Shape({
//     shape:        'rect',
//     radius:       10,
//     radiusX:      20, // explicit radiusX
//     left:         '50%',
//     fill:         'cyan',
//     isShowStart:  true,
//   });
  
//   var polygon = new mojs.Shape({
//     shape:        'polygon',
//     radius:       10,
//     radiusY:      20, // explicit radiusY
//     left:         '75%',
//     fill:         'yellow',
//     isShowStart:  true,
//   });


// var zigzag = new mojs.Shape({
//     shape:        'zigzag',
//     points:       11,
//     radius:       25,
//     radiusY:      50,
//     left:         '25%',
//     fill:         'none',
//     stroke:       'deeppink',
//     isShowStart:   true,
//   });
  
//   var curve = new mojs.Shape({
//     shape:        'curve',
//     points:       11,
//     radius:       25,
//     radiusY:      50,
//     left:         '50%',
//     fill:         'none',
//     stroke:       'deeppink',
//     isShowStart:   true,
//   });
  
//   var cross = new mojs.Shape({
//     shape:        'cross',
//     points:       11,
//     radius:       25,
//     radiusX:      50,
//     left:         '75%',
//     fill:         'none',
//     stroke:       'deeppink',
//     isShowStart:   true,
//     y:            -25,
//   });


// var shape = new mojs.Shape({
//     shape:        'circle',
//     scale:         { 0 : 1 },
     
//     duration:      1000,
//     delay:         1000,
//     easing:        'cubic.out',
//     repeat:        999
//   }).play();

// const circle = new mojs.Shape({
//     shape:        'circle',
//     scale:        { 0 : 1 },
//     left:         '25%',
//     fill:         { 'cyan': 'yellow' },
//     radius:       25,
    
//     duration:     2000,
//     repeat:       999,
//   }).play();
  
  
//   const rect = new mojs.Shape({
//     shape:        'rect',
//     left:         '50%',
//     fill:         'none',
//     radius:       20,
//     stroke:       { 'rgba(0,255,255, 1)' : 'magenta' },
//     strokeWidth:  { 10: 0 },
//     strokeDasharray: '100%',
//     strokeDashoffset: { '-100%' : '100%' },
//     angle:        { 0: 180 },
    
//     duration:     2000,
//     repeat:       999,
//   }).play();
  
  
//   const polygon = new mojs.Shape({
//     shape:        'polygon',
//     points:       5,
//     left:         '75%',
//     fill:         { 'deeppink' : '#00F87F' },
//     x:            { 'rand(-100%, -200%)' : 0  },
//     angle:        { 0: 'rand(0, 360)' },
//     radius:       25,
  
//     duration:     2000,
//     repeat:       999,
//   }).play();


// const tri = new mojs.Shape({
//     shape:      'polygon',
//     fill:       'orange',
//     radius:     65,
//     angle:      { [-120]: -40 },
//     x:          { [-200]: 20 },
//     y:          { [50]: -20 },
//     scaleX:     { 0 : 1.3 },
    
//     repeat:     10,
//     duration:   800,
//     isYoyo:     true,
//     backwardEasing: 'sin.in',
  
//     isShowEnd:  false
//   }).play();

const circle = new mojs.Shape({
    shape:        'circle',
    scale:        { 0 : 1, easing: 'cubic.out' },
    fill:         { 'cyan': 'yellow', easing: 'cubic.in' },
    
    duration:     2000,
    repeat:       999,
  }).play();