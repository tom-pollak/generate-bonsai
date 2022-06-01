function xcroll(v) {
  MEM.cursx += v;
  if (needupdate()) {
    update();
  } else {
    viewupdate();
  }
}
function autoxcroll(v) {
  if (document.getElementById("AUTO_SCROLL").checked) {
    xcroll(v);
    setTimeout(function () {
      autoxcroll(v);
    }, 2000);
  }
}
function rstyle(id, b) {
  var a = b ? 0.1 : 0.0;
  document
    .getElementById(id)
    .setAttribute(
      "style",
      "\
    width: 32px; \
    text-align: center;\
    top: 0px;\
    color:rgba(0,0,0,0.4);\
    display:table;\
    cursor: pointer;\
    border: 1px solid rgba(0,0,0,0.4);\
    background-color:rgba(0,0,0," +
        a +
        ");\
  " +
        "height:" +
        MEM.windy +
        "px"
    );
  document.getElementById(id + ".t").setAttribute(
    "style",
    "vertical-align:middle; display:table-cell"
    //"position:absolute; top:"+(MEM.windy/2-20)+"px; left:"+(MEM.windx+20)+"px;"
  );
}
function toggleVisible(id) {
  var v = document.getElementById(id).style.display == "none";
  document.getElementById(id).style.display = v ? "block" : "none";
}
function toggleText(id, a, b) {
  var v = document.getElementById(id).innerHTML;
  document.getElementById(id).innerHTML = v == "" || v == b ? a : b;
}
var lastScrollX = 0;
var pFrame = 0;
function present() {
  var currScrollX = window.scrollX;
  var step = 1;
  document.body.scrollTo(Math.max(0, pFrame - 10), window.scrollY);

  pFrame += step;

  //console.log([lastScrollX,currScrollX]);

  if (pFrame < 20 || Math.abs(lastScrollX - currScrollX) < step * 2) {
    lastScrollX = currScrollX;
    setTimeout(present, 1);
  }
}
function reloadWSeed(s) {
  var u = window.location.href.split("?")[0];
  window.location.href = u + "?seed=" + s;
  //window.location.reload(true)
}
var btnHoverCol = "rgba(0,0,0,0.1)";
