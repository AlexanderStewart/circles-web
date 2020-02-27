(this["webpackJsonpcircles-web"]=this["webpackJsonpcircles-web"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){},18:function(e,t,a){e.exports=a(30)},23:function(e,t,a){},24:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),c=a(5),l=a.n(c),n=(a(11),a(7)),s=a(2),o=a(8),d=a(9),h=a(3),u=a(10);a(13),a(23);function m(e){return i.a.createElement("div",{className:"circle",id:e.id,onPointerDown:e.onPointerDown,style:{backgroundColor:e.color,color:e.textColor,borderColor:e.borderColor}},e.value)}var v=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"renderCircle",value:function(e){var t=this;return i.a.createElement(m,{id:e,value:this.props.circleValues[e],color:this.props.circleColors[e],textColor:this.props.circleTextColors[e],borderColor:this.props.circleBorderColor[e],onPointerDown:function(){return t.props.onPointerDown(e)}})}},{key:"render",value:function(){return i.a.createElement("div",{className:"game-board"},i.a.createElement("div",{className:"game-row align-left"},this.renderCircle(0),i.a.createElement("div",{className:"horizontal-space"}),this.renderCircle(1),i.a.createElement("div",{className:"horizontal-space"}),this.renderCircle(2),i.a.createElement("div",{className:"horizontal-space"}),this.renderCircle(3)),i.a.createElement("div",{className:"vertical-space",style:{height:"4vh"}}),i.a.createElement("div",{className:"game-row align-right"},this.renderCircle(4),i.a.createElement("div",{className:"horizontal-space"}),this.renderCircle(5),i.a.createElement("div",{className:"horizontal-space"}),this.renderCircle(6),i.a.createElement("div",{className:"horizontal-space"}),this.renderCircle(7)),i.a.createElement("div",{className:"vertical-space"}),i.a.createElement("div",{className:"game-row align-left"},this.renderCircle(8),i.a.createElement("div",{className:"horizontal-space"}),this.renderCircle(9),i.a.createElement("div",{className:"horizontal-space"}),this.renderCircle(10),i.a.createElement("div",{className:"horizontal-space"}),this.renderCircle(11)),i.a.createElement("div",{className:"vertical-space"}),i.a.createElement("div",{className:"game-row align-right"},this.renderCircle(12),i.a.createElement("div",{className:"horizontal-space"}),this.renderCircle(13),i.a.createElement("div",{className:"horizontal-space"}),this.renderCircle(14),i.a.createElement("div",{className:"horizontal-space"}),this.renderCircle(15)))}}]),t}(i.a.Component),f="#faf8f0",p="#13ad37",g="#f29721",C="#CEC1B4",E="#EDC53E",b="#CEC1B4";function w(e,t){for(var a=[],r=0;r<t.length;r++)"selected"===t[r]&&a.push(r);var i=N(e,a[0]),c=N(e,a[1]);return!(!i&&!c)}function N(e,t){return!!function(e,t){if(0===e){if(1===t||4===t)return!0}else if(4===e){if(0===t||1===t||5===t||8===t||9===t)return!0}else if(8===e){if(4===t||9===t||12===t)return!0}else if(12===e&&(13===t||9===t||8===t))return!0;return!1}(e,t)||(!!function(e,t){if(3===e){if(2===t||6===t||7===t)return!0}else if(7===e){if(6===t||11===t||3===t)return!0}else if(11===e){if(10===t||15===t||14===t||7===t||6===t)return!0}else if(15===e&&(14===t||11===t))return!0;return!1}(e,t)||(!!function(e,t){if((1===e||2===e)&&(e-1===t||e+1===t||e+3===t||e+4===t))return!0;return!1}(e,t)||(!!function(e,t){if((13===e||14===e)&&(e-1===t||e+1===t||e-3===t||e-4===t))return!0;return!1}(e,t)||!!function(e,t){if(5===e||6===e){if(e-1===t||e+1===t||e+4===t||e+5===t||e-3===t||e-4===t)return!0}else if((9===e||10===e)&&(e-1===t||e+1===t||e+3===t||e+4===t||e-4===t||e-5===t))return!0;return!1}(e,t))))}function k(e,t){for(var a=[],r=0;r<e.length;r++)"selected"===e[r]&&a.push(r);return t[a[0]]+t[a[1]]}a(24);var y=a(14),T=a.n(y),B=a(45),S=function(e){function t(e){var a;Object(n.a)(this,t),a=Object(o.a)(this,Object(d.a)(t).call(this,e));var r=Array(16).fill(null),i=Array(16).fill(C),c=Array(16).fill(f),l=Array(16).fill(C),s=Array(16).fill("nonactive");return a.state={circleValues:r,circleColors:i,circleTextColors:c,circleBorderColor:l,circleStates:s,selected:0,runConfetti:!1,width:window.innerWidth,height:window.innerHeight,snackBarOpen:!1},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(h.a)(a)),a.handleTap=a.handleTap.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions),localStorage.getItem("level")||localStorage.setItem("level",0),this.resetBoard()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"handleTap",value:function(e){console.log("circle "+e+" tapped"),this.animateBounce(e);var t=this.state.circleValues,a=this.state.circleColors,r=this.state.circleTextColors,i=this.state.circleBorderColor,c=this.state.circleStates,l=this.state.selected;switch(c[e]){case"nonactive":if(2===l&&w(e,c)){this.changeCircleTo(e,"active");var n=k(c,t);t[e]=n,l=0,this.deselect()}break;case"active":l>=2&&(l=0,this.deselect()),w(e,c)||(l=0,this.deselect()),l++,this.changeCircleTo(e,"selected");break;case"selected":l=0,this.deselect();break;case"gold":if(2===l&&w(e,c)){var s=k(c,t);t[e]===s&&(this.changeCircleTo(e,"goldWin"),this.onWin(),l=0,this.deselect())}}this.setState({circleValues:t,circleColors:a,circleTextColors:r,circleBorderColor:i,circleStates:c,selected:l})}},{key:"backALevel",value:function(){console.log("back a level clicked")}},{key:"forwardALevel",value:function(){var e=Number(localStorage.getItem("level"))+1;localStorage.setItem("level",e),this.setState({snackBarOpen:!1}),this.restart()}},{key:"restart",value:function(){console.log("reset"),this.resetBoard()}},{key:"resetBoard",value:function(){this.setState({runConfetti:!1,snackBarOpen:!1});for(var e=this.state.circleValues,t=0;t<=15;t++)this.changeCircleTo(t,"nonactive"),e[t]="";var a=localStorage.getItem("level"),r=[6,9,15,3];this.changeCircleTo(r[a],"gold"),e[r[a]]=[3,4,5,6][a],this.changeCircleTo(5,"active"),e[5]=1,this.changeCircleTo(10,"active"),e[10]=2;for(var i=0;i<=15;i++)this.animateBounce(i);this.setState({circleValues:e})}},{key:"deselect",value:function(){for(var e=this.state.circleStates,t=0;t<=15;t++)"selected"===e[t]&&this.changeCircleTo(t,"active");this.setState({selected:0})}},{key:"changeCircleTo",value:function(e,t){var a=this.state.circleValues,r=this.state.circleColors,i=this.state.circleTextColors,c=this.state.circleBorderColor,l=this.state.circleStates;switch(t){case"nonactive":r[e]=C,i[e]=f,c[e]=C,l[e]="nonactive";break;case"active":r[e]=p,i[e]=f,c[e]=p,l[e]="active";break;case"selected":r[e]=g,i[e]=f,c[e]=g,l[e]="selected";break;case"gold":r[e]=f,i[e]=b,c[e]=E,l[e]="gold";break;case"goldWin":r[e]=p,i[e]=f,c[e]=E,l[e]="goldWin"}this.setState({circleValues:a,circleColors:r,circleTextColors:i,circleBorderColor:c,circleStates:l})}},{key:"animateBounce",value:function(e){var t=document.getElementById(e);t.classList.remove("bounce"),t.classList.add("bounce"),setTimeout((function(){return t.classList.remove("bounce")}),400)}},{key:"onWin",value:function(){this.setState({runConfetti:!0,snackBarOpen:!0})}},{key:"render",value:function(){var e=this,t=this.state.circleValues,a=this.state.circleColors,r=this.state.circleTextColors,c=this.state.circleBorderColor,l=this.state.runConfetti,n=this.state.width,s=this.state.height,o=this.state.snackBarOpen;return i.a.createElement("div",{className:"global-width"},i.a.createElement("div",{onPointerDown:function(){return e.forwardALevel()}},i.a.createElement(B.a,{open:o,message:i.a.createElement("span",{className:"github-link-text"},"You win! Click here to go to the next level!"," ",i.a.createElement("i",{className:"fa fa-arrow-right"}))})),i.a.createElement("div",{key:l},i.a.createElement(T.a,{width:n,height:s,run:l,gravity:.3})),i.a.createElement("div",{className:"space-above-title"}),i.a.createElement("div",{className:"line-break"}),i.a.createElement("div",{className:"title"},"circles"),i.a.createElement("div",{className:"line-break"}),i.a.createElement("div",{className:"level"},"level 0"),i.a.createElement("div",{className:"line-break"}),i.a.createElement("div",{className:"content-space-b"}),i.a.createElement(v,{circleValues:t,circleColors:a,circleTextColors:r,circleBorderColor:c,onPointerDown:this.handleTap}),i.a.createElement("div",{className:"arrows-container"},i.a.createElement("div",{onPointerDown:function(){return e.backALevel()},className:"arrows"},i.a.createElement("i",{className:"fa fa-arrow-left"})),i.a.createElement("div",{className:"space-between-arrows"}),i.a.createElement("div",{onPointerDown:function(){return e.restart()},className:"arrows"},i.a.createElement("i",{className:"fa fa-redo"}))),i.a.createElement("div",{className:"content-space-b"}),i.a.createElement("div",{className:"line-break"}),i.a.createElement("div",{className:"content-space-b"}),i.a.createElement("div",{className:"bottom-text-container"},i.a.createElement("div",{className:"github-link-text"},i.a.createElement("strong",null,"How To Play: "),"Select any two adjacent green circles and then select an empty circle adjacent to one of the selected green circles. The new circle's value becomes the sum of the previously selected circles.",i.a.createElement("br",null),i.a.createElement("br",null),"The purpose of the game is to fill in the gold ring with a green circle that has the same number."),i.a.createElement("br",null),i.a.createElement("div",{className:"github-link-text"},"find the code here: ",i.a.createElement("br",null),i.a.createElement("a",{className:"github-link",href:"https://github.com/AlexanderStewart/circles-web"},"github.com/alexanderstewart/circles-web"))),i.a.createElement("div",{className:"space-above-title"}))}}]),t}(i.a.Component);a(29);l.a.render(i.a.createElement(S,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2f0fccaf.chunk.js.map