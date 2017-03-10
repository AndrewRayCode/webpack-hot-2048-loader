# Webpack Hot 2048 Loader

Shows [2048](https://gabrielecirulli.github.io/2048/) in an iFrame during hot reload rebuilding to keep your easily distracted mind focused on your project.

![Screencap showing hot reloading 2048 iFrame appearing and disappearing](https://raw.githubusercontent.com/DelvarWorld/webpack-hot-2048-loader/master/webpack-hot-2048-downsize.gif)

## Requirements

This project **requires** [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) with **at least version 2.12.0** (see [this PR](https://github.com/glenjamin/webpack-hot-middleware/pull/112)). It **won't work** with the vanilla Webpack dev server.

## How To Use

```sh
npm install --save-dev webpack-hot-2048-loader
```

In your development Webpack config file, find your entry point where you include [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware). It will look something like:

```javascript
entry: {
    'main': [
        'webpack-hot-middleware/client?path=http://' + host + ':' + port + '/__webpack_hmr',
        ...
```

Then **add the webpack-hot-2048-loader before** the `webpack-hot-middleware` loader:

```javascript
entry: {
    'main': [
        'webpack-hot-2048!webpack-hot-middleware/client?path=http://' + host + ':' + port + '/__webpack_hmr',
        ...
```

Then restart your development server. That's it!

## Configuring

You can change the website it loads with:

```javascript
'webpack-hot-2048?website=http://blog.andrewray.me!...'
```

## FAQ

### Really?

Recently I've been thinking a lot about distraction. One of my projects takes up to 15 seconds to hot reload. 15 isn't a lot of seconds in general, especially for code compiling, but it's a lifetime for the brain to get distracted. Often I'll tab away to something else, completely forget my code is compiling, then lose the next 10 minutes to Twitter or [cat derping](http://cats.andrewray.me). This is an experiment to see if keeping distracting toys in the same tab as the development application can help manage distractions.

### Why Does This Require `webpack-hot-middleware`?

I wrote this to fit only my exact needs. And working with Webpack is sometimes convoluted and undocumented, so making this more generic is harder.

### I Get Lot of Junk Logs in the Console From the 2048 iFrame

Yeah

## Follow Me and/or Give Me Bitcoin

**Twitter**
@[andrewray](https://twitter.com/andrewray)

**Bitcoin**
`19MZGbDFT3NZcjoUTJL6wNMxnQTMpphiEq`

![My coinbase address if you want to support my wretched lifestyle](https://raw.githubusercontent.com/DelvarWorld/webpack-hot-2048-loader/master/my-bitcoin-address.png)
