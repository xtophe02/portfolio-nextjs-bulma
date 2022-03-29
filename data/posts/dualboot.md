---
title: "dualboot ubuntu with windows 10"
date: "Dec 11, 2021"
excerpt: "Learn how to have a dualboot Ubuntu alongside Windows 10"
image: "dualboot.svg"
isFeatured: false
category: ["Linux", "Windows"]
---

### why? Ubuntu is better suited for development.

**1 Make a Backup of your windows System** _optional_
I recommend you to backup all your data to an external storage and make a backup of your windows system, incase if something fails utterly, you can always have windows operating system to install on your pc again.

**2 Download Ubuntu**
Here is the [link](https://ubuntu.com/download/desktop) to official website and I also recommend you to go through the [installation guide](https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview) given in website.

**3 Create a live USB of ubuntu**
There are many free applications available that will help you create a live USB of Ubuntu.
Let's go with [Rufus](https://rufus.ie/en/) to create a live USB. download the .exe file.

Plug in your USB. This device will be formatted so make sure that you don’t have any important data on this USB disk.

Run the Rufus tool you downloaded, it will automatically detect your USB disk. Now, browse the ISO image file you just downloaded from Ubuntu website.

Finally, hit the start button

**4 Make some free space on your computer to install Ubuntu**
Usually an option is provided for many systems to make disk partition for ubuntu while installing. But, that is not in all the cases. It is better to make some space for Ubuntu before installing.

In the Windows search, search for _‘disk partitions’_ and go to _‘Create and format hard disk partitions’_

In the Disk Management tool, right-click on the drive which you want to partition and select **_shrink volume_**.
Take 30GB at minimum.

**5 Boot from live USB**
Plug the live Ubuntu USB in the computer.
Let's see how to boot from Live USB. You can access the UEFI firmware within the windows.

Go to the _Advanced startup_ option and click on Restart now button.
On next screen click on _'Use a device'_ option

Recognize the USB disk with the help of name and size. It may also be displayed as _'EFI USB Device'_.

Now it will power off your system and reboot into the disk you chose which should be the live USB disk.

**6 Installing Ubuntu along windows**
After that, The first 2 steps are simple, you will be asked to choose the language and select the keyboard layout.

On the next screen, choose Normal installation. _No need_ to download updates or install _third-party software_ just yet. You may do it after installation completes.

The next task will give you the option to create a partition for Ubuntu by dragging the divider. You can allocate appropriate disk (step 4) space to Linux here.
