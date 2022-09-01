@[TOC](免关注阅读CSDN博客和复制代码（2022.9.1）)

# 引言
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不知不觉，参加工作两个月了，毕业后一直在学习[JavaScript](https://www.w3school.com.cn/js/index.asp) 和 [CSS](https://www.w3school.com.cn/h.asp)，也没顾得上更新博客，就是在**默默积累、脚踏实地**的路上，只为==学以致用==，产出更有价值的文章，与大家尽情分享与交流。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;得益于曾经学过`C、C#、Java、C++、Python、Matlab、VB、Scala、R、Rust`等语言，印象深刻的就是编程语言分为*低级*和*高级*，其中高级编程语言的设计思想主要分为三个：**面向结构（structure）、面向过程（process）和面向对象（Object）**，当然，个人理解和认识也难免短浅，望大伙理解。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;==任何事情都需要付出努力，更离不开长期坚持，磨刀不误砍柴工==。如今作为一名实习工程师，刚入职的我任重而道远，需要拾取大量知识以提高自身技能，`从而游刃有余，从容应对工作中遇到的问题和挑战，让问题能够迎刃而解`。

# 1、需求分析
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作为**学生、工程师或开发者**，大家应该有自己的技术积累，即程序员们所谓的**技术栈**，每个人都可以在开放平台上分享自己的技术经验，但想必我们都会遇到这样一个问题：对某博客平台上的某篇博文十分感兴趣，但`页面仅仅显示一小部分，还没进入正题就提示需要登录加关注博主方可阅读`，当然最省事的方法就是去==注册账号登录平台并关注博主==，然后得以阅读博文的全部内容并复制其中感兴趣的有用代码，但个人感觉这种方式更适用于非技术人员；
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;存在这样一部分人，他们不想因为某篇博文而在相应平台注册、登录，或者内心并不想被迫去关注博主，而且相信***真正有实力开放分享的博主不应该将博文阅读与是否关注相关联绑定***，不如那些设置为付费博文的创作者，起码内心是**对自己有较为明确的定位**，网友是否关注取决于作者的文章水平高低和态度是否真诚，应该是主动和自发的，愿意成为粉丝与否是他们的权利。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;基于近期学习的**前端开发**技术，尽管自己意识到个人的开发能力不足且有限，但不妨一试，顺便检验自己学习的效果，同时希望给更多的学生、开发者带来帮助，希望`为大家答疑解惑`。
# 2、原理简介
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`CSS`作为**HTML文档**的标准样式，其功能可谓五花八门，无所不能，但样式一经定义即为==静态展示网页==；`JavaScript`作为浏览器都兼容的**脚本解释性语言**，在网站开发和前端网页方面展现出了强大的作用，因具有动态可交互性，作为主流的网络开发脚本语言，拥有十分庞大的社区和参与者。在前端开发过程中，相信大家对`DevTools`并不陌生，利用此工具可极大减轻开发压力、提升开发效率，毕竟功能还是十分庞大的。值得深入学习和思考。
## 2.1 html 应知应会
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下面主要介绍常用的一些`css`代码和`js`代码，利用该代码对`html`文档进行修改和设计。
<center>一个原始的html文档内容如下：</center>

```html
<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title></title>
</head>
<body>

</body>
</html>
```


### 2.1.1 css
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在`HTML`文档中，包含**块div、标签tag、唯一标识符id、样式类class**，而`css`就是对标签里的样式类或者唯一标识符id进行设置，它一般被放置在==style==标签中需要了解的一点就是css体系十分庞大，需要学习网页布局设计的东西有很多，属性数量太多不牢记，熟练掌握常用的属性即可（如**宽度width、高度height、位置position、颜色color、背景色background-color、左边距left、顶边距top、右边距right、底边距bottom、字体颜色font-color、透明度opacity**等)，其他的可利用网络资源现学现查。
```css
<style>
.div1 {
...
...
...
}
#div2 {
...
...
...
}
</style>
<link href="./widget.css" ref="stylesheet">
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中.div1表示的是类class，==#div2表示的唯一标识符id==，它们在`div`中的引入方式如下，另外对于`div`而言可以仅使用`class`，也可以只是用`id`，或者两个一起使用，但一起使用时在`style`里定义一个即可（通常在`style`中定义`class`，`id`可随意取值)。

```html
<div class="div1"></div>
<div id="div2"></div>
<div id="mybutton" class="div1"></div>
<div id="div2" class></div>
```

### 2.1.2 js
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在**HTML**文档中，`js`代码通常被放置在==script==标签中，可引入外部`js`文件或者编写`js`代码，**import**可导入外部第三方`js`库，代码中包含`变量、类型、函数、事`件等，牢记==js可以改变dom元素及其样式，从而实现网页的动态变化==。
```javascript
<script src="../test.js"></script>
<script>
	var str = "nihao";
	var shuzu = new Array(5);
	for(let i=0;i<shuzu.length;i++)
		console.log(shuzu[i].toString());
	function print(message) {
		console.log(message);
	}
	document.getElementById("div2").style = {
												width: 100%;
												height: 80%; 
												position: absolute; 
												left: 10%; 
												top: 10%; 
												background-color:red
											};
	document.getElementById("openBtn").addEventListener("click",function(e){
      alert("open!");
      openSkylineAnay();
    });
</script>
```

## 2.2 具体方法
### 2.2.1 第一步，DevTools定位标签
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;随便选取一个需要关注才能阅读全文的博客，打开开发者控制台窗口，通过逐层选取div，最终可以找到**博文内容article_content**（`id`)，**博文代码pre->code** (`tag`) 和 **隐藏博文hide-article-pos**（`class`）。

<img src="https://img-blog.csdnimg.cn/385d0ab4d5d14a3ba6adea8b01e7f7a5.png?#pic_center">
<center><strong>找到博文内容对应的唯一标识符id为article_content，其样式的overflow被隐藏-</center>
<table>
<tr>
<td>
<img src="https://img-blog.csdnimg.cn/35bd94f782054db482531404e5c882e0.png?#pic_center">
<center><strong>找到代码对应的标签pre下的code</center>
</td>
<td>
<img src="https://img-blog.csdnimg.cn/fb77da161fcf43b4b955431ceb995117.png?#pic_center">
<center><strong>找到隐藏博文的类hide-article-pos，z-index为深度，深度大，所以在上面-</center>
</td>
</tr>
</table>

### 2.2.2 第二步，CSDN博客修改样式（本质为三行js代码）
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此为了将隐藏的博文内容全部显示出来，同时复制其中代码，需要对`css`的属性有基本的深刻认识，要知道每个标签就是一个元素，`document`中可通过`querySelector`选择某类对应的元素，通过`getElementById`选择某标识符对应的元素，通过`getElementsByTagName`选择对应标签，元素获取到后对`style`属性进行修改可使得新样式生效。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;那么需要做的就是**利用js脚本代码对博文内容、隐藏博文和代码进行样式修改**即可，具体就是==修改overflow属性为显示，修改代码对应样式为文本，使隐藏博文的深度尽可能降低==，与此对应的`js`代码如下：

```javascript
 document.getElementById('article_content').style.overflow = "visible";
 document.getElementsByTagName("code")[0].style.userSelect = 'text'；
 document.querySelector("div[class='hide-article-box hide-article-pos text-center']").style.zIndex = -999;
```

## 2.3 js脚本（看这里）
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在明白上述原理的基础上，这里已经将页面其余的评论等div也进行了设置，最后在**CSDN博客**页面***不点登录，不点关注，依然可以查看博客全文***，并且复制博客代码的`js`脚本为==NoLoginWithNoCareToCopyCSDNCode.js==，具体代码如下：
```javascript
/*Author: jing_zhong
Date: 2022.9.1
Function: To solve the problem of logging and focusing on creator of blog in CSDN Website，you can copy code in blog without logging in !
*/
if(document.getElementById('article_content'))
{
   document.getElementById('article_content').style.overflow = "visible";// display the detailed article content
}
//The way to copy code
var Allcode = document.getElementsByTagName("code");
if (Allcode.length > 0)
{
    for (let i = 0; i < Allcode.length; i++) { // allow you to copy code
        Allcode[i].style.userSelect = 'text';
    }
}
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
```

# 3、实例
<img src="https://img-blog.csdnimg.cn/0d024312c26e4aa0a5a0a1271d874445.png?#pic_center">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先欣赏一下[CSDN排行榜之作者总榜](https://blog.csdn.net/rank/list/total)，`每当看到此榜单，深感自愧不如，与此同时又充满动力`，因为==目标就如一座灯塔，照亮创作者前行的路，指引着我们勇敢前行==。
## 3.1 CSDN博客实例一（免关注阅读全文）
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这里以**博主——一个处女座的程序猿**最后发布的博文[DayDayUp：2021，再见了，无论是躺平还是内卷—愿大家改变不可接受的，接受不可改变的—心若有向往，何惧道阻且长](https://yunyaniu.blog.csdn.net/article/details/122261584?spm=1001.2014.3001.5502)为例来说明如何使用`js脚本代码`来实现所述功能。

<table>
<tr>
<td>
<img src="https://img-blog.csdnimg.cn/51943e141ef74af3b055bb87598dfc0f.png?#pic_center">
<center>
<strong>
step1: F12打开DevTools，复制js代码至console控制台
</center>
</td>
<td>
<img src="https://img-blog.csdnimg.cn/a9f77964d9564186a047f4b2354aeb21.png?#pic_center">
<center>
<strong>
Step2: 粘贴js代码后回车（按<kbd>Enter</kbd>键）
</center>
</td>
</tr>
<tr>
<td>
<img src="https://img-blog.csdnimg.cn/9f7f1377e6414438909bb77933a60588.png?#pic_center" width="80%">
<center>
<strong>
初始博客（提示关注方可阅读）
</center>
</td>
<td>
<img src="https://img-blog.csdnimg.cn/9540e5e05dd94ee297049233b4e04975.png?#pic_center" width="80%">
<center>
<strong>
查看博客全文(结果）
</center>
</td>
</tr>
</table>
<center><strong>csdn博客例子1</center>

## 3.2 CSDN博客实例2（免关注阅读全文）
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;同理，步骤同上，以[DayDayUp：佛说：有果必有因。 黑格尔说：世界上没有无缘无故的爱，也没有无缘无故的恨。](https://yunyaniu.blog.csdn.net/article/details/87900015?spm=1001.2014.3001.5502)为例，操作后的结果如下图所示。

<table>
<tr>
<td>
<img src="https://img-blog.csdnimg.cn/75ec6e5903d2433a9ecf36eed6b4aba8.png?#pic_center">
<center><strong>提示需要关注博主才可阅读全文</center>
</td>
</tr>
<tr>
<td>
<img src="https://img-blog.csdnimg.cn/136c639116f647feb844e1c0611d5d62.png?#pic_center" width="80%">
<center><strong>不关注博主也可阅读全文</center>
</td>
</tr>
</table>
<center><strong>csdn博客例子2</center>

## 3.3 CSDN博客实例3（免关注阅读全文并复制代码）
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;同理，比如阅读博客[cesium实现动态流动墙体效果](https://blog.csdn.net/weixin_45782925/article/details/122948785?spm=1001.2101.3001.6650.3&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-3-122948785-blog-122907508.topnsimilarv1&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-3-122948785-blog-122907508.topnsimilarv1&utm_relevant_index=6)并复制代码，步骤同上，结果如下所示。

<table>
<tr>
<td>
<img src="https://img-blog.csdnimg.cn/8d6e21fb58d24445ad38a662ad9fea2a.png?#pic_center" width="100%">
<center><strong>提示需要关注博主才可阅读全文</center>
</td>
</tr>
<tr>
<td>
<img src="https://img-blog.csdnimg.cn/787207a1227046d79898cca1d50bc50c.png?#pic_center" width="100%">
<center><strong>不关注博主也可阅读全文并复制代码</center>
</td>
</tr>
</table>
<center><strong>csdn博客例子3</center>

# 4、总结
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Web`开发所有的网站、网页都是互联网上可以访问到的网络资源，因此海量的服务接口和资源都暴露在网络上供用户、客户浏览和使用，对于学生、开发者而言有很多`提高自身能力和见识`的实践机会（当然在兴趣的基础上）。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一直以来，[Github](https://github.com)和[CSDN](https://blog.csdn.net/)分别作为==国际和国内领先且广为知名的IT技术交流和代码分享平台==，开发者和工程师们越来越离不开平台上分享的博文和代码，究其原因，我认为应该是IT技术生态已然形成，这两个平台不仅受众而且博客内容喜闻乐见、深入浅出，因此广大的创作者们都愿意去记录自己在学习、工作开发过程中的点点滴滴，并与他人`分享交流，共同进步`，避免踩坑。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此外，**很多开源社区都不乏积极热情的参与者、贡献者和见证者**，自己也十分拥抱开源的生态环境，因为==开源充满活力，开源才能持久、开源不止于此，让开发人员更有动力去促进知识、技术及成果的开放与共享==，进而推动现代社会生活不断向`信息化、数字化、智能化`方向阔步迈进。

**注**：==本文旨在促进技术的交流与分享，切勿用于非法和商业用途，望各位周知！！！==