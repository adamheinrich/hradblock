BUCKET = s3://hradblock.adamh.cz/
SITE_DIR = _site

all: build clear upload

serve:
	jekyll serve --watch

build:
	jekyll build

	# gzip HTML, JS and CSS
	find $(SITE_DIR) \( -iname '*.html' -o -iname '*.css' -o -iname '*.js' \) \
	-exec gzip -9 -n {} \; -exec mv {}.gz {} \;

clean:
	rm -rf $(SITE_DIR)

clear:
	rm -rf $(SITE_DIR)/Makefile
	rm -rf $(SITE_DIR)/README.md
	rm -rf $(SITE_DIR)/LICENSE.md


upload:
	# Sync CSS and JS (CacheL expire in 1 week)
	s3cmd sync --exclude '*.*' --include '*.css' \
	--no-mime-magic \
	--add-header='Content-Type: text/css' \
	--add-header='Cache-Control: max-age=604800' \
	--add-header='Content-Encoding: gzip' $(SITE_DIR)/ $(BUCKET)

	s3cmd sync --exclude '*.*' --include '*.js' \
	--no-mime-magic \
	--add-header='Content-Type: application/javascript' \
	--add-header='Cache-Control: max-age=604800' \
	--add-header='Content-Encoding: gzip' $(SITE_DIR)/ $(BUCKET)

	# Sync media files (Cache: expire in 10 weeks)
	s3cmd sync --exclude '*.*' --include '*.png' --include '*.jpg' \
	--no-mime-magic \
	--include '*.ico' --add-header='Expires: Sat, 20 Nov 2020 18:46:39 GMT' \
	--add-header='Cache-Control: max-age=6048000' $(SITE_DIR)/ $(BUCKET)

	# Sync html files (Cache: 2 hours)
	s3cmd sync --exclude '*.*' --include '*.html' \
	--no-mime-magic \
	--add-header='Content-Type: text/html' \
	--add-header='Cache-Control: max-age=7200, must-revalidate' \
	--add-header='Content-Encoding: gzip' $(SITE_DIR)/ $(BUCKET)

	# Sync everything else
	s3cmd sync --no-mime-magic --delete-removed $(SITE_DIR)/ $(BUCKET)
