"use strict";var o=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var v=o(function(h,f){
function g(a,r,e,t){var u,i,n,s;if(u=r.data,i=r.accessors[0],e===0)return!!i(u,t);for(n=t,s=0;s<a;s++){if(i(u,n))return!0;n+=e}return!1}f.exports=g
});var c=o(function(w,l){
var p=require('@stdlib/array-base-arraylike2object/dist'),b=v();function d(a,r,e,t){var u,i,n;if(a<=0)return!1;if(i=p(r),i.accessorProtocol)return b(a,i,e,t);if(e===0)return!!r[t];for(u=t,n=0;n<a;n++){if(r[u])return!0;u+=e}return!1}l.exports=d
});var q=o(function(z,y){
var j=require('@stdlib/strided-base-stride2offset/dist'),k=c();function m(a,r,e){var t=j(a,e);return k(a,r,e,t)}y.exports=m
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=q(),P=c();O(x,"ndarray",P);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
