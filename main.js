fetch('data.json').then(response=>{
	return response.json();
}).then(data=>{
	console.log(data);
})
var parent=document.getElementById("root");
var profileinfo=info=>{
	info.map((i,index)=>{
		var child=document.createElement("article");
		child.classList.add("child");
		var name=document.createElement("h2");
		name.textContent=i.profileinfo.name;
		child.append(name);
		var mail=document.createElement("a");
		mail.textContent=i.profileinfo
	})
}