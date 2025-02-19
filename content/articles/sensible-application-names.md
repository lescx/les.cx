+++
date = 2025-02-19T18:57:55+01:00
description = ''
draft = true
lastmod = 2025-02-19T18:57:55+01:00
publishDate = 2025-02-19T18:57:55+01:00
tags = ['', '']
title = 'Sensible Application Names'
+++

*This is a draft I wrote in early 2024 and never got around to publishing. Here’s the mostly unpolished version because it wasn’t doing anybody any good sitting in my drafts folder.*

I often struggle to work out what a particular application I'm trying to run is called. `bc` or `dc`? `cal` or `calendar`? What was the command to print the current firewall ruleset?

```shell
# nft list ruleset
nft: command not found
```
Now.

If I want to open IRC, I want to have to type `irc` into my terminal, not [`catgirl`](https://git.causal.agency/catgirl/about).

`xdg-open` on Linux and `open` on macOS allows programms to be executed with the corresponding stored standard application. Finally, a mime type is assigned to an application.

My idea on UNIX systems is rather to assign a specific application to a use case, for example the application type `email-client` to the specific application `neomutt`. So Firefox can still be named Firefox. Or Firefox ESR. Think of it like the internal project name. The end user doesn't care what it's called. And the developer uses the project name.

[VyOS](https://vyos.io) is doing it right with their operating system ([CLI reference](https://docs.vyos.io/en/equuleus/cli.html)). I think that's one of the things Gnome does right too. I don't have to tell someone who has never touched Fedora where to find the contacts program. I don't have to call my contacts application `rogues-from-the-underdawn`. It's `contacts`, plain and simple.

Giving installation instructions would be so easy if we could just write *Install emacs by writing ~~`install emacs`~~ `please install emacs` in your terminal*. The same goes for command line flags and subcommands. A terminal-based workflow would be much more accessible to new users *and* power users.

I am aware that it is difficult to come up with elegant names for some POSIX commands. I am also aware that it is difficult when, for example, OpenBSD uses a different `list` (ls) than GNU `list`. But: It's just a thought and an experiment for me.

Nowadays, programs are named as they are named. `ls` is `ls` and not `list`. So, instead I need to add a layer of abstraction and wrap the commands into an alias and use it instead.

Below is a living list of aliases I have created so far. Feel free to drop me a line if you want to add something to the list.

| alias           | command                                           |
|-----------------|---------------------------------------------------|
| open            | `xdg-open`                                        |
| edit            | `$EDITOR`                                         |
| list            | `ls -1A`                                          |
| goto            | `cd`                                              |
| help            | `man`                                             |
| print           |                                                   |
| tutorial        |                                                   |
| unique          | `uniq`                                            |
| copy            |  `cp -r`                                          |
| move            |  `mv`                                             |
| reload          | `exec $SHELL -l`                                  |
| please          | `doas`, `sudo`                                    |
| commands        |                                                   |
| count           | `wc`                                              |
| install         | `pkg_add`                                         |
| uninstall       | `pkg_delete`                                      |
| installed       | `pkg_info -f \| grep '^@depend' \| cut -f 3 -d :` |
| update          | `syspatch && pkg_add -u`                          |
| week            | `date +%V`                                        |
| map             | `xargs -n1`                                       |
| play            | `amused`                                          |
| podcast         | `podboat`                                         |
| irc             | `catgirl`                                         |
| rss             | `newsboat`, `sfeed`,…                             |
| email           | `neomutt`                                         |
| encrypt/decrypt | `age`, `gnupg`,…                                  |
| archive/extract | *fucking `tar`… god I hate `tar` for this…*       |
| remove          | `rm -fr`                                          |
| calendar        | `cal`                                             |
| reminder        | `calendar`                                        |
| calculator      | `dc`                                              |
| compile         | `clang -ffucking-thousand-flags`                  |


