App={
	"Page1":document.getElementById("Wep1"),
	"Page2":document.getElementById("Wep2"),
	"Page3":document.getElementById("Wep3"),
	"Page4":document.getElementById("Wep4"),
	"Page5":document.getElementById("Wep5"),
	"Page6":document.getElementById("Wep6"),
	"Page7":document.getElementById("Wep7"),
	"Page8":document.getElementById("Wep8"),
	"Page9":document.getElementById("Wep9"),
	"Page10":document.getElementById("Wep10"),
	"Page11":document.getElementById("Wep11"),
	
}
Settings={
	"op1":true,
	"op2":true,
	"op3":0,
	"op4":true,
	"op5":true,
	"op6":"Th9",
}
function ChangePasswordInApp (){
	document.getElementById("SKIB").innerHTML=document.getElementById("passaddresword").value
	openPage('Page6', Database.ConnectionONE())
}
function doTheme(Theme_sele){
	ChangeThemes(Themes[Theme_sele])
	document.getElementById("Th1").className="icon"
	document.getElementById("Th2").className="icon"
	document.getElementById("Th3").className="icon"
	document.getElementById("Th4").className="icon"
	document.getElementById("Th5").className="icon"
	document.getElementById("Th6").className="icon"
	document.getElementById("Th7").className="icon"
	document.getElementById("Th8").className="icon"
	document.getElementById("Th9").className="icon"
	document.getElementById("Th10").className="icon"
	document.getElementById("Th11").className="icon"
	document.getElementById("Th12").className="icon"
	document.getElementById("Th13").className="icon"
	document.getElementById("Th14").className="icon"
	document.getElementById("Th15").className="icon"
	document.getElementById(Theme_sele).className="icon selected"
}
function Change (Itme ,Cond=true){
	if (Cond){
		if(document.getElementById(Itme).className=="CBO"){
			document.getElementById(Itme).className="CBC"
			document.getElementById("C"+Itme).className="CBBC"
			Settings["op"+Itme]=false
		}
		else{
			document.getElementById(Itme).className="CBO"
			document.getElementById("C"+Itme).className="CBBO"
			Settings["op"+Itme]=true
		}
	}
	doTheme(Settings["op6"])
}
function ChangeThemes(Colors){
	C1=Colors[0]
	C2=Colors[1]
	C3=Colors[2]
	C4=Colors[3]
	C5=Colors[4]
	C6=Colors[5]
	C7=Colors[6]
	C8=Colors[7]
	document.getElementsByTagName("body")[0].style.background=C1;
	document.getElementById('Input').style.background=C4;
	document.getElementById('Input').style.color=C5;
	for (i in document.getElementsByClassName("mar")){
		try{
			document.getElementsByClassName("mar")[i].style.background=C3;
		}catch{}
	}
	document.getElementById("Mader").style.background=C3;
	document.getElementById("Mader").style.color=C5;
	for (i in document.getElementsByClassName("headf")){
		try{
			document.getElementsByClassName("headf")[i].style.background=C6;
		}catch{}
	}
	document.getElementById("more1").style.color=C3;
	document.getElementById("more5").style.color=C3;
	document.getElementById("more3").style.color=C3;
	document.getElementById("more4").style.color=C3;
	document.getElementById("more6").style.color=C3;
	document.getElementById("more7").style.color=C3;
	for (i in document.getElementsByClassName("Imoje")){
		try{
			document.getElementsByClassName("Imoje")[i].style.background=C6;
		}catch{}
	}
	for (i in document.getElementsByTagName("button")){
		try{
			document.getElementsByTagName("button")[i].style.background=C6;
		}catch{}
	}
	for (i in document.getElementsByClassName("card")){
		try{
			document.getElementsByClassName("card")[i].style.background=C6;
		}catch{}
	}
	for (i in document.getElementsByClassName("card")){
		try{
			document.getElementsByClassName("card")[i].style.color=C3;
		}catch{}
	}
	for (i in document.getElementsByClassName("card")){
		try{
			document.getElementsByClassName("card")[i].style.borderColor=C3;
		}catch{}
	}
	for (i in document.getElementsByClassName("cardalow")){
		try{
			document.getElementsByClassName("cardalow")[i].style.background=C6;
		}catch{}
	}
	for (i in document.getElementsByClassName("cardalow")){
		try{
			document.getElementsByClassName("cardalow")[i].style.color=C3;
		}catch{}
	}
	for (i in document.getElementsByClassName("cardalow")){
		try{
			document.getElementsByClassName("cardalow")[i].style.borderColor=C3;
		}catch{}
	}
	document.getElementById("mores1").style.color=C3;
	document.getElementById("mores2").style.color=C3;
	document.getElementById("mores3").style.color=C3;
	document.getElementById("mores4").style.color=C3;
	document.getElementById("mores5").style.color=C3;
	for (i in document.getElementsByClassName("CBO")){
		try{
			document.getElementsByClassName("CBO")[i].style.background=C3;
		}catch{}
	}
	for (i in document.getElementsByClassName("CBBO")){
		try{
			document.getElementsByClassName("CBBO")[i].style.background=C7;
		}catch{}
	}
	for (i in document.getElementsByClassName("CBC")){
		try{
			document.getElementsByClassName("CBC")[i].style.background=C8;
		}catch{}
	}
	for (i in document.getElementsByClassName("CBBC")){
		try{
			document.getElementsByClassName("CBBC")[i].style.background=C3;
		}catch{}
	}
	for (i in document.getElementsByClassName("lable")){
		try{
			document.getElementsByClassName("lable")[i].style.color=C3;
		}catch{}
	}
	for (i in document.getElementsByClassName("IID")){
		try{
			document.getElementsByClassName("IID")[i].style.background=C3;
		}catch{}
	}
	document.getElementById("SKIF").style.color=C3;
	document.getElementById("SKIF").style.borderColor=C3;
	for (i in document.getElementsByClassName("CSK")){
		try{
			document.getElementsByClassName("CSK")[i].style.background=C3;
		}catch{}
	}
	for (i in document.getElementsByClassName("CSK")){
		try{
			document.getElementsByClassName("CSK")[i].style.borderColor=C3;
		}catch{}
	}
	for (i in document.getElementsByClassName("divchatallow")){
		try{
			document.getElementsByClassName("divchatallow")[i].style.background=C6;
		}catch{}
	}
}
function DoSittings(){
	if (Settings["op1"]){
		document.getElementsByClassName("XCVBN")[0].style.display="block"
		document.getElementsByClassName("mar")[0].style.height="65%"
	}
	else{
		document.getElementsByClassName("XCVBN")[0].style.display="none"
		Settings["op2"]=false
		document.getElementById("2").className="CBC"
		document.getElementById("C2").className="CBBC"
		document.getElementsByClassName("mar")[0].style.height="80%"
	}
	if (Settings["op4"]){
		document.getElementById("Input").style.textAlign="left"
	}
	else{
		document.getElementById("Input").style.textAlign="right"
	}
	if (Settings["op5"]){
		document.getElementById("Mader").style.textAlign="left"
	}
	else{
		document.getElementById("Mader").style.textAlign="right"
	}
	
	for (i in EL){
		vasdfcvb=document.getElementById('I'+i)
		if (vasdfcvb.value!=""){
			EL[i]=vasdfcvb.value
		}
	}
	doTheme(Settings["op6"])
}
function WriteEmojy (Emo){
	vb=document.getElementById("Input")
	vb.value=(vb.value+EL[Emo])
	if(Settings["op2"]){vb.focus()}		
}
openPage ("Page1",function (){
	for (i in EL){
		document.getElementById(i).innerHTML=EL[i]
	}
})
function DoInChangePage(){
	document.getElementById("allchats").innerHTML=""
}
function openPage (Page, Code=function(){}){
	for (i in App){
		App[i].style.display="none"
	}
	App[Page].style.display="block"
	DoInChangePage()
	Code()
}
function len (Item){
	let count=0
	for (i in Item){
		count=count+1
	}
	return count;
}
function Jee (val){
	let yco=""
	for ( i in val){
		if (J.indexOf(val[i])!=-1){
			yco=yco+T[(J.indexOf(val[i]))]
		}
		else{
			yco=yco+val[i]
		}
	}
	for ( i in Emoji ){
		yco=yco.replaceAll(i,Emoji[i])
	}
	return yco
}
function REJee (val){
	for ( i in Emoji ){
		val=val.replaceAll(Emoji[i],i)
	}
	yco=""
	for ( i in val){
		if (T.indexOf(val[i])!=-1){
			yco=yco+J[(T.indexOf(val[i]))]
		}
		else{
			yco=yco+val[i]
		}
	}
	return yco
}
function Convert_to_UN (dm){
	Decode=""
	e=true
	for ( d in dm){
		for ( i in all){
			if ( dm[d] == all[i][0]){
				Decode=Decode+all[i][1]+all[i][2]+all[i][3]+all[i][4]+all[i][5]
				e=false
				break
			}
		}
		if ( e ){
			Decode=Decode+d
			e=true
		}
		else{
			e=true
		}
	}
	return Decode
}
function Uncripting_UN (dm){
	d=""
	dbin=""
	bnmbnk=["x","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","0"]
	for ( h in dm ){
		can=false
		for (cvb in bnmbnk){
			if (bnmbnk[cvb]==dm[h]){
				can=true
				break
			}
		}
		if(can){
			dbin=dbin+dm[h]
		}
		else{
			dbin=""
			d=d+dm[h]
		}
		if ( len(dbin)==5){
			for ( i in all){
				if ( dbin == all[i][1]+all[i][2]+all[i][3]+all[i][4]+all[i][5]){
					d=d+all[i][0]
					dbin=""
				}
			}
		}
	}
	return d
}
abcdefghij=document.getElementById("Input")
function GeeksForGeeks() {
	abc=abcdefghij.value
	de = true
	can=false
	bnmbnk=["x","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","0"]
	for ( latter in abc ){
		for (i in bnmbnk){
			if (abc[latter] == bnmbnk[i]){
				can=true
				break
			}
		}
		if (can){}
		else{
			de = false
			break
		}
	}
	if ( de ){
		document.getElementById("Mader").innerHTML=REJee(Uncripting_UN(abc))
	}else{
		document.getElementById("Mader").innerHTML=Convert_to_UN(Jee(abc))
	}
}
function Copy (){
	var range = document.createRange();
	range.selectNode(document.getElementById("Mader"));
	window.getSelection().removeAllRanges(); 
	window.getSelection().addRange(range); 
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
	abcdefghij.value=""
}
document.getElementById("Mader").onclick=Copy
mainloop()
document.getElementById("Input").onfocus=doInput_Foucus
function doInput_Foucus (){
	document.getElementsByClassName("headf")[0].style.display="none"
}
function undoInput_Foucus (){
	document.getElementsByClassName("headf")[0].style.display="inline-block"
}
document.getElementById("Input").onblur=undoInput_Foucus
function mainloop(){
	GeeksForGeeks()
	DoSittings()
	requestAnimationFrame(mainloop)
}
function Creating() {
	var password = document.getElementById("password").value;
	var phonenum = document.getElementById("phone").value;
	var username = document.getElementById("username").value;
	if (username.length < 3) {
		document.getElementById('passwordError').innerText = 'User Name Must Be Mor Than 3 Characters Long.';
		return;
	}
	if (phonenum[0]!=="+" && phonenum.length !== 15){
		document.getElementById('passwordError').innerText = 'Phone Numper Format Must Be +20 XXXXXXXXXXX';
		return;
	}
	Database.ConnectionTWO()
	openPage('Page6', Database.ConnectionONE())
}
function togglePasswordVisibility() {
	var passwordInput = document.getElementById('password');
	if (passwordInput.type === 'password') {
		passwordInput.type = 'text';
		document.getElementsByTagName("CBUS")[0].innerHTML="visibility_off"
	} else {
		passwordInput.type = 'password';
		document.getElementsByTagName("CBUS")[0].innerHTML="visibility"
	}
}
function togglePasswordVisibilityc() {
	var passwordInput = document.getElementById('passwording');
	if (passwordInput.type === 'password') {
		passwordInput.type = 'text';
		document.getElementsByTagName("CBUS")[1].innerHTML="visibility_off"
	} else {
		passwordInput.type = 'password';
		document.getElementsByTagName("CBUS")[1].innerHTML="visibility"
	}
}
function adding(){
	openPage('Page6', Database.ConnectionONE())
}
function send(){
	varment=document.getElementById("masseg_text")
	Database.ConnectionFour()
	varment.value=""
}