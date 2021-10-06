function changeTheme()
{
	var currentStyle = document.getElementById("styler").href;
	if (currentStyle === "file:///C:/Users/Ulterno/Documents/WORK/Website/assets/index_stylesheet_black.css")
	{
		document.getElementById("styler").href = "./assets/index_stylesheet_white.css";
	}
	else
		document.getElementById("styler").href = "./assets/index_stylesheet_black.css";
}