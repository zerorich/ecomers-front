import React from "react";

const authors = [
  { id: 1, name: "Esthera Jackson", email: "esthera@simmmpple.com", role: "Manager", subRole: "Organization", status: "Online", employed: "14/06/21" },
  { id: 2, name: "Alexa Liras", email: "alexa@simmmpple.com", role: "Programmer", subRole: "Developer", status: "Offline", employed: "14/06/21" },
  { id: 3, name: "Laurent Michael", email: "laurent@simmmpple.com", role: "Executive", subRole: "Projects", status: "Online", employed: "14/06/21" },
  { id: 4, name: "Freduardo Hill", email: "freduardo@simmmpple.com", role: "Manager", subRole: "Organization", status: "Online", employed: "14/06/21" },
  { id: 5, name: "Daniel Thomas", email: "daniel@simmmpple.com", role: "Programmer", subRole: "Developer", status: "Offline", employed: "14/06/21" },
  { id: 6, name: "Mark Wilson", email: "mark@simmmpple.com", role: "Designer", subRole: "UI/UX Design", status: "Offline", employed: "14/06/21" },
];

export default function Table() {
  return (
    <div className="min-h-screen bg-[#0f1535] text-white p-8">

      {/* Title */}
      <h1 className="text-3xl font-semibold mb-8 tracking-wide">
        Authors Table
      </h1>

      {/* TABLE CARD */}
      <div className="
        bg-[#111c44] 
        rounded-2xl 
        shadow-[0px_4px_20px_rgba(0,0,0,0.45)] 
        overflow-hidden 
        backdrop-blur-xl
        border border-white/10
      ">
        
        <table className="w-full text-left">

          {/* TABLE HEAD */}
          <thead className="bg-[#1b254b] text-[#a3aed0] text-sm uppercase tracking-wide">
            <tr>
              <th className="p-4">Author</th>
              <th className="p-4">Function</th>
              <th className="p-4">Status</th>
              <th className="p-4">Employed</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="divide-y divide-white/10">
            {authors.map((a) => (
              <tr
                key={a.id}
                className="hover:bg-white/5 transition-all"
              >
                {/* AUTHOR */}
                <td className="p-4">
                  <div className="font-semibold text-[15px]">{a.name}</div>
                  <div className="text-xs text-[#a3aed0]">{a.email}</div>
                </td>

                {/* FUNCTION */}
                <td className="p-4">
                  <div className="font-medium">{a.role}</div>
                  <div className="text-xs text-[#a3aed0]">{a.subRole}</div>
                </td>

                {/* STATUS */}
                <td className="p-4">
                  <span
                    className={`
                      px-3 py-1 text-sm font-medium rounded-full
                      ${
                        a.status === "Online"
                          ? "bg-[#01b574]/20 text-[#01b574]"
                          : "bg-[#ff5c8e]/20 text-[#ff5c8e]"
                      }
                    `}
                  >
                    {a.status}
                  </span>
                </td>

                {/* EMPLOYED */}
                <td className="p-4 text-[#a3aed0]">{a.employed}</td>

                {/* ACTION */}
                <td className="p-4 text-right">
                  <button className="text-[#4318ff] hover:opacity-80 transition">
                    Edit
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}
