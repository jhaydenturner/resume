import React from "react";
import fs from "fs";
import { renderToBuffer } from "@react-pdf/renderer";
import Resume from "./resume";

const resumeName = "resume.pdf";

async function main() {
  const pdfBuffer = await renderToBuffer(<Resume />);
  fs.writeFileSync(resumeName, pdfBuffer);
}

main();
