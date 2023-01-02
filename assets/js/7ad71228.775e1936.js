"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[200],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>y});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),c=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=c(e.components);return a.createElement(l.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=n,y=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return t?a.createElement(y,i(i({ref:r},d),{},{components:t})):a.createElement(y,i({ref:r},d))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1591:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(7462),n=(t(7294),t(3905));const o={sidebar_position:0,sidebar_label:"Python Libraries",title:"Python Libraries"},i=void 0,s={unversionedId:"extending_robot_framework/python_library",id:"extending_robot_framework/python_library",title:"Python Libraries",description:"Talk Creating Libraries - Why and How from RoboCon 2021",source:"@site/docs/extending_robot_framework/python_library.md",sourceDirName:"extending_robot_framework",slug:"/extending_robot_framework/python_library",permalink:"/docs/extending_robot_framework/python_library",draft:!1,editUrl:"https://github.com/MarketSquare/robotframeworkguides/docs/extending_robot_framework/python_library.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Python Libraries",title:"Python Libraries"},sidebar:"tutorialSidebar",previous:{title:"CI Systems",permalink:"/docs/using_rf_in_ci_systems/ci"},next:{title:"Create And Release Libraries",permalink:"/docs/extending_robot_framework/releasing_your_own_libraries"}},l={},c=[{value:"Static Library",id:"static-library",level:2},{value:"Static Library With a Class",id:"static-library-with-a-class",level:3},{value:"Static Library withouth a Class",id:"static-library-withouth-a-class",level:3},{value:"Decorators",id:"decorators",level:2},{value:"Examples",id:"examples",level:2}],d={toc:c};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Talk ",(0,n.kt)("strong",{parentName:"p"},"Creating Libraries - Why and How")," from RoboCon 2021  "),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/DxqCP_EJJXc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("h2",{id:"static-library"},"Static Library"),(0,n.kt)("p",null,"A static library has all of its robot framework keywords defined as python functions."),(0,n.kt)("h3",{id:"static-library-with-a-class"},"Static Library With a Class"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'class DemoLibrary:\n    def __init__(self, *args, **kwargs):\n        print(f"Sample Library initialized with args: {args} and kwargs: {kwargs}")\n \n    def my_keyword(self, *args, **kwargs):\n        print(f"Keyword got args: {args} and kwargs: {kwargs}")\n        return "Hello World"\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-robotframework"},"*** Settings ***\nLibrary    DemoLibrary.py\n\n*** Test Cases ***\nUse a Keyword with multiple arguments\n    My Keyword    Argument 1    Argument 2    Named Argument=One Value\n")),(0,n.kt)("iframe",{src:"https://robotframework.org/embed/?code-gh-url=https://github.com/MarketSquare/robotframeworkguides/tree/main/code-examples/extending_robot_framework/static_library/Static_Library_With_Class",width:"100%",height:"250"}),(0,n.kt)("h3",{id:"static-library-withouth-a-class"},"Static Library withouth a Class"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import base64\n\ndef encode_as_base64(string):\n    """\n    Encode string as base64.\n    """\n    return base64.b64encode(string.encode())\n\ndef decode_from_base64(string):\n    """\n    Decode string from base64.\n    """\n    return base64.b64decode(string).decode()\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-robotframework"},"*** Settings ***\nLibrary    LibraryWithoutClass.py\n\n*** Test Cases ***\nUse Custom Keywords\n    ${base64}    Encode As Base64    This is a Test String\n    Log    ${base64}\n    ${decoded}    Decode From Base64    ${base64}\n    Log    ${decoded}\n")),(0,n.kt)("iframe",{src:"https://robotframework.org/embed/?code-gh-url=https://github.com/MarketSquare/robotframeworkguides/tree/main/code-examples/extending_robot_framework/static_library/Static_Library_Without_Class",width:"100%",height:"350"}),(0,n.kt)("h2",{id:"decorators"},"Decorators"),(0,n.kt)("p",null,"You can add decorators like ",(0,n.kt)("inlineCode",{parentName:"p"},"@keyword")," ",(0,n.kt)("inlineCode",{parentName:"p"},"@not_keyword")," to mark your functions as keywords and e.g. provide another name for the keyword."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from robot.api.deco import keyword, not_keyword\n\n\n@keyword('Login via user panel')\ndef login(username, password):\n      # ...\n\n@not_keyword\ndef this_is_not_keyword():\n    pass\n")),(0,n.kt)("p",null,"It can even be used to add tags or change the argument conversion."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from robot.api.deco import keyword\n\n\n@keyword(tags=['tag1', 'tag2'])\ndef login(username, password):\n    # ...\n\n@keyword('Custom name', ['tags', 'here'])\ndef another_example():\n    # ...\n\n@keyword(types={'count': int, 'case_insensitive': bool})\ndef example_keyword(count, case_insensitive=True):\n    if case_insensitive:\n        # ...\n\n@keyword(types=[int, bool])\ndef example_keyword(count, case_insensitive=True):\n    if case_insensitive:\n        # ...\n")),(0,n.kt)("p",null,"A simple ",(0,n.kt)("inlineCode",{parentName:"p"},"Calculate.py")," library with a single keyword that calculates a mathematical expression."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'def calculate(term):\n    if term == "":\n        return 0\n    else:\n        return eval(term)\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-robotframework"},"*** Settings ***\nLibrary    Calculate.py\n\n*** Test Cases ***\nPerform Calculations\n    ${result}    Calculate    1 + 2\n    Should Be Equal As Numbers    ${result}    3\n    ${result}    Calculate    10 * 5\n    Should Be Equal As Numbers    ${result}    50\n    ${result}    Calculate    8 / 4\n    Should Be Equal As Numbers    ${result}    2\n    ${result}    Calculate    2 - 1\n    Should Be Equal As Numbers    ${result}    1\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("iframe",{src:"https://robotframework.org/embed/?codeProject=N4IgdghgtgpiBcIDCBXAzgFwPZRAGhABMY0BjAJwEsAHDSrMBEfEAM0oBsSEBtUdrgDlocRABUSGAMopKGGADpyWAEZYMLUg3lgNiAFSGABFJgY6YAOZojh-QB0wAGUoryEcgE8jPowAVPDAALBgBpGE8AdyxyQjRHRzsjCUwjJAg0EltDRwBVTLT0bCgjcKiYuMdfI0EsIwBBcksUWF14sGqAeTAYBqaWmF1qlIw+5taMKt8xIPIYXsbxwYwbX27e6ejh2fmpn3WjABEYVggUDlHfPaMAWXO6ai4jk7OL1Z9FgaGARmqPSwAzABeT4TIwA643bxlaKxaqg5ZGX6+BFDABM1WEsEIYy+GCBBwAahAOCg4ABfPD8TgwLGiEAAawisLiShIWBQ5FIcAIWl0yyYRhAlOpQhETAAbh5KBAVFw0Gy0ByuTyQHydHoQEKRWwaXSmAFgmFmRUFdRPJptALEKQOBkbIaQmAYab4NdiKwjAB9L2UMByH0ACkyHFYeFs-zQ4cMDMikYAlG6OtVfNQqLpA6x7CApNBHr0XG4PN4-XIZRxKAAvGA4yJyIJGSPwIzASPkxtgHGxpst7tNNDk7Pxqruk5GMBYL3-PFoYMwUOJ67VNN+jCB7MuuGWdTjurTiYKocJZM+D1GBgwKf9CZz0Ph-6Lk8plcZjcmrc7i+N6+IgDkAFI0F-BRsyMf9v0sYcwFHT1gjmS992WWcQzDRtvnvNF7wBR8U1TdM1zfcoP1GOD5ggmcjAAoDwyo38OxxWiQK1cDAwgdDG0wxtsKgmDzx6L0PVeNcUPvJogV-QT7l-HDcKMF8CJAVFRiCDIjClUlekA0DwIfY9qjPKB7hoLgBJee5kPnVD-nY-40XEySLiRX9RMBeyzMctFpKTWS5Pw9cQAAcR3RC2jAqMwvosLtKMVimhsppOP+bil14qBPC9JkiMIW9UP0SNo30PtrBk3D5MzQiWSMbdRh7Vt+3bCBOyMIq0GbYAWsHEAoJ8uYME5DpswACXnDg6gAdRiDhCGzYUqV1MVYANQInWJKhZXlBRzUtfldEFYUAF0CGIKgJRrPxlAAKxgUg9AwcgyQIZQ1AwQkYHINB6EYRAAFYFAABgUb5hSAA",width:"100%",height:"600"}))}u.isMDXComponent=!0}}]);