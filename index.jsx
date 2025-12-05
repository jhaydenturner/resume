import React from "react";
import fs from "fs";
import { renderToBuffer } from "@react-pdf/renderer";
import Resume from "./resume";

// const resumeName = "resume_darkMode.pdf";
const resumeName = "resume_lightMode.pdf";

async function main() {
  const pdfBuffer = await renderToBuffer(<Resume />);
  fs.writeFileSync(resumeName, pdfBuffer);
}

main();
