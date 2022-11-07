import { fetchProjectItems } from "./fetchProjectItems";
import { config } from "./config";
import * as fs from "fs";

const OUTPUT_FILE = `${process.cwd()}/dist/roadmap.json`

const { projectId, org } = config;

(async () => {
  const project = await fetchProjectItems({ org, projectId, first: 100 })

  await fs.mkdir('./dist', () => {
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(project), )
  })
})().catch(e => console.error)
