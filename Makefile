install:
	npm ci

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

.PHONY: test
