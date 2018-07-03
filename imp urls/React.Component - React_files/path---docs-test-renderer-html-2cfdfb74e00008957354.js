webpackJsonp([39994982508642],{914:function(n,s){n.exports={data:{markdownRemark:{html:'<p><strong>Importing</strong></p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> TestRenderer <span class="token keyword">from</span> <span class="token string">\'react-test-renderer\'</span><span class="token punctuation">;</span> <span class="token comment">// ES6</span>\n<span class="token keyword">const</span> TestRenderer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react-test-renderer\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ES5 with npm</span>\n</code></pre>\n      </div>\n<h2 id="overview"><a href="#overview" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Overview</h2>\n<p>This package provides a React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment.</p>\n<p>Essentially, this package makes it easy to grab a snapshot of the platform view hierarchy (similar to a DOM tree) rendered by a React DOM or React Native component without using a browser or <a href="https://github.com/tmpvar/jsdom">jsdom</a>.</p>\n<p>Example:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> TestRenderer <span class="token keyword">from</span> <span class="token string">\'react-test-renderer\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">Link</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>page<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> testRenderer <span class="token operator">=</span> TestRenderer<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">page</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.facebook.com/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Facebook<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>testRenderer<span class="token punctuation">.</span><span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// { type: \'a\',</span>\n<span class="token comment">//   props: { href: \'https://www.facebook.com/\' },</span>\n<span class="token comment">//   children: [ \'Facebook\' ] }</span>\n</code></pre>\n      </div>\n<p>You can use Jest’s snapshot testing feature to automatically save a copy of the JSON tree to a file and check in your tests that it hasn’t changed: <a href="http://facebook.github.io/jest/blog/2016/07/27/jest-14.html">Learn more about it</a>.</p>\n<p>You can also traverse the output to find specific nodes and make assertions about them.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> TestRenderer <span class="token keyword">from</span> <span class="token string">\'react-test-renderer\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SubComponent</span> <span class="token attr-name">foo</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bar<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">SubComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Sub<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> testRenderer <span class="token operator">=</span> TestRenderer<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> testInstance <span class="token operator">=</span> testRenderer<span class="token punctuation">.</span>root<span class="token punctuation">;</span>\n\n<span class="token function">expect</span><span class="token punctuation">(</span>testInstance<span class="token punctuation">.</span><span class="token function">findByType</span><span class="token punctuation">(</span>SubComponent<span class="token punctuation">)</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">\'bar\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">expect</span><span class="token punctuation">(</span>testInstance<span class="token punctuation">.</span><span class="token function">findByProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>className<span class="token punctuation">:</span> <span class="token string">"sub"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'Sub\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3 id="testrenderer"><a href="#testrenderer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>TestRenderer</h3>\n<ul>\n<li><a href="#testrenderercreate"><code>TestRenderer.create()</code></a></li>\n</ul>\n<h3 id="testrenderer-instance"><a href="#testrenderer-instance" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>TestRenderer instance</h3>\n<ul>\n<li><a href="#testrenderertojson"><code>testRenderer.toJSON()</code></a></li>\n<li><a href="#testrenderertotree"><code>testRenderer.toTree()</code></a></li>\n<li><a href="#testrendererupdate"><code>testRenderer.update()</code></a></li>\n<li><a href="#testrendererunmount"><code>testRenderer.unmount()</code></a></li>\n<li><a href="#testrenderergetinstance"><code>testRenderer.getInstance()</code></a></li>\n<li><a href="#testrendererroot"><code>testRenderer.root</code></a></li>\n</ul>\n<h3 id="testinstance"><a href="#testinstance" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>TestInstance</h3>\n<ul>\n<li><a href="#testinstancefind"><code>testInstance.find()</code></a></li>\n<li><a href="#testinstancefindbytype"><code>testInstance.findByType()</code></a></li>\n<li><a href="#testinstancefindbyprops"><code>testInstance.findByProps()</code></a></li>\n<li><a href="#testinstancefindall"><code>testInstance.findAll()</code></a></li>\n<li><a href="#testinstancefindallbytype"><code>testInstance.findAllByType()</code></a></li>\n<li><a href="#testinstancefindallbyprops"><code>testInstance.findAllByProps()</code></a></li>\n<li><a href="#testinstanceinstance"><code>testInstance.instance</code></a></li>\n<li><a href="#testinstancetype"><code>testInstance.type</code></a></li>\n<li><a href="#testinstanceprops"><code>testInstance.props</code></a></li>\n<li><a href="#testinstanceparent"><code>testInstance.parent</code></a></li>\n<li><a href="#testinstancechildren"><code>testInstance.children</code></a></li>\n</ul>\n<h2 id="reference"><a href="#reference" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reference</h2>\n<h3 id="testrenderercreate"><a href="#testrenderercreate" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>TestRenderer.create()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>TestRenderer<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Create a <code>TestRenderer</code> instance with the passed React element. It doesn’t use the real DOM, but it still fully renders the component tree into memory so you can make assertions about it. The returned instance has the following methods and properties.</p>\n<h3 id="testrenderertojson"><a href="#testrenderertojson" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>testRenderer.toJSON()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>testRenderer<span class="token punctuation">.</span><span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Return an object representing the rendered tree. This tree only contains the platform-specific nodes like <code>&#x3C;div></code> or <code>&#x3C;View></code> and their props, but doesn’t contain any user-written components. This is handy for <a href="http://facebook.github.io/jest/docs/en/snapshot-testing.html#snapshot-testing-with-jest">snapshot testing</a>.</p>\n<h3 id="testrenderertotree"><a href="#testrenderertotree" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>testRenderer.toTree()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>testRenderer<span class="token punctuation">.</span><span class="token function">toTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Return an object representing the rendered tree. Unlike <code>toJSON()</code>, the representation is more detailed than the one provided by <code>toJSON()</code>, and includes the user-written components. You probably don’t need this method unless you’re writing your own assertion library on top of the test rendererer.</p>\n<h3 id="testrendererupdate"><a href="#testrendererupdate" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>testRenderer.update()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>testRenderer<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Re-render the in-memory tree with a new root element. This simulates a React update at the root. If the new element has the same type and key as the previous element, the tree will be updated; otherwise, it will re-mount a new tree.</p>\n<h3 id="testrendererunmount"><a href="#testrendererunmount" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>testRenderer.unmount()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>testRenderer<span class="token punctuation">.</span><span class="token function">unmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Unmount the in-memory tree, triggering the appropriate lifecycle events.</p>\n<h3 id="testrenderergetinstance"><a href="#testrenderergetinstance" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>testRenderer.getInstance()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>testRenderer<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Return the instance corresponding to the root element, if available. This will not work if the root element is a functional component because they don’t have instances.</p>\n<h3 id="testrendererroot"><a href="#testrendererroot" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>testRenderer.root</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>testRenderer<span class="token punctuation">.</span>root\n</code></pre>\n      </div>\n<p>Returns the root “test instance” object that is useful for making assertions about specific nodes in the tree. You can use it to find other “test instances” deeper below.</p>\n<h3 id="testinstancefind"><a href="#testinstancefind" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>testInstance.find()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>testInstance<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Find a single descendant test instance for which <code>test(testInstance)</code> returns <code>true</code>. If <code>test(testInstance)</code> does not return <code>true</code> for exactly one test instance, it will throw an error.</p>\n<h3 id="testinstancefindbytype"><a href="#testinstancefindbytype" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>testInstance.findByType()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>testInstance<span class="token punctuation">.</span><span class="token function">findByType</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Find a single descendant test instance with the provided <code>type</code>. If there is not exactly one test instance with the provided <code>type</code>, it will throw an error.</p>\n<h3 id="testinstancefindbyprops"><a href="#testinstancefindbyprops" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>testInstance.findByProps()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>testInstance<span class="token punctuation">.</span><span class="token function">findByProps</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Find a single descendant test instance with the provided <code>props</code>. If there is not exactly one test instance with the provided <code>props</code>, it will throw an error.</p>\n<h3 id="testinstancefindall"><a href="#testinstancefindall" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>testInstance.findAll()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>testInstance<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Find all descendant test instances for which <code>test(testInstance)</code> returns <code>true</code>.</p>\n<h3 id="testinstancefindallbytype"><a href="#testinstancefindallbytype" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>testInstance.findAllByType()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>testInstance<span class="token punctuation">.</span><span class="token function">findAllByType</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Find all descendant test instances with the provided <code>type</code>.</p>\n<h3 id="testinstancefindallbyprops"><a href="#testinstancefindallbyprops" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>testInstance.findAllByProps()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>testInstance<span class="token punctuation">.</span><span class="token function">findAllByProps</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Find all descendant test instances with the provided <code>props</code>.</p>\n<h3 id="testinstanceinstance"><a href="#testinstanceinstance" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>testInstance.instance</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>testInstance<span class="token punctuation">.</span>instance\n</code></pre>\n      </div>\n<p>The component instance corresponding to this test instance. It is only available for class components, as functional components don’t have instances. It matches the <code>this</code> value inside the given component.</p>\n<h3 id="testinstancetype"><a href="#testinstancetype" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>testInstance.type</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>testInstance<span class="token punctuation">.</span>type\n</code></pre>\n      </div>\n<p>The component type corresponding to this test instance. For example, a <code>&#x3C;Button /></code> component has a type of <code>Button</code>.</p>\n<h3 id="testinstanceprops"><a href="#testinstanceprops" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>testInstance.props</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>testInstance<span class="token punctuation">.</span>props\n</code></pre>\n      </div>\n<p>The props corresponding to this test instance. For example, a <code>&#x3C;Button size="small" /></code> component has <code>{size: \'small\'}</code> as props.</p>\n<h3 id="testinstanceparent"><a href="#testinstanceparent" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>testInstance.parent</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>testInstance<span class="token punctuation">.</span>parent\n</code></pre>\n      </div>\n<p>The parent test instance of this test instance.</p>\n<h3 id="testinstancechildren"><a href="#testinstancechildren" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>testInstance.children</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>testInstance<span class="token punctuation">.</span>children\n</code></pre>\n      </div>\n<p>The children test instances of this test instance.</p>\n<h2 id="ideas"><a href="#ideas" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Ideas</h2>\n<p>You can pass <code>createNodeMock</code> function to <code>TestRenderer.create</code> as the option, which allows for custom mock refs.\n<code>createNodeMock</code> accepts the current element and should return a mock ref object.\nThis is useful when you test a component that relies on refs.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> TestRenderer <span class="token keyword">from</span> <span class="token string">\'react-test-renderer\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>input <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>input<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>el <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>input <span class="token operator">=</span> el<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> focused <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\nTestRenderer<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    createNodeMock<span class="token punctuation">:</span> <span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">\'input\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// mock a focus function</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n          focus<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n            focused <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">expect</span><span class="token punctuation">(</span>focused<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>',
frontmatter:{title:"Test Renderer",next:null,prev:null},fields:{path:"docs/reference-test-renderer.md",slug:"docs/test-renderer.html"}}},pathContext:{slug:"docs/test-renderer.html"}}}});
//# sourceMappingURL=path---docs-test-renderer-html-2cfdfb74e00008957354.js.map