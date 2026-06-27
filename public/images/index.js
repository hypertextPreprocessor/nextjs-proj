/**这种方式只在webpack管理的工具才有效 */
const images = {};
const requireContext = require.context('@img',false,/\.(png|svg|jpg|jpeg|gif|webp|mp4)$/i);
requireContext.keys().forEach(img=>{
    var key = img.replace(/(\.\/|(\.\.\/))/,"").replace(/\.\w+$/,"");
    images[key] = requireContext(img);
});
export default images;