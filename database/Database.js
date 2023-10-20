import * as SQLite from 'expo-sqlite';
import { Place } from '../models/Place';

const database = SQLite.openDatabase('places.db');

export function init() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((transaction) => {
      transaction.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY NOT NULL,
            title TEXT NOT NULL,
            imageUri TEXT NOT NULL,
            latitude REAL NOT NULL,
            longitude REAL NOT NULL
        )`,
        [], // arguments
        () => resolve(), // success callback
        (_, error) => reject(error) // error callback
      );
    });
  });

  return promise;
}

export function fetchPlaces() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((transaction) => {
      transaction.executeSql(
        `SELECT * FROM places`,
        [],
        (_, result) => {
          const places = [];

          for (const place of result.rows._array) {
            places.push(
              new Place(place.id, place.title, place.imageUri, {
                latitude: place.latitude,
                longitude: place.longitude
              })
            );
          }

          resolve(places);
        },
        (_, error) => reject(error)
      );
    });
  });

  return promise;
}

export function insertPlace(place) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((transaction) => {
      transaction.executeSql(
        `INSERT INTO places (title, imageUri, latitude, longitude) VALUES (?, ?, ?, ?)`,
        [
          place.title,
          place.imageUri,
          place.location.latitude,
          place.location.longitude
        ],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });

  return promise;
}

export function fetchPlaceDetails(placeId) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((transaction) => {
      transaction.executeSql(
        `SELECT * FROM places WHERE id = ?`,
        [placeId],
        (_, result) => {
          if (result.rows.length === 0) {
            resolve(null);
          } else {
            const place = result.rows.item(0);

            resolve(
              new Place(place.id, place.title, place.imageUri, {
                latitude: place.latitude,
                longitude: place.longitude
              })
            );
          }
        },
        (_, error) => reject(error)
      );
    });
  });
  return promise;
}
