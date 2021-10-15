function SetPreferredColourScheme()
{
	let currentTheme = "dark";
	if(window.matchMedia){
		if(window.matchMedia("(prefers-color-scheme: light)").matches) {
			currentTheme = "light";
		}
	}
	document.documentElement.setAttribute("data-theme", currentTheme);
}

function changeTheme()
{
	if (document.documentElement.getAttribute("data-theme") == "dark")
	{
		document.documentElement.setAttribute("data-theme", "light");
		document.getElementsByClassName('themechanger')[0].setAttribute("title", "Dark Theme");
	}
	else
	{
		document.documentElement.setAttribute("data-theme", "dark");
		document.getElementsByClassName('themechanger')[0].setAttribute("title", "Light Theme");
	}
}

function ScrollNavBar()
{
	/*let navbar_height = document.getElementById("navbar").offsetHeight;
	document.documentElement.style.setProperty("--JS-calculated-navbar-height", navbar_height/2 + 'px');*/
	//document.documentElement.style.setProperty("--Box-Calculated-name_contact-Height", document.getElementById("hdr-name-contact").offsetHeight + 'px');
	
	/*let header_height = document.getElementsByClassName('header')[0].offsetHeight;*/
	if (window.pageYOffset >= document.getElementById("header").offsetHeight)
	{
		/*document.getElementById("navbar").style.position = "fixed";
		document.getElementById("navbar").style.top = 0;*/
		document.getElementById("navbar").classList.remove("below-header");
		document.getElementById("navbar").classList.add("fixed-on-top");
	}
	else
	{
		/*document.getElementById("header").style.position = "reative";*/
		document.getElementById("navbar").classList.remove("fixed-on-top");
		document.getElementById("navbar").classList.add("below-header");
	}
}

function updateClipboard(newClip) {
	navigator.clipboard.writeText(newClip).then(function() {
		/* clipboard successfully set */
		let message = document.getElementById("pop-up-message");
		message.innerText = "Mail ID copied to Clipboard";
		message.style.display = "block";
		function remove_popup()
		{
			message.style.display = "none";
		}
		setTimeout(remove_popup, 2000);
		}, function() {
		/* clipboard write failed */
		let message = document.getElementById("pop-up-message");
		message.innerText = "Copying Failed. Function not supported by browser";
		message.style.display = "block";
		function remove_popup()
		{
			message.style.display = "none";
		}
		setTimeout(remove_popup, 3000);
		});
}

function CopyMailID()
{
	let selected_element = document.querySelector("#mail-id-text");
	let mail_ID_text = selected_element.innerText;
	updateClipboard(mail_ID_text);
	/*navigator.permissions.query({name: "clipboard-write"}).then(result => {
	if (result.state == "granted" || result.state == "prompt") {
		// write to the clipboard now
		let mail_ID_text = selected_element.innerText;
		updateClipboard(mail_ID_text);
	}
	});*/
	/*Older Deprecated implementation
	if(document.execCommand)
	{
		document.execCommand("copy");
		let message = document.getElementById("pop-up-message");
		message.innerText = "Mail ID copied to Clipboard";
		message.style.display = "contents";
		function remove_popup()
		{
			message.style.display = "none";
		}
		setTimeout(remove_popup, 1000);
	}
	else
	{
		let message = document.getElementById("pop-up-message");
		message.innerText = "Copying Failed. Function not supported by browser";
		message.style.display = "contents";
		function remove_popup()
		{
			message.style.display = "none";
		}
		setTimeout(remove_popup, 1000);
	}*/
}

function StartX()
{
	SetPreferredColourScheme();
	//Get height of name_contact box in header and give it to CSS
	//document.documentElement.style.setProperty("--Box-Calculated-name_contact-Height", document.getElementById("hdr-name-contact").offsetHeight + 'px');
	
	//Event Listeners
	if (window.addEventListener)
	{
		document.querySelector('#mail-id-text').addEventListener("click",CopyMailID);
		window.addEventListener ("scroll", function() {ScrollNavBar();});
	}
	else if (window.attachEvent)
	{
		document.querySelector('#mail-id-text').attachEvent("onclick", CopyMailID);
		window.attachEvent("onscroll", function() {ScrollNavBar();});
	}
}StartX();
