import { Extension } from "@tiptap/core";
import { nanoid } from "nanoid";
import { Plugin } from "prosemirror-state";

export const ParagraphIdExtension = Extension.create({
  name: "paragraph-id",

  // 1) tell Tiptap that paragraph nodes now have an `id` attribute
  addGlobalAttributes() {
    return [
      {
        types: ["paragraph"],
        attributes: {
          id: {
            default: null,
            parseHTML: (el) => el.getAttribute("data-id"),
            renderHTML: (attrs) =>
              attrs.id
                ? { "data-id": attrs.id }
                : {},
          },
        },
      },
    ];
  },

  // 2) plugin that, on every doc change, walks all <p> and assigns missing ids
  addProseMirrorPlugins() {
    return [
      new Plugin({
        appendTransaction: (trs, oldState, newState) => {
          let tr = newState.tr;
          let didUpdate = false;

          newState.doc.descendants((node, pos) => {
            if (node.type.name === "paragraph" && !node.attrs.id) {
              const newId = nanoid();
              tr = tr.setNodeMarkup(
                pos,
                undefined,
                { ...node.attrs, id: newId },
                node.marks
              );
              didUpdate = true;
            }
          });

          return didUpdate ? tr : null;
        },
      }),
    ];
  },
});

