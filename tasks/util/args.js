// 命令行工具
import yargs from 'yargs';
const args = yargs
    .option('production',{
      boolean:true,
      default:false,
      descript:'min all script'
    })
    .option('watch',{
      boolean:true,
      default:false,
      descript:'watch all files'
    })
    .option('verbose',{
      boolean:true,
      default:false,
      descript:'log'
    })
    .option('sourcemaps',{
      descript:'force the creation of sourcemaps'
    })
    .option('prot',{
      string:true,
      default:8080
    })
    .argv

    export default args;
