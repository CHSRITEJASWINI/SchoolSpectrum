import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectItem, SelectContent } from "@/components/ui/select";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function Scholarships() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [dark, setDark] = useState(false);

  const scholarships = [
    { id: 1, name: "Merit Scholarship", eligibility: "90%+ marks", amount: "₹50,000", type: "merit", deadline: "30 Sep 2025" },
    { id: 2, name: "Sports Scholarship", eligibility: "State/National level", amount: "₹40,000", type: "sports", deadline: "15 Oct 2025" },
    { id: 3, name: "Need-based Scholarship", eligibility: "Annual income < 2L", amount: "₹60,000", type: "need", deadline: "25 Nov 2025" },
  ];

  const filtered = scholarships.filter(s =>
    (filter === "all" || s.type === filter) &&
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`p-8 min-h-screen ${dark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">🎓 Scholarships</h1>
        <Button onClick={() => setDark(!dark)}>{dark ? "☀️ Light" : "🌙 Dark"}</Button>
      </div>

      {/* Search + Filter */}
      <div className="flex gap-4 mb-6">
        <Input placeholder="Search scholarships..." value={search} onChange={e => setSearch(e.target.value)} />
        <Select onValueChange={setFilter} defaultValue="all">
          <SelectTrigger>Filter</SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="merit">Merit</SelectItem>
            <SelectItem value="sports">Sports</SelectItem>
            <SelectItem value="need">Need-based</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Scholarship Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map(s => (
          <motion.div key={s.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-4">
                <h2 className="text-xl font-bold mb-2">{s.name}</h2>
                <p>📌 Eligibility: {s.eligibility}</p>
                <p>💰 Amount: {s.amount}</p>
                <p>📅 Deadline: {s.deadline}</p>
                <Button className="mt-3 w-full">Apply Now</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Timeline */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">⏳ Scholarship Process</h2>
        <ol className="relative border-l-2 border-blue-500 ml-4">
          {['Application Submitted', 'Verification', 'Approval', 'Disbursement'].map((step, i) => (
            <li key={i} className="mb-8 ml-4">
              <span className="absolute -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">{i+1}</span>
              <p className="ml-4 font-semibold">{step}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Success Stories */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">🌟 Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card><CardContent className="p-4">“This scholarship helped me continue my studies without financial stress.” – Teju</CardContent></Card>
          <Card><CardContent className="p-4">“Thanks to the Sports Scholarship, I could balance both academics & training.” – lucky</CardContent></Card>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">❓ FAQs</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="q1">
            <AccordionTrigger>Who can apply?</AccordionTrigger>
            <AccordionContent>Any eligible student with required documents.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>What docs are needed?</AccordionTrigger>
            <AccordionContent>Marksheet, ID proof, income certificate, etc.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>How is selection done?</AccordionTrigger>
            <AccordionContent>Based on eligibility, merit, and verification.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Important Dates */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">📅 Important Dates</h2>
        <ul className="grid md:grid-cols-3 gap-4">
          {scholarships.map(s => (
            <li key={s.id} className="bg-yellow-100 dark:bg-yellow-700 p-3 rounded-lg shadow">
              <p className="font-bold">{s.name}</p>
              <p>Deadline: {s.deadline}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
