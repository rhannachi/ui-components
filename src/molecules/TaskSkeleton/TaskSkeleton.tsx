export const TaskSkeleton = () => (
  <div data-testid="task-skeleton" className="bg-white border-2 border-gray-50 p-3 w-full mx-auto">
    <div className="animate-pulse flex space-x-4">

      <div className="flex-none">
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-gray-200 rounded col-span-2"></div>
          </div>
          <div className="h-2 bg-gray-200 rounded"></div>
        </div>
      </div>

      <div className="flex-1">
        <div className="space-y-2">
          <div className="h-2 bg-gray-200 rounded"></div>
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-gray-200 rounded col-span-2"></div>
            <div className="h-2 bg-gray-200 rounded col-span-1"></div>
          </div>
        </div>
      </div>

      <div className="rounded-full bg-gray-200 h-6 w-6"></div>

    </div>
  </div>
)
