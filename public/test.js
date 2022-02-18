var jsav = new JSAV("root1");
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
jsav.label("Normal Array");
var arr1 = jsav.ds.array(arr);
arr1.highlight(2);
arr1.css(4, { "background-color": "aqua", color: "rgb(150, 55, 50)" });
arr1.layout();
