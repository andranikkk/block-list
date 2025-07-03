import { UiLogo } from "../shared/ui/ui-logo";
import { UiButton } from "@/shared/ui/ui-button";
import { ADMIN_URL } from "@/shared/constants";
import { createTab } from "@/shared/lib/browser";
import { ToggleBlockingButton } from "@/features/toggle-blocking";

export function HomePage() {
  return (
    <div className="p-8 flex flex-col gap-3 items-center">
      <UiLogo />
      <ToggleBlockingButton />
      <UiButton variant="secondary" onClick={() => createTab(ADMIN_URL)}>
        Manage Extension
      </UiButton>
    </div>
  );
}
