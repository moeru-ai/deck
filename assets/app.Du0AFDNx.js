import{V as o,af as p,ag as u,ah as l,ai as c,aj as f,ak as d,al as m,am as h,an as g,ao as A,ap as P,d as _,u as v,k as y,y as R,aq as w,ar as C,as as E,ad as T}from"./chunks/framework.wQ7pXeMz.js";import{R as b}from"./chunks/theme.CyupLGvv.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(b),S=_({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=v();return y(()=>{R(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&w(),C(),E(),s.setup&&s.setup(),()=>T(s.Layout)}});async function D(){globalThis.__VITEPRESS__=!0;const e=j(),a=V();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function V(){return h(S)}function j(){let e=o,a;return g(t=>{let n=A(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=P(()=>import(n),[])),o&&(e=!1),r},s.NotFound)}o&&D().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{D as createApp};
