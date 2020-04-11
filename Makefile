PWD := $(shell pwd)
PATH := ${PWD}/node_modules/.bin:$(PATH)
.ONESHELL: install
.SILENT: install build release watch
all: install build watch

install:
	[ ! -f yarn.lock ] || [ -d node_modules ] && yarn && exit
	[ -f yarn.lock ] && [ -d node_modules ] && echo 'Already installed' && exit

clean:
	rm -rf node_modules yarn.lock

build:
	stylus src/styles -o theme.css
	css2userstyle --no-userscript theme.css
	rm -f theme.css

release:
	stylus src/styles -o theme.css && \
		postcss theme.css --use autoprefixer --replace --no-map && \
		css2userstyle --no-userscript theme.css && \
		rm -f theme.css

watch:
	chokidar src/styles -c 'make -s build'
