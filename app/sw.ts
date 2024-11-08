import { AUTHOR_AVATAR, Routes } from '@/app/lib/shared';
import imagePaths from '@/public/image-paths.json';
import { defaultCache } from '@serwist/next/worker';
import * as crypto from 'crypto';
import type { PrecacheEntry, SerwistGlobalConfig } from 'serwist';
import { Serwist } from 'serwist';

function hashStringSha256(inputString: string): string {
  // Create a new sha256 hash object
  const hash = crypto.createHash('sha256');

  // Update the hash with the input string
  hash.update(inputString);

  // Calculate the hash digest as a hexadecimal string
  const hashDigest = hash.digest('hex');
  console.log('hashDigest', hashDigest);

  return hashDigest;
}

// Example usage:
const longString =
  'This is a very long string that I want to hash to a shorter one.';
const hashedString = hashStringSha256(longString);
console.log(`The hashed string is: ${hashedString}`);

// This declares the value of `injectionPoint` to TypeScript.
// `injectionPoint` is the string that will be replaced by the
// actual precache manifest. By default, this string is set to
// `"self.__SW_MANIFEST"`.
declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

const urlsToCache = ['/', ...Object.values(Routes), AUTHOR_AVATAR].concat(
  imagePaths
);
const CACHE_NAME = `tilda-cache-v-${hashStringSha256(urlsToCache.join(', '))}`;

// Install a service worker
self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(response => {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

// Update a service worker
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache,
  fallbacks: {
    entries: [
      {
        url: Routes.Offline,
        matcher({ request }) {
          console.log('request', request);
          return request.destination === 'document';
        },
      },
    ],
  },
});
console.log(
  `cache name: ${CACHE_NAME}\n`,
  'serwist.getPrecachedUrls()',
  serwist.getPrecachedUrls()
);

serwist.addEventListeners();
