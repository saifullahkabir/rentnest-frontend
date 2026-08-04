import { getMe } from "@/service/getMe";
import ProfileCard from "../_components/ProfileCard";

export default async function ProfilePage() {
  const result = await getMe();

  if (!result?.success || !result.data) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8">
        <div className="rounded-2xl border bg-card p-6 text-center">
          <p className="text-sm text-muted-foreground">
            Failed to load profile.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <ProfileCard user={result.data} />
    </div>
  );
}
