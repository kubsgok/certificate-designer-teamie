import React from "react";
import ReactDOM from "react-dom/client";
import { observer } from "mobx-react-lite";
import { Button } from "@blueprintjs/core";

import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";

import { Workspace } from "polotno/canvas/workspace";
import { SidePanel } from "polotno/side-panel";
import { Toolbar } from "polotno/toolbar/toolbar";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons";
import { PreviewButton } from "./preview-button";
import { createStore } from "polotno/model/store";
import { unstable_registerNextDomDrop } from "polotno/config";
import { json } from "./sample";

import "@blueprintjs/core/lib/css/blueprint.css";

// import all default sections
// we will not use all of them in the demo
// just to show what we have
import {
  TextSection,
  PhotosSection,
  ElementsSection,
  UploadSection,
  BackgroundSection,
  SizeSection
} from "polotno/side-panel";
//
import { SectionTab } from "polotno/side-panel";
// import our own icon
import BiCodeCurly from "@meronex/icons/bi/BiCodeCurly";

const store = createStore({
  // this is a demo key just for that project
  // (!) please don't use it in your projects
  // to create your own API key please go here: https://polotno.com/cabinet
  key: "GvJF1tmy43L2AX6xIBNt",
  // you can hide back-link on a paid license
  // but it will be good if you can keep it for Polotno project support
  showCredit: true
});

store.loadJSON(json);
// store.activePage.addElement({
//   type: "text",
//   text: "hello"
// });

const DragButton = ({ onSelect, ...props }) => {
  return (
    <Button
      {...props}
      draggable
      className="polotno-close-panel"
      onClick={() => onSelect()}
      onDragStart={() => {
        unstable_registerNextDomDrop(({ x, y }) => {
          onSelect({ x, y });
        });
      }}
      onDragEnd={(e) => {
        unstable_registerNextDomDrop(null);
      }}
    />
  );
};

// define the new custom section
const CustomSection = {
  name: "custom",
  Tab: (props) => (
    <SectionTab name="Dynamic Variables" {...props}>
      <BiCodeCurly icon="new-text-box" />
    </SectionTab>
  ),
  // we need observer to update component automatically on any store changes
  Panel: observer(({ store }) => {
    const addText = (attrs) => {
      const width = attrs.width || store.width / 2;

      const x = (attrs?.x || store.width / 2) - width / 2;
      const y = (attrs?.y || store.height / 2) - attrs.fontSize / 2;

      const element = store.activePage?.addElement({
        type: "text",
        fontFamily: "Roboto",
        ...attrs,
        x,
        y,
        width: width
      });
    };
    return (
      <div>
        <p>
          <b>Drag-and-drop the dynamic templating variables below:</b>
        </p>
        <DragButton
          style={{
            marginBottom: "5px",
            width: "100%",
            fontSize: "25px",
            fontFamily: "Roboto"
          }}
          minimal
          onSelect={(pos) => {
            addText({
              ...pos,
              fontSize: 100,
              text: "{name}",
              fontFamily: "Roboto"
            });
          }}
        >
          Add name
        </DragButton>
        <DragButton
          style={{
            marginBottom: "5px",
            width: "100%",
            fontSize: "25px",
            fontFamily: "Roboto"
          }}
          minimal
          onSelect={(pos) => {
            addText({
              ...pos,
              fontSize: 100,
              text: "{course}",
              fontFamily: "Roboto"
            });
          }}
        >
          Add course
        </DragButton>
      </div>
    );
  })
};

// we will have just two sections
const sections = [
  TextSection,
  PhotosSection,
  ElementsSection,
  UploadSection,
  BackgroundSection,
  SizeSection,
  CustomSection
];

export const App = () => {
  return (
    <PolotnoContainer className="polotno-app-container">
      <SidePanelWrap>
        <SidePanel store={store} sections={sections} defaultSection="custom" />
      </SidePanelWrap>
      <WorkspaceWrap>
        <Toolbar
          store={store}
          downloadButtonEnabled
          components={{ ActionControls: PreviewButton }}
        />
        <Workspace store={store} />
        <ZoomButtons store={store} />
      </WorkspaceWrap>
    </PolotnoContainer>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
