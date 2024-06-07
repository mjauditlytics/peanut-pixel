# Configuration

## PROD MODE

```
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

## TEST MODE

```
  rules_version = '2';

  service cloud.firestore {
    match /databases/{database}/documents {
      match /{document=**} {
        allow read, write: if
            request.time < timestamp.date(2024, 7, 7);
      }
    }
  }
```

## current set :
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /messages/{message} {
      allow read, write: if true;
    }
 		match /users/{userId} {
      // Allow the user to read and write their own data
      allow read, write: if request.auth != null && request.auth.uid == userId;

      // Allow the creation of a new user document if it doesn't exist
      allow create: if request.auth != null && ( userId == request.auth.uid || !exists(/databases/$(database)/documents/users/$(request.auth.uid)));
    }	
    // Allow only authenticated content owners access
    match /todos/{userId}/active/{documents=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId
    }
    
    match /auditGroups/{userId}/{documents=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId
    }
  }
}