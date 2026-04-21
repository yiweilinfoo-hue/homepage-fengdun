const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const regex = /<\/section>\n    <\/motion\.div>\n  \);\n}/;

const modalContent = `</section>

      <AnimatePresence>
        {isFullScreenOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#F6F8FE] w-full max-w-6xl h-full max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-white relative"
            >
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={() => setIsFullScreenOpen(false)}
                  className="bg-white/50 hover:bg-white text-gray-500 hover:text-gray-800 p-2 rounded-full transition-colors backdrop-blur-md shadow-sm"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-12 custom-scrollbar">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 h-full">
                  
                  {/* Column 1: 政策热点 */}
                  <div>
                    <h2 className="text-[18px] font-bold text-text-main mb-8">政策热点</h2>
                    <div className="space-y-4">
                      <div className="bg-[#F0F4FC] p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-blue-50 transition-colors">
                        <div>
                          <div className="text-[14px] font-medium text-text-main">法规动态速递</div>
                          <div className="text-[12px] text-text-secondary mt-1">外部劳动法规资讯</div>
                        </div>
                        <div className="w-6 h-6 rounded bg-[#E4ECFA] text-primary flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="bg-[#F0F4FC] p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-blue-50 transition-colors">
                        <div>
                          <div className="text-[14px] font-medium text-text-main">裁审案例解析</div>
                          <div className="text-[12px] text-text-secondary mt-1">裁审案例分享</div>
                        </div>
                        <div className="w-6 h-6 rounded bg-[#E4ECFA] text-primary flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: 风险防控 */}
                  <div>
                    <h2 className="text-[18px] font-bold text-text-main mb-8 flex items-center gap-2">风险防控</h2>
                    
                    <div className="space-y-10">
                      <div>
                        <h3 className="text-[15px] font-medium text-gray-600 mb-4">风险解读</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-[#F0F4FC] p-3 rounded-xl flex justify-between items-center group cursor-pointer hover:bg-blue-50 transition-colors">
                            <div>
                              <div className="text-[13px] font-medium text-text-main mb-1">风险地图</div>
                              <div className="text-[11px] text-primary flex items-center gap-0.5 opacity-90">查看 <ChevronRight className="w-3 h-3" /></div>
                            </div>
                            <div className="text-primary opacity-70 bg-[#E4ECFA] p-1.5 rounded"><Box className="w-3.5 h-3.5" fill="currentColor" /></div>
                          </div>
                          <div className="bg-[#F0F4FC] p-3 rounded-xl flex justify-between items-center group cursor-pointer hover:bg-blue-50 transition-colors">
                            <div>
                              <div className="text-[13px] font-medium text-text-main mb-1">风险诊断</div>
                              <div className="text-[11px] text-primary flex items-center gap-0.5 opacity-90">查看 <ChevronRight className="w-3 h-3" /></div>
                            </div>
                            <div className="text-primary opacity-70 bg-[#E4ECFA] p-1.5 rounded"><Box className="w-3.5 h-3.5" fill="currentColor" /></div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-[15px] font-medium text-gray-600 mb-4">基础风险管理</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-[#F0F4FC] p-3 rounded-xl flex justify-between items-center group cursor-pointer hover:bg-blue-50 transition-colors">
                            <div>
                              <div className="text-[13px] font-medium text-text-main mb-1">人事管理</div>
                              <div className="text-[11px] text-primary flex items-center gap-0.5 opacity-90">查看 <ChevronRight className="w-3 h-3" /></div>
                            </div>
                            <div className="text-primary opacity-70 bg-[#E4ECFA] p-1.5 rounded"><Box className="w-3.5 h-3.5" fill="currentColor" /></div>
                          </div>
                          <div className="bg-[#F0F4FC] p-3 rounded-xl flex justify-between items-center group cursor-pointer hover:bg-blue-50 transition-colors">
                            <div>
                              <div className="text-[13px] font-medium text-text-main mb-1">供应商管理</div>
                              <div className="text-[11px] text-primary flex items-center gap-0.5 opacity-90">查看 <ChevronRight className="w-3 h-3" /></div>
                            </div>
                            <div className="text-primary opacity-70 bg-[#E4ECFA] p-1.5 rounded"><Box className="w-3.5 h-3.5" fill="currentColor" /></div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-[15px] font-medium text-gray-600 mb-4">复杂劳动关系应对</h3>
                        <div className="relative pl-6">
                          <div className="absolute left-1 top-2 bottom-0 w-[4px] bg-[#4396F8] rounded-full"></div>
                          <div className="mb-4">
                            <div className="text-[14px] text-text-main mb-3">异常上报</div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-[#F0F4FC] p-3 rounded-xl flex justify-between items-center group cursor-pointer hover:bg-blue-50 transition-colors">
                                <div>
                                  <div className="text-[13px] font-medium text-text-main mb-1">伤亡异常事件</div>
                                  <div className="text-[11px] text-primary flex items-center gap-0.5 opacity-90">查看 <ChevronRight className="w-3 h-3" /></div>
                                </div>
                                <div className="text-primary opacity-70 bg-[#E4ECFA] p-1.5 rounded"><Box className="w-3.5 h-3.5" fill="currentColor" /></div>
                              </div>
                              <div className="bg-[#F0F4FC] p-3 rounded-xl flex justify-between items-center group cursor-pointer hover:bg-blue-50 transition-colors">
                                <div>
                                  <div className="text-[13px] font-medium text-text-main mb-1">风险事件上报</div>
                                  <div className="text-[11px] text-primary flex items-center gap-0.5 opacity-90">查看 <ChevronRight className="w-3 h-3" /></div>
                                </div>
                                <div className="text-primary opacity-70 bg-[#E4ECFA] p-1.5 rounded"><Box className="w-3.5 h-3.5" fill="currentColor" /></div>
                              </div>
                              <div className="bg-[#F0F4FC] p-3 rounded-xl flex justify-between items-center group cursor-pointer hover:bg-blue-50 transition-colors">
                                <div>
                                  <div className="text-[13px] font-medium text-text-main mb-1">劳动争议事件上报</div>
                                  <div className="text-[11px] text-primary flex items-center gap-0.5 opacity-90">查看 <ChevronRight className="w-3 h-3" /></div>
                                </div>
                                <div className="text-primary opacity-70 bg-[#E4ECFA] p-1.5 rounded"><Box className="w-3.5 h-3.5" fill="currentColor" /></div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 pb-2">
                            <div className="bg-[#F0F4FC] p-3 rounded-xl flex justify-between items-center group cursor-pointer hover:bg-blue-50 transition-colors">
                              <div>
                                <div className="text-[13px] font-medium text-text-main mb-1">伤亡风险</div>
                                <div className="text-[11px] text-primary flex items-center gap-0.5 opacity-90">查看 <ChevronRight className="w-3 h-3" /></div>
                              </div>
                              <div className="text-primary opacity-70 bg-[#E4ECFA] p-1.5 rounded"><Box className="w-3.5 h-3.5" fill="currentColor" /></div>
                            </div>
                            <div className="bg-[#F0F4FC] p-3 rounded-xl flex justify-between items-center group cursor-pointer hover:bg-blue-50 transition-colors">
                              <div>
                                <div className="text-[13px] font-medium text-text-main mb-1">诉访风险</div>
                                <div className="text-[11px] text-primary flex items-center gap-0.5 opacity-90">查看 <ChevronRight className="w-3 h-3" /></div>
                              </div>
                              <div className="text-primary opacity-70 bg-[#E4ECFA] p-1.5 rounded"><Box className="w-3.5 h-3.5" fill="currentColor" /></div>
                            </div>
                            <div className="bg-[#F0F4FC] p-3 rounded-xl flex justify-between items-center group cursor-pointer hover:bg-blue-50 transition-colors">
                              <div>
                                <div className="text-[13px] font-medium text-text-main mb-1">争议风险</div>
                                <div className="text-[11px] text-primary flex items-center gap-0.5 opacity-90">查看 <ChevronRight className="w-3 h-3" /></div>
                              </div>
                              <div className="text-primary opacity-70 bg-[#E4ECFA] p-1.5 rounded"><Box className="w-3.5 h-3.5" fill="currentColor" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 3: 风险智库 */}
                  <div>
                    <h2 className="text-[18px] font-bold text-text-main mb-8">风险智库</h2>
                    
                    <div className="space-y-10">
                      <div>
                        <h3 className="text-[15px] font-medium text-gray-600 mb-4">案例智汇库</h3>
                        <div className="relative pl-6">
                          <div className="absolute left-1 top-2 bottom-0 w-[4px] bg-[#4396F8] rounded-full"></div>
                          <div className="mb-4">
                            <div className="text-[14px] text-text-main mb-3">实践精粹</div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-[#F0F4FC] p-3 rounded-xl flex justify-between items-center group cursor-pointer hover:bg-blue-50 transition-colors">
                                <div>
                                  <div className="text-[13px] font-medium text-text-main mb-1">案例</div>
                                  <div className="text-[11px] text-primary flex items-center gap-0.5 opacity-90">查看 <ChevronRight className="w-3 h-3" /></div>
                                </div>
                                <div className="text-primary opacity-70 bg-[#E4ECFA] p-1.5 rounded"><Box className="w-3.5 h-3.5" fill="currentColor" /></div>
                              </div>
                              <div className="bg-[#F0F4FC] p-3 rounded-xl flex justify-between items-center group cursor-pointer hover:bg-blue-50 transition-colors">
                                <div>
                                  <div className="text-[13px] font-medium text-text-main mb-1">共创</div>
                                  <div className="text-[11px] text-primary flex items-center gap-0.5 opacity-90">查看 <ChevronRight className="w-3 h-3" /></div>
                                </div>
                                <div className="text-primary opacity-70 bg-[#E4ECFA] p-1.5 rounded"><Box className="w-3.5 h-3.5" fill="currentColor" /></div>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 pb-2">
                            <div className="bg-[#F0F4FC] p-3 rounded-xl flex justify-between items-center group cursor-pointer hover:bg-blue-50 transition-colors">
                              <div>
                                <div className="text-[13px] font-medium text-text-main mb-1">知识工具库</div>
                                <div className="text-[11px] text-primary flex items-center gap-0.5 opacity-90">查看 <ChevronRight className="w-3 h-3" /></div>
                              </div>
                              <div className="text-primary opacity-70 bg-[#E4ECFA] p-1.5 rounded"><Box className="w-3.5 h-3.5" fill="currentColor" /></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-[15px] font-medium text-gray-600 mb-4">提效工具</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-[#F0F4FC] p-3 rounded-xl flex justify-between items-center group cursor-pointer hover:bg-blue-50 transition-colors">
                            <div>
                              <div className="text-[13px] font-medium text-text-main mb-1">考勤门户</div>
                              <div className="text-[11px] text-primary flex items-center gap-0.5 opacity-90">查看 <ChevronRight className="w-3 h-3" /></div>
                            </div>
                            <div className="text-primary opacity-70 bg-[#E4ECFA] p-1.5 rounded"><Box className="w-3.5 h-3.5" fill="currentColor" /></div>
                          </div>
                          <div className="bg-[#F0F4FC] p-3 rounded-xl flex justify-between items-center group cursor-pointer hover:bg-blue-50 transition-colors">
                            <div>
                              <div className="text-[13px] font-medium text-text-main mb-1">奖惩中心</div>
                              <div className="text-[11px] text-primary flex items-center gap-0.5 opacity-90">查看 <ChevronRight className="w-3 h-3" /></div>
                            </div>
                            <div className="text-primary opacity-70 bg-[#E4ECFA] p-1.5 rounded"><Box className="w-3.5 h-3.5" fill="currentColor" /></div>
                          </div>
                          <div className="bg-[#F0F4FC] p-3 rounded-xl flex justify-between items-center group cursor-pointer hover:bg-blue-50 transition-colors">
                            <div>
                              <div className="text-[13px] font-medium text-text-main mb-1">清源模型</div>
                              <div className="text-[11px] text-primary flex items-center gap-0.5 opacity-90">查看 <ChevronRight className="w-3 h-3" /></div>
                            </div>
                            <div className="text-primary opacity-70 bg-[#E4ECFA] p-1.5 rounded"><Box className="w-3.5 h-3.5" fill="currentColor" /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}`;

if (regex.test(content)) {
  fs.writeFileSync('src/App.tsx', content.replace(regex, modalContent));
  console.log('Successfully replaced modal!');
} else {
  console.log('Regex did not match!');
}
