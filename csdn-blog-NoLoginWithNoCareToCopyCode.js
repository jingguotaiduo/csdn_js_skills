/*
Author: jing_zhong
Date: 2022.9.1
Function: To solve the problem of logging and focusing on creator of blog in CSDN Website，you can copy code in blog without logging in !
*/
if(document.getElementById('article_content'))
{
   document.getElementById('article_content').style.overflow = "visible";// display the detailed article content
}
//The first way to copy code
var Allcode = document.getElementsByTagName("code");
if (Allcode.length > 0)
{
    for (let i = 0; i < Allcode.length; i++) { // allow you to copy code
        Allcode[i].style.userSelect = 'text';
    }
}
/* The Second way to copy code, but need to specific tyle(cpp、java etc.)
document.querySelectorAll("code[class='prism language-cpp has-numbering']")[0].style.userSelect = 'text';// allow you to copy code
document.querySelectorAll("code[class='prism language-vue has-numbering']")[0].style.userSelect = 'text';// allow you to copy code
document.querySelectorAll("code[class='prism language-rust has-numbering']")[0].style.userSelect = 'text';// allow you to copy code
*/
// the setting of sinking and hide other div modules
if(document.getElementById('treeSkill'))
{
   document.getElementById('treeSkill').style.zIndex = -999;
   document.getElementById('treeSkill').innerHTML = "";
}
if(document.getElementById('blogExtensionBox'))
{
   document.getElementById('blogExtensionBox').style.zIndex = -999;
   document.getElementById('blogExtensionBox').innerHTML = "";
}
if(document.querySelector("div[class='hide-article-box hide-article-pos text-center']"))
{
   document.querySelector("div[class='hide-article-box hide-article-pos text-center']").style.zIndex = -999;
   document.querySelector("div[class='hide-article-box hide-article-pos text-center']").innerHTML = "";
}
if(document.getElementById('toolBarBox'))
{
   document.getElementById('toolBarBox').style.zIndex = -999;
   document.getElementById('toolBarBox').innerHTML = ""; 
}
if(document.querySelector("div[class='more-toolbox-new']"))
{
   document.querySelector("div[class='more-toolbox-new']").style.zIndex = -999;
   document.querySelector("div[class='more-toolbox-new']").innerHTML = "";
}
var Allremommendblog = document.querySelector("div[class='recommend-item-box type_blog clearfix'");
for (let i = 0; i < Allremommendblog.length; i++) { // delete other blogs
    Allremommendblog[i].style.zIndex = -999;
    Allremommendblog[i].innerHTML = "";
}
if(document.querySelector("div[class='first-recommend-box recommend-box ']"))
{
   document.querySelector("div[class='first-recommend-box recommend-box ']").style.zIndex = -999;
   document.querySelector("div[class='first-recommend-box recommend-box ']").innerHTML = ""; 
}
if(document.querySelector("div[class='second-recommend-box recommend-box ']"))
{
   document.querySelector("div[class='second-recommend-box recommend-box ']").style.zIndex = -999;
   document.querySelector("div[class='second-recommend-box recommend-box ']").innerHTML = ""; 
}
if(document.getElementById('pcCommentBox'))
{
   document.getElementById('pcCommentBox').style.zIndex = -999;
   document.getElementById('pcCommentBox').innerHTML = ""; 
}
if(document.querySelector("div[class='recommend-box insert-baidu-box recommend-box-style ']"))
{
   document.querySelector("div[class='recommend-box insert-baidu-box recommend-box-style ']").style.zIndex = -999;
   document.querySelector("div[class='recommend-box insert-baidu-box recommend-box-style ']").innerHTML = "";
}
if(document.getElementById('recommendNps'))
{
   document.getElementById('recommendNps').style.zIndex = -999;
   document.getElementById('recommendNps').innerHTML = "";
}

if(document.querySelectorAll("ul[class='footer-column-t']"))
{
  for (let i = 0; i < document.querySelectorAll("ul[class='footer-column-t']")[0].children.length; i++) {
    document.querySelectorAll("ul[class='footer-column-t']")[0].children[i].innerHTML = "";
  } 
}
if(document.querySelectorAll("ul[class='footer-column-b']"))
{
   for (let i = 0; i < document.querySelectorAll("ul[class='footer-column-b']")[0].children.length; i++) {
     document.querySelectorAll("ul[class='footer-column-b']")[0].children[i].innerHTML = "";
   }
}
if(document.querySelector("div[class='template-box']"))
{
   document.querySelector("div[class='template-box']").style.zIndex = -999;
   document.querySelector("div[class='template-box']").innerHTML = "";
}
if(document.querySelector("div[class='blog-footer-bottom']"))
{
   document.querySelector("div[class='blog-footer-bottom']").style.zIndex = -999;
   document.querySelector("div[class='blog-footer-bottom']").innerHTML = "";
}
if(document.getElementById("csdn-copyright-footer"))
{
   document.getElementById("csdn-copyright-footer").style.zIndex = -999;
   document.getElementById("csdn-copyright-footer").innerHTML = "";
}
if(document.querySelector("creativecommons"))
{
  document.querySelector("creativecommons").style.zIndex = -999;
  document.querySelector("creativecommons").innerHTML = ""; 
}
