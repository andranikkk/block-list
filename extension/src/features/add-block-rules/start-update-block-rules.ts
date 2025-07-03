import {
  accountControllerGetAccount,
  authControllerGetSessionInfo,
} from "@/shared/api/generated";
import { setBrowserInterval, setNetRules } from "@/shared/lib/browser";
import { getBlockListNetRules } from "./get-block-list-net-rules";

export function StartUpdateBlockRules() {
  setBrowserInterval("update-block-rules", 5 * 1000, async () => {
    const isAuth = await authControllerGetSessionInfo().then(
      () => true,
      () => false,
    );

    if (!isAuth) {
      return await setNetRules([]);
    }

    const isBlockingEnabled = await accountControllerGetAccount().then(
      (res) => res.isBlockingEnabled,
    );

    if (isBlockingEnabled) {
      return await setNetRules([]);
    }

    setNetRules(await getBlockListNetRules());
  });
}
