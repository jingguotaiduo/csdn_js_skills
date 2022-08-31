/*
Author: jing_zhong
Date: 2022.9.1
Function: To solve the problem of logging and focusing on creator of blog in CSDN Website，you can copy code in blog without logging in !
*/
document.getElementById('article_content').style.overflow = "visible";// display the detailed article content
//The first way to copy code
var Allcode = document.getElementsByTagName("code");
if (Allcode.length > 0)
{
    for (let i = 0; i < Allcode.length; i++) { // allow you to copy code
        Allcode[i].style.userSelect = 'text';
    }
}
/* The Second way to copy code
document.querySelectorAll("code[class='prism language-cpp has-numbering']")[0].style.userSelect = 'text';// allow you to copy code
document.querySelectorAll("code[class='prism language-vue has-numbering']")[0].style.userSelect = 'text';// allow you to copy code
document.querySelectorAll("code[class='prism language-rust has-numbering']")[0].style.userSelect = 'text';// allow you to copy code
*/
// the setting of sinking and hide other div modules
document.getElementById('treeSkill').style.display = 'none';
document.getElementById('treeSkill').innerHTML = "";
document.getElementById('blogExtensionBox').style.display = 'none';
document.getElementById('blogExtensionBox').innerHTML = "";
document.querySelector("div[class='hide-article-box hide-article-pos text-center']").style.display = 'none';
document.querySelector("div[class='hide-article-box hide-article-pos text-center']").innerHTML = "";
document.getElementById('toolBarBox').style.display = 'none';
document.getElementById('toolBarBox').innerHTML = "";
document.querySelector("div[class='more-toolbox-new']").style.display = 'none';
document.querySelector("div[class='more-toolbox-new']").innerHTML = "";

var Allremommendblog = document.querySelector("div[class='recommend-item-box type_blog clearfix'");
for (let i = 0; i < Allremommendblog.length; i++) { // delete other blogs
    Allremommendblog[i].style.display = 'none';
    Allremommendblog[i].innerHTML = "";
}
document.querySelector("div[class='first-recommend-box recommend-box ']").style.display = 'none';
document.querySelector("div[class='first-recommend-box recommend-box ']").innerHTML = "";
document.querySelector("div[class='second-recommend-box recommend-box ']").style.display = 'none';
document.querySelector("div[class='second-recommend-box recommend-box ']").innerHTML = "";
document.getElementById('pcCommentBox').style.display = 'none';
document.getElementById('pcCommentBox').innerHTML = "";
document.querySelector("div[class='recommend-box insert-baidu-box recommend-box-style ']").style.display = 'none';
document.querySelector("div[class='recommend-box insert-baidu-box recommend-box-style ']").innerHTML = "";
document.getElementById('recommendNps').style.display = 'none';
document.getElementById('recommendNps').innerHTML = "";


for (let i = 0; i < document.querySelectorAll("ul[class='footer-column-t']")[0].children.length; i++) {
    document.querySelectorAll("ul[class='footer-column-t']")[0].children[i].innerHTML = "";
}
/*
for (let i = 0; i < document.querySelectorAll("ul[class='footer-column-b']")[0].children.length; i++) {
    document.querySelectorAll("ul[class='footer-column-t']")[0].children[i].innerHTML = "";
}*/
document.querySelector("div[class='template-box']").style.display = 'none';
document.querySelector("div[class='template-box']").innerHTML = "";
document.querySelector("div[class='blog-footer-bottom']").style.zIndex = -999;
document.querySelector("div[class='blog-footer-bottom']").style.display = 'none';
document.querySelector("div[class='blog-footer-bottom']").innerHTML = "";
document.getElementById("csdn-copyright-footer").style.display = 'none';
document.getElementById("csdn-copyright-footer").innerHTML = "";
document.querySelector("creativecommons").style.display = "none";
document.querySelector("creativecommons").innerHTML = "";
