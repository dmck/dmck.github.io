---
layout: project
siteTitle: This project uses Middlemanapp...
title: mck.legal
tryHere: http://mck.legal
mainImage: images/mcklegal-main
altText: Screenshot of website for mck.legal
resource: true
categories: projects
---
The mck.legal website was my initial experiment with static site generation using [Middlemanapp](https://middlemanapp.com/). Middlemanapp is similar to Jekyll and a comparison is available: <http://www.sitepoint.com/static-blogging-g-face-middleman-vs-jekyll/>

The site focuses on being light-weight and responsive. The left-menu is off-canvas on display widths less than 768px, and automatically opens on larger displays. At the same breakpoint, the main call-to-action button switches to a phone number so that mobile users can tap-to-call.

<picture>
	<source media="(min-width: 640px)" srcset="images/mcklegal-mobile-medium_1x.jpg 1x, images/mcklegal-mobile-medium_2x.jpg 2x">
	<source media="(min-width: 320px)" srcset="images/mcklegal-mobile-small_1x.jpg 1x, images/mcklegal-mobile-small_2x.jpg 2x">
	<img src="images/mcklegal-mobile-small_1x.jpg" alt="Screenshot of search page with mouse hovering video.">
</picture>

The site also experiments with typography by using legible font-sizes, and using columns to keep line-widths within 50-60 characters (as necessary on larger displays).

<picture>
	<source media="(min-width: 640px)" srcset="images/mcklegal-wide-medium_1x.jpg 1x, images/mcklegal-wide-medium_2x.jpg 2x">
	<source media="(min-width: 320px)" srcset="images/mcklegal-wide-small_1x.jpg 1x, images/mcklegal-wide-small_2x.jpg 2x">
	<img src="images/mcklegal-wide-small_1x.jpg" alt="Screenshot of search page with mouse hovering video.">
</picture>

To display information well on mobile and desktop displays, the Contact page uses a responsive table as explained: <https://techblog.livingsocial.com/blog/2015/04/06/responsive-tables-in-pure-css/>

For search engine optimization ("SEO"), the site contains in-line Microdata for the Schema Attorney and other relevant HTML5 tags. For more informations see: <http://schema.org/>
