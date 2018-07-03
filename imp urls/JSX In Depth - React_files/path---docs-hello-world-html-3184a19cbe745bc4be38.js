webpackJsonp([0x9da9275e2a54],{884:function(e,t){e.exports={data:{markdownRemark:{html:'<p>The smallest React example looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> world<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>It displays a heading saying “Hello, world!” on the page.</p>\n<p>The next few sections will gradually introduce you to using React. We will examine the building blocks of React apps: elements and components. Once you master them, you can create complex apps from small reusable pieces.</p>\n<h2 id="following-along"><a href="#following-along" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Following Along</h2>\n<p>The easiest way to get started with React is to use <a href="/redirect-to-codepen/hello-world" target="_blank" rel="noreferrer">this Hello World example code on CodePen</a>. You don’t need to install anything; you can open it in another tab and follow along as we go through examples. If you’d rather use a local development environment, check out the <a href="/docs/try-react.html">Installation</a> section.</p>\n<h2 id="knowledge-level-assumptions"><a href="#knowledge-level-assumptions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Knowledge Level Assumptions</h2>\n<p>React is a JavaScript library, and so we’ll assume you have a basic understanding of the JavaScript language. <strong>If you don’t feel very confident, we recommend <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript">going through a JavaScript tutorial</a> to check your knowledge level</strong> and enable you to follow along this walkthrough without getting lost. It might take you between 30 minutes and an hour, but as a result you won’t have to feel like you’re learning both React and JavaScript at the same time.</p>\n<p>This walkthrough also uses some of the newer JavaScript syntax in the examples. <strong>If you haven’t worked with JavaScript in the last few years,</strong> these three points should get you most of the way:</p>\n<ul>\n<li>We define variables with <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let"><code>let</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const"><code>const</code></a> statements. For the purposes of this walkthrough, you can consider them equivalent to <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var"><code>var</code></a>.</li>\n<li>We use the <code>class</code> keyword to define <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">JavaScript classes</a>. There are two things worth remembering about them. Firstly, unlike with objects, you <em>don’t</em> need to put commas between class method definitions. Secondly, unlike many other languages with classes, in JavaScript the value of <code>this</code> in a method <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Boxing_with_prototype_and_static_methods">depends on how it is called</a>.</li>\n<li>We sometimes use <code>=></code> to define <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">“arrow functions”</a>. They’re like regular functions, but shorter. For example, <code>x => x * 2</code> is roughly equivalent to <code>function(x) { return x * 2; }</code>. Importantly, arrow functions <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_separate_this">don’t have their own <code>this</code> value</a> so they’re handy when you want to preserve the <code>this</code> value from an outer method definition.</li>\n</ul>\n<p>Don’t worry if this is too much to take in at once. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">MDN JavaScript Reference</a> is a stellar resource, and you can consult it whenever you get confused by something.</p>\n<!-- Note: I intentionally don\'t use babel:// scheme here because it doesn\'t seem to include the ES2015 preset which is crucial in this example -->\n<p>Also, when you feel unsure about what some newer syntax means, you can use the <a href="http://babeljs.io/repl/#?babili=false&#x26;browsers=&#x26;build=&#x26;builtIns=false&#x26;code_lz=MYewdgzgLgBAllApgWwjAvDA2gRgDQwBMBAzALoDcAUKJLACYgCuARgDaL0bxKoB0yAIYAHABQAPDAD4YkgFREAlBSA&#x26;debug=false&#x26;forceAllTransforms=false&#x26;shippedProposals=false&#x26;circleciRepo=&#x26;evaluate=false&#x26;fileSize=false&#x26;lineWrap=true&#x26;presets=es2015%2Creact%2Cstage-1%2Cstage-2%2Cstage-3&#x26;prettier=true&#x26;targets=Node-6.12&#x26;version=6.26.0&#x26;envVersion=">Babel REPL with the ES2015 preset</a> to check what equivalent older syntax it compiles to.</p>',frontmatter:{title:"Hello World",next:"introducing-jsx.html",prev:"cdn-links.html"},fields:{path:"docs/hello-world.md",slug:"docs/hello-world.html"}}},pathContext:{slug:"docs/hello-world.html"}}}});
//# sourceMappingURL=path---docs-hello-world-html-3184a19cbe745bc4be38.js.map