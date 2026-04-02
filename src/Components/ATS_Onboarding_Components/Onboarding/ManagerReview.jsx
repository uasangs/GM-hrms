import { useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function ManagerReviewAdvanced() {
  const weights = {
    technical: 0.3,
    communication: 0.2,
    teamwork: 0.2,
    punctuality: 0.1,
    problemSolving: 0.2,
  };

  const [ratings, setRatings] = useState({
    technical: 4,
    communication: 3,
    teamwork: 4,
    punctuality: 5,
    problemSolving: 3,
  });

  const [files, setFiles] = useState([]);

  const reviewHistory = [
    {
      cycle: "Mid Internship Review",
      score: 3.6,
      recommendation: "Continue Internship",
      date: "Oct 2025",
    },
    {
      cycle: "Initial Review",
      score: 3.2,
      recommendation: "Needs Monitoring",
      date: "Aug 2025",
    },
  ];

  const weightedScore = Object.keys(ratings).reduce(
    (total, key) => total + ratings[key] * weights[key],
    0
  );

  const radarData = {
    labels: Object.keys(ratings).map((k) =>
      k.replace(/([A-Z])/g, " $1")
    ),
    datasets: [
      {
        label: "Performance",
        data: Object.values(ratings),
        backgroundColor: "rgba(37,99,235,0.2)",
        borderColor: "rgba(37,99,235,1)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6 space-y-8">

        {/* Header */}
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">
            Manager Review & Recommendation
          </h1>
          <span className="text-sm text-gray-500">
            Internship / Probation
          </span>
        </div>

        {/* Employee Info */}
        <div className="grid md:grid-cols-4 gap-4 bg-gray-50 p-4 rounded-md">
          <Info label="Employee" value="John Doe" />
          <Info label="Role" value="Frontend Intern" />
          <Info label="Manager" value="Sarah Smith" />
          <Info label="Review Period" value="Aug 2025 – Jan 2026" />
        </div>

        {/* Ratings + Radar */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="font-medium text-lg">Weighted Ratings</h2>

            {Object.keys(ratings).map((key) => (
              <div
                key={key}
                className="flex justify-between items-center"
              >
                <span className="capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                  <span className="text-xs text-gray-500 ml-1">
                    ({weights[key] * 100}%)
                  </span>
                </span>

                <select
                  value={ratings[key]}
                  onChange={(e) =>
                    setRatings({
                      ...ratings,
                      [key]: Number(e.target.value),
                    })
                  }
                  className="border rounded-md px-3 py-1"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-md p-4">
            <Radar data={radarData} />
          </div>
        </div>

        {/* Score */}
        <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
          <p className="text-sm text-gray-600">
            Weighted Performance Score
          </p>
          <p className="text-3xl font-bold text-blue-600">
            {weightedScore.toFixed(2)} / 5
          </p>
        </div>

        {/* Feedback */}
        <div className="grid md:grid-cols-2 gap-4">
          <textarea
            className="border rounded-md p-3 min-h-[120px]"
            placeholder="Key strengths observed..."
          />
          <textarea
            className="border rounded-md p-3 min-h-[120px]"
            placeholder="Areas for improvement..."
          />
        </div>

        {/* Attach Documents */}
        <div>
          <label className="font-medium block mb-2">
            Supporting Documents
          </label>
          <input
            type="file"
            multiple
            onChange={(e) =>
              setFiles([...files, ...e.target.files])
            }
            className="block w-full text-sm"
          />

          {files.length > 0 && (
            <ul className="mt-2 text-sm text-gray-600 list-disc ml-5">
              {Array.from(files).map((f, i) => (
                <li key={i}>{f.name}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Recommendation */}
        <div>
          <label className="font-medium mb-2 block">
            Final Recommendation
          </label>
          <select className="w-full border rounded-md p-3">
            <option>Confirm Employment</option>
            <option>Extend Probation</option>
            <option>Performance Improvement Plan</option>
            <option>Do Not Continue</option>
          </select>
        </div>

        {/* Review History */}
        <div>
          <h2 className="font-medium text-lg mb-3">
            Review History
          </h2>
          <div className="space-y-3">
            {reviewHistory.map((r, i) => (
              <div
                key={i}
                className="flex justify-between bg-gray-50 p-3 rounded-md"
              >
                <div>
                  <p className="font-medium">{r.cycle}</p>
                  <p className="text-xs text-gray-500">
                    {r.date}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">
                    {r.score} / 5
                  </p>
                  <p className="text-xs text-gray-500">
                    {r.recommendation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button className="border px-4 py-2 rounded-md">
            Save Draft
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Submit Final Review
          </button>
        </div>
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
