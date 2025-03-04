import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
    <div className="flex justify-between">

      <div className="flex items-center justify-center mt-44 ml-10 w-[50%]">
        <SignIn />;
      </div>
      <div>
        
      </div>
    </div>
    </>
  );
}
