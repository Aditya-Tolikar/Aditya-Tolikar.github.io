---
layout: base
title: Attempting Multimonitor Gaming on Linux (Tinkering)
date: 2023-12-18 00:00:00
categories: gaming tinkering Linux
author: ["Aditya Tolikar"]
---
<div markdown="1" class="content-tile">
# Tried multimonitor
<div markdown="1" class="content-tile-l2">
##  Initial steps

1. Open tty
2. Run `startx` with no xinitrc
4. You will have 3 xterm windows by default. Use them for what follows.
3. Setup monitor positions as required
4. `xrandr --setmonitor EyeFinity auto DisplayPort-2,HDMI-A-0`
	- This has nothing to do with EyeFinity, I just felt like naming it so.
	- Any name will do.
	- "DisplayPort-2" and "HDMI-A-0" were the 2 active monitors I had. You need to choose what you have.
5. Run dwm : `exec dwm & exec dmenu &`

__Result__  
dwm  runs with both monitors combined
</div>
<div markdown="1" class="content-tile-l2">
## General Applications  
- Applications like Firefox, Qt Creator, Kate ...
- Work as if 2 screens are 1 wide screen

</div>
<div markdown="1" class="content-tile-l2">
## Testing with games  
__Configuration__  

- HDMI-A-0 (1920x1080) on left DisplayPort-2 (1920x1080) on right
- Monitor Resolution 3840x1080
## GoG Games  
1. Stellaris (Linux native)
	- Using Borderless Window Mode
		- Takes up the 2 screens
		- Does not have the required resolution available
		- 1920x1080 output gets stretched across the 2 screens
		- Game knows that monitor resolution does not match
			- Loading screens are not stretched
			- During gameplay, only the UI is stretched, not the viewport
		- Right click and drag to orbit is wonky
			- On the left screen, acts as if that is the whole screen
			- Using it on the right screen causes everything to go haywire
	- No option gets generated for the double monitor
		- No ini or so file found to add said resolution
2. Wasteland 3
	- Doesn't seem to understand the wider monitor
		- Loading screens are stretched
		- Actual play screen is in a 1920x1080 area on the left.
	- No option gets generated for the double monitor
		- No ini or so file found to add said resolution
3. Pathfinder Kingmaker
	- Uses only one screen
		- Screen it selects, changes according to Window Mode selected
4. Encased A Sci Fi Post Apocalyptic RPG
	- Takes up the 2 screens*
		* If you start the game in Fullscreen, then change it to Borderless Window
			- Element position and Cursor activator location mismatch
		* If you go first to Windowed mode in 1920x1080 and then change to Borderless Window
			* And in subsequent runs in Borderless Window mode
			- It works properly.
			- Still shows 1920x1080
			- 3D space is properly projected
	- Playable
5. Satellite Reign
	- Takes up the 2 screens
		- Start button unclickable
6. Feudal Alloy
	- _Tinker_ : Turn on and off Fullscreen
	- Takes up the 2 screens
	- Graphical Elements are in the correct proportion
	- The correct Resolution is not displayed.
		- 2K resolution option becomes available
		- Changing resolution will cause either usage of only a single screen or a stretched screen
			- Redo _Tinker_ to fix

</div>
<div markdown="1" class="content-tile-l2">
## Steam Games  
1. Shadow Tactics : Blades of the Shogun
	- Takes up the whole screen
	- UI Elements and backgound elegantly adjusts themselves
	- Does not show the correct resolution in settings. Instead shows 1920x1080
	- There seems to be some warpage when rotating camera during gameplay, but I might be mistaken
		- It might actually be working perfectly
2. Hollow Knight
	- Takes up the 2 screens
	- Knows about he monitor resolution
	- The game seems to be designed not to show the Aspec Ratio, hence won't work in this case.
		- Might work in case of 2x2 monitor setup
3. Sniper Elite
	- Unlike the original version, the Steam version doesn't have the settings.ini file
		- Unable to find a way to add the custom resolution
	- Will either only take the part of the screen it can use or will stretch in a bad way, depending upon your settings
4. Counter Strike 2
	- If you set it to Borderless Window, then you can switch tty and use SIGQUIT to end it
5. XCOM 2
	- Takes up the 2 screens
	- Some of the screens are stretched, while others show well.
		- The main menu screen shows with proper proportions
	- The actual game is stretched
	- May work in 2x2
	- The correct resolution is not listed in the settings.
6. Against the Storm
	- Does not take up 2 screens under any settings
	- Game files yet to be checked for options
7. King's Bounty : Dark Side
	- Does not take up the 2 screens
	- Does not list the required resolution in the settings
	- Maybe try without dwm later

</div>
<div markdown="1" class="content-tile-l2">
## Epic Games Store Games  
1. Elite Dangerous
	- Does not take up the 2 screens under any setting
	- Still detects the 2 displays separately and doesn't know about the virtual display
	- Gives an option to select either of Primary or Secondary display.
	- Doesn not list the required resolution in settings
2. Predecessor
	- Does not take up the 2 screens
	- Does not list the required resolution in settings
3. Grime
	- Does not take up the 2 screens under any setting
	- Does not list the required resolution in settings

</div>
</div>
