import{R as s,i as T,k as u,l as c,m as i,n as E,o as a,p as C}from"./index-7f476f94.js";function r(o=s){const e=o===s?T:u(o);return function(){const{store:n}=e();return n}}const A=r();function d(o=s){const e=o===s?A:r(o);return function(){return e().dispatch}}const D=d(),m=o=>(e,t)=>{console.log("BEFORE CART ADD PRODUCT: ",t());const n=t().cartItems.items.find(R=>R.id===o.id);e(n?c({id:n.id,count:o.quantity}):i(o)),console.log("AFTER CART ADD PRODUCT: ",t())},O=o=>(e,t)=>{console.log("BEFORE CART DELETE PRODUCT: ",t()),e(E(o.id)),console.log("AFTER CART DELETE PRODUCT: ",t())},I=o=>(e,t)=>{console.log("BEFORE CART CLEAR: ",t()),e(a(o)),console.log("AFTER CART CLEAR: ",t())},P=o=>(e,t)=>{console.log("BEFORE CART INCREMENT PRODUCT QUANTITY: ",t()),e(c({id:o.id,count:1})),console.log("AFTER CART DECREMENT PRODUCT QUANTITY: ",t())},U=o=>(e,t)=>{console.log("BEFORE CART INCREMENT PRODUCT QUANTITY: ",t()),e(C(o.id)),console.log("AFTER CART DECREMENT PRODUCT QUANTITY: ",t())};export{m as a,O as b,I as c,U as d,P as i,D as u};
