export const shimmerStyles = {
  shimmer: `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-dcs-50/10 before:to-transparent`
} as const;

export function RenderingPageSkeleton() {
  const shimmer = shimmerStyles.shimmer;
  return (
    <div className='grid grid-cols-6 gap-x-6 gap-y-3 min-h-screen'>
      <div className='col-span-full space-y-3 lg:col-span-4'>
        <div className={`h-8 rounded-lg bg-dcs-700 ${shimmer}`} />
        <div className={`h-[72px] rounded-lg bg-dcs-800 ${shimmer}`} />
      </div>
      <div className='-order-1 col-span-full lg:order-none lg:col-span-2'>
        <div className={`space-y-3 rounded-lg bg-dcs-900 p-3 ${shimmer}`}>
          <div className='h-5 rounded-lg bg-dcs-700 lg:h-10'></div>
          <div className='h-6 w-16 rounded-full bg-dcs-300'></div>
        </div>
      </div>
    </div>
  );
}
