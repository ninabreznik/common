(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{418:function(t,s,n){"use strict";n.r(s);var a=n(46),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("em",[n("strong",[t._v("name")])]),t._v(": DiskDb")]),t._v(" "),n("p",[n("em",[n("strong",[t._v("summary")])]),t._v(": Creates DiskDb database using LruDb for caching with FileFlatDb and extending TransactionDb.")]),t._v(" "),n("p",[n("em",[n("strong",[t._v("description")])]),t._v(": Create an instance of a Disk database using LruDb (for caching with FileFlatDb) and extending TransactionDb. Note that LruDB uses the "),n("a",{attrs:{href:"https://www.npmjs.com/package/lru_map",target:"_blank",rel:"noopener noreferrer"}},[t._v("Least Recently Used (LRU) cache algorithm"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("em",[n("strong",[t._v("example")])]),t._v(":")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" stringToU8a "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/util/string/toU8a'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" DiskDb "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/db/Disk'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" TransactionDb "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/db/engines/TransactionDb'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Creat diskDb instance that wraps LruDb with backing and Lru cache")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" diskDb "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiskDb")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Creat txDb instance that uses diskDb")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" txDb "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TransactionDb")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("diskDb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Open the disk db backing database. Clears the Lru cache")]),t._v("\ndiskDb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Declare key/value pair to allocate to store under a the key")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" key "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringToU8a")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringToU8a")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'some value'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Store key/value pair in disk db backing and also in Lru cache")]),t._v("\ndiskDb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Retrieve value for key from disk db. Returns cached value if key")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// in cache, otherwise returns backing value for key and stores")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this latest retrieved key/value pair in Lru cache")]),t._v("\nvalueRetrieved "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" diskDb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Delete key/value pair from disk db backing and set the key to null in Lru cache")]),t._v("\ndiskDb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("del")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Transaction to Store key/value pair in transaction db")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isTxSuccess "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" txDb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("transaction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  txDb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Boolean to indicate whether transaction was successful or not")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v("`Transaction successful?: ")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("isTxSuccess"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Retrieve transaction value from diskDb db")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v("`Transfered value: ")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("diskDb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Close the diskDb database and clear Lru cache")]),t._v("\ndiskDb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br"),n("span",{staticClass:"line-number"},[t._v("43")]),n("br")])]),n("h1",{attrs:{id:"hierarchy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hierarchy","aria-hidden":"true"}},[t._v("#")]),t._v(" Hierarchy")]),t._v(" "),n("p",[n("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html"}},[t._v("TransactionDb")])],1),t._v(" "),n("p",[n("strong",[t._v("↳ DiskDb")])]),t._v(" "),n("h1",{attrs:{id:"implements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#implements","aria-hidden":"true"}},[t._v("#")]),t._v(" Implements")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html"}},[t._v("TxDb")])],1)]),t._v(" "),n("h1",{attrs:{id:"constructors"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#constructors","aria-hidden":"true"}},[t._v("#")]),t._v(" Constructors")]),t._v(" "),n("p",[n("a",{attrs:{id:"constructor"}})]),t._v(" "),n("h2",{attrs:{id:"constructor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#constructor","aria-hidden":"true"}},[t._v("#")]),t._v(" constructor")]),t._v(" "),n("p",[t._v("⊕ "),n("strong",[t._v("new DiskDb")]),t._v("(base: "),n("em",[n("code",[t._v("string")])]),t._v(", name: "),n("em",[n("code",[t._v("string")])]),t._v(", options?: "),n("em",[n("router-link",{attrs:{to:"/db/modules/_types_.html#basedboptions"}},[t._v("BaseDbOptions")])],1),t._v("): "),n("router-link",{attrs:{to:"/db/classes/_disk_.diskdb.html"}},[t._v("DiskDb")])],1),t._v(" "),n("p",[n("em",[t._v("Overrides "),n("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html"}},[t._v("TransactionDb")]),t._v("."),n("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html#constructor"}},[t._v("constructor")])],1)]),t._v(" "),n("p",[n("em",[t._v("Defined in "),n("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/c0d646b/packages/db/src/Disk.ts#L66",target:"_blank",rel:"noopener noreferrer"}},[t._v("Disk.ts:66"),n("OutboundLink")],1)])]),t._v(" "),n("p",[n("strong",[t._v("Parameters:")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Type")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("base")]),t._v(" "),n("td",[n("code",[t._v("string")])])]),t._v(" "),n("tr",[n("td",[t._v("name")]),t._v(" "),n("td",[n("code",[t._v("string")])])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("Optional")]),t._v(" options")]),t._v(" "),n("td",[n("router-link",{attrs:{to:"/db/modules/_types_.html#basedboptions"}},[t._v("BaseDbOptions")])],1)])])]),t._v(" "),n("p",[n("strong",[t._v("Returns:")]),t._v(" "),n("router-link",{attrs:{to:"/db/classes/_disk_.diskdb.html"}},[t._v("DiskDb")])],1),t._v(" "),n("hr"),t._v(" "),n("h1",{attrs:{id:"methods"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),n("p",[n("a",{attrs:{id:"close"}})]),t._v(" "),n("h2",{attrs:{id:"close"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#close","aria-hidden":"true"}},[t._v("#")]),t._v(" close")]),t._v(" "),n("p",[t._v("▸ "),n("strong",[t._v("close")]),t._v("(): "),n("code",[t._v("void")])]),t._v(" "),n("p",[n("em",[t._v("Implementation of "),n("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html"}},[t._v("TxDb")]),t._v("."),n("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html#close"}},[t._v("close")])],1)]),t._v(" "),n("p",[n("em",[t._v("Inherited from "),n("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html"}},[t._v("TransactionDb")]),t._v("."),n("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html#close"}},[t._v("close")])],1)]),t._v(" "),n("p",[n("em",[t._v("Defined in "),n("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/c0d646b/packages/db/src/engines/TransactionDb.ts#L51",target:"_blank",rel:"noopener noreferrer"}},[t._v("engines/TransactionDb.ts:51"),n("OutboundLink")],1)])]),t._v(" "),n("p",[n("strong",[t._v("Returns:")]),t._v(" "),n("code",[t._v("void")])]),t._v(" "),n("hr"),t._v(" "),n("p",[n("a",{attrs:{id:"del"}})]),t._v(" "),n("h2",{attrs:{id:"del"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#del","aria-hidden":"true"}},[t._v("#")]),t._v(" del")]),t._v(" "),n("p",[t._v("▸ "),n("strong",[t._v("del")]),t._v("(key: "),n("em",[n("code",[t._v("Uint8Array")])]),t._v("): "),n("code",[t._v("void")])]),t._v(" "),n("p",[n("em",[t._v("Implementation of "),n("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html"}},[t._v("TxDb")]),t._v("."),n("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html#del"}},[t._v("del")])],1)]),t._v(" "),n("p",[n("em",[t._v("Inherited from "),n("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html"}},[t._v("TransactionDb")]),t._v("."),n("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html#del"}},[t._v("del")])],1)]),t._v(" "),n("p",[n("em",[t._v("Defined in "),n("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/c0d646b/packages/db/src/engines/TransactionDb.ts#L81",target:"_blank",rel:"noopener noreferrer"}},[t._v("engines/TransactionDb.ts:81"),n("OutboundLink")],1)])]),t._v(" "),n("p",[n("strong",[t._v("Parameters:")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Type")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("key")]),t._v(" "),n("td",[n("code",[t._v("Uint8Array")])])])])]),t._v(" "),n("p",[n("strong",[t._v("Returns:")]),t._v(" "),n("code",[t._v("void")])]),t._v(" "),n("hr"),t._v(" "),n("p",[n("a",{attrs:{id:"drop"}})]),t._v(" "),n("h2",{attrs:{id:"drop"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#drop","aria-hidden":"true"}},[t._v("#")]),t._v(" drop")]),t._v(" "),n("p",[t._v("▸ "),n("strong",[t._v("drop")]),t._v("(): "),n("code",[t._v("void")])]),t._v(" "),n("p",[n("em",[t._v("Implementation of "),n("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html"}},[t._v("TxDb")]),t._v("."),n("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html#drop"}},[t._v("drop")])],1)]),t._v(" "),n("p",[n("em",[t._v("Inherited from "),n("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html"}},[t._v("TransactionDb")]),t._v("."),n("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html#drop"}},[t._v("drop")])],1)]),t._v(" "),n("p",[n("em",[t._v("Defined in "),n("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/c0d646b/packages/db/src/engines/TransactionDb.ts#L59",target:"_blank",rel:"noopener noreferrer"}},[t._v("engines/TransactionDb.ts:59"),n("OutboundLink")],1)])]),t._v(" "),n("p",[n("strong",[t._v("Returns:")]),t._v(" "),n("code",[t._v("void")])]),t._v(" "),n("hr"),t._v(" "),n("p",[n("a",{attrs:{id:"empty"}})]),t._v(" "),n("h2",{attrs:{id:"empty"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#empty","aria-hidden":"true"}},[t._v("#")]),t._v(" empty")]),t._v(" "),n("p",[t._v("▸ "),n("strong",[t._v("empty")]),t._v("(): "),n("code",[t._v("void")])]),t._v(" "),n("p",[n("em",[t._v("Implementation of "),n("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html"}},[t._v("TxDb")]),t._v("."),n("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html#empty"}},[t._v("empty")])],1)]),t._v(" "),n("p",[n("em",[t._v("Inherited from "),n("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html"}},[t._v("TransactionDb")]),t._v("."),n("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html#empty"}},[t._v("empty")])],1)]),t._v(" "),n("p",[n("em",[t._v("Defined in "),n("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/c0d646b/packages/db/src/engines/TransactionDb.ts#L63",target:"_blank",rel:"noopener noreferrer"}},[t._v("engines/TransactionDb.ts:63"),n("OutboundLink")],1)])]),t._v(" "),n("p",[n("strong",[t._v("Returns:")]),t._v(" "),n("code",[t._v("void")])]),t._v(" "),n("hr"),t._v(" "),n("p",[n("a",{attrs:{id:"get"}})]),t._v(" "),n("h2",{attrs:{id:"get"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#get","aria-hidden":"true"}},[t._v("#")]),t._v(" get")]),t._v(" "),n("p",[t._v("▸ "),n("strong",[t._v("get")]),t._v("(key: "),n("em",[n("code",[t._v("Uint8Array")])]),t._v("): "),n("code",[t._v("Uint8Array")]),t._v(" | "),n("code",[t._v("null")])]),t._v(" "),n("p",[n("em",[t._v("Implementation of "),n("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html"}},[t._v("TxDb")]),t._v("."),n("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html#get"}},[t._v("get")])],1)]),t._v(" "),n("p",[n("em",[t._v("Inherited from "),n("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html"}},[t._v("TransactionDb")]),t._v("."),n("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html#get"}},[t._v("get")])],1)]),t._v(" "),n("p",[n("em",[t._v("Defined in "),n("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/c0d646b/packages/db/src/engines/TransactionDb.ts#L93",target:"_blank",rel:"noopener noreferrer"}},[t._v("engines/TransactionDb.ts:93"),n("OutboundLink")],1)])]),t._v(" "),n("p",[n("strong",[t._v("Parameters:")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Type")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("key")]),t._v(" "),n("td",[n("code",[t._v("Uint8Array")])])])])]),t._v(" "),n("p",[n("strong",[t._v("Returns:")]),t._v(" "),n("code",[t._v("Uint8Array")]),t._v(" | "),n("code",[t._v("null")])]),t._v(" "),n("hr"),t._v(" "),n("p",[n("a",{attrs:{id:"maintain"}})]),t._v(" "),n("h2",{attrs:{id:"maintain"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maintain","aria-hidden":"true"}},[t._v("#")]),t._v(" maintain")]),t._v(" "),n("p",[t._v("▸ "),n("strong",[t._v("maintain")]),t._v("(fn: "),n("em",[n("router-link",{attrs:{to:"/db/modules/_types_.html#progresscb"}},[t._v("ProgressCb")])],1),t._v("): "),n("code",[t._v("void")])]),t._v(" "),n("p",[n("em",[t._v("Implementation of "),n("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html"}},[t._v("TxDb")]),t._v("."),n("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html#maintain"}},[t._v("maintain")])],1)]),t._v(" "),n("p",[n("em",[t._v("Inherited from "),n("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html"}},[t._v("TransactionDb")]),t._v("."),n("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html#maintain"}},[t._v("maintain")])],1)]),t._v(" "),n("p",[n("em",[t._v("Defined in "),n("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/c0d646b/packages/db/src/engines/TransactionDb.ts#L71",target:"_blank",rel:"noopener noreferrer"}},[t._v("engines/TransactionDb.ts:71"),n("OutboundLink")],1)])]),t._v(" "),n("p",[n("strong",[t._v("Parameters:")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Type")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("fn")]),t._v(" "),n("td",[n("router-link",{attrs:{to:"/db/modules/_types_.html#progresscb"}},[t._v("ProgressCb")])],1)])])]),t._v(" "),n("p",[n("strong",[t._v("Returns:")]),t._v(" "),n("code",[t._v("void")])]),t._v(" "),n("hr"),t._v(" "),n("p",[n("a",{attrs:{id:"open"}})]),t._v(" "),n("h2",{attrs:{id:"open"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#open","aria-hidden":"true"}},[t._v("#")]),t._v(" open")]),t._v(" "),n("p",[t._v("▸ "),n("strong",[t._v("open")]),t._v("(): "),n("code",[t._v("void")])]),t._v(" "),n("p",[n("em",[t._v("Implementation of "),n("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html"}},[t._v("TxDb")]),t._v("."),n("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html#open"}},[t._v("open")])],1)]),t._v(" "),n("p",[n("em",[t._v("Inherited from "),n("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html"}},[t._v("TransactionDb")]),t._v("."),n("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html#open"}},[t._v("open")])],1)]),t._v(" "),n("p",[n("em",[t._v("Defined in "),n("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/c0d646b/packages/db/src/engines/TransactionDb.ts#L55",target:"_blank",rel:"noopener noreferrer"}},[t._v("engines/TransactionDb.ts:55"),n("OutboundLink")],1)])]),t._v(" "),n("p",[n("strong",[t._v("Returns:")]),t._v(" "),n("code",[t._v("void")])]),t._v(" "),n("hr"),t._v(" "),n("p",[n("a",{attrs:{id:"put"}})]),t._v(" "),n("h2",{attrs:{id:"put"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#put","aria-hidden":"true"}},[t._v("#")]),t._v(" put")]),t._v(" "),n("p",[t._v("▸ "),n("strong",[t._v("put")]),t._v("(key: "),n("em",[n("code",[t._v("Uint8Array")])]),t._v(", value: "),n("em",[n("code",[t._v("Uint8Array")])]),t._v("): "),n("code",[t._v("void")])]),t._v(" "),n("p",[n("em",[t._v("Implementation of "),n("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html"}},[t._v("TxDb")]),t._v("."),n("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html#put"}},[t._v("put")])],1)]),t._v(" "),n("p",[n("em",[t._v("Inherited from "),n("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html"}},[t._v("TransactionDb")]),t._v("."),n("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html#put"}},[t._v("put")])],1)]),t._v(" "),n("p",[n("em",[t._v("Defined in "),n("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/c0d646b/packages/db/src/engines/TransactionDb.ts#L107",target:"_blank",rel:"noopener noreferrer"}},[t._v("engines/TransactionDb.ts:107"),n("OutboundLink")],1)])]),t._v(" "),n("p",[n("strong",[t._v("Parameters:")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Type")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("key")]),t._v(" "),n("td",[n("code",[t._v("Uint8Array")])])]),t._v(" "),n("tr",[n("td",[t._v("value")]),t._v(" "),n("td",[n("code",[t._v("Uint8Array")])])])])]),t._v(" "),n("p",[n("strong",[t._v("Returns:")]),t._v(" "),n("code",[t._v("void")])]),t._v(" "),n("hr"),t._v(" "),n("p",[n("a",{attrs:{id:"rename"}})]),t._v(" "),n("h2",{attrs:{id:"rename"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rename","aria-hidden":"true"}},[t._v("#")]),t._v(" rename")]),t._v(" "),n("p",[t._v("▸ "),n("strong",[t._v("rename")]),t._v("(base: "),n("em",[n("code",[t._v("string")])]),t._v(", file: "),n("em",[n("code",[t._v("string")])]),t._v("): "),n("code",[t._v("void")])]),t._v(" "),n("p",[n("em",[t._v("Implementation of "),n("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html"}},[t._v("TxDb")]),t._v("."),n("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html#rename"}},[t._v("rename")])],1)]),t._v(" "),n("p",[n("em",[t._v("Inherited from "),n("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html"}},[t._v("TransactionDb")]),t._v("."),n("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html#rename"}},[t._v("rename")])],1)]),t._v(" "),n("p",[n("em",[t._v("Defined in "),n("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/c0d646b/packages/db/src/engines/TransactionDb.ts#L67",target:"_blank",rel:"noopener noreferrer"}},[t._v("engines/TransactionDb.ts:67"),n("OutboundLink")],1)])]),t._v(" "),n("p",[n("strong",[t._v("Parameters:")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Type")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("base")]),t._v(" "),n("td",[n("code",[t._v("string")])])]),t._v(" "),n("tr",[n("td",[t._v("file")]),t._v(" "),n("td",[n("code",[t._v("string")])])])])]),t._v(" "),n("p",[n("strong",[t._v("Returns:")]),t._v(" "),n("code",[t._v("void")])]),t._v(" "),n("hr"),t._v(" "),n("p",[n("a",{attrs:{id:"size"}})]),t._v(" "),n("h2",{attrs:{id:"size"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#size","aria-hidden":"true"}},[t._v("#")]),t._v(" size")]),t._v(" "),n("p",[t._v("▸ "),n("strong",[t._v("size")]),t._v("(): "),n("code",[t._v("number")])]),t._v(" "),n("p",[n("em",[t._v("Implementation of "),n("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html"}},[t._v("TxDb")]),t._v("."),n("router-link",{attrs:{to:"/db/interfaces/_types_.txdb.html#size"}},[t._v("size")])],1)]),t._v(" "),n("p",[n("em",[t._v("Inherited from "),n("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html"}},[t._v("TransactionDb")]),t._v("."),n("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html#size"}},[t._v("size")])],1)]),t._v(" "),n("p",[n("em",[t._v("Defined in "),n("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/c0d646b/packages/db/src/engines/TransactionDb.ts#L77",target:"_blank",rel:"noopener noreferrer"}},[t._v("engines/TransactionDb.ts:77"),n("OutboundLink")],1)])]),t._v(" "),n("p",[n("strong",[t._v("Returns:")]),t._v(" "),n("code",[t._v("number")])]),t._v(" "),n("hr"),t._v(" "),n("p",[n("a",{attrs:{id:"transaction"}})]),t._v(" "),n("h2",{attrs:{id:"transaction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transaction","aria-hidden":"true"}},[t._v("#")]),t._v(" transaction")]),t._v(" "),n("p",[t._v("▸ "),n("strong",[t._v("transaction")]),t._v("(fn: "),n("em",[n("code",[t._v("function")])]),t._v("): "),n("code",[t._v("boolean")])]),t._v(" "),n("p",[n("em",[t._v("Inherited from "),n("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html"}},[t._v("TransactionDb")]),t._v("."),n("router-link",{attrs:{to:"/db/classes/_engines_transactiondb_.transactiondb.html#transaction"}},[t._v("transaction")])],1)]),t._v(" "),n("p",[n("em",[t._v("Defined in "),n("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/c0d646b/packages/db/src/engines/TransactionDb.ts#L29",target:"_blank",rel:"noopener noreferrer"}},[t._v("engines/TransactionDb.ts:29"),n("OutboundLink")],1)])]),t._v(" "),n("p",[n("strong",[t._v("Parameters:")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Type")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("fn")]),t._v(" "),n("td",[n("code",[t._v("function")])])])])]),t._v(" "),n("p",[n("strong",[t._v("Returns:")]),t._v(" "),n("code",[t._v("boolean")])]),t._v(" "),n("hr")])},[],!1,null,null,null);s.default=e.exports}}]);