import React from "react";
import { getStatusColor } from "../../utils/helpers";

export default function StatusBadge({ status }) {
  return (
    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(status)}`}>
      {status}
    </span>
  );
}
