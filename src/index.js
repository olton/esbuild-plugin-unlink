import {unlinkSync, existsSync} from "fs";
import { glob } from "glob";

export default options => {
    return {
        name: 'unlink',
        setup(build) {
            build.onEnd(async () => {
                const files = await glob(options.files, { ignore: options.skip });
                for (const file of files) {
                    if (existsSync(file)) {
                        unlinkSync(file);
                    }
                }
            })
        }
    }
}