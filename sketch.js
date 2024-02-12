
let cvs;
// let r1 = 65.1;
// let r2 = 60;
let r1 = 50;
let r2 = 46;
let ctr = {x: 50, y:50};
let circ = 2*Math.PI;
let num_teeth = 27;
let incr = circ/num_teeth;
function setup() {
  noLoop();
  cvs = SVG().addTo('main').size(400, 400);
  document.getElementById('saver').onclick = function () { saveData(cvs.svg(), 'svg.svg') };

}
function draw() {
    var lp;
    for(var i = 0; i <= circ; i+=incr){
      var p = spin(r2, i);
      try{
        cvs.line(p.x, p.y, lp.x, lp.y).stroke({width:1, color: '#000', opacity:0.5});
      } catch {}
      for(var j = 1; j < 4; j++){
        var np = spin(r1, i + (circ/(num_teeth * 5))*j);
        cvs.line(p.x, p.y, np.x, np.y).stroke({width:1, color: '#000', opacity:0.5});
        p = createVector(np.x, np.y);
      }
      var np = spin(r2,  i + (circ/(num_teeth * 5))*4);
      cvs.line(p.x, p.y, np.x, np.y).stroke({width:1, color: '#000', opacity:0.5});
      lp = createVector(np.x, np.y);

      //line(pt1.x, pt1.y, pt2.x, pt2.y);

    }
  }

  function spin(r, f){
    var x = r * cos(f) + ctr.x;
    var y = r * sin(f) + ctr.y;
    return createVector(x, y);
  }


function spin(r, f){
    var x = r * cos(f) + ctr.x;
    var y = r * sin(f) + ctr.y;
    return createVector(x, y);
  }
//downloads current picture to SVG file in downloads folder
var saveData = (function () {
  var a = document.createElement("a");
  // document.body.appendChild(a);
  // a.style = "display: none";
  return function (data, fileName) {
    var json = data,
      blob = new Blob([json], { type: "octet/stream" }),
      url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  };
}());
