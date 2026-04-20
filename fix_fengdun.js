import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Update 风险防控 block structure
content = content.replace(
  /<div \n          onClick=\{\(\) => onNavigate\('risk-control'\)\}[\s\S]*?className="absolute inset-0 bg-gradient-to-br from-blue-50\/0 to-blue-50\/50 opacity-0 group-hover:opacity-100 transition-opacity"><\/div>\n          \n          <div className="relative z-10 flex items-center justify-between mb-6">\n            <div className="flex items-center gap-3">\n              <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-md shadow-blue-200">\n                <Shield className="w-5 h-5" \/>\n              <\/div>\n              <h2 className="text-lg font-bold text-text-main group-hover:text-primary transition-colors">风险防控<\/h2>\n            <\/div>\n            <div className="w-8 h-8 rounded-full bg-\[\#F8FAFF\] flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">\n               <ChevronRight className="w-4 h-4" \/>\n            <\/div>\n          <\/div>/g,
  `<div 
          onClick={() => onNavigate('risk-control')}
          className="bg-white rounded-[12px] p-[24px] shadow-card border border-white/60 hover:shadow-card-hover hover:-translate-y-[2px] transition-all duration-300 group cursor-pointer relative overflow-hidden"
        >
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-[16px] font-semibold text-text-main flex items-center before:content-[''] before:w-1 before:h-4 before:bg-primary before:mr-[10px] before:rounded-[2px]">风险防控</h2>
            <a className="font-sans text-[12px] text-primary no-underline absolute right-6 top-6">查看 &gt;</a>
          </div>`
);

content = content.replace(
  /<div className="bg-white rounded-2xl p-6 shadow-card border border-white\/60 border border-white\/60 hover:shadow-card-hover hover:-translate-y-\[2px\] transition-all duration-300 group">\n          <div className="flex items-center gap-3 mb-6">\n            <div className="w-10 h-10 rounded-xl bg-\[\#F8FAFF\] text-purple-600 flex items-center justify-center">\n              <Users className="w-5 h-5" \/>\n            <\/div>\n            <h2 className="text-\[16px\] font-semibold text-text-main flex items-center before:content-\[''\] before:w-1 before:h-4 before:bg-primary before:mr-\[10px\] before:rounded-\[2px\]">风险智库<\/h2>\n          <\/div>/g,
  `<div className="bg-white rounded-[12px] p-[24px] shadow-card border border-white/60 hover:shadow-card-hover hover:-translate-y-[2px] transition-all duration-300 group">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-[16px] font-semibold text-text-main flex items-center before:content-[''] before:w-1 before:h-4 before:bg-primary before:mr-[10px] before:rounded-[2px]">风险智库</h2>
            <a href="#" className="font-sans text-[12px] text-primary no-underline absolute right-6 top-6">查看 &gt;</a>
          </div>`
);

content = content.replace(
  /<div className="bg-white rounded-2xl p-6 shadow-card border border-white\/60 border border-white\/60 hover:shadow-card-hover hover:-translate-y-\[2px\] transition-all duration-300 group">\n          <div className="flex items-center gap-3 mb-6">\n            <div className="w-10 h-10 rounded-xl bg-\[\#F8FAFF\] text-teal-600 flex items-center justify-center">\n              <Wrench className="w-5 h-5" \/>\n            <\/div>\n            <h2 className="text-\[16px\] font-semibold text-text-main flex items-center before:content-\[''\] before:w-1 before:h-4 before:bg-primary before:mr-\[10px\] before:rounded-\[2px\]">提效工具<\/h2>\n          <\/div>/g,
  `<div className="bg-white rounded-[12px] p-[24px] shadow-card border border-white/60 hover:shadow-card-hover hover:-translate-y-[2px] transition-all duration-300 group">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-[16px] font-semibold text-text-main flex items-center before:content-[''] before:w-1 before:h-4 before:bg-primary before:mr-[10px] before:rounded-[2px]">提效工具</h2>
            <a href="#" className="font-sans text-[12px] text-primary no-underline absolute right-6 top-6">查看 &gt;</a>
          </div>`
);

// Module list replacements
content = content.replace(
  /className="p-4 rounded-xl bg-\[\#F8FAFF\] border border-white\/60 flex items-center justify-between cursor-pointer hover:border-purple-200 hover:bg-purple-50\/30 transition-colors group\/item"/g,
  'className="p-[12px_16px] bg-[#F8FAFF] rounded-[8px] flex justify-between items-center cursor-pointer hover:bg-[#F0F4FF] mt-3 transition-colors group/item"'
);
content = content.replace(
  /className="p-4 rounded-xl bg-\[\#F8FAFF\] border border-white\/60 flex items-center justify-between cursor-pointer hover:border-teal-200 hover:bg-teal-50\/30 transition-colors group\/item"/g,
  'className="p-[12px_16px] bg-[#F8FAFF] rounded-[8px] flex justify-between items-center cursor-pointer hover:bg-[#F0F4FF] mt-3 transition-colors group/item"'
);
content = content.replace(/mt-3 transition-colors group\/item/g, 'mb-3 transition-colors group/item');

fs.writeFileSync('src/App.tsx', content);
console.log('Fengdun fixed');
