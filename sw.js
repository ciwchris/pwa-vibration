importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "95bd422e639a18d53e4c3aba5246fd12"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "d9aa5c711750da7399385213080a69c3"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "9710eec5520e6a854eb617b1973fd4d2"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "015d40fa07f2e65b413bc0bfc10c7b94"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "db59563ac1498a9ebf1abc2f112feb0d"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "3c8334c9fba35e9711c296c3044bc324"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "d30a1d9ea204bef0c52bf32364e2a890"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "296662015653c60fdcf9032f7f23fabe"
  },
  {
    "url": "index.html",
    "revision": "348c2de6452a14250812b6434a56b8d1"
  },
  {
    "url": "manifest.json",
    "revision": "55e1172179f2ecb6dfb662f15ed9f44f"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
