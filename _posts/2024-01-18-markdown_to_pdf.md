---
layout: base
title: Markdown to PDF
date: 2024-01-17 18:30:00
categories: 
author: ["Aditya Tolikar"]
---
<div markdown="1" class="content-tile">
# Markdown to PDF
<div markdown="1" class="content-tile-l2">
## Using Okular
1. Make sure your file has the ".md" extension.
2. Open in [Okular][1]
3. File -> Export As -> PDF -> Select save location and save.

</div>
<div markdown="1" class="content-tile-l2">
## Using discount
To go the Markdown -> HTML -> PDF path, you can use discount directly (Okular uses it)

1. Say your file is named "filename.md". Use `markdown filename.md > outfile.html` to get the html into an html file "outfile.html".
2. Use your preferred method of converting HTML to PDF.

  [1]: https://okular.kde.org/

</div>
</div>
<div markdown="1" class="content-tile">
# `discount` usage
## Downsides
- Hard wrapping doesn't seem to be working. (check properly)

</div>
