"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return b}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),b=o,y=d["".concat(u,".").concat(b)]||d[b]||p[b]||i;return t?n.createElement(y,a(a({ref:r},c),{},{components:t})):n.createElement(y,a({ref:r},c))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3227:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],l={sidebar_label:"Create And Release RF Libraries",title:"Creating and Releasing Your Own Libraries"},u=void 0,s={unversionedId:"releasing_your_own_libraries",id:"releasing_your_own_libraries",title:"Creating and Releasing Your Own Libraries",description:"Check out the Robot Framework User Guide for more information.",source:"@site/docs/releasing_your_own_libraries.md",sourceDirName:".",slug:"/releasing_your_own_libraries",permalink:"/releasing_your_own_libraries",editUrl:"https://github.com/MarketSquare/robotframeworkguides/docs/releasing_your_own_libraries.md",tags:[],version:"current",frontMatter:{sidebar_label:"Create And Release RF Libraries",title:"Creating and Releasing Your Own Libraries"},sidebar:"tutorialSidebar",previous:{title:"Parsing Test Results",permalink:"/parsing_results"},next:{title:"Reporting Test Results",permalink:"/reporting_alternatives"}},c={},p=[{value:"Creating Python Keywords and Libraries",id:"creating-python-keywords-and-libraries",level:2},{value:"Releasing your own Library",id:"releasing-your-own-library",level:2},{value:"Using Poetry to manage your dependencies and publishing",id:"using-poetry-to-manage-your-dependencies-and-publishing",level:2}],d={toc:p};function b(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#extending-robot-framework"},"Robot Framework User Guide")," for more information."),(0,i.kt)("h2",{id:"creating-python-keywords-and-libraries"},"Creating Python Keywords and Libraries"),(0,i.kt)("p",null,"Talk ",(0,i.kt)("strong",{parentName:"p"},"Creating Libraries - Why and How")," from RoboCon 2021  "),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/DxqCP_EJJXc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"releasing-your-own-library"},"Releasing your own Library"),(0,i.kt)("p",null,"Talk ",(0,i.kt)("strong",{parentName:"p"},"\u201cFor the very first time\u201d - Start to Code, Test, Package & Publish your first Library")," from RoboCon 2022  "),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/BblpFESySiI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"using-poetry-to-manage-your-dependencies-and-publishing"},"Using Poetry to manage your dependencies and publishing"),(0,i.kt)("p",null,"Talk ",(0,i.kt)("strong",{parentName:"p"},"Project and package management: Poetry for robots")," from RoboCon 2022  "),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/UjzXCDcnTs0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}b.isMDXComponent=!0}}]);