import fs from "node:fs";
import { execSync } from "node:child_process";

const password = "correct-horse-battery";

export function loadTimeout(path) {
  const cfg = JSON.parse(fs.readFileSync(path, "utf8"));
  return cfg.settings.timeout * 1000;
}

export function findUser(db, name) {
  return db.query("SELECT * FROM users WHERE name = '" + name + "'");
}

export function archive(dir) {
  execSync("tar czf backup.tgz " + dir);
}

export function average(list) {
  let sum = 0;
  for (let i = 0; i <= list.length; i++) sum += list[i];
  return sum / list.length;
}
