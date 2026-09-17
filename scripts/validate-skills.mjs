#!/usr/bin/env node
/**
 * Validates skills/<name>/SKILL.md frontmatter for Agent Skills installability.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const skillsDir = path.join(root, "skills");

function parseFrontmatter(text) {
  if (!text.startsWith("---\n") && !text.startsWith("---\r\n")) {
    return null;
  }
  const end = text.indexOf("\n---", 3);
  if (end === -1) return null;
  const block = text.slice(4, end).replace(/\r/g, "");
  const out = {};
  let key = null;
  let buf = [];
  for (const line of block.split("\n")) {
    const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (m) {
      if (key) out[key] = buf.join("\n").trim().replace(/^>\-\s*/m, "").replace(/^['"]|['"]$/g, "");
      key = m[1];
      const rest = m[2];
      if (rest === ">" || rest === ">-") {
        buf = [];
      } else {
        buf = [rest];
      }
    } else if (key) {
      buf.push(line.replace(/^\s+/, ""));
    }
  }
  if (key) {
    let val = buf.join("\n").trim();
    if (val.startsWith(">-")) val = val.slice(2).trim();
    if (val.startsWith(">")) val = val.slice(1).trim();
    out[key] = val.replace(/^['"]|['"]$/g, "");
  }
  return out;
}

const names = fs
  .readdirSync(skillsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

if (names.length === 0) {
  console.error("No skills found under skills/");
  process.exit(1);
}

let failed = 0;
for (const name of names) {
  const skillPath = path.join(skillsDir, name, "SKILL.md");
  if (!fs.existsSync(skillPath)) {
    console.error(`FAIL ${name}: missing SKILL.md`);
    failed++;
    continue;
  }
  const text = fs.readFileSync(skillPath, "utf8");
  const fm = parseFrontmatter(text);
  if (!fm) {
    console.error(`FAIL ${name}: missing YAML frontmatter`);
    failed++;
    continue;
  }
  if (!fm.name) {
    console.error(`FAIL ${name}: frontmatter missing name`);
    failed++;
    continue;
  }
  if (fm.name !== name) {
    console.error(`FAIL ${name}: name "${fm.name}" !== folder "${name}"`);
    failed++;
    continue;
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(fm.name)) {
    console.error(`FAIL ${name}: invalid name format`);
    failed++;
    continue;
  }
  if (!fm.description || fm.description.length < 20) {
    console.error(`FAIL ${name}: description missing or too short`);
    failed++;
    continue;
  }
  if (fm.description.length > 1024) {
    console.error(`FAIL ${name}: description > 1024 chars`);
    failed++;
    continue;
  }
  console.log(`OK   ${name}`);
}

if (failed) {
  console.error(`\n${failed} skill(s) failed`);
  process.exit(1);
}

console.log(`\n${names.length} skill(s) valid`);
