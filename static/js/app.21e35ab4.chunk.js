(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{223:function(e,t,a){e.exports=a.p+"static/media/manchesterBee.82ba68e8.jpg"},334:function(e){e.exports=JSON.parse('[{"name":"Idk","place_id":"ChIJMXjRNJOxe0gRtTdRSVb6rb8","formatted_address":"12 avenue des Champs-Elys\xe9es","rating":8,"coords":{"latitude":53.490959,"longitude":-2.237891},"image_url":"https://media.glassdoor.com/l/de/cd/ae/b6/the-face-shop.jpg","openingTimes":["Monday : 9:00am - 6:00pm","Tuesday : 9:00am - 6:00pm","Wednesday : 9:00am - 6:00pm","Thursday : 9:00am - 10:00pm","Friday : 9:00am - 11:00pm","Saturday : closed","Sunday : closed"]},{"name":"Shack","place_id":"ChIJ331csOyxe0gRrcSm_s0uKZU","formatted_address":"135 Nam K\u1ef3 Kh\u1edfi Ngh\u0129a, Ph\u01b0\u1eddng B\u1ebfn Th\xe0nh, Qu\u1eadn 1, H\u1ed3 Ch\xed Minh 700000","coords":{"latitude":53.484511,"longitude":-2.238137},"image_url":"https://media.glassdoor.com/l/de/cd/ae/b6/the-face-shop.jpg","rating":0,"openingTimes":["Monday : 8:00am - 6:00pm","Tuesday : 9:00am - 6:00pm","Wednesday : 9:00am - 6:00pm","Thursday : 9:00am - 12:00pm","Friday : 7:00am - 11:00pm","Saturday : closed","Sunday : closed"]},{"name":"Science and Industry Museum","place_id":"ChIJeyO8PJSxe0gR4t_aMX3LVms","rating":1,"formatted_address":"43 route de Genas","coords":{"latitude":53.477852,"longitude":-2.254508},"image_url":"https://media.glassdoor.com/l/de/cd/ae/b6/the-face-shop.jpg","openingTimes":["Monday : 8:00am - 6:00pm","Tuesday : 9:00am - 6:00pm","Wednesday : 9:00am - 6:00pm","Thursday : 9:00am - 12:00pm","Friday : 7:00am - 11:00pm","Saturday : 8:00am - 6:00pm","Sunday : closed"]}]')},340:function(e,t,a){"use strict";var n=a(6),r=a.n(n),o=a(5),i=a.n(o),s=a(7),c=a.n(s),l=a(3),u=a.n(l),d=a(8),m=a.n(d),p=a(1),g=a.n(p),f=a(34),h=a(4),y=a(44),v=a(26),w=a(2),b=a(25),E=a(16),C=a(92),x=a(82),k=a(74),S=a(19),P=a.n(S),I=a(241),T=a.n(I),O=(a(550),T.a.initializeApp({apiKey:"AIzaSyB-G4cVijM1PN87sr40EbbtD9ULi-nw_oU",authDomain:"teamtruthy.firebaseapp.com",databaseURL:"https://teamtruthy.firebaseio.com",projectId:"teamtruthy",storageBucket:"",messagingSenderId:"940140064100",appId:"1:940140064100:web:04dbad49071b982e3a9e71"})),j=T.a.firestore(),D=O,B=function(e){return{type:"UPDATE_EMAIL",payload:e}},L=function(e){return{type:"UPDATE_PASSWORD",payload:e}},A=function(){return function(e,t){var a,n,r,o;return P.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,a=t().user,n=a.email,r=a.password,i.next=4,P.a.awrap(D.auth().signInWithEmailAndPassword(n,r));case 4:o=i.sent,e(M(o.user.uid)),i.next=11;break;case 8:i.prev=8,i.t0=i.catch(0),alert(i.t0);case 11:case"end":return i.stop()}}),null,null,[[0,8]])}},z=function(){return function(e,t){var a,n,r,o,i;return P.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,a=t().user,n=a.email,r=a.password,s.next=4,P.a.awrap(D.auth().createUserWithEmailAndPassword(n,r));case 4:(o=s.sent).user.uid&&(i={uid:o.user.uid,email:n},j.collection("users").doc(o.user.uid).set(i),e({type:"SIGNUP",payload:i})),s.next=11;break;case 8:s.prev=8,s.t0=s.catch(0),alert(s.t0);case 11:case"end":return s.stop()}}),null,null,[[0,8]])}},M=function(e){return function(t,a){var n;return P.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,P.a.awrap(j.collection("users").doc(e).get());case 3:n=a.sent,t({type:"LOGIN",payload:n.data()}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),alert(a.t0);case 10:case"end":return a.stop()}}),null,null,[[0,7]])}},_=function(e){function t(){var e,a;r()(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=c()(this,(e=u()(t)).call.apply(e,[this].concat(o)))).componentDidMount=function(){D.auth().onAuthStateChanged((function(e){e&&(a.props.getUser(e.uid),null!=a.props.user&&a.props.navigation.navigate("Home"))}))},a}return m()(t,e),i()(t,[{key:"render",value:function(){var e=this;return g.a.createElement(h.a,{style:R.container},g.a.createElement(h.a,{style:R.imageContainer},g.a.createElement(v.a,{source:a(223),style:R.imageBee}),g.a.createElement(E.a,{style:R.safe},"Safe")),g.a.createElement(h.a,{style:R.row},g.a.createElement(C.b,{name:"envelope",type:"font-awesome"}),g.a.createElement(y.a,{style:R.inputBox,value:this.props.user.email,onChangeText:function(t){return e.props.updateEmail(t)},placeholder:"Email",autoCapitalize:"none"})),g.a.createElement(h.a,{style:R.row},g.a.createElement(C.b,{name:"lock",type:"font-awesome"}),g.a.createElement(y.a,{style:R.inputBox,value:this.props.user.password,onChangeText:function(t){return e.props.updatePassword(t)},placeholder:"Password",secureTextEntry:!0})),g.a.createElement(b.a,{style:R.button,onPress:function(){return e.props.login()}},g.a.createElement(E.a,{style:R.buttonText},"Login")),g.a.createElement(b.a,{onPress:function(){return e.props.navigation.navigate("Signup")}},g.a.createElement(E.a,{style:R.signup},"Don't have an account yet? Sign up")))}}]),t}(g.a.Component),R=w.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},imageContainer:{flexDirection:"row",justifyContent:"center",alignItems:"center",width:"80%",height:"25%",resizeMode:"contain",marginBottom:0},imageBee:{flexDirection:"row",justifyContent:"center",alignItems:"center",width:"40%",height:"75%",resizeMode:"contain"},safe:{fontSize:60,color:"#e6005c",fontFamily:"Helvetica Neue"},row:{display:"flex",flexDirection:"row",alignItems:"center",borderColor:"#d3d3d3",borderBottomWidth:1,width:"80%"},inputBox:{width:"80%",margin:5,padding:15,fontSize:16,textAlign:"left"},button:{marginTop:30,marginBottom:15,paddingVertical:5,alignItems:"center",backgroundColor:"#e6005c",borderColor:"#cc0052",borderWidth:1,borderRadius:20,width:"80%"},buttonText:{fontSize:20,fontWeight:"bold",color:"#fff"},buttonSignup:{fontSize:12},signup:{color:"black",fontSize:18}}),U=Object(k.b)((function(e){return{user:e.user}}),(function(e){return Object(x.b)({updateEmail:B,updatePassword:L,login:A,getUser:M},e)}))(_),W=function(e){function t(){var e,a;r()(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=c()(this,(e=u()(t)).call.apply(e,[this].concat(o)))).state={name:"",email:"",password:""},a}return m()(t,e),i()(t,[{key:"render",value:function(){var e=this;return g.a.createElement(h.a,{style:N.container},g.a.createElement(h.a,{style:N.imageContainer},g.a.createElement(v.a,{source:a(223),style:N.imageBee}),g.a.createElement(E.a,{style:N.safe},"Safe")),g.a.createElement(h.a,{style:N.row},g.a.createElement(C.b,{name:"envelope",type:"font-awesome"}),g.a.createElement(y.a,{style:N.inputBox,value:this.props.user.email,onChangeText:function(t){return e.props.updateEmail(t)},placeholder:"Email",autoCapitalize:"none"})),g.a.createElement(h.a,{style:N.row},g.a.createElement(C.b,{name:"lock",type:"font-awesome"}),g.a.createElement(y.a,{style:N.inputBox,value:this.props.user.password,onChangeText:function(t){return e.props.updatePassword(t)},placeholder:"Password",secureTextEntry:!0})),g.a.createElement(b.a,{style:N.button,onPress:this.props.signup},g.a.createElement(E.a,{style:N.buttonText},"Signup")),g.a.createElement(b.a,{onPress:function(){return e.props.navigation.navigate("Login")}},g.a.createElement(E.a,{style:N.signup},"Go back to Login")))}}]),t}(g.a.Component),N=w.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},imageContainer:{flexDirection:"row",justifyContent:"center",alignItems:"center",width:"80%",height:"25%",resizeMode:"contain",marginBottom:0},imageBee:{flexDirection:"row",justifyContent:"center",alignItems:"center",width:"40%",height:"70%",resizeMode:"contain"},safe:{fontSize:60,color:"#e6005c",fontFamily:"Helvetica Neue"},row:{display:"flex",flexDirection:"row",alignItems:"center",borderColor:"#d3d3d3",borderBottomWidth:1,width:"80%"},inputBox:{width:"80%",margin:5,padding:15,fontSize:16,textAlign:"left"},button:{marginTop:30,marginBottom:10,paddingVertical:5,alignItems:"center",backgroundColor:"#e6005c",borderColor:"#cc0052",borderWidth:1,borderRadius:20,width:"80%"},buttonText:{fontSize:20,fontWeight:"bold",color:"#fff"},buttonSignup:{fontSize:12},signup:{color:"black",fontSize:18}}),q=Object(k.b)((function(e){return{user:e.user}}),(function(e){return Object(x.b)({updateEmail:B,updatePassword:L,signup:z},e)}))(W),H=a(338),J=a(313),F=a(584),V=function(e){function t(){var e,a;r()(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=c()(this,(e=u()(t)).call.apply(e,[this].concat(o)))).state={places:[],reviews:[]},a}return m()(t,e),i()(t,[{key:"render",value:function(){return console.log(this.props.navigation.state.params),g.a.createElement(h.a,null,g.a.createElement(h.a,{style:G.header},g.a.createElement(E.a,{style:G.name},this.props.navigation.state.params.name),g.a.createElement(E.a,{style:G.address},this.props.navigation.state.params.address),g.a.createElement(E.a,{style:G.address},this.props.navigation.state.params.rating)),g.a.createElement(h.a,{style:G.header},g.a.createElement(E.a,{style:G.open},"Opening Times"),this.props.navigation.state.params.weekday_text.map((function(e){return g.a.createElement(E.a,{key:e,style:G.address},e)}))),g.a.createElement(h.a,{style:G.reviews},g.a.createElement(E.a,{style:G.open},"Reviews")))}}]),t}(g.a.Component),G=w.a.create({header:{alignSelf:"center",width:"90%",paddingTop:20,paddingBottom:30,borderBottomWidth:2},name:{fontSize:23,textAlign:"center",paddingBottom:7,fontWeight:"bold"},address:{textAlign:"center"},open:{textAlign:"center",paddingBottom:15,fontSize:23},reviews:{alignSelf:"center",width:"90%",paddingTop:20}}),K=a(35),Y=a(112),X=a(161),Q=a(333),Z=a.n(Q),$=APIKEY="AIzaSyDbrLDnVEOkT-UDzkM8ahFE44X0z13qnh8",ee=a(334),te=a(335),ae=function(e){function t(){var e,a;r()(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=c()(this,(e=u()(t)).call.apply(e,[this].concat(o)))).goToDir=function(){var e={destination:{latitude:a.props.markerInfo.coords.latitude,longitude:a.props.markerInfo.coords.longitude},params:[{key:"travelmode",value:"walking"},{key:"dir_action",value:"navigate"}]};Object(te.a)(e)},a}return m()(t,e),i()(t,[{key:"render",value:function(){var e=this;return g.a.createElement(h.a,{style:ne.links},g.a.createElement(Y.b,{onPress:function(t){return e.props.navigation.navigate("Reviews",e.props.markerInfo)}},g.a.createElement(b.a,{onPress:this.goToReviews},g.a.createElement(E.a,{style:ne.reviews},"See reviews "))),g.a.createElement(E.a,null," or"),g.a.createElement(Y.b,{onPress:this.goToDir},g.a.createElement(b.a,null,g.a.createElement(E.a,{style:ne.reviews}," Get directions"))))}}]),t}(g.a.Component),ne=w.a.create({links:{flexDirection:"row",alignItems:"flex-end"},reviews:{paddingTop:6,paddingLeft:3,textDecorationLine:"underline",color:"blue"}}),re=ae,oe=function(e){function t(){var e,a;r()(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=c()(this,(e=u()(t)).call.apply(e,[this].concat(o)))).state={},a.goToReviews=function(){},a}return m()(t,e),i()(t,[{key:"render",value:function(){return g.a.createElement(h.a,{style:ie.name},g.a.createElement(v.a,{source:a(223),style:ie.imageBee}),g.a.createElement(E.a,{style:{fontSize:16,textDecorationLine:"underline",paddingLeft:3}},this.props.markerInfo.name))}}]),t}(g.a.Component),ie=w.a.create({name:{flexDirection:"row",height:"50%",width:"auto",alignItems:"center",marginBottom:3},imageBee:{width:40,height:65,resizeMode:"contain"}}),se=oe,ce=function(e){function t(){return r()(this,t),c()(this,u()(t).apply(this,arguments))}return m()(t,e),i()(t,[{key:"render",value:function(){return g.a.createElement(h.a,null,g.a.createElement(se,{markerInfo:this.props.markerInfo}),g.a.createElement(E.a,{style:{paddingLeft:3}},"Estimated Time : ",this.props.time),g.a.createElement(re,{navigation:this.props.navigation,markerInfo:this.props.markerInfo}))}}]),t}(g.a.Component),le=a(336),ue=a.n(le),de=function(){return P.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.awrap(ue.a.get("https://2aw2ojaww1.execute-api.eu-west-2.amazonaws.com/api/safeplaces",{params:{}}).then((function(e){return e.data.Items})));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},me=K.a.get("screen").width,pe=function(e){function t(){var e,a;r()(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=c()(this,(e=u()(t)).call.apply(e,[this].concat(o)))).state={latitude:null,longitude:null,locations:[],markerPressed:!1,locations:ee,isLoading:!0},a.getAllSafePlaces=function(){de().then((function(e){return e.map((function(e){return{author:e.author,address:e.formatted_address,coords:{latitude:e.latitude,longitude:e.longitude},id:e.place_id,name:e.place_name,rating:e.rating,weekday_text:e.weekday_text}}))})).then((function(e){if("granted"!==X.c(X.a).status)X.b(X.a);navigator.geolocation.getCurrentPosition((function(t){var n=t.coords,r=n.latitude,o=n.longitude;return a.setState({latitude:r,longitude:o,locations:e},a.mergeCoords)}),(function(e){return console.log("Error:",e)}))}))},a.mergeCoords=function(){var e=a.state,t=e.latitude,n=e.longitude,r=e.desLatitude,o=e.desLongitude;if(null!==t&&null!==r){var i=t+","+n,s=r+","+o;a.getDirections(i,s)}},a.getDirections=function(e,t){var n,r,o,i,s,c,l;return P.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,u.next=3,P.a.awrap(fetch("https://maps.googleapis.com/maps/api/directions/json?origin="+e+"&destination="+t+"&key="+$+"&mode=walking"));case 3:return n=u.sent,u.next=6,P.a.awrap(n.json());case 6:r=u.sent,(o=r.routes[0])&&(i=o.legs[0],s=i.duration.text,c=Z.a.decode(r.routes[0].overview_polyline.points),l=c.map((function(e){return{latitude:e[0],longitude:e[1]}})),a.setState({coords:l,time:s})),u.next=14;break;case 11:u.prev=11,u.t0=u.catch(0),console.log("Error: ",u.t0);case 14:case"end":return u.stop()}}),null,null,[[0,11]])},a.onMarkerPress=function(e){return function(){a.setState({markerPressed:!0});var t=e.coords,n=t.latitude,r=t.longitude;a.setState({destination:e,desLatitude:n,desLongitude:r,markerInfo:[e],isLoading:!1},a.mergeCoords)}},a.renderMarkers=function(){var e=a.state.locations;return g.a.createElement(h.a,null,e.map((function(e,t){var n=e.coords,r=n.latitude,o=n.longitude;return g.a.createElement(Y.c,{key:t,coordinate:{latitude:r,longitude:o},onPress:a.onMarkerPress(e),style:ge.marker},g.a.createElement(Y.a,{alphaHitTest:!0,tooltip:!0,style:ge.popUp},g.a.createElement(ce,{navigation:a.props.navigation,time:a.state.time,markerInfo:e})))})))},a}return m()(t,e),i()(t,[{key:"componentDidMount",value:function(){return P.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:this.getAllSafePlaces();case 1:case"end":return e.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,t=(e.time,e.coords),a=e.latitude,n=e.longitude,r=e.markerPressed;return a?g.a.createElement(h.a,null,g.a.createElement(Y.d,{showsUserLocation:!0,style:ge.map,initialRegion:{latitude:a,longitude:n,latitudeDelta:.0922,longitudeDelta:.0421}},this.renderMarkers(),r&&g.a.createElement(Y.d.Polyline,{strokeWidth:2,strokeColor:"red",coordinates:t}))):g.a.createElement(h.a,{style:{flex:1,justifyContent:"center",alignItems:"center"}},g.a.createElement(E.a,null,"We need your permission!"))}}]),t}(g.a.Component),ge=w.a.create({map:{flex:1,width:me,display:"flex"},popUp:{width:300,height:120,borderWidth:0,paddingBottom:0,backgroundColor:"white",borderRadius:20,borderWidth:5,borderColor:"#e6d400",padding:5}}),fe=function(e){function t(){return r()(this,t),c()(this,u()(t).apply(this,arguments))}return m()(t,e),i()(t,[{key:"render",value:function(){return g.a.createElement(h.a,{style:he.container},g.a.createElement(pe,{navigation:this.props.navigation}))}}]),t}(g.a.Component),he=w.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center"},header:{backgroundColor:"#e6005c",width:"100%",height:"10%",flexDirection:"row",justifyContent:"center",alignItems:"center"},headerText:{}}),ye=Object(k.b)((function(e){return{user:e.user}}))(fe),ve=Object(F.a)({Map:{screen:ye},Reviews:{screen:V}},{initialRouteName:"Map",mode:"modal",headerMode:"screen",defaultNavigationOptions:{cardOverlayEnabled:!0,headerStyle:{backgroundColor:"#e6005c"},headerTintColor:"#fff",headerTitleStyle:{fontWeight:"bold"}}}),we=Object(f.createAppContainer)(ve),be=a(88),Ee=a(339),Ce=function(e){function t(){var e,a;r()(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=c()(this,(e=u()(t)).call.apply(e,[this].concat(o)))).state={isLoading:!0,data:[]},a.fetchPlacesByUser=function(){de().then((function(e){a.setState({data:e,isLoading:!1})}))},a}return m()(t,e),i()(t,[{key:"componentDidMount",value:function(){this.fetchPlacesByUser()}},{key:"render",value:function(){this.state;return g.a.createElement(be.a,{style:xe.main,data:this.state.data,extraData:this.state,ItemSeparatorComponent:function(){return g.a.createElement(h.a,{style:xe.separator})},keyExtractor:function(e){return e.place_id.toString()},renderItem:function(e){var t=e.item;return g.a.createElement(h.a,{style:xe.container},g.a.createElement(b.a,{onPress:function(){}},g.a.createElement(v.a,{style:xe.image,source:{uri:t.image}})),g.a.createElement(h.a,{style:xe.content},g.a.createElement(h.a,{style:xe.contentHeader},g.a.createElement(E.a,{style:xe.name},t.place_name),g.a.createElement(E.a,{style:xe.rating},t.rating)),g.a.createElement(E.a,null,t.review),g.a.createElement(Ee.a,{disabled:!1,maxStars:5,rating:t.rating,halfStarColor:"gold",fullStarColor:"gold"})))}})}}]),t}(g.a.Component),xe=w.a.create({main:{backgroundColor:"#ffffff",marginTop:10},container:{paddingRight:10,paddingLeft:10,paddingVertical:10,flexDirection:"row",alignItems:"flex-start"},content:{marginLeft:16,flex:1},contentHeader:{flexDirection:"row",justifyContent:"space-between",marginBottom:6},separator:{height:1,backgroundColor:"#CCCCCC"},image:{borderRadius:15,marginLeft:10,width:35,height:35},rating:{fontSize:11,color:"#707070"},name:{fontSize:15,fontWeight:"bold"}}),ke=function(e){function t(){var e,a;r()(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=c()(this,(e=u()(t)).call.apply(e,[this].concat(o)))).state={data:[{id:1,image:"https://api.adorable.io/avatars/90/abott@adorable.png",name:"Stefan",review:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},{id:2,image:"https://api.adorable.io/avatars/90/abott@adorable.png",name:"Sarah",review:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},{id:3,image:"https://api.adorable.io/avatars/90/abott@adorable.png",name:"Micheal",review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"},{id:4,image:"https://api.adorable.io/avatars/90/abott@adorable.png",name:"Jakub",review:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"},{id:5,image:"https://api.adorable.io/avatars/90/abott@adorable.png",name:"Mo",review:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},{id:6,image:"https://api.adorable.io/avatars/90/abott@adorable.png",name:"Boom Boom Shake the room",review:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"},{id:7,image:"https://api.adorable.io/avatars/90/abott@adorable.png",name:"Enpentenyczna Inseminacja",review:"Et harum quidem rerum facilis est et expedita distinctio"}]},a}return m()(t,e),i()(t,[{key:"render",value:function(){return g.a.createElement(be.a,{style:Se.main,data:this.state.data,extraData:this.state,ItemSeparatorComponent:function(){return g.a.createElement(h.a,{style:Se.separator})},keyExtractor:function(e){return e.id.toString()},renderItem:function(e){var t=e.item;return g.a.createElement(h.a,{style:Se.container},g.a.createElement(b.a,{onPress:function(){}},g.a.createElement(v.a,{style:Se.image,source:{uri:t.image}})),g.a.createElement(h.a,{style:Se.content},g.a.createElement(h.a,{style:Se.contentHeader},g.a.createElement(E.a,{style:Se.name},t.name),g.a.createElement(E.a,{style:Se.time},"2:44am")),g.a.createElement(E.a,null,t.review)))}})}}]),t}(p.Component),Se=w.a.create({main:{backgroundColor:"#ffffff",marginTop:10},container:{paddingRight:10,paddingLeft:10,paddingVertical:10,flexDirection:"row",alignItems:"flex-start"},content:{marginLeft:16,flex:1},contentHeader:{flexDirection:"row",justifyContent:"space-between",marginBottom:6},separator:{height:1,backgroundColor:"#CCCCCC"},image:{borderRadius:15,marginLeft:10,width:35,height:35},time:{fontSize:11,color:"#808080"},name:{fontSize:15,fontWeight:"bold"}}),Pe=a(113),Ie=a(60),Te=a(151),Oe=function(e){function t(){return r()(this,t),c()(this,u()(t).apply(this,arguments))}return m()(t,e),i()(t,[{key:"render",value:function(){return g.a.createElement(h.a,{style:je.container},g.a.createElement(h.a,{style:je.header},g.a.createElement(h.a,{style:je.headerContent},g.a.createElement(v.a,{style:je.avatar,source:{uri:"https://i.imgur.com/TDsnkJj.png"}}),g.a.createElement(E.a,{style:je.name},"JessJelly "),g.a.createElement(E.a,{style:je.userInfo},this.props.email," "),g.a.createElement(E.a,{style:je.userInfo},"Manchester "))))}}]),t}(g.a.Component),je=w.a.create({header:{backgroundColor:"#DCDCDC"},headerContent:{padding:30,alignItems:"center"},avatar:{width:130,height:130,borderRadius:63,borderWidth:4,borderColor:"white",marginBottom:10},name:{fontSize:22,color:"#000000",fontWeight:"600"},userInfo:{fontSize:16,color:"#778899",fontWeight:"600"},infoContent:{flex:1,alignItems:"flex-start",paddingLeft:5}}),De=Object(k.b)((function(e,t){return{demo:e.demo}}))(Oe),Be=function(e){function t(){var e,a;r()(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=c()(this,(e=u()(t)).call.apply(e,[this].concat(o)))).state={check:!1,switch:!1,value:40,newPassword:"",currentPassword:"",clearInput:!1},a.handleSignout=function(){D.auth().signOut(),a.props.navigation.navigate("Login")},a.navigateToUserPlaces=function(){a.props.navigation.navigate("UserPlaces",{email:a.props.user})},a.navigateToUserReviews=function(){a.props.navigation.navigate("UserReviews",{email:a.props.user})},a.resetFields=function(){a.setState({newPassword:""}),a.setState({currentPassword:""}),a.props.navigation.navigate("Home")},a.onChangePasswordPress=function(){D.auth().currentUser.updatePassword(a.state.newPassword).then((function(){Te.a.alert("Password was succesfully changed!")})).then((function(){a.resetFields()})).catch((function(e){Te.a.alert(e.message)}))},a}return m()(t,e),i()(t,[{key:"render",value:function(){var e=this,t=this.props.user.email;return g.a.createElement(g.a.Fragment,null,g.a.createElement(De,{email:t}),g.a.createElement(Pe.e,null,g.a.createElement(Pe.c,{text:"Select Your Options"},g.a.createElement(Pe.b,{text:"Log Out",iconName:"close",onPressCallback:this.handleSignout}),g.a.createElement(Pe.d,{text:"Change Password",iconName:"random",_value:this.state.switch,_onValueChange:function(){e.setState({switch:!e.state.switch}),e.onChangePasswordPress()}}),g.a.createElement(Ie.e,{clearButtonMode:"always",style:Le.texInput,placeholder:"Current Password",autoCorrect:!1,autoCapitalize:"none",secureTextEntry:!0,blurOnSubmit:!0,onChangeText:function(t){e.setState({currentPassword:t})},value:this.state.currentPassword}),g.a.createElement(Ie.e,{clearButtonMode:"always",style:Le.texInput,autoCorrect:!1,placeholder:"Type in your new password here",autoCapitalize:"none",secureTextEntry:!0,blurOnSubmit:!0,onChangeText:function(t){e.setState({newPassword:t})},value:this.state.newPassword}),g.a.createElement(Pe.a,{text:"Change email",autoCorrect:!1,iconName:"envelope-open",_color:"#000",_value:this.state.check,_onValueChange:function(){e.setState({check:!e.state.check})}}),g.a.createElement(Ie.e,{clearButtonMode:"always",style:Le.texInput,placeholder:"Type in your email here",autoCapitalize:"none",secureTextEntry:!0,blurOnSubmit:!0,onChangeText:function(t){e.setState({newPassword:t})}}),g.a.createElement(Pe.b,{text:"Your BeeSafe Places",iconName:"bank",onPressCallback:this.navigateToUserPlaces}),g.a.createElement(Pe.b,{text:"Your BeeSafe Reviews",iconName:"commenting",onPressCallback:this.navigateToUserReviews}))))}}]),t}(g.a.Component),Le=w.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center",padding:30},texInput:{borderColor:"gray",borderWidth:1,margin:15,height:40}}),Ae=Object(k.b)((function(e){return{user:e.user}}))(Be),ze=Object(F.a)({Settings:{screen:Ae},UserPlaces:{screen:Ce},UserReviews:{screen:ke}},{initialRouteName:"Settings"}),Me=Object(f.createAppContainer)(ze),_e=Object(H.a)({Home:we,Settings:Me},{defaultNavigationOptions:function(e){var t=e.navigation;return{tabBarIcon:function(e){e.focused,e.horizontal;var a,n=e.tintColor,r=t.state.routeName,o=J.a;return"Home"===r?a="ios-home":"Settings"===r&&(a="ios-settings"),g.a.createElement(o,{name:a,size:25,color:n})}}},tabBarOptions:{activeTintColor:"white",inactiveTintColor:"white",style:{backgroundColor:"#e6005c"}}}),Re=Object(f.createAppContainer)(_e),Ue=Object(f.createSwitchNavigator)({Login:{screen:U},Signup:{screen:q},Home:{screen:Re}},{initialRouteName:"Login"}),We=Object(f.createAppContainer)(Ue),Ne=a(337),qe=a(10),He=a.n(qe);function Je(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Fe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Je(Object(a),!0).forEach((function(t){He()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Je(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Ve=Object(x.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":case"SIGNUP":return t.payload;case"UPDATE_EMAIL":return Fe({},e,{email:t.payload});case"UPDATE_PASSWORD":return Fe({},e,{password:t.payload});default:return e}}});a.d(t,"a",(function(){return Ye}));var Ge=Object(x.a)(Ne.a),Ke=Object(x.d)(Ve,Ge),Ye=function(e){function t(){return r()(this,t),c()(this,u()(t).apply(this,arguments))}return m()(t,e),i()(t,[{key:"render",value:function(){return g.a.createElement(k.a,{store:Ke},g.a.createElement(We,null))}}]),t}(g.a.Component)},392:function(e,t,a){a(393),e.exports=a(570)},393:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[392,1,2]]]);
//# sourceMappingURL=../../92f24257573447693458.map