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
  { date: "2024-06-01", thisMonth: 178, prevMonth: 200 },
  { date: "2024-06-02", thisMonth: 470, prevMonth: 410 },
  { date: "2024-06-03", thisMonth: 103, prevMonth: 160 },
  { date: "2024-06-04", thisMonth: 439, prevMonth: 380 },
  { date: "2024-06-05", thisMonth: 88, prevMonth :140 },
  { date: "2024-06-06", thisMonth: 294, prevMonth: 250 },
  { date: "2024-06-07", thisMonth: 323, prevMonth: 370 },
  { date: "2024-06-08", thisMonth: 385, prevMonth: 320 },
  { date: "2024-06-09", thisMonth: 438, prevMonth: 480 },
  { date: "2024-06-10", thisMonth: 155, prevMonth: 200 },
  { date: "2024-06-11", thisMonth: 92,  prevMonth :150 },
  { date: "2024-06-12", thisMonth: 492, prevMonth: 420 },
  { date: "2024-06-13", thisMonth: 81, prevMonth: 130 },
  { date: "2024-06-14", thisMonth: 426, prevMonth: 380 },
  { date: "2024-06-15", thisMonth: 307, prevMonth: 350 },
  { date: "2024-06-16", thisMonth: 371, prevMonth: 310 },
  { date: "2024-06-17", thisMonth: 475, prevMonth: 520 },
  { date: "2024-06-18", thisMonth: 107, prevMonth: 170 },
  { date: "2024-06-19", thisMonth: 341, prevMonth: 290 },
  { date: "2024-06-20", thisMonth: 408, prevMonth: 450 },
  { date: "2024-06-21", thisMonth: 169, prevMonth: 210 },
  { date: "2024-06-22", thisMonth: 317, prevMonth: 270 },
  { date: "2024-06-23", thisMonth: 480, prevMonth: 530 },
  { date: "2024-06-24", thisMonth: 132, prevMonth: 180 },
  { date: "2024-06-25", thisMonth: 141, prevMonth: 190 },
  { date: "2024-06-26", thisMonth: 434, prevMonth: 380 },
  { date: "2024-06-27", thisMonth: 448, prevMonth: 490 },
  { date: "2024-06-28", thisMonth: 149, prevMonth: 200 },
  { date: "2024-06-29", thisMonth: 103, prevMonth: 160 },
  { date: "2024-06-30", thisMonth: 446, prevMonth: 400 },
];
const lineChartConfig = {
  views: {
    label: "Water Consumed",
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
    month: "Sep 2024",
    description: "Overview of performance in September 2024.",
  },
  { month: "Aug 2024", description: "Insights from August 2024." },
  { month: "Jul 2024", description: "Key metrics for July 2024." },
  { month: "Jun 2024", description: "June 2024 report highlights." },
  { month: "May 2024", description: "Performance overview for May 2024." },
  { month: "Apr 2024", description: "April 2024 data insights." },
  { month: "Mar 2024", description: "Summary of March 2024." },
  { month: "Feb 2024", description: "February 2024 performance analysis." },
  { month: "Jan 2024", description: "Key findings for January 2024." },
  { month: "Dec 2023", description: "Review of December 2023." },
];

export const Reports = () => {
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
        <h1 className="text-5xl font-light gradientDefault">
          Your Recent Reports.
        </h1>
        <p className="text-base mt-4 mb-4 w-1/2">
          Take a closer look at the reports below to gain valuable insights into
          your recent performance.
        </p>
      </div>
      <Card className="md:mr-20 my-5">
        <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
          <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
            <CardTitle>Reports For Water Consumption</CardTitle>
            <CardDescription>
              Showing total consumtion for the last 3 months
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
      <div className="grid grid-cols-3 md:mr-20">
        {reportData.map(({ month, description }) => (
          <Card
            key={month}
            className="px-6 py-4 m-1.5 md:text-base text-sm text-slate-500 hover:text-slate-700 hover:pr-8 flex items-center justify-between"
          >
            <div>{month} Report</div>
            <div className="">{"->"}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};
