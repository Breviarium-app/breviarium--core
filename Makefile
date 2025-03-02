current-dir := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
SHELL = /bin/sh

help: ## show make targets
	@awk 'BEGIN {FS = ":.*?## "} /[a-zA-Z_-]+:.*?## / {sub("\\\\n",sprintf("\n%22c"," "), $$2);printf " \033[36m%-20s\033[0m  %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## install deps
	@npm i

run: ## build package
	@npm run build

build: ## build to dist folder
	@npm run build

test: ## execute unit tests
	@npm run test

test-coverage: ## execute test with coverage
	@npm run test:coverage
