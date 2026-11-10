import { randomBytes } from "node:crypto";

console.log("ADMIN_PASSWORD=" + randomBytes(24).toString("base64url"));
console.log("ADMIN_SESSION_SECRET=" + randomBytes(48).toString("base64url"));
console.log("Copiez ces valeurs dans .env.local et dans les variables du serveur publié.");
