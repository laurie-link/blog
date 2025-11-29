export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* 个人品牌 */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-3 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500">
                <img
                  src="/favicon.ico"
                  alt="Logo"
                  className="w-full h-full object-cover scale-125"
                />
              </div>
              <h3 className="text-xl font-bold">文雅的疯狂</h3>
            </div>
            <p className="text-gray-400">
              你当像鸟，飞往你的山
            </p>
          </div>
          
          {/* 联系我 */}
          <div>
            <h3 className="text-xl font-bold mb-4">联系我</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">📧</span>
                  邮件联系
                </a>
              </li>
              <li>
                <a href="https://qm.qq.com/q/T5vrBpg5Ko" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">🐧</span>
                  QQ交流
                </a>
              </li>
              <li>
                <a href="https://u.wechat.com/MEkHScdZnnzMZ_uUrRtF4f0?s=1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">💬</span>
                  微信咨询
                </a>
              </li>
            </ul>
          </div>
          
          {/* 我的社媒 */}
          <div>
            <h3 className="text-xl font-bold mb-4">我的社媒</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://tinyurl.com/2cnu6jtx" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  知乎
                </a>
              </li>
              <li>
                <a href="https://b23.tv/BCBtccP" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  B站
                </a>
              </li>
              <li>
                <a href="https://tinyurl.com/4488k474" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  公众号
                </a>
              </li>
            </ul>
          </div>
          
          {/* 支持 */}
          <div>
            <h3 className="text-xl font-bold mb-4">支持</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.zhihu.com/consult/people/1418602787144404992" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  咨询我
                </a>
              </li>
              <li>
                <a href="https://tinyurl.com/5f6v8ecr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  为爱发电
                </a>
              </li>
              <li>
                <a href="https://tinyurl.com/joinqqgroup" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  加入社群
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2023-{new Date().getFullYear()} 文雅的疯狂. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}

