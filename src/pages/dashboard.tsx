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
const barChartData = [
  { month: "January", usage: 186, avgusage: 80 },
  { month: "February", usage: 305, avgusage: 200 },
  { month: "March", usage: 237, avgusage: 120 },
  { month: "April", usage: 73, avgusage: 190 },
  { month: "May", usage: 209, avgusage: 130 },
  { month: "June", usage: 214, avgusage: 140 },
];
const barChartConfig = {
  usage: {
    label: "usage",
    color: "hsl(var(--chart-1))",
  },
  avgusage: {
    label: "avgusage",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export const description1 = "A donut chart with text";
const pieChartData = [
  { home: "house1", usage: 22, fill: "var(--color-house1)" },
  { home: "house2", usage: 40, fill: "var(--color-house2)" },
  { home: "house3", usage: 38, fill: "var(--color-house3)" },
  { home: "house4", usage: 37, fill: "var(--color-house4)" },
  { home: "house5", usage: 39, fill: "var(--color-house5)" },
  { home: "house6", usage: 43, fill: "var(--color-house6)" },
];
const pieChartConfig = {
  usage: {
    label: "usage",
  },
  house1: {
    label: "House 1",
    color: "hsl(var(--chart-1))",
  },
  house2: {
    label: "House 2",
    color: "hsl(var(--chart-2))",
  },
  house3: {
    label: "House 3",
    color: "hsl(var(--chart-3))",
  },
  house4: {
    label: "House 4",
    color: "hsl(var(--chart-4))",
  },
  house5: {
    label: "House 5",
    color: "hsl(var(--chart-5))",
  },
  house6: {
    label: "House 6",
    color: "hsl(var(--chart-6))",
  },
} satisfies ChartConfig;
const pieChartData2 = [
  { home: "cooking ", usage: 5, fill: "var(--color-cooking)" },
  { home: "drinking", usage: 20, fill: "var(--color-drinking" },
  { home: "toilets", usage: 3, fill: "var(--color-toilets)" },
  { home: "laundary", usage: 45, fill: "var(--color-laundary)" },
  { home: "cleaning", usage: 10, fill: "var(--color-cleaning)" },
  { home: "dishwashing", usage: 15, fill: "var(--color-dishwashing)" },
];
const pieChartConfig2 = {
  usage: {
    label: "usage",
  },
  cooking: {
    label: "cookng",
    color: "hsl(var(--chart-1))",
  },
  drinking: {
    label: "drinking",
    color: "hsl(var(--chart-2))",
  },
  toilets: {
    label: "toilets",
    color: "hsl(var(--chart-3))",
  },
  laundary: {
    label: "laundary",
    color: "hsl(var(--chart-4))",
  },
  cleaning: {
    label: "cleaning",
    color: "hsl(var(--chart-5))",
  },
  dishwashing: {
    label: "dishwashing",
    color: "hsl(var(--chart-6))",
  },
} satisfies ChartConfig;
const lineChartData = [
  { date: "2024-06-01", thisMonth: 178, prevMonth: 200 },
  { date: "2024-06-02", thisMonth: 470, prevMonth: 410 },
  { date: "2024-06-03", thisMonth: 103, prevMonth: 160 },
  { date: "2024-06-04", thisMonth: 439, prevMonth: 380 },
  { date: "2024-06-05", thisMonth: 88, prevMonth: 140 },
  { date: "2024-06-06", thisMonth: 294, prevMonth: 250 },
  { date: "2024-06-07", thisMonth: 323, prevMonth: 370 },
  { date: "2024-06-08", thisMonth: 385, prevMonth: 320 },
  { date: "2024-06-09", thisMonth: 438, prevMonth: 480 },
  { date: "2024-06-10", thisMonth: 155, prevMonth: 200 },
  { date: "2024-06-11", thisMonth: 92, prevMonth: 150 },
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
    label: "Page Views",
  },
  thisMonth: {
    label: "thisMonth",
    color: "hsl(var(--chart-1))",
  },
  prevMonth: {
    label: "prevMonth",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export const DashboardPage = () => {
  const totalVisitors = React.useMemo(() => {
    return pieChartData.reduce((acc, curr) => acc + curr.usage, 0);
  }, []);
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof barChartConfig>("usage");
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
        <h1 className="text-5xl font-light gradientDefault">Dashboard</h1>
        <p className="text-base mt-4 mb-4">Welcome to the dashboard</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:mr-20">
        <Card className="h-96 rounded-xl bg-opacity-50">
          <CardHeader>
            <CardTitle>Your usage vs global average</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={barChartConfig}
              className="max-h-48 h-full w-full px-10"
            >
              <BarChart accessibilityLayer data={barChartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dashed" />}
                />
                <Bar dataKey="usage" fill="var(--color-usage)" radius={4} />
                <Bar dataKey="avgusage" fill="var(--color-avgusage)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-center gap-2 text-sm">
            <div className="flex gap-2 font-medium leading-none text-center">
              
            You are consuming more water! <br/> kindly consume according to the need.
            </div>
        
          </CardFooter>
        </Card>
        <Card className="h-96 rounded-xl bg-opacity-50">
          <CardHeader className="pb-0">
            <CardTitle>Overall usage per House</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={pieChartConfig}
              className="mx-auto aspect-square max-h-60 h-full"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={pieChartData}
                  dataKey="usage"
                  nameKey="home"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-bold"
                            >
                              {totalVisitors.toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              KILO<br/>LITERS
                              
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm">
            <div className="flex gap-2 font-medium leading-none">
            </div>
            <div className="leading-none text-muted-foreground text-center">
          Overall Usage depends on number of Household Size and Composition,Geographic Location and regional climate.
            </div>
          </CardFooter>
        </Card>
        <Card className="h-96 rounded-xl bg-opacity-50">
          <CardHeader className="pb-0">
            <CardTitle>Household chores that uses water</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={pieChartConfig2}
              className="mx-auto aspect-square max-h-60 h-full"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={pieChartData2}
                  dataKey="usage"
                  nameKey="home"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-bold"
                            >
                              {totalVisitors.toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                             LITERS 
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm">
            <div className="flex gap-2 font-medium leading-none text-ceneter">
            In context of household water usage,laundry alone stands out as a significant contributor. 

            </div>
            <div className="leading-none text-muted-foreground">
          
            </div>
          </CardFooter>
        </Card>
      </div>
      <Card className="md:mr-20 mt-5">
        <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
          <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
            <CardTitle>Daily Interactive Chart</CardTitle>
            <CardDescription>
          
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
          
    </div>
  );
};
