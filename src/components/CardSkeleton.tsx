import { Skeleton } from './Skeleton';

export function BookCardSkeleton() {
    return (
        <div className="rounded-2xl bg-white p-3 md:p-4 shadow-md border border-gray-100">
            {/* 顶部图标区域 */}
            <div className="flex items-center justify-between mb-3">
                <Skeleton variant="rounded" width="48px" height="48px" className="md:w-14 md:h-14" />
                <Skeleton variant="rounded" width="60px" height="24px" />
            </div>

            {/* 标题 */}
            <Skeleton variant="text" height="20px" className="mb-2 md:h-6" />

            {/* 副标题 */}
            <Skeleton variant="text" height="16px" className="mb-3 w-3/4" />

            {/* 统计信息 */}
            <div className="flex items-center gap-2">
                <Skeleton variant="rounded" width="80px" height="28px" />
                <Skeleton variant="rounded" width="70px" height="28px" />
            </div>
        </div>
    );
}

export function SceneCardSkeleton() {
    return (
        <div className="rounded-2xl bg-white p-3 md:p-5 shadow-md border border-gray-100">
            <div className="flex items-start gap-4">
                {/* Emoji 图标 */}
                <Skeleton variant="rounded" width="40px" height="40px" className="md:w-16 md:h-16" />

                <div className="flex-1 min-w-0">
                    {/* 标题 */}
                    <Skeleton variant="text" height="20px" className="mb-2" />

                    {/* 统计信息 */}
                    <div className="flex items-center gap-3">
                        <Skeleton variant="text" width="60px" height="16px" />
                        <Skeleton variant="text" width="50px" height="16px" />
                    </div>
                </div>

                {/* 箭头 */}
                <Skeleton variant="circular" width="40px" height="40px" />
            </div>
        </div>
    );
}

export function SeasonCardSkeleton() {
    return (
        <div className="rounded-2xl md:rounded-3xl overflow-hidden bg-white shadow-md border border-gray-100">
            {/* 顶部渐变色块 */}
            <Skeleton height="96px" className="md:h-36" />

            {/* 内容区域 */}
            <div className="p-3 md:p-5 space-y-3">
                <Skeleton variant="text" height="24px" className="w-3/4" />
                <Skeleton variant="text" height="16px" className="w-1/2" />

                <div className="flex items-center gap-2">
                    <Skeleton variant="rounded" width="80px" height="28px" />
                    <Skeleton variant="rounded" width="70px" height="28px" />
                </div>
            </div>
        </div>
    );
}
