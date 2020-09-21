// document.body.style.backgroundColor = "blue";
// // document.getElementsByClassName("btn").style.backgroundColor = "black";
// document.getElementById("demo").style.color = "black";

// const var1 = document.getElementById("demo");

// name1 = var1.nodeName;
// console.log(name1);
// name2 = var1.style;
// console.log(name2);
// console.log(window);
// console.dir(document);

// getelementbytag
// NodeList
// ...items

// element1 = document.getElementsByTagName("button");
// console.log(element1);
// // element1[2].style.color = "blue";
// const element2 = [...element1];
// console.log(element2);
// element2.forEach(function(items) {
//     console.log(items);
// });

// getelemtbyclass
// change color

// queryselct and queryseelctall
// no array convert

// itemlist = document.getElementsByClassName("btn");
// console.log(itemlist);
// itemlist[1].style.color = "red";

// itemlist = document.querySelectorAll(".btn");
// console.log(itemlist);
itemlist2 = document.querySelector("li");

// itemlist2 = itemlist.forEach(function(items) {
//     items.style.color = "red";
// });
// elementchild = itemlist2.lastChild;
// elementchild2 = itemlist2.firstChild;
// console.log(elementchild);
// console.log(elementchild2);

// sibling = itemlist2.previousSibling.previousSibling;
// console.log(sibling);

// elementid = document.getElementById("demo");
// getattribute = elementid.getAttribute("href");
// console.log(getattribute);
// text = getattribute.textContent = "hello mukesh";
// console.log(text);

// setattribute = elementid.setAttribute("class", "new");
// console.log(se

elementid = document.getElementById("demo");
elementid.classList.add("class1", "class2");
elementid.classList.remove("class1", "class2");
checkclass = elementid.classList.contains("class1");
if (contains) {
    console.log("true");
} else {
    console.log("false");
}
// console.log(elementid.className);