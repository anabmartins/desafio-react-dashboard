import {
  Typography_default
} from "./chunk-4OS6LOMI.js";
import {
  Stack_default
} from "./chunk-U5TAGRD6.js";
import {
  textFieldClasses_default
} from "./chunk-JFKR7YQ5.js";
import "./chunk-FADTZKG3.js";
import "./chunk-PCSGV7I7.js";
import "./chunk-DRT4X7CF.js";
import "./chunk-3WAFJ7DC.js";
import "./chunk-NX2UWX4Q.js";
import "./chunk-G7THSU43.js";
import "./chunk-MF6WHHYV.js";
import "./chunk-T6V7DHLE.js";
import "./chunk-OEDYI3DH.js";
import "./chunk-MQPAI7KU.js";
import "./chunk-OTY6O57J.js";
import "./chunk-L6PHGVEW.js";
import "./chunk-2MAR2D2G.js";
import "./chunk-G5KGXSJR.js";
import "./chunk-6DYZEOXJ.js";
import {
  require_jsx_runtime
} from "./chunk-5FV6AS5K.js";
import "./chunk-NNN4RV4Y.js";
import {
  _extends,
  init_extends
} from "./chunk-BJM7UO3E.js";
import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js
init_extends();
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var getChildTypeFromChildName = (childName) => {
  if (childName.match(/^([A-Za-z]+)Range(Calendar|Clock)$/)) {
    return "multi-panel-UI-view";
  }
  if (childName.match(/^([A-Za-z]*)(DigitalClock)$/)) {
    return "Tall-UI-view";
  }
  if (childName.match(/^Static([A-Za-z]+)/) || childName.match(/^([A-Za-z]+)(Calendar|Clock)$/)) {
    return "UI-view";
  }
  if (childName.match(/^MultiInput([A-Za-z]+)RangeField$/) || childName.match(/^([A-Za-z]+)RangePicker$/)) {
    return "multi-input-range-field";
  }
  if (childName.match(/^SingleInput([A-Za-z]+)RangeField$/)) {
    return "single-input-range-field";
  }
  return "single-input-field";
};
var getSupportedSectionFromChildName = (childName) => {
  if (childName.includes("DateTime")) {
    return "date-time";
  }
  if (childName.includes("Date")) {
    return "date";
  }
  return "time";
};
function DemoItem(props) {
  const {
    label,
    children,
    component
  } = props;
  let spacing;
  let sx;
  if (component && getChildTypeFromChildName(component) === "multi-input-range-field") {
    spacing = 1.5;
    sx = {
      [`& .${textFieldClasses_default.root}`]: {
        flexGrow: 1
      }
    };
  } else {
    spacing = 1;
    sx = void 0;
  }
  return (0, import_jsx_runtime2.jsxs)(Stack_default, {
    direction: "column",
    alignItems: "stretch",
    spacing,
    sx,
    children: [label && (0, import_jsx_runtime.jsx)(Typography_default, {
      variant: "body2",
      children: label
    }), children]
  });
}
function DemoContainer(props) {
  const {
    children,
    components,
    sx: sxProp
  } = props;
  const childrenTypes = /* @__PURE__ */ new Set();
  const childrenSupportedSections = /* @__PURE__ */ new Set();
  components.forEach((childName) => {
    childrenTypes.add(getChildTypeFromChildName(childName));
    childrenSupportedSections.add(getSupportedSectionFromChildName(childName));
  });
  const getSpacing = (direction2) => {
    if (direction2 === "row") {
      return childrenTypes.has("UI-view") || childrenTypes.has("Tall-UI-view") ? 3 : 2;
    }
    return childrenTypes.has("UI-view") ? 4 : 3;
  };
  let direction;
  let spacing;
  let sx = _extends({
    overflow: "auto",
    // Add padding as overflow can hide the outline text field label.
    pt: 1
  }, sxProp);
  if (components.length > 2 || childrenTypes.has("multi-input-range-field") || childrenTypes.has("single-input-range-field") || childrenTypes.has("multi-panel-UI-view") || childrenTypes.has("UI-view") || childrenSupportedSections.has("date-time")) {
    direction = "column";
    spacing = getSpacing("column");
  } else {
    direction = {
      xs: "column",
      lg: "row"
    };
    spacing = {
      xs: getSpacing("column"),
      lg: getSpacing("row")
    };
  }
  if (childrenTypes.has("UI-view")) {
  } else if (childrenTypes.has("single-input-range-field")) {
    if (!childrenSupportedSections.has("date-time")) {
      sx = _extends({}, sx, {
        [`& > .${textFieldClasses_default.root}`]: {
          minWidth: 300
        }
      });
    } else {
      sx = _extends({}, sx, {
        [`& > .${textFieldClasses_default.root}`]: {
          minWidth: {
            xs: 300,
            md: 400
          }
        }
      });
    }
  } else if (childrenSupportedSections.has("date-time")) {
    sx = _extends({}, sx, {
      [`& > .${textFieldClasses_default.root}`]: {
        minWidth: 270
      }
    });
  } else {
    sx = _extends({}, sx, {
      [`& > .${textFieldClasses_default.root}`]: {
        minWidth: 200
      }
    });
  }
  return (0, import_jsx_runtime.jsx)(Stack_default, {
    direction,
    spacing,
    sx,
    children
  });
}
export {
  DemoContainer,
  DemoItem
};
//# sourceMappingURL=@mui_x-date-pickers_internals_demo.js.map
