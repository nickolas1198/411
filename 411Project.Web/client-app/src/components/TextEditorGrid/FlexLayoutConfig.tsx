export var json = {
  global: { tabEnableClose: false },

  layout: {
    type: "row",
    weight: 100,
    children: [
      {
        type: "tabset",
        weight: 160,
        selected: 0,
        children: [
          {
            type: "tab",
            name: "Main",
            component: "AceEditorCode",
          },
        ],
      },

      {
        type: "row",
        children: [
          {
            type: "tabset",
            weight: 20,
            selected: 0,
            children: [
              {
                type: "tab",
                name: "Console Input",
                component: "AceEditorConsoleInput",
              },
            ],
          },

          {
            type: "tabset",
            weight: 20,
            selected: 0,
            children: [
              {
                type: "tab",
                name: "Console Output",
                component: "AceEditorConsoleOutput",
              },
            ],
          },
        ],
      },
    ],
  },
};
