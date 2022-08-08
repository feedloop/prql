let wasm_bindgen;
(function() {
    const __exports = {};
    let wasm;

    const cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

    cachedTextDecoder.decode();

    let cachedUint8Memory0 = new Uint8Array();

    function getUint8Memory0() {
        if (cachedUint8Memory0.byteLength === 0) {
            cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
        }
        return cachedUint8Memory0;
    }

    function getStringFromWasm0(ptr, len) {
        return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
    }

    let WASM_VECTOR_LEN = 0;

    const cachedTextEncoder = new TextEncoder('utf-8');

    const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
        ? function (arg, view) {
        return cachedTextEncoder.encodeInto(arg, view);
    }
        : function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    });

    function passStringToWasm0(arg, malloc, realloc) {

        if (realloc === undefined) {
            const buf = cachedTextEncoder.encode(arg);
            const ptr = malloc(buf.length);
            getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
            WASM_VECTOR_LEN = buf.length;
            return ptr;
        }

        let len = arg.length;
        let ptr = malloc(len);

        const mem = getUint8Memory0();

        let offset = 0;

        for (; offset < len; offset++) {
            const code = arg.charCodeAt(offset);
            if (code > 0x7F) break;
            mem[ptr + offset] = code;
        }

        if (offset !== len) {
            if (offset !== 0) {
                arg = arg.slice(offset);
            }
            ptr = realloc(ptr, len, len = offset + arg.length * 3);
            const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
            const ret = encodeString(arg, view);

            offset += ret.written;
        }

        WASM_VECTOR_LEN = offset;
        return ptr;
    }
    /**
    * @param {string} s
    * @returns {CompileResult}
    */
    __exports.compile = function(s) {
        const ptr0 = passStringToWasm0(s, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.compile(ptr0, len0);
        return CompileResult.__wrap(ret);
    };

    let cachedInt32Memory0 = new Int32Array();

    function getInt32Memory0() {
        if (cachedInt32Memory0.byteLength === 0) {
            cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
        }
        return cachedInt32Memory0;
    }
    /**
    * @param {string} s
    * @returns {string | undefined}
    */
    __exports.to_sql = function(s) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passStringToWasm0(s, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.to_sql(retptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v1;
            if (r0 !== 0) {
                v1 = getStringFromWasm0(r0, r1).slice();
                wasm.__wbindgen_free(r0, r1 * 1);
            }
            return v1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    };

    /**
    * @param {string} s
    * @returns {string | undefined}
    */
    __exports.to_json = function(s) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passStringToWasm0(s, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.to_json(retptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v1;
            if (r0 !== 0) {
                v1 = getStringFromWasm0(r0, r1).slice();
                wasm.__wbindgen_free(r0, r1 * 1);
            }
            return v1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    };

    /**
    * @param {string} s
    * @returns {string | undefined}
    */
    __exports.from_json = function(s) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passStringToWasm0(s, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.from_json(retptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v1;
            if (r0 !== 0) {
                v1 = getStringFromWasm0(r0, r1).slice();
                wasm.__wbindgen_free(r0, r1 * 1);
            }
            return v1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    };

    /**
    */
    class CompileError {

        static __wrap(ptr) {
            const obj = Object.create(CompileError.prototype);
            obj.ptr = ptr;

            return obj;
        }

        __destroy_into_raw() {
            const ptr = this.ptr;
            this.ptr = 0;

            return ptr;
        }

        free() {
            const ptr = this.__destroy_into_raw();
            wasm.__wbg_compileerror_free(ptr);
        }
        /**
        * @returns {string}
        */
        get message() {
            try {
                const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                wasm.compileerror_message(retptr, this.ptr);
                var r0 = getInt32Memory0()[retptr / 4 + 0];
                var r1 = getInt32Memory0()[retptr / 4 + 1];
                return getStringFromWasm0(r0, r1);
            } finally {
                wasm.__wbindgen_add_to_stack_pointer(16);
                wasm.__wbindgen_free(r0, r1);
            }
        }
        /**
        * @returns {SourceLocation | undefined}
        */
        get location() {
            const ret = wasm.compileerror_location(this.ptr);
            return ret === 0 ? undefined : SourceLocation.__wrap(ret);
        }
    }
    __exports.CompileError = CompileError;
    /**
    */
    class CompileResult {

        static __wrap(ptr) {
            const obj = Object.create(CompileResult.prototype);
            obj.ptr = ptr;

            return obj;
        }

        __destroy_into_raw() {
            const ptr = this.ptr;
            this.ptr = 0;

            return ptr;
        }

        free() {
            const ptr = this.__destroy_into_raw();
            wasm.__wbg_compileresult_free(ptr);
        }
        /**
        * @returns {string | undefined}
        */
        get sql() {
            try {
                const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                wasm.compileresult_sql(retptr, this.ptr);
                var r0 = getInt32Memory0()[retptr / 4 + 0];
                var r1 = getInt32Memory0()[retptr / 4 + 1];
                let v0;
                if (r0 !== 0) {
                    v0 = getStringFromWasm0(r0, r1).slice();
                    wasm.__wbindgen_free(r0, r1 * 1);
                }
                return v0;
            } finally {
                wasm.__wbindgen_add_to_stack_pointer(16);
            }
        }
        /**
        * @returns {CompileError | undefined}
        */
        get error() {
            const ret = wasm.compileresult_error(this.ptr);
            return ret === 0 ? undefined : CompileError.__wrap(ret);
        }
    }
    __exports.CompileResult = CompileResult;
    /**
    */
    class SourceLocation {

        static __wrap(ptr) {
            const obj = Object.create(SourceLocation.prototype);
            obj.ptr = ptr;

            return obj;
        }

        __destroy_into_raw() {
            const ptr = this.ptr;
            this.ptr = 0;

            return ptr;
        }

        free() {
            const ptr = this.__destroy_into_raw();
            wasm.__wbg_sourcelocation_free(ptr);
        }
        /**
        * @returns {number}
        */
        get start_line() {
            const ret = wasm.__wbg_get_sourcelocation_start_line(this.ptr);
            return ret >>> 0;
        }
        /**
        * @param {number} arg0
        */
        set start_line(arg0) {
            wasm.__wbg_set_sourcelocation_start_line(this.ptr, arg0);
        }
        /**
        * @returns {number}
        */
        get start_column() {
            const ret = wasm.__wbg_get_sourcelocation_start_column(this.ptr);
            return ret >>> 0;
        }
        /**
        * @param {number} arg0
        */
        set start_column(arg0) {
            wasm.__wbg_set_sourcelocation_start_column(this.ptr, arg0);
        }
        /**
        * @returns {number}
        */
        get end_line() {
            const ret = wasm.__wbg_get_sourcelocation_end_line(this.ptr);
            return ret >>> 0;
        }
        /**
        * @param {number} arg0
        */
        set end_line(arg0) {
            wasm.__wbg_set_sourcelocation_end_line(this.ptr, arg0);
        }
        /**
        * @returns {number}
        */
        get end_column() {
            const ret = wasm.__wbg_get_sourcelocation_end_column(this.ptr);
            return ret >>> 0;
        }
        /**
        * @param {number} arg0
        */
        set end_column(arg0) {
            wasm.__wbg_set_sourcelocation_end_column(this.ptr, arg0);
        }
    }
    __exports.SourceLocation = SourceLocation;

    async function load(module, imports) {
        if (typeof Response === 'function' && module instanceof Response) {
            if (typeof WebAssembly.instantiateStreaming === 'function') {
                try {
                    return await WebAssembly.instantiateStreaming(module, imports);

                } catch (e) {
                    if (module.headers.get('Content-Type') != 'application/wasm') {
                        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                    } else {
                        throw e;
                    }
                }
            }

            const bytes = await module.arrayBuffer();
            return await WebAssembly.instantiate(bytes, imports);

        } else {
            const instance = await WebAssembly.instantiate(module, imports);

            if (instance instanceof WebAssembly.Instance) {
                return { instance, module };

            } else {
                return instance;
            }
        }
    }

    function getImports() {
        const imports = {};
        imports.wbg = {};
        imports.wbg.__wbindgen_throw = function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        };

        return imports;
    }

    function initMemory(imports, maybe_memory) {

    }

    function finalizeInit(instance, module) {
        wasm = instance.exports;
        init.__wbindgen_wasm_module = module;
        cachedInt32Memory0 = new Int32Array();
        cachedUint8Memory0 = new Uint8Array();


        return wasm;
    }

    function initSync(bytes) {
        const imports = getImports();

        initMemory(imports);

        const module = new WebAssembly.Module(bytes);
        const instance = new WebAssembly.Instance(module, imports);

        return finalizeInit(instance, module);
    }

    async function init(input) {
        if (typeof input === 'undefined') {
            let src;
            if (typeof document === 'undefined') {
                src = location.href;
            } else {
                src = document.currentScript.src;
            }
            input = src.replace(/\.js$/, '_bg.wasm');
        }
        const imports = getImports();

        if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
            input = fetch(input);
        }

        initMemory(imports);

        const { instance, module } = await load(await input, imports);

        return finalizeInit(instance, module);
    }

    wasm_bindgen = Object.assign(init, __exports);

})();
