# OpenBrackets-website

This is the OpenBrackets website, written with Jekyll and Bootstrap.
It's deployed with GitHub Pages.
The domain hosting is done with AWS Route 53, and the SSL certificate is managed by the AWS Certificate Manager.

The OpenBrackets website can be found [here](https://openbrackets.us/).

## Contributing
A basic understanding of how HTML works is assumed.

If you want to make any significant changes, you should probably learn Jekyll first.
Once you know Jekyll, feel free to make major edits or even overhaul the entire website if you wish.

If you're just making maintenance updates, here's what you need to know:

### Adding/removing the register banner on the home page
This banner is near the top of the [index.html](/index.html) page.
It should look something like this, possibly uncommented.
```html
<!--<div class="alert alert-warning">The OpenBrackets Spring Semester starts on January 31<sup>st</sup>. <a-->
<!--        href="https://docs.google.com/forms/d/e/1FAIpQLSfsZ7P49lTwvGomensYouK7Y2GLLHZK1dB2Hz4tZR8XFG2T_g/viewform"-->
<!--        target="_blank">Click here</a> to register your free spot today (spots are limited, so hurry)!</div>-->
```
Comment out/uncomment the banner to hide/show it and update the text as necessary.
You may also need to change the link to the signup form.

### Updating the navigation bar and adding to "Past Semesters"
The HTML code for the navigation bar is in [_layouts/default.html](/_layouts/default.html).
You should be able to look through all the instances where the old semester is reference and replace it with the new semester if applicable.
Note that **not all** references to the past semester should be updated, because there's also a Past Semesters dropdown.

Make sure to add the most recent completed semester to the Past Semesters dropdown.
Follow the same format that the existing Past Semesters items have.

### Deploying
Every pushed Git commit will automatically update the website, because it's run on GitHub Pages.
It may take a few minutes for your changes to be reflected.

## Running locally

### Setup
Set up Jekyll as instructed in its [docs](https://jekyllrb.com/docs/installation/).
You should get both `bundler` and `jekyll` installed.
Then run `bundle` in the project directory to install the required gems for the project.

### Running
Run `bundle exec jekyll serve` to start a local instance.
