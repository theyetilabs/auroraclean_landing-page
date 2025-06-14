interface StatsCardProps {
  number: string;
  label: string;
}

export default function StatsCard({ number, label }: StatsCardProps) {
  return (
    <div className="p-6 rounded-lg bg-[#01401e] text-white">
      <h3 className="text-3xl md:text-4xl font-bold mb-2">{number}</h3>
      <p className="text-gray-200">{label}</p>
    </div>
  );
}
