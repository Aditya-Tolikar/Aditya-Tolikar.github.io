function SetPreferredColourScheme()
{
	var currentTheme = "dark";
	if(window.matchMedia){
		if(window.matchMedia("(prefers-color-scheme: light)").matches) {
			currentTheme = "light";
		}
	}
	document.documentElement.setAttribute("data-theme", currentTheme);
}SetPreferredColourScheme();

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
