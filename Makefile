PWD := $(shell pwd)
PATH := ${PWD}/node_modules/.bin:$(PATH)
.SILENT: clean install build release watch
all: install build watch

clean:
	/bin/rm -rf node_modules

install:
	[ ! -d node_modules ] && yarn && exit

build:
	stylus src/styles -o theme.css
	css2userstyle --no-userscript theme.css
	/bin/rm -f theme.css

release:
	stylus src/styles -o theme.css && \
		postcss theme.css --use autoprefixer --replace --no-map && \
		css2userstyle --no-userscript theme.css && \
		/bin/rm -f theme.css

watch:
	chokidar src/styles -c 'make -s build'
