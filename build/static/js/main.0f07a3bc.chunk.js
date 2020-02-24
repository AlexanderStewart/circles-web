(this["webpackJsonpcircles-web"]=this["webpackJsonpcircles-web"]||[]).push([[0],{11:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(10),i=a.n(n),l=(a(7),a(1)),s=a(2),o=a(5),u=a(4),h=a(3),d=a(6);a(9);function m(e){return c.a.createElement("div",{className:"circle",onMouseDown:e.onMouseDown,onTouchStart:e.onTouchStart,style:{backgroundColor:e.color}},e.value)}var v=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"renderCircle",value:function(e){var t=this;return c.a.createElement(m,{value:this.props.circleValues[e],color:this.props.circleColors[e],onTouchStart:function(){return t.props.onTouchStart(e)},onMouseDown:function(){return t.props.onMouseDown(e)}})}},{key:"render",value:function(){return c.a.createElement("div",{className:"game-board"},c.a.createElement("div",{className:"game-row align-left"},this.renderCircle(0),c.a.createElement("div",{className:"horizontal-space"}),this.renderCircle(1),c.a.createElement("div",{className:"horizontal-space"}),this.renderCircle(2),c.a.createElement("div",{className:"horizontal-space"}),this.renderCircle(3)),c.a.createElement("div",{className:"vertical-space",style:{height:"4vh"}}),c.a.createElement("div",{className:"game-row align-right"},this.renderCircle(4),c.a.createElement("div",{className:"horizontal-space"}),this.renderCircle(5),c.a.createElement("div",{className:"horizontal-space"}),this.renderCircle(6),c.a.createElement("div",{className:"horizontal-space"}),this.renderCircle(7)),c.a.createElement("div",{className:"vertical-space"}),c.a.createElement("div",{className:"game-row align-left"},this.renderCircle(8),c.a.createElement("div",{className:"horizontal-space"}),this.renderCircle(9),c.a.createElement("div",{className:"horizontal-space"}),this.renderCircle(10),c.a.createElement("div",{className:"horizontal-space"}),this.renderCircle(11)),c.a.createElement("div",{className:"vertical-space"}),c.a.createElement("div",{className:"game-row align-right"},this.renderCircle(12),c.a.createElement("div",{className:"horizontal-space"}),this.renderCircle(13),c.a.createElement("div",{className:"horizontal-space"}),this.renderCircle(14),c.a.createElement("div",{className:"horizontal-space"}),this.renderCircle(15)))}}]),t}(c.a.Component),f="#13ad37",p="#f29721",E="#ded8d1";function b(e,t){for(var a=[],r=0;r<t.length;r++)"selected"===t[r]&&a.push(r);var c=N(e,a[0]),n=N(e,a[1]);return!(!c&&!n)}function N(e,t){return!!function(e,t){if(0===e){if(1===t||4===t)return!0}else if(4===e){if(0===t||1===t||5===t||8===t||9===t)return!0}else if(8===e){if(4===t||9===t||12===t)return!0}else if(12===e&&(13===t||9===t||8===t))return!0;return!1}(e,t)||(!!function(e,t){if(3===e){if(2===t||6===t||7===t)return!0}else if(7===e){if(6===t||11===t||3===t)return!0}else if(11===e){if(10===t||15===t||14===t||7===t||6===t)return!0}else if(15===e&&(14===t||11===t))return!0;return!1}(e,t)||(!!function(e,t){if((1===e||2===e)&&(e-1===t||e+1===t||e+3===t||e+4===t))return!0;return!1}(e,t)||(!!function(e,t){if((13===e||14===e)&&(e-1===t||e+1===t||e-3===t||e-4===t))return!0;return!1}(e,t)||!!function(e,t){if(5===e||6===e){if(e-1===t||e+1===t||e+4===t||e+5===t||e-3===t||e-4===t)return!0}else if((9===e||10===e)&&(e-1===t||e+1===t||e+3===t||e+4===t||e-4===t||e-5===t))return!0;return!1}(e,t))))}var C=function(e){function t(e){var a;Object(l.a)(this,t),a=Object(o.a)(this,Object(u.a)(t).call(this,e));var r=Array(16).fill(null);r[5]=1,r[10]=2;var c=Array(16).fill(E);c[5]=f,c[10]=f;var n=Array(16).fill("nonactive");n[5]="active",n[10]="active";return a.state={circleValues:r,circleColors:c,circleStates:n,selected:0},a.handleTap=a.handleTap.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleTap",value:function(e){console.log("circle "+e+" tapped");var t=this.state.circleValues,a=this.state.circleColors,r=this.state.circleStates,c=this.state.selected;switch(r[e]){case"nonactive":if(2===c&&b(e,r)){l(e,"active");var n=function(e,t){for(var a=[],r=0;r<e.length;r++)"selected"===e[r]&&a.push(r);return t[a[0]]+t[a[1]]}(r,t);t[e]=n,i()}break;case"active":console.log("selected: "+c),c>=2&&i(),b(e,r)||i(),c++,l(e,"selected");break;case"selected":c--,i()}function i(){for(var e=0;e<=15;e++)"selected"===r[e]&&l(e,"active");c=0}function l(e,t){switch(t){case"nonactive":a[e]=E,r[e]="nonactive";break;case"active":a[e]=f,r[e]="active";break;case"selected":a[e]=p,r[e]="selected"}}this.setState({circleValues:t,circleColors:a,circleStates:r,selected:c})}},{key:"render",value:function(){var e=this,t=this.state.circleValues,a=this.state.circleColors;return c.a.createElement("div",{class:"global-width"},c.a.createElement("div",{class:"space-above-title"}),c.a.createElement("div",{className:"title-container"},c.a.createElement("div",{className:"title"},"circles - beta")),c.a.createElement("div",{className:"content-space"}),c.a.createElement(v,{circleValues:t,circleColors:a,onTouchStart:function(t){return e.processTouch},onMouseDown:this.handleTap}),c.a.createElement("div",{className:"content-space"}),c.a.createElement("div",{className:"bottom-text-container"},c.a.createElement("div",{className:"github-link-text"},"find the code here: ",c.a.createElement("br",null),c.a.createElement("a",{className:"github-link",href:"https://github.com/AlexanderStewart/circles-web"},"github.com/alexanderstewart/circles-web"))))}},{key:"processTouch",value:function(e,t){e.preventDefault(),this.handleTap(t)}}]),t}(c.a.Component);i.a.render(c.a.createElement(C,null),document.getElementById("root"))},7:function(e,t,a){},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.0f07a3bc.chunk.js.map