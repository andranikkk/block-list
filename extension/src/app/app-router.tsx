import { useSessionQuery } from "@/entities/session";
import { HomePage } from "@/pages/home.page";
import { NotAuthPage } from "@/pages/not-auth.page";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";

export function AppRouter() {
  const { isLoading, isSuccess } = useSessionQuery();

  if (isLoading) {
    <UiPageSpinner />;
  }

  if (isSuccess) {
    return <HomePage />;
  }

  return <NotAuthPage />;
}
