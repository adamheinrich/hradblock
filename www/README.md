# wagthedog.adamh.cz

Source code for website [wagthedog.adamh.cz](https://wagthedog.adamh.cz). I've
used some great open source projects which was the main reason to make its
source public.

## Usage

Just run

    make serve

and head to [localhost:4000](http://localhost:4000) to see the site in action.

To build everything and push to Amazon S3, run

    make all

This will gzip and copy contents of the _site directory.

## Based on

 * [Jekyll](http://jekyllrb.com/) - the static site generator
 * [Poole](http://getpoole.com/) - butler for Jekyll. Great thing to start with!
 * [Deploy script](http://www.savjee.be/2014/03/Jekyll-to-S3-deploy-script-with-gzip/)
   by Xavier Decuyper
 * [Cookie Consent](https://github.com/insites/cookieconsent) by Silktide Ltd

Thank you!

## License
See the [LICENSE.md](LICENSE.md) file.
