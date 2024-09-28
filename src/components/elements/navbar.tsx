// BottomNav.tsx
import { Link } from "react-router-dom";
import {
  House,
  BookCopy,
  CircleHelp,
  Coins,
  Info,
  Settings,
} from "lucide-react";

export default function BottomNav() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-16 flex justify-around items-center rounded-2xl text-slate-700 bg-white bg-opacity-30 shadow-lg md:hidden"
      style={{ zIndex: 80, backdropFilter: "blur(20px)" }}
    >
      <Link to="/">
        <House strokeWidth={2} size={24} />
      </Link>
      <Link to="/reports">
        <BookCopy strokeWidth={2} size={24} />
      </Link>
      <Link to="/news">
        <CircleHelp strokeWidth={2} size={24} />
      </Link>
      <Link to="/rewards">
        <Coins strokeWidth={2} size={24} />
      </Link>
      <Link to="/settings">
        <Settings strokeWidth={2} size={24} />
      </Link>
    </div>
  );
}
