const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const regex = /<div className="space-y-6 pb-4">[\s\S]*?{/* 风险智库 */}[\s\S]*?<\/div>\n\s*<\/div>\n\s*<\/div>/;

const newSection = `<div className="space-y-6 pb-4">
                    {/* 政策热点 */}
                    <div>
                      <div className="mb-3">
                        <span className="text-[14px] font-bold text-text-main pl-2 border-l-[3px] border-primary leading-none">政策热点</span>
                      </div>
                      <div className="pl-3">
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100/50 space-y-2">
                          <LeafNode title="法规动态速递" desc="外部劳动法规资讯" />
                          <LeafNode title="裁审案例解析" desc="裁审案例分享" />
                        </div>
                      </div>
                    </div>

                    {/* 风险防控 */}
                    <div>
                      <div className="mb-3 mt-6">
                        <span className="text-[14px] font-bold text-text-main pl-2 border-l-[3px] border-primary leading-none">风险防控</span>
                      </div>
                      <div className="pl-3 space-y-3">
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100/50">
                          <div className="text-[13px] font-bold text-text-main mb-2">风险解读</div>
                          <div className="grid grid-cols-2 gap-2">
                            <LeafNode title="风险地图" />
                            <LeafNode title="风险诊断" />
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100/50">
                          <div className="text-[13px] font-bold text-text-main mb-2">基础风险管理</div>
                          <div className="grid grid-cols-2 gap-2">
                            <LeafNode title="人事管理" />
                            <LeafNode title="供应商管理" />
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100/50">
                          <div className="text-[13px] font-bold text-text-main mb-2">复杂劳动关系应对</div>
                          <div className="space-y-3">
                            <div className="bg-[#F8FAFF] rounded-md p-2.5 border border-blue-50">
                              <div className="text-[12px] font-medium text-text-main/80 mb-2">异常上报</div>
                              <div className="grid grid-cols-2 gap-2">
                                <LeafNode title="伤亡异常事件" />
                                <LeafNode title="风险事件上报" />
                                <LeafNode title="劳动争议事件上报" />
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <LeafNode title="伤亡风险" />
                              <LeafNode title="诉访风险" />
                              <LeafNode title="争议风险" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 风险智库 */}
                    <div>
                      <div className="mb-3 mt-6">
                        <span className="text-[14px] font-bold text-text-main pl-2 border-l-[3px] border-primary leading-none">风险智库</span>
                      </div>
                      <div className="pl-3 space-y-3">
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100/50">
                          <div className="text-[13px] font-bold text-text-main mb-2">案例智汇库</div>
                          <div className="space-y-3">
                            <div className="bg-[#F8FAFF] rounded-md p-2.5 border border-blue-50">
                              <div className="text-[12px] font-medium text-text-main/80 mb-2">实践精粹</div>
                              <div className="grid grid-cols-2 gap-2">
                                <LeafNode title="案例" />
                                <LeafNode title="共创" />
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <LeafNode title="知识工具库" />
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100/50">
                          <div className="text-[13px] font-bold text-text-main mb-2">提效工具</div>
                          <div className="grid grid-cols-2 gap-2">
                            <LeafNode title="考勤门户" />
                            <LeafNode title="奖惩中心" />
                            <LeafNode title="清源模型" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;

if(regex.test(content)) {
  fs.writeFileSync('src/App.tsx', content.replace(regex, newSection));
  console.log('Successfully replaced!');
} else {
  console.log('Regex did not match!');
}
