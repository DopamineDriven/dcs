export const shimmerStyles = {
  shimmer: `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-dcs-900/10 before:to-transparent`
} as const;

export function RenderingPageSkeleton() {
  const shimmer = shimmerStyles.shimmer;
  return (
    <div className='grid grid-cols-6 gap-x-6 gap-y-2 min-h-fit justify-between mx-20 my-10 bg-dcs-200 rounded-lg px-2 pt-2 pb-10'>
      <div className='col-span-full space-y-3 lg:col-span-6'>
        <div className={`h-[30vh] rounded-lg bg-dcs-100 ${shimmer}`} />
        <div className={`h-[12vh] rounded-lg bg-dcs-200 ${shimmer}`} />
      </div>
      <div className='-order-1 col-span-full lg:order-none lg:col-span-6'>
        <div className={`space-y-3 justify-center rounded-lg bg-dcs-300 p-3 ${shimmer}`}>
          <div className='h-[18vh] rounded-lg bg-dcs-200'></div>
          <div className='h-[7.5vh] w-full rounded-full bg-dcs-100'></div>
        </div>
      </div>
    </div>
  );
}
