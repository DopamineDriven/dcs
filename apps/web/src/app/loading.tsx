// import { LoadingDots } from "@/ui/loading/Dots";
import { LoadingDots } from "@/ui/loading/Dots";
// import { RenderingPageSkeleton } from "@/ui/RenderPageSkeleton";

export default function Loading() {
  return (
    <div className='mx-auto my-auto grid grid-cols-1 h-screen w-screen justify-center bg-white align-middle'>
      <LoadingDots color={""} />
    </div>
  );
}
