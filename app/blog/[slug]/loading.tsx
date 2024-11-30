export default function Loading() {
    return (
      <div className="min-h-screen pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* 标题骨架屏 */}
          <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mb-4 animate-pulse" />
          
          {/* 日期骨架屏 */}
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/4 mb-8 animate-pulse" />
          
          {/* 内容骨架屏 */}
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full animate-pulse" />
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6 animate-pulse" />
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-4/6 animate-pulse" />
          </div>
        </div>
      </div>
    );
  }