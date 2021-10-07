(this["webpackJsonpexperiment-aria-role-link"]=this["webpackJsonpexperiment-aria-role-link"]||[]).push([[0],[,,,,,,,,,,,function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},,,function(e,i,t){},function(e,i,t){"use strict";t.r(i);var n=t(1),c=t.n(n),r=t(4),l=t.n(r),s=(t(11),t(12),t(13),t(3)),a=t(5),d=t.n(a),o=(t(14),t(6)),j=t.n(o);function h(){var e=Object(n.useRef)(function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return j()().toString(36).substr(2,e)}());return[e.current]}var b=t(0),u={"id-0":"Hello, World!","id-1":"Aloha!","id-2":Object(b.jsx)("span",{lang:"ja-JP",children:"\u3053\u3093\u306b\u3061\u306f\uff01"}),"id-3":Object(b.jsx)("span",{lang:"yue",children:"\u60a8\u597d\uff01"}),"id-4":Object(b.jsxs)("span",{children:["This article is based on"," ",Object(b.jsx)("a",{href:"https://en.wikipedia.org/wiki/Alice%27s_Adventures_in_Wonderland",children:"a Wikipedia article"}),". Follow the link to read more."]})};function O(e){var i=e.boxRole,t=e.itemRole,c=e.listRole,r=Object(n.useState)(Object.keys(u)[0]),l=Object(s.a)(r,2),a=l[0],o=l[1],j=Object(n.useCallback)((function(e){o((function(i){var t=Object.keys(u),n=t.indexOf(i);return~n?t[Math.max(0,Math.min(t.length-1,n+e))]:i}))}),[o]),O=Object(n.useCallback)((function(){return j(1)}),[j]),x=Object(n.useCallback)((function(){return j(-1)}),[j]),p=Object(n.useCallback)((function(e){"ArrowDown"===e.key?(e.preventDefault(),O()):"ArrowUp"===e.key&&(e.preventDefault(),x())}),[O,x]),k=h()+"-",m=h();return Object(b.jsxs)("div",{"aria-activedescendant":k+a,"aria-labelledby":m,className:"active-descendant-list",onKeyDown:p,role:i,tabIndex:"0",children:[Object(b.jsx)("div",{id:m,children:"Press up and down arrow keys to navigate."}),Object(b.jsx)("ul",{role:c,children:Object.entries(u).map((function(e){var i=Object(s.a)(e,2),n=i[0],c=i[1];return Object(b.jsx)("li",{className:d()("active-descendant-list__item",{"active-descendant-list__item--active":n===a}),id:k+n,role:t,children:c},n)}))})]})}function x(){return Object(b.jsxs)("section",{className:"active-descendant",children:[Object(b.jsx)("header",{children:Object(b.jsx)("h1",{children:"Active descendant"})}),Object(b.jsxs)("article",{children:[Object(b.jsx)("h2",{children:"How to test"}),Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:"Focus on the list below, it should show a solid border;"}),Object(b.jsx)("li",{children:"Turn off scan mode;"}),Object(b.jsx)("li",{children:"Press up/down arrow keys to select different active descendant;"})]}),Object(b.jsx)("p",{children:'EXPECT: It should narrate the content, including links with accessible name. For example, it should say, "this article is based on, link, a Wikipedia article."'}),Object(b.jsx)("h2",{children:"Sample"}),Object(b.jsxs)("h3",{children:["Web Chat today: ",Object(b.jsx)("code",{children:'role="group"'})]}),Object(b.jsx)(O,{boxRole:"group"}),Object(b.jsxs)("h3",{children:[Object(b.jsx)("code",{children:'role="grid"'})," and ",Object(b.jsx)("code",{children:'role="gridcell"'})]}),Object(b.jsx)(O,{boxRole:"grid",itemRole:"gridcell",listRole:"group"})]})]})}t(17);function p(){return Object(b.jsxs)("section",{className:"link-narration",children:[Object(b.jsx)("header",{children:Object(b.jsx)("h1",{children:"Link role narration"})}),Object(b.jsxs)("article",{children:[Object(b.jsx)("h2",{children:"Background"}),Object(b.jsx)("p",{children:'Screen reader should narrate the role of the hyperlink, as "link". It should give a pause to emphasis on the role.'}),Object(b.jsx)("h2",{children:"How to test"}),Object(b.jsxs)("p",{children:["Use a screen reader to read the content of the following ",Object(b.jsx)("code",{children:"<ul>"}),"/",Object(b.jsx)("code",{children:"<li>"}),'. It should narrate the link "a Wikipedia article, link" (or something similar). It should NOT narrate "a Wikipedia article, message".']}),Object(b.jsx)("p",{children:'Windows Narrator with CAPS + up/down arrow: "Bullet, this article is based on, link, a Wikipedia article."'}),Object(b.jsx)("p",{children:'VoiceOver (macOS) with up/down arrow: "Bullet, this article is based on, link, a Wikipedia article."'}),Object(b.jsx)("p",{children:'VoiceOver (iPadOS) with two-finger swipe: "This article based on a Wikpiedia article, link."'}),Object(b.jsx)("h2",{children:"Try these out"}),Object(b.jsx)("cite",{children:"IDEAL: Bullet <pause> this article is based on <pause> link <pause> a Wikipedia article."}),Object(b.jsx)("p",{className:"link-narration__try-out",children:"Bullet, this article is based on, link, a Wikipedia article."}),Object(b.jsxs)("p",{className:"link-narration__try-out",children:[Object(b.jsx)("small",{children:"bullet"})," this article is based on ",Object(b.jsx)("small",{children:"link"})," a wikipedia article."]}),Object(b.jsxs)("p",{className:"link-narration__try-out",children:[Object(b.jsx)("ins",{children:"bullet"})," this article is based on ",Object(b.jsx)("ins",{children:"link"})," a wikipedia article."]}),Object(b.jsxs)("p",{className:"link-narration__try-out",children:[Object(b.jsx)("br",{}),"bullet",Object(b.jsx)("br",{})," this article is based on ",Object(b.jsx)("br",{}),"link",Object(b.jsx)("br",{})," a wikipedia article."]}),Object(b.jsxs)("p",{className:"link-narration__try-out",children:[Object(b.jsx)("div",{children:"bullet"})," this article is based on ",Object(b.jsx)("div",{children:"link"})," a wikipedia article."]}),Object(b.jsxs)("p",{className:"link-narration__try-out",children:[Object(b.jsx)("em",{children:"bullet"})," this article is based on ",Object(b.jsx)("em",{children:"link"})," a wikipedia article."]}),Object(b.jsx)("h2",{children:"Sample"}),Object(b.jsx)("ul",{"aria-roledescription":"transcript",children:Object(b.jsx)("li",{children:Object(b.jsx)("div",{"aria-roledescription":"activity",children:Object(b.jsx)("div",{"aria-roledescription":"message",children:Object(b.jsxs)("p",{children:["This article based on"," ",Object(b.jsx)("a",{href:"https://en.wikipedia.org/wiki/Alice%27s_Adventures_in_Wonderland",children:"a Wikipedia article"}),"."]})})})})})]})]})}var k=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(x,{}),Object(b.jsx)(p,{})]})},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(i){var t=i.getCLS,n=i.getFID,c=i.getFCP,r=i.getLCP,l=i.getTTFB;t(e),n(e),c(e),r(e),l(e)}))};l.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),m()}],[[18,1,2]]]);
//# sourceMappingURL=main.dcffac0e.chunk.js.map