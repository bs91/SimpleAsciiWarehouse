Discount Ascii Warehouse
====

This is an ecommerce site, where you can buy all sorts of ascii faces like `(ノ・∀・)ノ` and `¯_(ツ)_/¯`, in a wide variety of font sizes. The homepage should display a list of products for people to browse.

Please read the instructions and FAQ below before beginning.

Features
----

- products are displayed in a grid.
# To achieve this requirement I decided to go with angular-material. When choosing this the trade offs I considered where developing this where for 3 options, design it myself, twitter bootstrap, angular-material. Doing it myself would allow me to include only exactly what I thought was necessary but would be much more of a time investment (don't reinvent the wheel). I ended up going with angular-material over twitter bootstrap because twitter bootstrap would involve much more configuration out of the box.

- give the user an option to sort the products in ascending order. Can sort by "size", "price" or "id".
# I decided to solve this by making a ProductSortComponent, this allows for reusability throughout the system, and allows the decisions to be passed into it from a smarter products component.  

- each product has :
  - a "size" field, which is the font-size (in pixels). We should display the faces in their correct size, to give customers a realistic impression of what they're buying.
  # I decided to leave this logic completely to the API and render it with angular ng-style in a template. While I could have loaded it in the controller first if there were heavy processing that needed to be done, I decided with the specifications all that should be necessary is to render it as is.

  - a "price" field, in cents. This should be formatted as dollars like `$3.51`.
  # I made a custom angular filter to handle this price change. That way I wasn't mudling a controller with a data transformation and allowing reusability if I needed this function elsewhere.

  - a "date" field, which is the date the product was added to the catalog. Dates should be displayed in relative time (eg. "3 days ago") unless they are older than 1 week, in which case the full date should be displayed.
  # given the requirement to switch up how the date was displayed I could have either built my own custom directive to handle the logic of changing but with moment.js I knew I would be able to provide most of this functionality. This mean a filter provided better reuse since most of the heavy lifting is being done by moment. I did however decide to make an interface to describe what I wanted out of the external moment dependency. Then make an implementation of the base interface that uses moment.js. This way if it were ever needed to change out away from moment you simply make another implementation of the base interface with the new dependency and change where I pass in the implementation in the date filter for a very easy change. While this added a little more development time it is a good way of implementing an easily changeable dependency into the system. Which is a demonstrationg of the SOLID principles I spoke about.

- the product grid should automatically load more items as you scroll down.
# as there is no physical thing happening here I decided to make an autoLoad directive which allows you to apply an attribute to a container then call a given function.

- our product database is under high load due to growing demand for ascii, so please display an animated "loading..." message while the user waits.
# this was a good use of another component, allowing me to reuset his code elsewhere keeping it to a single responsiblity.

- to improve the user's experience, we should always pre-emptively fetch the next batch of results in advance, making use of idle-time.  But they still should not be displayed until the user has scrolled to the bottom of the product grid.
# for this I decided to split out two arrays one for buffered, and one for currently visible as well as using ng-repeat's limit to to incrementally reveal more as you scroll down. With the two arrays I also broke it out to one function that actually calls the products service to get new data from the API and another function that handles the showing of data, as well as calling the first function every time it is called so that we are always trying to get a load of data ahead of time. A trade off I made here was going with some of the current given solutions are to heavy and dont fit in without a good amount of configuring. Implementing this solution was faster and kept to using angular's built in services. I would like to note that a downfall with the current implementation is that if the products were to be massive ng-repeat isn't cleaning up the dom and at some point it would become a major negative. The API doesn't allow for this much data so I didn't spend time to solve for this case but what you would need is to remove some of the already loaded data from the dom once you load so many, and then reload them when you scroll up instead of the current where we just load as we scroll down.

- when the user reaches the end and there are no more products to display, show the message "~ end of catalogue ~".
# when everything is loaded we just set a variable that is watched to true which shows the message.

### Ads features

- after every 20 products we need to insert an advertisement from one of our sponsors. Use the same markup as the advertisement in the header, but make sure the `?r` query param is randomly generated each time an ad is displayed.
# I used ng-repeat-start and ng-repeat-end with an ng-if checking for the 20th iteration of the index to ensure a new Ad component is provided every 20 items. 

- Ads should be randomly selected, but a user must never see the same ad twice in a row.
# I broke this out to it's own AdLink service which is a singleton that holds a reference to the previously generated number. Which allows me to regenerate another random if it tries to show a duplicate.


# Some other things that I could have done here are proving more in depth tests, I just wanted to show the basic ability to test so I didn't attempt for anything like full coverage or e2e and integration testing. I also used angular 1.x because I have more experience with this and thought using it with a variety of other technologies that don't neccessarily work right out of the box showed a greater understanding of the technologies. A final thing I want to explain is earlier I brought up changing the original given index to not use the script tag and instead encapsulate it in a header-component which allows for root component configuration if needed as well as allowing easier additions to the header within the angular context. The trade-off here is that the script tag would have given additional speed with less security due to it directly giving you the resource in place but I believe the trade off in speed for customizaton within the framework is a decent enough trade off. I also went ahead and allowed the already loaded data to load as fast as possible instead of making a simulated load. The trade off is that with a simulated load we would be able to possibly by more time for the next load to finish at a shorter duration and give more visual feedback that new data is coming in. However, I believe in the current case loading as fast as possible is more advantageous because users are already accustom to fast loads from places like facebook. Also, with the current project I think if you are trying to get to a certain product getting there as fast as possible is more important than a consistant faster loading time but more time overall. One last thing, I would like to note that I chose to include unit test files with their respective file because this adds for easier finding of unit test as documentation and easier rememberance of applying to both whenever a change is made.

Products API
----

- The basic query looks like this: `/api/products`
- The response format is newline-delimited JSON.
- To get a larger results set use the `limit` parameter, eg: `/api/products?limit=100`
- To paginate results use the `skip` parameter, eg: `/api/products?limit=15&skip=30` (returns 15 results starting from the 30th).
- To sort results use the `sort` parameter, eg: `/api/products?sort=price`. Valid sort values are `price`, `size` and `id`.

FAQ
----

### How do I start the app?

Start with `npm start`. The server will look for any files you add to the `static/` directory.