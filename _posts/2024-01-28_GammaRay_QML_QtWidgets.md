---
layout: base
title: QML Debugging and comparing with QtWidgets
date: 2024-01-27 18:30:00
categories: programming
author: ["Aditya Tolikar"]
---
<div markdown="1" class="content-tile">
# Viewing QML Objects in your Qt project
- Qt Creator has QmlDesigner and QmlPreview plugins
   - Qt Quick 2 Preview can be used to render a single qml file without building the entire program.
   - If your code is supported, you can use QML Designer in the Design view of Qt Creator. Here you can:
      - See the code and the results side by side
      - Drag and drop to add/move elements
- [GammaRay by KDAB](https://github.com/KDAB/GammaRay) is useful for multiple purposes:
   - Check out all Qt Meta Objects
   - View Runtime properties of QML elements (Similar to what is enabled by GDB for C++ elements)
   - Quick Scenes
      - Pick QML elements directly from a visual copy of the QML Scene of a running application
         - You can then view (and even change on the fly) properties of selected objects
      - Visualise OpenGL batches as separate colours, making it easier to optimise your application
      - Visualise multiple item layers as a 3D box, making it easier to check and fix visibility of clipped out items.
      - Measure pixel sizes and get colour information

</div>
<div markdown="1" class="content-tile">
# Using QtWidgets vs QML
- QML (Qt Quick) is hardware accelerated and has a scene graph functionality.
   - Better when your device has any GPU available.
- Qt Widgets is older and more complete
   - Certain functionality will be found inbuilt, which you might have to redo in case of QML
      - Functionalities are being added to Qt Quick as the versions go forward
   - Uses CPU rendering
   - It seems easier to get used to making new widgets in C++ since you can simply
      1. Inherit one of the QWidget classes
      2. Add UI elements either using C++ or using forms
         - Forms get converted to C++ when compiling
      3. Add custom logic
      4. Use the resultant derived class in your project
         - You can even use the same by promoting existing widgets in another Form to the newly made class
- Qt Quick will become more and more recommendable as Qt 6 becomes older
   - If you are using KDE Frameworks, you have additional options from kirigami

</div>
