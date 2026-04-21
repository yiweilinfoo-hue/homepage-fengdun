const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// The modal contains text like:
// <div>
//   <div className="text-[14px] font-medium text-text-main">...</div>
//   <div className="text-[12px] text-text-secondary mt-1">...</div>
// </div>
// or
// <div>
//   <div className="text-[13px] font-medium text-text-main mb-1">...</div>
//   <div className="text-[11px] text-primary flex items-center gap-0.5 opacity-90">查看 <ChevronRight className="w-3 h-3" /></div>
// </div>

// We need to add flex-1 pr-2 to the wrapper div to ensure it can shrink
content = content.replace(/<div className="bg-\[#F0F4FC\] p-(3|4) rounded-xl flex (.*?)>(\s*)<div>/g, '<div className="bg-[#F0F4FC] p-$1 rounded-xl flex $2>$3<div className="flex-1 pr-2 min-w-0">');

// Add break-words leading-snug to the inner text wrappers
content = content.replace(/className="(text-\[1[34]px\] font-medium text-text-main[^"]*)"/g, 'className="$1 break-words leading-snug"');
content = content.replace(/className="(text-\[12px\] text-text-secondary[^"]*)"/g, 'className="$1 break-words leading-snug"');

fs.writeFileSync('src/App.tsx', content);
