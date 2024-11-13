---
layout: base
title: Unable to see GUI aplication debug output in Qt Creator
date: 2024-01-06 18:30:00
categories: programming IDE troubleshooting
author: ["Aditya Tolikar"]
---
<div markdown="1" class="content-tile">
# Qt Creator application debug output
In the Arch packaged version of Qt Creator, there seems to be a problem with displaying the debug output (cerr) of a program being run from the IDE.

- It is expected to be shown in the Application Output pane, but is not shown there
* You can find it in the system journal (using `journalctl`)
- Setting an environment variable in the Run Configuration `QT_ASSUME_STDERR_HAS_CONSOLE=1` seems to get the output back where it is expected.

[Ref1 - StackOverflow](https://stackoverflow.com/a/60960625/7920584)    
[Ref2 - Solid Smoke BlogSpot](https://solidsmoke.blogspot.com/2019/04/qt-enabling-qdebug-messages-and-qt.html?showComment=1585692027299#c2544162969531417530_)

</div>
