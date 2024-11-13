---
layout: base
title: Some things I realised when making a library at work
date: 2023-12-01 18:30:00
categories: 
author: ["Aditya Tolikar"]
---
<div markdown="1" class="content-tile">
# Wrong function called in case of separately compiled interface
- While using C++ plugins using Abstract classes
	- Plugin built separately has had an additional function inserted
	- The Application using the plugin still has the older header and dirently uses the Shared Object
	+ It can cause function calls to the plugin to call the wrong funtion
		- Maybe something related to vtable

</div>
<div markdown="1" class="content-tile">
# QUdpSocket problem with QObject::connect
- Qt 5.14 QUdpSocket might stop sending readyRead if disconnected and reconnected.
	- Check this out with later versions.

</div>
<div markdown="1" class="content-tile">
# MONGO DB GridFS
- MONGODB: If writing a file to GridFS using mongocxx driver is interrupted by pulling out the cable
	- MONGODB will not show the partial file immediately
	- You can later reconnect and complete the transactions
		- Not sure how long you can do that for.
	- What happens to the data you have already given to MONGODB before it was disconnected?
		- Does MONGODB get rid of it later on or does it remain in the chunks?

</div>
