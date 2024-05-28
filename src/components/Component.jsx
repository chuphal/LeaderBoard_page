import React from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
import {
  DEFAULT_OPTIONS,
  getTheme,
} from "@table-library/react-table-library/chakra-ui";
import { useTheme } from "@table-library/react-table-library/theme";
import { Box } from "@chakra-ui/react";
import nodes from "../assets/data.json";

const key = "Base";

const COLUMNS = [
  { label: "Rank", renderCell: (item) => item.rank },
  {
    label: "Name",
    renderCell: (item) => item.name,
  },
  { label: "Calmar Ratio", renderCell: (item) => item.calmar_ratio },
  {
    label: "Overall Profit",
    renderCell: (item) => item.overall_profit,
  },
  { label: "Avg. Daily Profit", renderCell: (item) => item.avg_daily_profit },
  { label: "Win % (Day)", renderCell: (item) => item.win },
  { label: "Price (Rs)", renderCell: (item) => item.price },
  {
    label: "Action",
    renderCell: (item) => (
      <a href="#" className="view-link">
        {item.action}
      </a>
    ),
  },
];

const Component = () => {
  const data = { nodes };
  const chakraTheme = getTheme(DEFAULT_OPTIONS);
  const theme = useTheme(chakraTheme);

  return (
    <>
      <Box
        p={3}
        borderWidth="1px"
        borderRadius="7px"
        style={{ margin: "40px" }}
      >
        <div className="row-bucket">
          <div class="col-md-10">
            <p
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                lineHeight: "normal",
                color: "rgb(45, 55, 72)",
              }}
            >
              Basic Backtest
            </p>
          </div>
          <div class="col">
            <div class="mb-2 input-group">
              <span class="input-group-text">Slippage</span>
              <select class="form-select">
                <option value="0">0%</option>
                <option value="0.5">0.5%</option>
                <option value="1">1%</option>
              </select>
            </div>
          </div>
        </div>
        <CompactTable
          columns={COLUMNS}
          data={data}
          theme={theme}
          borderRadius="10px"
        />
        ;
      </Box>
      <br />
    </>
  );
};

export default Component;
