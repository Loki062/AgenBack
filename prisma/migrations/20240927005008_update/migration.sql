-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Appointments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "inital_date" TEXT NOT NULL,
    "final_Date" TEXT NOT NULL,
    "room" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Appointments" ("created_at", "final_Date", "id", "inital_date", "name", "room") SELECT "created_at", "final_Date", "id", "inital_date", "name", "room" FROM "Appointments";
DROP TABLE "Appointments";
ALTER TABLE "new_Appointments" RENAME TO "Appointments";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
