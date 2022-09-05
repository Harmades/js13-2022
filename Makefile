ROOT_DIR = $(shell pwd)
SRC = $(wildcard $(ROOT_DIR)/src/*.ts)
HTML = $(wildcard $(ROOT_DIR)/src/*.html)

.PHONY = run clean build

run: $(SRC) $(HTML) $(ROOT_DIR)/.install_done
	npm run start

build: $(SRC) $(HTML) $(ROOT_DIR)/.install_done
	npm run build

$(ROOT_DIR)/.install_done:
	npm install
	touch $@

clean:
	rm -rf dist
