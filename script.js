(async function(){
  const result = {};

  // ----- Service Worker -----
  try {
    result.serviceWorker = typeof navigator.serviceWorker !== 'undefined';
  } catch(e) { result.serviceWorker = 'error'; }

  // ----- WebGL -----
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') || canvas.getContext('webgl2');
    result.webgl = !!gl;
  } catch(e) { result.webgl = 'error'; }

  // ----- WebRTC (getUserMedia) -----
  try {
    result.webRTC = typeof navigator.mediaDevices?.getUserMedia === 'function';
  } catch(e) { result.webRTC = 'error'; }

  // ----- IndexedDB -----
  try {
    result.indexedDB = typeof indexedDB !== 'undefined';
  } catch(e) { result.indexedDB = 'error'; }

  // ----- SharedArrayBuffer -----
  try {
    result.sharedArrayBuffer = typeof SharedArrayBuffer !== 'undefined';
  } catch(e) { result.sharedArrayBuffer = 'error'; }

  // ----- WebAssembly -----
  try {
    result.webAssembly = typeof WebAssembly !== 'undefined';
  } catch(e) { result.webAssembly = 'error'; }

  // ----- Push API -----
  try {
    result.pushAPI = typeof PushManager !== 'undefined';
  } catch(e) { result.pushAPI = 'error'; }

  // ----- Notification API -----
  try {
    result.notifications = typeof Notification !== 'undefined';
  } catch(e) { result.notifications = 'error'; }

  // ----- Web Audio API -----
  try {
    result.webAudio = typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined';
  } catch(e) { result.webAudio = 'error'; }

  // ----- Payment Request API -----
  try {
    result.paymentRequest = typeof PaymentRequest !== 'undefined';
  } catch(e) { result.paymentRequest = 'error'; }

  // ----- Performance API (JIT / timing) -----
  try {
    result.performanceNow = (typeof performance !== 'undefined' && typeof performance.now === 'function') ? performance.now().toString().length : -1;
  } catch(e) { result.performanceNow = 'error'; }

  // ----- Navigator.clipboard -----
  try {
    result.clipboard = typeof navigator.clipboard !== 'undefined';
  } catch(e) { result.clipboard = 'error'; }

  // ----- Navigator.storage.persist -----
  try {
    result.storagePersist = typeof navigator.storage?.persist === 'function';
  } catch(e) { result.storagePersist = 'error'; }

  // ----- CSS Houdini (paintWorklet) -----
  try {
    result.paintWorklet = typeof CSS?.paintWorklet !== 'undefined';
  } catch(e) { result.paintWorklet = 'error'; }

  // ----- Web NFC -----
  try {
    result.nfc = typeof navigator.nfc !== 'undefined';
  } catch(e) { result.nfc = 'error'; }

  // ----- Web Bluetooth -----
  try {
    result.bluetooth = typeof navigator.bluetooth !== 'undefined';
  } catch(e) { result.bluetooth = 'error'; }

  // ----- Web Serial API -----
  try {
    result.serial = typeof navigator.serial !== 'undefined';
  } catch(e) { result.serial = 'error'; }

  // ----- Web MIDI API -----
  try {
    result.midi = typeof navigator.requestMIDIAccess === 'function';
  } catch(e) { result.midi = 'error'; }

  // ----- WebXR -----
  try {
    result.webXR = typeof navigator.xr !== 'undefined';
  } catch(e) { result.webXR = 'error'; }

  // ----- Render result -----
  const output = document.getElementById('output');
  output.textContent = JSON.stringify(result, null, 2);
  console.log('API Test Result:', result);

  window.LOCKDOWN_TEST_RESULT = result;
})();
