import { Users } from "lucide-react";

const ExplainerSeats = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="flex items-center gap-8">
        {/* Left Content */}
        <div className="flex-1 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200">
            <Users className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-600">
              Team Seats
            </span>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900">
            Add seats to grow your team
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Each seat allows a team member to post jobs, review candidates, send
            offer letters, and manage your hiring process. Each seat allows a
            team member to post jobs, review candidates, send offer letters, and
            manage your hiring process. Each seat allows a team member to post
            jobs, review candidates, send offer letters, and manage your hiring
            process.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0">
          <img
            src="/logo.svg"
            alt="Team collaboration"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ExplainerSeats;
