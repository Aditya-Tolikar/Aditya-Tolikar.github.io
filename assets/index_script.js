function changeTheme()
{
	var currentStyle = document.getElementById("styler").href;
	if (currentStyle == "https://aditya-tolikar.github.io/assets/index_stylesheet_black.css")
	{
		document.getElementById("styler").href = "./assets/index_stylesheet_white.css";
	}
	else
		document.getElementById("styler").href = "./assets/index_stylesheet_black.css";
}
