"use strict";(self.webpackChunkcf_docs_new=self.webpackChunkcf_docs_new||[]).push([[8438],{984:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>p,metadata:()=>i,toc:()=>t});const i=JSON.parse('{"id":"docs-dev-guide/docs/deploy-apps/index","title":"How to push your app with Cloud Foundry CLI (cf push)","description":"These topics contain the procedures for deploying apps with cf push:","source":"@site/content_repos/docs-dev-guide/docs/deploy-apps/index.md","sourceDirName":"docs-dev-guide/docs/deploy-apps","slug":"/docs-dev-guide/docs/deploy-apps/","permalink":"/cf-docs-new/docs-dev-guide/docs/deploy-apps/","draft":false,"unlisted":false,"editUrl":"https://github.com/cloudfoundry/docs-cloudfoundry-concepts/tree/master/content_repos/docs-dev-guide/docs/deploy-apps/index.md","tags":[],"version":"current","lastUpdatedAt":1744211842000,"frontMatter":{"title":"How to push your app with Cloud Foundry CLI (cf push)","owner":"cf cli"},"sidebar":"devGuideSidebar","previous":{"title":"Developing and managing apps","permalink":"/cf-docs-new/docs-dev-guide/"},"next":{"title":"Pushing your app with Cloud Foundry CLI (cf push)","permalink":"/cf-docs-new/docs-dev-guide/docs/deploy-apps/deploy-app"}}');var o=s(4848),l=s(8453);const p={title:"How to push your app with Cloud Foundry CLI (cf push)",owner:"cf cli"},r=void 0,d={},t=[{value:"<a></a> Troubleshooting",id:"-troubleshooting",level:2},{value:"<a></a> How cf push works",id:"-how-cf-push-works",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["These topics contain the procedures for deploying apps with ",(0,o.jsx)(n.code,{children:"cf push"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"./deploy-apps/deploy-app.html",children:"Pushing your app using Cloud Foundry CLI (cf push)"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"./deploy-apps/manifest.html",children:"Deploying with app manifests"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"./deploy-apps/manifest-attributes.html",children:"App manifest attribute reference"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"./deploy-apps/push-docker.html",children:"Deploying an app with Docker"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"./deploy-apps/large-app-deploy.html",children:"Deploying your large apps"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"./deploy-apps/start-restart-restage.html",children:"Starting, restarting, and restaging Apps"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"../buildpacks/use-multiple-buildpacks.html",children:"Pushing your app with multiple buildpacks"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"./multiple-processes.html",children:"Pushing an app with multiple processes"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"push-sub-commands.html",children:"Running cf push sub-step commands"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"./deploy-apps/rolling-deploy.html#canary",children:"Configuring canary app deployments"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"./deploy-apps/rolling-deploy.html",children:"Configuring rolling app deployments"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"./sidecars.html",children:"Pushing apps with sidecar processes"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"-troubleshooting",children:[(0,o.jsx)("a",{id:"troubleshoot"})," Troubleshooting"]}),"\n",(0,o.jsxs)(n.p,{children:["For information about troubleshooting when running ",(0,o.jsx)(n.code,{children:"cf push"}),", see ",(0,o.jsx)(n.a,{href:"deploy-apps/troubleshoot-app-health.html",children:"Troubleshooting app deployment and health"}),"."]}),"\n",(0,o.jsxs)(n.h2,{id:"-how-cf-push-works",children:[(0,o.jsx)("a",{id:"how-push-works"})," How cf push works"]}),"\n",(0,o.jsxs)(n.p,{children:["The following topics provide information about how ",(0,o.jsx)(n.code,{children:"cf push"})," works:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"../cf-cli/getting-started.html#push",children:"Push"})," section of ",(0,o.jsx)(n.em,{children:"Getting Started with the cf CLI"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"./deploy-apps/app-lifecycle.html",children:"The application container life cycle on Diego architecture"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"../concepts/how-applications-are-staged.html",children:"How apps are staged"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>p,x:()=>r});var i=s(6540);const o={},l=i.createContext(o);function p(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:p(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);