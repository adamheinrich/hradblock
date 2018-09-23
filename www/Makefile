SITE_DIR = _site

all: build

serve:
	jekyll serve --watch

build:
	jekyll build
clean:
	rm -rf $(SITE_DIR)

upload: build
	./deploy.sh $(SITE_DIR)/* \
	            --exclude Makefile \
	            --exclude *.md \
	            --exclude *.sh
