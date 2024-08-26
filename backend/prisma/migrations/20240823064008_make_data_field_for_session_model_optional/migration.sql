-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sid" TEXT NOT NULL,
    "data" TEXT,
    "expiresAt" DATETIME NOT NULL
);
INSERT INTO "new_Session" ("data", "expiresAt", "id", "sid") SELECT "data", "expiresAt", "id", "sid" FROM "Session";
DROP TABLE "Session";
ALTER TABLE "new_Session" RENAME TO "Session";
CREATE UNIQUE INDEX "Session_sid_key" ON "Session"("sid");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
