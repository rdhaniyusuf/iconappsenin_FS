import { RecentActivity } from "@/components/dashboard/activity/ActivityComp";
import { div } from "framer-motion/client";
import React from "react";

const ActivityPage: React.FC = async () => {
const response = await fetch (`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`);
const activity = await response.json()

return (
<div>
    <h1>tes passing</h1>
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
    {activity.data.map(data => {
      return(
        <div className="" key={data.mal_id}>
          <RecentActivity title={data.title} images={data.images.webp.image_url} id={data.mal_id} />
        </div>
      )
    })}
    </div>
</div>
)
}

export default ActivityPage;
