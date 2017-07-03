# INTRODUCTION

A nifty book for travel photographers on the web. Best experienced on the iPad / Chrome.

Brought to you by web people and [Bubblin Superbooks](https://bubbl.in/about) - an online café of books.

## MOBILE FIRST

First of its kind, this manuscript (repo) renders into a responsive `mobile-first` book. The manuscript was generated robotically using `nodejs` and `bookiza` and has been outputted into plain HTML, CSS and JavaScript i.e. native elements of web. Live book (demo) is available on the url provided at the top.

Read a timeless English classic on your favorite browser and share the work online with your friends, family, classmates or just about anyone. For FREE! In fact help us spread the word by sharing this project generously.

## SUPPORT
Best experienced on 9" iPad but works nearly everywhere - iPhones, Android phones & tablets, Kindle Fire, Desktops, TVs. See [details](https://bubbl.in/support) for more information.

:point_right: Research suggests that books (both physical and electronic) are best experienced on 9" tablets.

We hear you Steve Jobs, we hear you still!

## THE MANUSCRIPT
This repo is the manuscript while the actual compiled book is hosted and rendered live on the writer's url at the top.


## RECOMMENDED DEVICE/BROWSER:

Apple iPad + Google Chrome. You can also do the following:

- Open the on iOS Safari (or your favorite browser). Start reading…
- Tap the `Share` button at the top of the screen.
- Tap `Add to Home Screen`… if you like that sort of a thing.


### HACK IT IN YOUR OWN STYLE

Feel free to clone this manuscript and play with it. You can modify its content, layout or make fresh artwork (imagery) of your own for it and republish. If you do make something please tell us about it. We love looking at interesting work from people and might even share it with our community!

How:

```
$ git clone <manuscript> && cd <manuscript>
$ npm install
$ bookiza server

```

Bookiza server will compile the manuscript and open the book on `localhost:4567`.

Read about [node](https://nodejs.org/en/), [bookiza](http://bookiza.io) and [bubblin](https://bubbl.in) to get started.

### PROJECT
This app was created using [bookiza](https://bookiza.io) -- a "book baking" tool.

The TREE of the manuscript looks somewhat like this:

```

PROJECT/
├── README.md
├── assets
│   ├── css
│   ├── images
│   └── scripts
├── cover
│   ├── back.jpg
│   ├── cover.psd
│   ├── front.jpg
│   ├── spine.jpg
│   └── spine.psd
├── license.txt
├── manuscript
│   ├── page-1
│   │   ├── body.html
│   │   └── style.css
│   ├── page-2
│   │   ├── body.html
│   │   └── style.css
│   ├── page-3
│   │   ├── body.html
│   │   └── style.css
│   ├── page-4
│   │   ├── body.html
│   │   └── style.css
│   ├── page-5
│   │   ├── body.html
│   │   └
│   ├──
│   │  
│   │  
│   ├──
│   │  
│   │  
│   ├── page-2N-1
│   │   ├── body.html
│   │   └── style.css
│   └── page-2N
│       ├── body.html
│       └── style.css
├── templates
│   ├── head.html
│   ├── style.css
│   ├── body.html
│   └── script.js
└── trash


```
## CREDITS:
This manuscript was licensed via [Gutenberg](http://gutenberg.org)

Please read license terms of other softwares/libraries and their respective owners who have contributed directly or indirectly into this project.

## CONTRIBUTION/FIXES

Feel free to report issues or submit fixes to help improve the code.

1. Fork it using `git`.
2. Create your feature branch (`git checkout -b my-new-page`)
3. Commit your changes (`git commit -am 'Added a page on (/topic)'`)
4. Push to the branch (`git push origin my-new-page`)
5. Create a new Pull Request
6. <a href = "mailto:marvin@bubbl.in">Contact me</a> if I/someone on my team doesn't respond within 24 hours. I get a lot of mail, so do not follow-up with a second mail before 24 hours.

## Licenses

Various! But, primarily:

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://www.mozilla.org/en-US/MPL/2.0/)