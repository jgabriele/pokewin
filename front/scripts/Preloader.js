import Event from 'events';
import Utils from './Utils';

const EVENTS = {
  PROGRESS: 'progress'
}

function Preloader(entries) {}

Preloader.prototype = Object.create(Event.prototype);

// Entries is an array of objects with .name and .url
Preloader.prototype.fetchAll = function(entries) {
  const data = {};
  let progress = 0;
  let index = 0;
  const dataPromises = entries
    .map((entry) => {
      let promise;

      if (entry.type === 'image') {
        promise = this.preloadImage(entry.url);
      } else {
        promise = _createGetAjaxPromise(entry.url);
      }

      return promise.then((json) => {
          // Send progress event
          progress = 100/entries.length * ++index;
          this.emit(EVENTS.PROGRESS, progress);

          return [entry.name, json];
        });
    });

  return Promise.all(dataPromises);
}

Preloader.prototype.preloadImage = function(imageUrl) {
  return new Promise((resolve, reject) => {
    const img = Utils.DOMElementFromString('<img class="is-hidden" style="position:absolute;">');
    img.src = imageUrl;
    document.body.appendChild(img);

    img.addEventListener('load', resolve);
  });
}

// TODO move in Utils
function _createGetAjaxPromise(url) {
  return new Promise ((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(xhr.statusText);
        }
      }
    };

    xhr.onerror = function (e) {
      reject(xhr.statusText);
    };

    xhr.send();
  });
}

Preloader.EVENTS = EVENTS; // TODO use export xxx EVENTS?

export default Preloader;

// Fetches JSON data and update progress status