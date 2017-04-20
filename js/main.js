/*!
 * Design & Development by the N|Steam Contributors <https://github.com/orgs/node-steam/people/>
 * Made with <3 and JavaScript in Atom and SublimeText <https://atom.io/>, <https://www.sublimetext.com/>
 */
"use strict";fetch("/data.json").then(function(n){return n.json()}).then(function(n){console.log(n);new Vue({el:".grid",data:n})}).catch(function(n){console.error(n)});