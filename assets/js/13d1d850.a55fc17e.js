"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[630],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return b}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(r),b=o,m=f["".concat(u,".").concat(b)]||f[b]||c[b]||a;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9726:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],i={sidebar_label:"Restful Booker",title:"Restful Booker"},u=void 0,p={unversionedId:"examples/restfulbooker",id:"examples/restfulbooker",title:"Restful Booker",description:"Webpage//restful-booker.herokuapp.com/",source:"@site/docs/examples/restfulbooker.md",sourceDirName:"examples",slug:"/examples/restfulbooker",permalink:"/examples/restfulbooker",editUrl:"https://github.com/MarketSquare/robotframeworkguides/docs/examples/restfulbooker.md",tags:[],version:"current",frontMatter:{sidebar_label:"Restful Booker",title:"Restful Booker"},sidebar:"tutorialSidebar",previous:{title:"Vehicle Insurance App",permalink:"/examples/insurance"},next:{title:"TodoMVC",permalink:"/examples/todo"}},l={},c=[],f={toc:c};function b(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Webpage: ",(0,a.kt)("a",{parentName:"p",href:"https://restful-booker.herokuapp.com/"},"https://restful-booker.herokuapp.com/"),(0,a.kt)("br",{parentName:"p"}),"\n","GitHub: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mwinteringham/restful-booker"},"https://github.com/mwinteringham/restful-booker"),(0,a.kt)("br",{parentName:"p"}),"\n","Technology: Restful API, Web Service  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-robotframework"},"*** Settings ***\nLibrary    RequestsLibrary\nLibrary    Collections\nSuite Setup    Authenticate as Admin\n\n*** Test Cases ***\nGet Bookings from Restful Booker\n    ${response}    GET    https://restful-booker.herokuapp.com/booking\n    Status Should Be    200\n    Log List    ${response.json()}\n    \n\nCreate a Booking at Restful Booker\n    ${booking_dates}    Create Dictionary    checkin=2022-12-31    checkout=2023-01-01\n    ${body}    Create Dictionary    firstname=Hans    lastname=Gruber    totalprice=200    depositpaid=false    bookingdates=${booking_dates}\n    ${response}    POST    url=https://restful-booker.herokuapp.com/booking    json=${body}\n    Status Should Be    200\n    ${id}    Set Variable    ${response.json()}[bookingid]\n    Set Suite Variable    ${id}\n    ${response}    GET    https://restful-booker.herokuapp.com/booking/${id}\n    Log    ${response.json()}\n    Should Be Equal    ${response.json()}[lastname]    Gruber\n    Should Be Equal    ${response.json()}[firstname]    Hans   \n    Should Be Equal As Numbers    ${response.json()}[totalprice]    200\n    Dictionary Should Contain Value     ${response.json()}    Gruber\n\nDelete Booking\n    ${header}    Create Dictionary    Cookie=token\\=${token}\n    ${response}    DELETE    url=https://restful-booker.herokuapp.com/booking/${id}    headers=${header}   \n    Status Should Be    201    ${response}\n\n*** Keywords ***\nAuthenticate as Admin\n    ${body}    Create Dictionary    username=admin    password=password123\n    ${response}    POST    url=https://restful-booker.herokuapp.com/auth    json=${body}\n    Log    ${response.json()}\n    ${token}    Set Variable    ${response.json()}[token]\n    Log    ${token}\n    Set Suite Variable    ${token}\n")))}b.isMDXComponent=!0}}]);