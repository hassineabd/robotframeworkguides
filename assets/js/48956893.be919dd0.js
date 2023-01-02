"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[410],{5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(6010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),o=n(7294),l=n(6010),r=n(2389),i=n(7392),s=n(7094),p=n(2466);const m="tabList__CuJ",d="tabItem_LNqP";function u(e){const{lazy:t,block:n,defaultValue:r,values:u,groupId:c,className:k}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=u??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,i.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===r?r:r??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,s.U)(),[f,N]=(0,o.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=c){const e=v[c];null!=e&&e!==f&&y.some((t=>t.value===e))&&N(e)}const P=e=>{const t=e.currentTarget,n=C.indexOf(t),a=y[n].value;a!==f&&(T(t),N(a),null!=c&&w(c,String(a)))},x=e=>{let t=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",m)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},k)},y.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,key:t,ref:e=>C.push(e),onKeyDown:x,onClick:P},r,{className:(0,l.Z)("tabs__item",d,r?.className,{"tabs__item--active":f===t})}),n??t)}))),t?(0,o.cloneElement)(h.filter((e=>e.props.value===f))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}function c(e){const t=(0,r.Z)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}},2282:(e,t,n)=>{n.d(t,{_:()=>i,w:()=>s});var a=n(7294),o=n(7376),l=n(9960),r=n(6010);function i(e){let{id:t,title:n,children:l,description:i,className:s,hasSubSections:p=!1,HeadingTag:m="h3"}=e;return a.createElement("div",{className:(0,r.Z)("homepage-section",p&&"has-sub-sections",s)},n&&a.createElement(m,{id:t??(0,o.o)(n)},n),i&&a.createElement("p",{className:"section-description"},i),a.createElement("div",{className:"section-content"},l))}function s(e){let{id:t,icon:n,title:r,description:i,to:s}=e;return a.createElement(l.Z,{to:s,className:"homepage-card"},n&&a.createElement("div",{className:"icon"},n),a.createElement("div",{className:"card-content"},a.createElement("div",{className:"title",id:t&&(0,o.o)(r)},r),a.createElement("div",{className:"description"},i)))}},533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>m,toc:()=>u});var a=n(7462),o=(n(7294),n(3905)),l=n(5488),r=n(5162),i=n(2282);const s={sidebar_position:1,sidebar_label:"I'm looking for testing",title:"I'm looking for testing",description:"Install Python and Robot Framework using pip"},p=void 0,m={unversionedId:"getting_started/testing",id:"getting_started/testing",title:"I'm looking for testing",description:"Install Python and Robot Framework using pip",source:"@site/docs/getting_started/testing.mdx",sourceDirName:"getting_started",slug:"/getting_started/testing",permalink:"/docs/getting_started/testing",draft:!1,editUrl:"https://github.com/MarketSquare/robotframeworkguides/docs/getting_started/testing.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"I'm looking for testing",title:"I'm looking for testing",description:"Install Python and Robot Framework using pip"},sidebar:"tutorialSidebar",previous:{title:"About Us",permalink:"/docs/about_us"},next:{title:"I'm looking for RPA",permalink:"/docs/getting_started/rpa"}},d={},u=[{value:"Install Python",id:"install-python",level:2},{value:"Install Robot Framework",id:"install-robot-framework",level:2},{value:"Install Robot Framework globally",id:"install-robot-framework-globally",level:3},{value:"Install Robot Framework in a Virtual Environment",id:"install-robot-framework-in-a-virtual-environment",level:3},{value:"Other Recommendations",id:"other-recommendations",level:2},{value:"Managing Dependencies with poetry",id:"managing-dependencies-with-poetry",level:3},{value:"Virtual Environments folder",id:"virtual-environments-folder",level:4},{value:"Initialize a new project",id:"initialize-a-new-project",level:4},{value:"Add dependencies",id:"add-dependencies",level:4},{value:"Run Commands in the Virtual Environment",id:"run-commands-in-the-virtual-environment",level:4}],c={toc:u};function k(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This chapter will help you to get started with Robot Framework."),(0,o.kt)(i._,{mdxType:"Section"},(0,o.kt)(i.w,{title:"Install Python",description:"How to install Python ",to:"/docs/getting_started/testing#install-python",mdxType:"Card"}),(0,o.kt)(i.w,{title:"Install Robot Framework",description:"How to install Robot Framework",to:"/docs/getting_started/testing#install-robot-framework",mdxType:"Card"}),(0,o.kt)(i.w,{title:"Set up IDE",description:"How to install and set up your IDE for coding and debugging",to:"/docs/getting_started/ide",mdxType:"Card"})),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/1jdjogCnsDk",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"install-python"},"Install Python"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"Windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Install Python Windows",src:n(202).Z,width:"928",height:"648"}),"  "),(0,o.kt)("p",null,"Download and run the ",(0,o.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"Python")," installer"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select option ",(0,o.kt)("inlineCode",{parentName:"li"},"Add Python 3.X to PATH")),(0,o.kt)("li",{parentName:"ol"},"(optional) install to a sub-folder on root of your drive (e.g. C:\\Python3.X)"),(0,o.kt)("li",{parentName:"ol"},"Open a command line by",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"pressing ",(0,o.kt)("inlineCode",{parentName:"li"},"Windows key + R")),(0,o.kt)("li",{parentName:"ol"},"typing ",(0,o.kt)("inlineCode",{parentName:"li"},"cmd")," and pressing ",(0,o.kt)("inlineCode",{parentName:"li"},"Enter"),"  ")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},"python -V\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Check Python version",src:n(5014).Z,width:"341",height:"225"}))),(0,o.kt)(r.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,o.kt)("p",null,"Open a terminal by either"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"pressing ",(0,o.kt)("inlineCode",{parentName:"li"},"Ctrl")," + ",(0,o.kt)("inlineCode",{parentName:"li"},"Alt")," + ",(0,o.kt)("inlineCode",{parentName:"li"},"T")),(0,o.kt)("li",{parentName:"ol"},"pressing the ",(0,o.kt)("inlineCode",{parentName:"li"},"Windows key")," and typing ",(0,o.kt)("inlineCode",{parentName:"li"},"terminal")),(0,o.kt)("li",{parentName:"ol"},"right-clicking in your file explorer and selecting ",(0,o.kt)("inlineCode",{parentName:"li"},"Open in Terminal"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install python3 python3-pip\npython3 -V\n"))),(0,o.kt)(r.Z,{value:"MacOs",label:"MacOs",mdxType:"TabItem"},(0,o.kt)("p",null,"We will use ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv"},"pyenv")," to install Python."),(0,o.kt)("p",null,"Install homebrew"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,o.kt)("p",null,"Follow instructions to add brew to path\n(Those are shown after homebrew installation)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'echo \'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"\' >> $HOME/.profile\neval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"\n')),(0,o.kt)("p",null,"Install pyenv"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install pyenv\n")),(0,o.kt)("p",null,"Add pyenv to Path"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'echo \'export PYENV_ROOT="$HOME/.pyenv"\' >> ~/.bashrc\necho \'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"\' >> ~/.bashrc\necho \'eval "$(pyenv init -)"\' >> ~/.bashrc\neval "$(pyenv init -)"\n')),(0,o.kt)("p",null,"Add Python Build Dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"xcode-select --install\nbrew install openssl readline sqlite3 xz zlib tcl-tk\n")),(0,o.kt)("p",null,"Install a Python 3.10.6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv install 3.10.6\n")),(0,o.kt)("p",null,"Tell pyenv to use Python 3.10.6 globally"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv global 3.10.6\npython --version\n")))),(0,o.kt)("p",null,"You should see something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Python 3.10.6\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"official Python Downloads page")," or the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.python.org/moin/BeginnersGuide/Download"},"Python Beginner's Guide")," for more information")),(0,o.kt)("h2",{id:"install-robot-framework"},"Install Robot Framework"),(0,o.kt)(i._,{mdxType:"Section"},(0,o.kt)(i.w,{title:"Install Globally",description:"Simple and easy, but not recommended if you are working on multiple projects.",to:"/docs/getting_started/testing#install-robot-framework-globally",mdxType:"Card"}),(0,o.kt)(i.w,{title:"Install in a Virtual Environment",description:"Recommended. Have a separate Python environment for each project.",to:"/docs/getting_started/testing#install-robot-framework-in-a-virtual-environment",mdxType:"Card"})),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Assumptions and other notes"),(0,o.kt)("admonition",{title:"python, python3, pip, pip3",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We assume that Python3 and pip are installed.",(0,o.kt)("br",{parentName:"p"}),"\n","We use the commands ",(0,o.kt)("inlineCode",{parentName:"p"},"pip")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"python")," to install packages or run Python scripts.",(0,o.kt)("br",{parentName:"p"}),"\n","Depending on your setup, those commands may be ",(0,o.kt)("inlineCode",{parentName:"p"},"pip3")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"python3")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"pip")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"python"),".")),(0,o.kt)("admonition",{title:"Terminal, Bash and cmd",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When we mention the word ",(0,o.kt)("inlineCode",{parentName:"p"},"terminal"),", we mean both - a linux terminal (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"bash"),") or a windows command line (",(0,o.kt)("inlineCode",{parentName:"p"},"cmd"),").")),(0,o.kt)("admonition",{title:"Install globally vs. virtual environments",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Python allows you to install modules via ",(0,o.kt)("inlineCode",{parentName:"p"},"pip"),".",(0,o.kt)("br",{parentName:"p"}),"\n","By default, those modules are installed in the global Python environment."),(0,o.kt)("p",{parentName:"admonition"},"But especially when working on multiple projects, it is more convenient to have a separate Python environment for each project with all the required packages installed (like ",(0,o.kt)("inlineCode",{parentName:"p"},"robotframework")," or additional libraries like ",(0,o.kt)("inlineCode",{parentName:"p"},"robotframework-seleniumlibrary"),").",(0,o.kt)("br",{parentName:"p"}),"\n","To separate the global Python environment from the project environment, you can use a ",(0,o.kt)("inlineCode",{parentName:"p"},"virtual environment"),".",(0,o.kt)("br",{parentName:"p"}),"\n","We will cover both approaches in the following chapters.")),(0,o.kt)("admonition",{title:"Show info about installed packages",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can type ",(0,o.kt)("inlineCode",{parentName:"p"},"pip show robotframework")," to get more information about the installed version of Robot Framework and the install location."))),(0,o.kt)("h3",{id:"install-robot-framework-globally"},"Install Robot Framework globally"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"Install Robot Framework globally",label:"Global",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null," Open your ",(0,o.kt)("inlineCode",{parentName:"p"},"terminal")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},"pip install robotframework\nrobot --version\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Install Robot Framework",src:n(6659).Z,width:"496",height:"270"})))),(0,o.kt)("p",null,"You should see something like"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Robot Framework 5.x.y (Python 3.x.y)\n")),(0,o.kt)("h3",{id:"install-robot-framework-in-a-virtual-environment"},"Install Robot Framework in a Virtual Environment"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"Windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"We recommend to have a folder on your drive to store your projects, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\projects"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Open your ",(0,o.kt)("inlineCode",{parentName:"p"},"terminal")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},"cd C:\\projects\nmkdir MyProject\ncd MyProject\npython -m venv .venv\n.venv\\Scripts\\activate.bat\npip install robotframework\nrobot --version\n")),(0,o.kt)("p",null,"You should see something like"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},"Robot Framework 5.x.y (Python 3.x.y)\n")),(0,o.kt)("p",null,"You can type ",(0,o.kt)("inlineCode",{parentName:"p"},"pip show robotframework")," to get more information about the installed version of Robot Framework and the install location.",(0,o.kt)("br",{parentName:"p"}),"\n","The virtual environment can be deactivated by typing ",(0,o.kt)("inlineCode",{parentName:"p"},"venv\\Scripts\\deactivate.bat"),"."),(0,o.kt)("p",null,"If you prefer to use ",(0,o.kt)("inlineCode",{parentName:"p"},"PowerShell")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"cmd"),", you can use the following commands for activating and deactivating the virtual environment:  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Activate: ",(0,o.kt)("inlineCode",{parentName:"li"},"venv\\Scripts\\activate.ps1")),(0,o.kt)("li",{parentName:"ul"},"Deactivate: ",(0,o.kt)("inlineCode",{parentName:"li"},"venv\\Scripts\\deactivate.ps1"),"  "))),(0,o.kt)(r.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,o.kt)("p",null,"We recommend to have a folder on your drive to store your projects, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"~/projects"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Open your ",(0,o.kt)("inlineCode",{parentName:"p"},"terminal")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},"cd ~/projects\nmkdir MyProject\ncd MyProject\npython -m venv .venv\nsource .venv/bin/activate\npip install robotframework\nrobot --version\n")),(0,o.kt)("p",null,"You should see something like"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},"Robot Framework 5.x.y (Python 3.x.y)\n")),(0,o.kt)("p",null,"The virtual environment can be deactivated by typing ",(0,o.kt)("inlineCode",{parentName:"p"},"source .venv/bin/deactivate"),".")),(0,o.kt)(r.Z,{value:"MacOS",label:"MacOS",default:!0,mdxType:"TabItem"},"We recommend to have a folder on your drive to store your projects, e.g. `~/projects`. Open your `terminal`",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},"cd ~/projects\nmkdir MyProject\ncd MyProject\n")),(0,o.kt)("p",null,"Tell pyenv to use Python 3.10.6 (if you haven't done so already).",(0,o.kt)("br",{parentName:"p"}),"\n","Either globally"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv global 3.10.6\n")),(0,o.kt)("p",null,"Or locally (for the current folder only)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv local 3.10.6\n")),(0,o.kt)("p",null,"Create and activate a new Virtual Environment and install robotframework"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python -m venv .venv\nsource .venv/bin/activate\npip install robotframework\nrobot --version\n")),(0,o.kt)("p",null,"You should see something like"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},"Robot Framework 5.x.y (Python 3.x.y)\n")),(0,o.kt)("p",null,"The virtual environment can be deactivated by typing ",(0,o.kt)("inlineCode",{parentName:"p"},"source .venv/bin/deactivate"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Install Robot Framework in Virtual Environment",src:n(9180).Z,width:"591",height:"339"})),(0,o.kt)("h2",{id:"other-recommendations"},"Other Recommendations"),(0,o.kt)("h3",{id:"managing-dependencies-with-poetry"},"Managing Dependencies with poetry"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://python-poetry.org/"},"Poetry")," is a tool for dependency management and packaging in Python."),(0,o.kt)("p",null,"It allows you to declare the libraries your project depends on and it will manage (install/update) them for you.",(0,o.kt)("br",{parentName:"p"}),"\n","You can use it when you start any new project ",(0,o.kt)("strong",{parentName:"p"},"python")," or ",(0,o.kt)("strong",{parentName:"p"},"robotframework")," project."),(0,o.kt)("p",null,"Install poetry by following the ",(0,o.kt)("a",{parentName:"p",href:"https://python-poetry.org/docs/#installation"},"official instructions"),"."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"Windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Open PowerShell and run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},"(Invoke-WebRequest -Uri https://install.python-poetry.org -UseBasicParsing).Content | py -\n")),(0,o.kt)("p",null,"\ud83d\udca1If you have installed Python through the Microsoft Store, replace ",(0,o.kt)("inlineCode",{parentName:"p"},"py")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"python")," in the command above.")),(0,o.kt)(r.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,o.kt)("p",null,"Open your terminal and run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSL https://install.python-poetry.org | python3 -\n")),(0,o.kt)("p",null,"\ud83d\udca1On some systems, ",(0,o.kt)("inlineCode",{parentName:"p"},"python")," may still refer to Python 2 instead of Python 3. So we used ",(0,o.kt)("inlineCode",{parentName:"p"},"python3")," in the command above. ")),(0,o.kt)(r.Z,{value:"MacOS",label:"MacOS",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Open your terminal and run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSL https://install.python-poetry.org | python3 -\n")),(0,o.kt)("p",null,"\ud83d\udca1On some systems, ",(0,o.kt)("inlineCode",{parentName:"p"},"python")," may still refer to Python 2 instead of Python 3. So we used ",(0,o.kt)("inlineCode",{parentName:"p"},"python3")," in the command above."))),(0,o.kt)("p",null,"Run poetry once to check if it's installed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"poetry --version\n")),(0,o.kt)("h4",{id:"virtual-environments-folder"},"Virtual Environments folder"),(0,o.kt)("p",null,"Poetry will save the virtual enviromentson in the ",(0,o.kt)("inlineCode",{parentName:"p"},".poetry/envs")," folder. You can change that setting and store your virtual environment in the project folder by running"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"poetry config virtualenvs.in-project true\n")),(0,o.kt)("h4",{id:"initialize-a-new-project"},"Initialize a new project"),(0,o.kt)("p",null,"To initialize a new project, run the following command in your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"poetry init\n")),(0,o.kt)("p",null,"Poetry will ask you some questions about your project. You can leave the default values by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"Enter")," or enter your own values."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"This command will guide you through creating your pyproject.toml config.\n\nPackage name [your-project-name]:\nVersion [0.1.0]:\nDescription []:\nAuthor [Your Name <your.email@example.com>, n to skip]:\nLicense []:\nCompatible Python versions [^3.10]:\n\nWould you like to define your main dependencies interactively? (yes/no) [yes] no\nWould you like to define your development dependencies interactively? (yes/no) [yes] no\n")),(0,o.kt)("p",null,"After the initialization, you will see a new file called ",(0,o.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," in your project folder. This file contains all the information about your project and the dependencies."),(0,o.kt)("h4",{id:"add-dependencies"},"Add dependencies"),(0,o.kt)("p",null,"To add a dependency, run the following command in your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"poetry add robotframework\n")),(0,o.kt)("p",null,"You can also add multiple dependencies at once:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"poetry add robotframework robotframework-browser robotframework-requests\n")),(0,o.kt)("p",null,"On the first run, poetry will create a virtual environment for your project and install the dependencies."),(0,o.kt)("h4",{id:"run-commands-in-the-virtual-environment"},"Run Commands in the Virtual Environment"),(0,o.kt)("p",null,"To run commands in the virtual environment, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"poetry run")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"poetry run robot --version\n")),(0,o.kt)("p",null,"To e.g. install the playwright dependencies for robotframework-browser, you can run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"poetry run rfbrowser init\n")),(0,o.kt)("p",null,"You can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"poetry shell")," command to open a shell in the virtual environment.",(0,o.kt)("br",{parentName:"p"}),"\n","All commands you run in this shell will be executed in the virtual environment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"poetry shell\n(.venv) robot --version\n")),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://python-poetry.org/docs/"},"official documentation")," for more information."),(0,o.kt)("p",null,"There is also a great Lightning Talk ",(0,o.kt)("strong",{parentName:"p"},"Project and package management: Poetry for robots")," from RoboCon 2022  "),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/UjzXCDcnTs0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}k.isMDXComponent=!0},5014:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/checkpythonwin-a58c0bf47cb36c1cf587535e836ee3ab.gif"},202:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/installpywin-3e1f56adfb2072ed3de580686d9e5ce0.gif"},6659:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/installrfwin-3aea91e88819d282a6f542422f64aa62.gif"},9180:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/installvenvwin-87cf92a9b5ddcf6ec475a4db471795f7.gif"}}]);