import React from "react";

// Use this component as a Next.js page: app/dashboard/page.jsx (or pages/dashboard/index.jsx)
// Tailwind must be configured in the project. This code tries to be pixel-accurate to the provided Figma
// — colors, spacing and layout are tuned for a dark-blue neon dashboard.

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#041427] via-[#071b33] to-[#071b2a] text-white p-6 lg:p-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="col-span-2 bg-gradient-to-b from-[#07182e]/60 to-[#071427]/30 backdrop-blur-md border border-[#12305a]/20 rounded-2xl p-6 h-[88vh] sticky top-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2b6ea2] to-[#6ec1ff] flex items-center justify-center font-bold text-sm">VI</div>
            <div>
              <div className="text-sm font-semibold">VISION UI</div>
              <div className="text-xs text-[#8fb4d6]">Dashboard</div>
            </div>
          </div>

          <nav className="flex flex-col gap-2 text-sm">
            {['Dashboard','Tables','Billing','RTL','Profile','Sign In','Sign Up'].map((t,i)=> (
              <a key={t} className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#0f3b63]/30 ${i===0? 'bg-[#0f3b63]/40 font-medium':''}`} href="#">{t}</a>
            ))}
          </nav>

          <div className="mt-auto pt-6">
            <div className="text-xs text-[#9fc6ec] mb-2">Need Help?</div>
            <button className="w-full py-2 rounded-xl bg-gradient-to-r from-[#135e9a] to-[#2fb7ff] text-sm font-semibold shadow-lg">Documentation</button>
          </div>
        </aside>

        {/* Main */}
        <main className="col-span-10">
          {/* Top header */}
          <header className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-lg font-semibold">Dashboard</h1>
              <p className="text-sm text-[#9fc6ec]">Welcome back — here’s what's happening with your projects today.</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <input placeholder="Search..." className="bg-[#062235] px-4 py-2 rounded-xl text-sm w-64 placeholder:text-[#6aa0d2]" />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6aa0d2]">🔍</div>
              </div>

              <button className="px-4 py-2 bg-[#0f3b63]/40 rounded-xl text-sm">🔔</button>
              <div className="w-10 h-10 rounded-full bg-[#173a57]/60 flex items-center justify-center">MJ</div>
            </div>
          </header>

          {/* Top stat cards */}
          <section className="grid grid-cols-12 gap-4 mb-6">
            <div className="col-span-3 bg-gradient-to-br from-[#071e3a] to-[#083046] border border-[#123b63]/30 rounded-2xl p-5">
              <div className="text-xs text-[#86b9df]">Today's Money</div>
              <div className="text-xl font-semibold mt-2">$53,000 <span className="text-sm text-[#6ef08a]">+55%</span></div>
            </div>
            <div className="col-span-3 bg-gradient-to-br from-[#071e3a] to-[#083046] border border-[#123b63]/30 rounded-2xl p-5">
              <div className="text-xs text-[#86b9df]">Today's Users</div>
              <div className="text-xl font-semibold mt-2">2,300 <span className="text-sm text-[#6ef08a]">+5%</span></div>
            </div>
            <div className="col-span-3 bg-gradient-to-br from-[#071e3a] to-[#083046] border border-[#123b63]/30 rounded-2xl p-5">
              <div className="text-xs text-[#86b9df]">New Clients</div>
              <div className="text-xl font-semibold mt-2">+3,052 <span className="text-sm text-[#ff7b7b]">-1%</span></div>
            </div>
            <div className="col-span-3 bg-gradient-to-br from-[#071e3a] to-[#083046] border border-[#123b63]/30 rounded-2xl p-5">
              <div className="text-xs text-[#86b9df]">Total Sales</div>
              <div className="text-xl font-semibold mt-2">$173,000 <span className="text-sm text-[#6ef08a]">+8%</span></div>
            </div>
          </section>

          {/* Welcome + mini cards */}
          <section className="grid grid-cols-12 gap-4 mb-6">
            <div className="col-span-7 bg-gradient-to-br from-[#05203a] to-[#0b2b48] rounded-2xl p-6 relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold">Welcome back, Mark Johnson</h2>
                  <p className="text-sm text-[#9fc6ec] mt-1">Glad to see you again! Ask me anything.</p>
                </div>
                <div className="w-36 h-28 bg-[url('/images/jellyfish.png')] bg-contain bg-right opacity-90"></div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="bg-[#06263f]/60 p-4 rounded-xl">
                  <div className="text-xs text-[#a6d0f2]">Satisfaction Rate</div>
                  <div className="text-2xl font-semibold mt-2">95%</div>
                </div>

                <div className="bg-[#06263f]/60 p-4 rounded-xl">
                  <div className="text-xs text-[#a6d0f2]">Referral Tracking</div>
                  <div className="text-2xl font-semibold mt-2">9.3</div>
                </div>

                <div className="bg-[#06263f]/60 p-4 rounded-xl">
                  <div className="text-xs text-[#a6d0f2]">Active Users</div>
                  <div className="text-2xl font-semibold mt-2">32,984</div>
                </div>
              </div>
            </div>

            <div className="col-span-5 grid grid-rows-2 gap-4">
              <div className="bg-gradient-to-br from-[#06243f] to-[#07304a] rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-[#9fc6ec]">Sales overview</div>
                    <div className="text-sm text-[#cfe6fb] mt-2">(+23%) than last month</div>
                  </div>
                  <div className="text-sm text-[#9fc6ec]">Export</div>
                </div>

                <div className="mt-4 h-28 bg-gradient-to-r from-[#031827] to-[#04283b] rounded-lg flex items-center justify-center text-xs text-[#6aa0d2]">[Area chart placeholder]</div>
              </div>

              <div className="bg-gradient-to-br from-[#06243f] to-[#07304a] rounded-2xl p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-[#9fc6ec]">Active Users</div>
                    <div className="text-sm text-[#cfe6fb]">Users last 7 days</div>
                  </div>
                  <div className="text-2xl font-semibold">2,400</div>
                </div>

                <div className="mt-4 h-20 rounded-lg bg-[#031827] flex items-center justify-center text-xs text-[#6aa0d2]">[Bar chart placeholder]</div>
              </div>
            </div>
          </section>

          {/* Large graphs */}
          <section className="grid grid-cols-12 gap-4 mb-6">
            <div className="col-span-8 bg-gradient-to-br from-[#05243a] to-[#082f4b] rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold">Sales overview</h3>
                  <p className="text-xs text-[#9fc6ec] mt-1">(Monthly)</p>
                </div>
                <div className="text-xs text-[#9fc6ec]">This year</div>
              </div>

              <div className="mt-4 h-44 rounded-lg bg-[#021729] flex items-center justify-center text-xs text-[#6aa0d2]">[Large area chart]</div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="p-4 bg-[#032335]/40 rounded-lg">Users<br/><span className="font-semibold">32,984</span></div>
                <div className="p-4 bg-[#032335]/40 rounded-lg">Clicks<br/><span className="font-semibold">2.42m</span></div>
                <div className="p-4 bg-[#032335]/40 rounded-lg">Sales<br/><span className="font-semibold">2,400</span></div>
              </div>
            </div>

            <div className="col-span-4 bg-gradient-to-br from-[#05243a] to-[#082f4b] rounded-2xl p-6">
              <h3 className="text-sm font-semibold">Orders overview</h3>
              <div className="mt-4 space-y-3 text-xs text-[#cfe6fb]">
                <div className="flex justify-between"><span>#MSP-2041</span><span className="text-sm text-[#9fc6ec]">$14,000</span></div>
                <div className="flex justify-between"><span>#MSP-2042</span><span className="text-sm text-[#9fc6ec]">$6,500</span></div>
                <div className="flex justify-between"><span>#MSP-2043</span><span className="text-sm text-[#9fc6ec]">$3,200</span></div>
              </div>
            </div>
          </section>

          {/* Projects + table */}
          <section className="grid grid-cols-12 gap-4">
            <div className="col-span-8 bg-gradient-to-br from-[#04263b] to-[#072f47] rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-semibold">Projects</h4>
                <div className="text-xs text-[#9fc6ec]">This month</div>
              </div>

              <div className="space-y-4">
                {[
                  {name:'Chakra UI Version', budget:'$14,000', completion: '60%'},
                  {name:'Add Progress Track', budget:'$5,000', completion: '10%'},
                  {name:'Fix Platform Errors', budget:'$1,000', completion: '100%'}
                ].map(p=> (
                  <div key={p.name} className="flex items-center justify-between bg-[#021a2a]/40 p-4 rounded-lg">
                    <div>
                      <div className="text-sm font-medium">{p.name}</div>
                      <div className="text-xs text-[#9fc6ec]">by Creative Tim</div>
                    </div>
                    <div className="text-sm text-[#9fc6ec]">{p.budget}</div>
                    <div className="text-sm font-semibold">{p.completion}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-4 bg-gradient-to-br from-[#04263b] to-[#072f47] rounded-2xl p-6">
              <h4 className="text-sm font-semibold">Orders overview</h4>
              <ul className="mt-4 space-y-3 text-xs text-[#cfe6fb]">
                <li>#MSP-2213 — New order placed</li>
                <li>#MSP-2021 — Payment successful</li>
                <li>#MSP-1987 — Order shipped</li>
              </ul>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
