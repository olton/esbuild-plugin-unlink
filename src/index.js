import {unlinkSync, existsSync} from "fs";
import { globSync } from "glob";

const defaults = {
    files: "**/*",
    skip: '',
}

export default options => {
    const o = {...defaults, ...options};

    return {
        name: 'unlink',
        setup(build) {
            build.onEnd(() => {
                const files = globSync(o.files, { ignore: o.skip });
                for (const file of files) {
                    if (existsSync(file)) {
                        unlinkSync(file);
                    }
                }
            })
        }
    }
}