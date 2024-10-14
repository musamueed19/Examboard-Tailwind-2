import TitleHeader from "@/components/common/TitleHeader";
import DashboardLayout from "./(dashboard)/layout";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="flex w-full h-full text-[#1d4ed8] items-center justify-center">
        <TitleHeader title="Welcome to Our Dashboard Page!" fontSize="4xl" />
      </div>
    </DashboardLayout>
  );
}
