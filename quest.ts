export {};

declare const ptr: any;
declare const Interceptor: any;
declare const Module: any;
declare const Memory: any;
declare const NativeFunction: any;
declare const Script: any;
declare const Il2Cpp: any;

const QUEST_PLATFORM = 1;
const SYMBOLS_URL = "https://pastebin.com/raw/0da0c4sr";

function parseUrl(url: string): {
  hostname: string;
  path: string;
  port: number;
} {
  const match = url.match(/^https?:\/\/([^/:]+)(?::(\d+))?(.*)$/);
  if (!match) {
    return { hostname: "", path: "/", port: 443 };
  }
  const hostname = match[1];
  const port = match[2]
    ? parseInt(match[2])
    : url.startsWith("https")
      ? 443 
      : 80;
  const path = match[3] || "/";
  return { hostname, path, port };
}

function httpRequest(
  url: string,
  method: string,
  headers: any,
  body?: string, 
): Promise<{ status: number; data: string }> {
  return new Promise((resolve) => {
    try {
      const winhttp = Module.load("winhttp.dll");

const WinHttpOpen = new NativeFunction(
  winhttp.getExportByName("WinHttpOpen"),
  "pointer",
  [
    "pointer",
    "uint32",
    "pointer",
    "pointer",
    "uint32"
  ],
);

const WinHttpConnect = new NativeFunction(
  winhttp.getExportByName("WinHttpConnect"),
  "pointer",
  [
    "pointer",
    "pointer",
    "uint32",
    "uint32"
  ],
);

const WinHttpOpenRequest = new NativeFunction(
  winhttp.getExportByName("WinHttpOpenRequest"),
  "pointer",
  [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "uint32"
  ],
);

const WinHttpSendRequest = new NativeFunction(
  winhttp.getExportByName("WinHttpSendRequest"),
  "bool",
  [
    "pointer",
    "pointer",
    "uint32",
    "pointer",
    "uint32",
    "uint32",
    "pointer",
  ],
);

      const WinHttpReceiveResponse = new NativeFunction(
        winhttp.getExportByName("WinHttpReceiveResponse"),
        "bool",
        ["pointer", "pointer"],
      );

      const WinHttpQueryHeaders = new NativeFunction(
        winhttp.getExportByName("WinHttpQueryHeaders"),
        "bool",
        ["pointer", "uint32", "pointer", "pointer", "pointer", "pointer"],
      );

      const WinHttpReadData = new NativeFunction( 
        winhttp.getExportByName("WinHttpReadData"),
        "bool",
        ["pointer", "pointer", "uint32", "pointer"],
      );

      const WinHttpCloseHandle = new NativeFunction(
        winhttp.getExportByName("WinHttpCloseHandle"), 
        "bool",
        ["pointer"],
      );

      const WinHttpSetOption = new NativeFunction(
        winhttp.getExportByName("WinHttpSetOption"),
        "bool",
        ["pointer", "uint32", "pointer", "uint32"],
      );

      const WinHttpSetTimeouts = new NativeFunction(
        winhttp.getExportByName("WinHttpSetTimeouts"),
        "bool",
        ["pointer", "int32", "int32", "int32", "int32"],
      );

      const GetLastError = new NativeFunction(
        Module.load("kernel32.dll").getExportByName("GetLastError"),
        "uint32",
        [],
      );

      const urlParts = parseUrl(url);
      const hostname = urlParts.hostname;
      const path = urlParts.path;
      const port = urlParts.port;

      const userAgent = Memory.allocUtf16String(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      );
      const hSession = WinHttpOpen(userAgent, 0, ptr(0), ptr(0), 0);

      if (hSession.isNull()) {
        resolve({
          status: 0,
          data: "WinHttpOpen failed (" + GetLastError() + ")",
        });
        return;
      }

      WinHttpSetTimeouts(hSession, 5000, 5000, 5000, 5000);

      const hostnameW = Memory.allocUtf16String(hostname);
      const hConnect = WinHttpConnect(hSession, hostnameW, port, 0);

      if (hConnect.isNull()) {
        WinHttpCloseHandle(hSession);
        resolve({ status: 0, data: "WinHttpConnect failed" });
        return;
      }

      const pathW = Memory.allocUtf16String(path);
      const methodW = Memory.allocUtf16String(method);
      const hRequest = WinHttpOpenRequest(
        hConnect,
        methodW,
        pathW,
        ptr(0),
        ptr(0),
        ptr(0),
        url.startsWith("https") ? 0x00800000 : 0,
      );

      if (hRequest.isNull()) {
        WinHttpCloseHandle(hConnect);
        WinHttpCloseHandle(hSession);
        resolve({ status: 0, data: "WinHttpOpenRequest failed" });
        return;
      }

      const flagsBuf = Memory.alloc(4);
      flagsBuf.writeU32(0x00000100 | 0x00000200 | 0x00001000 | 0x00002000);
      WinHttpSetOption(hRequest, 31, flagsBuf, 4);

      let headersStr = "";
      for (const key in headers) {
        headersStr += key + ": " + headers[key] + "\r\n";
      }
      const headersW = Memory.allocUtf16String(headersStr);

      const bodyPtr = body ? Memory.allocUtf8String(body) : ptr(0);
      const bodyLen = body ? body.length : 0;

      if (
        !WinHttpSendRequest(
          hRequest,
          headersW,
          -1,
          bodyPtr,
          bodyLen,
          bodyLen,
          ptr(0),
        )
      ) {
        const err = GetLastError();
        WinHttpCloseHandle(hRequest);
        WinHttpCloseHandle(hConnect);
        WinHttpCloseHandle(hSession);
        resolve({ status: 0, data: "WinHttpSendRequest failed (" + err + ")" });
        return;
      }

      if (!WinHttpReceiveResponse(hRequest, ptr(0))) {
        const err = GetLastError();
        WinHttpCloseHandle(hRequest);
        WinHttpCloseHandle(hConnect);
        WinHttpCloseHandle(hSession);
        resolve({
          status: 0,
          data: "WinHttpReceiveResponse failed (" + err + ")",
        });
        return;
      }

      const statusBuffer = Memory.alloc(4);
      const statusSize = Memory.alloc(4);
      statusSize.writeU32(4);

      WinHttpQueryHeaders(
        hRequest,
        0x20000013,
        ptr(0),
        statusBuffer,
        statusSize,
        ptr(0),
      );
      const statusCode = statusBuffer.readU32();

      const buffer = Memory.alloc(8192);
      const bytesRead = Memory.alloc(4);
      let responseData = "";

      while (WinHttpReadData(hRequest, buffer, 8192, bytesRead)) {
        const size = bytesRead.readU32();
        if (size === 0) break;
        responseData += buffer.readUtf8String(size);
      }

      WinHttpCloseHandle(hRequest);
      WinHttpCloseHandle(hConnect);
      WinHttpCloseHandle(hSession);

      resolve({ status: statusCode, data: responseData });
    } catch (e) {
      console.log("[-] HTTP request error: " + e);
      resolve({ status: 0, data: "Error: " + e });
    }
  });
}

async function loadQuestServers() {
  console.log("\n");
  console.log("[+] Unpatchable Quest Servers");
  console.log("[+] Made by w2g8 on discord...");

  const symResponse = await httpRequest(SYMBOLS_URL, "GET", {});
  if (symResponse.status === 200) {
    try {
      eval(symResponse.data);

      const mapping: any = {
       "il2cpp_init": "jWusJPuMC_n",
  "il2cpp_init_utf16": "SqtdzLpH_gQ",
  "il2cpp_shutdown": "QxPbmDZelnm",
  "il2cpp_set_config_dir": "xnUawa_TmCE",
  "il2cpp_set_data_dir": "SKWMyIQUbsY",
  "il2cpp_set_temp_dir": "SrUIujLQaNZ",
  "il2cpp_set_commandline_arguments": "vasVdLRlRxk",
  "il2cpp_set_commandline_arguments_utf16": "BjLKLFTSfse",
  "il2cpp_set_config_utf16": "cuvIQNQtNYd",
  "il2cpp_set_config": "ZQgGlEeFjkF",
  "il2cpp_set_memory_callbacks": "bDDgXhbKEJD",
  "il2cpp_memory_pool_set_region_size": "hdrqBHeDrfV",
  "il2cpp_memory_pool_get_region_size": "mBQxRumhfUb",
  "il2cpp_get_corlib": "XoJwxoWekLU",
  "il2cpp_add_internal_call": "KwmBCIiGVkp",
  "il2cpp_resolve_icall": "IxQnEsMNQOb",
  "il2cpp_alloc": "MgnxmVCZNjl",
  "il2cpp_free": "YwBXmVhKYTm",
  "il2cpp_array_class_get": "ffmAbxcVLsw",
  "il2cpp_array_length": "fdTmWLRSxOq",
  "il2cpp_array_get_byte_length": "LDkLLklDsOl",
  "il2cpp_array_new": "qwvLQLdxIqn",
  "il2cpp_array_new_specific": "JnONjVQttfh",
  "il2cpp_array_new_full": "wwvOdbFjAuN",
  "il2cpp_bounded_array_class_get": "nrYWtCRLnhT",
  "il2cpp_array_element_size": "QkEFFFiIBSh",
  "il2cpp_assembly_get_image": "LqhejEMxLpc",
  "il2cpp_class_for_each": "vFeSjpbsjw_",
  "il2cpp_class_enum_basetype": "YDzBysBVxeM",
  "il2cpp_class_is_inited": "KzXabcUVPiF",
  "il2cpp_class_is_generic": "hbDT_fYyrfL",
  "il2cpp_class_is_inflated": "WSzp_dSesGi",
  "il2cpp_class_is_assignable_from": "dJFzYriUmBD",
  "il2cpp_class_is_subclass_of": "sGqzZVQrFmk",
  "il2cpp_class_has_parent": "wUnkFBhrLPN",
  "il2cpp_class_from_il2cpp_type": "XnmTXEjbZpF",
  "il2cpp_class_from_name": "AjQmIGJRiip",
  "il2cpp_class_from_system_type": "AzbhqAgFfGH",
  "il2cpp_class_get_element_class": "HTeFyktdlCM",
  "il2cpp_class_get_events": "uwOTecvCeoM",
  "il2cpp_class_get_fields": "UYtveJOKwsz",
  "il2cpp_class_get_nested_types": "WbpywVBFHrD",
  "il2cpp_class_get_interfaces": "_cWOvyCwzWK",
  "il2cpp_class_get_properties": "eugijtHKFiS",
  "il2cpp_class_get_property_from_name": "YudNeCdyjks",
  "il2cpp_class_get_field_from_name": "FYbMDOPCtzx",
  "il2cpp_class_get_methods": "ugvhqMTCTkJ",
  "il2cpp_class_get_method_from_name": "lsvbYhLtLwF",
  "il2cpp_class_get_name": "sNmLpESthul",
  "il2cpp_type_get_name_chunked": "SFzuPHbvwYo",
  "il2cpp_class_get_namespace": "siXIsFGRRjq",
  "il2cpp_class_get_parent": "RmdmbGXTbvY",
  "il2cpp_class_get_declaring_type": "GoPiaiq_UTM",
  "il2cpp_class_instance_size": "ccFUeeTQ_WC",
  "il2cpp_class_num_fields": "olgSGJDLfXF",
  "il2cpp_class_is_valuetype": "hBuZJQKqnzl",
  "il2cpp_class_value_size": "qGWXVWjoZgP",
  "il2cpp_class_is_blittable": "guFYRmfmtCy",
  "il2cpp_class_get_flags": "CBOFDhQLNGz",
  "il2cpp_class_is_abstract": "BFXjaijCBg_",
  "il2cpp_class_is_interface": "zOPAPoZBfDu",
  "il2cpp_class_array_element_size": "uTEsZZjrwiC",
  "il2cpp_class_from_type": "UtKP_KWtsXv",
  "il2cpp_class_get_type": "cltqmjUMWmH",
  "il2cpp_class_get_type_token": "pYgPZaCcbjd",
  "il2cpp_class_has_attribute": "CgbfxOqJTwD",
  "il2cpp_class_has_references": "StAxnOkkOxa",
  "il2cpp_class_is_enum": "fbZxsOgKaAZ",
  "il2cpp_class_get_image": "mAYTeWUnmWc",
  "il2cpp_class_get_assemblyname": "wawEXtudqh_",
  "il2cpp_class_get_rank": "IHEIn_peYUT",
  "il2cpp_class_get_data_size": "AdnExTezfWU",
  "il2cpp_class_get_static_field_data": "VPIARzaMflK",
  "il2cpp_stats_dump_to_file": "mbkRuXTQXlT",
  "il2cpp_stats_get_value": "QCaLfJLnFDZ",
  "il2cpp_domain_get": "vYWROSIBaqY",
  "il2cpp_domain_assembly_open": "eVpMfzFoNVv",
  "il2cpp_domain_get_assemblies": "eWnCPTqMXud",
  "il2cpp_raise_exception": "DYctyUXYSt_",
  "il2cpp_exception_from_name_msg": "ioHlpPIDY_A",
  "il2cpp_get_exception_argument_null": "IpPdhGDQiEr",
  "il2cpp_format_exception": "sWsCgsBUTbR",
  "il2cpp_format_stack_trace": "LOtrYbKFIlJ",
  "il2cpp_unhandled_exception": "HnMgguYBjlT",
  "il2cpp_native_stack_trace": "CaoyuvYMpFX",
  "il2cpp_field_get_flags": "npLPZOaWpHx",
  "il2cpp_field_get_from_reflection": "mEXkKNPiBmn",
  "il2cpp_field_get_name": "BaDrvkEJ_td",
  "il2cpp_field_get_parent": "aQIRWRNH_Sl",
  "il2cpp_field_get_object": "rNkOUsUFyKr",
  "il2cpp_field_get_offset": "_wkQNzPMMkx",
  "il2cpp_field_get_type": "HeMpvpQgjLc",
  "il2cpp_field_get_value": "aDhoIlVTkHq",
  "il2cpp_field_get_value_object": "MiaMWLdbFKS",
  "il2cpp_field_has_attribute": "INnUBPOpcDL",
  "il2cpp_field_set_value": "MYtwUdspVuX",
  "il2cpp_field_static_get_value": "PClaHWpsmD_",
  "il2cpp_field_static_set_value": "eluDxCEiTxJ",
  "il2cpp_field_set_value_object": "BpcgjSEbsgm",
  "il2cpp_field_is_literal": "GpshQOAFchK",
  "il2cpp_gc_collect": "Y_qLIKml_vn",
  "il2cpp_gc_collect_a_little": "TBTJLStLxwS",
  "il2cpp_gc_start_incremental_collection": "FqsQlrxZprO",
  "il2cpp_gc_disable": "KfNYMQnutDF",
  "il2cpp_gc_enable": "e_LdvawileZ",
  "il2cpp_gc_is_disabled": "TRJlGVHNMDr",
  "il2cpp_gc_set_mode": "IaWJzzC_HGM",
  "il2cpp_gc_get_max_time_slice_ns": "OkenhfasRtn",
  "il2cpp_gc_set_max_time_slice_ns": "CicXyIvfypD",
  "il2cpp_gc_is_incremental": "jWWKPiUXmkc",
  "il2cpp_gc_get_used_size": "gqaKhtUBCak",
  "il2cpp_gc_get_heap_size": "ehzgNDYnTRZ",
  "il2cpp_gc_wbarrier_set_field": "eMzwaBCVTA_",
  "il2cpp_gc_has_strict_wbarriers": "PZuXUsEObTc",
  "il2cpp_gc_set_external_allocation_tracker": "XYNbvqqL_JM",
  "il2cpp_gc_set_external_wbarrier_tracker": "UCvLzgwQGPy",
  "il2cpp_gc_foreach_heap": "hZznRxk_CrK",
  "il2cpp_stop_gc_world": "DdqMOYuTMvQ",
  "il2cpp_start_gc_world": "GRwfyKqZCLy",
  "il2cpp_gc_alloc_fixed": "lzZzGcZDdAl",
  "il2cpp_gc_free_fixed": "KyqDDRAUFtH",
  "il2cpp_gchandle_new": "JsSkSWSiTJe",
  "il2cpp_gchandle_new_weakref": "LgEyqZQxjmh",
  "il2cpp_gchandle_get_target": "ZTnIoxpjlWs",
  "il2cpp_gchandle_free": "QndyckjMrAz",
  "il2cpp_gchandle_foreach_get_target": "NOSmW_YnIGs",
  "il2cpp_object_header_size": "jFtOpDexxvN",
  "il2cpp_array_object_header_size": "qtwVGzUDfPP",
  "il2cpp_offset_of_array_length_in_array_object_header": "QyEPaDWoj_p",
  "il2cpp_offset_of_array_bounds_in_array_object_header": "DldWKbsZiQd",
  "il2cpp_allocation_granularity": "RHPHLhZAzY_",
  "il2cpp_unity_liveness_allocate_struct": "wfxvtpBCJZW",
  "il2cpp_unity_liveness_calculation_from_root": "CdGikCdcLdV",
  "il2cpp_unity_liveness_calculation_from_statics": "kURbkIrrPmh",
  "il2cpp_unity_liveness_finalize": "fWJQLZMsq_e",
  "il2cpp_unity_liveness_free_struct": "aQEcsMuh_gf",
  "il2cpp_method_get_return_type": "uY_UIqHsSnV",
  "il2cpp_method_get_declaring_type": "DJSYkuUnKRh",
  "il2cpp_method_get_name": "lOUAfZA_QCY",
  "il2cpp_method_get_from_reflection": "bncioFRtbNw",
  "il2cpp_method_get_object": "iespGyFrZaH",
  "il2cpp_method_is_generic": "rbyaxEvfnxD",
  "il2cpp_method_is_inflated": "kvmyxqAkhph",
  "il2cpp_method_is_instance": "jHo_cRiwkkr",
  "il2cpp_method_get_param_count": "JEELtTyXIyC",
  "il2cpp_method_get_param": "SnUQbRyqzyM",
  "il2cpp_method_get_class": "EqFxdwtzbsI",
  "il2cpp_method_has_attribute": "NNZnJmyXntA",
  "il2cpp_method_get_flags": "BmwoNhViqIq",
  "il2cpp_method_get_token": "TsuSwdPNUtz",
  "il2cpp_method_get_param_name": "lbiMoyGGtes",
  "il2cpp_property_get_flags": "mszEVbiDpnP",
  "il2cpp_property_get_get_method": "zbNYHgMzaIA",
  "il2cpp_property_get_set_method": "SApvLMTrfzk",
  "il2cpp_property_get_name": "EcZKLQnJBWx",
  "il2cpp_property_get_parent": "BjZJNCuCHud",
  "il2cpp_object_get_class": "WShTHfxrKVT",
  "il2cpp_object_get_size": "hcTHrWoWTpC",
  "il2cpp_object_get_virtual_method": "TtedkTwAsJP",
  "il2cpp_object_new": "rNalTzcsm_v",
  "il2cpp_object_unbox": "NdffHRQTudR",
  "il2cpp_value_box": "DmTfwTksZQh",
  "il2cpp_monitor_enter": "_ienJAzXxHZ",
  "il2cpp_monitor_try_enter": "GCshTk_vlns",
  "il2cpp_monitor_exit": "FQKTZLlFrjs",
  "il2cpp_monitor_pulse": "KZCppXFZWOI",
  "il2cpp_monitor_pulse_all": "NgPyZukDRiB",
  "il2cpp_monitor_wait": "OLyTFPoZDGF",
  "il2cpp_monitor_try_wait": "IRfm_DhlHMc",
  "il2cpp_runtime_invoke": "ENAhQocEjBL",
  "il2cpp_runtime_invoke_convert_args": "sbnOxfIpaDV",
  "il2cpp_runtime_class_init": "pizFDqnqWNU",
  "il2cpp_runtime_object_init": "lIkmqOmrFk_",
  "il2cpp_runtime_object_init_exception": "yWBXYnqjSnb",
  "il2cpp_runtime_unhandled_exception_policy_set": "utVMVSbqlGA",
  "il2cpp_string_length": "JVGBfYXgDts",
  "il2cpp_string_chars": "W_QUhkbfMDS",
  "il2cpp_string_new": "kouhiahfcPr",
  "il2cpp_string_new_len": "EMGwemfXJoP",
  "il2cpp_string_new_utf16": "JALJSHnWGPn",
  "il2cpp_string_new_wrapper": "DFFtDzVyZ_l",
  "il2cpp_string_intern": "NaRWliSqJ_w",
  "il2cpp_string_is_interned": "AmjoXDonDBZ",
  "il2cpp_thread_current": "hGMcz_LmtWc",
  "il2cpp_thread_attach": "UYMqyYDgBod",
  "il2cpp_thread_detach": "ydmTkVJOttU",
  "il2cpp_is_vm_thread": "AULaKijUOln",
  "il2cpp_current_thread_walk_frame_stack": "xMaVzSyoNzR",
  "il2cpp_thread_walk_frame_stack": "slcz_YMxCWu",
  "il2cpp_current_thread_get_top_frame": "gbtygppSloE",
  "il2cpp_thread_get_top_frame": "Iz_TLOrWdyc",
  "il2cpp_current_thread_get_frame_at": "tTajZKJMcHj",
  "il2cpp_thread_get_frame_at": "ATJOsCDJsuX",
  "il2cpp_current_thread_get_stack_depth": "gcaAZaAxZcb",
  "il2cpp_thread_get_stack_depth": "sahnkg_ehYA",
  "il2cpp_override_stack_backtrace": "DGoZZGzZjtl",
  "il2cpp_type_get_object": "uJeWMYwIzyS",
  "il2cpp_type_get_type": "lwLWzDCcxLX",
  "il2cpp_type_get_class_or_element_class": "CkqiiIcweGu",
  "il2cpp_type_get_name": "bQDfSyqXKOz",
  "il2cpp_type_is_byref": "XLC_ETlwVZN",
  "il2cpp_type_get_attrs": "GxZMNUsjlFW",
  "il2cpp_type_equals": "FCdmGNVFEGV",
  "il2cpp_type_get_assembly_qualified_name": "dBRKryLGpCV",
  "il2cpp_type_get_reflection_name": "rJ_xDikUDFG",
  "il2cpp_type_is_static": "mPsJ_cDjdJo",
  "il2cpp_type_is_pointer_type": "jvCaacwFszj",
  "il2cpp_image_get_assembly": "JHNHxoQufeC",
  "il2cpp_image_get_name": "fWxeHQTFUp_",
  "il2cpp_image_get_filename": "yYSDUHsngAR",
  "il2cpp_image_get_entry_point": "BIXKcKDdZKc",
  "il2cpp_image_get_class_count": "HpfVPXAvPQF",
  "il2cpp_image_get_class": "qjNBSwKeBHH",
  "il2cpp_capture_memory_snapshot": "wX_JfOMorQp",
  "il2cpp_free_captured_memory_snapshot": "RilGwOTFAJi",
  "il2cpp_set_find_plugin_callback": "oVDnBqWstUH",
  "il2cpp_register_log_callback": "xxgdHuWqVu_",
  "il2cpp_debugger_set_agent_options": "twfumEIIsOq",
  "il2cpp_is_debugger_attached": "SyFXqgdmtiO",
  "il2cpp_register_debugger_agent_transport": "DLgLoR_kcgb",
  "il2cpp_debug_foreach_method": "gSowPjWrMmH",
  "il2cpp_debug_get_method_info": "zBnVIAGDhao",
  "il2cpp_unity_install_unitytls_interface": "ObIWLrFtt_I",
  "il2cpp_custom_attrs_from_class": "D_IxRrcjMQZ",
  "il2cpp_custom_attrs_from_method": "GRDmJBQJAKZ",
  "il2cpp_custom_attrs_from_field": "GcRiXsFmvnP",
  "il2cpp_custom_attrs_get_attr": "FfyHC_QjqPV",
  "il2cpp_custom_attrs_has_attr": "ex_LFLDNhLi",
  "il2cpp_custom_attrs_construct": "JdaERZrCSLK",
  "il2cpp_custom_attrs_free": "qxAcT_hFvsL",
  "il2cpp_class_set_userdata": "xwrRrjYBnPQ",
  "il2cpp_class_get_userdata_offset": "hQXvcFmkLea",
  "il2cpp_set_default_thread_affinity": "VmaYqpLznMg",
  "il2cpp_unity_set_android_network_up_state_func": "hmFtdNfdQxW"
};

      const symbols = (Il2Cpp as any).$config.exports;
      if (symbols) {
        for (const key in symbols) {
          if (mapping[key]) {
            symbols[mapping[key]] = symbols[key];
          }
        }
      }

  Il2Cpp.perform(() => {
    const findClass = (n: string) => {
      for (const a of Il2Cpp.domain.assemblies) {
        try {
          const k = a.image.tryClass(n);
          if (k) return k;
        } catch (_) {}
      }
      return null;
    };

    const AppUtils = findClass("AnimalCompany.AppUtils");
    if (!AppUtils) {
      console.log("[-] AppUtils not found");
      return;
    }

    let method: any = null;
    for (const m of AppUtils.methods) {
      if (
        /CalculatePhotonAppVersion/i.test(m.name) &&
        (m.returnType?.name || "") === "System.String"
      ) {
        method = m;
        break;
      }
    }

    if (!method) {
      console.log("[-] CalculatePhotonAppVersion not found");
      return;
    }

    Interceptor.attach(method.virtualAddress, {
      onEnter(args: any) {
        try {
          args[2] = ptr(QUEST_PLATFORM);
        } catch (_) {}
      },
    });
  });
    } catch (e) {
      console.log("[-] Error: " + e);
    }
  }
}

loadQuestServers();
