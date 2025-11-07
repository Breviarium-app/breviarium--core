current-dir := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
SHELL = /bin/sh

help: ## show make targets
	@awk 'BEGIN {FS = ":.*?## "} /[a-zA-Z_-]+:.*?## / {sub("\\\\n",sprintf("\n%22c"," "), $$2);printf " \033[36m%-20s\033[0m  %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## install deps
	@pnpm i

run: ## build package
	@pnpm run build

build: ## build to dist folder
	@pnpm run build

test: ## execute unit tests
	@pnpm run test

test-coverage: ## execute test with coverage
	@pnpm run test:coverage

process-and-compress: ## process database and compress texts
	./process-and-compress.sh