import { TrendingUp } from "lucide-react";
import { Bar, BarChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export const description = "A multiple bar chart";
import * as React from "react";
import { Label, Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const lineChartData = [
  { date: "2024-06-01", thisMonth: 0, prevMonth: 200 },
  { date: "2024-06-02", thisMonth: 10, prevMonth: 410 },
  { date: "2024-06-03", thisMonth: 20, prevMonth: 160 },
  { date: "2024-06-04", thisMonth: 30, prevMonth: 380 },
  { date: "2024-06-05", thisMonth: 40,  prevMonth: 140 },
  { date: "2024-06-06", thisMonth: 50, prevMonth: 250 },
  { date: "2024-06-07", thisMonth: 70, prevMonth: 370 },
  { date: "2024-06-08", thisMonth: 45, prevMonth: 320 },
  { date: "2024-06-09", thisMonth: 80, prevMonth: 480 },
  { date: "2024-06-10", thisMonth: 90, prevMonth: 200 },
  { date: "2024-06-11", thisMonth: 92,  prevMonth: 150 },
  { date: "2024-06-12", thisMonth: 100, prevMonth: 420 },
  { date: "2024-06-13", thisMonth: 105,  prevMonth: 130 },
  { date: "2024-06-14", thisMonth: 110, prevMonth: 380 },
  { date: "2024-06-15", thisMonth: 117, prevMonth: 350 },
  { date: "2024-06-16", thisMonth: 125, prevMonth: 310 },
  { date: "2024-06-17", thisMonth: 130, prevMonth: 520 },
  { date: "2024-06-18", thisMonth: 107, prevMonth: 170 },
  { date: "2024-06-19", thisMonth: 200, prevMonth: 290 },
  { date: "2024-06-20", thisMonth: 220, prevMonth: 450 },
  { date: "2024-06-21", thisMonth: 227, prevMonth: 210 },
  { date: "2024-06-22", thisMonth: 240, prevMonth: 270 },
  { date: "2024-06-23", thisMonth: 260, prevMonth: 530 },
  { date: "2024-06-24", thisMonth: 270, prevMonth: 180 },
  { date: "2024-06-25", thisMonth: 250, prevMonth: 190 },
  { date: "2024-06-26", thisMonth: 260, prevMonth: 380 },
  { date: "2024-06-27", thisMonth: 290, prevMonth: 490 },
  { date: "2024-06-28", thisMonth: 300, prevMonth: 200 },
  { date: "2024-06-29", thisMonth: 335, prevMonth: 160 },
  { date: "2024-06-30", thisMonth: 400, prevMonth: 400 },
];
const lineChartConfig = {
  views: {
    label: "Points",
  },
  thisMonth: {
    label: "This Month",
    color: "hsl(var(--chart-1))",
  },
  prevMonth: {
    label: "Last Month",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;
const reportData = [
  {
    month: "Today's usage",
    description: "300 Liters.",
  },
  { month: "Streak", description: "350 Days." },
  { month: "Points", description: "5086 Points." },
];
const giftData = [
  {
    month: "10000 points",
    description: "Special Water Saver Badge on Your Profile.",
  },
  {
    month: "5000 points",
    description: "3 Months of Spotify Premium",
    image:
      "https://az15297.vo.msecnd.net/images/rewards/rc/medium/Spotify_3M_rerun_262x164.png",
  },
  {
    month: "10000 points",
    description: "Rs. 500 Amazon Pay Gift Card",
    image:
      "https://az15297.vo.msecnd.net/images/rewards/rc/medium/AmazonPayIN_262x164.png",
  },
  {
    month: "5000 points",
    description: "Rs. 500 Flipkart Gift Card",
    image:
      "https://az15297.vo.msecnd.net/images/rewards/rc/medium/Flipkart_262x164.png",
  },
  {
    month: "8000 points",
    description: "Rs. 400 BookMyShow Gift Card",
    image:
      "https://az15297.vo.msecnd.net/images/rewards/rc/medium/BookMyShow_262x164.png",
  },
  {
    month: "20000 points",
    description: "Flat Rs. 1000 off on any Purchace!",
    image:
      "https://az15297.vo.msecnd.net/images/rewards/rc/medium/Croma_262x164.png",
  },
  {
    month: "7000 points",
    description: "Sea of Thieves - Ancient Coin Pack",
    image:
      "https://az15297.vo.msecnd.net/images/rewards/rc/medium/SOT_310x194.png",
  },
  {
    month: "5000 points",
    description: "Overwatch Coins Digital Code",
    image:
      "https://az15297.vo.msecnd.net/images/rewards/rc/medium/000400000383_v2_310x194.png",
  },
];

export const Rewards = () => {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof barChartConfig>("thisMonth");
  const total = React.useMemo(
    () => ({
      thisMonth: lineChartData.reduce((acc, curr) => acc + curr.thisMonth, 0),
      prevMonth: lineChartData.reduce((acc, curr) => acc + curr.prevMonth, 0),
    }),
    []
  );
  return (
    <div>
      <div className="text-custom h-full">
        <h1 className="text-5xl font-light gradientDefault">Your Rewards.</h1>
        <p className="text-base mt-4 mb-4 w-1/2">
          Take a closer look at the reports below to gain valuable insights into
          your recent performance.
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 md:mr-20">
        {reportData.map(({ month, description }) => (
          <Card
            key={month}
            className="px-6 py-4 m-1.5 text-slate-500 hover:text-slate-700 hover:pr-8"
          >
            <div>{month}</div>
            <div className="text-2xl mt-3 gradientDefault">{description}</div>
          </Card>
        ))}
      </div>
      <Card className="md:mr-20 my-5">
        <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
          <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
            <CardTitle>Point Stats</CardTitle>
            <CardDescription>
              Showing total points for the last 3 months
            </CardDescription>
          </div>
          <div className="flex">
            {["thisMonth", "prevMonth"].map((key) => {
              const chart = key as keyof typeof lineChartConfig;
              return (
                <button
                  key={chart}
                  data-active={activeChart === chart}
                  className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                  onClick={() => setActiveChart(chart)}
                >
                  <span className="text-xs text-muted-foreground">
                    {lineChartConfig[chart].label}
                  </span>
                  <span className="text-lg font-bold leading-none sm:text-3xl">
                    {total[key as keyof typeof total].toLocaleString()}
                  </span>
                </button>
              );
            })}
          </div>
        </CardHeader>
        <CardContent className="px-2 sm:p-6">
          <ChartContainer
            config={lineChartConfig}
            className="aspect-auto h-[250px] w-full"
          >
            <LineChart
              accessibilityLayer
              data={lineChartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });
                }}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    className="w-[150px]"
                    nameKey="views"
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      });
                    }}
                  />
                }
              />
              <Line
                dataKey={activeChart}
                type="monotone"
                stroke={`var(--color-${activeChart})`}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <hr className="my-8 md:mr-20" />
      <h1 className="text-5xl my-5 gradientDefault">Rewards.</h1>
      <div className="md:mr-20 grid grid-cols-1 lg:grid-cols-4">
        {giftData.map(({ month, description, image }) => (
          <Card
            key={month}
            className="px-6 py-4 m-1.5 text-slate-500 hover:text-slate-700"
          >
            <img src={image} className="w-full h-auto mb-2 rounded-lg" />
            <div className="text-sm">{month}</div>
            <div className="mt-2 text-xl gradientDefault">{description}</div>
          </Card>
        ))}
      </div>
      <div className="md:mr-20">
        <h2 className="text-4xl font-semibold gradientDefault my-4">
          Terms and Conditions
        </h2>
        <p className="text-slate-600 mb-4">
          Welcome to our Water-Saving Rewards Program! By participating, you
          agree to the following terms:
        </p>

        <h3 className="font-bold text-slate-800 mt-4">Eligibility Criteria</h3>
        <ul className="list-disc list-inside text-slate-600 mb-4">
          <li>
            <strong>Minimum Water Usage:</strong> Your daily water usage must be
            less than
            <span className="font-semibold"> 200 Liters</span> to be eligible
            for rewards.
          </li>
          <li>
            <strong>Global Average Benchmark:</strong> Monthly water usage must
            be below the
            <span className="font-semibold">
              {" "}
              global average of 5000 Liters
            </span>{" "}
            to earn specific points.
          </li>
          <li>
            <strong>Streak System:</strong> Maintain a streak of water usage
            below 200 Liters daily to unlock additional rewards.
          </li>
        </ul>

        <h3 className="font-bold text-slate-800 mt-4">Point System</h3>
        <p className="text-slate-600 mb-2">
          Earn points based on your water usage:
        </p>
        <ul className="list-disc list-inside text-slate-600 mb-4">
          <li>
            <strong>Under 150 Liters Daily:</strong> Earn{" "}
            <span className="font-semibold">100 points</span> per day.
          </li>
          <li>
            <strong>150-200 Liters Daily:</strong> Earn{" "}
            <span className="font-semibold">50 points</span> per day.
          </li>
          <li>
            <strong>Streak Rewards:</strong> Earn an additional{" "}
            <span className="font-semibold">50 points</span> for every
            <span className="font-semibold"> 5-day streak</span> of meeting your
            daily target.
          </li>
        </ul>

        <h3 className="font-bold text-slate-800 mt-4">Additional Notes</h3>
        <ul className="list-disc list-inside text-slate-600 mb-4">
          <li>
            Points will be credited to your account within{" "}
            <span className="font-semibold">24 hours</span> of meeting the
            criteria.
          </li>
          <li>
            Rewards may vary based on availability and can change over time.
          </li>
          <li>
            We reserve the right to modify the terms of this program at any
            time.
          </li>
        </ul>

        <h3 className="font-bold text-slate-800 mt-4">
          Join Us in Saving Water!
        </h3>
        <p className="text-slate-600">
          Thank you for being part of our community dedicated to sustainable
          water usage. Together, we can make a difference!
        </p>
      </div>
    </div>
  );
};
