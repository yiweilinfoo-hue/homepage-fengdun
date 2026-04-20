import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

const replacements = [
  ['bg-[#F8FAFC]', 'bg-transparent'],
  ['text-gray-900', 'text-text-main'],
  ['text-gray-800', 'text-text-main'],
  ['text-gray-600', 'text-text-secondary'],
  ['text-gray-500', 'text-text-secondary'],
  ['text-gray-400', 'text-text-muted'],
  ['text-blue-600', 'text-primary'],
  ['bg-blue-600', 'bg-primary'],
  ['text-blue-500', 'text-primary'],
  ['bg-blue-500', 'bg-primary'],
  ['bg-blue-50', 'bg-[#F8FAFF]'],
  ['bg-purple-50', 'bg-[#F8FAFF]'],
  ['bg-orange-50', 'bg-[#F8FAFF]'],
  ['bg-teal-50', 'bg-[#F8FAFF]'],
  ['bg-red-50', 'bg-[#F8FAFF]'],
  ['bg-gray-50', 'bg-[#F8FAFF]'],
  [/hover:text-blue-600/g, 'hover:text-primary'],
  [/group-hover:text-blue-600/g, 'group-hover:text-primary'],
  [/group-hover:text-blue-700/g, 'group-hover:text-primary'],
  [/border-blue-100/g, 'border-primary/20'],
  [/border-blue-200/g, 'border-primary/30'],
  [/border-gray-50/g, 'border-white/60'],
  [/border-gray-100/g, 'border-white/60'],
  [/shadow-\[0_2px_10px_rgba\(0,0,0,0\.04\)\]/g, 'shadow-card border border-white/60'],
  [/shadow-\[0_4px_20px_rgba\(0,0,0,0\.03\)\]/g, 'shadow-card border border-white/60'],
  [/hover:shadow-\[0_8px_20px_rgba\(74,108,247,0\.1\)\]/g, 'hover:shadow-card-hover hover:-translate-y-[2px]'],
  [/hover:shadow-\[0_8px_30px_rgba\(74,108,247,0\.08\)\]/g, 'hover:shadow-card-hover hover:-translate-y-[2px]'],
  [/hover:shadow-\[0_8px_30px_rgba\(74,108,247,0\.15\)\]/g, 'hover:shadow-card-hover hover:-translate-y-[2px]'],
  [/bg-gradient-to-br from-\[#F8FAFC\] via-\[#F1F5F9\] to-white/g, 'bg-[image:var(--bg-gradient)]'],
  [/bg-gradient-to-b from-\[#F8FAFF\] to-white/g, 'bg-white'],
  [/text-\[10px\] px-2 py-0\.5 rounded border border-\[#F0F0F0\] text-text-muted bg-white/g, 'text-[11px] bg-[#EEEEEE] text-[#888888] px-[8px] py-[2px] rounded-[10px] ml-2 font-normal border-0'],
  [/inline-block text-\[10px\] px-2 py-0\.5 rounded bg-\[#F8FAFF\] text-text-secondary/g, 'inline-block text-[11px] bg-[#EEEEEE] text-[#888888] px-[8px] py-[2px] rounded-[10px] font-normal'],
  [/className="text-lg font-bold text-text-main"/g, 'className="text-[16px] font-semibold text-text-main flex items-center before:content-[\'\'] before:w-1 before:h-4 before:bg-primary before:mr-[10px] before:rounded-[2px]"'],
  [/className="text-xl font-semibold mb-6 text-text-main flex items-center gap-3/g, 'className="text-[16px] font-semibold mb-6 text-text-main flex items-center gap-3 before:content-[\'\'] before:w-1 before:h-4 before:bg-primary before:mr-[10px] before:rounded-[2px]'],
  [/className="bg-white rounded-xl shadow-card-hover p-4 border border-primary\/20/g, 'className="bg-white rounded-xl shadow-card p-4 border-2 border-primary'],
  [/className="absolute inset-0 bg-gray-900\/40 backdrop-blur-sm"/g, 'className="absolute inset-0 bg-black/40 backdrop-blur-none"'],
];

for (const [search, replace] of replacements) {
  content = content.replaceAll(search, replace);
}

fs.writeFileSync('src/App.tsx', content);
