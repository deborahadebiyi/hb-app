import CopyUrlInput from "@/components/copy-url/CopyUrl";
import DashboardCarousel from "@/components/navbar/DashboardCarousel";

export const profileCompleteness = () => {};

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-dark goldy font-extrabold text-[44px] flex items-center space-x-40">
        <span>My Dashboard</span>
        <div className="text-[10px]">
          <CopyUrlInput />
        </div>
      </h1>

      <h4>Manage your bookings and work/life balance in your dashboard</h4>
      <DashboardCarousel />
      {/* <h4> Your profile is {}% complete</h4>  */}
    </div>
  );
}
