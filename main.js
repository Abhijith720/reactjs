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
var details=(details_info)=>{
	var summaryHeading=document.createElement("h2");
	summaryHeading.textContent="Summary";
	var hr1=document.createElement("hr");
	child_two.append(summaryHeading);
	child_two.append(hr1);

	var list=document.createElement("ul");
	details_info.summary.map(i=>{
		var listitem=document.createElement("li");
		listitem.textContent=i;
		list.append(listitem);
	})

	child_two.append(list);
	var skillHeading=document.createElement("h2");
	skillHeading.textContent="Skills";
	child_two.append(skillHeading);
	var skill_hr1=document.createElement("hr");
	child_two.append(skill_hr1);

	details_info.skills.map(j=>{
		var skillType=document.createElement("h3");
		child_two.append(skillType);

		j.values.map(j_value=>{
			var skillValue=document.createElement("span");
			skillValue.textContent=j_value;
			skillValue.classList.add("skill");
			child_two.append(skillValue);
		})
	})
		
}