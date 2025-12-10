import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RTooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  Download,
  FileText,
  Moon,
  Sun,
  Languages,
  CreditCard,
  X,
  Bell,
} from "lucide-react";

type LangKey = "en" | "te";

const i18n: Record<LangKey, Record<string, string>> = {
  en: {
    title: "Fee Structure 2025–26",
    sub: "Detailed fee structure with installments & scholarships",
    filterAll: "All Classes",
    searchPh: "Search (e.g., Class 9)",
    tuition: "Tuition",
    transport: "Transport",
    total: "Total",
    installment: "Installment Plan",
    offers: "Special Offers",
    offer1: "Early Bird Discount: 10% off if paid before June 30",
    offer2: "Sibling Concession: 15% discount for 2nd child",
    offer3: "Full Payment Bonus: 5% cashback on full payment",
    scholarships: "Scholarships",
    schol1: "Merit-based up to 50% waiver",
    schol2: "Sports quota scholarships",
    schol3: "Financial aid for EWS students",
    download: "Download PDF",
    apply: "Apply for Scholarship",
    calcTitle: "Scholarship Calculator",
    marksLabel: "Enter last exam percentage",
    calcBtn: "Calculate",
    result: "Eligible Scholarship",
    faq: "Frequently Asked Questions",
    q1: "Can we pay in installments?",
    a1: "Yes, fees can be paid in 3 installments.",
    q2: "Is transport mandatory?",
    a2: "No, transport is optional and charged separately.",
    q3: "Do you provide online payment options?",
    a3: "Yes, UPI, NetBanking, and Card payments are accepted.",
    payNow: "Pay Now",
    payTitle: "Make a Payment",
    payNote: "This is a demo payment modal.",
    close: "Close",
    alerts: "Reminders",
    alert1: "2nd Installment due in 7 days",
    chartBreakdown: "Fee Breakdown",
    chartCompare: "Compare Totals",
  },
  te: {
    title: "ఫీజు నిర్మాణం 2025–26",
    sub: "ఇన్‌స్టాల్‌మెంట్స్ & స్కాలర్‌షిప్స్‌తో పూర్తి ఫీజు వివరాలు",
    filterAll: "అన్ని తరగతులు",
    searchPh: "సెర్చ్ (ఉదా: క్లాస్ IX)",
    tuition: "ట్యూషన్",
    transport: "రవాణా",
    total: "మొత్తం",
    installment: "ఇన్‌స్టాల్‌మెంట్ ప్లాన్",
    offers: "ప్రత్యేక ఆఫర్లు",
    offer1: "జూన్ 30లోపు చెల్లిస్తే 10% డిస్కౌంట్",
    offer2: "సిబ్లింగ్ కన్సెషన్: 15% డిస్కౌంట్",
    offer3: "ఫుల్ పేమెంట్ చేస్తే 5% క్యాష్‌బ్యాక్",
    scholarships: "స్కాలర్‌షిప్స్",
    schol1: "మెరిట్ ఆధారంగా 50% వరకు",
    schol2: "స్పోర్ట్స్ కోటా స్కాలర్‌షిప్స్",
    schol3: "EWS విద్యార్థులకు ఆర్థిక సాయం",
    download: "PDF డౌన్‌లోడ్",
    apply: "స్కాలర్‌షిప్ అప్లై",
    calcTitle: "స్కాలర్‌షిప్ కాలిక్యులేటర్",
    marksLabel: "గత పరీక్ష శాతం ఇవ్వండి",
    calcBtn: "క్యాలిక్యులేట్",
    result: "అర్హత స్కాలర్‌షిప్",
    faq: "తరచుగా అడిగే ప్రశ్నలు",
    q1: "ఇన్‌స్టాల్‌మెంట్స్‌లో చెల్లించవచ్చా?",
    a1: "అవును, 3 ఇన్‌స్టాల్‌మెంట్స్‌లో చెల్లించవచ్చు.",
    q2: "రవాణా తప్పనిసరినా?",
    a2: "కాదు, ఐచ్చికం. వేరుగా ఛార్జ్ అవుతుంది.",
    q3: "ఆన్‌లైన్ చెల్లింపు అందుబాటులోదా?",
    a3: "అవును, UPI/నెట్‌బ్యాంకింగ్/కార్డు తీసుకుంటాం.",
    payNow: "ఇప్పుడు చెల్లించండి",
    payTitle: "పేమెంట్",
    payNote: "ఇది డెమో పేమెంట్ మోడల్ మాత్రమే.",
    close: "క్లోజ్",
    alerts: "రిమైండర్లు",
    alert1: "2వ ఇన్‌స్టాల్‌మెంట్ 7 రోజుల్లో డ్యూ",
    chartBreakdown: "ఫీజు బ్రేక్‌డౌన్",
    chartCompare: "మొత్తాల పోలిక",
  },
};

const COLORS = ["#6366F1", "#22C55E", "#F59E0B", "#EF4444", "#06B6D4"];

export default function FeeStructure() {
  const [dark, setDark] = useState(false);
  const [lang, setLang] = useState<LangKey>("en");
  const t = i18n[lang];

  const [selectedClass, setSelectedClass] = useState("All");
  const [search, setSearch] = useState("");
  const [marks, setMarks] = useState<string>("");
  const [calcOut, setCalcOut] = useState<string>("");
  const [payOpen, setPayOpen] = useState(false);

  // base data
  const fees = [
    { course: "Nursery - UKG", key: "Nursery", tuition: 15000, transport: 6000 },
    { course: "Class I - V", key: "Class I", tuition: 20000, transport: 7000 },
    { course: "Class VI - VIII", key: "Class VI", tuition: 25000, transport: 8000 },
    { course: "Class IX - X", key: "Class IX", tuition: 30000, transport: 9000 },
    { course: "Intermediate", key: "Intermediate", tuition: 35000, transport: 10000 },
  ];

  // filter + search
  const filtered = useMemo(() => {
    return fees
      .filter((f) => (selectedClass === "All" ? true : f.course.includes(selectedClass)))
      .filter((f) => f.course.toLowerCase().includes(search.toLowerCase()));
  }, [fees, selectedClass, search]);

  // totals for charts
  const breakdownData = useMemo(() => {
    const tuition = filtered.reduce((a, c) => a + c.tuition, 0);
    const transport = filtered.reduce((a, c) => a + c.transport, 0);
    return [
      { name: i18n[lang].tuition, value: tuition },
      { name: i18n[lang].transport, value: transport },
    ];
  }, [filtered, lang]);

  const compareData = useMemo(
    () =>
      fees.map((f) => ({
        name: f.course,
        total: f.tuition + f.transport,
      })),
    [fees]
  );

  const calcScholarship = () => {
    const m = Number(marks);
    if (isNaN(m)) return setCalcOut("Enter valid %");
    let res = "No scholarship";
    if (m >= 95) res = "50% waiver";
    else if (m >= 90) res = "40% waiver";
    else if (m >= 80) res = "25% waiver";
    else if (m >= 70) res = "10% waiver";
    setCalcOut(res);
  };

  const printPDF = () => {
    window.print();
  };

  return (
    <div className={`${dark ? "bg-neutral-900 text-white" : "bg-gradient-to-r from-blue-50 to-indigo-100 text-neutral-900"} min-h-screen`}>
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Header row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <motion.h1
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t.title}
          </motion.h1>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang((p) => (p === "en" ? "te" : "en"))}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl border ${dark ? "border-white/20" : "border-black/10"} hover:scale-[1.02] transition`}
              title="Language"
            >
              <Languages size={16} /> {lang.toUpperCase()}
            </button>
            <button
              onClick={() => setDark((p) => !p)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl border ${dark ? "border-white/20" : "border-black/10"} hover:scale-[1.02] transition`}
              title="Theme"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
              {dark ? "Light" : "Dark"}
            </button>
          </div>
        </div>

        <p className={`mb-8 ${dark ? "text-white/70" : "text-neutral-600"}`}>{t.sub}</p>

        {/* Alerts */}
        <div className={`flex items-center gap-2 mb-6 rounded-xl px-4 py-3 ${dark ? "bg-yellow-500/10 border border-yellow-500/30" : "bg-yellow-50 border border-yellow-200"}`}>
          <Bell className={`${dark ? "text-yellow-400" : "text-yellow-600"}`} size={18} />
          <span>{t.alert1}</span>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4 mb-8">
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className={`px-3 py-2 rounded-xl border w-full md:w-56 ${dark ? "bg-neutral-800 border-white/20" : "bg-white border-neutral-200"} focus:outline-none`}
          >
            <option value="All">{t.filterAll}</option>
            <option value="Nursery">Nursery - UKG</option>
            <option value="Class I">Class I - V</option>
            <option value="Class VI">Class VI - VIII</option>
            <option value="Class IX">Class IX - X</option>
            <option value="Intermediate">Intermediate</option>
          </select>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.searchPh}
            className={`px-3 py-2 rounded-xl border flex-1 ${dark ? "bg-neutral-800 border-white/20 placeholder-white/40" : "bg-white border-neutral-200 placeholder-neutral-400"} focus:outline-none`}
          />

          <div className="flex gap-3">
            <button
              onClick={printPDF}
              className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700"
            >
              <Download size={16} /> {t.download}
            </button>
            <button
              onClick={() => setPayOpen(true)}
              className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-xl hover:bg-emerald-700"
            >
              <CreditCard size={16} /> {t.payNow}
            </button>
          </div>
        </div>

        {/* Cards – horizontal scroll on mobile */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]">
          <style>{`.no-scrollbar::-webkit-scrollbar{display:none}`}</style>
          <AnimatePresence>
            {filtered.map((item) => {
              const total = item.tuition + item.transport;
              const installment = Math.round(total / 3);
              return (
                <motion.div
                  key={item.course}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`${dark ? "bg-neutral-800 border-white/10" : "bg-white border-neutral-200"} relative border rounded-2xl p-6 shadow-md hover:shadow-xl transition`}
                >
                  <div className="absolute -top-3 -right-3 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow">
                    {t.chartBreakdown}
                  </div>

                  <h2 className="text-xl font-semibold mb-3 text-indigo-600">
                    {item.course}
                  </h2>
                  <p>
                    <span className="font-semibold">{t.tuition}:</span> ₹{item.tuition.toLocaleString("en-IN")}
                  </p>
                  <p>
                    <span className="font-semibold">{t.transport}:</span> ₹{item.transport.toLocaleString("en-IN")}
                  </p>
                  <p className="font-bold text-emerald-600 mt-2">
                    {t.total}: ₹{total.toLocaleString("en-IN")}
                  </p>
                  <p className={`${dark ? "text-white/60" : "text-neutral-600"} text-sm mt-1`}>
                    {t.installment}: ₹{installment.toLocaleString("en-IN")} × 3
                  </p>

                  {/* tiny pie per-card */}
                  <div className="mt-4 h-32">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          dataKey="value"
                          data={[
                            { name: t.tuition, value: item.tuition },
                            { name: t.transport, value: item.transport },
                          ]}
                          innerRadius={30}
                          outerRadius={50}
                          paddingAngle={2}
                        >
                          {[0, 1].map((i) => (
                            <Cell key={i} fill={COLORS[i % COLORS.length]} />
                          ))}
                        </Pie>
                        <RTooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Charts row */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {/* Global breakdown pie */}
          <div className={`${dark ? "bg-neutral-800 border-white/10" : "bg-white border-neutral-200"} border rounded-2xl p-5 shadow`}>
            <h3 className="font-semibold mb-3">{t.chartBreakdown}</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={breakdownData} dataKey="value" nameKey="name" outerRadius={100}>
                    {breakdownData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                  <RTooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Compare bar */}
          <div className={`${dark ? "bg-neutral-800 border-white/10" : "bg-white border-neutral-200"} border rounded-2xl p-5 shadow`}>
            <h3 className="font-semibold mb-3">{t.chartCompare}</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={compareData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <RTooltip />
                  <Legend />
                  <Bar dataKey="total" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Offers & Scholarships */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className={`${dark ? "bg-neutral-800 border-white/10" : "bg-white border-neutral-200"} border rounded-2xl p-5 shadow`}>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <FileText size={18} /> {t.offers}
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>{t.offer1}</li>
              <li>{t.offer2}</li>
              <li>{t.offer3}</li>
            </ul>
          </div>

          <div className={`${dark ? "bg-neutral-800 border-white/10" : "bg-white border-neutral-200"} border rounded-2xl p-5 shadow`}>
            <h3 className="font-semibold mb-4">{t.scholarships}</h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>{t.schol1}</li>
              <li>{t.schol2}</li>
              <li>{t.schol3}</li>
            </ul>
            <button className="mt-4 px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700">
              {t.apply}
            </button>
          </div>
        </div>

        {/* Calculator */}
        <div className={`${dark ? "bg-neutral-800 border-white/10" : "bg-white border-neutral-200"} border rounded-2xl p-6 shadow mt-10`}>
          <h3 className="font-semibold mb-4">{t.calcTitle}</h3>
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            <input
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
              placeholder={t.marksLabel}
              className={`px-3 py-2 rounded-xl border flex-1 ${dark ? "bg-neutral-800 border-white/20 placeholder-white/40" : "bg-white border-neutral-200 placeholder-neutral-400"} focus:outline-none`}
            />
            <button
              onClick={calcScholarship}
              className="px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700"
            >
              {t.calcBtn}
            </button>
          </div>
          {calcOut && (
            <p className="mt-3 font-medium">
              {t.result}: <span className="text-emerald-600">{calcOut}</span>
            </p>
          )}
        </div>

        {/* FAQ */}
        <div className={`${dark ? "bg-neutral-800 border-white/10" : "bg-white border-neutral-200"} border rounded-2xl p-6 shadow mt-10`}>
          <h3 className="font-semibold mb-4">{t.faq}</h3>
          <div className="space-y-3">
            <details className={`${dark ? "bg-neutral-900" : "bg-neutral-50"} rounded-xl p-4`}>
              <summary className="cursor-pointer font-medium">{t.q1}</summary>
              <p className="mt-2 opacity-80">{t.a1}</p>
            </details>
            <details className={`${dark ? "bg-neutral-900" : "bg-neutral-50"} rounded-xl p-4`}>
              <summary className="cursor-pointer font-medium">{t.q2}</summary>
              <p className="mt-2 opacity-80">{t.a2}</p>
            </details>
            <details className={`${dark ? "bg-neutral-900" : "bg-neutral-50"} rounded-xl p-4`}>
              <summary className="cursor-pointer font-medium">{t.q3}</summary>
              <p className="mt-2 opacity-80">{t.a3}</p>
            </details>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      <AnimatePresence>
        {payOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          >
            <motion.div
              initial={{ scale: 0.95, y: 12, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 12, opacity: 0 }}
              className={`${dark ? "bg-neutral-900 text-white" : "bg-white text-neutral-900"} w-[95%] max-w-md rounded-2xl p-6 shadow-2xl`}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold">{t.payTitle}</h4>
                <button
                  onClick={() => setPayOpen(false)}
                  className="p-2 rounded-lg hover:bg-neutral-200/50 dark:hover:bg-white/10"
                  aria-label={t.close}
                >
                  <X size={18} />
                </button>
              </div>

              <p className={`${dark ? "text-white/70" : "text-neutral-600"} mb-4`}>
                {t.payNote}
              </p>

              <div className="space-y-3">
                <input
                  placeholder="Student Name"
                  className={`w-full px-3 py-2 rounded-xl border ${dark ? "bg-neutral-800 border-white/20" : "bg-white border-neutral-200"}`}
                />
                <input
                  placeholder="Amount (₹)"
                  className={`w-full px-3 py-2 rounded-xl border ${dark ? "bg-neutral-800 border-white/20" : "bg-white border-neutral-200"}`}
                />
                <select
                  className={`w-full px-3 py-2 rounded-xl border ${dark ? "bg-neutral-800 border-white/20" : "bg-white border-neutral-200"}`}
                >
                  <option>UPI</option>
                  <option>NetBanking</option>
                  <option>Debit/Credit Card</option>
                </select>
              </div>

              <div className="mt-5 flex justify-end gap-2">
                <button
                  onClick={() => setPayOpen(false)}
                  className={`${dark ? "bg-neutral-700 hover:bg-neutral-600" : "bg-neutral-200 hover:bg-neutral-300"} px-4 py-2 rounded-xl`}
                >
                  {t.close}
                </button>
                <button
                  onClick={() => {
                    setPayOpen(false);
                    alert("Payment successful (demo)!");
                  }}
                  className="px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  {t.payNow}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
