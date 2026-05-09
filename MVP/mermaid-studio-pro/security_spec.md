# Security Specification: Mermaid Studio Pro

## 1. Data Invariants
- A file must have a valid `userId` matching the authenticated user.
- A file name must be a string between 1-255 characters.
- File content size is limited to 1MB per document.
- Users can only read, update, or delete their own files.

## 2. The "Dirty Dozen" Payloads (Denial Proofs)
1.  **Identity Spoofing**: Attempt to create a file with `userId: "malicious_user_id"`.
2.  **Shadow Update**: Attempt to update another user's file.
3.  **ID Poisoning**: Attempt to use a 2KB string as a document ID.
4.  **Resource Exhaustion**: Attempt to write a 5MB string into the `content` field.
5.  **PII Leak**: Attempt to list all files without a `userId` filter.
6.  **State Hijack**: Attempt to clear the `updatedAt` server timestamp.
7.  **Format Injection**: Attempt to set `name` to an object instead of a string.
8.  **Unauthenticated Write**: Attempt to write to `files/` without being logged in.
9.  **Email Spoofing**: Attempt to access data via an unverified email (if email used).
10. **Ghost Fields**: Attempt to add `isAdmin: true` to a user document.
11. **Relational Break**: Attempt to delete a file that doesn't exist (well, just general delete).
12. **Batch Overload**: Attempt a massive batch write to bypass per-doc limits.

## 3. Test Runner (Draft)
The `firestore.rules.test.ts` would verify these scenarios using the Firebase Emulators.
