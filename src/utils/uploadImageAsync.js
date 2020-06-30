import firebase from '../firebase';

// Upload image into firebase storage
const uploadImageAsync = async (storagePath, imageUri, fileName) => {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', imageUri, true);
    xhr.send(null);
  });

  const path = `${storagePath}/${new Date().getTime()}_${fileName}`;

  const ref = firebase.storage().ref(path);
  const snapshot = await ref.put(blob);

  return await snapshot.ref.getDownloadURL();
};

export default uploadImageAsync;
