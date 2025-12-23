import fs from "node:fs/promises";

const url = "https://jsonplaceholder.typicode.com/todos/5";

const res = await fetch(url, { headers: { Accept: "application/json" } });
if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);

const data = await res.json();

await fs.writeFile(
  "store.json",
  JSON.stringify(
    {
      updatedAt: new Date().toISOString(),
      source: url,
      data
    },
    null,
    2
  ),
  "utf8"
);

console.log("store.json updated");
