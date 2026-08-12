import { db, isFirebaseConfigured } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import {
  initialUserProfile,
  defaultScheduleTasks,
  initialMockScores,
  initialVocabList,
  initialResources,
  initialChecklists
} from '../data/initialData';

const LOCAL_STORAGE_KEY = 'ielts_study_tracker_v2_data';
const FIRESTORE_DOC_ID = 'user_data_default';

/**
 * Loads entire app state either from Firestore or localStorage fallback
 */
export async function loadAppState() {
  let loadedData = null;

  // 1. Try Firestore if configured
  if (isFirebaseConfigured && db) {
    try {
      const docRef = doc(db, 'ielts_trackers', FIRESTORE_DOC_ID);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        loadedData = docSnap.data();
      }
    } catch (err) {
      console.warn('Firestore fetch failed, using local storage:', err);
    }
  }

  // 2. Fall back to LocalStorage if Firestore didn't return data
  if (!loadedData) {
    try {
      const localRaw = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (localRaw) {
        loadedData = JSON.parse(localRaw);
      }
    } catch (err) {
      console.error('LocalStorage parse error:', err);
    }
  }

  // 3. Return loaded data merged with defaults
  return {
    userProfile: loadedData?.userProfile || initialUserProfile,
    scheduleTasks: loadedData?.scheduleTasks || defaultScheduleTasks,
    mockScores: loadedData?.mockScores || initialMockScores,
    vocabList: loadedData?.vocabList || initialVocabList,
    resources: loadedData?.resources || initialResources,
    checklists: loadedData?.checklists || initialChecklists,
    syncMode: isFirebaseConfigured ? 'cloud' : 'local'
  };
}

/**
 * Saves full state to LocalStorage and Firestore (if available)
 */
export async function saveAppState(fullState) {
  const payload = {
    userProfile: fullState.userProfile,
    scheduleTasks: fullState.scheduleTasks,
    mockScores: fullState.mockScores,
    vocabList: fullState.vocabList,
    resources: fullState.resources,
    checklists: fullState.checklists,
    lastSaved: new Date().toISOString()
  };

  // Always save locally for instant responsiveness & offline resilience
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(payload));
  } catch (err) {
    console.error('LocalStorage save error:', err);
  }

  // Save to Firestore asynchronously if connected
  if (isFirebaseConfigured && db) {
    try {
      const docRef = doc(db, 'ielts_trackers', FIRESTORE_DOC_ID);
      await setDoc(docRef, payload, { merge: true });
    } catch (err) {
      console.warn('Firestore save notice:', err);
    }
  }
}

/**
 * Export state as JSON file download
 */
export function exportAppStateJSON(state) {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `IELTS_7_5_Study_Data_${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}
