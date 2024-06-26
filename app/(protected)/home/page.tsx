import getUserDetails from '@/actions/getUserDetails';
import { validateRequest } from '@/actions/validateRequests';
import Extras from '@/app/(protected)/home/components/Extras';
import Feed from '@/app/(protected)/home/components/Feed';
import Sidebar from '@/app/(protected)/home/components/Sidebar';
import { Separator } from '@/components/ui/separator';
import db from '@/lib/db';

// Add Skeleton and pass the userDetaisl to all other props
export default async function page() {
    const { user } = await validateRequest();
    const userDetails = await getUserDetails(user?.id);

    const posts = await db.post.findMany({
        where: {
            userId: userDetails?.id,
        },
    });

    return (
        <div className="min-h-[93vh]">
            <div className="flex lg:grid lg:grid-cols-[0.85fr_3fr_1.15fr] gap-x-3">
                <div className="">
                    <Sidebar userDetails={userDetails} />
                </div>
                <div className="flex">
                    <Separator orientation="vertical" />
                    {userDetails && (
                        <Feed userDetails={userDetails} posts={posts} />
                    )}
                    <Separator orientation="vertical" />
                </div>
                <div className="hidden lg:block">
                    <Extras userDetails={userDetails} />
                </div>
            </div>
        </div>
    );
}
