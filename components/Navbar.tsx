import {
  AlarmIcon,
  ChartLineUpIcon,
  HouseIcon,
  UserIcon,
} from "@phosphor-icons/react/ssr";

export default function Navbar() {
  return (
    <header className="fixed bottom-0 w-full max-w-lg mx-auto rounded-t-2xl bg-[#0e0422]">
      <div className="flex items-center justify-between px-16 py-4">
        <HouseIcon size={32} />
        <ChartLineUpIcon size={32} />
        <AlarmIcon size={32} />
        <UserIcon size={32} />
      </div>
    </header>
  );
}
