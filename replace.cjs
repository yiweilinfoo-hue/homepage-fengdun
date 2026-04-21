const fs = require("fs");
let content = fs.readFileSync("src/App.tsx", "utf8");
const regex = /<div className="space-y-6 pb-4">[\s\S]*?{/ * \u98CE\u9669\u667A\u5E93 * /}[\s\S]*?<\/div>\n\s*<\/div>\n\s*<\/div>/;
const newSection = `<div className="space-y-6 pb-4">
                    {/* \u653F\u7B56\u70ED\u70B9 */}
                    <div>
                      <div className="mb-3">
                        <span className="text-[14px] font-bold text-text-main pl-2 border-l-[3px] border-primary leading-none">\u653F\u7B56\u70ED\u70B9</span>
                      </div>
                      <div className="pl-3">
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100/50 space-y-2">
                          <LeafNode title="\u6CD5\u89C4\u52A8\u6001\u901F\u9012" desc="\u5916\u90E8\u52B3\u52A8\u6CD5\u89C4\u8D44\u8BAF" />
                          <LeafNode title="\u88C1\u5BA1\u6848\u4F8B\u89E3\u6790" desc="\u88C1\u5BA1\u6848\u4F8B\u5206\u4EAB" />
                        </div>
                      </div>
                    </div>

                    {/* \u98CE\u9669\u9632\u63A7 */}
                    <div>
                      <div className="mb-3 mt-6">
                        <span className="text-[14px] font-bold text-text-main pl-2 border-l-[3px] border-primary leading-none">\u98CE\u9669\u9632\u63A7</span>
                      </div>
                      <div className="pl-3 space-y-3">
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100/50">
                          <div className="text-[13px] font-bold text-text-main mb-2">\u98CE\u9669\u89E3\u8BFB</div>
                          <div className="grid grid-cols-2 gap-2">
                            <LeafNode title="\u98CE\u9669\u5730\u56FE" />
                            <LeafNode title="\u98CE\u9669\u8BCA\u65AD" />
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100/50">
                          <div className="text-[13px] font-bold text-text-main mb-2">\u57FA\u7840\u98CE\u9669\u7BA1\u7406</div>
                          <div className="grid grid-cols-2 gap-2">
                            <LeafNode title="\u4EBA\u4E8B\u7BA1\u7406" />
                            <LeafNode title="\u4F9B\u5E94\u5546\u7BA1\u7406" />
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100/50">
                          <div className="text-[13px] font-bold text-text-main mb-2">\u590D\u6742\u52B3\u52A8\u5173\u7CFB\u5E94\u5BF9</div>
                          <div className="space-y-3">
                            <div className="bg-[#F8FAFF] rounded-md p-2.5 border border-blue-50">
                              <div className="text-[12px] font-medium text-text-main/80 mb-2">\u5F02\u5E38\u4E0A\u62A5</div>
                              <div className="grid grid-cols-2 gap-2">
                                <LeafNode title="\u4F24\u4EA1\u5F02\u5E38\u4E8B\u4EF6" />
                                <LeafNode title="\u98CE\u9669\u4E8B\u4EF6\u4E0A\u62A5" />
                                <LeafNode title="\u52B3\u52A8\u4E89\u8BAE\u4E8B\u4EF6\u4E0A\u62A5" />
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <LeafNode title="\u4F24\u4EA1\u98CE\u9669" />
                              <LeafNode title="\u8BC9\u8BBF\u98CE\u9669" />
                              <LeafNode title="\u4E89\u8BAE\u98CE\u9669" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* \u98CE\u9669\u667A\u5E93 */}
                    <div>
                      <div className="mb-3 mt-6">
                        <span className="text-[14px] font-bold text-text-main pl-2 border-l-[3px] border-primary leading-none">\u98CE\u9669\u667A\u5E93</span>
                      </div>
                      <div className="pl-3 space-y-3">
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100/50">
                          <div className="text-[13px] font-bold text-text-main mb-2">\u6848\u4F8B\u667A\u6C47\u5E93</div>
                          <div className="space-y-3">
                            <div className="bg-[#F8FAFF] rounded-md p-2.5 border border-blue-50">
                              <div className="text-[12px] font-medium text-text-main/80 mb-2">\u5B9E\u8DF5\u7CBE\u7CB9</div>
                              <div className="grid grid-cols-2 gap-2">
                                <LeafNode title="\u6848\u4F8B" />
                                <LeafNode title="\u5171\u521B" />
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <LeafNode title="\u77E5\u8BC6\u5DE5\u5177\u5E93" />
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100/50">
                          <div className="text-[13px] font-bold text-text-main mb-2">\u63D0\u6548\u5DE5\u5177</div>
                          <div className="grid grid-cols-2 gap-2">
                            <LeafNode title="\u8003\u52E4\u95E8\u6237" />
                            <LeafNode title="\u5956\u60E9\u4E2D\u5FC3" />
                            <LeafNode title="\u6E05\u6E90\u6A21\u578B" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;
if (regex.test(content)) {
  fs.writeFileSync("src/App.tsx", content.replace(regex, newSection));
  console.log("Successfully replaced!");
} else {
  console.log("Regex did not match!");
}
