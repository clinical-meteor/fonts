## clinical:fonts

Common fonts for building healthcare applications - barcodes, fontawesome icons, and opensans (a helvetica substitute).  All fonts should be packaged and available locally without requiring links to external CDN resources, meaning they should work offline and on first startup after installing via an app store.  

==================================
#### Installation

First, install the fonts-helveticas package from the command line, like so:

````
meteor add clinical:fonts
````

==================================
#### OpenSans - a Helvetica Substitute

Unfortunately, [Helvetica](http://www.hustwit.com/category/helvetica/) is kept as intellectual property and therefore must be licensed if it is to be used on websites.  So we provide OpenSans and OpenSansLight, both of which are Helvetica substitutes.  

````html
<span class="opensans">The quick brown fox jumped over the lazy dog.</span>
<span class="opensans-light">The quick brown fox jumped over the lazy dog.</span>
````

The ``helveticas`` class will use Helvetica if it's present on the system, and then fall back to OpenSans if it is not.  
````html
<span class="helvetica">The quick brown fox jumped over the lazy dog.</span>
````

==================================
#### Barcodes

Provides the 3 of 9 Barcode font.  Simply add the ``barcode`` class.  If there are any problems with scanners picking it up, be sure to add asterisk to the beginning of end.   

````html
<div>This is a barcode: <span class="barcode">*123-45-6789*</span></div>
````

A particularly good pattern is to use the ``_id`` field as a barcode, like so:
````html
<span class="barcode">{{_id}}</span>
````

==================================
#### Icon Fonts

Support for font-awesome icons follows the typical usage of the ``<i>`` element with ``fa`` classes.

````html
<i class="fa fa-check"></i>
````

Find a complete list of icons at the Font Awesome website:  
[Font Awesome](https://fortawesome.github.io/Font-Awesome/)




==================================
#### Licensing

MIT and public-domain as far as I'm aware.  


==================================
#### Research  

https://sansforgetica.rmit/  
https://www.dyslexiefont.com/en/typeface/  
https://www.npmjs.com/package/react-icons  

