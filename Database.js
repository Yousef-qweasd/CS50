var config = {
	apiKey: "AIzaSyAzvhjwAXIRkUPA4WdkP8D1jAECYPGVWak",
	authDomain: "my-website-e18f2.firebaseapp.com",
	databaseURL: "https://jeenyato-7cba0-default-rtdb.firebaseio.com/",
	storageBucket: "my-jeenyato-7cba0.appspot.com",
};
ChatWith=""
firebase.initializeApp(config);
var UserID="+20 01001312208"
function save(data){
	var MyPath = firebase.database().ref('APP1/Users/'+ UserID);
	MyPath.set(data)
		.then(function() {
		console.log('succeeded');
	})
	.catch(function(error) {
		console.log("failed: " + error.message);
	});
}
function read(does){
	var MyPath = firebase.database().ref('APP1/Users/'+ UserID);
	MyPath.once('value')
		.then(function(GetData) {
		var Data = GetData.val();
			does(Data.GetAll)
	}).catch(function(error) {
		console.log("failed: " + error.message);
		openPage("Page7")
	});
}
let Database={
	"ConnectionONE":function (){
		read(function(Data){
			if (document.getElementById("SKIB").innerHTML==Data.PassWord){
				read(function(Data){
					datadone=""
					for (i in Data.Frinds){
						datadone=datadone+`<div onclick="openPage('Page11',Database.ConnectionThere('`+i+`'))" class="divchatallow" ><img src="`+Data.Frinds[i].img+`" width="50px" height="50px" style="border-radius:50%;margin-top:10px;margin-left:10px;"><span class="lable" style="font-size:60px;"  > `+Data.Frinds[i].name+`</span></div>`
					}
					document.getElementById("allchats").innerHTML=datadone
				})
			}
			else{
				console.log(document.getElementById("SKIA").innerHTML)
				App.Page9.style.display="flex"
			}
		})
	},
	"ConnectionTWO":function (){
		UserID=document.getElementById("phone").value
		save({
			"GetAll":{
				"PassWord":document.getElementById("password").value,
				"Name":document.getElementById("username").value,
				"Score":0,
				"Settings":{
					"op1":true,
					"op2":true,
					"op3":0,
					"op4":true,
					"op5":true,
					"op6":"Th2",
				},
				"Frinds":{
					"+20 01001312208":{
						"name":"Jee",
						"img":"img/+20 01001312208.png",
						"chat":[
							["hello",1,false],
							["hello",0,false],
						]
					}
				}
			}
		})
	},
	"ConnectionThere":function (ChatWith){
		read(function(Data){
			document.getElementById("Wep11").innerHTML=`<div class= "headf " style="overflow: hidden;" ><button onclick="openPage('Page6', Database.ConnectionONE())" class="material-icons" id="more7" >arrow_back <img src="`+Data.Frinds[ChatWith].img+`" width="60px" height="60px" style="border-radius:50%;"> <span style="font-family:monospace;" >`+Data.Frinds[ChatWith].name+`</span></button></div><div id ="massage"></div><textarea id="masseg_text"></textarea><button class="material-icons" id="send_mass"onclick="send()">send</button>`
		})
	},
	"ConnectionFour":function (ChatWith){
		read(function(Data){
			Data.Frinds[ChatWith].chat.push(["",,])
		})
	},
}