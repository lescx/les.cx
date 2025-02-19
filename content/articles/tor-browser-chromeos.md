+++
date = 2025-02-19T18:58:07+01:00
description = ''
draft = true
lastmod = 2025-02-19T18:58:07+01:00
publishDate = 2025-02-19T18:58:07+01:00
tags = ['', '']
title = 'Tor Browser Chromeos'
+++

This is just a quick tutorial on how to install the Tor Browser on ChromeOS. No stupid introduction on what Tor is, no trash talk and the need to boost SEO rankings.

*This guide is written on ChromeOS 129.*

Alright. Because the Tor Browser for Android is not supported on ChromeOS, we need to use the Linux version, which is simple enough.

1. [Activate the ChromeOS Linux environment](https://chromeos.dev/en/linux/setup) if you haven't already.
2. Open Google Chrome and go to `chrome://flags`
3. Enable `#crostini-multi-container` and click on restart
4. Create a new container (I named mine `tor`).

Step 2-4 aren't strictly required. You could just use the default penguin container for setting up the browser. Still, I recommend doing so. The nice thing about it is that you start with a fresh, minimal LXD container. Out of 1000 people, one probably did something very stupid and starting with something that isn't fucked up yet is probably a good idea.

To do so, open the Terminal and under Developer Settings > Manage extra containers > create name your container however you like. Then, click on create. Afterwards you should see your container.

Enter the following into the newly created container:

```shell
sudo su
```

Paste the following command into your terminal < kbd "Ctrl+Shift+V" >. _Yes, that's one, long command._

```bash
apt update &&
apt upgrade -y &&
wget -qO- https://deb.torproject.org/torproject.org/A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89.asc | gpg --dearmor | tee /usr/share/keyrings/tor-archive-keyring.gpg >/dev/null &&
sed -i 's/main$/main contrib/' /etc/apt/sources.list &&
source /etc/os-release &&
apt install -y apt-transport-https apt-transport-tor &&
printf "deb [signed-by=/usr/share/keyrings/tor-archive-keyring.gpg] tor+http://apow7mjfryruh65chtdydfmqfpj5btws7nbocgtaovhvezgccyjazpqd.onion/torproject.org %s main\n" "$VERSION_CODENAME" | tee -a /etc/apt/sources.list.d/tor.list &&
printf "deb [signed-by=/usr/share/keyrings/tor-archive-keyring.gpg] https://deb.torproject.org/torproject.org %s main\n" "$VERSION_CODENAME" | tee -a /etc/apt/sources.list.d/tor.list > /dev/null &&
printf "deb-src [signed-by=/usr/share/keyrings/tor-archive-keyring.gpg] https://deb.torproject.org/torproject.org %s main\n" "$VERSION_CODENAME" | tee -a /etc/apt/sources.list.d/tor.list > /dev/null &&
apt update &&
apt install -y tor &&
systemctl enable --now tor &&
apt install -y --no-install-suggests deb.torproject.org-keyring torbrowser-launcher
```

I recommend that you read what you are going to put into the terminal. After all, I'm just a random person telling you to put something (potentially malicious) on your machine. Basically, it will update your machine, add the Tor Projects PGP key, add the contrib repo, make sure you can download apt packages over Tor, and once everything is set up, install the Tor Browser.

As you can see, `deb.torproject.org-keyring` was installed using the hidden service:

```bash
$ apt-cache policy deb.torproject.org-keyring
deb.torproject.org-keyring:
  Installed: 2024.05.22
  Candidate: 2024.05.22
  Version table:
 *** 2024.05.22 500
        500 tor+http://apow7mjfryruh65chtdydfmqfpj5btws7nbocgtaovhvezgccyjazpqd.onion/torproject.org bookworm/main amd64 Packages
        100 /var/lib/dpkg/status
```

Open the _Tor Browser Launcher Settings_ application and tick the checkbox "Download over system Tor".

`Save & Exit` and et voilà!

GLHF.

---

Resources:

* https://support.torproject.org/faq/staying-anonymous/
* https://support.torproject.org/apt/tor-deb-repo
* https://wiki.debian.org/TorBrowser#Installing_the_official_Debian_package
