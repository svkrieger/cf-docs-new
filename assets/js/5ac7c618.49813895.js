"use strict";(self.webpackChunkcf_docs_new=self.webpackChunkcf_docs_new||[]).push([[6103],{1251:(e,n,s)=>{s.d(n,{A:()=>i});const i={platform_code:"CF",partials:{}}},4857:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>p,contentTitle:()=>h,default:()=>j,frontMatter:()=>c,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"docs-cloudfoundry-concepts/cloudfoundry-concepts/security-and-networking/asg","title":"App security groups in Cloud Foundry","description":"App Security Groups (ASGs) are a collection of egress rules that enable you to specify the protocols,","source":"@site/content_repos/docs-cloudfoundry-concepts/cloudfoundry-concepts/security-and-networking/asg.mdx","sourceDirName":"docs-cloudfoundry-concepts/cloudfoundry-concepts/security-and-networking","slug":"/docs-cloudfoundry-concepts/cloudfoundry-concepts/security-and-networking/asg","permalink":"/cf-docs-new/docs-cloudfoundry-concepts/cloudfoundry-concepts/security-and-networking/asg","draft":false,"unlisted":false,"editUrl":"https://github.com/cloudfoundry/docs-cloudfoundry-concepts/tree/master/content_repos/docs-cloudfoundry-concepts/cloudfoundry-concepts/security-and-networking/asg.mdx","tags":[],"version":"current","lastUpdatedAt":1744291578000,"frontMatter":{"title":"App security groups in Cloud Foundry","owner":"Security"},"sidebar":"cloudfoundryConcepts","previous":{"title":"Planning orgs and spaces in Cloud Foundry","permalink":"/cf-docs-new/docs-cloudfoundry-concepts/cloudfoundry-concepts/security-and-networking/orgs-and-spaces"},"next":{"title":"Cloud Foundry app SSH components and processes","permalink":"/cf-docs-new/docs-cloudfoundry-concepts/cloudfoundry-concepts/security-and-networking/ssh-conceptual"}}');var r=s(4848),t=s(8453),d=s(8069),a=s(1251);function o(e){const n={a:"a",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Cloud Foundry preconfigures two ASGs: ",(0,r.jsx)(n.code,{children:"public_networks"})," and ",(0,r.jsx)(n.code,{children:"dns"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Unless you modify these before your initial deployment, these ASGs are applied by default to all containers in your deployment."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"public_networks"}),": This group allows access to public networks, and blocks access to private networks and link local addresses. Cloud\nFoundry blocks outgoing traffic to the following IP address ranges by specifically allowing traffic to all other addresses:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"10.0.0.0 - 10.255.255.255"}),"\n",(0,r.jsx)(n.li,{children:"169.254.0.0 - 169.254.255.255"}),"\n",(0,r.jsx)(n.li,{children:"172.16.0.0 - 172.31.255.255"}),"\n",(0,r.jsx)(n.li,{children:"192.168.0.0 - 192.168.255.255"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"dns"}),": This group allows access to DNS on port 53 for any IP address. The default ASGs are defined in the ",(0,r.jsx)(n.code,{children:"cf-deployment.yml"})," file as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"  security_group_definitions:\n  - name: public_networks\n    rules:\n    - destination: 0.0.0.0-9.255.255.255\n      protocol: all\n    - destination: 11.0.0.0-169.253.255.255\n      protocol: all\n    - destination: 169.255.0.0-172.15.255.255\n      protocol: all\n    - destination: 172.32.0.0-192.167.255.255\n      protocol: all\n    - destination: 192.169.0.0-255.255.255.255\n      protocol: all\n  - name: dns\n    rules:\n    - destination: 0.0.0.0/0\n      ports: '53'\n      protocol: tcp\n    - destination: 0.0.0.0/0\n      ports: '53'\n      protocol: udp\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Modify the default ASGs to block outbound traffic as necessary for your installation. To see how the ASGs are defined by\ndefault, see the ",(0,r.jsx)(n.a,{href:"https://github.com/cloudfoundry/cf-deployment/blob/main/cf-deployment.yml#L604-L627",children:"cf-deployment.yml"})," file on GitHub."]}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}const c={title:"App security groups in Cloud Foundry",owner:"Security"},h=void 0,p={},u=[{value:"<a></a> Staging and running ASGs",id:"-staging-and-running-asgs",level:2},{value:"<a></a> Platform wide and space scoped ASGs",id:"-platform-wide-and-space-scoped-asgs",level:3},{value:"<a></a> Dynamic ASGs",id:"-dynamic-asgs",level:3},{value:"<a></a> Simplifying ASGs with a services subnet",id:"-simplifying-asgs-with-a-services-subnet",level:3},{value:"<a></a> Default ASGs",id:"-default-asgs",level:3},{value:"<a></a> ASG sets",id:"-asg-sets",level:3},{value:"<a></a> Structure and attributes of ASGs",id:"-structure-and-attributes-of-asgs",level:3},{value:"<a></a> Managing ASGs",id:"-managing-asgs",level:2},{value:"<a></a> Managing ASGs with cf CLI",id:"-managing-asgs-with-cf-cli",level:2},{value:"<a></a> Viewing ASGs",id:"-viewing-asgs",level:3},{value:"<a></a> Creating ASGs",id:"-creating-asgs",level:3},{value:"<a></a> Binding ASGs",id:"-binding-asgs",level:3},{value:"Platform-wide staging ASG set",id:"platform-wide-staging-asg-set",level:4},{value:"Platform-wide running ASG set",id:"platform-wide-running-asg-set",level:4},{value:"Space-scoped running ASG set",id:"space-scoped-running-asg-set",level:4},{value:"Space-scoped staging ASG set",id:"space-scoped-staging-asg-set",level:4},{value:"<a></a> Update ASGs",id:"-update-asgs",level:3},{value:"<a></a> Unbind ASGs",id:"-unbind-asgs",level:3},{value:"Platform-wide staging ASG set",id:"platform-wide-staging-asg-set-1",level:4},{value:"Platform-wide running ASG set",id:"platform-wide-running-asg-set-1",level:4},{value:"Space-scoped ASG set",id:"space-scoped-asg-set",level:4},{value:"<a></a> Delete ASGs",id:"-delete-asgs",level:3},{value:"<a></a> Typical ASGs",id:"-typical-asgs",level:2},{value:"<a></a> DNS",id:"-dns",level:3},{value:"<a></a> Public networks",id:"-public-networks",level:3},{value:"<a></a> Private networks",id:"-private-networks",level:3},{value:"<a></a> ASGs and Performance on Windows",id:"-asgs-and-performance-on-windows",level:3},{value:"<a></a> Marketplace Services",id:"-marketplace-services",level:3},{value:"<a></a> About the ASG Creator tool",id:"-about-the-asg-creator-tool",level:2},{value:"<a></a> ASG logging",id:"-asg-logging",level:2}];function x(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{AppRuntimeAbbr:s,AsgNote:i,DefaultAsg:o}=n;return s||g("AppRuntimeAbbr",!0),i||g("AsgNote",!0),o||g("DefaultAsg",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"App Security Groups (ASGs) are a collection of egress rules that enable you to specify the protocols,\nports, and IP address ranges where app or task instances send traffic."}),"\n",(0,r.jsxs)(n.p,{children:["ASGs define ",(0,r.jsx)(n.strong,{children:"allow"})," rules, and their order of evaluation is unimportant when multiple ASGs apply to the same space or deployment. The platform sets up rules to filter and log outbound network traffic\nfrom app and task instances. ASGs apply to both buildpack-based and Docker-based apps and tasks."]}),"\n",(0,r.jsxs)(n.h2,{id:"-staging-and-running-asgs",children:[(0,r.jsx)("a",{id:"staging-running"})," Staging and running ASGs"]}),"\n",(0,r.jsxs)(n.p,{children:["Admins can define a ",(0,r.jsx)(n.code,{children:"staging"})," ASG for app and task staging, and a ",(0,r.jsx)(n.code,{children:"running"})," ASG for app and task runtime."]}),"\n",(0,r.jsxs)(n.p,{children:["When apps or tasks begin staging, they require traffic rules permissive enough to allow\nthem to pull resources from the network. A running app or task no longer needs to pull resources,\nso traffic rules can be more restrictive and secure.\nTo distinguish between these two security requirements, you can define a ",(0,r.jsx)(n.code,{children:"staging"})," ASG for app and task\nstaging with more permissive rules, and a ",(0,r.jsx)(n.code,{children:"running"})," ASG for app and task runtime with less permissive rules."]}),"\n",(0,r.jsxs)(n.h3,{id:"-platform-wide-and-space-scoped-asgs",children:[(0,r.jsx)("a",{id:"types"})," Platform wide and space scoped ASGs"]}),"\n",(0,r.jsx)(n.p,{children:"To provide granular control when securing a deployment, you can assign platform-wide ASGs that apply\nto all app and task instances for the entire deployment, or space-scoped ASGs that apply only to apps and tasks in a particular space."}),"\n",(0,r.jsx)(n.p,{children:"In environments with both platform-wide and space-specific ASGs, the ASGs for a particular space are combined with the platform ASGs to determine the effective rules for that space. Any of the\npermitted traffic in the set of applicable ASGs is then effectively permitted for that app."}),"\n",(0,r.jsxs)(n.h3,{id:"-dynamic-asgs",children:[(0,r.jsx)("a",{id:"dynamic-asgs"})," Dynamic ASGs"]}),"\n",(0,r.jsxs)(n.p,{children:["Dynamic ASGs allow ASGs to be applied to apps without the need for an application restart. Containers using the ",(0,r.jsx)(n.a,{href:"https://github.com/cloudfoundry/silk-release",children:"Silk CNI"})," or NSX-T update their ASGs dynamically; Windows apps and apps using other CNIs do not support Dynamic ASGs at this time."]}),"\n",(0,r.jsxs)(n.p,{children:["Dynamic ASGs are enabled with cf deployment v20.0.0 and higher through ",(0,r.jsx)("a",{href:"https://github.com/cloudfoundry/cf-networking-release/releases/tag/3.0.0",children:"cf-networking-release 3.0.0"}),". It is recommended to use Dynamic ASGs with capi-release v1.126.0 or later for improved\nperformance on the /v3/security_groups APIs."]}),"\n",(0,r.jsxs)(n.p,{children:["To deactivate Dynamic ASGs: use the ops file ",(0,r.jsx)(n.code,{children:"operations/disable-dynamic-asgs.yml"})," from ",(0,r.jsx)("a",{href:"https://github.com/cloudfoundry/cf-deployment/releases/tag/v20.0.0",children:"cf-deployment v20.0.0"})," or higher."]}),"\n",(0,r.jsxs)(n.h3,{id:"-simplifying-asgs-with-a-services-subnet",children:[(0,r.jsx)("a",{id:"simplifying"})," Simplifying ASGs with a services subnet"]}),"\n",(0,r.jsx)(n.p,{children:"ASGs can be complicated to configure correctly, especially when the specific IP addresses listed in a group change."}),"\n",(0,r.jsxs)(n.p,{children:["To simplify securing a deployment while still allowing apps reach external services, operators can deploy the services into a subnet that is separate from their ",(0,r.jsx)(s,{})," deployment, then create ASGs\nfor the apps that allow those service subnets, while denying access to any VM hosting other apps."]}),"\n",(0,r.jsxs)(n.p,{children:["For examples of typical ASGs, see ",(0,r.jsx)(n.a,{href:"#typical-groups",children:"Typical ASGs"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"-default-asgs",children:[(0,r.jsx)("a",{id:"default-asg"})," Default ASGs"]}),"\n","\n","CF"===a.A.platform_code?(0,r.jsx)(l,{}):(0,r.jsx)(o,{}),"\n",(0,r.jsxs)(n.h3,{id:"-asg-sets",children:[(0,r.jsx)("a",{id:"asg-sets"})," ASG sets"]}),"\n",(0,r.jsxs)(n.p,{children:["ASGs are applied by configuring ASG sets differentiated by ",(0,r.jsx)(n.em,{children:"scope"}),", platform-wide or space specific, and ",(0,r.jsx)(n.em,{children:"lifecycle"}),", staging or running."]}),"\n",(0,r.jsxs)(n.p,{children:["Currently, the following ASG sets exist in ",(0,r.jsx)(s,{}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Platform-wide staging ASG set, also called "default-staging"'}),"\n",(0,r.jsx)(n.li,{children:'Platform-wide running ASG set, also called "default-running"'}),"\n",(0,r.jsx)(n.li,{children:"Space-scoped staging ASG set"}),"\n",(0,r.jsx)(n.li,{children:"Space-scoped running ASG set"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In environments with both platform-wide and space-specific ASG sets, combine the ASG sets for a\nparticular space with the platform ASG sets to determine the rules for that space."}),"\n",(0,r.jsx)(n.p,{children:"The following table indicates the differences between the four sets:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"When an ASG is bound to the..."}),(0,r.jsx)(n.th,{children:"the ASG rules are applied to..."})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Platform-wide staging ASG set"}),(0,r.jsx)(n.td,{children:"the staging lifecycle for all apps and tasks."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Platform-wide running ASG set"}),(0,r.jsx)(n.td,{children:"the running lifecycle for all app and task instances."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Space-scoped staging ASG set"}),(0,r.jsx)(n.td,{children:"the staging lifecycle for apps and tasks in a particular space."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Space-scoped running ASG set"}),(0,r.jsx)(n.td,{children:"the running lifecycle for app and task instances in a particular space."})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Typically, ASGs applied during the staging lifecycle are more permissive than the ASGs applied during the running lifecycle. This is because staging often requires access to different resources, such as dependencies."}),"\n",(0,r.jsx)(n.p,{children:"You use different commands to apply an ASG to each of the four sets."}),"\n",(0,r.jsx)(n.p,{children:"To apply a staging ASG to apps within a space, you must use\ncf CLI v6.28.0 or later."}),"\n",(0,r.jsxs)(n.p,{children:["For more information, see ",(0,r.jsx)(n.a,{href:"#procedures",children:"Managing ASGs with the cf CLI"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"-structure-and-attributes-of-asgs",children:[(0,r.jsx)("a",{id:"creating-groups"})," Structure and attributes of ASGs"]}),"\n",(0,r.jsx)(n.p,{children:"ASG rules are specified as a JSON array of ASG objects. An ASG object has the following attributes:"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Attribute"}),(0,r.jsx)("th",{children:"Description"}),(0,r.jsx)("th",{children:"Notes"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"protocol"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"tcp"}),", ",(0,r.jsx)("code",{children:"udp"}),", ",(0,r.jsx)("code",{children:"icmp"}),", or ",(0,r.jsx)("code",{children:"all"})]}),(0,r.jsx)("td",{children:"Required"})]}),"CF"===a.A.platform_code?(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"destination"})}),(0,r.jsxs)("td",{children:["A comma delimited list of single IP addresses, IP address ranges like ",(0,r.jsx)("code",{children:"192.0.2.0-192.0.2.50"}),", or CIDR blocks that can receive traffic"]}),(0,r.jsxs)("td",{children:["Destination lists became available in capi-release 1.180.0 and can be enabled by setting the ",(0,r.jsx)("code",{children:"cc.security_groups.enable_comma_delimited_destinations"})," bosh property to true."]})]}):null,"PCF"===a.A.platform_code?(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"destination"})}),(0,r.jsxs)("td",{children:["A single IP address, an IP address range like ",(0,r.jsx)("code",{children:"192.0.2.0-192.0.2.50"}),", or a CIDR block that can receive traffic"]}),(0,r.jsx)("td",{})]}):null,(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"ports"})}),(0,r.jsxs)("td",{children:["A single port, multiple comma-separated ports, or a single range of ports that can receive traffic. Examples: ",(0,r.jsx)("code",{children:"443"}),", ",(0,r.jsx)("code",{children:"80,8080,8081"}),", ",(0,r.jsx)("code",{children:"8080-8081"})]}),(0,r.jsxs)("td",{children:["Only possible if ",(0,r.jsx)("code",{children:"protocol"})," is ",(0,r.jsx)("code",{children:"tcp"})," or ",(0,r.jsx)("code",{children:"udp"}),"."]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"code"})}),(0,r.jsx)("td",{children:"ICMP code"}),(0,r.jsxs)("td",{children:["Required when ",(0,r.jsx)("code",{children:"protocol"})," is ",(0,r.jsx)("code",{children:"icmp"}),". A value of ",(0,r.jsx)("code",{children:"-1"})," allows all codes."]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"type"})}),(0,r.jsx)("td",{children:"ICMP"}),(0,r.jsxs)("td",{children:["Required when ",(0,r.jsx)("code",{children:"protocol"})," is ",(0,r.jsx)("code",{children:"icmp"}),". A value of ",(0,r.jsx)("code",{children:"-1"})," allows all types."]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"log"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Set to ",(0,r.jsx)("code",{children:"true"})," to enable logging. For more information about how to configure system logs to be sent to a syslog drain, see\n",(0,r.jsx)("a",{href:"../devguide/services/log-management.html",children:"Using Log Management Services"}),"."]})}),(0,r.jsxs)("td",{children:["Logging is only supported with protocol type ",(0,r.jsx)("code",{children:"tcp"}),"."]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"description"})}),(0,r.jsx)("td",{children:"An optional field for operators managing ASG rules"}),(0,r.jsx)("td",{})]})]})]}),"\n",(0,r.jsx)(n.p,{children:'< if vars.platform_code == "CF" || vars.platform_code == "PCF" >'}),"\n",(0,r.jsxs)(n.h2,{id:"-managing-asgs",children:[(0,r.jsx)("a",{id:"process"})," Managing ASGs"]}),"\n",(0,r.jsx)(n.p,{children:"The following table outlines the flow of tasks that you implement over the lifecycle of ASGs."}),"\n",(0,r.jsxs)(n.p,{children:["For information about procedures for each of these tasks, see ",(0,r.jsx)(n.a,{href:"#procedures",children:"Managing ASGs with cf CLI"}),"."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\xa0"}),(0,r.jsx)(n.th,{children:"Task"}),(0,r.jsx)(n.th,{children:"For more information, see:"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1."}),(0,r.jsx)(n.td,{children:"Review the existing ASGs. If this is a new deployment, these consist of only the default ASGs."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#viewing",children:"View ASGs"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2."}),(0,r.jsx)(n.td,{children:"Create new ASGs."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#asg-individual",children:"Create ASGs"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3."}),(0,r.jsx)(n.td,{children:"Update the existing ASGs."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#updating-groups",children:"Update ASGs"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4."}),(0,r.jsx)(n.td,{children:"Bind ASGs to an ASG set."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#binding-groups",children:"Bind ASGs"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5."}),(0,r.jsx)(n.td,{children:"If you need to delete an ASG, first unbind it, then delete it."}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"#unbinding-asgs",children:"Unbind ASGs"})," and ",(0,r.jsx)(n.a,{href:"#deleting-groups",children:"Delete ASGs"})]})]})]})]}),"\n",(0,r.jsxs)(n.h2,{id:"-managing-asgs-with-cf-cli",children:[(0,r.jsx)("a",{id:"procedures"})," Managing ASGs with cf CLI"]}),"\n",(0,r.jsx)(n.p,{children:"Learn about the commands you need to create and manage ASGs."}),"\n",(0,r.jsxs)(n.p,{children:["Many of the following procedures require the Cloud Foundry Command Line Interface (cf CLI).\nTo download the cf CLI, see ",(0,r.jsx)(n.a,{href:"../cf-cli/install-go-cli.html",children:"Installing the cf CLI"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"-viewing-asgs",children:[(0,r.jsx)("a",{id:"viewing"})," Viewing ASGs"]}),"\n",(0,r.jsx)(n.p,{children:"To view information about existing ASGs, run the following commands:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Command"}),(0,r.jsx)(n.th,{children:"Output"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"cf security-groups"})}),(0,r.jsx)(n.td,{children:"All ASGs"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"cf staging-security-groups"})}),(0,r.jsx)(n.td,{children:"All ASGs applied to the platform-wide staging ASG set"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"cf running-security-groups"})}),(0,r.jsx)(n.td,{children:"All ASGs applied to the platform-wide running ASG set"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"cf security-group ASG"})}),(0,r.jsxs)(n.td,{children:["All rules in the specified ASG, where ",(0,r.jsx)(n.code,{children:"ASG"})," is the name of the ASG"]})]})]})]}),"\n",(0,r.jsx)(i,{}),"\n",(0,r.jsxs)(n.h3,{id:"-creating-asgs",children:[(0,r.jsx)("a",{id:"asg-individual"})," Creating ASGs"]}),"\n",(0,r.jsx)(n.p,{children:"To create an ASG:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a rules file: a JSON-formatted single array containing objects that describe the rules. See the\nfollowing example, which allows ICMP traffic of code ",(0,r.jsx)(n.code,{children:"1"})," and type ",(0,r.jsx)(n.code,{children:"0"})," to all destinations, and TCP traffic to ",(0,r.jsx)(n.code,{children:"10.0.11.0/24"})," on ports ",(0,r.jsx)(n.code,{children:"80"})," and ",(0,r.jsx)(n.code,{children:"443"}),". For more information, see ",(0,r.jsx)(n.a,{href:"#creating-groups",children:"The Structure and Attributes of ASGs"}),"."]}),"\n",(0,r.jsx)(d.A,{language:"json",children:`[\n {\n   "protocol": "icmp",\n   "destination": "0.0.0.0/0",\n   "type": 0,\n   "code": 0\n },\n {\n   "protocol": "tcp",\n   ${"CF"===a.A.platform_code?'"destination": "10.0.11.0/24,8.8.8.8",':"PCF"===a.A.platform_code?'"destination": "10.0.11.0/24",':""}\n   "ports": "80,443",\n   "log": true,\n   "description": "Allow http and https traffic to ZoneA"\n }\n]\n`}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cf create-security-group ASG PATH-TO-RULES-FILE.json\n"})}),"\n",(0,r.jsx)(n.p,{children:"Where:"}),"\n",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"ASG"})," is the name of your ASG."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"PATH-TO-RULES-FILE.json"})," is the absolute or relative path to a rules file."]})]}),"\n",(0,r.jsxs)(n.p,{children:["In the following example, ",(0,r.jsx)(n.code,{children:"EXAMPLE-ASG"})," is the name of an ASG, and ",(0,r.jsx)(n.code,{children:"~/workspace/example-asg.json"})," is the path to a rules file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cf create-security-group EXAMPLE-ASG ~/workspace/example-asg.json\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["After the ASG is created, you must bind it to an ASG set before it takes effect. For more information, see ",(0,r.jsx)(n.a,{href:"#binding-groups",children:"Bind ASGs"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"-binding-asgs",children:[(0,r.jsx)("a",{id:"binding-groups"})," Binding ASGs"]}),"\n",(0,r.jsxs)(n.p,{children:["Binding an ASG does not affect started apps unless you have ",(0,r.jsx)(n.a,{href:"#dynamic-asgs",children:"Dynamic ASGs"}),"\nenabled. If deactivated, you need to run ",(0,r.jsx)(n.code,{children:"cf restart"})," for each app. To restart all of the apps in an org or a space, use\nthe ",(0,r.jsx)(n.a,{href:"https://github.com/cloudfoundry-incubator/app-restarter",children:"app-restarter"})," cf CLI plug-in."]}),"\n",(0,r.jsx)(n.p,{children:"To apply an ASG, you must bind it to an ASG set."}),"\n",(0,r.jsx)(n.h4,{id:"platform-wide-staging-asg-set",children:"Platform-wide staging ASG set"}),"\n",(0,r.jsx)(n.p,{children:"To bind an ASG to the platform wide staging ASG set:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cf bind-staging-security-group ASG\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Where ",(0,r.jsx)(n.code,{children:"ASG"})," is the name of your ASG."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"platform-wide-running-asg-set",children:"Platform-wide running ASG set"}),"\n",(0,r.jsx)(n.p,{children:"To bind an ASG to the platform-wide running ASG set:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cf bind-running-security-group ASG\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Where ",(0,r.jsx)(n.code,{children:"ASG"})," is the name of your ASG."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"space-scoped-running-asg-set",children:"Space-scoped running ASG set"}),"\n",(0,r.jsx)(n.p,{children:"To bind an ASG to a space-scoped running ASG set:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cf bind-security-group ASG ORG --space SPACE\n"})}),"\n",(0,r.jsx)(n.p,{children:"Where:"}),"\n",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"ASG"})," is the name of your ASG."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"ORG"})," is the name of the org where you want to bind the ASG set."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"SPACE"})," is the name of the space where you want to bind the ASG set."]})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"space-scoped-staging-asg-set",children:"Space-scoped staging ASG set"}),"\n",(0,r.jsx)(n.p,{children:"To bind an ASG to a space scoped staging ASG set:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cf bind-security-group ASG ORG --space SPACE --lifecycle staging\n"})}),"\n",(0,r.jsx)(n.p,{children:"Where:"}),"\n",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"ASG"})," is the name of your ASG."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"ORG"})," is the name of the org where you want to bind the ASG set."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"SPACE"})," is the name of the space where you want to bind the ASG set."]})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"-update-asgs",children:[(0,r.jsx)("a",{id:"updating-groups"})," Update ASGs"]}),"\n",(0,r.jsxs)("p",{children:[" Updating an ASG does not affect started apps unless you have ",(0,r.jsx)("a",{href:"#dynamic-asgs",children:"Dynamic ASGs"}),"\nactivated. If deactivated, you need to restart the apps. To restart all of the apps in an org or a space,\nuse the ",(0,r.jsx)("a",{href:"https://github.com/cloudfoundry-incubator/app-restarter",children:"app-restarter"})," cf CLI plug-in."]}),"\n",(0,r.jsx)(n.p,{children:"To update an existing ASG:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Edit the ASG rules in the JSON file you created in ",(0,r.jsx)(n.a,{href:"#asg-individual",children:"Create ASGs"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cf update-security-group ASG PATH-TO-RULES-FILE.json\n"})}),"\n",(0,r.jsx)(n.p,{children:"Where:"}),"\n",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"ASG"})," is name of the existing ASG you want to change."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"PATH-TO-RULES-FILE.json"})," is the absolute or relative path to a rules file."]})]}),"\n",(0,r.jsxs)(n.p,{children:["In the following example, ",(0,r.jsx)(n.code,{children:"example-asg"})," is the name of an ASG, and ",(0,r.jsx)(n.code,{children:"~/workspace/example-asg-v2.json"})," is the path to a rules file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cf update-security-group example-asg ~/workspace/example-asg-v2.json\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"-unbind-asgs",children:[(0,r.jsx)("a",{id:"unbinding-groups"})," Unbind ASGs"]}),"\n",(0,r.jsxs)("p",{children:[" Unbinding an ASG does not affect started apps unless you have ",(0,r.jsx)("a",{href:"#dynamic-asgs",children:"Dynamic ASGs"}),"\nenabled. If deactivated, you need to restart the apps. To restart all of the apps in an org or a space,\nuse the ",(0,r.jsx)("a",{href:"https://github.com/cloudfoundry-incubator/app-restarter",children:"app-restarter"})," cf CLI plug-in."]}),"\n",(0,r.jsx)(n.h4,{id:"platform-wide-staging-asg-set-1",children:"Platform-wide staging ASG set"}),"\n",(0,r.jsx)(n.p,{children:"To unbind an ASG from the platform-wide staging ASG set:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cf unbind-staging-security-group ASG\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Where ",(0,r.jsx)(n.code,{children:"ASG"})," is the name of your ASG."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"platform-wide-running-asg-set-1",children:"Platform-wide running ASG set"}),"\n",(0,r.jsx)(n.p,{children:"To unbind an ASG from the platform-wide running ASG set:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cf unbind-running-security-group ASG\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Where ",(0,r.jsx)(n.code,{children:"ASG"})," is the name of your ASG."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"space-scoped-asg-set",children:"Space-scoped ASG set"}),"\n",(0,r.jsx)(n.p,{children:"To unbind an ASG from a specific space:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cf unbind-security-group ASG ORG --space SPACE --lifecycle running\n"})}),"\n",(0,r.jsx)(n.p,{children:"Where:"}),"\n",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"ASG"})," is the name of your ASG."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"ORG"})," is the org where you want to unbind the ASG set."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"SPACE"})," is the space where you want to unbind the ASG set."]}),(0,r.jsxs)("li",{children:["To unbind from the staging ASG set, replace ",(0,r.jsx)("code",{children:"running"})," with ",(0,r.jsx)("code",{children:"staging"}),"."]})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"-delete-asgs",children:[(0,r.jsx)("a",{id:"deleting-groups"})," Delete ASGs"]}),"\n",(0,r.jsxs)("p",{children:[" You can only delete unbound ASGs. To unbind ASGs, see ",(0,r.jsx)("a",{href:"#unbinding-groups",children:"Unbind ASGs"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"To delete an ASG:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cf delete-security-group ASG\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Where ",(0,r.jsx)(n.code,{children:"ASG"})," is the name of your ASG."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"-typical-asgs",children:[(0,r.jsx)("a",{id:"typical-groups"})," Typical ASGs"]}),"\n",(0,r.jsx)(n.p,{children:"The following table describes examples of typical ASGs. Configure your ASGs in accordance with your organization's network access policy for untrusted apps."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"ASG"}),(0,r.jsx)(n.th,{children:"For access to:"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"dns"})}),(0,r.jsx)(n.td,{children:"DNS, either public or private"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"public-networks"})}),(0,r.jsx)(n.td,{children:"Public networks, excluding IaaS metadata endpoints"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"private-networks"})}),(0,r.jsxs)(n.td,{children:["Private networks in accordance with ",(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc1918#section-3",children:"RFC-1918"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"load-balancers"})}),(0,r.jsxs)(n.td,{children:["The internal ",(0,r.jsx)(s,{})," load balancer and others"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"internal-proxies"})}),(0,r.jsx)(n.td,{children:"Internal proxies"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"internal-databases"})}),(0,r.jsx)(n.td,{children:"Internal databases"})]})]})]}),"\n",(0,r.jsxs)(n.h3,{id:"-dns",children:[(0,r.jsx)("a",{id:"dns-example"})," DNS"]}),"\n",(0,r.jsxs)(n.p,{children:["To resolve hostnames to IP addresses, apps require DNS server connectivity, which typically use port 53. Admins must create or update a ",(0,r.jsx)(n.code,{children:"dns"})," ASG with appropriate rules. Admins can further restrict the DNS servers to specific IP addresses or ranges of IP addresses."]}),"\n",(0,r.jsxs)(n.p,{children:["The following is an example ",(0,r.jsx)(n.code,{children:"dns"})," ASG:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "protocol": "tcp",\n    "destination": "0.0.0.0/0",\n    "ports": "53"\n  },\n  {\n    "protocol": "udp",\n    "destination": "0.0.0.0/0",\n    "ports": "53"\n  }\n]\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"-public-networks",children:[(0,r.jsx)("a",{id:"public-networks-example"})," Public networks"]}),"\n",(0,r.jsx)(n.p,{children:"Apps often require public network connectivity to retrieve app dependencies, or to integrate with services available on public networks. Example app dependencies include public Maven repositories, NPM, RubyGems, and Docker registries."}),"\n",(0,r.jsxs)("p",{children:[" You must exclude IaaS metadata endpoints. For example, ",(0,r.jsx)("code",{children:"169.254.169.254"}),", because the\nmetadata endpoint can expose sensitive environment information to untrusted apps. The following ",(0,r.jsx)("code",{children:"public_networks"})," example accounts for this recommendation."]}),"\n",(0,r.jsxs)(n.p,{children:["The following is an example ",(0,r.jsx)(n.code,{children:"public_networks"})," ASG:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "destination": "0.0.0.0-9.255.255.255",\n    "protocol": "all"\n  },\n  {\n    "destination": "11.0.0.0-169.253.255.255",\n    "protocol": "all"\n  },\n  {\n    "destination": "169.255.0.0-172.15.255.255",\n    "protocol": "all"\n  },\n  {\n    "destination": "172.32.0.0-192.167.255.255",\n    "protocol": "all"\n  },\n  {\n    "destination": "192.169.0.0-255.255.255.255",\n    "protocol": "all"\n  }\n]\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"-private-networks",children:[(0,r.jsx)("a",{id:"private-networks-example"})," Private networks"]}),"\n",(0,r.jsxs)(n.p,{children:["Network connections that are commonly allowable in private networks include endpoints such as proxy servers, Docker registries, load balancers, databases, messaging servers, directory servers, and file servers. Configure appropriate private network ASGs as appropriate. You might find it helpful to use a naming convention with ",(0,r.jsx)(n.code,{children:"private_networks"})," as part of the ASG name, such as ",(0,r.jsx)(n.code,{children:"private_networks_databases"}),"."]}),"\n",(0,r.jsx)("p",{children:" You must exclude any private networks and IP addresses that app and task instances must not have access to."}),"\n",(0,r.jsxs)(n.p,{children:["The following is an example ",(0,r.jsx)(n.code,{children:"private_networks"})," ASG:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "protocol": "tcp",\n    "destination": "10.0.0.0-10.255.255.255",\n    "ports": "443"\n  },\n  {\n    "protocol": "tcp",\n    "destination": "172.16.0.0-172.31.255.255",\n    "ports": "443"\n  },\n  {\n    "protocol": "tcp",\n    "destination": "192.168.0.0-192.168.255.255",\n    "ports": "443"\n  }\n]\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"-asgs-and-performance-on-windows",children:[(0,r.jsx)("a",{id:"marketplace-services"})," ASGs and Performance on Windows"]}),"\n",(0,r.jsx)(n.p,{children:"Each ASG bound to an app results in one or more network policy created on the\nHost, depending on the number of destinations (ranges and CIDRs count as one\ndestination each). Windows apps with ASGs to many destinations will experience\nincreased latency when the app is starting. Windows apps with ASGs to more than\n1000 destinations may fail to start."}),"\n",(0,r.jsxs)(n.h3,{id:"-marketplace-services",children:[(0,r.jsx)("a",{id:"marketplace-services"})," Marketplace Services"]}),"\n",(0,r.jsxs)(n.p,{children:["Each installed Marketplace Service requires its own set of ASG rules to function properly. To determine which\nASG rules it requires, see the installation instructions for each installed Marketplace Service. For more information about how to provision and integrate services, see ",(0,r.jsx)(n.a,{href:"../devguide/services/index.html",children:"Services Overview"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"-about-the-asg-creator-tool",children:[(0,r.jsx)("a",{id:"asg-baseline"})," About the ASG Creator tool"]}),"\n",(0,r.jsx)(n.p,{children:"The ASG Creator is a command line tool that you can use to create JSON rules files. The ASG Creator lets you specify IP addresses, CIDRs, and IP address ranges that you want to disallow traffic to, as well as the addresses that you want to allow traffic to. Based on these disallow/allow (exclude/include) lists that you provide as input, the ASG Creator formulates a JSON file of allow rules."}),"\n",(0,r.jsxs)(n.p,{children:["In turn, the JSON file is the input for the ",(0,r.jsx)(n.code,{children:"cf create-security-group"})," command that creates an ASG."]}),"\n",(0,r.jsxs)(n.p,{children:["To download the latest release of the ASG Creator, see the ",(0,r.jsx)(n.a,{href:"https://github.com/cloudfoundry-incubator/asg-creator/releases/latest",children:"Cloud Foundry Incubator"})," repository on GitHub."]}),"\n",(0,r.jsxs)(n.h2,{id:"-asg-logging",children:[(0,r.jsx)("a",{id:"logging"})," ASG logging"]}),"\n",(0,r.jsxs)(n.p,{children:["For information about how you can use ASGs to correlate emitted logs back to an app, see ",(0,r.jsx)(n.a,{href:"https://community.pivotal.io/s/article/How-to-use-Application-Security-Group-ASG-Logging",children:"How to use Application Security Group (ASG) logging"})," in the Tanzu Support Hub."]}),"\n",(0,r.jsx)(n.p,{children:"< end >"})]})}function j(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}function g(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);