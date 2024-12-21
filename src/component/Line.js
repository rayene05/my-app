 
 
import React from "react";
import { Box, useTheme } from "@mui/material";

import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "Myself",
    color: "hsl(4, 70%, 50%)",
    data: [
      { x: "January", y: 820 },
      { x: "February", y: 150 },
      { x: "March", y: 180 },
      { x: "April", y: 300 },
      { x: "May", y: 220 },
      { x: "June", y: 540 },
      { x: "July", y: 360 },
      { x: "August", y: 280 },
      { x: "September", y: 300 },
      { x: "October", y: 320 },
      { x: "November", y: 340 },
      { x: "December", y: 360 },
    ],
  },
  {
    id: "My Son",
    color: "hsl(205, 70%, 50%)",
    data: [
      { x: "January", y: 100 },
      { x: "February", y: 120 },
      { x: "March", y: 140 },
      { x: "April", y: 160 },
      { x: "May", y: 480 },
      { x: "June", y: 200 },
      { x: "July", y: 320 },
      { x: "August", y: 240 },
      { x: "September", y: 160 },
      { x: "October", y: 580 },
      { x: "November", y: 300 },
      { x: "December", y: 520 },
    ],
  },
  {
    id: "My Wife",
    color: "hsl(39, 70%, 50%)",
    data: [
      { x: "January", y: 150 },
      { x: "February", y: 170 },
      { x: "March", y: 190 },
      { x: "April", y: 210 },
      { x: "May", y: 230 },
      { x: "June", y: 250 },
      { x: "July", y: 270 },
      { x: "August", y: 290 },
      { x: "September", y: 310 },
      { x: "October", y: 330 },
      { x: "November", y: 350 },
      { x: "December", y: 370 },
    ],
  },
  {
    id: "My Daughter",
    color: "hsl(179, 70%, 50%)",
    data: [
      { x: "January", y: 80 },
      { x: "February", y: 100 },
      { x: "March", y: 120 },
      { x: "April", y: 140 },
      { x: "May", y: 160 },
      { x: "June", y: 180 },
      { x: "July", y: 200 },
      { x: "August", y: 220 },
      { x: "September", y: 240 },
      { x: "October", y: 200 },
      { x: "November", y: 380 },
      { x: "December", y: 300 },
    ],
  },
];


const Line = ({isDahboard = false}) => {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDahboard?  "300px"  :  "75vh"}}>
      <ResponsiveLine
        theme={{
          textColor: theme.palette.text.primary,
          fontSize: 11,
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 0,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        data={data}
        curve="catmullRom"
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
 
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDahboard? null : "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
       
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDahboard? null : "Count",
          legendOffset: -45,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default Line;