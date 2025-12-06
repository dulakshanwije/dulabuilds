import ToolGrid from "@/components/layout/ToolGrid";

import { promises as fs } from "fs";
import path from "path";

const ToolList = async () => {
  const filePath = path.join(process.cwd(), "src/data/tools/tools.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const tools = JSON.parse(jsonData);

  return (
    <div className="mt-24">
      <ToolGrid data={tools} title="All Tools" />
    </div>
  );
};

export default ToolList;
