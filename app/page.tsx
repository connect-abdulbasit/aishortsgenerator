import { Button } from "@/components/ui/button";
import { SignInButton, SignOutButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();
  return (
    <>
      <div className="flex m-10">
        {userId ? (
          <>
            <div className="flex w-full justify-between">
              <h1 className="text-2xl ">
                Welcome to your dashboard, {userId}!
              </h1>
              <SignOutButton>
                <Button>Sign Out</Button>
              </SignOutButton>
            </div>
          </>
        ) : (
          <SignInButton>
            <Button>Sign In</Button>
          </SignInButton>
        )}
      </div>
    </>
  );
}
