import { useState } from "react";
import { DATA } from "@/app/data/resume";

export function TechStackCard() {
  const [selectedTech, setSelectedTech] = useState<string>(DATA.skills[0]);

  return (
    <div className="flex space-x-4">
      {/* 左侧可点击列表 */}
      <ul className="w-1/4 list-disc pl-5">
        {DATA.skills.map((tech, index) => (
          <li
            key={index}
            className={`cursor-pointer text-lg ${
              tech === selectedTech ? "font-bold text-blue-500" : ""
            }`}
            onClick={() => setSelectedTech(tech)}
          >
            {tech}
          </li>
        ))}
      </ul>

      {/* 右侧玻璃卡片 */}
      <div className="w-3/4 p-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">{selectedTech}</h2>
        <p className="text-lg">
          这里可以放关于 {selectedTech} 的详细信息或描述。
        </p>
      </div>
    </div>
  );
}