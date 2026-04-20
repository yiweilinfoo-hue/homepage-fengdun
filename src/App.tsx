import React, { useState } from 'react';
import { ChevronRight, ArrowUpRight, Box, ShieldAlert, BookOpen, Wrench, AlertTriangle, FileText, Users, Building, AlertCircle, Play, UserX, UserMinus, Gavel, X, Activity, ChevronDown, ArrowRightLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Shared Components ---

function TopNav() {
  return (
    <nav className="flex items-center px-6 h-[60px] bg-white border-b border-[#E9EDFF] sticky top-0 z-10 w-full shadow-sm">
      <div className="flex items-center gap-12">
        {/* Logo Group */}
        <div className="flex items-center gap-3">
          <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Top Cyan Face */}
            <path d="M16 2L2 10L16 18L30 10L16 2Z" fill="#22D3EE"/>
            {/* Left Dark Blue Face */}
            <path d="M2 10V22L16 30V18L2 10Z" fill="#1E3A8A"/>
            {/* Right Blue Face */}
            <path d="M30 10V22L16 30V18L30 10Z" fill="#2563EB"/>
            {/* Outline highlight for wireframe effect */}
            <path d="M16 2L2 10L16 18M16 2L30 10L16 18M16 18V30M2 10V22L16 30M30 10V22L16 30" stroke="white" strokeWidth="1" strokeLinejoin="round"/>
          </svg>
          <div className="font-bold text-[19px] text-[#222B45] tracking-wider">
            智策平台
          </div>
          <ArrowRightLeft className="w-[14px] h-[14px] text-gray-500 ml-1" />
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-[36px] text-[15px] font-medium text-[#4B5563]">
          <button className="text-primary font-medium">
            智策首页
          </button>
          <button className="flex items-center gap-1 hover:text-primary transition-colors">
            主题分析 <ChevronDown className="w-4 h-4 text-gray-400 stroke-[2.5]" />
          </button>
          <button className="flex items-center gap-1 hover:text-primary transition-colors">
            数据服务 <ChevronDown className="w-4 h-4 text-gray-400 stroke-[2.5]" />
          </button>
          <button className="flex items-center gap-1 hover:text-primary transition-colors">
            后台配置 <ChevronDown className="w-4 h-4 text-gray-400 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </nav>
  );
}

// --- Page 1: Home Page ---

const LeafNode = ({ title, desc }: { title: string, desc?: string }) => (
  <div className="bg-[#F4F7FF] p-[8px_10px] rounded flex justify-between items-center transition-colors border border-transparent hover:border-primary/20 min-w-0 shadow-[0_1px_2px_rgba(74,108,247,0.05)] w-full cursor-pointer">
    <div className="flex flex-col justify-center gap-1.5 truncate pr-2">
      <span className="text-[12px] font-medium text-text-main leading-none truncate">{title}</span>
      {desc ? (
        <span className="text-[10px] text-text-secondary leading-none truncate">{desc}</span>
      ) : (
        <span className="text-[10px] text-primary font-medium flex items-center gap-0.5 opacity-90 leading-none">查看 <ChevronRight className="w-[10px] h-[10px]" /></span>
      )}
    </div>
    <div className="flex-shrink-0 flex items-center justify-center bg-blue-100/40 w-[24px] h-[24px] rounded">
      {desc ? <ChevronRight className="w-[12px] h-[12px] text-primary opacity-80" /> : <Box className="w-[12px] h-[12px] text-primary opacity-80" fill="currentColor" />}
    </div>
  </div>
);

function HomePage() {
  const tools = [
    { title: 'H线知识门户', desc: '线上化学习平台' },
    { title: '多元评价体系', desc: 'HR管理工作台' },
    { title: '薪助手', desc: '外部薪酬采集、分析' },
    { title: '线堂教育', desc: '学习发展平台' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -10 }}
      className="p-8 max-w-7xl mx-auto"
    >
      {/* 常用工具 */}
      <section className="mb-12">
        <h2 className="text-center text-xl font-semibold mb-6 text-text-main">常用工具</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {tools.map((tool, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl shadow-card border border-white/60 hover:shadow-card-hover hover:-translate-y-[2px] transition-all duration-300 group cursor-pointer border border-transparent hover:border-primary/20 flex flex-col justify-between min-h-[120px]">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-text-main group-hover:text-primary transition-colors">{tool.title}</h3>
                  <div className="w-6 h-6 rounded-full bg-[#F8FAFF] flex items-center justify-center">
                    <Box className="w-3.5 h-3.5 text-primary" />
                  </div>
                </div>
                <p className="text-xs text-text-secondary">{tool.desc}</p>
              </div>
              <div className="flex items-center text-primary text-xs font-medium mt-4 opacity-80 group-hover:opacity-100">
                查看 <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 主题分析 */}
      <section className="mb-12">
        <h2 className="text-center text-xl font-semibold mb-6 text-text-main">主题分析</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-4">
          {/* Mock columns for other topics */}
          <div className="bg-[#FAFCFF] rounded-xl shadow-card border border-white/60 p-[20px] flex flex-col gap-4 min-h-[400px]">
             <h3 className="text-[15px] font-bold text-text-main mb-1">组织发展</h3>
             <div className="flex flex-col gap-[14px]">
               <span className="text-[13px] text-text-secondary">集团投产</span>
               <span className="text-[13px] text-text-secondary">一线投产</span>
               <span className="text-[13px] text-text-secondary">二线投产</span>
               <span className="text-[13px] text-text-secondary">经营三线投产</span>
               <span className="text-[13px] text-text-secondary">职能三线投产</span>
             </div>
          </div>
          <div className="bg-[#FAFCFF] rounded-xl shadow-card border border-white/60 p-[20px] flex flex-col gap-4">
             <h3 className="text-[15px] font-bold text-text-main mb-1">薪酬分析</h3>
             <div className="flex flex-col gap-[14px]">
               <span className="text-[13px] text-text-secondary">一线薪酬</span>
               <span className="text-[13px] text-text-secondary">二线薪酬</span>
               <span className="text-[13px] text-text-secondary">三线薪酬</span>
             </div>
          </div>
          <div className="bg-[#FAFCFF] rounded-xl shadow-card border border-white/60 p-[20px] flex flex-col gap-4">
             <h3 className="text-[15px] font-bold text-text-main mb-1">人才供给</h3>
             <div className="flex flex-col gap-[14px]">
               <span className="text-[13px] text-text-secondary">人才招聘</span>
               <span className="text-[13px] text-text-secondary">人才保留</span>
             </div>
          </div>
          <div className="bg-[#FAFCFF] rounded-xl shadow-card border border-white/60 p-[20px] flex flex-col gap-4">
             <h3 className="text-[15px] font-bold text-text-main mb-1">人才结构</h3>
             <div className="flex flex-col gap-[14px]">
               <span className="text-[13px] text-text-secondary">综合分析</span>
               <span className="text-[13px] text-text-secondary">经营管理</span>
               <span className="text-[13px] text-text-secondary">专业队伍</span>
             </div>
          </div>
          <div className="bg-[#FAFCFF] rounded-xl shadow-card border border-white/60 p-[20px] flex flex-col gap-4 relative overflow-hidden">
             <h3 className="text-[15px] font-bold text-text-main mb-1 relative z-10">组织氛围</h3>
             <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
               <div className="w-[80px] h-[80px] rounded-full border-4 border-gray-100 mb-2 relative flex items-center justify-center">
                 <span className="absolute text-[24px] text-gray-300 font-light">+</span>
               </div>
               <span className="text-[12px] text-gray-400">暂无数据</span>
             </div>
          </div>
          <div 
            className="bg-[#FAFCFF] rounded-xl shadow-[0_4px_15px_rgba(74,108,247,0.15)] p-5 border border-primary/20 relative overflow-hidden group lg:col-span-3 h-[420px]"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-200/50 via-purple-100/30 to-transparent rounded-bl-full opacity-70 -z-0 blur-3xl pointer-events-none"></div>
             
             <div className="relative z-10 flex flex-col h-full">
               <h3 className="text-[15px] font-semibold text-text-main mb-6">
                  用工合规风险
               </h3>
               
               <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                 <div className="space-y-6 pb-4">
                   {/* 政策热点 */}
                   <div>
                     <div className="flex items-center gap-2 mb-3">
                       <div className="w-[18px] h-[18px] rounded bg-blue-100 flex items-center justify-center text-primary text-[10px] font-bold">1</div>
                       <span className="text-[14px] font-bold text-text-main">政策热点</span>
                     </div>
                     <div className="pl-2 border-l border-blue-100 ml-2 space-y-3">
                       <div className="relative pl-4 pr-2">
                         <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-[1px] bg-blue-100"></div>
                         <LeafNode title="法规动态速递" desc="外部劳动法规资讯" />
                       </div>
                       <div className="relative pl-4 pr-2">
                         <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-[1px] bg-blue-100"></div>
                         <LeafNode title="裁审案例解析" desc="裁审案例分享" />
                       </div>
                     </div>
                   </div>

                   {/* 风险防控 */}
                   <div>
                     <div className="flex items-center gap-2 mb-3">
                       <div className="w-[18px] h-[18px] rounded bg-blue-100 flex items-center justify-center text-primary text-[10px] font-bold">2</div>
                       <span className="text-[14px] font-bold text-text-main">风险防控</span>
                     </div>
                     <div className="pl-2 border-l border-blue-100 ml-2 space-y-4">
                       <div className="relative pl-4">
                         <div className="absolute left-0 top-2.5 w-3 h-[1px] bg-blue-100"></div>
                         <div className="text-[13px] font-medium text-text-main mb-2">风险解读</div>
                         <div className="grid grid-cols-2 gap-2 pr-2">
                           <LeafNode title="风险地图" onClick={() => onNavigate('fengdun')} />
                           <LeafNode title="风险诊断" onClick={() => onNavigate('fengdun')} />
                         </div>
                       </div>
                       <div className="relative pl-4">
                         <div className="absolute left-0 top-2.5 w-3 h-[1px] bg-blue-100"></div>
                         <div className="text-[13px] font-medium text-text-main mb-2">基础风险管理</div>
                         <div className="grid grid-cols-2 gap-2 pr-2">
                           <LeafNode title="人事管理" onClick={() => onNavigate('fengdun')} />
                           <LeafNode title="供应商管理" onClick={() => onNavigate('fengdun')} />
                         </div>
                       </div>
                       <div className="relative pl-4">
                         <div className="absolute left-0 top-2.5 w-3 h-[1px] bg-blue-100"></div>
                         <div className="text-[13px] font-medium text-text-main mb-2">复杂劳动关系应对</div>
                         <div className="space-y-2 pr-2 mt-1.5">
                           <div className="bg-[#F8FAFF]/60 border border-blue-50/80 rounded-lg p-2.5">
                             <div className="flex items-center gap-1.5 mb-2">
                               <div className="w-[3px] h-[12px] bg-blue-300 rounded-full"></div>
                               <span className="text-[11.5px] font-medium text-text-main/80">异常上报</span>
                             </div>
                             <div className="grid grid-cols-2 gap-2">
                               <LeafNode title="伤亡异常事件" onClick={() => onNavigate('fengdun')} />
                               <LeafNode title="风险事件上报" onClick={() => onNavigate('fengdun')} />
                               <LeafNode title="劳动争议事件上报" onClick={() => onNavigate('fengdun')} />
                             </div>
                           </div>
                           <div className="grid grid-cols-2 gap-2">
                             <LeafNode title="伤亡风险" onClick={() => onNavigate('fengdun')} />
                             <LeafNode title="诉访风险" onClick={() => onNavigate('fengdun')} />
                             <LeafNode title="争议风险" onClick={() => onNavigate('fengdun')} />
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>

                   {/* 风险智库 */}
                   <div>
                     <div className="flex items-center gap-2 mb-3">
                       <div className="w-[18px] h-[18px] rounded bg-blue-100 flex items-center justify-center text-primary text-[10px] font-bold">3</div>
                       <span className="text-[14px] font-bold text-text-main">风险智库</span>
                     </div>
                     <div className="pl-2 border-l border-blue-100 ml-2 space-y-4 relative">
                       <div className="absolute top-8 left-[-1px] w-[2px] h-[calc(100%-2rem)] bg-[#FAFCFF]"></div> {/* Mask bottom border line */}
                       <div className="relative pl-4">
                         <div className="absolute left-0 top-2.5 w-3 h-[1px] bg-blue-100"></div>
                         <div className="text-[13px] font-medium text-text-main mb-2">案例智汇库</div>
                         <div className="space-y-2 pr-2 mt-1.5">
                           <div className="bg-[#F8FAFF]/60 border border-blue-50/80 rounded-lg p-2.5">
                             <div className="flex items-center gap-1.5 mb-2">
                               <div className="w-[3px] h-[12px] bg-blue-300 rounded-full"></div>
                               <span className="text-[11.5px] font-medium text-text-main/80">实践精粹</span>
                             </div>
                             <div className="grid grid-cols-2 gap-2">
                               <LeafNode title="案例" onClick={() => onNavigate('fengdun')} />
                               <LeafNode title="共创" onClick={() => onNavigate('fengdun')} />
                             </div>
                           </div>
                           <div className="grid grid-cols-2 gap-2">
                             <LeafNode title="知识工具库" onClick={() => onNavigate('fengdun')} />
                           </div>
                         </div>
                       </div>
                       <div className="relative pl-4">
                         <div className="absolute left-0 top-2.5 w-3 h-[1px] bg-blue-100"></div>
                         <div className="text-[13px] font-medium text-text-main mb-2">提效工具</div>
                         <div className="grid grid-cols-2 gap-2 pr-2">
                           <LeafNode title="考勤门户" onClick={() => onNavigate('fengdun')} />
                           <LeafNode title="奖惩中心" onClick={() => onNavigate('fengdun')} />
                           <LeafNode title="清源模型" onClick={() => onNavigate('fengdun')} />
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>

             </div>
          </div>
          
          <div className="bg-[#FAFCFF] rounded-xl shadow-card border border-white/60 p-[20px] flex flex-col gap-4">
             <h3 className="text-[15px] font-bold text-text-main mb-1">用工解决方案</h3>
             <div className="flex flex-col gap-[14px]">
               <span className="text-[13px] text-text-secondary">收益检视</span>
               <span className="text-[13px] text-text-secondary">用工投入</span>
               <span className="text-[13px] text-text-secondary">保险配比</span>
             </div>
          </div>
        </div>
      </section>
      
      {/* 配套支持 */}
      <section>
        <h2 className="text-center text-xl font-semibold mb-6 text-text-main">配套支持</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-white/60 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-500">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium text-sm">数据支持</h4>
                <p className="text-xs text-text-secondary mt-1">为您提供配套数据支持</p>
              </div>
           </div>
           <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-white/60 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-[#F8FAFF] flex items-center justify-center text-primary">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium text-sm">工具&运营支持</h4>
                <p className="text-xs text-text-secondary mt-1">为您提供配套工具支持</p>
              </div>
           </div>
        </div>
      </section>
    </motion.div>
  );
}

// --- Page 2: Fengdun Page ---

function FengdunPage({ onNavigate }: { onNavigate: (page: 'home' | 'fengdun' | 'risk-control') => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: -20 }}
      className="p-8 max-w-6xl mx-auto"
    >
      <div className="pt-10 px-10 pb-5">
        <div className="text-[12px] text-text-secondary mb-[10px]">自测平台 / 丰盾云台</div>
        <div className="mb-5 text-left">
          <h1 className="text-[24px] font-semibold text-text-main inline-block">丰盾云台</h1>
          <span className="text-[14px] text-text-secondary inline-block ml-[15px] opacity-80">用工合规风险服务中心</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative px-10">

        {/* 政策热点 */}
        <div className="bg-white rounded-[12px] p-[24px] shadow-card border border-white/60 hover:shadow-card-hover hover:-translate-y-[2px] transition-all duration-300 relative group">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-[16px] font-semibold text-text-main flex items-center before:content-[''] before:w-1 before:h-4 before:bg-primary before:mr-[10px] before:rounded-[2px]">政策热点</h2>
            <a href="#" className="font-sans text-[12px] text-primary no-underline absolute right-6 top-6">查看 &gt;</a>
          </div>
          <div className="grid grid-cols-1 gap-3">
             <div className="p-[12px_16px] bg-[#F8FAFF] rounded-[8px] flex justify-between items-center cursor-pointer hover:bg-[#F0F4FF] mb-3 group/item">
               <span className="font-medium text-text-main text-sm">法律法规动态速递</span>
               <div className="w-5 h-5 bg-primary text-white flex items-center justify-center rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity">
                 <ArrowUpRight className="w-3 h-3" />
               </div>
             </div>
             <div className="p-[12px_16px] bg-[#F8FAFF] rounded-[8px] flex justify-between items-center cursor-pointer hover:bg-[#F0F4FF] mb-3 group/item">
               <span className="font-medium text-text-main text-sm">财政案例解析</span>
               <div className="w-5 h-5 bg-primary text-white flex items-center justify-center rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity">
                 <ArrowUpRight className="w-3 h-3" />
               </div>
             </div>
          </div>
        </div>

        {/* 风险防控 */}
        <div 
          onClick={() => onNavigate('risk-control')}
          className="bg-white rounded-[12px] p-[24px] shadow-card border border-white/60 hover:shadow-card-hover hover:-translate-y-[2px] transition-all duration-300 group cursor-pointer relative overflow-hidden"
        >
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-[16px] font-semibold text-text-main flex items-center before:content-[''] before:w-1 before:h-4 before:bg-primary before:mr-[10px] before:rounded-[2px]">风险防控</h2>
            <a className="font-sans text-[12px] text-primary no-underline absolute right-6 top-6">查看 &gt;</a>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 gap-3">
            <div>
              <h3 className="text-xs font-semibold text-text-muted mb-2 uppercase tracking-wider">风险解读</h3>
              <div className="flex gap-2 text-sm text-text-secondary mb-2">
                <span className="bg-[#F8FAFF] px-3 py-1.5 rounded-md border border-white/60">风险地图</span>
                <span className="bg-[#F8FAFF] px-3 py-1.5 rounded-md border border-white/60">异常上报</span>
              </div>
            </div>
            <div className="mt-2">
               <h3 className="text-xs font-semibold text-text-muted mb-2 uppercase tracking-wider">核心管理</h3>
               <div className="flex flex-wrap gap-2 text-sm text-text-secondary">
                 <span className="bg-[#F8FAFF]/50 text-blue-700 px-3 py-1.5 rounded-md border border-primary/20">人事管理风险</span>
                 <span className="bg-[#F8FAFF]/50 text-blue-700 px-3 py-1.5 rounded-md border border-primary/20">供应商风险</span>
                 <span className="bg-[#F8FAFF]/50 text-red-700 px-3 py-1.5 rounded-md border border-red-100 mt-1 w-full">复杂劳动关系应对</span>
               </div>
            </div>
          </div>
        </div>

        {/* 风险智库 */}
        <div className="bg-white rounded-[12px] p-[24px] shadow-card border border-white/60 hover:shadow-card-hover hover:-translate-y-[2px] transition-all duration-300 relative group">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-[16px] font-semibold text-text-main flex items-center before:content-[''] before:w-1 before:h-4 before:bg-primary before:mr-[10px] before:rounded-[2px]">风险智库</h2>
            <a href="#" className="font-sans text-[12px] text-primary no-underline absolute right-6 top-6">查看 &gt;</a>
          </div>
          
          <div className="p-[20px] rounded-[10px] bg-[#F8FAFF] border border-white/60 cursor-pointer hover:bg-[#F0F4FF] transition-colors group/item flex flex-col justify-center relative overflow-hidden">
             <div className="flex items-center gap-3 mb-2">
               <span className="font-semibold text-text-main text-base z-10 relative">案例智慧库</span>
               <div className="w-5 h-5 bg-primary text-white flex items-center justify-center rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity z-10 relative">
                 <ArrowUpRight className="w-3 h-3" />
               </div>
             </div>
             <p className="text-xs text-text-secondary z-10 relative">汇集内部实践共创与风险支持工具库</p>
          </div>
        </div>

        {/* 提效工具 */}
        <div className="bg-white rounded-[12px] p-[24px] shadow-card border border-white/60 hover:shadow-card-hover hover:-translate-y-[2px] transition-all duration-300 relative group">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-[16px] font-semibold text-text-main flex items-center before:content-[''] before:w-1 before:h-4 before:bg-primary before:mr-[10px] before:rounded-[2px]">提效工具</h2>
            <a href="#" className="font-sans text-[12px] text-primary no-underline absolute right-6 top-6">查看 &gt;</a>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
             <div className="p-[12px] rounded-[8px] bg-[#F8FAFF] border border-white/60 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#F0F4FF] transition-colors">
               <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                 <Activity className="w-4 h-4 text-primary" />
               </div>
               <span className="font-medium text-text-main text-sm">考勤中心</span>
             </div>
             <div className="p-[12px] rounded-[8px] bg-[#F8FAFF] border border-white/60 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#F0F4FF] transition-colors">
               <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                 <Gavel className="w-4 h-4 text-primary" />
               </div>
               <span className="font-medium text-text-main text-sm">奖惩中心</span>
             </div>
             
             <div className="col-span-2 p-[12px_16px] rounded-[8px] bg-[#F8FAFF] border border-white/60 flex items-center justify-between cursor-default">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                   <Box className="w-4 h-4 text-text-muted" />
                 </div>
                 <span className="font-medium text-text-muted text-sm">清源模型</span>
               </div>
               <span className="text-[11px] bg-[#EEEEEE] text-[#888888] px-[8px] py-[2px] rounded-[10px] font-normal">7月上线</span>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// --- Page 3: Risk Control Detail Page ---

function RiskControlPage({ onNavigate }: { onNavigate: (page: 'home' | 'fengdun' | 'risk-control') => void }) {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, x: 20 }} 
        animate={{ opacity: 1, x: 0 }} 
        exit={{ opacity: 0, x: -20 }}
        className="p-8 max-w-6xl mx-auto"
      >
        <div className="mb-6 flex items-center text-sm text-text-secondary">
          <button onClick={() => onNavigate('home')} className="hover:text-primary transition-colors">自测平台</button>
          <ChevronRight className="w-4 h-4 mx-1" />
          <button onClick={() => onNavigate('fengdun')} className="hover:text-primary transition-colors">丰盾云台</button>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="text-text-main font-medium">风险防控</span>
        </div>

        <div className="mb-10">
          <h1 className="text-2xl font-bold text-text-main">风险防控</h1>
          <p className="text-text-secondary mt-2 text-sm">全方位识别与管理各类用工相关风险</p>
        </div>

        {/* --- 分组 1：风险解读 --- */}
        <section className="mb-10">
          <h3 className="text-sm font-bold text-text-muted mb-4 tracking-wide">| 风险解读</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
             {/* 风险地图 - 灰态 */}
             <div className="bg-white p-5 rounded-xl border border-white/60 shadow-sm flex flex-col justify-between min-h-[110px]">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-text-muted">风险地图</h4>
                  <div className="w-7 h-7 rounded-full bg-[#F8FAFF] flex items-center justify-center">
                    <Box className="w-4 h-4 text-gray-300" />
                  </div>
                </div>
                <div className="mt-auto">
                   <span className="inline-block text-[10px] px-2 py-0.5 rounded bg-gray-100 text-text-secondary">6月上线</span>
                </div>
             </div>

             {/* 异常上报 - 交互 */}
             <div 
               onClick={() => setIsReportModalOpen(true)}
               className="bg-white p-5 rounded-xl border border-red-100 shadow-sm hover:shadow-[0_4px_15px_rgba(239,68,68,0.1)] hover:border-red-200 transition-all cursor-pointer group flex flex-col justify-between min-h-[110px]"
             >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-text-main group-hover:text-red-600 transition-colors">异常上报</h4>
                  <div className="w-7 h-7 rounded-full bg-[#F8FAFF] flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-auto pt-2">
                   <p className="text-xs text-text-secondary">点击上报异常情况</p>
                   <div className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                     <ArrowUpRight className="w-4 h-4" />
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* --- 分组 2：基础风险管理 --- */}
        <section className="mb-10">
          <h3 className="text-sm font-bold text-text-muted mb-4 tracking-wide">| 基础风险管理</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            <div className="bg-white p-5 rounded-xl border border-blue-50 shadow-sm hover:shadow-[0_6px_20px_rgba(74,108,247,0.08)] transition-all cursor-pointer group flex flex-col justify-between min-h-[110px]">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-text-main">人事管理风险</h4>
                  <div className="w-7 h-7 rounded-full bg-[#F8FAFF] flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div className="flex items-center text-primary text-xs font-medium mt-auto pt-4 group-hover:underline underline-offset-2">
                  查看 <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </div>
             </div>

             <div className="bg-white p-5 rounded-xl border border-blue-50 shadow-sm hover:shadow-[0_6px_20px_rgba(74,108,247,0.08)] transition-all cursor-pointer group flex flex-col justify-between min-h-[110px]">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-text-main">供应商风险</h4>
                  <div className="w-7 h-7 rounded-full bg-[#F8FAFF] flex items-center justify-center">
                    <Building className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div className="flex items-center text-primary text-xs font-medium mt-auto pt-4 group-hover:underline underline-offset-2">
                  查看 <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </div>
             </div>

          </div>
        </section>

        {/* --- 分组 3：复杂劳动关系应对 --- */}
        <section className="mb-10">
          <h3 className="text-sm font-bold text-text-muted mb-4 tracking-wide">| 复杂劳动关系应对</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
             {/* 异常上报 duplicate based on requirements */}
             <div onClick={() => setIsReportModalOpen(true)} className="bg-white p-5 rounded-xl border border-red-50 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between min-h-[110px]">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-text-main">异常上报</h4>
                  <div className="w-7 h-7 rounded-full bg-[#F8FAFF] flex items-center justify-center group-hover:bg-red-100 transition-colors">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                  </div>
                </div>
                <div className="flex items-center text-primary text-xs font-medium mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  处理 <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                </div>
             </div>

             <div className="bg-white p-5 rounded-xl border border-orange-50 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between min-h-[110px]">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-text-main">数访风险</h4>
                  <div className="w-7 h-7 rounded-full bg-[#F8FAFF] flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                    <FileText className="w-4 h-4 text-orange-500" />
                  </div>
                </div>
                <div className="flex items-center text-primary text-xs font-medium mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  查看 <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </div>
             </div>

             <div className="bg-white p-5 rounded-xl border border-white/60 shadow-sm flex flex-col justify-between min-h-[110px]">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-text-muted">伤亡风险</h4>
                  <div className="w-7 h-7 rounded-full bg-[#F8FAFF] flex items-center justify-center">
                    <UserX className="w-4 h-4 text-gray-300" />
                  </div>
                </div>
                <div className="mt-auto">
                   <span className="inline-block text-[10px] px-2 py-0.5 rounded bg-gray-100 text-text-secondary">5月上线</span>
                </div>
             </div>

             <div className="bg-white p-5 rounded-xl border border-purple-50 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between min-h-[110px]">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-text-main">争议风险</h4>
                  <div className="w-7 h-7 rounded-full bg-[#F8FAFF] flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                    <UserMinus className="w-4 h-4 text-purple-500" />
                  </div>
                </div>
                <div className="flex items-center text-primary text-xs font-medium mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  查看 <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </div>
             </div>

          </div>
        </section>

      </motion.div>

      {/* 异常上报 Modal */}
      <AnimatePresence>
        {isReportModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsReportModalOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-none"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden"
            >
               <div className="px-6 py-5 border-b border-white/60 flex items-center justify-between bg-gradient-to-r from-red-50/50 to-white">
                 <h3 className="text-lg font-bold text-text-main flex items-center gap-2">
                   <AlertCircle className="w-5 h-5 text-red-500" /> 
                   异常风险上报选项
                 </h3>
                 <button 
                  onClick={() => setIsReportModalOpen(false)}
                  className="text-text-muted hover:text-text-secondary transition-colors p-1"
                 >
                   <X className="w-5 h-5" />
                 </button>
               </div>
               
               <div className="p-6">
                 <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-blue-400 hover:bg-[#F8FAFF]/30 cursor-pointer transition-colors group">
                       <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded bg-orange-100 text-orange-600 flex items-center justify-center">
                           <FileText className="w-4 h-4" />
                         </div>
                         <div>
                           <div className="font-medium text-text-main">数访风险上报</div>
                           <div className="text-xs text-text-secondary">上报数据泄露或访问异常</div>
                         </div>
                       </div>
                       <ChevronRight className="w-4 h-4 text-text-muted group-hover:text-primary" />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-blue-400 hover:bg-[#F8FAFF]/30 cursor-pointer transition-colors group">
                       <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded bg-gray-100 text-text-secondary flex items-center justify-center">
                           <UserX className="w-4 h-4" />
                         </div>
                         <div>
                           <div className="font-medium text-text-main">伤亡风险上报</div>
                           <div className="text-xs text-text-secondary">员工伤亡突发事件登记</div>
                         </div>
                       </div>
                       <ChevronRight className="w-4 h-4 text-text-muted group-hover:text-primary" />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-blue-400 hover:bg-[#F8FAFF]/30 cursor-pointer transition-colors group">
                       <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded bg-purple-100 text-purple-600 flex items-center justify-center">
                           <UserMinus className="w-4 h-4" />
                         </div>
                         <div>
                           <div className="font-medium text-text-main">争议风险上报</div>
                           <div className="text-xs text-text-secondary">劳动纠纷与争议事项</div>
                         </div>
                       </div>
                       <ChevronRight className="w-4 h-4 text-text-muted group-hover:text-primary" />
                    </div>
                 </div>
               </div>
               
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

// --- Main App Setup ---

export default function App() {
  return (
    <div className="min-h-screen bg-transparent font-sans selection:bg-blue-100 text-text-main">
      <TopNav />
      
      {/* Background decoration elements across all pages */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10 bg-[image:var(--bg-gradient)]">
      </div>

      <AnimatePresence mode="wait">
        <HomePage key="home" />
      </AnimatePresence>
    </div>
  );
}

