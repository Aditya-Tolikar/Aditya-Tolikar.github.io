---
layout: base
title: QtCreator Debug Helpers Not Working in Debian Bookworm
date: 2024-09-11 18:30:00
categories: qtcreator troubleshooting Debian
author: ["Aditya Tolikar"]
---
<div markdown="1" class="content-tile">
# QtCreator Debug Helpers Not Working in Debian Bookworm

<div markdown="1" class="content-tile-l2">
## Problem  
When debugging in QtCreator on Debian 12 Bookworm, in the "Locals" View, variables like QString, which are expected to show a serialised output, making debugging easier, doesn't show that.

</div>
<div markdown="1" class="content-tile-l2">
## Why?  

### How does it work, otherwise?  
QtCreator uses Python scripts to tell GDB to do extra stuff, giving information required for displaying those pretty values.

### Why it doesn't work  
There is a fault in one of the Python scripts, using a removed Python function. (this is what happens when you don't shift to newer functions when a function is deprecated)  
- The problem function here, is `getargspec`.
  - Needs to be replaced with `getfullargpec`

</div>
<div markdown="1" class="content-tile-l2">
## Solution  

In `/usr/share/qtcreator/debugger/dumper.py`, there is a function defined:  
```python
    def registerDumper(self, funcname, function):
```
which uses the deprecated function, `getargspec`.  
Replace the "getargspec" with "getfullargpec".

</div>
<div markdown="1" class="content-tile-l2">
## Refer

Thanks to [Matheus Castello on his blog post](https://microhobby.com.br/blog/2023/08/08/qt-creator-v9-0-2-debug-helpers-not-working-on-ubuntu-23-04-and-debian-bookworm-12/) for doing the heavy lifting of finding the problem and giving the solution.

</div>
</div>
