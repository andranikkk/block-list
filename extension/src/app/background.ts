import { StartUpdateBlockRules } from "@/features/add-block-rules";
import { startToggleExtensionIcon } from "@/features/toggle-blocking/toggle-extension-icon";

StartUpdateBlockRules();
startToggleExtensionIcon();
console.log("chrome.declarativeNetRequest:", chrome.declarativeNetRequest);
