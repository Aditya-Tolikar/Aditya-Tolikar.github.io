function SetPreferredColourScheme()
{
	var currentTheme = "dark";
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
	var navbar_height = document.getElementById("navbar").offsetHeight;
	document.documentElement.style.setProperty("--JS-calculated-navbar-height", navbar_height/2 + 'px');
	
	/*var header_height = document.getElementsByClassName('header')[0].offsetHeight;*/
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

function StartX()
{
	SetPreferredColourScheme();
	if (window.addEventListener)
	{
		window.addEventListener ("scroll", function() {ScrollNavBar();});
	}
	else if (window.attachEvent)
	{
		window.attachEvent("onscroll", function() {ScrollNavBar();});
	}
}StartX();
