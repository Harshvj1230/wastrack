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
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-05", desktop: 373, mobile: 290 },
  { date: "2024-04-06", desktop: 301, mobile: 340 },
  { date: "2024-04-07", desktop: 245, mobile: 180 },
  { date: "2024-04-08", desktop: 409, mobile: 320 },
  { date: "2024-04-09", desktop: 59, mobile: 110 },
  { date: "2024-04-10", desktop: 261, mobile: 190 },
  { date: "2024-04-11", desktop: 327, mobile: 350 },
  { date: "2024-04-12", desktop: 292, mobile: 210 },
  { date: "2024-04-13", desktop: 342, mobile: 380 },
  { date: "2024-04-14", desktop: 137, mobile: 220 },
  { date: "2024-04-15", desktop: 120, mobile: 170 },
  { date: "2024-04-16", desktop: 138, mobile: 190 },
  { date: "2024-04-17", desktop: 446, mobile: 360 },
  { date: "2024-04-18", desktop: 364, mobile: 410 },
  { date: "2024-04-19", desktop: 243, mobile: 180 },
  { date: "2024-04-20", desktop: 89, mobile: 150 },
  { date: "2024-04-21", desktop: 137, mobile: 200 },
  { date: "2024-04-22", desktop: 224, mobile: 170 },
  { date: "2024-04-23", desktop: 138, mobile: 230 },
  { date: "2024-04-24", desktop: 387, mobile: 290 },
  { date: "2024-04-25", desktop: 215, mobile: 250 },
  { date: "2024-04-26", desktop: 75, mobile: 130 },
  { date: "2024-04-27", desktop: 383, mobile: 420 },
  { date: "2024-04-28", desktop: 122, mobile: 180 },
  { date: "2024-04-29", desktop: 315, mobile: 240 },
  { date: "2024-04-30", desktop: 454, mobile: 380 },
  { date: "2024-05-01", desktop: 165, mobile: 220 },
  { date: "2024-05-02", desktop: 293, mobile: 310 },
  { date: "2024-05-03", desktop: 247, mobile: 190 },
  { date: "2024-05-04", desktop: 385, mobile: 420 },
  { date: "2024-05-05", desktop: 481, mobile: 390 },
  { date: "2024-05-06", desktop: 498, mobile: 520 },
  { date: "2024-05-07", desktop: 388, mobile: 300 },
  { date: "2024-05-08", desktop: 149, mobile: 210 },
  { date: "2024-05-09", desktop: 227, mobile: 180 },
  { date: "2024-05-10", desktop: 293, mobile: 330 },
  { date: "2024-05-11", desktop: 335, mobile: 270 },
  { date: "2024-05-12", desktop: 197, mobile: 240 },
  { date: "2024-05-13", desktop: 197, mobile: 160 },
  { date: "2024-05-14", desktop: 448, mobile: 490 },
  { date: "2024-05-15", desktop: 473, mobile: 380 },
  { date: "2024-05-16", desktop: 338, mobile: 400 },
  { date: "2024-05-17", desktop: 499, mobile: 420 },
  { date: "2024-05-18", desktop: 315, mobile: 350 },
  { date: "2024-05-19", desktop: 235, mobile: 180 },
  { date: "2024-05-20", desktop: 177, mobile: 230 },
  { date: "2024-05-21", desktop: 82, mobile: 140 },
  { date: "2024-05-22", desktop: 81, mobile: 120 },
  { date: "2024-05-23", desktop: 252, mobile: 290 },
  { date: "2024-05-24", desktop: 294, mobile: 220 },
  { date: "2024-05-25", desktop: 201, mobile: 250 },
  { date: "2024-05-26", desktop: 213, mobile: 170 },
  { date: "2024-05-27", desktop: 420, mobile: 460 },
  { date: "2024-05-28", desktop: 233, mobile: 190 },
  { date: "2024-05-29", desktop: 78, mobile: 130 },
  { date: "2024-05-30", desktop: 340, mobile: 280 },
  { date: "2024-05-31", desktop: 178, mobile: 230 },
  { date: "2024-06-01", desktop: 178, mobile: 200 },
  { date: "2024-06-02", desktop: 470, mobile: 410 },
  { date: "2024-06-03", desktop: 103, mobile: 160 },
  { date: "2024-06-04", desktop: 439, mobile: 380 },
  { date: "2024-06-05", desktop: 88, mobile: 140 },
  { date: "2024-06-06", desktop: 294, mobile: 250 },
  { date: "2024-06-07", desktop: 323, mobile: 370 },
  { date: "2024-06-08", desktop: 385, mobile: 320 },
  { date: "2024-06-09", desktop: 438, mobile: 480 },
  { date: "2024-06-10", desktop: 155, mobile: 200 },
  { date: "2024-06-11", desktop: 92, mobile: 150 },
  { date: "2024-06-12", desktop: 492, mobile: 420 },
  { date: "2024-06-13", desktop: 81, mobile: 130 },
  { date: "2024-06-14", desktop: 426, mobile: 380 },
  { date: "2024-06-15", desktop: 307, mobile: 350 },
  { date: "2024-06-16", desktop: 371, mobile: 310 },
  { date: "2024-06-17", desktop: 475, mobile: 520 },
  { date: "2024-06-18", desktop: 107, mobile: 170 },
  { date: "2024-06-19", desktop: 341, mobile: 290 },
  { date: "2024-06-20", desktop: 408, mobile: 450 },
  { date: "2024-06-21", desktop: 169, mobile: 210 },
  { date: "2024-06-22", desktop: 317, mobile: 270 },
  { date: "2024-06-23", desktop: 480, mobile: 530 },
  { date: "2024-06-24", desktop: 132, mobile: 180 },
  { date: "2024-06-25", desktop: 141, mobile: 190 },
  { date: "2024-06-26", desktop: 434, mobile: 380 },
  { date: "2024-06-27", desktop: 448, mobile: 490 },
  { date: "2024-06-28", desktop: 149, mobile: 200 },
  { date: "2024-06-29", desktop: 103, mobile: 160 },
  { date: "2024-06-30", desktop: 446, mobile: 400 },
];
const lineChartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
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
    React.useState<keyof typeof barChartConfig>("desktop");
  const total = React.useMemo(
    () => ({
      desktop: lineChartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: lineChartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    []
  );
  return (
    <div>
      <div className="text-custom h-full">
        <h1 className="text-5xl font-light gradientDefault">
          Your Recent Reports.
        </h1>
        <p className="text-base mt-4 mb-4 w-1/2">
          Take a closer look at the reports below to gain valuable insights into
          your recent performance.
        </p>
      </div>
      <div className="grid grid-cols-3 mr-20">
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
      <Card className="mr-20 my-5">
        <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
          <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
            <CardTitle>Line Chart - Interactive</CardTitle>
            <CardDescription>
              Showing total visitors for the last 3 months
            </CardDescription>
          </div>
          <div className="flex">
            {["desktop", "mobile"].map((key) => {
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
      <hr className="my-8 mr-20" />
      <h1 className="text-5xl my-5 gradientDefault">Rewards.</h1>
      <div className="grid grid-cols-5 mr-20">
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
      <div>
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
