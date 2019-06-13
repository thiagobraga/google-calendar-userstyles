PWD := $(shell pwd)
PATH := ${PWD}/node_modules/.bin:$(PATH)
.ONESHELL: install
.SILENT: install build release watch
all: install build watch

install:
	[ ! -f package-lock.json ] && npm i && exit
	[ -f package-lock.json ] && [ ! -d node_modules ] && npm ci && exit
	[ -f package-lock.json ] && [ -d node_modules ] && echo 'Already installed' && exit

build:
	stylus src/stylus -o theme.css
	css2userstyle --no-userscript theme.css
	rm theme.css

release:
	stylus -c src/stylus -o google-calendar.css
	postcss google-calendar.css --use autoprefixer cssnano --replace --no-map
	css2userstyle --no-userscript google-calendar.css
	rm google-calendar.css

watch:
	chokidar src/stylus -c 'make -s build'
