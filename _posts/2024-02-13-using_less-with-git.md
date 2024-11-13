---
layout: base
title: Using `less` with `git`
date: 2024-02-12 18:30:00
categories: git terminal
author: ["Aditya Tolikar"]
---
<div markdown="1" class="content-tile">
# Using `less` with `git`
- For `git` commands that use `less`, e.g. `git log` and `git diff`
- `less` version 643 from the Arch repositories

<div markdown="1" class="content-tile-l2">
## To use scroll wheel inside `less` and enable "quit if one screen"
- Use the configuration:
	`less -F -+X`
- With the command
	`git config --global --replace-all core.pager 'less -F -+X'`
- Explanation:
	- `less` : Single character options using `-` can be reset using `-+`
	- `-F` will set the option set by "F". Equivalent to `--quit-if-one-screen`
	- `-+X` will reset the option set by "X"
		- For some reason `--+no-init` does not work where `-+X` does. On the other hand, adding `--no-init` works where it is required.
			- Needs to be checked

</div>
<div markdown="1" class="content-tile-l2">
## Alternative method to enable scroll wheel
- Use `less --mouse`
	- Works with other options
	- Can use `--wheel-lines` options along with it to do more stuff
	
	> Mouse input works only on terminals which support X11 mouse reporting, and on the Windows version of less.
	
	- Has other limitations: Please check `man less` for details

</div>
</div>
