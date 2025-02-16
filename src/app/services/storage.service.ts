import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

   // Set item in localStorage
   setItem(key: string, value: any): void {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
  }

  // Get item from localStorage
  getItem<T>(key: string): T | null {
    const jsonData = localStorage.getItem(key);
    try {
      return jsonData ? (JSON.parse(jsonData) as T) : null;
    } catch (error) {
      console.error(`Error parsing localStorage key "${key}":`, error);
      return null;
    }
    /*     const jsonData = localStorage.getItem(key);
    return jsonData ? JSON.parse(jsonData) as T : null; */
  }
  // Get multiple items from localStorage
  getItems(keys: string[]): { [key: string]: any } {
    const result: { [key: string]: any } = {};
    keys.forEach((key) => {
      result[key] = this.getItem(key);
    });
    return result;
  }
  // Remove all items from localStorage except for the specified keys
  clearWithExclusions(excludeKeys: string[]): void {
    const keysToKeep = new Set(excludeKeys);

    // Iterate through all keys in localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key && !keysToKeep.has(key)) {
        localStorage.removeItem(key);
        // Adjust index since the length of localStorage has changed
        i--;
      }
    }
  }
  // Remove item from localStorage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Clear all items from localStorage
  clear(): void {
    localStorage.clear();
  }
  compareDataByValues(oldData: any, newData: any): boolean {
    // Handle both null and undefined cases
    if (oldData === null || newData === null || oldData === undefined || newData === undefined) {
      return oldData !== newData;
    }
  
    if (Array.isArray(oldData) && Array.isArray(newData)) {
      if (oldData.length !== newData.length) {
        return true;
      }
      for (let i = 0; i < oldData.length; i++) {
        if (this.compareDataByValues(oldData[i], newData[i])) {
          return true;
        }
      }
    } else if (
      typeof oldData === "object" &&
      typeof newData === "object"
    ) {
      const oldKeys = Object.keys(oldData);
      const newKeys = Object.keys(newData);
  
      if (oldKeys.length !== newKeys.length) {
        return true;
      }
  
      for (const key of oldKeys) {
        if (
          !newKeys.includes(key) ||
          this.compareDataByValues(oldData[key], newData[key])
        ) {
          return true;
        }
      }
    } else {
      if (oldData !== newData) {
        return true;
      }
    }
  
    return false;
  }
}
