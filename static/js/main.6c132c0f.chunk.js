(window["webpackJsonptap-room"]=window["webpackJsonptap-room"]||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/keg.c30d1330.jpg"},14:function(e,t,a){},25:function(e,t,a){e.exports=a(38)},30:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l),i=(a(30),a(2)),u=a(3),o=a(5),s=a(4),m=a(6),b=a(7),h=(a(31),function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(s.a)(t).call(this,e))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"navbar-items"},r.a.createElement(b.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement("div",{className:"logo"},"Tap Room")),r.a.createElement("div",{className:"navbar-item"},r.a.createElement(b.b,{to:"/addKeg",style:{textDecoration:"none"}},"Add Keg")),r.a.createElement("div",{className:"navbar-item"},r.a.createElement(b.b,{to:"/filterKeg",style:{textDecoration:"none"}},"Filter Kegs"))))}}]),t}(n.Component)),d=a(12),g=a.n(d),v=(a(14),function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(s.a)(t).call(this,e))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.info,a=e.kegNumber,n=e.callback;e.key,e.deleteKeg;return r.a.createElement("div",{className:"keg-list-item",style:{background:"url("+g.a+")",backgroundPosition:"center",backgroundSize:"cover"}},r.a.createElement(b.b,{to:"/Keg"},r.a.createElement("div",{className:"beer-info",onClick:function(e){return n(a-1)}},r.a.createElement("h2",null,a,". ",t.name),"Brand: ",t.brand,r.a.createElement("br",null),"Volume: ",t.volume,"%",r.a.createElement("br",null),"IBU: ",t.ibu," ",r.a.createElement("br",null),"ABV: ",t.abv,"% ",r.a.createElement("br",null),"Price: $",t.price,r.a.createElement("br",null))))}}]),t}(n.Component)),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).handleChange=function(e){a.setState({sellNumber:e.target.value})},a.handleSell=function(){a.props.changeVolume(a.state.sellNumber,a.props.kegNumber),a.setState({sellNumber:0})},a.state={sellNumber:0},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.info,n=t.kegNumber,l=t.deleteKeg;return r.a.createElement("div",null,r.a.createElement("div",{className:"keg-container",style:{background:"url("+g.a+")",backgroundPosition:"center"}},r.a.createElement("div",{className:"kegpage-info"},r.a.createElement("h2",null,a.name),"Brand: ",a.brand,r.a.createElement("br",null),r.a.createElement("br",null),"Volume: ",a.volume,"%",r.a.createElement("br",null),r.a.createElement("br",null),"IBU: ",a.ibu," ",r.a.createElement("br",null),r.a.createElement("br",null),"ABV: ",a.abv,"% ",r.a.createElement("br",null),r.a.createElement("br",null),"Price: $",a.price)),r.a.createElement("div",{className:"edit-info"},r.a.createElement("p",null,"Sell Pint(s) (enter #)"),r.a.createElement("input",{type:"number",value:this.state.sellNumber,onChange:this.handleChange}),r.a.createElement("button",{onClick:function(){return e.handleSell()}},"Sell"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"Change Price"),r.a.createElement("button",{onClick:function(){return e.props.changePrice(.5,n)}},"Increase (+$0.50)"),r.a.createElement("button",{onClick:function(){return e.props.changePrice(-.5,n)}},"Decrease (-$0.50)"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(b.b,{to:"/"},r.a.createElement("button",{onClick:function(){return l(n)},style:{backgroundColor:"red"}},"Delete Keg")),r.a.createElement("br",null),r.a.createElement(b.b,{to:"/"}," Return to Kegs list")))}}]),t}(n.Component),p=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(s.a)(t).call(this,e))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.kegList,a=e.handleClick,n=e.deleteKeg;return r.a.createElement("div",{className:"keg-list"},t.map(function(e,t){return r.a.createElement(v,{key:t,info:e,kegNumber:t+1,deleteKeg:n,callback:a})}))}}]),t}(n.Component),f=a(16),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(f.a)({},e.target.name,e.target.value))},a.filterList=function(e){var t=e.slice();return t=t.filter(function(e){return e.name.toLowerCase().includes(a.state.byName.toLowerCase())&&e.brand.toLowerCase().includes(a.state.byBrand.toLowerCase())}),""!==a.state.byMinAbv&&(t=t.filter(function(e){return e.abv>=parseFloat(a.state.byMinAbv)})),""!==a.state.byMaxAbv&&(t=t.filter(function(e){return e.abv<=parseFloat(a.state.byMaxAbv)})),t},a.state={byName:"",byBrand:"",byMinAbv:"",byMaxAbv:""},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.kegList,a=e.handleClick,n=this.filterList(t);return r.a.createElement("div",{className:"filter-container"},r.a.createElement("div",{className:"filter-info"},r.a.createElement("h2",null,"Filter by"),"Name: ",r.a.createElement("input",{type:"text",value:this.state.byName,name:"byName",onChange:this.handleChange,placeholder:"name"}),r.a.createElement("br",null),r.a.createElement("br",null),"Brand: ",r.a.createElement("input",{type:"text",value:this.state.byBrand,name:"byBrand",onChange:this.handleChange,placeholder:"brand"}),r.a.createElement("br",null),r.a.createElement("br",null),"Min abv: ",r.a.createElement("input",{type:"number",value:this.state.byMinAbv,name:"byMinAbv",onChange:this.handleChange,placeholder:"Min abv"}),r.a.createElement("br",null),r.a.createElement("br",null),"Max abv: ",r.a.createElement("input",{type:"number",value:this.state.byMaxAbv,name:"byMaxAbv",onChange:this.handleChange,placeholder:"Max abv"}),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{className:"keg-list"},n.map(function(e,t){return r.a.createElement(v,{key:t,info:e,kegNumber:t+1,callback:a})})))}}]),t}(n.Component),y=a(11),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).handleClick=function(){console.log("here")},a.handleChange=function(e){a.setState(Object(f.a)({},e.target.name,e.target.value))},a.state={name:"",brand:"",ibu:"",abv:"",price:"",volume:100},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props;t.info,t.kegNumber;return r.a.createElement("div",{className:"keg-container-form",style:{background:"url("+g.a+")",backgroundPosition:"center"}},r.a.createElement("div",{className:"add-keg-form"},r.a.createElement("h1",null,"Add A Keg"),r.a.createElement("input",{type:"text",value:this.state.name,name:"name",onChange:this.handleChange,placeholder:"name"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:this.state.brand,name:"brand",onChange:this.handleChange,placeholder:"brand"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"number",value:this.state.ibu,name:"ibu",onChange:this.handleChange,placeholder:"ibu"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"number",value:this.state.abv,name:"abv",onChange:this.handleChange,placeholder:"abv"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"number",value:this.state.price,name:"price",onChange:this.handleChange,placeholder:"price"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(b.b,{to:"/"},r.a.createElement("button",{onClick:function(){return e.props.addKeg(e.state)}},"Add")),r.a.createElement("br",null),r.a.createElement(b.b,{to:"/"},"Cancel")))}}]),t}(n.Component),j=(a(37),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).handleKegSelect=function(e){console.log("got to click"),console.log(e,a.state.kegList[e]),a.setState({kegPage:!0,currentKeg:e})},a.showKegs=function(){a.setState({kegPage:!1})},a.addKeg=function(e){var t=a.state.kegList.slice();t.push(e),a.setState({kegList:t})},a.changePrice=function(e,t){console.log("here",e,t);var n=a.state.kegList.slice();n[t].price+=e,n[t].price<0&&(n[t].price=0),a.setState({kegList:n})},a.changeVolume=function(e,t){var n=a.state.kegList;n[t].volume-=5*e,n[t].volume<0&&(n[t].volume=0),a.setState({kegList:n})},a.deleteKeg=function(e){var t=a.state.kegList.slice();t.splice(e,1),a.setState({kegList:t})},a.kegList=[{name:"Hazy IPA",brand:"Deschuttes",volume:100,ibu:55,abv:6.2,price:4.5},{name:"Rainier",brand:"Rainier",volume:100,ibu:20,abv:4.5,price:2.5},{name:"Summer Pilz",brand:"Pfriem",volume:85,ibu:27,abv:5.5,price:3.99},{name:"Hop Stoopid",brand:"Lagunitas",volume:95,ibu:76,abv:8.2,price:5},{name:"Trail Beer",brand:"Deschuttes",volume:100,ibu:45,abv:5,price:4}],a.state={kegList:a.kegList,kegPage:!1,currentKeg:0},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(b.a,{basename:"tap-room"},r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(y.c,null,r.a.createElement(y.a,{exact:!0,path:"/",render:function(){return r.a.createElement(p,{kegList:e.state.kegList,handleClick:e.handleKegSelect})}}),r.a.createElement(y.a,{exact:!0,path:"/Keg",render:function(){return r.a.createElement(E,{kegNumber:e.state.currentKeg,info:e.state.kegList[e.state.currentKeg],changeVolume:e.changeVolume,changePrice:e.changePrice,deleteKeg:e.deleteKeg})}}),r.a.createElement(y.a,{exact:!0,path:"/addKeg",render:function(){return r.a.createElement(C,{addKeg:e.addKeg})}}),r.a.createElement(y.a,{exact:!0,path:"/filterKeg",render:function(){return r.a.createElement(k,{handleClick:e.handleKegSelect,kegList:e.state.kegList})}})))))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.6c132c0f.chunk.js.map