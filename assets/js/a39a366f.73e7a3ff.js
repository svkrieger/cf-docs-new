"use strict";(self.webpackChunkcf_docs_new=self.webpackChunkcf_docs_new||[]).push([[718],{5314:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"docs-dev-guide/index","title":"App developer guide","description":"This guide provides instructions for deploying, running, and managing apps and services with Cloud Foundry.","source":"@site/content_repos/docs-dev-guide/index.mdx","sourceDirName":"docs-dev-guide","slug":"/docs-dev-guide/","permalink":"/cf-docs-new/docs-dev-guide/","draft":false,"unlisted":false,"editUrl":"https://github.com/cloudfoundry/docs-cloudfoundry-concepts/tree/master/content_repos/docs-dev-guide/index.mdx","tags":[],"version":"current","lastUpdatedAt":1744211842000,"frontMatter":{"title":"App developer guide","sidebar_label":"Developing and managing apps"},"sidebar":"devGuideSidebar","next":{"title":"How to push your app with Cloud Foundry CLI (cf push)","permalink":"/cf-docs-new/docs-dev-guide/docs/deploy-apps/"}}');var r=s(4848),l=s(8453);const d={title:"App developer guide",sidebar_label:"Developing and managing apps"},t=void 0,o={},a=[{value:"<a></a> Overview",id:"-overview",level:2},{value:"<a></a> Contents",id:"-contents",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This guide provides instructions for deploying, running, and managing apps and services with Cloud Foundry."}),"\n",(0,r.jsxs)(n.h2,{id:"-overview",children:[(0,r.jsx)("a",{id:"overview"})," Overview"]}),"\n",(0,r.jsx)(n.p,{children:"Developing, running, and managing apps on Cloud Foundry might include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Deploying and scaling apps with diverse languages, frameworks, and dependencies"}),"\n",(0,r.jsx)(n.li,{children:"Finding software services in the services Marketplace, such as databases, email, or message servers"}),"\n",(0,r.jsx)(n.li,{children:"Creating your own Cloud Foundry service based on an external server"}),"\n",(0,r.jsx)(n.li,{children:"Creating service instances and binding them to your apps"}),"\n",(0,r.jsx)(n.li,{children:"Streaming app logs to an external log management service"}),"\n",(0,r.jsx)(n.li,{children:"Troubleshooting app deployment and health"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If you do these things, you are a Cloud Foundry\xa0",(0,r.jsx)(n.strong,{children:"developer"}),", and the contents of this guide are for you."]}),"\n",(0,r.jsxs)(n.h2,{id:"-contents",children:[(0,r.jsx)("a",{id:"contents"})," Contents"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"deploy-apps/prepare-to-deploy.html",children:"Considerations for designing and running an app in the cloud"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"cf push:"})," How to use ",(0,r.jsx)(n.code,{children:"cf push"})," and troubleshoot when running ",(0,r.jsx)(n.code,{children:"cf push"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"deploy-apps/deploy-app.html",children:"Pushing your app using Cloud Foundry CLI (cf push)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"deploy-apps/manifest.html",children:"Deploying with app manifests"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"deploy-apps/manifest-attributes.html",children:"App manifest attribute reference"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"deploy-apps/push-docker.html",children:"Deploying your app with Docker"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"deploy-apps/large-app-deploy.html",children:"Deploying your large apps"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"deploy-apps/start-restart-restage.html",children:"Starting, restarting, and restaging apps"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"multiple-processes.html",children:"Pushing an app with multiple processes"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"push-sub-commands.html",children:"Running cf push sub-step commands"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"deploy-apps/rolling-deploy.html",children:"Configuring app deployments"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"sidecars.html",children:"Pushing apps with sidecar processes"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"deploy-apps/blue-green.html",children:"Using blue-green deployment to reduce downtime and risk"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"deploy-apps/troubleshoot-app-health.html",children:"Troubleshooting app deployment and health"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Routes and Domains:"})," How to configure routes and domains."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"deploy-apps/routes-domains.html",children:"Configuring routes and domains"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"custom-per-route-options.html",children:"Configuring per-route options"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"custom-ports.html",children:"Configuring Cloud Foundry to route traffic to apps on custom ports"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"http2-protocol.html",children:"Routing HTTP/2 and gRPC traffic to apps"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Managing Apps with the cf CLI:"})," How to manage apps through the Cloud Foundry Command Line Interface (cf CLI)."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"using-tasks.html",children:"Running tasks in your apps"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"deploy-apps/cf-scale.html",children:"Scaling an app Using cf scale"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"deploy-apps/healthchecks.html",children:"Using app health checks"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"revisions.html",children:"Cloud Foundry API app revisions"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"deploy-apps/cf-networking.html",children:"Configuring container-to-container networking"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Managing Services:"})," How to use software services from your apps."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"services/index.html",children:"Services overview"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"services/managing-services.html",children:"Managing service instances with the cf CLI"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"services/sharing-instances.html",children:"Sharing service instances"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"services/application-binding.html",children:"Delivering service credentials to an app"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"services/service-keys.html",children:"Managing service keys"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"services/route-binding.html",children:"Managing app requests with route services"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"services/play-service-bindings.html",children:"Configuring Play Framework service connections"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"services/using-vol-services.html",children:"Using an external file system (volume services)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"services/user-provided.html",children:"User-provided service instances"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Streaming App Logs:"})," How to stream app logs to third-party log management services."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"services/log-management.html",children:"Streaming app logs to log management services"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"services/log-management-thirdparty-svc.html",children:"Service-specific instructions for streaming app logs"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"services/integrate-splunk.html",children:"Streaming app logs to Splunk"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"services/fluentd.html",children:"Streaming app logs with Fluentd"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"services/oms-nozzle.html",children:"Streaming app logs to Azure OMS Log Analytics"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SSH for Apps and Services:"})," How to configure and use SSH access to apps and services."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"deploy-apps/app-ssh-overview.html",children:"App SSH overview"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"deploy-apps/ssh-apps.html",children:"Accessing apps with SSH"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"deploy-apps/ssh-services.html",children:"Accessing services with SSH"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"deploy-apps/environment-variable.html",children:"Cloud Foundry environment variables"}),": The environment variables that the Cloud Foundry runtime and buildpacks set for a deployed app."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"capi/client-libraries.html",children:"Cloud Controller API client libraries"}),": Libraries for calling the Cloud Controller, the executive component of Cloud Foundry, programmatically."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>t});var i=s(6540);const r={},l=i.createContext(r);function d(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);