function changeTheme()
{
	var currentStyle = document.getElementById("styler").href;
	if (currentStyle === "https://github.com/Aditya-Tolikar/Aditya-Tolikar.github.io/blob/main/assets/index_stylesheet_black.css")
	{
		document.getElementById("styler").href = "./assets/index_stylesheet_white.css";
	}
	else
		document.getElementById("styler").href = "./assets/index_stylesheet_black.css";
}
