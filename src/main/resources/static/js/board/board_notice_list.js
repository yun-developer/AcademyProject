//페이징 라이브러리
var box = paginator({
    table: document.getElementById("table_box_bootstrap").getElementsByTagName("table")[0],
    box_mode: "list",
});
box.className = "box";
document.getElementById("table_box_bootstrap").appendChild(box);