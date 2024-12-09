import admin from "firebase-admin";
import serviceAccount from "../../fir-ef23f-firebase-adminsdk-3u0vg-d46030c41e.json" with { type: "json" };

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "fir-ef23f.appspot.com", // Replace with your bucket name
});

const bucket = admin.storage().bucket();

export const uploadFile = async (localFilePath, destination) => {
  try {
    // Upload the file to Firebase Storage
    const [file] = await bucket.upload(localFilePath, {
      destination, // Specify the destination path in the bucket
      metadata: {
        cacheControl: "public, max-age=31536000", // Cache settings
      },
    });

    console.log(`File uploaded to ${destination}`);

    // Make the file publicly accessible
    await file.makePublic();

    // Construct the public URL
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${destination}`;
    return publicUrl;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw new Error("Could not upload the file");
  }
};
