// components/SlashList.tsx
import React from "react";
import { SuggestionProps } from "@tiptap/suggestion";
import { Command } from "./editor-slash-menu";
import {
  Star,
  ImageIcon,
  Type,
  List,
  ListOrdered,
  CheckSquare,
  CornerDownRight,
} from "lucide-react";

type Props = SuggestionProps<Command> & {
  close: () => void;
};

export function EditorSlashList({ items, command, close }: Props) {
  const groups: Record<string, Command[]> = items.reduce((acc, item) => {
    const g = (item as any).group || "Other";
    acc[g] = acc[g] || [];
    acc[g].push(item);
    return acc;
  }, {} as Record<string, Command[]>);

  return (
    <div className="w-72 max-h-80 overflow-auto bg-gray-800 text-white rounded shadow-lg py-1">
      {Object.entries(groups).map(([group, cmds], i) => (
        <React.Fragment key={group}>
          <div className="px-3 text-xs font-semibold text-gray-400 uppercase">
            {group}
          </div>
          {cmds.map((item) => {
            // mapping icon based on title or add icon field to Command
            let Icon = Type;
            if (item.title === "AI Writer" || item.title === "AI Image") {
              Icon = Star;
            }
            if (item.title.includes("Image")) Icon = ImageIcon;
            if (item.title.includes("List")) Icon = item.title.includes("Numbered")
              ? ListOrdered
              : List;
            if (item.title.includes("Task")) Icon = CheckSquare;
            if (item.title.includes("Blockquote")) Icon = CornerDownRight;

            return (
              <button
                key={item.title}
                onClick={() => {
                  command(item);
                  close();
                }}
                className="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-700 focus:bg-gray-700 outline-none"
              >
                <Icon className="w-4 h-4 mr-2 text-gray-300" />
                <span>{item.title}</span>
              </button>
            );
          })}
          {i < Object.keys(groups).length - 1 && (
            <div className="my-1 border-t border-gray-700" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

