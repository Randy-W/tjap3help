"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[89],{4118:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(3366),n=a(7294),l=a(6010),i=a(8277),s=a(9960),o=a(5999),m="sidebar_TMXw",c="sidebarItemTitle_V4zb",u="sidebarItemList_uHd5",d="sidebarItem_spIe",g="sidebarItemLink_eqrF",p="sidebarItemLinkActive_XZSJ";function v(e){var t=e.sidebar;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:d},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title))})))))}var h=a(3102);function E(e){var t=e.sidebar;return n.createElement("ul",{className:"menu__list"},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function b(e){return n.createElement(h.Zo,{component:E,props:e})}var f=a(7524);function _(e){var t=e.sidebar,a=(0,f.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(b,{sidebar:t}):n.createElement(v,{sidebar:t}):null}var N=["sidebar","toc","children"];function Z(e){var t=e.sidebar,a=e.toc,s=e.children,o=(0,r.Z)(e,N),m=t&&t.items.length>0;return n.createElement(i.Z,o,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(_,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},a))))}},2754:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var r=a(7294),n=a(2263),l=a(4118),i=a(8765),s=a(5999),o=a(1750);function m(e){var t=e.metadata,a=t.previousPage,n=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&r.createElement(o.Z,{permalink:a,title:r.createElement(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),n&&r.createElement(o.Z,{permalink:n,title:r.createElement(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}var c=a(1944),u=a(5281),d=a(4739),g=a(6010);function p(e){var t=e.metadata,a=(0,n.Z)().siteConfig.title,l=t.blogDescription,i=t.blogTitle,s="/"===t.permalink?a:i;return r.createElement(r.Fragment,null,r.createElement(c.d,{title:s,description:l}),r.createElement(d.Z,{tag:"blog_posts_list"}))}function v(e){var t=e.metadata,a=e.items,n=e.sidebar;return r.createElement(l.Z,{sidebar:n},a.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(m,{metadata:t}))}function h(e){return r.createElement(c.FG,{className:(0,g.Z)(u.k.wrapper.blogPages,u.k.page.blogListPage)},r.createElement(p,e),r.createElement(v,e))}},8765:function(e,t,a){a.d(t,{Z:function(){return y}});var r=a(7294),n=a(6010),l=a(5999),i=a(9960),s=a(4996),o=a(2263),m=["zero","one","two","few","many","other"];function c(e){return m.filter((function(t){return e.includes(t)}))}var u={locale:"en",pluralForms:c(["one","other"]),select:function(e){return 1===e?"one":"other"}};function d(){var e=(0,o.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:c(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),u}var t,a}),[e])}function g(){var e=d();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms+"), but the message contains "+r.length+": "+e);var n=a.select(t),l=a.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(a,t,e)}}}var p=a(8780),v=a(80),h=a(6753),E="blogPostTitle_rzP5",b="blogPostData_Zg1s",f="blogPostDetailsFull_h6_j",_=a(8727);function N(e){return e.href?r.createElement(i.Z,e):r.createElement(r.Fragment,null,e.children)}function Z(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL,s=t.email,o=l||s&&"mailto:"+s||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(N,{href:o,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(N,{href:o,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}var k="authorCol_FlmR",P="imageOnlyAuthorRow_trpF",w="imageOnlyAuthorCol_S2np";function T(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",l?P:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,n.Z)(!l&&"col col--6",l?w:k),key:t},r.createElement(Z,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function y(e){var t,a,o=(a=g().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),m=(0,s.C)().withBaseUrl,c=e.children,u=e.frontMatter,d=e.assets,N=e.metadata,Z=e.truncated,k=e.isBlogPostPage,P=void 0!==k&&k,w=N.date,y=N.formattedDate,F=N.permalink,I=N.tags,L=N.readingTime,x=N.title,R=N.editUrl,C=N.authors,M=null!=(t=d.image)?t:u.image,A=!P&&Z,D=I.length>0,U=P?"h1":"h2";return r.createElement("article",{className:P?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(U,{className:E,itemProp:"headline"},P?x:r.createElement(i.Z,{itemProp:"url",to:F},x)),r.createElement("div",{className:(0,n.Z)(b,"margin-vert--md")},r.createElement("time",{dateTime:w,itemProp:"datePublished"},y),void 0!==L&&r.createElement(r.Fragment,null," \xb7 ",o(L))),r.createElement(T,{authors:C,assets:d})),M&&r.createElement("meta",{itemProp:"image",content:m(M,{absolute:!0})}),r.createElement("div",{id:P?p.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(v.Z,null,c)),(D||Z)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",P&&f)},D&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":A})},r.createElement(_.Z,{tags:I})),P&&R&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(h.Z,{editUrl:R})),A&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":D})},r.createElement(i.Z,{to:N.permalink,"aria-label":(0,l.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:x})},r.createElement("b",null,r.createElement(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},6753:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(7294),n=a(5999),l=a(7462),i=a(3366),s=a(6010),o="iconEdit_dcUD",m=["className"];function c(e){var t=e.className,a=(0,i.Z)(e,m);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var u=a(5281);function d(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.k.common.editThisPage},r.createElement(c,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1750:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),n=a(6010),l=a(9960);function i(e){var t=e.permalink,a=e.title,i=e.subLabel,s=e.isNext;return r.createElement(l.Z,{className:(0,n.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&r.createElement("div",{className:"pagination-nav__sublabel"},i),r.createElement("div",{className:"pagination-nav__label"},a))}},8727:function(e,t,a){a.d(t,{Z:function(){return g}});var r=a(7294),n=a(6010),l=a(5999),i=a(9960),s="tag_hD8n",o="tagRegular_D6E_",m="tagWithCount_i0QQ";function c(e){var t=e.permalink,a=e.label,l=e.count;return r.createElement(i.Z,{href:t,className:(0,n.Z)(s,l?m:o)},a,l&&r.createElement("span",null,l))}var u="tags_XVD_",d="tag_JSN8";function g(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(u,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:d},r.createElement(c,{label:t,permalink:a}))}))))}}}]);