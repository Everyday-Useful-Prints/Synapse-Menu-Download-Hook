// @ts-nocheck
const CLICK_PCM_BASE64 = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMA/f8AAAAAAwAAAAAA/f8DAAAAAAAAAP3/AwAAAAYA+v8DAP3/AwD6/xMABgAGAPb/EwDt//D/" +
    "/f8QAPb/AwANAP3/8P8DAPP/EwAAAP3/AwAAAGAAzf4DATYD4+sjCGk+xhSBjJ6P7Dr/f6AeAIAD2rZteSNaqYG/vQ4pFRb3hv6QFxMW7QPg/g0EQwJj+9b5Sv2K/nP9hv0j/xoAsP+t/wMAZgAgAPb/GgBaAEMAKgAKADoAKgAKABYAEAAWAAoAAwAWAB0AGgDz/xMA9v8AAAoADQADAO3/AwDt/wAAEAAqAP3/AAAAABoA9v8AAAMAIAD9//b/" +
    "6v8NAP3//f8WAAAAAwD6/w0A9v/j/wMA9v/6//3/+v/2/w0A8/8QAAMAEwDz/wAAEwANAPr/HQD9//r//f8NAP3/AwD9/wMA/f8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
const CLICK_PCM_SAMPLES = 384;
const CLICK_PCM_RATE = 8000;
declare const Il2Cpp: any;
declare const XRNode: any;
declare const AnimalCompany: any;
declare const IIl2Cpp: any;
function lerp(a: number, b: number, t: number): number {
    return a + (b - a) * t;
}
interface ButtonInfoConfig {
    buttonText: string;
    method?: () => void;
    enableMethod?: () => void;
    disableMethod?: () => void;
    isTogglable?: boolean;
    toolTip?: string;
    stepDown?: ButtonInfo;
    stepUp?: ButtonInfo;
}
let nextButtonActivationId = 0;
class ButtonInfo {
    readonly activationId: string;
    buttonText: string;
    method?: () => void;
    enableMethod?: () => void;
    disableMethod?: () => void;
    isTogglable: boolean;
    toolTip: string;
    enabled: boolean = false;
    stepDown?: ButtonInfo;
    stepUp?: ButtonInfo;
    constructor(config: ButtonInfoConfig) {
        this.activationId = "synapse_button_" + nextButtonActivationId++;
        this.buttonText = config.buttonText;
        this.method = config.method;
        this.enableMethod = config.enableMethod;
        this.disableMethod = config.disableMethod;
        this.isTogglable = config.isTogglable || false;
        this.toolTip = config.toolTip || "";
        this.stepDown = config.stepDown;
        this.stepUp = config.stepUp;
    }
}
Il2Cpp.$config.exports = {
	il2cpp_init: () => Il2Cpp.module.findExportByName("xCDPJp_mzeS"),
	il2cpp_init_utf16: () => Il2Cpp.module.findExportByName("ZqbXCVjOfjp"),
	il2cpp_shutdown: () => Il2Cpp.module.findExportByName("AaFj_FHKudI"),
	il2cpp_set_config_dir: () => Il2Cpp.module.findExportByName("QWQedEgddFi"),
	il2cpp_set_data_dir: () => Il2Cpp.module.findExportByName("tBQbdjbhTnh"),
	il2cpp_set_temp_dir: () => Il2Cpp.module.findExportByName("rMCuOKP_EvH"),
	il2cpp_set_commandline_arguments: () => Il2Cpp.module.findExportByName("jJGXLQGlGcl"),
	il2cpp_set_commandline_arguments_utf16: () => Il2Cpp.module.findExportByName("ytrbfsCtOFH"),
	il2cpp_set_config_utf16: () => Il2Cpp.module.findExportByName("OSLVcqAjjGg"),
	il2cpp_set_config: () => Il2Cpp.module.findExportByName("ZEsAwVRbLGQ"),
	il2cpp_set_memory_callbacks: () => Il2Cpp.module.findExportByName("qEZlbwRBnvD"),
	il2cpp_memory_pool_set_region_size: () => Il2Cpp.module.findExportByName("ZN_l_dtjQtw"),
	il2cpp_memory_pool_get_region_size: () => Il2Cpp.module.findExportByName("nEAqbKLyvcz"),
	il2cpp_get_corlib: () => Il2Cpp.module.findExportByName("IOusicmQMEB"),
	il2cpp_add_internal_call: () => Il2Cpp.module.findExportByName("knKeOmPkPFu"),
	il2cpp_resolve_icall: () => Il2Cpp.module.findExportByName("QEqUHFkCGBP"),
	il2cpp_alloc: () => Il2Cpp.module.findExportByName("AzvdAiTUtOK"),
	il2cpp_free: () => Il2Cpp.module.findExportByName("BQCsCqwLmDN"),
	il2cpp_array_class_get: () => Il2Cpp.module.findExportByName("klQCLLgsDlu"),
	il2cpp_array_length: () => Il2Cpp.module.findExportByName("cIhaTpovMji"),
	il2cpp_array_get_byte_length: () => Il2Cpp.module.findExportByName("HyaujMBtwtt"),
	il2cpp_array_new: () => Il2Cpp.module.findExportByName("hyssMqkRmf_"),
	il2cpp_array_new_specific: () => Il2Cpp.module.findExportByName("gNblELtgcNc"),
	il2cpp_array_new_full: () => Il2Cpp.module.findExportByName("DZvNpefSnzx"),
	il2cpp_bounded_array_class_get: () => Il2Cpp.module.findExportByName("octXFmkeHOi"),
	il2cpp_array_element_size: () => Il2Cpp.module.findExportByName("SUpHqQSgWOX"),
	il2cpp_assembly_get_image: () => Il2Cpp.module.findExportByName("MyRlzDyltOd"),
	il2cpp_class_for_each: () => Il2Cpp.module.findExportByName("XZPYHzJSgah"),
	il2cpp_class_enum_basetype: () => Il2Cpp.module.findExportByName("XjtnskqKVUr"),
	il2cpp_class_is_inited: () => Il2Cpp.module.findExportByName("tklVWUKxaJn"),
	il2cpp_class_is_generic: () => Il2Cpp.module.findExportByName("ktNxjTMasJM"),
	il2cpp_class_is_inflated: () => Il2Cpp.module.findExportByName("zPClcdwnARt"),
	il2cpp_class_is_assignable_from: () => Il2Cpp.module.findExportByName("BuTeBzFsVze"),
	il2cpp_class_is_subclass_of: () => Il2Cpp.module.findExportByName("KoFlWlxVHtU"),
	il2cpp_class_has_parent: () => Il2Cpp.module.findExportByName("zMNOkdKVEIY"),
	il2cpp_class_from_il2cpp_type: () => Il2Cpp.module.findExportByName("aW_yXt_Ffus"),
	il2cpp_class_from_name: () => Il2Cpp.module.findExportByName("blVnIJnzVVL"),
	il2cpp_class_from_system_type: () => Il2Cpp.module.findExportByName("OlenWmqDvgw"),
	il2cpp_class_get_element_class: () => Il2Cpp.module.findExportByName("VTwPlcNQVzK"),
	il2cpp_class_get_events: () => Il2Cpp.module.findExportByName("b_rW_KZHmiz"),
	il2cpp_class_get_fields: () => Il2Cpp.module.findExportByName("vSIhWZQsRnX"),
	il2cpp_class_get_nested_types: () => Il2Cpp.module.findExportByName("EKlvxYUxwdU"),
	il2cpp_class_get_interfaces: () => Il2Cpp.module.findExportByName("lSXRrEylKoi"),
	il2cpp_class_get_properties: () => Il2Cpp.module.findExportByName("koejzmhGwjn"),
	il2cpp_class_get_property_from_name: () => Il2Cpp.module.findExportByName("tIm_XJXEDfJ"),
	il2cpp_class_get_field_from_name: () => Il2Cpp.module.findExportByName("_UWEpsjSZYw"),
	il2cpp_class_get_methods: () => Il2Cpp.module.findExportByName("ubUHIeYuVrf"),
	il2cpp_class_get_method_from_name: () => Il2Cpp.module.findExportByName("MPPHTPLMF_Y"),
	il2cpp_class_get_name: () => Il2Cpp.module.findExportByName("sRGpBOHuNaf"),
	il2cpp_type_get_name_chunked: () => Il2Cpp.module.findExportByName("jEYlDNHXCmx"),
	il2cpp_class_get_namespace: () => Il2Cpp.module.findExportByName("kgbeobvUXbC"),
	il2cpp_class_get_parent: () => Il2Cpp.module.findExportByName("FAWrOGkQtH_"),
	il2cpp_class_get_declaring_type: () => Il2Cpp.module.findExportByName("ufFtNJvyanb"),
	il2cpp_class_instance_size: () => Il2Cpp.module.findExportByName("pHtFKSE_ors"),
	il2cpp_class_num_fields: () => Il2Cpp.module.findExportByName("jzrcPvtNmuP"),
	il2cpp_class_is_valuetype: () => Il2Cpp.module.findExportByName("EJLiPJExPpK"),
	il2cpp_class_value_size: () => Il2Cpp.module.findExportByName("ZDpNRRi_PmD"),
	il2cpp_class_is_blittable: () => Il2Cpp.module.findExportByName("lpTdNKzgedg"),
	il2cpp_class_get_flags: () => Il2Cpp.module.findExportByName("zQMAyFZSnTi"),
	il2cpp_class_is_abstract: () => Il2Cpp.module.findExportByName("CcyQCTySBRG"),
	il2cpp_class_is_interface: () => Il2Cpp.module.findExportByName("GVeJnHPGmwJ"),
	il2cpp_class_array_element_size: () => Il2Cpp.module.findExportByName("tsokykYhDJM"),
	il2cpp_class_from_type: () => Il2Cpp.module.findExportByName("dXUZcSZh_cf"),
	il2cpp_class_get_type: () => Il2Cpp.module.findExportByName("zWBVAnOvBVc"),
	il2cpp_class_get_type_token: () => Il2Cpp.module.findExportByName("bc_kJCvvdhn"),
	il2cpp_class_has_attribute: () => Il2Cpp.module.findExportByName("xPbYwZEbXMX"),
	il2cpp_class_has_references: () => Il2Cpp.module.findExportByName("MUbKvMPrROI"),
	il2cpp_class_is_enum: () => Il2Cpp.module.findExportByName("tU_olJxtOlw"),
	il2cpp_class_get_image: () => Il2Cpp.module.findExportByName("KI_x_GjRvst"),
	il2cpp_class_get_assemblyname: () => Il2Cpp.module.findExportByName("dkiPtdVzFXd"),
	il2cpp_class_get_rank: () => Il2Cpp.module.findExportByName("XOUiyIAkYDg"),
	il2cpp_class_get_data_size: () => Il2Cpp.module.findExportByName("lzXdecvgfDO"),
	il2cpp_class_get_static_field_data: () => Il2Cpp.module.findExportByName("cJGgwdJsDwS"),
	il2cpp_stats_dump_to_file: () => Il2Cpp.module.findExportByName("cxJSqUeEpgs"),
	il2cpp_stats_get_value: () => Il2Cpp.module.findExportByName("mutbtogsADF"),
	il2cpp_domain_get: () => Il2Cpp.module.findExportByName("TePOWiJYCok"),
	il2cpp_domain_assembly_open: () => Il2Cpp.module.findExportByName("kEaKQRTnpgj"),
	il2cpp_domain_get_assemblies: () => Il2Cpp.module.findExportByName("Uv_hdDcWIQo"),
	il2cpp_raise_exception: () => Il2Cpp.module.findExportByName("TvWzGWcSJHI"),
	il2cpp_exception_from_name_msg: () => Il2Cpp.module.findExportByName("JPzoCcfZKNB"),
	il2cpp_get_exception_argument_null: () => Il2Cpp.module.findExportByName("woOPyBANdzU"),
	il2cpp_format_exception: () => Il2Cpp.module.findExportByName("YlFMOFvcFxH"),
	il2cpp_format_stack_trace: () => Il2Cpp.module.findExportByName("aCcgkapPTNy"),
	il2cpp_unhandled_exception: () => Il2Cpp.module.findExportByName("tFDMvnpznIk"),
	il2cpp_native_stack_trace: () => Il2Cpp.module.findExportByName("KW_ZpWCLTPS"),
	il2cpp_field_get_flags: () => Il2Cpp.module.findExportByName("QXQUthLIhLG"),
	il2cpp_field_get_from_reflection: () => Il2Cpp.module.findExportByName("HNLtKcVGOuK"),
	il2cpp_field_get_name: () => Il2Cpp.module.findExportByName("aKmznHggaKm"),
	il2cpp_field_get_parent: () => Il2Cpp.module.findExportByName("OlixqUaPHfi"),
	il2cpp_field_get_object: () => Il2Cpp.module.findExportByName("IDtZAkSfAwl"),
	il2cpp_field_get_offset: () => Il2Cpp.module.findExportByName("aFGBbDRFjtr"),
	il2cpp_field_get_type: () => Il2Cpp.module.findExportByName("TUvTj_izTIS"),
	il2cpp_field_get_value: () => Il2Cpp.module.findExportByName("IvwAcbuROYe"),
	il2cpp_field_get_value_object: () => Il2Cpp.module.findExportByName("HBIboxJUuhf"),
	il2cpp_field_has_attribute: () => Il2Cpp.module.findExportByName("EOdVXDqQ_iJ"),
	il2cpp_field_set_value: () => Il2Cpp.module.findExportByName("wCxJmKnhFiN"),
	il2cpp_field_static_get_value: () => Il2Cpp.module.findExportByName("KmGlHwQHJJW"),
	il2cpp_field_static_set_value: () => Il2Cpp.module.findExportByName("MwKaQtlaJZL"),
	il2cpp_field_set_value_object: () => Il2Cpp.module.findExportByName("yrAiciIZVYf"),
	il2cpp_field_is_literal: () => Il2Cpp.module.findExportByName("JsfzVppGNYt"),
	il2cpp_gc_collect: () => Il2Cpp.module.findExportByName("YiwtMPVZwDm"),
	il2cpp_gc_collect_a_little: () => Il2Cpp.module.findExportByName("plXriRPHpve"),
	il2cpp_gc_start_incremental_collection: () => Il2Cpp.module.findExportByName("TNcJrkKnuKl"),
	il2cpp_gc_disable: () => Il2Cpp.module.findExportByName("bcRDgxAGPgd"),
	il2cpp_gc_enable: () => Il2Cpp.module.findExportByName("AayXCBRdkWW"),
	il2cpp_gc_is_disabled: () => Il2Cpp.module.findExportByName("XgkoCUUjuyh"),
	il2cpp_gc_set_mode: () => Il2Cpp.module.findExportByName("ekqYnOokWNV"),
	il2cpp_gc_get_max_time_slice_ns: () => Il2Cpp.module.findExportByName("zHhjLRfAHtw"),
	il2cpp_gc_set_max_time_slice_ns: () => Il2Cpp.module.findExportByName("tWdrFlOCFfA"),
	il2cpp_gc_is_incremental: () => Il2Cpp.module.findExportByName("nvyO_jrha_q"),
	il2cpp_gc_get_used_size: () => Il2Cpp.module.findExportByName("FcANNsOgXXu"),
	il2cpp_gc_get_heap_size: () => Il2Cpp.module.findExportByName("QMMderjpggT"),
	il2cpp_gc_wbarrier_set_field: () => Il2Cpp.module.findExportByName("VBefCBvEDBF"),
	il2cpp_gc_has_strict_wbarriers: () => Il2Cpp.module.findExportByName("arqkqHFdkyK"),
	il2cpp_gc_set_external_allocation_tracker: () => Il2Cpp.module.findExportByName("qDJzXPFgIbm"),
	il2cpp_gc_set_external_wbarrier_tracker: () => Il2Cpp.module.findExportByName("XKtCPZLQjVr"),
	il2cpp_gc_foreach_heap: () => Il2Cpp.module.findExportByName("XtjBmxURALb"),
	il2cpp_stop_gc_world: () => Il2Cpp.module.findExportByName("NqDDTahIap_"),
	il2cpp_start_gc_world: () => Il2Cpp.module.findExportByName("gvWaUYvVQWC"),
	il2cpp_gc_alloc_fixed: () => Il2Cpp.module.findExportByName("cDSlEMdELUx"),
	il2cpp_gc_free_fixed: () => Il2Cpp.module.findExportByName("HsOVlPhUH_G"),
	il2cpp_gchandle_new: () => Il2Cpp.module.findExportByName("IRXrpRLnZuH"),
	il2cpp_gchandle_new_weakref: () => Il2Cpp.module.findExportByName("ntsrgtE_gmq"),
	il2cpp_gchandle_get_target: () => Il2Cpp.module.findExportByName("RLikk_EnIAG"),
	il2cpp_gchandle_free: () => Il2Cpp.module.findExportByName("onRQxxCSLFA"),
	il2cpp_gchandle_foreach_get_target: () => Il2Cpp.module.findExportByName("pnDlduSuOKk"),
	il2cpp_object_header_size: () => Il2Cpp.module.findExportByName("LekeWrTFScy"),
	il2cpp_array_object_header_size: () => Il2Cpp.module.findExportByName("rAAImqjcbda"),
	il2cpp_offset_of_array_length_in_array_object_header: () => Il2Cpp.module.findExportByName("mLloeCrWpvu"),
	il2cpp_offset_of_array_bounds_in_array_object_header: () => Il2Cpp.module.findExportByName("zhRdhCZKeff"),
	il2cpp_allocation_granularity: () => Il2Cpp.module.findExportByName("jyKoULDRlpZ"),
	il2cpp_unity_liveness_allocate_struct: () => Il2Cpp.module.findExportByName("ulPxSlEUvZH"),
	il2cpp_unity_liveness_calculation_from_root: () => Il2Cpp.module.findExportByName("cxhmHmcINCG"),
	il2cpp_unity_liveness_calculation_from_statics: () => Il2Cpp.module.findExportByName("mGOJbwSvVav"),
	il2cpp_unity_liveness_finalize: () => Il2Cpp.module.findExportByName("ytCAuoGRrhz"),
	il2cpp_unity_liveness_free_struct: () => Il2Cpp.module.findExportByName("iMItnEgCrfS"),
	il2cpp_method_get_return_type: () => Il2Cpp.module.findExportByName("HcqEPaJBoCO"),
	il2cpp_method_get_declaring_type: () => Il2Cpp.module.findExportByName("fhUctJAvLaL"),
	il2cpp_method_get_name: () => Il2Cpp.module.findExportByName("TyPCyMAhlG_"),
	il2cpp_method_get_from_reflection: () => Il2Cpp.module.findExportByName("pfulaKgFtoJ"),
	il2cpp_method_get_object: () => Il2Cpp.module.findExportByName("OewewtUiUWx"),
	il2cpp_method_is_generic: () => Il2Cpp.module.findExportByName("UCJjTEKvUFc"),
	il2cpp_method_is_inflated: () => Il2Cpp.module.findExportByName("wG_WACTzXNx"),
	il2cpp_method_is_instance: () => Il2Cpp.module.findExportByName("SkUxoHJHsuS"),
	il2cpp_method_get_param_count: () => Il2Cpp.module.findExportByName("an_HGvXfQLu"),
	il2cpp_method_get_param: () => Il2Cpp.module.findExportByName("FgayXDFDIpI"),
	il2cpp_method_get_class: () => Il2Cpp.module.findExportByName("axMoEEmckFA"),
	il2cpp_method_has_attribute: () => Il2Cpp.module.findExportByName("IIsnw__KKrO"),
	il2cpp_method_get_flags: () => Il2Cpp.module.findExportByName("WhUsujwHcdW"),
	il2cpp_method_get_token: () => Il2Cpp.module.findExportByName("RJOJBfkrLid"),
	il2cpp_method_get_param_name: () => Il2Cpp.module.findExportByName("Qv_Lymcbvkr"),
	il2cpp_property_get_flags: () => Il2Cpp.module.findExportByName("vnYGnnrJ_lf"),
	il2cpp_property_get_get_method: () => Il2Cpp.module.findExportByName("hWCNUcLaEsi"),
	il2cpp_property_get_set_method: () => Il2Cpp.module.findExportByName("QdXlfKyFEfa"),
	il2cpp_property_get_name: () => Il2Cpp.module.findExportByName("dpgfxqvhHEu"),
	il2cpp_property_get_parent: () => Il2Cpp.module.findExportByName("rzHjIXbuWtl"),
	il2cpp_object_get_class: () => Il2Cpp.module.findExportByName("hVrBwdNCwuI"),
	il2cpp_object_get_size: () => Il2Cpp.module.findExportByName("fUdjDiUUFY_"),
	il2cpp_object_get_virtual_method: () => Il2Cpp.module.findExportByName("QuqafDpIvuc"),
	il2cpp_object_new: () => Il2Cpp.module.findExportByName("aPSJyQnIbAO"),
	il2cpp_object_unbox: () => Il2Cpp.module.findExportByName("FxIxqSBRXHB"),
	il2cpp_value_box: () => Il2Cpp.module.findExportByName("mIgoLXOpnnJ"),
	il2cpp_monitor_enter: () => Il2Cpp.module.findExportByName("wcDzQpNfhdE"),
	il2cpp_monitor_try_enter: () => Il2Cpp.module.findExportByName("n_OqotbNMro"),
	il2cpp_monitor_exit: () => Il2Cpp.module.findExportByName("VbziibSQxBx"),
	il2cpp_monitor_pulse: () => Il2Cpp.module.findExportByName("hevCYcUmOML"),
	il2cpp_monitor_pulse_all: () => Il2Cpp.module.findExportByName("HEROEtzlsYp"),
	il2cpp_monitor_wait: () => Il2Cpp.module.findExportByName("PYmwlltlPWF"),
	il2cpp_monitor_try_wait: () => Il2Cpp.module.findExportByName("hqdaXxP_UCq"),
	il2cpp_runtime_invoke: () => Il2Cpp.module.findExportByName("LntpjkZasaf"),
	il2cpp_runtime_invoke_convert_args: () => Il2Cpp.module.findExportByName("vRBIyVznVGo"),
	il2cpp_runtime_class_init: () => Il2Cpp.module.findExportByName("eGxBZFieEyc"),
	il2cpp_runtime_object_init: () => Il2Cpp.module.findExportByName("dMFhwnOsYBc"),
	il2cpp_runtime_object_init_exception: () => Il2Cpp.module.findExportByName("ZkaLJGDDFwL"),
	il2cpp_runtime_unhandled_exception_policy_set: () => Il2Cpp.module.findExportByName("eRkLDDEmdDf"),
	il2cpp_string_length: () => Il2Cpp.module.findExportByName("XsCqiguhMOH"),
	il2cpp_string_chars: () => Il2Cpp.module.findExportByName("KoS_BpgbTak"),
	il2cpp_string_new: () => Il2Cpp.module.findExportByName("AExBXYCiFGe"),
	il2cpp_string_new_len: () => Il2Cpp.module.findExportByName("kNTRttbsnWZ"),
	il2cpp_string_new_utf16: () => Il2Cpp.module.findExportByName("AMeNDMLAIsV"),
	il2cpp_string_new_wrapper: () => Il2Cpp.module.findExportByName("hrexVJmWSLR"),
	il2cpp_string_intern: () => Il2Cpp.module.findExportByName("BxWgMYThxdi"),
	il2cpp_string_is_interned: () => Il2Cpp.module.findExportByName("XEHiQJKSLtV"),
	il2cpp_thread_current: () => Il2Cpp.module.findExportByName("pFgkLOJl_FY"),
	il2cpp_thread_attach: () => Il2Cpp.module.findExportByName("dhDzaQfwysn"),
	il2cpp_thread_detach: () => Il2Cpp.module.findExportByName("nYTfgdzWfxx"),
	il2cpp_is_vm_thread: () => Il2Cpp.module.findExportByName("AhBnUZ_WKBr"),
	il2cpp_current_thread_walk_frame_stack: () => Il2Cpp.module.findExportByName("yRJzZUHWunq"),
	il2cpp_thread_walk_frame_stack: () => Il2Cpp.module.findExportByName("vkDLObbvr_o"),
	il2cpp_current_thread_get_top_frame: () => Il2Cpp.module.findExportByName("EoKydq_pfDJ"),
	il2cpp_thread_get_top_frame: () => Il2Cpp.module.findExportByName("hJTHdEZdxqK"),
	il2cpp_current_thread_get_frame_at: () => Il2Cpp.module.findExportByName("XzzDZJWkSlo"),
	il2cpp_thread_get_frame_at: () => Il2Cpp.module.findExportByName("XTvZokovhlG"),
	il2cpp_current_thread_get_stack_depth: () => Il2Cpp.module.findExportByName("FdFeXcbzcHa"),
	il2cpp_thread_get_stack_depth: () => Il2Cpp.module.findExportByName("dekmbDdgOMd"),
	il2cpp_override_stack_backtrace: () => Il2Cpp.module.findExportByName("jrjOmmZqJqx"),
	il2cpp_type_get_object: () => Il2Cpp.module.findExportByName("xczllKdxClr"),
	il2cpp_type_get_type: () => Il2Cpp.module.findExportByName("fdVJYqNUc_w"),
	il2cpp_type_get_class_or_element_class: () => Il2Cpp.module.findExportByName("ZyPukpQiKfF"),
	il2cpp_type_get_name: () => Il2Cpp.module.findExportByName("dsUWIUQhKAG"),
	il2cpp_type_is_byref: () => Il2Cpp.module.findExportByName("zzQeIVsiLGu"),
	il2cpp_type_get_attrs: () => Il2Cpp.module.findExportByName("ByvGmmQGHOG"),
	il2cpp_type_equals: () => Il2Cpp.module.findExportByName("KyQDrHlskeZ"),
	il2cpp_type_get_assembly_qualified_name: () => Il2Cpp.module.findExportByName("lvxtcieVoQB"),
	il2cpp_type_get_reflection_name: () => Il2Cpp.module.findExportByName("cWhUBwYnAcU"),
	il2cpp_type_is_static: () => Il2Cpp.module.findExportByName("bScpd_EmXLp"),
	il2cpp_type_is_pointer_type: () => Il2Cpp.module.findExportByName("fdvFlvUyQHf"),
	il2cpp_image_get_assembly: () => Il2Cpp.module.findExportByName("bjGrrFSzkl_"),
	il2cpp_image_get_name: () => Il2Cpp.module.findExportByName("DjqPLsMfjjm"),
	il2cpp_image_get_filename: () => Il2Cpp.module.findExportByName("sLbhZgBZvSW"),
	il2cpp_image_get_entry_point: () => Il2Cpp.module.findExportByName("IdotqQlSwUi"),
	il2cpp_image_get_class_count: () => Il2Cpp.module.findExportByName("roRKbmFTcPM"),
	il2cpp_image_get_class: () => Il2Cpp.module.findExportByName("DxBIJtoqWDE"),
	il2cpp_capture_memory_snapshot: () => Il2Cpp.module.findExportByName("KhiWsPmBRXW"),
	il2cpp_free_captured_memory_snapshot: () => Il2Cpp.module.findExportByName("FfekQygnJOr"),
	il2cpp_set_find_plugin_callback: () => Il2Cpp.module.findExportByName("VHIXIMeHdbU"),
	il2cpp_register_log_callback: () => Il2Cpp.module.findExportByName("JbjKRLVfnjX"),
	il2cpp_debugger_set_agent_options: () => Il2Cpp.module.findExportByName("lKurOH_fsOb"),
	il2cpp_is_debugger_attached: () => Il2Cpp.module.findExportByName("fwwiiOgnafK"),
	il2cpp_register_debugger_agent_transport: () => Il2Cpp.module.findExportByName("uDzNAwaEtSw"),
	il2cpp_debug_foreach_method: () => Il2Cpp.module.findExportByName("_smBemAYaQc"),
	il2cpp_debug_get_method_info: () => Il2Cpp.module.findExportByName("PnydcRRsmRk"),
	il2cpp_unity_install_unitytls_interface: () => Il2Cpp.module.findExportByName("A_UWYxBLgcs"),
	il2cpp_custom_attrs_from_class: () => Il2Cpp.module.findExportByName("TN_BVjO_CUL"),
	il2cpp_custom_attrs_from_method: () => Il2Cpp.module.findExportByName("mZudfyxoPyI"),
	il2cpp_custom_attrs_from_field: () => Il2Cpp.module.findExportByName("eReNCAOCeZI"),
	il2cpp_custom_attrs_get_attr: () => Il2Cpp.module.findExportByName("OiBlYkaMLVQ"),
	il2cpp_custom_attrs_has_attr: () => Il2Cpp.module.findExportByName("JtwUJlLotOt"),
	il2cpp_custom_attrs_construct: () => Il2Cpp.module.findExportByName("XQLCEz_yRtI"),
	il2cpp_custom_attrs_free: () => Il2Cpp.module.findExportByName("p_gWLSGMdyA"),
	il2cpp_class_set_userdata: () => Il2Cpp.module.findExportByName("BuMyQxePUCQ"),
	il2cpp_class_get_userdata_offset: () => Il2Cpp.module.findExportByName("MNByCP_XvC_"),
	il2cpp_set_default_thread_affinity: () => Il2Cpp.module.findExportByName("oJvnZgAvEfe"),
	il2cpp_unity_set_android_network_up_state_func: () => Il2Cpp.module.findExportByName("NkAUpWcQZmp"),
};
function n5RemapBridgeExports() {
    const bridgeNames = {
        il2cpp_init: "ITAtHOcJERU",
        il2cpp_init_utf16: "BlSILClfTep",
        il2cpp_shutdown: "jCVEUrxpedn",
        il2cpp_set_config_dir: "JryofZSebey",
        il2cpp_set_data_dir: "cgaouadRzLD",
        il2cpp_set_temp_dir: "HdRIGbVLnGY",
        il2cpp_set_commandline_arguments: "saQPIPNVdZU",
        il2cpp_set_commandline_arguments_utf16: "XvXKfb_yQaZ",
        il2cpp_set_config_utf16: "j_LI_KVfkVR",
        il2cpp_set_config: "zJjLhNYNYiI",
        il2cpp_set_memory_callbacks: "hEJfNbmJJxm",
        il2cpp_memory_pool_set_region_size: "ayTpxtziFgv",
        il2cpp_memory_pool_get_region_size: "XBJCaQzTRzd",
        il2cpp_get_corlib: "W_EZfNinobw",
        il2cpp_add_internal_call: "zqFIKBCzVXG",
        il2cpp_resolve_icall: "VDohxPcfmOo",
        il2cpp_alloc: "nbgkwNMFMWS",
        il2cpp_free: "NKdwYSJKuWa",
        il2cpp_array_class_get: "uGAKdfVXUYF",
        il2cpp_array_length: "zkLVaBozXmK",
        il2cpp_array_get_byte_length: "EzrhlBEPUnt",
        il2cpp_array_new: "uyODkVCPbB_",
        il2cpp_array_new_specific: "DzDXafEZdYY",
        il2cpp_array_new_full: "vXjAPzjdlRx",
        il2cpp_bounded_array_class_get: "AV_RyTzfUjq",
        il2cpp_array_element_size: "KHIS_rBpjOx",
        il2cpp_assembly_get_image: "jSgUUtKmzjJ",
        il2cpp_class_for_each: "qTaypczsgNu",
        il2cpp_class_enum_basetype: "xCrKFJVatRx",
        il2cpp_class_is_inited: "gohwXWMoVsP",
        il2cpp_class_is_generic: "YAnWWaaSyxY",
        il2cpp_class_is_inflated: "BsaDwKfCNUz",
        il2cpp_class_is_assignable_from: "YUSKnDCkyvb",
        il2cpp_class_is_subclass_of: "XzXAfzwGxpu",
        il2cpp_class_has_parent: "JyPTPPoncKG",
        il2cpp_class_from_il2cpp_type: "wNBNvEBtQlW",
        il2cpp_class_from_name: "FyvyMhNLRDJ",
        il2cpp_class_from_system_type: "nAMbSbUGKXf",
        il2cpp_class_get_element_class: "bXWTIbdsnKM",
        il2cpp_class_get_events: "BEcsOEyuyjx",
        il2cpp_class_get_fields: "ZiMTlEgMOse",
        il2cpp_class_get_nested_types: "tqxCIJuCNxS",
        il2cpp_class_get_interfaces: "bSipThwVkzk",
        il2cpp_class_get_properties: "pFBYzvaneKA",
        il2cpp_class_get_property_from_name: "hCSUmsEHcYJ",
        il2cpp_class_get_field_from_name: "JxphAhsacRP",
        il2cpp_class_get_methods: "rkYWCsMMSRJ",
        il2cpp_class_get_method_from_name: "KehkDYpuqtm",
        il2cpp_class_get_name: "BKyvutYOQWy",
        il2cpp_type_get_name_chunked: "WVd_wXShTtc",
        il2cpp_class_get_namespace: "jUIxtjpaEgZ",
        il2cpp_class_get_parent: "EpBIFuvgYkH",
        il2cpp_class_get_declaring_type: "blRcfaOEkdA",
        il2cpp_class_instance_size: "vGzmvsgxiLa",
        il2cpp_class_num_fields: "lZlznRxDwlE",
        il2cpp_class_is_valuetype: "_yg__YmkhDx",
        il2cpp_class_value_size: "PELMfsGlYBZ",
        il2cpp_class_is_blittable: "wsSMQyuNKUT",
        il2cpp_class_get_flags: "nZLTJNkZFfG",
        il2cpp_class_is_abstract: "niLRakrIsUc",
        il2cpp_class_is_interface: "pHHrkHlFFxT",
        il2cpp_class_array_element_size: "imPLRdorAxR",
        il2cpp_class_from_type: "DqxnMROBhFx",
        il2cpp_class_get_type: "NzhKMx_zMAJ",
        il2cpp_class_get_type_token: "HyxXnCDkecx",
        il2cpp_class_has_attribute: "JeSnHuExdXB",
        il2cpp_class_has_references: "EkalqYpjVcc",
        il2cpp_class_is_enum: "ZaZWOL_XAAG",
        il2cpp_class_get_image: "ULpdDBUoYyf",
        il2cpp_class_get_assemblyname: "CkeihoBVqsA",
        il2cpp_class_get_rank: "_pDSOzAxRxU",
        il2cpp_class_get_data_size: "MyS_hpoaRFP",
        il2cpp_class_get_static_field_data: "BTDPpKx_xsF",
        il2cpp_stats_dump_to_file: "xGrkIVbsYvQ",
        il2cpp_stats_get_value: "TNFyIMmnJYn",
        il2cpp_domain_get: "QXGKPSTsshv",
        il2cpp_domain_assembly_open: "CDpeHBKPTjI",
        il2cpp_domain_get_assemblies: "HvmuUYxcjJQ",
        il2cpp_raise_exception: "OpifnxBSIGQ",
        il2cpp_exception_from_name_msg: "zlpZvaBeFzF",
        il2cpp_get_exception_argument_null: "VRbZnnSLRxy",
        il2cpp_format_exception: "AUGxm_hdVby",
        il2cpp_format_stack_trace: "gTXVUdSQKbL",
        il2cpp_unhandled_exception: "BjOGxXDEyfb",
        il2cpp_native_stack_trace: "EEHjoOaDjxY",
        il2cpp_field_get_flags: "sPTtiWyVLvA",
        il2cpp_field_get_from_reflection: "KeLPjHSGaBe",
        il2cpp_field_get_name: "cFFMPsnQkYN",
        il2cpp_field_get_parent: "tTAKxvovSsn",
        il2cpp_field_get_object: "MRdaMwgCpuK",
        il2cpp_field_get_offset: "LHgbcouwEdH",
        il2cpp_field_get_type: "vTjLsZNYsgm",
        il2cpp_field_get_value: "WpIpaCLVtoX",
        il2cpp_field_get_value_object: "FmTZgtZLpcx",
        il2cpp_field_has_attribute: "BmRPqycjkIA",
        il2cpp_field_set_value: "hYFOwqDwWmw",
        il2cpp_field_static_get_value: "SKmtNUnQodL",
        il2cpp_field_static_set_value: "CDXcwprKcDQ",
        il2cpp_field_set_value_object: "ELfQKYxtWjA",
        il2cpp_field_is_literal: "kofUhyXWhsx",
        il2cpp_gc_collect: "rxMnIkmwwfr",
        il2cpp_gc_collect_a_little: "SwDfg_deZSI",
        il2cpp_gc_start_incremental_collection: "G_fzrBpwCAR",
        il2cpp_gc_disable: "wDInLGLkAey",
        il2cpp_gc_enable: "l_zrrZmryYB",
        il2cpp_gc_is_disabled: "YJSHDwxYChD",
        il2cpp_gc_set_mode: "EuiIVss_doF",
        il2cpp_gc_get_max_time_slice_ns: "cmIWAzRixkW",
        il2cpp_gc_set_max_time_slice_ns: "uztINxPKuvv",
        il2cpp_gc_is_incremental: "EThwCrxZBrf",
        il2cpp_gc_get_used_size: "EUxUI_FEuYV",
        il2cpp_gc_get_heap_size: "Jh__gmjiyRU",
        il2cpp_gc_wbarrier_set_field: "ZBkRwmxBszr",
        il2cpp_gc_has_strict_wbarriers: "iGsugrYeSiG",
        il2cpp_gc_set_external_allocation_tracker: "MlekwcLdkV_",
        il2cpp_gc_set_external_wbarrier_tracker: "KcJlGhmUlKj",
        il2cpp_gc_foreach_heap: "CpPYcguYHdT",
        il2cpp_stop_gc_world: "daGRpZwGJWi",
        il2cpp_start_gc_world: "bamnjNlEeUN",
        il2cpp_gc_alloc_fixed: "DvWJRvbEHSE",
        il2cpp_gc_free_fixed: "SqPTWHPOedy",
        il2cpp_gchandle_new: "XWHBgdaTbpZ",
        il2cpp_gchandle_new_weakref: "rLGufLFxvaK",
        il2cpp_gchandle_get_target: "nmuHCRJdURA",
        il2cpp_gchandle_free: "vhbSCe_tXHi",
        il2cpp_gchandle_foreach_get_target: "h_myBtxOvDN",
        il2cpp_object_header_size: "ZUdwTNNUuRH",
        il2cpp_array_object_header_size: "YmEHeZNSJMo",
        il2cpp_offset_of_array_length_in_array_object_header: "paWBeqlyuHj",
        il2cpp_offset_of_array_bounds_in_array_object_header: "kOUHuocCvJW",
        il2cpp_allocation_granularity: "R_FAxsUMiEw",
        il2cpp_unity_liveness_allocate_struct: "xGozcIPTgvq",
        il2cpp_unity_liveness_calculation_from_root: "jyztBfwKdVu",
        il2cpp_unity_liveness_calculation_from_statics: "mVdIOVxZehR",
        il2cpp_unity_liveness_finalize: "cD_AxP_DLxj",
        il2cpp_unity_liveness_free_struct: "YCaFJbsWOQL",
        il2cpp_method_get_return_type: "wNWoU_rKrWK",
        il2cpp_method_get_declaring_type: "JxdNRDLRSCZ",
        il2cpp_method_get_name: "ayDZwIpRwyB",
        il2cpp_method_get_from_reflection: "uzMqolwNNHg",
        il2cpp_method_get_object: "QJLdHBQonMo",
        il2cpp_method_is_generic: "McrI_RbkHcj",
        il2cpp_method_is_inflated: "PVjShiOvsxt",
        il2cpp_method_is_instance: "uXbnEwTdviU",
        il2cpp_method_get_param_count: "ZBshdAOKZYu",
        il2cpp_method_get_param: "neTyOIDNdQt",
        il2cpp_method_get_class: "uBl_utkxpVH",
        il2cpp_method_has_attribute: "gWAUjWoURJM",
        il2cpp_method_get_flags: "QtneASmrREC",
        il2cpp_method_get_token: "lgVrRBIYKqQ",
        il2cpp_method_get_param_name: "dFHZqoystRU",
        il2cpp_property_get_flags: "OJuYYtUNNGv",
        il2cpp_property_get_get_method: "Eg_ruGcFlCn",
        il2cpp_property_get_set_method: "FSwZUZsOjNE",
        il2cpp_property_get_name: "jtpOMctdvlh",
        il2cpp_property_get_parent: "hItzOVJNJkY",
        il2cpp_object_get_class: "ZjrdMEkmuJA",
        il2cpp_object_get_size: "VwFJVFspdOf",
        il2cpp_object_get_virtual_method: "fmuimZSfNxX",
        il2cpp_object_new: "ScVayGdXprz",
        il2cpp_object_unbox: "anLbQchRyPa",
        il2cpp_value_box: "IrRrDTFMtkv",
        il2cpp_monitor_enter: "lwoSVwUWIXX",
        il2cpp_monitor_try_enter: "ZZuGJzswWUL",
        il2cpp_monitor_exit: "GLGovyiNsre",
        il2cpp_monitor_pulse: "qpvHJVrwjle",
        il2cpp_monitor_pulse_all: "fkadyvVPmVs",
        il2cpp_monitor_wait: "spIC_FwfAON",
        il2cpp_monitor_try_wait: "OikhWlbtzjR",
        il2cpp_runtime_invoke: "SzNqsCMVqNX",
        il2cpp_runtime_invoke_convert_args: "XvgHXOcOilK",
        il2cpp_runtime_class_init: "StBVUcvptdh",
        il2cpp_runtime_object_init: "PNZXyaADrSE",
        il2cpp_runtime_object_init_exception: "DVKCCvtTKOd",
        il2cpp_runtime_unhandled_exception_policy_set: "YoeEYsRYUDm",
        il2cpp_string_length: "JMiFbyvMzDo",
        il2cpp_string_chars: "_JxuSxXJkxu",
        il2cpp_string_new: "OHHYrn_OLCw",
        il2cpp_string_new_len: "DaL_bTFWwLM",
        il2cpp_string_new_utf16: "NIsxj_nmDdi",
        il2cpp_string_new_wrapper: "Itm_zyYHBRf",
        il2cpp_string_intern: "ONirQBHHmjO",
        il2cpp_string_is_interned: "_Nguducyldj",
        il2cpp_thread_current: "brgaqnrsLjx",
        il2cpp_thread_attach: "XZkKiKosyHC",
        il2cpp_thread_detach: "HWyKlOeVHgV",
        il2cpp_is_vm_thread: "tOniezYQdLe",
        il2cpp_current_thread_walk_frame_stack: "VVkKMpWMRPm",
        il2cpp_thread_walk_frame_stack: "dwQnauFAnWw",
        il2cpp_current_thread_get_top_frame: "HaLYfKsToXA",
        il2cpp_thread_get_top_frame: "DFqEEXfVVgu",
        il2cpp_current_thread_get_frame_at: "VTAZaJamXif",
        il2cpp_thread_get_frame_at: "EPfxEBbbVva",
        il2cpp_current_thread_get_stack_depth: "AAurdoCYvce",
        il2cpp_thread_get_stack_depth: "TmpTUDznYUN",
        il2cpp_override_stack_backtrace: "MTngjclvBeM",
        il2cpp_type_get_object: "PFwXVWGeckf",
        il2cpp_type_get_type: "jDLSsrBahVH",
        il2cpp_type_get_class_or_element_class: "ZZhKRUWWOib",
        il2cpp_type_get_name: "VNwdSYN_Ac_",
        il2cpp_type_is_byref: "JACoGlJjCCC",
        il2cpp_type_get_attrs: "cvxuQAlmPys",
        il2cpp_type_equals: "ZQcDKobJMFm",
        il2cpp_type_get_assembly_qualified_name: "jsLiEGdBz_G",
        il2cpp_type_get_reflection_name: "krqMStJVxEC",
        il2cpp_type_is_static: "VyZMlTfANyg",
        il2cpp_type_is_pointer_type: "NJTtQPEmFPK",
        il2cpp_image_get_assembly: "cqfGzZtAbZi",
        il2cpp_image_get_name: "FZa_z_AueBS",
        il2cpp_image_get_filename: "oytwlOhdSXu",
        il2cpp_image_get_entry_point: "wXXCxtShaIZ",
        il2cpp_image_get_class_count: "FIGgipFzgMY",
        il2cpp_image_get_class: "NWWdAoXBDBY",
        il2cpp_capture_memory_snapshot: "IpzYwEzNyAK",
        il2cpp_free_captured_memory_snapshot: "lXeeYyqKDhC",
        il2cpp_set_find_plugin_callback: "pAkICKehGFC",
        il2cpp_register_log_callback: "gXEFLzgaVtv",
        il2cpp_debugger_set_agent_options: "yIpecOtGPCL",
        il2cpp_is_debugger_attached: "XtYfuqdCIbt",
        il2cpp_register_debugger_agent_transport: "DKCQIqXjPYD",
        il2cpp_debug_foreach_method: "dEXqxwPqxij",
        il2cpp_debug_get_method_info: "SmfSoPUDjlb",
        il2cpp_unity_install_unitytls_interface: "BMmxhoqLNeZ",
        il2cpp_custom_attrs_from_class: "qWXIOQxZSnI",
        il2cpp_custom_attrs_from_method: "k_kCMxiXNDK",
        il2cpp_custom_attrs_from_field: "O_nquqNBkem",
        il2cpp_custom_attrs_get_attr: "hkiBhXTKVPq",
        il2cpp_custom_attrs_has_attr: "pBrTnTuumkx",
        il2cpp_custom_attrs_construct: "ajXoRvRYfdX",
        il2cpp_custom_attrs_free: "fmIkkpoyoEW",
        il2cpp_class_set_userdata: "QNtCJwCnlQZ",
        il2cpp_class_get_userdata_offset: "HInTIGwaBVN",
        il2cpp_set_default_thread_affinity: "bQdgGOrZMaz",
        il2cpp_unity_set_android_network_up_state_func: "sYMiZ_dajKA",
    };
    const exports = Il2Cpp.$config.exports;
    for (const key in bridgeNames) {
        if (exports[key])
            exports[bridgeNames[key]] = exports[key];
    }
}
const version = "1.3.0";
let boardMaterial = null;
let buttonClickDelay = 0.0;
let menu = null;
let reference = null;
let referenceCollider = null;
let animatedMenuTexts: Array<{
    component: any;
    text: string;
    phase: number;
}> = [];
let goopFishGunEnabled = false;
let goopFishDelay = 0;
let itemDupeEnabled = false;
let leftPrimary = false;
let leftSecondary = false;
let rightPrimary = false;
let rightSecondary = false;
let leftGrab = false;
let rightGrab = false;
let leftTrigger = false;
let rightTrigger = false;
let leftStick = false;
let rightStick = false;
let mobGunEnabled = false;
let prefabGunEnabled = false;
let spawnGunEnabled = false;
let lastGunTime = 0;
let prefabGunDelay = 0;
let selectedItemLauncherEnabled = false;
let selectedItemLauncherDelay = 0;
let spawnItemMethodsChecked = false;
let spawnItemStringMethod: any = null;
let spawnItemPrefabMethod: any = null;
let mobSpawnAsyncBroken = false;
let mobValidatorBypassEnabled = false;
let beforeMobSpawnDelegate: any = null;
let beforeMobSpawnDelegateClass: any = null;
let completedMobSpawnDelegate: any = null;
let completedMobSpawnDelegateClass: any = null;
let protectedMobHooksInstalled = false;
const protectedMobNetworkIds = new Set<string>();
const protectedMobHandles = new Set<string>();
let protectedMobRunnerKey = "";
let nextProtectedMobRunnerCheck = 0;
let cachedNetworkMobGroups: any[] = [];
let cachedNetworkMobGroupRunnerKey = "";
let pendingNetworkMobSpawn: {
    group: any;
    mobId: any;
    name: string;
    requestedPosition: any;
    deadline: number;
    nextCheck: number;
} | null = null;
const MOB_SPAWN_PENDING = { pending: true };
let stashDupeEnabled = false;
let backpackDupeEnabled = false;
let stashAllowMoves = false;
let stashQOLFix = false;
let allowPutGBO = false;
let freeGrabEnabled = false;
let forceTpLoopEnabled = false;
let spinPlayersEnabled = false;
let invincibleEnabled = false;
let sizeChangerEnabled = false;
let tpAllGunEnabled = false;
let freezeAllEnabled = false;
let ragdollAllEnabled = false;
let orbitGunEnabled = false;
let explosionGunEnabled = false;
let launchAllGunEnabled = false;
let arenaItemKillerDisabled = false;
let deleteItemGunEnabled = false;
let deleteItemDelay = 0;
let carLauncherEnabled = false;
let carLaunchDelay = 0;
let prefabSpamGunEnabled = false;
let prefabSpamDelay = 0;
let prefabRainEnabled = false;
let prefabRainDelay = 0;
let prefabTornadoEnabled = false;
let prefabTornadoAngle = 0;
let prefabTornadoDelay = 0;
let prefabFollowEnabled = false;
let prefabFollowObject: any = null;
let prefabPathEnabled = false;
let prefabPathDelay = 0;
let _cachedPlayers = null;
let _cachedPlayersFrame = -1;
function getAllNetPlayers() {
    if (_cachedPlayersFrame !== frameCount) {
        const objectClass = Il2Cpp.domain
            .assembly("UnityEngine.CoreModule")
            .image.class("UnityEngine.Object");
        const netPlayerClass = Il2Cpp.domain
            .assembly("AnimalCompany")
            .image.class("AnimalCompany.NetPlayer");
        _cachedPlayers = objectClass
            .method("FindObjectsByType", 1)
            .inflate(netPlayerClass)
            .invoke(0);
        _cachedPlayersFrame = frameCount;
    }
    return _cachedPlayers;
}
let whitelist: string[] = [];
let whitelistEnabled = false;
let wlFlyEnabled = false;
let wlRocketEnabled = false;
let wlFlareEnabled = false;
let wlCarEnabled = false;
let wlCrateEnabled = false;
let wlSuitcaseEnabled = false;
let wlBombEnabled = false;
let wlEggEnabled = false;
let wlBalloonEnabled = false;
let wlGiveawayEnabled = false;
let wlDisintegrateEnabled = false;
let wlGunBuffEnabled = false;
let wlAddGunEnabled = false;
let wlRemoveGunEnabled = false;
let wlSpazRainbowEnabled = false;
let wlTarget: any = null;
let wlLastGunTime = 0;
let followedPrefabObject: any = null;
let followedPrefabName: string = "";
let trapGunEnabled = false;
let orbitprefabs: any[] = [];
let rocketFistEnabled = false;
let boomspearFistEnabled = false;
let eggFistEnabled = false;
let dogFistEnabled = false;
let flameFistEnabled = false;
let bombFistEnabled = false;
let spearFistEnabled = false;
let balloonFistEnabled = false;
let carFistEnabled = false;
let shotgunFistEnabled = false;
let nukeFistEnabled = false;
let minefieldFistEnabled = false;
let itemLauncherEnabled = false;
let itemLauncherSelfDelay = 0;
let lastFistTime = 0;
let boulderLauncherEnabled = false;
let boulderLauncherDelay = 0;
let boulderLauncherWasHeld = false;
let boulderLauncherObjects: Array<{
    object: any;
    expiresAt: number;
}> = [];
let laserEyesEnabled = false;
let laserEyesObjects: any[] = [];
let laserEyesSpawnDelay = 0;
let laserEyesWasFiring = false;
let silentStepEnabled = false;
let antivoidEnabled = false;
let noclipHoldEnabled = false;
let autolootEnabled = false;
let localInvisibleEnabled = false;
let floatAllEnabled = false;
let gravityCrusherEnabled = false;
let speedDemonEnabled = false;
let fastHandsEnabled = false;
let nukeAllEnabled = false;
let nukeDelay = 0;
let spawnRainEnabled = false;
let spawnRainDelay = 0;
let mobSwarmEnabled = false;
let mobSwarmDelay = 0;
let disintegrateAllEnabled = false;
let disintegrateDelay = 0;
let antigravityEnabled = false;
let blackHoleEnabled = false;
let infAmmoJetpack = false;
let infAmmoFlare = false;
let infAmmoZipline = false;
let infAmmoRevolver = false;
let infAmmoArena = false;
let infAmmoShotgun = false;
let infAmmoRPG = false;
let autoCockRevolver = false;
let rapidFireEnabled = false;
let rapidFirePulseDelay = 0;
let infiniteSellValueEnabled = false;
let itemColorHue = 0;
let itemColorSaturation = 110;
let itemColorScale = 1;
let itemColorUpdateDelay = 0;
let cachedColorItems: any = null;
let cachedColorItemsFrame = -1;
let forceAllStashSlotsEnabled = false;
let forceAllStashSlotsDelay = 0;
let containerFreedomEnabled = false;
let containerFreedomDelay = 0;
let spawnMobEnabled = false;
let spawnMobGunEnabled = false;
let mobSpawnDelay = 0;
let kamehamehaEnabled = false;
let lastKameTime = 0;
let inPlayerSubMenu = false;
let chainEnabled = false;
let chainObjects: any[] = [];
const CHAIN_LENGTH = 10;
const CHAIN_SPACING = 0.35;
let domeEnabled = false;
let domeObjects: any[] = [];
let floatingMachineEnabled = false;
let floatingMachine: any = null;
let floatingMachineState = "up";
let floatingMachinePauseTimer = 0;
let floatingMachineRotation = 0;
let floatingChristmasEnabled = false;
let telekinesisGunEnabled = false;
let telekinesisTarget: any = null;
let floatingChristmas: any = null;
let floatingChristmasState = "up";
let floatingChristmasPauseTimer = 0;
let floatingChristmasRotation = 0;
let lastRocketTime = 0;
let lastBoomspearTime = 0;
let lastEggTime = 0;
let inPlayerMenu = false;
let fistFlyVelocity: [
    number,
    number,
    number
] = [0, 0, 0];
let joystickFlyVelocity: [
    number,
    number,
    number
] = [0, 0, 0];
let trailEnabled = false;
let trailObjects: any[] = [];
let trailPositions: {
    x: number;
    y: number;
    z: number;
}[] = [];
const TRAIL_LENGTH = 15;
const TRAIL_SPACING = 0.35;
let hueValue = 0;
let satValue = 0;
let scaleValue = 0;
let randomizeOnSpawn = false;
let gridSize = 4;
let flyTriggerEnabled = false;
let flySpeed = 10.0;
let spazRainbowEnabled = false;
let playerList: any[] = [];
let selectedPlayer: any = null;
let selectedPlayerName: string = "";
let selectedPlayerKey: string = "";
let infHealthEnabled = false;
let blueNameTagsEnabled = false;
let visualNameTagsEnabled = false;
let dualRevolverPunchDelay = 0;
let selectedPlayerYeetDelay = 0;
let playerCagePrefabs: any[] = [];
let playerCageEntries: any[] = [];
const blueNameTagEntries = new Map<string, any>();
const sytePlayerEspEntries = new Map<string, any>();
let showPlayerOptions = false;
let playerPositions: Map<string, any> = new Map();
let updateTimer = 0;
let dysonSphereEnabled = false;
let dysonSphereRings: any[] = [[], []];
let dysonSphereRingAngles: number[] = [0, 0];
let dysonSphereRingTilt: number = 0;
let dysonSphereTiltDirection: number = 1;
let cloneSquadEnabled = false;
let cloneSquadPlayers: any[] = [];
let flyEnabled = false;
let platformsEnabled = false;
let noclipEnabled = false;
let raspWasdFlyEnabled = false;
let raspFlyEnabled = false;
let raspSmoothFlyEnabled = false;
let raspHandFlyEnabled = false;
let raspPlatformsEnabled = false;
let raspGhostEnabled = false;
let raspGhostHidden = false;
let raspGhostWasPressed = false;
let raspInvisibleWasPressed = false;
let raspNoclipHeld = false;
let raspHandFlyHoldPosition: any = null;
let raspHandFlyOriginalGravity: boolean | null = null;
let raspLongArmsCycle = 0;
let flySpeedIndex = 1;
let flySpeeds = [2, 5, 12, 28];
let longArmsLevel = 0;
let superJumpEnabled = false;
let dashEnabled = false;
let airControlEnabled = false;
let wallClimbEnabled = false;
let freezeSelfEnabled = false;
let speedBoostEnabled = false;
let speedMultiplier = 1;
let customGravityValue = -9.81;
let customGravityEnabled = false;
let spiralEnabled = false;
let spiralObjects: any[] = [];
let spiralAngle = 0;
let spiralHeight = 0;
let spiralChristmasEnabled = false;
let spiralChristmasObjects: any[] = [];
let spiralChristmasAngle = 0;
let spiralChristmasHeight = 0;
let smoothFlyEnabled = false;
let flyVelocity: [
    number,
    number,
    number
] = [0, 0, 0];
let flySmoothRotation: any = null;
let _pcSmoothYaw = 0;
let _pcSmoothPitch = 0;
let _pcMouseSensitivity = 0.15;
let _pcFlyAcceleration = 2.5;
let _pcFlyDeceleration = 1.2;
let shopUnlockEnabled = false;
let cosmeticOwnEnabled = false;
let blueprintAbuseEnabled = false;
let noSpendEnabled = false;
let infFartEnabled = false;
let infFartDelay = 0;
let autoKickAllEnabled = false;
let tagGunEnabled = false;
let lagGunEnabled = false;
let itemGunEnabled = false;
let noRecoilEnabled = false;
let shopHooksInstalled = false;
let rgbMenuEnabled = false;
let espEnabled = false;
let tracersEnabled = false;
let ghostModeEnabled = false;
let ghostPosition: [
    number,
    number,
    number
] = [0, 0, 0];
let ghostRotation: [
    number,
    number,
    number,
    number
] = [0, 0, 0, 1];
let handPlatformsEnabled = false;
let movementPlatformLeft: any = null;
let movementPlatformRight: any = null;
let prevLeftGrab = false;
let prevRightGrab = false;
let thunderEnabled = false;
let thunderObject: any = null;
let buttonSound = 44;
let LerpMenu = true;
let menuSnapNextFrame = true;
let menuFollowSmoothness = 15;
let menuscale = 1.0;
let vrMenuUpOffset = 0.08;
let vrMenuPalmInset = 0.045;
let vrMenuRightOffset = 0.025;
let vrMenuTilt = -8;
let menuOutlineColor: [
    number,
    number,
    number,
    number
] = [0.45, 0.30, 0.60, 0.95];
let pageOutlineColor: [
    number,
    number,
    number,
    number
] = menuOutlineColor;
let buttonOutlineColor: [
    number,
    number,
    number,
    number
] = pageOutlineColor;
let menuOutlineThickness = 0.009;
let controlOutlineThickness = 0.0075;
let rowOutlineThickness = 0.0065;
let outlinesEnabled = true;
let rowButtonHeight = 0.06;
let rowButtonWidth = 0.61;
let rowButtonSpacing = 0.032;
let disconnectButtonWidth = 0.62;
let pageButtonWidth = 0.135;
let cornerRoundness = 0.28;
let titleWidth = 0.6;
let titleHeight = 0.057;
let pcMenuDistance = 0.7;
let menuOpenSpeed = 2.5;
let menuCloseSpeed = 3.0;
function getButtonsPerPage(): number {
    const effectiveStep = Math.max(rowButtonSpacing, rowButtonHeight * 0.45);
    return Math.max(4, Math.min(8, Math.floor(0.225 / effectiveStep) + 1));
}
let menuAnimation = 0;
let menuClosing = false;
let menuReloading = false;
let customClickClip: any = null;
let customClickAudioSource: any = null;
let customClickLoadAttempted = false;
let leftPlatform = null;
let rightPlatform = null;
let flingGunEnabled = false;
let kickGunEnabled = false;
let kickAllGripEnabled = false;
let teleportGunEnabled = false;
let colorGunEnabled = false;
let spazColorGunEnabled = false;
let selectedTeleportLocation = 0;
const teleportLocations = [
    "Lake",
    "Moon",
    "Sewers",
    "Spawn",
    "Water Tower",
    "Skybox",
    "Void",
];
const teleportCoords = [
    [-213.17, 56.764, -15.242],
    [1021.538, 980.105, 1054.145],
    [88.541, -103.024, 140.867],
    [-397.684, 2.135, -399.209],
    [49.446, 50.186, -33.34],
    [0, 500, 0],
    [0, -9999999, 0],
];
let orbiters: any[] = [];
let orbitPrefabs: any[] = [];
let orbitEnabled: boolean = false;
let orbitUpdateRunning: boolean = false;
let playerOrbitEnabled: boolean = false;
let playerOrbiters: any[] = [];
let jailGunEnabled = false;
let jailGunDelay = 0;
let audioManager = null;
let visualizer: any[] = [];
let giantChristmas: any = null;
let giantChristmasEnabled = false;
let giantChristmasSize = 3.0;
let giantMachine: any = null;
let giantMachineEnabled = false;
let giantMachineSize = 3.0;
let tpLakeEnabled = false;
let tpMoonEnabled = false;
let tpSewersEnabled = false;
let tpSpawnEnabled = false;
let tpWaterTowerEnabled = false;
let tpSkyboxEnabled = false;
let tpVoidEnabled = false;
let handTextObj = null;
let buttonNotifications: boolean = true;
let bgColor: [
    number,
    number,
    number,
    number
] = [0.35, 0.20, 0.50, 0.95];
let textColor: [
    number,
    number,
    number,
    number
] = [1.0, 1.0, 1.0, 1.0];
let buttonColor: [
    number,
    number,
    number,
    number
] = [0.55, 0.15, 0.70, 0.95];
let buttonPressedColor: [
    number,
    number,
    number,
    number
] = [
    0.75, 0.25, 0.85, 1.0,
];
let textGradientEnabled = true;
let textGradientSpeed = 2.4;
let textGradientDarkTone = 112;
let textGradientLightTone = 222;
let menuName: string = "<b>Synapse</b>";
let themeIndex = 0;
let femboyThemeEnabled = false;
let femboyBgTexture: any = null;
let femboyBgBase64 = "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMVFhUXFxcaFhgXFxcXGBcXFxgXGBkXGBcYHSggGBolHRgWITEhJSkrLi4uFyAzODMsNygtLisBCgoKDg0OGBAQGi0lHx8tKy0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLTctLf/AABEIASwAqAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EAD8QAAEDAQUFBAcHAwQDAQAAAAEAAhEDBBIhMUEFUWFxgSKRobETMkJSwdHwI2JygpKy4RQzogZDwvFj0uKD/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAKBEAAgICAgEDBAMBAQAAAAAAAAECEQMhEjFBEyJRBDJhcTNCgaEj/9oADAMBAAIRAxEAPwD7iooogCKKKIAii5Kq+oBmQEAWSVu2i2nh6zvdGJ67kG1V6r5FNrmt1fHad+AHIfePQFJ0bI9kwyJzwJJ4lxMkqkrBuiVds1phtAE8XeeGHWFX+otbgZ9C3gHOnvulNmk73T3KzWO1YRxEHvCqomXqy8IUstINza68fWcYMngRpwR3gkhrczruGpRH2cnAtkclSlZ3sMsmNxx7k9Voy+6VyNNtBobcjsxEcF5p0xTJzF5p+ubF6D+rEdoFpAmDryOqxq1jqECG437xkGMQ4nLn4rNHbj07AqK3o3AAuY4EjLM8sM0ajZyfWY/9JySO1zivI3sKpg9v3gRyIA8wtZefuvY8OZTfhmLpxGox6LfCDjyVytHVFFEGZFFFEARRRZ227O57BdF66Zcz326jnqNDEIALX2lTbIvS73WguPcMuqSq7RrO9SmGjfUdj+lsnvSNO0XWgsYy4crvZ6EQYKMLZvY7pdPkZ8FSSJayVcYnXUaj/XrO5M7A+JKtRsLA4GC4z7RLvMolOpeyDurSPNSi+XO+72Rz9o9MB3q6Xgx5Tv3B7TWgHEwJJO9Z9pYbpJJmJgEgCMSIGe6SmqgkEb0Szsa68Xcu9FUhRm3IWsri5sSbzcD0yJ5gg9URlYzBwOmOB5JNrvRvzwHZdyza7x7nHcnKrd+WvDimh54cZWumELiuMqTkSqsMYHod/wDKq9sG8OvzQZJsKDjOfA4hJbQqPe4+jeJa5kjtCMQe0cstyPRtLHGGmTnriN4kYopCVJminLHpiWxrTdrOYZEhsh3suIJgHVsgkEYdoDCCF6NYFsY04k3S3EO93nwwHzCe2btC92XwHx0cPeaVDjRvGfNWHttctgDMnuAxJ+t6FTtbmkXoIJiciJ36EIe1awDmfm7oGKXqWlpaeRz5KTohC42bYXUOiCGgHOBPOESUGJFFFEARcIXVEAYe1bJcJqNHYd/cA0++OWvBcsVO8YP/AGtxwkLzbGeiqik4w28LuMSxxIDehgf9IqzbHOk0bdoqCmxz/daT3BZOz6ZbTbOZxPM4lab7OwggtEHMb0C0WWGm5uMDpoVcZJHLlxyYBj5E78emngh0TiRvAPh/CJIgRlGHKEuakO4hoPQQD+5aLo5i9ppT2gJMYje355xzI1XLHUBF2ZwwO9u7mMvopgJK10C3tsmMyBmD7zflkkbRmpR4S/z8DLHAksOYy4t3pW2ucIYcQTM7wMbp6wr0KwqFuMOxGG/MOE8REff3EI1Sne7LhDm9x4jgk34KxRUJxlLpCJulpF0l5mHaDdjPhCcsDSG8Cezy4cJldp0BGIg9/VDsNQmnjm0kHoZ8iERibfU545FUP+h3C8ARnjHkQfJY7aLHSIyMiCQd0GNQQWnlxWwwwSOM9/8AKy7XTDKrn5aniH8N95viiXRP0eptBKVMNyVjpIkAgkDUAiVyk29gHdrORi38HHTjyXAHTDm4a3TM8MYIWR6Xao0qm0H1MGdhurji48tF0VKgGFQ/mAd8vNDo1mnAYEeyRBjgNRxCKpsw4ROi3Vhm1juRLfAz5qKqidh6cTZUUUTOUiw/9UtApipheaTAOuBOmUEAzwW4Vhf6i7RZT3nEcyB5Xu5NDj2N2aqXsx7L4h3B0Z8sZ/6VqTcQQHfevEnpjnjqs2w2i+C8Eg3nAEZxOAO8EQY4olstlQNg3Y9ogEG7ImMcDBJlVxfghZV0+yU+GUvjleMeEIPou0anuXWn8JHb7pYfyo1YhtzQBwb39kfBE2c8Gl2sS4uvCJ1LcY4AdycnSIxxTdsFRfBLDm2COLTgD0y6cUwsu2NgB94zSJ7QxmmdT7wynk7gtBj5A+GI6Hcqb8i9Bp0K1rCHO7PZIg5x1EYhNOp1cARfAycLocOYyd4TuS1sZLqZ+9B/MD8QEltK3ts7S4kiMgCZdOWGAGoknRZybO2GPVGvJA7QI6HzCWY9oc/ECYOOGOI15Beasv8Aqa3OeA1lNrXQW+lDoIJwIcIJnfkvQWLb7y5zKtG6WkA3XTmCQYOEYaFO5LtGLxR8PoNTl74YcPacI7IwwGhcYI4Zp9ljptglrSfecAXGTvPErtO0h10t9VwdzkEYc8+5BqPugyCRJIAxIkz4GVnKVlwx10FtwhoO5w8ez8UrVpylK1pJHZLi0uGDnAwZEakjHRNWl8DmkjogmiwYCBOMZHdy3LhqiQN+HVVszs1UEF5G6D3YfFMqgtZ0BcVbUcOqiaRUY6N9RRRB55Fg26yuq2gtIIaGRejSMhx7Th1W8uEIGnR5Wym5Wr0ycJBBiMQxl7wLD0KdrMDgAcjIPJwg+YSG0mn09QD3g7mPRBpHcSj0K/qyfWa0nhxWsTPJjf3lLXLqBn1mxe5tcJPcCUzZnNFO85xbDnT2roHaJ3gDPVUrUsSdHAgg5Hd9cVjWvYwtDiKjnPLBHo5hpd78cQJ71Mtm8IpI1Ke06DiBTewk6CoHOcNd+PXzRLPSLGi6LzBgAMw3SBqBlHAa4LztDYR7IDWNHaIMS9sxAJmV7DZ1OGNOpGO4nIlQ9HTkxqCTsWFVr8AcoPcQRG/EIe29kekBcIkZAiYHtXR7xCfe5knKdYE98Irq4DSdAjk1s55tTXFM8tQ2Sw7yDEEnEAY9knnK3KzQ95huZHW6TidwzjfKE9lO9eLWA8Ggu/hc/rKhkU2Bon1nYuPHv55KnN5GRi+nWFN92NVabadMN4mdZJMkxrmlKNR7jDHTE+sMIGSS2ixzbpdUeSXCYJGGE5c9y5Yq9anjg4QJBwJwxyGh4Tgs3E6oRfEYpNDqoJbdLQS7HPQAxnjePRXqukygMtMgmO08kwIOAy5DM9UOrWeC3sjtGMHYgwTqIOR3Koo1ihyi+J5I1lpEAk5uMn4BKMLicIaN5xPRuQ5nuT9M8zxKGKQGu0l0KJhRFiUmjZUUUQcBFFFEAeb2xZiLRfIN00nYjRwugLPYZqNGgpEHvvDuAH6l6fatJ72XWZlwngM5SVu2R9m30R7TAQJ9oYEgneY7iQmnRrGSqmCo5Qcdx3hCstncK06XSJ1LfdPEHI7jHFDsVclgcRHvtObXDNPNfDHv3CBzMfEhEmbceMaBFjahkHDGQ04GJ9b6HVOgEtIGEiAkbL6MmMGu4YTHmtOmyFlsU6qhdlj3nDcEcUgBARDOgXKc+1GeETlpnqqcm+znhCMekI14aQAJechHieASdOKZqFxm4Bf1xgkN5wepfxRtrbRuEUqceleCZibrR7R3ncPgs2lSDaYpk+0XEuMlzyZLidTPkE4o6Y29sJaKhfdkCbmXGcY5dnNQVdHYHdqeQGaK2k2BLp5mMekJiyWUEkNAmJJy8ste5bcPkzf1KWkhIOAMFt0uymO11GvA4q9VkiMtQRoRiCORhP1bG44OaSDn9DJJPpOY646fuu94fBw1HXJTKKXReLNz0w9krh7ZjEEhw3EHHpr1Xf6jgsxtp9E917CSZnItMEOG+6SQeE8E3ChI3UfkvUqkqKiiqij1Ciiik8wi5K6g2mu1jbzjA8+HNAC9976pAMMaIMASXHHMjIDzV32Sf9yp0dHkF3ZwPo2k5mXHm4z8fBXr1i32SRvCAZjVtluph9Rr3EmZa8ghw0kgTe4yc9V21UrlJlMZgSTvu4nvcU+60Co4ATA7Tu/s+Mn8qtVoNOJbKG6ezSMnR5q1UJLS5rbsxjGAhxM7sYyRrLbHNwY+GyQA4A6TImHRnqtmpTbEXInWB8Mlk2mkTBwLp3xlIIBz81aqVmvq+JLsNR247EOYDBIN127gRujXVS1bYc4RTa5h1c67h+EAmTz8cl5zaNCtSqvLXHtw4iAWzdAjtSWjAZwrUfSPYPtSHEZXIIwnMDD6xWdHQsEWlK0MveGObvLsdTiCLzjuxzWtSYZILc88jPDkk9nbPvkgCBq44meU4nmVqvpPBgtmTgWkQehxC0xtLs5/qX1GJS6TDWiSchpzPAfJbFjswptujmTvO9UsdmDBJ9Y5n4DgjsdJ4efFE5WciVEcCeA8UJ9jYfWaHfi7XXFHc6FkbQtpODZjgYn82fcoNIRcnoHtSzUgD6MNFRuN1o9YatcG4CRMTkYKyGbMp1MQC0NiWtlhLoBDSRiAJEhPUQ92EhrBndETvAJ8XYIlgADJAADiXD8JPZ/xASs64Jx0YtFkyO0CCQYc/wCe4g9VE3Up3X3wJB9YDPDJwGp0I3AKLQ3PYqKKKDyyLMoUxVe9z8bry1oOQAAkxqZJxU2htG6SxmLh6x0YOPHcFhv2e52J9aZwJAg6k5lyDWGNv8HpKtqDIEECQAdMcFn2jazg4hsGDj2Th/ksyzUKnpGtc511vaILi4ExDRjzJ6I9np36r2bnS78LmtPjMdCm6NI4lG+WzU2eCW3yAC/GAIgeyO7HmSmlAoszIHUbreIGuXfKz61cDCkyTv1MzJE4u+s13aFok3BjGe6dAeGp6I+zLNBLp79T8FcV5CTr9mNZrO6o4kYk4uJ7oTNPZLyYOA1PyWxUbBlognMZXuIPvKzXgifoRv3KWqNPWbAta2mLoEAeJ+JRKRAMu9bcMY4DeUNrC4yMpwJ8xv3JqjRDee85ppUYylZGsJxdlo3571atVDRJRFk22XvutOJwB3AYk9POFcVZDA2i0GsSMqbcx77tx3tGu84aFBa2+47vrBHqBrWkDAAeHxKlFsDHPM/Xh0U2duNcUBtjoaGjUHL3Rie/AdVHmGhoyAA7hCWtFSXD7xAHKc/M9EzaEGiQFRRRUaHqEC3WgU2OedBgN50A4kwFW12xtPM4nIa/wFkvv1HXnnsgy1umGR8ApPOhByYGn2QAcXucC48SQT4BMVnHIZlK2PtEE54n4fFO69EjsaoHQo3Z3lWBLHXwJkAOG8DIjiJPMHkiKJEvfY7TqBwkGQkLbbvZZnq7MDkNT4c0OvZg7UjfBMH8Q1SjhBg4HTjy3ppEwxq9kpm6054HHWWk4niQTM81qU659E8M9ZoMfW9Z1Igug64Ebwc03YGEsdjDg0id5EgyNRgtE9GWeFSX5LbEcXteHmQCIkk5tBzPPwTZFOYvAncTPKd6wbK53agmDE7sGgfNO2WyF+WA1P8ACVWTLGos1LTLab3DFwaSOg0WZst1ZxeC+8ARid5EmNdRggWulUa1ze0MIwJumcOSHYbQ4X7rovOJwjeQNNwCaF6dxbN20WkMEAy76zVbPRuBz3esRPIZwktmWe869oD+p3yC0ra7suHA+ST1oitmPZzea0nUNJ7gUd5wxVLMOyOQ8laooO7yZtMF1fg0T8Gj9ybtRxXKDA287efLAIRKryaeSKKKJlBbPRJ7Ze4uImYE8sldlbAkzzAPLLQrnrvc4SGHTf00n4BWLpeGjIZ89B0UGEeitlsxbiTjGWgmMOJwXQ/7SOHkmElUwqA8fMIRS2MNqw667P2To4fMbkVAtTAYBGHjwIOh48EMVnMIa/EH1X7+DtzvA8MkUSMuMJapUDhDmgjj9YJoGUvWow15Gd1xHcUIpNLsXoOBJ9He4udjG8NBzPE4DwT9jAa14HuOPM5z4paz0w1jQMg0dcM01SZ2Xu+6R3hbuKUTheRzmiuwqQIfIwOHi5a9KkGiBkkdiNhhO8nzKfe4ASVky8r9zFNr/wBs82fuCydmUL4ujPCTuET34pzaVZzm5Q2R1zPwRthsin18gEdDT/8AP/R6lTDWgDABLVznyKaqHBKOxlNGVmfTcAbs4ho79yJUOBUtVOGU3xBabp5Ytx6+aFbXQ08j5KDrxy5AnuwA6oatUz8O5VVG6IouNKiZRoAQErZ8i7iVa21YF0Zu8BqUSmA1nCFBkurCNySlqGKaY6RKDam5FCCPZc9pqHg5t1zZ+sDOhXbK7RHKAetCbrI6MKn+Ik89J6IDaWDpcT2XZwNDoAE7UtG7FKVXwN5ODRvJBjpmTwBVIf8AV2O2GgXNbyb5LQtbA2kQOHiQpsxkM+tMF3aZ+zPNvmFUpW6PPxr3Irsf+0OM+abc0HNK7IH2LOXxKbUFT3JiG2vUHP8A4uV9kD7Mc0Pbh7A5n9rkbZn9vqUy3/Gv2EruVKTZKjjir0VXgxFq1G82qzjI6gEeIKyrS69TDt4jqcPmt7Kpzb4tP/0sTadO45zNHODm9SA4d/moN8D91A3KpK6qVTgqO4gdAk/U7lxJm0S68A50Hsta0ujiSMATxOAA3lRMFs1q9OX9B5lHqMkQrwoszGyAIddstKIogXkzwV0uJ1UeIJVKjw0EuMAZlWbEe4AEkwBmVay0TN9wgn1W+63j9468gNJIKZJcC4Gc2s90e877x0Gidbfzujo4z4hXGl2cmaUpqo9GzYngtAGmaDth0M5keEn4IFhtTWzeDgeXyVNr2hrg0NM5+MD4lZvszxRfJWhzZH9pnXzKbSmyT2PzO804kTP7mZm3PVH5v2lMbM/tjmULbIlg/F5tcFbZT/swgt/xr9jLqSlNiKonZiAresw8SO9p+SU25Z5YH6sM/l9r59E1as2fjH7XI7hIgpFJ07PLueAJJAG85I9jsTqsOILaecn1nDgNBxP8rUo7IpNM3ZgyJMhvIHAI20KoZSe45BpPgU7N553LSMazmaLjM/aQOQbEd896i7ZacWdo+8J5lsnxUQXjWhpcUlRQURRRDrVLo46JghS2Vg2XEwB9YbylLJ2wK1QFrRLmNPsgZPO9xGI3SNZXalL0jg04jN24NPs83Y9L2/G1sqXnBjcgQXHQERdbGrtY4DrrFUrZOWTb4IYsDCSXuzOMbtw6ecp9L2VhGeCYWT2U9EhZ1tPajTs+RPyWis21+ueY/YhFw7HbOwtaLrnDAZHDuOCOLXVHuv5gtPeJHgqBdRZk4p9lLZtC80NLHNN4ZwR3j4ruxqwcyAQY3EHRCtg7PVv7glbNZmumRjhjrr3KkweNOFI9LTcrrz7W1WepVMbndrxOPimaG0KggPa0jDFsjWMsR4pWYPFJGjachwc3zj4o6Wtvq/mb+4JlBmcWb/qF32Dm+8Wt/U4A+ErTWTt040m/eJP5WmPEhBUVbQL/AGvz/BcU/wBr8/wUVHTF9iNfajKZhzu17uv8DiYVG7WJyDerlr0ti0wIuzzMzxMQCVQ7LotewCmyb0+qMAQcJic4UkvNH4M8W7e5g6geZXGPveqQ4857yFsbbDBSc4sa53qskA9o4Ad6xjSwFKeyGi9vdMjPjBJ5q4pdjWZvUVsE1xMtpnCe3U1J1DeOQnIZDg/Y7MGDARuXaNGNOQTCmUrKUVEi4uqKBkWZa/Xd9ew1aKzrT67uf/BqaLh2aTcl1cHyXUiGLbQ9Tqz97UDZjt+t7/FxCbtVO8xwGcYc8x4ws6xVO1wJDgNwfgR0dPeE/BS6NVwSttMU3dPBwTaV2gPs3/hPkgnwbP8ATY5m7nd4893BMqrDgFZM4iLE2hL63BjSOroJ8AFtFYlMHGc7zp5z5INcSuRyo2GwJ39VFao46CSSABxK4ls6G4o2ys/aNYNfTGpOG83XNnwKZ/qZ9Vrj0gd7oStqsTqr6bndkMLsB2i4OEEcMuKZxBK9G/VaDkxpdG9zpaD0Ad3rOtVH0dWfZcBB4ieYy/CVqWnsOFTSLruAmQ7oSZ4HgktsUuyccTi3XtAy2N+ICa+BxdNMiiAbNXjA0490YuHU4HuQHOcDDiZ44eCVHXFqQ7eUBWa+kDmB8e9HsVYzccZOh94ceIQ0W40OLOtI7Z5/8AFq0CUhXILieXlCSHAfZkOQXVWmcArJEEhYtsbccTo2Xj8Dv7g6Htdy2kptKlLbwElkujeI7TeonqAmhp0MsdIB3odsEsd+E+RWfYq7ms1ujIGJLMDpOIx1xjitOoJBG8eYRQSVGrZTLG/hHkEZL7PP2TPwN8gmEzhIsC2sis+JBN094jLXJb6xdpD7Y8WN83JouD9wbZVMuJe6DBgdwJPiAuI2yPVd+M/taogUnbH1FFEiQdoeA1xdkAZ5JCy2Nxa28cYw1ug43RyECeCY2m2aZG8s/e1eWtForucZquBkwBgOGATSNMcXJ6Z6R1k90goVTc9oPPMcjp0XlrLtiqwXnEO/xMaYjPu1W9s/b1OuLpPa3OEHnuPMEqnja6Hyp+4s6ytPqujg7/ANvnKBXsrxm0iMQRiOcj670w+nuV6Ndzcik78m0ZSr2uwLKl9u4jPn8kjXZkQYdIjiM8Rqta0XXdoCHaxqFkXPtAMyHnnBbe14EJJFwyraeh6yvjsOwdnwI3jkmUtbACIMhwMjQtO9Vsdrvdl2Dx3OG8fJTQeLG1FFEhGHaKcPe0OLWi4QNBJN4Ru4LbAgQkq9gvPLr0AgBwjEgGYnT6yTxKbKk7oY2K7sOGge8DlM/FaCS2S2KfNzvNOpnDLsixtpf3v/zH7itlY+0f735G/ucmhw7D7Hyf+L/i1RTZB9f8Q/a1RJil2aKiiiBA7RSDmlpyIXjtrBxlhAvgwXTAOuGpnOAMJ4r2NeqGNLjkASei8FTrS4veBecSSdQTjHGMui0xrYXQtarO4DEGNY0HCMt3VBNEEdoY8MI3DDctkdrEGR8UGtZZxw6LZMSyfIOw7TqUgASajdzz2hyfn3yvR7OtlKtgHXXe47B3T3ui8w6zOGiCQk42Vrwe7dYyMjKWFENdeui9vIxgaLzdg27WpuLb15oA7L8egdmMCN69BZv9Q0X4VB6M/exb+oZdYWDg0ac352M2m0sIio2eP1iOiyn2EOM038g7T82Y6grXtFka9sscCMxGI7wsh9BzdO5ETSDX9XQ4wuAio0tO/wBk8iMEVBsNvcOycRpPknHXHb2neMvkpaKbku0BVKpwKI6i8ZAPG9uB/SfmlqtcRGRkSDIOe44pApJmpsk/ZNO+fMpxKbK/s049xvfAJTaZyvsix9oH7U/gb4ly2Fi2v+8/8LP+aaHHsY2P/ufiH7QopsjOpzb+1RJil2aSii4UCMb/AFJaIa1nvGSN4biBHF0Befp0hOMcdfyzqd/KFq7UcXOJDhBJbxDWQIHMzjwCUDRwW0OiJS8FHMH/AF/CrcOh70YhcVmVsEL24d5S9Wyk4rTs9RokObLTnvHEFDeBMAyND8+KLKjKjEoWVxc8/eI7g0fBXqUXCMNf5WhQmDA9px/yKranFoJ3Nce4fyizTm7ErNVeyCxzmH7pieYyd1C0rPttwP2jZ4jA9RkfBdpUxdE7gq1LG06I0HNPs0qNalV9Ugndk7uzWiyyktBB714602Qt4jyPwTVk21XpwJDxufj/AJZjrKiUL6NIya6Z6Mtc3eFZ1QOEVGtcOIBSth/1HSePtAaZ1vYtnIi9pB3wtN1na7Ea7sli1RpzT+5CooDOk+6dxyP11RKVqqjCpTMe80hw7s/BUqWZw0nkoyu4a96BPGn9rH6VQOEgyCsdjhUq1C3IkAHQ3W4+JhaGzZLLx9oucOAJw+fVBZZ3U8mF0TBDgMOIPzQjNaO7JGL+bfJRX2ZTcLxc0iYiY0ncogGPKlR0AncJ7ldJ7XP2FX8DvIoEYTbeQwEtZlJlu/tHzTVmL3iblNo0vNI+Cz7UYLo0JjvW27Z9MjAFuHsOczwaY8FrLREI8rE61RzZJZTLR7QAjXihf1v/AI6f6UzXsRblVqEbiWnzbKy61mDGFzScDlOHdkOiItMbxsc/q/8Ax0/0/wAqrrVup0/0/wArPDzdB1RGvMxwCvijJ2g1PaImDSpjP2ePNStbwQQKdI827+qUtDASOvwVg0SRGGHxRxRa+R9ltEYU6fQfyrf1n3Kf6f5SNR0DBLMtDic/AI4onZrG2/cp/pWlZbFfaHPABOMBrcBpmDisayMvPYDiC4SvVhZz0XATGzWDrn2Wf+qXobEbTJdSqVGSSSARck7mEXR0AWqosyxZlOoPbB5t+RVKtF7gQbmOEiZHROKIAqwQIGSsoogCKKKIA//Z";
let buttonIndex = 0;
let spawnBalloonEnabled = false;
let spawnHeartBalloonEnabled = false;
let spawnDelay = 0;
let currentNotification: string = "";
let notifactionResetTime: number = 0;
let notificationCardRoot: any = null;
let notificationCardText: string = "";
let notificationCardMenuKey: string = "";
let notificationCardThemeKey: string = "";
let notificationCardBornAt: number = 0;
let spamRainbowAllEnabled = false;
let tagGunDelay = 0.0;
let perviousSpawnKey = false;
let itemGunDelay = 0.0;
let GunPointer = null;
let GunLine = null;
let GunPointerMaterial = null;
let GunLineObject = null;
let GunLineMaterial = null;
let physicsRaycastAllVec4: any = null;
let physicsRaycastOutVec4: any = null;
let physicsRaycastOutVec5: any = null;
let gunLastRenderFrame = -1;
let gunResultFrame = -1;
let gunFrameResult: any = null;
let noSpendEnabled2 = false;
let ownCosmeticsEnabled2 = false;
let devSpoofEnabled2 = false;
let buffSpamEnabled2 = false;
let buffSpamDelay2 = 0;
let buffSpamId2 = 1;
let buffAllSpamEnabled2 = false;
let buffAllSpamDelay2 = 0;
let infFartEnabled2 = false;
let infFartDelay2 = 0;
let toiletSpamEnabled2 = false;
let toiletSpamDelay2 = 0;
let timebombSpamEnabled2 = false;
let timebombSpamDelay2 = 0;
let sellingSpasmEnabled2 = false;
let sellingSpamDelay2 = 0;
let arenaSpamEnabled2 = false;
let arenaSpamDelay2 = 0;
let oreSpawnGunEnabled2 = false;
let oreSpawnDelay2 = 0;
let rigSpamGunEnabled2 = false;
let rigSpamGunDelay2 = 0;
let hoverpadInfBattery = false;
let rainbowCycleSelfEnabled = false;
let godModeEnabled = false;
let noClipEnabled = false;
let fullbrightEnabled = false;
let longArmsEnabled = false;
const itemIDs = [
    "item_sludge",
    "item_rare_card",
    "item_pelican_case",
    "item_ac_cola",
    "item_apescalibur",
    "item_alien_cube",
    "item_alphablade",
    "item_ampbattery",
    "item_ampbattery_mega",
    "item_anti_gravity_grenade",
    "item_apple",
    "item_arrow",
    "item_arrow_bomb",
    "item_arrow_heart",
    "item_arrow_lightbulb",
    "item_arrow_teleport",
    "item_axe",
    "item_balloon_smiley",
    "item_backpack",
    "item_backpack_black",
    "item_backpack_fish",
    "item_backpack_green",
    "item_backpack_large_base",
    "item_backpack_large_basketball",
    "item_backpack_large_clover",
    "item_backpack_monkey",
    "item_backpack_pink",
    "item_backpack_realistic",
    "item_backpack_small_base",
    "item_backpack_space",
    "item_backpack_white",
    "item_backpack_with_flashlight",
    "item_bait_beetle",
    "item_bait_fly",
    "item_bait_glowworm",
    "item_bait_magmar_ball",
    "item_bait_mouse_trap",
    "item_bait_sardine",
    "item_bait_shell",
    "item_bait_starfish",
    "item_bait_wallet",
    "item_balloon",
    "item_balloon_heart",
    "item_bamboo_fishing_rod",
    "item_banana",
    "item_banana_chips",
    "item_baseball_bat",
    "item_basic_fishing_rod",
    "item_batterycell_hydra",
    "item_beans",
    "item_big_cup",
    "item_bighead_larva",
    "item_bloodlust_vial",
    "item_blox_cube",
    "item_blox_moon",
    "item_blox_sphere",
    "item_blox_star",
    "item_blox_triangle",
    "item_boombox",
    "item_boombox_fishing",
    "item_boombox_neon",
    "item_boomerang",
    "item_box_fan",
    "item_brain_chunk",
    "item_brainslug_blue",
    "item_brainslug_green",
    "item_brainslug_pink",
    "item_broccoli_grenade",
    "item_broccoli_shrink_grenade",
    "item_broom",
    "item_broom_halloween",
    "item_bubble_gun",
    "item_bubble_staff",
    "item_burrito",
    "item_butcherpipe",
    "item_butcherspear",
    "item_butchersword",
    "item_calculator",
    "item_cardboard_box",
    "item_cardboard_dragon_body",
    "item_cardboard_dragon_head",
    "item_carrot",
    "item_ceo_plaque",
    "item_chakra",
    "item_clapper",
    "item_cluster_grenade",
    "item_coconut_shell",
    "item_cola",
    "item_cola_large",
    "item_company_ration",
    "item_company_ration_heal",
    "item_cracker",
    "item_crate",
    "item_crossbow",
    "item_crossbow_heart",
    "item_crowbar",
    "item_cube_frame",
    "item_cubetrident",
    "item_cuboid_anomaly",
    "item_cutie_dead",
    "item_d20",
    "item_deadmans_draw",
    "item_deadmans_draw_card",
    "item_deadmans_draw_comedy_drama",
    "item_demon_sword",
    "item_disc",
    "item_disposable_camera",
    "item_dragons_claw",
    "item_drill",
    "item_drill_fists",
    "item_drill_galaxy",
    "item_drill_neon",
    "item_dwarven_hammer",
    "item_dynamite",
    "item_dynamite_cube",
    "item_easter_egg",
    "item_egg",
    "item_egg_easter_blue",
    "item_egg_easter_red",
    "item_egg_easter_yellow",
    "item_electrical_tape",
    "item_energy_axe",
    "item_energy_sword_dual",
    "item_energy_sword_green",
    "item_energy_sword_red",
    "item_eraser",
    "item_eye_googly",
    "item_film_reel",
    "item_finger_board",
    "item_fish_anglerfish",
    "item_fish_big_shark",
    "item_fish_boomfish",
    "item_fish_boot",
    "item_fish_bottled_message",
    "item_fish_carp",
    "item_fish_chewna",
    "item_fish_clam_hookshot",
    "item_fish_cowfish",
    "item_fish_crappie",
    "item_fish_crispie",
    "item_fish_cube",
    "item_fish_diamond_jade_koi",
    "item_fish_dollar_bill",
    "item_fish_dragonfish",
    "item_fish_fishsword",
    "item_fish_ghost_sword",
    "item_fish_gold_fish",
    "item_fish_hydracarp",
    "item_fish_irontusk",
    "item_fish_kissy",
    "item_fish_license_plate",
    "item_fish_magma_carp",
    "item_fish_nebula_fish",
    "item_fish_nutfish",
    "item_fish_pufferfish",
    "item_fish_rainbow_trout",
    "item_fish_redacted",
    "item_fish_rotten_fish",
    "item_fish_salmon",
    "item_fish_salmonster",
    "item_fish_scaldfish",
    "item_fish_seahorse",
    "item_fish_seamine",
    "item_fish_shellfish_shield",
    "item_fish_spicy_salmon",
    "item_fish_teeth",
    "item_fish_triclops",
    "item_fish_tuna",
    "item_fish_yellowcake",
    "item_fishing_terminal_bait_button",
    "item_flamethrower",
    "item_flamethrower_skull",
    "item_flamethrower_skull_ruby",
    "item_flaregun",
    "item_flashbang",
    "item_flashlight",
    "item_flashlight_galaxy",
    "item_flashlight_mega",
    "item_flashlight_red",
    "item_flipflop_realistic",
    "item_floppy3",
    "item_floppy5",
    "item_football",
    "item_four_leaf_clover",
    "item_four_leaf_clover_gold",
    "item_four_leaf_radar",
    "item_friend_launcher",
    "item_frying_pan",
    "item_fungi_blue",
    "item_fungi_red",
    "item_grimstaff",
    "item_gameboy",
    "item_glitched_banana",
    "item_glowing_fishing_rod",
    "item_glowstick",
    "item_goldbar",
    "item_goldcoin",
    "item_goop",
    "item_goopfish",
    "item_grappling_hook",
    "item_great_sword",
    "item_great_sword_galaxy",
    "item_grenade",
    "item_grenade_gold",
    "item_grenade_launcher",
    "item_guided_boomerang",
    "item_gyroid_anomaly",
    "item_hammer_candy_cane",
    "item_harddrive",
    "item_hatchet",
    "item_hawaiian_drum",
    "item_heart_chunk",
    "item_heart_gun",
    "item_heartchocolatebox",
    "item_hh_key",
    "item_hookshot",
    "item_hookshot_galaxy",
    "item_hookshot_sword",
    "item_hot_cocoa",
    "item_hoverpad",
    "item_hoverpad_galaxy",
    "item_hydra",
    "item_impulse_grenade",
    "item_jetpack",
    "item_joystick",
    "item_joystick_inv_y",
    "item_katana_big",
    "item_katana_medium",
    "item_keycard",
    "item_lance",
    "item_landmine",
    "item_landmine_bee",
    "item_lantern_cny",
    "item_large_banana",
    "item_lava_fishing_rod",
    "item_love_grenade",
    "item_motor",
    "item_mage_pirate_sword",
    "item_mannequin_arm_left",
    "item_mannequin_arm_right",
    "item_mannequin_head",
    "item_mannequin_leg_left",
    "item_mannequin_leg_right",
    "item_mannequin_torso",
    "item_marshmallow_bunny_bomb",
    "item_megaphone",
    "item_metal_ball",
    "item_metal_ball_easter",
    "item_metal_ball_xmas",
    "item_metal_plate",
    "item_metal_plate_small",
    "item_metal_plate_xmas",
    "item_metal_rod",
    "item_metal_rod_curved",
    "item_metal_rod_easter",
    "item_metal_rod_small",
    "item_metal_rod_xmas",
    "item_metal_triangle",
    "item_midipad",
    "item_midipad_animal",
    "item_mining_laser",
    "item_mining_laser_orange",
    "item_module_gun_1",
    "item_module_gun_2",
    "item_module_gun_3",
    "item_module_hull_1",
    "item_module_hull_2",
    "item_module_hull_3",
    "item_module_joust_1",
    "item_module_joust_2",
    "item_module_joust_3",
    "item_module_laser_1",
    "item_module_laser_2",
    "item_module_laser_3",
    "item_module_tether_1",
    "item_module_tractor_beam_1",
    "item_momboss_box",
    "item_moneygun",
    "item_moonhorror_key",
    "item_moonrock",
    "item_moonrock_cheesy",
    "item_moonrock_friend",
    "item_mountain_key",
    "item_mug",
    "item_needle",
    "item_nut",
    "item_nut_drop",
    "item_ogre_hands",
    "item_orange",
    "item_ore_copper_l",
    "item_ore_copper_m",
    "item_ore_copper_s",
    "item_ore_gold_l",
    "item_ore_gold_m",
    "item_ore_gold_s",
    "item_ore_hell",
    "item_ore_silver_l",
    "item_ore_silver_m",
    "item_ore_silver_s",
    "item_piston",
    "item_painting_canvas",
    "item_paperpack",
    "item_pennant_spring",
    "item_pickaxe",
    "item_pickaxe_cny",
    "item_pickaxe_cube",
    "item_pickaxe_realistic",
    "item_pickaxe_realistic_galaxy",
    "item_pickaxe_spacedwarf",
    "item_pinata_bat",
    "item_pineapple",
    "item_pipe",
    "item_pistol_dragon",
    "item_plank",
    "item_plank_easter",
    "item_plate_round",
    "item_plunger",
    "item_pogostick",
    "item_police_baton",
    "item_popcorn",
    "item_portable_safe_zone",
    "item_portable_teleporter",
    "item_prismatic_anomaly",
    "item_prop_scanner",
    "item_pumpkin_bomb",
    "item_pumpkin_pie",
    "item_pumpkinjack",
    "item_pumpkinjack_small",
    "item_pyramidal_anomaly",
    "item_quest_gy_skull",
    "item_quest_gy_skull_special",
    "item_quest_hlal_brain",
    "item_quest_hlal_eyeball",
    "item_quest_hlal_flesh",
    "item_quest_hlal_heart",
    "item_quest_key_graveyard",
    "item_quest_vhs",
    "item_quest_vhs_backlots",
    "item_quest_vhs_basement",
    "item_quest_vhs_cave",
    "item_quest_vhs_circus_day",
    "item_quest_vhs_circus_ext",
    "item_quest_vhs_circus_fac",
    "item_quest_vhs_dam_facility",
    "item_quest_vhs_dam_servers",
    "item_quest_vhs_dark_forest",
    "item_quest_vhs_eden",
    "item_quest_vhs_forest",
    "item_quest_vhs_foundation",
    "item_quest_vhs_graveyard",
    "item_quest_vhs_haunted_house",
    "item_quest_vhs_hell",
    "item_quest_vhs_lab",
    "item_quest_vhs_lake",
    "item_quest_vhs_lobby",
    "item_quest_vhs_megalodon",
    "item_quest_vhs_megalodon_lake",
    "item_quest_vhs_mines",
    "item_quest_vhs_moon",
    "item_quest_vhs_moon_horror_rocket",
    "item_quest_vhs_mountain",
    "item_quest_vhs_mountainbot",
    "item_quest_vhs_mountainshack",
    "item_quest_vhs_mountainvault",
    "item_quest_vhs_obsidianhalls",
    "item_quest_vhs_odd_core",
    "item_quest_vhs_office",
    "item_quest_vhs_office_basement",
    "item_quest_vhs_powerplant_microwave",
    "item_quest_vhs_powerplant_reactorcore",
    "item_quest_vhs_powerplant_security",
    "item_quest_vhs_powerplant_supportfacility",
    "item_quest_vhs_sandbox",
    "item_quest_vhs_sewers",
    "item_quest_vhs_vhs-core",
    "item_quiver",
    "item_quiver_heart",
    "item_ringmaster_staff",
    "item_radiation_gun",
    "item_radioactive_broccoli",
    "item_radioactive_fishing_rod",
    "item_randombox_mobloot_big",
    "item_randombox_mobloot_medium",
    "item_randombox_mobloot_small",
    "item_randombox_mobloot_weapons",
    "item_randombox_mobloot_weapons_big",
    "item_randombox_mobloot_zombie",
    "item_remote_controller",
    "item_repair_wrench",
    "item_revolver",
    "item_revolver_ammo",
    "item_revolver_gold",
    "item_ring_buoy",
    "item_robo_monke",
    "item_robot_arm_left",
    "item_robot_arm_left_galaxy",
    "item_robot_arm_right",
    "item_robot_arm_right_galaxy",
    "item_robot_head",
    "item_rope",
    "item_rpg",
    "item_rpg_ammo",
    "item_rpg_ammo_egg",
    "item_rpg_ammo_spear",
    "item_rpg_cny",
    "item_rpg_easter",
    "item_rpg_smshr",
    "item_rpg_spear",
    "item_rpg_shoe",
    "item_rubberducky",
    "item_ruby",
    "item_saddle",
    "item_saddle",
    "item_salmoncannon",
    "item_sawblade",
    "item_sawblade_launcher",
    "item_scanner",
    "item_scissors",
    "item_server_pad",
    "item_shadowboss_key",
    "item_shield",
    "item_shield_bones",
    "item_shield_candy_cane",
    "item_shield_galaxy",
    "item_shield_police",
    "item_shield_viking_1",
    "item_shield_viking_2",
    "item_shield_viking_3",
    "item_shield_viking_4",
    "item_shotgun",
    "item_shotgun_ammo",
    "item_shotgun_gold",
    "item_shotgun_sawed",
    "item_shotgun_viper",
    "item_shovel",
    "item_shredder",
    "item_shrinking_broccoli",
    "item_skipole",
    "item_skishoe",
    "item_skishoe_2",
    "item_skishoe_3",
    "item_skishoe_4",
    "item_snail_friend",
    "item_snowball",
    "item_snowboard",
    "item_snowboard_2",
    "item_snowboard_3",
    "item_snowboard_4",
    "item_snowboard_auto",
    "item_snowboard_galaxy",
    "item_spear_candy_cane",
    "item_special_fishing_rod",
    "item_special_fishing_rod_radar_part",
    "item_special_fishing_rod_with_radar",
    "item_stapler",
    "item_stash_grenade",
    "item_steel_beam",
    "item_steel_beam_xmas",
    "item_stellarsword_blue",
    "item_stellarsword_gold",
    "item_stellate_anomaly",
    "item_stick_armbones",
    "item_stick_bone",
    "item_sticker_dispenser",
    "item_sticky_dynamite",
    "item_stinky_cheese",
    "item_stopwatch",
    "item_tablet",
    "item_tapedispenser",
    "item_tele_grenade",
    "item_tele_pearl",
    "item_teleport_dagger",
    "item_teleport_gun",
    "item_teleport_gun_galaxy",
    "item_theremin",
    "item_timebomb",
    "item_toilet_paper",
    "item_toilet_paper_mega",
    "item_toilet_paper_roll_empty",
    "item_token_circus",
    "item_trampoline",
    "item_treestick",
    "item_tripwire_explosive",
    "item_trophy",
    "item_truss",
    "item_truss_easter",
    "item_truss_small",
    "item_truss_xmas",
    "item_turkey_leg",
    "item_turkey_whole",
    "item_ukulele",
    "item_ukulele_gold",
    "item_umbrella",
    "item_umbrella_clover",
    "item_umbrella_squirrel",
    "item_unidentified",
    "item_upsidedown_loot",
    "item_uranium_chunk_l",
    "item_uranium_chunk_m",
    "item_uranium_chunk_s",
    "item_viking_hammer",
    "item_viking_hammer_twilight",
    "item_war_fan",
    "item_wheelhandle",
    "item_wheelhandle_big",
    "item_whoopie",
    "item_wireframe_cube",
    "item_wireframe_gun",
    "item_wood_log",
    "item_wood_pallet",
    "item_wood_pallet_easter",
    "item_wyrmpiercer",
    "item_zipline_gun",
    "item_zombie_meat",
    "item_alienblaster",
    "item_backpack_dragon",
    "item_brick",
    "item_castle_archway",
    "item_castle_awning",
    "item_castle_door",
    "item_castle_roof_topper",
    "item_castle_steps",
    "item_castle_tower",
    "item_castle_turret_topper",
    "item_castle_wall",
    "item_deadmans_draw_card_comedy_drama",
    "item_deck_of_chances",
    "item_deck_of_chances_card",
    "item_module_blast_1",
    "item_module_blast_2",
    "item_module_blast_3",
    "item_module_boost_1",
    "item_module_boost_2",
    "item_module_boost_3",
    "item_module_gravity_1",
    "item_module_minigun_1",
    "item_module_minigun_2",
    "item_module_minigun_3",
    "item_module_stasis_1",
    "item_prune_juice",
    "item_quest_dball_1",
    "item_quest_dball_2",
    "item_quest_dball_3",
    "item_quest_dball_4",
    "item_quest_dball_5",
    "item_quest_dball_6",
    "item_quest_dball_7",
    "item_quest_vhs_asteroids",
    "item_quest_vhs_derelictvessel",
    "item_quest_vhs_wormhole",
    "item_randombox_modules",
    "item_rpg_ammo_shoe",
    "item_soccer_ball",
    "item_soccer_goalposts",
    "item_steampunk_clip",
    "item_steampunk_coils_big",
    "item_steampunk_coils_small",
    "item_steampunk_gear_big",
    "item_steampunk_gear_open_big",
    "item_steampunk_gear_open_small",
    "item_steampunk_gear_small",
    "item_steampunk_gear_spikes_big",
    "item_steampunk_gear_spikes_small",
    "item_steampunk_gear_wheels",
    "item_steampunk_lamp",
    "item_steampunk_lightbulb",
    "item_steampunk_redgreen_hand",
    "item_steampunk_scaffolding",
    "item_steampunk_smokestack",
    "item_steampunk_wings",
    "item_tv_remote",
];
let itemIndex = 0;
const mobIDs: {
    name: string;
    id: number;
}[] = [
    { name: "Angler", id: 1 },
    { name: "AnglerMad", id: 2 },
    { name: "Armstrong", id: 3 },
    { name: "ArmstrongMad", id: 4 },
    { name: "Banshee", id: 5 },
    { name: "Bomb", id: 6 },
    { name: "Bomber", id: 7 },
    { name: "BomberFlashbang", id: 8 },
    { name: "BomberMad", id: 9 },
    { name: "Chicken", id: 10 },
    { name: "Cyst", id: 11 },
    { name: "FakeGorilla", id: 12 },
    { name: "BigHead", id: 13 },
    { name: "RedGreen", id: 14 },
    { name: "Phantom", id: 15 },
    { name: "EvilEye", id: 16 },
    { name: "GiantThrower", id: 17 },
    { name: "RedGreenMad", id: 18 },
    { name: "Spider", id: 19 },
    { name: "FlyingSwarm", id: 20 },
    { name: "NextBot", id: 21 },
    { name: "Segway", id: 22 },
    { name: "NextBotStatic", id: 23 },
    { name: "EvilEyePinata", id: 24 },
    { name: "EvilEyePinataLarge", id: 25 },
    { name: "Lanky", id: 26 },
    { name: "Blob", id: 27 },
    { name: "Cutie", id: 28 },
    { name: "SpiderCave", id: 29 },
    { name: "ForestMob", id: 30 },
    { name: "Mimic", id: 31 },
    { name: "GraveyardBoss", id: 32 },
    { name: "Ringmaster", id: 33 },
    { name: "Puppet", id: 34 },
    { name: "PolypMass", id: 35 },
    { name: "RobotDog", id: 36 },
    { name: "Shadow", id: 37 },
    { name: "Heart", id: 38 },
    { name: "Slimey", id: 39 },
    { name: "ShadowBoss", id: 40 },
    { name: "BigShark", id: 41 },
    { name: "EdenZombie", id: 42 },
    { name: "Skinwalker", id: 43 },
    { name: "YinWorm", id: 44 },
    { name: "YangWorm", id: 45 },
    { name: "ArmstrongSpace", id: 46 },
    { name: "Smiley", id: 47 },
    { name: "MurderRabbit", id: 48 },
    { name: "MurderBunny", id: 49 },
    { name: "DeltaUFO", id: 50 },
    { name: "BetaUFO", id: 51 },
    { name: "AlphaUFO", id: 52 },
    { name: "GlitchedGorilla", id: 53 },
];
const prefabList = [
    "Shipwheel",
    "TeleportMachine",
    "FourLeafQuest_FourLeafSpawner",
    "EasterEgg_QuestSpawner",
    "RadarPartSpawner",
    "SimpleKeypadDoor",
    "GiantController_GraveyardBoss_backup",
    "MetaCameraControls",
    "GrenadeProjectile",
    "LaserMirror",
    "mom_pillow",
    "RiggedPlank",
    "SharkScareTriggerObject",
    "Uvula",
    "BaitShopButton_Spawner",
    "NetworkedLever_SecretLeft",
    "CoreTeleporter",
    "LaserSource",
    "LaserSink",
    "grababble_fish_paper_message",
    "AutoDestroyItem_OilSplatter",
    "AutoDestroyItem_Splash0",
    "AutoDestroyItem_Splash1",
    "AutoDestroyItem_Splash2",
    "AutoDestroyItem_Splash3",
    "AutoDestroyItem_Splash4",
    "AutoDestroyItem_Splash5",
    "BarrelBeansDynamic",
    "BarrelBeansStatic",
    "BarrelExplodingDynamic",
    "BarrelExplodingStatic",
    "BarrelOilDynamic",
    "BarrelOilStatic",
    "Basketball",
    "BigBanana",
    "BigHatchdoorNetObject",
    "BigWheelhandleSpawner",
    "BonfireController",
    "BrainPowerPlug",
    "ChoppableTreeManager",
    "ChristmasBox",
    "ChristmasBoxManager",
    "ClawMachineNetObject",
    "DiggableGrave",
    "DummyPlayerTarget",
    "DummyTarget",
    "Duplicator",
    "EscherToyBlockObject",
    "ExplosiveEgg",
    "ExplosiveEggClustered",
    "FlareGunProjectile",
    "FortuneTellerNet",
    "FuelCanisterNetObject",
    "FuelCanisterSpawner",
    "GenericWorldItemSpawner",
    "GiantRockObject",
    "GiantRockObject_Fire",
    "GreenscreenNET",
    "HatchdoorGrabHandle",
    "HatchdoorNetObject",
    "HellAltar",
    "HH_LockedDoor",
    "HingedDoorNetworked",
    "HordeMobController",
    "HordeMobLobbyHandler",
    "InflatedBalloon",
    "InflatedHeartBalloon",
    "ItemSellingMachineController",
    "KeypadDoorNetObject",
    "LakePineapple_Spawner",
    "Landmine",
    "LeaderBoardMonsterKill",
    "LockedDoor_KeySpawner",
    "LockedShippingContainer_Quest",
    "LogQuestItemSpawner",
    "LootLantern",
    "Mausoleum_01",
    "MazeManager",
    "MimicSpawner_CemeteryTile1",
    "MimicSpawner_CemeteryTile3",
    "MomToyBlockObject",
    "MomToyBlockObject_DisappearOnDrop",
    "MountainKey_Spawner",
    "MovieTheater",
    "Net",
    "NetGameTimeManager",
    "NetLootSpawnGroup",
    "NetMobSpawnGroup",
    "NetPlayer",
    "Pillar_Arched_Broken_01",
    "RamEventNet",
    "remote_controller_receiver",
    "RobotDogRPG",
    "RPGRocket",
    "RPGRocketEgg",
    "RPGRocketSpear",
    "RuinTower_FloatingPlatform",
    "RuinTower_FloatingSmall",
    "ScaffoldTrap",
    "SkiRaceController",
    "Snail_Spawner",
    "SpaceshipTeleporter",
    "SpawnableZipline",
    "Spawner_Key",
    "StickyAnchor",
    "TeleportationManager",
    "ThunderController",
    "TubeMonster",
    "Vehicle_Buggy",
    "VHSQuests_VHSSpawner",
    "WinterFilm_ReelSpawner",
    "item_randombox_base",
    "Blackhole",
    "RPGRocketShoe",
    "InflatedSmileyBalloon",
    "RaceTrack_Circle",
    "RaceTrack_DAA",
    "Vehicle_Spacebike_B",
    "Vehicle_Spaceship_1",
    "Vehicle_Spaceship_2",
    "Vehicle_Spaceship_3",
    "Vehicle_Spaceship_4",
    "Vehicle_Spaceship_5",
    "Vehicle_Spaceship_6",
    "Vehicle_Spaceship_7",
    "UFO_Easy",
    "UFO_Medium",
    "UFO_Hard",
    "SpiderController",
];
let mobIndex = 0;
let mobGunDelay = 0.0;
let prefabIndex = 0;
// --- da.js Data Arrays ---
const mobDefinitionList = [
  { name: "Mushroom", id: "Mob_Mushroom" }, { name: "Big Mushroom", id: "Mob_BigMushroom" },
  { name: "Goopfish", id: "Mob_Goopfish" }, { name: "Mimic", id: "Mob_Mimic" },
  { name: "Swarm Bug", id: "Mob_SwarmBug" }, { name: "Broccoli Monster", id: "Mob_BroccoliMonster" },
  { name: "Rat King", id: "Mob_RatKing" }, { name: "Turkey", id: "Mob_Turkey" },
  { name: "Pumpkin Head", id: "Mob_PumpkinHead" }, { name: "Giant Rat", id: "Mob_GiantRat" },
  { name: "Bat Swarm", id: "Mob_BatSwarm" }, { name: "Slime Cube", id: "Mob_SlimeCube" },
  { name: "Fire Ant", id: "Mob_FireAnt" }, { name: "Snail", id: "Mob_Snail" },
  { name: "Duck", id: "Mob_Duck" }, { name: "Chicken", id: "Mob_Chicken" },
  { name: "Cow", id: "Mob_Cow" }, { name: "Pig", id: "Mob_Pig" },
  { name: "Sheep", id: "Mob_Sheep" }, { name: "Dog", id: "Mob_Dog" },
  { name: "Cat", id: "Mob_Cat" }, { name: "Zombie", id: "Mob_Zombie" },
  { name: "Skeleton", id: "Mob_Skeleton" }, { name: "Spider", id: "Mob_Spider" },
  { name: "Scorpion", id: "Mob_Scorpion" }, { name: "Ghost", id: "Mob_Ghost" },
  { name: "Witch", id: "Mob_Witch" }, { name: "Ogre", id: "Mob_Ogre" },
  { name: "Dragon", id: "Mob_Dragon" }, { name: "Goblin", id: "Mob_Goblin" },
  { name: "Troll", id: "Mob_Troll" }, { name: "Demon", id: "Mob_Demon" },
  { name: "Angel", id: "Mob_Angel" }, { name: "Robot", id: "Mob_Robot" },
  { name: "Alien", id: "Mob_Alien" }, { name: "Pirate", id: "Mob_Pirate" },
  { name: "Ninja", id: "Mob_Ninja" }, { name: "Knight", id: "Mob_Knight" },
  { name: "Wizard", id: "Mob_Wizard" }, { name: "Barbarian", id: "Mob_Barbarian" },
  { name: "Archer", id: "Mob_Archer" }, { name: "Berserker", id: "Mob_Berserker" },
  { name: "Healer", id: "Mob_Healer" }, { name: "Necromancer", id: "Mob_Necromancer" },
  { name: "Paladin", id: "Mob_Paladin" }, { name: "Ranger", id: "Mob_Ranger" },
  { name: "Rogue", id: "Mob_Rogue" }, { name: "Samurai", id: "Mob_Samurai" },
  { name: "Viking", id: "Mob_Viking" }, { name: "Warlord", id: "Mob_Warlord" },
];
const moneyTiers = [100, 500, 1000, 5000, 10000, 50000, 100000, 500000, 1000000, 5000000, 10000000];
const colorPresets = [
  [1,0,0], [0,0,1], [0,1,0], [1,1,0], [1,0,1],
  [0,1,1], [1,0.5,0], [0.5,0,1], [1,1,1], [0,0,0],
];
// --- da.js Mod Flags ---
let tickTimer = 0;
let statusMessage = "Synapse v3.0 Loaded";
let statusTimer = 3.0;
let localPlayerRef = null;
let whitelistPlayers = [];
let orbitAngle = 0;
let highGravityEnabled = false;
let lowGravityEnabled = false;
let originalGravityY = -9.81;
let invisibleEnabled = false;
let rpcGunKillEnabled = false;
let rpcGunReviveEnabled = false;
let rpcGunLaunchEnabled = false;
let rpcGunStunEnabled = false;
let rpcGunFreezeEnabled = false;
let rpcGunColorEnabled = false;
let rpcGunScaleBigEnabled = false;
let rpcGunScaleTinyEnabled = false;
let rpcGunBuffSpeedEnabled = false;
let rpcGunAntiGravEnabled = false;
let rpcGunVoidEnabled = false;
let rpcGunHit50Enabled = false;
let rpcLoopFrameCounter = 0;
let rpcVFXSpamLoopEnabled = false;
let rpcVFXAllSpamLoopEnabled = false;
let minigunLastFireTime = 0;
let minigunRate = 0.15;
let minigunBurst = 3;
let gunLibMinigunMode = false;
let minigunRainbowColors = null;
let minigunColorIndex = 0;
let minigunRandomItemsEnabled = false;
let moneyTier = 0;
let rainbowLauncherEnabled = false;
let galaxyLauncherEnabled = false;
let rpgHeadEnabled = false;
let spawnMobGunCat3Enabled = false;
let spawnItemsGunEnabled = false;
let platformObjects = [];
let giveFlyAllEnabled2 = false;
let infAmmoEnabled2 = false;
let rpcGunKillEnabled2 = false;
let mobList: any[] = [];
let selectedMobIndex = 0;
let selectedItemIndex = 0;
let selectedVFXIndex = 0;
let vfxList: any[] = [];
let minigunSpread = 0.1;
let minigunRareItemsEnabled = false;
let savedPosition: any = null;
let gunLib: any = null;
let gunLibObjects: any[] = [];
let itemRainEnabled = false;
let rpcKillAllLoopEnabled = false;
let rpcStunAllLoopEnabled = false;
let rpcBounceAllLoopEnabled = false;
let rpcHitAllLoopEnabled = false;
let rpcRagdollAllLoopEnabled = false;
let rpcColorRainbowLoopEnabled = false;
let rpcChaosAllLoopEnabled = false;
let rpcKillMeLoopEnabled = false;
let rpcFakeDeathLoopEnabled = false;
let rpcWantedAllLoopEnabled = false;
let rpcAllKillReviveLoopEnabled = false;
let infiniteBagEnabled = false;
let blackholeLauncherEnabled = false;
let rocketLauncherEnabled = false;
let snowballLauncherEnabled = false;
let flaregunLauncherEnabled = false;
let bootzookaLauncherEnabled = false;
let bombArrowLauncherEnabled = false;
let deleteObjGunEnabled = false;
let deletePlayerGunEnabled = false;
let bringAllItemsGunEnabled = false;
let getInfoGunEnabled = false;
let buffGunEnabled = false;
let launchGunEnabled = false;
let voidGunEnabled = false;
let blindGunEnabled = false;
let stealItemsGunEnabled = false;
let freezeGunEnabled = false;
let espPlayersEnabled = false;
let wlTPToMeGunEnabled = false;
let banGunEnabled = false;
let itemLauncherGunEnabled = false;
n5RemapBridgeExports();
interface MenuToggleOptions {
    onEnable?: () => void;
    onDisable?: () => void;
    onUpdate?: () => void;
    toolTip?: string;
}
interface MenuTemplateCategory {
    kind: "category";
    title: string;
    entries: MenuTemplateEntry[];
    toolTip?: string;
}
type MenuTemplateEntry = ButtonInfoConfig | MenuTemplateCategory;
interface MenuTemplateAddition {
    category: string;
    entries: ButtonInfoConfig[];
}
function menuButton(buttonText: string, onPress: () => void, toolTip: string = ""): ButtonInfoConfig {
    return { buttonText, method: onPress, isTogglable: false, toolTip };
}
function menuToggle(buttonText: string, options: MenuToggleOptions): ButtonInfoConfig {
    return {
        buttonText,
        enableMethod: options.onEnable,
        disableMethod: options.onDisable,
        method: options.onUpdate,
        isTogglable: true,
        toolTip: options.toolTip || "",
    };
}
function menuStepper(buttonText: string, decrease: () => void, increase: () => void, toolTip: string = ""): ButtonInfoConfig {
    return {
        buttonText,
        method: increase,
        isTogglable: false,
        toolTip,
        stepDown: new ButtonInfo(menuButton(buttonText + " -", decrease)),
        stepUp: new ButtonInfo(menuButton(buttonText + " +", increase)),
    };
}
function menuCategory(title: string, entries: MenuTemplateEntry[], toolTip: string = ""): MenuTemplateCategory {
    return { kind: "category", title, entries, toolTip };
}
function menuAddTo(category: string, entries: ButtonInfoConfig[]): MenuTemplateAddition {
    return { category, entries };
}
let buttons: ButtonInfo[][] = [];
let currentCategory = 0, currentPage = 0, righthand = false;
let GTPlayer: any = null, instance: any = null, instanceField: any = null, UberShader: any = null, TextShader: any = null;
let rightHandTransform: any = null, leftHandTransform: any = null, headCollider: any = null, bodyCollider: any = null, playerRigidBody: any = null, rigidbody: any = null;
let deltaTime = 0, time = 0, frameCount = 0;
let _pcMode = false, _pcMenuOpen = false, _pcFlyEnabled = false, _pcLastCursorX = -1, _pcLastCursorY = -1, _pcMenuSelector = 0, _pcQWasDown = false, _pcEscWasDown = false, _pcUpWasDown = false, _pcDownWasDown = false, _pcEnterWasDown = false, _pcMinusWasDown = false, _pcPlusWasDown = false, _pcLeftWasDown = false, _pcRightWasDown = false, _pcRmbWasDown = false, _pcLmbMenuWasDown = false;
let _VK_Q = 81, _VK_ESCAPE = 27, _VK_RBUTTON = 2, _VK_LBUTTON = 1, _VK_W = 87, _VK_A = 65, _VK_S = 83, _VK_D = 68, _VK_SPACE_PC = 32, _VK_SHIFT_PC = 16, _VK_UP_PC = 38, _VK_DOWN_PC = 40, _VK_LEFT_PC = 37, _VK_RIGHT_PC = 39, _VK_OEM_MINUS_PC = 0xbd, _VK_OEM_PLUS_PC = 0xbb, _VK_SUBTRACT_PC = 0x6d, _VK_ADD_PC = 0x6b, _VK_RETURN_PC = 13;
let _GAKS: any = null, _GCP: any = null, _pcPoint: any = Memory.alloc(8);
let _pcWin32InitAttempted = false, _pcWin32ReadyLogged = false;
let _pcYaw = 0, _pcPitch = 0;
let _pcFlyVel: [
    number,
    number,
    number
] = [0, 0, 0];
let _pcFlySpeed = 8.0;
Il2Cpp.perform(() => {
    if ((globalThis as any).syteInitialized)
        return;
    (globalThis as any).syteInitialized = true;
    function syteLog(msg: string) {
        console.log("[+] " + msg);
    }
    function syteError(msg: string) {
        console.log("[-] " + msg);
    }
    function syteInfo(msg: string) {
        console.log("[i] " + msg);
    }
    function initPcWin32Input() {
        if (_pcWin32InitAttempted)
            return !!_GAKS;
        _pcWin32InitAttempted = true;
        try {
            let user32: any = null;
            try {
                user32 = (Process as any).getModuleByName("user32.dll");
            }
            catch (_) {
                try {
                    user32 = (Process as any).findModuleByName("user32.dll");
                }
                catch (_) { }
            }
            if (!user32) {
                try {
                    user32 = (Module as any).load("user32.dll");
                }
                catch (_) { }
            }
            let gaksPtr: any = null;
            let gcpPtr: any = null;
            try {
                gaksPtr = user32?.getExportByName
                    ? user32.getExportByName("GetAsyncKeyState")
                    : (Module as any).getExportByName("user32.dll", "GetAsyncKeyState");
            }
            catch (_) { }
            try {
                gcpPtr = user32?.getExportByName
                    ? user32.getExportByName("GetCursorPos")
                    : (Module as any).getExportByName("user32.dll", "GetCursorPos");
            }
            catch (_) { }
            if (!gaksPtr) {
                syteError("[Synapse PC] GetAsyncKeyState not found");
                return false;
            }
            _GAKS = new NativeFunction(gaksPtr, "int", ["int"]);
            if (gcpPtr)
                _GCP = new NativeFunction(gcpPtr, "bool", ["pointer"]);
            if (!_pcWin32ReadyLogged) {
                _pcWin32ReadyLogged = true;
                syteLog("[Synapse PC] Win32 Ready! Press 'Q' to toggle Menu/Fly.");
            }
            return true;
        }
        catch (e) {
            syteError("[Synapse PC] Win32 init failed: " + e);
            return false;
        }
    }
    function _pcKeyDown(vk: number): boolean {
        try {
            if (!_GAKS && !initPcWin32Input())
                return false;
            return (Number(_GAKS(vk)) & 0x8000) !== 0;
        }
        catch (_) {
            return false;
        }
    }
    function syteHookReturn(cls: any, methodName: string, condition: () => boolean, value: any, paramCount: number = 0) {
        try {
            const method = cls.method(methodName, paramCount);
            const original = method.nativeFunction;
            method.implementation = function (...args: any[]) {
                if (condition())
                    return value;
                return original.call(this, ...args);
            };
            return true;
        }
        catch (e) {
            return false;
        }
    }
    function syteInstallShopHooks() {
        if (shopHooksInstalled)
            return;
        try {
            const gameplay = AssemblyCSharp.class("AnimalCompany.GameplayItemState");
            for (const m of [
                "get_isPurchasable",
                "get_isResearchable",
                "get_isProduct",
            ]) {
                syteHookReturn(gameplay, m, () => shopUnlockEnabled, true);
            }
            for (const m of [
                "get_allowSaving",
                "get_allowBlueprintSaving",
                "get_canBeSavedToLoadoutTemplate",
            ]) {
                syteHookReturn(gameplay, m, () => blueprintAbuseEnabled, true);
            }
            syteHookReturn(gameplay, "get_maxInBlueprint", () => blueprintAbuseEnabled, 999);
            const gm = AssemblyCSharp.class("AnimalCompany.GameManager");
            syteHookReturn(gm, "TrySpendMoney", () => noSpendEnabled, true, 1);
            syteHookReturn(gm, "TrySpendFishy", () => noSpendEnabled, true, 1);
            shopHooksInstalled = true;
        }
        catch (e) {
            syteError("Shop hooks failed: " + e);
        }
    }
    function syteSafeImage(asmName: string) {
        try {
            const asm = Il2Cpp.domain.assembly(asmName);
            if (asm && !asm.handle.isNull())
                return asm.image;
        }
        catch (_) { }
        syteError("Assembly not found: " + asmName);
        return null;
    }
    const images = {
        AnimalCompany: syteSafeImage("AnimalCompany"),
        "UnityEngine.CoreModule": syteSafeImage("UnityEngine.CoreModule"),
        "UnityEngine.PhysicsModule": syteSafeImage("UnityEngine.PhysicsModule"),
        "UnityEngine.UIModule": syteSafeImage("UnityEngine.UIModule"),
        "UnityEngine.UI": syteSafeImage("UnityEngine.UI"),
        "UnityEngine.TextRenderingModule": syteSafeImage("UnityEngine.TextRenderingModule"),
        PhotonFusionNetworking: syteSafeImage("Fusion.Runtime"),
        PhotonFusionNetworkingRealtime: syteSafeImage("Fusion.Realtime"),
        "Unity.TextMeshPro": syteSafeImage("Unity.TextMeshPro"),
        "UnityEngine.XRModule": syteSafeImage("UnityEngine.XRModule"),
        "UnityEngine.UnityWebRequestModule": syteSafeImage("UnityEngine.UnityWebRequestModule"),
        "UnityEngine.AudioModule": syteSafeImage("UnityEngine.AudioModule"),
    };
    const AssemblyCSharp = images["AnimalCompany"];
    function syteApplyVrSpoof() {
        try {
            const appUtilsClass = AssemblyCSharp.class("AnimalCompany.AppUtils");
            if (!appUtilsClass) {
                syteError("VR spoof failed: AppUtils not found");
                return;
            }
            let applied = false;
            try {
                appUtilsClass.method("IsSteamVRHeadsetActive").implementation =
                    function () {
                        return true;
                    };
                applied = true;
            }
            catch (_) { }
            try {
                appUtilsClass.method("GetXRBackend").implementation = function () {
                    return 2;
                };
                applied = true;
            }
            catch (_) { }
            try {
                const status = appUtilsClass.nested("SteamVRHeadsetStatus");
                appUtilsClass.method("GetSteamVRHeadsetStatus").implementation =
                    function () {
                        const spoof = status.new().unbox();
                        spoof.field("activeLoaderPresent").value = true;
                        spoof.field("xrDisplayRunning").value = true;
                        spoof.field("headDeviceValid").value = true;
                        spoof.field("userPresenceKnown").value = true;
                        spoof.field("userPresent").value = true;
                        return spoof;
                    };
                applied = true;
            }
            catch (_) { }
            try {
                const versionMethod = appUtilsClass.methods.find((method) => /CalculatePhotonAppVersion/i.test(method.name) &&
                    (method.returnType?.name || "") === "System.String");
                if (versionMethod) {
                    versionMethod.implementation = function (...args: any[]) {
                        return this.method(versionMethod.name).invoke(...args);
                    };
                    applied = true;
                }
                else {
                    syteInfo("VR spoof warning: version method not found");
                }
            }
            catch (e) {
                syteError("VR spoof platform hook failed: " + e);
            }
            if (applied)
                syteLog("VR spoof applied successfully");
            else
                syteError("VR spoof failed: no hooks applied");
        }
        catch (e) {
            syteError("VR spoof failed: " + e);
        }
    }
    syteApplyVrSpoof();
    const UnityEngineCore = images["UnityEngine.CoreModule"];
    const UnityEnginePhysics = images["UnityEngine.PhysicsModule"];
    const UnityEngineUI = images["UnityEngine.UI"];
    const UnityEngineUIModule = images["UnityEngine.UIModule"];
    const UnityEngineTextRendering = images["UnityEngine.TextRenderingModule"];
    const PhotonFusionNetworking = images["PhotonFusionNetworking"];
    const UnityEngineXR = images["UnityEngine.XRModule"];
    const UnityEngineAudio = images["UnityEngine.AudioModule"];
    let GTPlayerClass: any = null, PCClass: any = null, NetPlayer: any = null, GBIClass: any = null, PrefabGen: any = null, SFXManager: any = null, ParticleManagerClass: any = null, NetworkObjectClass: any = null;
    let NManager: any = null, GorillaReportButton: any = null, InputDevices: any = null, CommonUsages: any = null, GameObject: any = null, Object: any = null, Vector3: any = null, Quaternion: any = null, Time: any = null, Resources: any = null, Material: any = null;
    let Renderer: any = null, Shader: any = null, Color: any = null, Mesh: any = null, MeshFilter: any = null, RectTransform: any = null, LineRenderer: any = null, Camera: any = null, PlayerPrefs: any = null, GBOClass: any = null, BackpackItemClass: any = null, Light: any = null, AudioSource: any = null, MeshCollider: any = null, BoxCollider: any = null, Collider: any = null, Rigidbody: any = null, Physics: any = null;
    let Canvas: any = null, CanvasScaler: any = null, GraphicRaycaster: any = null, Text: any = null, Font: any = null;
    GTPlayer = null;
    instance = null;
    UberShader = null;
    TextShader = null;
    GTPlayerClass = AssemblyCSharp.class("AnimalCompany.GorillaLocomotion");
    PCClass = AssemblyCSharp.class("AnimalCompany.PlayerController");
    NetPlayer = AssemblyCSharp.class("AnimalCompany.NetPlayer");
    GBIClass = AssemblyCSharp.class("AnimalCompany.GrabbableItem");
    PrefabGen = AssemblyCSharp.class("AnimalCompany.PrefabGenerator");
    SFXManager = AssemblyCSharp.class("AnimalCompany.SFXManager");
    ParticleManagerClass = AssemblyCSharp.class("AnimalCompany.ParticleManager");
    NetworkObjectClass = PhotonFusionNetworking
        ? PhotonFusionNetworking.class("Fusion.NetworkObject")
        : null;
    NManager = AssemblyCSharp.class("AnimalCompany.NetworkManager");
    GorillaReportButton = AssemblyCSharp.class("AnimalCompany.ComputerTerminalKey");
    InputDevices = UnityEngineXR.class("UnityEngine.XR.InputDevices");
    CommonUsages = UnityEngineXR.class("UnityEngine.XR.CommonUsages");
    try {
        const maxHealthHook = NetPlayer.method("get_maxHealth");
        maxHealthHook.implementation = function () {
            try {
                if (infHealthEnabled && this.method("get_IsMine").invoke())
                    return 999999;
            }
            catch (_) { }
            return this.method("get_maxHealth").invoke();
        };
    }
    catch (_) { }
    GameObject = UnityEngineCore.class("UnityEngine.GameObject");
    Object = UnityEngineCore.class("UnityEngine.Object");
    Vector3 = UnityEngineCore.class("UnityEngine.Vector3");
    Quaternion = UnityEngineCore.class("UnityEngine.Quaternion");
    Time = UnityEngineCore.class("UnityEngine.Time");
    Resources = UnityEngineCore.class("UnityEngine.Resources");
    Material = UnityEngineCore.class("UnityEngine.Material");
    Renderer = UnityEngineCore.class("UnityEngine.Renderer");
    Shader = UnityEngineCore.class("UnityEngine.Shader");
    Color = UnityEngineCore.class("UnityEngine.Color");
    Mesh = UnityEngineCore.class("UnityEngine.Mesh");
    MeshFilter = UnityEngineCore.class("UnityEngine.MeshFilter");
    RectTransform = UnityEngineCore.class("UnityEngine.RectTransform");
    LineRenderer = UnityEngineCore.class("UnityEngine.LineRenderer");
    Camera = UnityEngineCore.class("UnityEngine.Camera");
    PlayerPrefs = UnityEngineCore.class("UnityEngine.PlayerPrefs");
    GBOClass = AssemblyCSharp.class("AnimalCompany.GrabbableObject");
    BackpackItemClass = AssemblyCSharp.class("AnimalCompany.BackpackItem");
    Light = UnityEngineCore.class("UnityEngine.Light");
    AudioSource = UnityEngineAudio.class("UnityEngine.AudioSource");
    MeshCollider = UnityEnginePhysics.class("UnityEngine.MeshCollider");
    BoxCollider = UnityEnginePhysics.class("UnityEngine.BoxCollider");
    Collider = UnityEnginePhysics.class("UnityEngine.Collider");
    Rigidbody = UnityEnginePhysics.class("UnityEngine.Rigidbody");
    Physics = UnityEnginePhysics.class("UnityEngine.Physics");
    Canvas = UnityEngineUIModule.class("UnityEngine.Canvas");
    CanvasScaler = UnityEngineUI.class("UnityEngine.UI.CanvasScaler");
    GraphicRaycaster = UnityEngineUI.class("UnityEngine.UI.GraphicRaycaster");
    Text = UnityEngineUI.class("UnityEngine.UI.Text");
    Font = UnityEngineTextRendering.class("UnityEngine.Font");
    function syteValid(obj) {
        try {
            if (!obj)
                return false;
            if (obj.isNull && obj.isNull())
                return false;
            if (obj.handle && obj.handle.isNull && obj.handle.isNull())
                return false;
            return true;
        }
        catch (_) {
            return !!obj;
        }
    }
    instanceField =
        GTPlayerClass && GTPlayerClass.fields
            ? GTPlayerClass.fields.find((f) => f.name.includes("Instance"))
            : null;
    GTPlayer = null;
    try {
        if (GTPlayerClass && !GTPlayerClass.handle.isNull()) {
            GTPlayer = GTPlayerClass.field("<Instance>k__BackingField").value;
        }
    }
    catch (_) { }
    if (!syteValid(GTPlayer))
        GTPlayer = null;
    instance = GTPlayer;
    if (!syteValid(instance) && instanceField) {
        try {
            instance = instanceField.value;
        }
        catch (_) { }
    }
    if (!syteValid(instance))
        instance = null;
    if (!syteValid(GTPlayer))
        GTPlayer = instance;
    rigidbody = null;
    try {
        if (syteValid(GTPlayer))
            rigidbody = GTPlayer.field("_playerRigidBody").value;
    }
    catch (_) { }
    UberShader = null;
    TextShader = null;
    function ensureShaders() {
        if (UberShader && TextShader)
            return;
        try {
            UberShader = Shader.method("Find").invoke(Il2Cpp.string("Universal Render Pipeline/Unlit"));
            TextShader = Shader.method("Find").invoke(Il2Cpp.string("UI/Default"));
        }
        catch (e) {
            syteLog("[-] Shader lookup failed (standard)");
        }
    }
    function applyFemboyBgImage(menuBg: any) {
        if (!femboyThemeEnabled) return;
        try {
            const renderer = getComponent(menuBg, Renderer);
            if (!renderer || renderer.isNull?.()) return;
            if (femboyBgTexture && !femboyBgTexture.isNull?.()) {
                try {
                    const mat = renderer.method("get_material").invoke();
                    mat.method("set_mainTexture").invoke(femboyBgTexture);
                    return;
                } catch (_) {}
            }
            const Texture2DClass = UnityEngineCore.class("UnityEngine.Texture2D");
            const ImageConversionClass = UnityEngineCore.class("UnityEngine.ImageConversion");
            if (femboyBgBase64 && femboyBgBase64.length > 100 && Texture2DClass && ImageConversionClass) {
                try {
                    const bytes = Il2Cpp.array(Il2Cpp.corlib.class("System.Byte"), 0);
                    const tex = Texture2DClass.alloc();
                    tex.method(".ctor", 4).invoke(2, 2, 4, true);
                    const loadMethod = ImageConversionClass.method("LoadImage", 2).inflate(tex);
                    const byteArr = Convert.method("FromBase64String", 1).invoke(Il2Cpp.string(femboyBgBase64));
                    loadMethod.invoke(tex, byteArr);
                    femboyBgTexture = tex;
                    const mat = renderer.method("get_material").invoke();
                    mat.method("set_mainTexture").invoke(tex);
                    return;
                } catch (e) { syteLog("[-] Femboy base64 image load failed: " + e); }
            }
            if (!Texture2DClass) return;
            const tex = Texture2DClass.alloc();
            tex.method(".ctor", 4).invoke(512, 512, 4, true);
            const colors = Il2Cpp.array(UnityEngineCore.class("UnityEngine.Color"), 512 * 512);
            for (let y = 0; y < 512; y++) {
                for (let x = 0; x < 512; x++) {
                    const ny = y / 512;
                    const nx = x / 512;
                    const cx = nx - 0.5;
                    const cy = ny - 0.5;
                    const dist = Math.sqrt(cx * cx + cy * cy);
                    const t = Math.min(dist / 0.5, 1);
                    const r = 0.97 - t * 0.12 + Math.sin(nx * 12) * 0.03;
                    const g = 0.88 - t * 0.18 + Math.sin(nx * 12 + 2) * 0.03;
                    const b = 0.92 - t * 0.08 + Math.sin(nx * 12 + 4) * 0.03;
                    const col = Il2Cpp.alloc(UnityEngineCore.class("UnityEngine.Color").valueSize);
                    col.handle.writeF32(r);
                    col.handle.add(4).writeF32(g);
                    col.handle.add(8).writeF32(b);
                    col.handle.add(12).writeF32(0.92);
                    colors.set(y * 512 + x, col);
                }
            }
            tex.method("SetPixels", 1).invoke(colors, 0);
            tex.method("Apply", 0).invoke();
            femboyBgTexture = tex;
            const mat2 = renderer.method("get_material").invoke();
            mat2.method("set_mainTexture").invoke(tex);
        } catch (e) {
            syteLog("[-] Femboy bg image failed: " + e);
        }
    }
    const zeroVector = Vector3.field("zeroVector").value;
    const oneVector = Vector3.field("oneVector").value;
    const identityQuaternion = Quaternion.field("identityQuaternion").value;
    const NULL = Il2Cpp.reference(Il2Cpp.domain.assembly("mscorlib").image.class("System.Object").alloc());
    rightHandTransform = syteValid(instance)
        ? instance.field("rightHandTransform").value
        : null;
    leftHandTransform = syteValid(instance)
        ? instance.field("leftHandTransform").value
        : null;
    let headCollider = syteValid(instance)
        ? instance.field("headCollider").value
        : null;
    let bodyCollider = syteValid(instance)
        ? instance.field("bodyCollider").value
        : null;
    let leftHandFollower = syteValid(instance)
        ? instance.field("leftHandFollower").value
        : null;
    let rightHandFollower = syteValid(instance)
        ? instance.field("rightHandFollower").value
        : null;
    let playerRigidBody = syteValid(instance)
        ? instance.field("_playerRigidBody").value
        : null;
    let menuFont = null;
    function ensureFont() {
        if (syteValid(menuFont))
            return;
        menuFont = null;
        try {
            const comicSansFactory = Font.methods.find((method: any) => method.name === "CreateDynamicFontFromOSFont" &&
                method.parameterCount === 2 &&
                method.parameters[0].type.name === "System.String");
            if (comicSansFactory) {
                menuFont = comicSansFactory.invoke(Il2Cpp.string("Comic Sans MS"), 28);
                if (syteValid(menuFont))
                    syteLog("[+] Comic Sans MS loaded");
            }
        }
        catch (_) { }
        if (syteValid(menuFont))
            return;
        menuFont = null;
        try {
            menuFont = Resources.method("GetBuiltinResource", 1)
                .inflate(Font)
                .invoke(Il2Cpp.string("Arial.ttf"));
        }
        catch (e) {
            syteLog("[-] Could not load menu font");
        }
    }
    function Destroy(object) {
        Object.method("Destroy", 1).invoke(object);
    }
    function getComponent(obj: any, type) {
        return obj.method("GetComponent", 1).inflate(type).invoke();
    }
    function addComponent(obj: any, type) {
        return obj.method("AddComponent", 1).inflate(type).invoke();
    }
    function getTransform(obj: any) {
        return obj.method("get_transform").invoke();
    }
    function syteSetVelocity(rb: any, velocity: [number, number, number] | any) {
        try {
            let value = velocity;
            if (Array.isArray(velocity)) {
                value = Vector3.method("get_zero").invoke();
                value.field("x").value = velocity[0];
                value.field("y").value = velocity[1];
                value.field("z").value = velocity[2];
            }
            try {
                rb.method("set_linearVelocity").invoke(value);
            }
            catch (_) {
                rb.method("set_velocity").invoke(value);
            }
        }
        catch (_) { }
    }
    function getPlainMenuText(text: string): string {
        return text.replace(/</g, "\u2039").replace(/>/g, "\u203a");
    }
    function makeAnimatedGradientText(text: string, phase: number): string {
        let result = "";
        let visibleIndex = 0;
        const displayText = getPlainMenuText(text);
        for (const character of displayText) {
            if (character === " " || character === "\n") {
                result += character;
                continue;
            }
            const wave = 0.5 + 0.5 * Math.sin(phase + visibleIndex * 0.48);
            const grey = Math.round(textGradientDarkTone +
                wave * (textGradientLightTone - textGradientDarkTone));
            const hex = grey.toString(16).padStart(2, "0");
            result += `<color=#${hex}${hex}${hex}>${character}</color>`;
            visibleIndex++;
        }
        return result;
    }
    function updateAnimatedMenuText() {
        if (!textGradientEnabled || !menu || frameCount % 2 !== 0)
            return;
        for (const item of animatedMenuTexts) {
            try {
                if (!item.component || item.component.isNull?.())
                    continue;
                item.component
                    .method("set_text")
                    .invoke(Il2Cpp.string(makeAnimatedGradientText(item.text, time * textGradientSpeed + item.phase)));
            }
            catch (_) { }
        }
    }
    function renderMenuText(canvasObject, text: string = "", color: [
        number,
        number,
        number,
        number
    ] = [1, 1, 1, 1], pos = zeroVector, size = oneVector) {
        ensureFont();
        const title = addComponent(createObject(zeroVector, identityQuaternion, oneVector, 3, [0, 0, 0, 0], getTransform(canvasObject)), Text);
        const textPhase = animatedMenuTexts.length * 0.73;
        title.method("set_supportRichText").invoke(true);
        title
            .method("set_text")
            .invoke(Il2Cpp.string(textGradientEnabled
            ? makeAnimatedGradientText(text, time * textGradientSpeed + textPhase)
            : getPlainMenuText(text)));
        title.method("set_font").invoke(menuFont);
        title.method("set_fontSize").invoke(1);
        title
            .method("set_color")
            .invoke(textGradientEnabled ? [1, 1, 1, color[3]] : color);
        title.method("set_fontStyle").invoke(0);
        title.method("set_alignment").invoke(4);
        title.method("set_resizeTextForBestFit").invoke(true);
        title.method("set_resizeTextMinSize").invoke(0);
        const rectTransform = getComponent(title, RectTransform);
        rectTransform.method("set_sizeDelta").invoke(size);
        rectTransform.method("set_position").invoke(pos);
        rectTransform
            .method("set_rotation")
            .invoke(Quaternion.method("Euler").invoke(180.0, 90.0, 90.0));
        if (textGradientEnabled)
            animatedMenuTexts.push({ component: title, text, phase: textPhase });
    }
    function createObject(pos = zeroVector, rot = identityQuaternion, scale = oneVector, primitiveType: number = 3, colorArr: [
        number,
        number,
        number,
        number
    ] = [1, 1, 1, 1], parent = null) {
        const obj = GameObject.method("CreatePrimitive").invoke(primitiveType);
        const renderer = getComponent(obj, Renderer);
        if (colorArr[3] == 0) {
            renderer.method("set_enabled").invoke(false);
        }
        else {
            ensureShaders();
            const material = renderer.method("get_material").invoke();
            if (UberShader)
                material.method("set_shader").invoke(UberShader);
            material.method("set_color").invoke(colorArr);
        }
        const transform = getTransform(obj);
        if (parent != null)
            transform.method("SetParent", 2).invoke(parent, false);
        transform.method("set_position").invoke(pos);
        transform.method("set_rotation").invoke(rot);
        transform.method("set_localScale").invoke(scale);
        return obj;
    }
    const roundedMeshCache = new Map<string, any>();
    function getRoundedBoxMesh(width: number, height: number, cornerRadius: number): any {
        const normalizedY = Math.max(0.001, Math.min(0.46, cornerRadius / Math.max(width, 0.001)));
        const normalizedZ = Math.max(0.001, Math.min(0.46, cornerRadius / Math.max(height, 0.001)));
        const cacheKey = normalizedY.toFixed(4) + ":" + normalizedZ.toFixed(4);
        const cached = roundedMeshCache.get(cacheKey);
        if (cached && !cached.isNull?.())
            return cached;
        const perimeter: Array<[
            number,
            number
        ]> = [];
        const cornerSegments = 10;
        const corners: Array<[
            number,
            number,
            number,
            number
        ]> = [
            [0.5 - normalizedY, 0.5 - normalizedZ, 0, Math.PI * 0.5],
            [
                -0.5 + normalizedY,
                0.5 - normalizedZ,
                Math.PI * 0.5,
                Math.PI,
            ],
            [
                -0.5 + normalizedY,
                -0.5 + normalizedZ,
                Math.PI,
                Math.PI * 1.5,
            ],
            [
                0.5 - normalizedY,
                -0.5 + normalizedZ,
                Math.PI * 1.5,
                Math.PI * 2,
            ],
        ];
        for (const [centerY, centerZ, startAngle, endAngle] of corners) {
            for (let segment = 0; segment <= cornerSegments; segment++) {
                const t = segment / cornerSegments;
                const angle = startAngle + (endAngle - startAngle) * t;
                perimeter.push([
                    centerY + Math.cos(angle) * normalizedY,
                    centerZ + Math.sin(angle) * normalizedZ,
                ]);
            }
        }
        const vertices: Array<[
            number,
            number,
            number
        ]> = [];
        for (const [y, z] of perimeter)
            vertices.push([0.5, y, z]);
        for (const [y, z] of perimeter)
            vertices.push([-0.5, y, z]);
        const ringCount = perimeter.length;
        const frontCenter = vertices.length;
        vertices.push([0.5, 0, 0]);
        const backCenter = vertices.length;
        vertices.push([-0.5, 0, 0]);
        const triangles: number[] = [];
        for (let index = 0; index < ringCount; index++) {
            const next = (index + 1) % ringCount;
            triangles.push(frontCenter, index, next);
            triangles.push(backCenter, next + ringCount, index + ringCount);
            triangles.push(index, index + ringCount, next + ringCount);
            triangles.push(index, next + ringCount, next);
        }
        const vertexArray = Il2Cpp.array(Vector3, vertices.length);
        for (let index = 0; index < vertices.length; index++) {
            vertexArray.set(index, Il2Cpp.fromFridaValue(vertices[index], Vector3.type));
        }
        const triangleArray = Il2Cpp.array(Il2Cpp.corlib.class("System.Int32"), triangles);
        const mesh = Mesh.alloc();
        mesh.method(".ctor", 0).invoke();
        mesh.method("set_vertices").invoke(vertexArray);
        mesh.method("set_triangles").invoke(triangleArray);
        mesh.method("RecalculateBounds", 0).invoke();
        mesh.method("RecalculateNormals", 0).invoke();
        roundedMeshCache.set(cacheKey, mesh);
        return mesh;
    }
    function createOutlinedRoundedObject(pos: [
        number,
        number,
        number
    ], scale: [
        number,
        number,
        number
    ], fillColor: [
        number,
        number,
        number,
        number
    ], outlineColor: [
        number,
        number,
        number,
        number
    ], parent: any, interactive: boolean = false, outlineSize: number = 0.025) {
        const createLayer = (center: [
            number,
            number,
            number
        ], size: [
            number,
            number,
            number
        ], color: [
            number,
            number,
            number,
            number
        ], keepCollider: boolean, cornerRadius: number) => {
            const layer = createObject(center, identityQuaternion, size, 3, color, parent);
            try {
                const filter = getComponent(layer, MeshFilter);
                filter
                    .method("set_sharedMesh")
                    .invoke(getRoundedBoxMesh(size[1], size[2], cornerRadius));
            }
            catch (e) {
                syteLog("[-] Rounded mesh fallback: " + e);
            }
            if (!keepCollider)
                Destroy(getComponent(layer, Collider));
            return layer;
        };
        const fillRadius = Math.min(Math.min(scale[1], scale[2]) * cornerRoundness, 0.06);
        if (outlinesEnabled && outlineSize > 0) {
            createLayer([pos[0] - 0.001, pos[1], pos[2]], [
                scale[0],
                scale[1] + outlineSize * 2,
                scale[2] + outlineSize * 2,
            ], outlineColor, false, fillRadius + outlineSize);
        }
        return createLayer(pos, scale, fillColor, interactive, fillRadius);
    }
    function sendNotification(NotificationText: string = "", requiresReload: boolean = true, clearTime: number = 5) {
        const cleanText = String(NotificationText ?? "")
            .replace(/<[^>]*>/g, "")
            .replace(/[^\x20-\x7E\n]/g, "")
            .replace(/\s+/g, " ")
            .trim();
        if (!cleanText)
            return;
        const isOld = currentNotification === cleanText;
        currentNotification = cleanText;
        notifactionResetTime = time + Math.max(0.75, clearTime);
        if (!isOld)
            notificationCardBornAt = time;
        void requiresReload;
    }
    function notificationObjectKey(object: any): string {
        try {
            return object && !object.isNull?.() ? String(object.handle) : "";
        }
        catch (_) {
            return "";
        }
    }
    function destroyNotificationCard(): void {
        try {
            if (notificationCardRoot && !notificationCardRoot.isNull?.())
                Destroy(notificationCardRoot);
        }
        catch (_) { }
        notificationCardRoot = null;
        notificationCardText = "";
        notificationCardMenuKey = "";
        notificationCardThemeKey = "";
    }
    function notificationThemeKey(): string {
        return [
            ...bgColor,
            ...buttonColor,
            ...menuOutlineColor,
            ...textColor,
            outlinesEnabled ? 1 : 0,
            cornerRoundness,
        ]
            .map((value) => Number(value).toFixed(3))
            .join(":");
    }
    function createNotificationLayer(parent: any, position: [
        number,
        number,
        number
    ], scale: [
        number,
        number,
        number
    ], color: [
        number,
        number,
        number,
        number
    ], radius: number): any {
        const layer = createObject(zeroVector, identityQuaternion, oneVector, 3, color, parent);
        const layerTransform = getTransform(layer);
        layerTransform.method("set_localPosition").invoke(position);
        layerTransform.method("set_localRotation").invoke(identityQuaternion);
        layerTransform.method("set_localScale").invoke(scale);
        try {
            getComponent(layer, MeshFilter)
                .method("set_sharedMesh")
                .invoke(getRoundedBoxMesh(scale[1], scale[2], radius));
        }
        catch (_) { }
        try {
            Destroy(getComponent(layer, Collider));
        }
        catch (_) { }
        return layer;
    }
    function renderNotificationText(parent: any, message: string, color: [
        number,
        number,
        number,
        number
    ]): void {
        const canvasObject = createObject(zeroVector, identityQuaternion, oneVector, 3, [0, 0, 0, 0], parent);
        const canvasTransform = getTransform(canvasObject);
        canvasTransform.method("set_localPosition").invoke(zeroVector);
        canvasTransform.method("set_localRotation").invoke(identityQuaternion);
        canvasTransform.method("set_localScale").invoke(oneVector);
        try {
            Destroy(getComponent(canvasObject, BoxCollider));
        }
        catch (_) { }
        const canvas = addComponent(canvasObject, Canvas);
        const canvasScaler = addComponent(canvasObject, CanvasScaler);
        addComponent(canvasObject, GraphicRaycaster);
        canvas.method("set_renderMode").invoke(2);
        try {
            canvas.method("set_overrideSorting").invoke(true);
        }
        catch (_) { }
        try {
            canvas.method("set_sortingOrder").invoke(32767);
        }
        catch (_) { }
        canvasScaler.method("set_dynamicPixelsPerUnit").invoke(1000.0);
        ensureFont();
        const textObject = createObject(zeroVector, identityQuaternion, oneVector, 3, [0, 0, 0, 0], canvasTransform);
        const title = addComponent(textObject, Text);
        const textPhase = animatedMenuTexts.length * 0.73;
        title.method("set_supportRichText").invoke(true);
        title
            .method("set_text")
            .invoke(Il2Cpp.string(textGradientEnabled
            ? makeAnimatedGradientText(message, time * textGradientSpeed + textPhase)
            : getPlainMenuText(message)));
        title.method("set_font").invoke(menuFont);
        title.method("set_fontSize").invoke(1);
        title
            .method("set_color")
            .invoke(textGradientEnabled ? [1, 1, 1, color[3]] : color);
        title.method("set_fontStyle").invoke(0);
        title.method("set_alignment").invoke(4);
        title.method("set_resizeTextForBestFit").invoke(true);
        title.method("set_resizeTextMinSize").invoke(0);
        const rectTransform = getComponent(title, RectTransform);
        rectTransform.method("set_sizeDelta").invoke([0.42, 0.039]);
        rectTransform.method("set_localPosition").invoke([0.04, 0, 0]);
        rectTransform
            .method("set_localRotation")
            .invoke(Quaternion.method("Euler").invoke(180.0, 90.0, 90.0));
        rectTransform.method("set_localScale").invoke(oneVector);
        if (textGradientEnabled)
            animatedMenuTexts.push({ component: title, text: message, phase: textPhase });
    }
    function buildNotificationCard(): void {
        if (!menu || !currentNotification)
            return;
        destroyNotificationCard();
        notificationCardRoot = createObject(zeroVector, identityQuaternion, oneVector, 3, [0, 0, 0, 0], getTransform(menu));
        const rootTransform = getTransform(notificationCardRoot);
        rootTransform.method("set_localPosition").invoke([0.15, 0, -0.455]);
        rootTransform.method("set_localRotation").invoke(identityQuaternion);
        rootTransform.method("set_localScale").invoke(oneVector);
        try {
            Destroy(getComponent(notificationCardRoot, BoxCollider));
        }
        catch (_) { }
        const cardScale: [
            number,
            number,
            number
        ] = [0.062, 0.46, 0.052];
        const cardFill: [
            number,
            number,
            number,
            number
        ] = [
            buttonColor[0] * 0.78 + bgColor[0] * 0.22,
            buttonColor[1] * 0.78 + bgColor[1] * 0.22,
            buttonColor[2] * 0.78 + bgColor[2] * 0.22,
            Math.max(buttonColor[3], bgColor[3]),
        ];
        const radius = Math.min(Math.min(cardScale[1], cardScale[2]) * cornerRoundness, 0.032);
        const outline = Math.max(0.0025, Math.min(0.005, controlOutlineThickness));
        if (outlinesEnabled) {
            createNotificationLayer(rootTransform, [-0.001, 0, 0], [cardScale[0], cardScale[1] + outline * 2, cardScale[2] + outline * 2], menuOutlineColor, radius + outline);
        }
        createNotificationLayer(rootTransform, [0, 0, 0], cardScale, cardFill, radius);
        renderNotificationText(rootTransform, currentNotification, textColor);
        notificationCardText = currentNotification;
        notificationCardMenuKey = notificationObjectKey(menu);
        notificationCardThemeKey = notificationThemeKey();
    }
    function updateNotificationCard(): void {
        if (currentNotification && time > notifactionResetTime) {
            currentNotification = "";
            destroyNotificationCard();
            return;
        }
        if (!menu || !currentNotification) {
            destroyNotificationCard();
            return;
        }
        const menuKey = notificationObjectKey(menu);
        const themeKey = notificationThemeKey();
        const missingCard = !notificationCardRoot || notificationCardRoot.isNull?.();
        if (missingCard ||
            notificationCardText !== currentNotification ||
            notificationCardMenuKey !== menuKey ||
            notificationCardThemeKey !== themeKey) {
            buildNotificationCard();
        }
        if (!notificationCardRoot || notificationCardRoot.isNull?.())
            return;
        const age = Math.max(0, time - notificationCardBornAt);
        const remaining = Math.max(0, notifactionResetTime - time);
        const enter = Math.min(1, age / 0.16);
        const exit = Math.min(1, remaining / 0.16);
        const visible = 0.72 +
            0.28 * Math.max(0, Math.min(1, 1 - Math.pow(1 - enter, 3), exit));
        try {
            getTransform(notificationCardRoot)
                .method("set_localScale")
                .invoke([visible, visible, visible]);
        }
        catch (_) { }
    }
    function renderMenu() {
        animatedMenuTexts = [];
        if (!buttons[currentCategory]) {
            currentCategory = 0;
            currentPage = 0;
        }
        const buttonsPerPage = getButtonsPerPage();
        const categoryButtons = buttons[currentCategory] || buttons[0];
        const maxCurrentPage = Math.max(Math.ceil(categoryButtons.length / buttonsPerPage) - 1, 0);
        if (currentPage > maxCurrentPage)
            currentPage = maxCurrentPage;
        const targetMods = categoryButtons
            .slice(currentPage * buttonsPerPage)
            .slice(0, buttonsPerPage);
        const rowStartZ = 0.075;
        const panelCenterZ = -0.03;
        const panelScaleZ = 0.76;
        const pageCenterZ = -0.045;
        const pageScaleZ = 0.64;
        menu = createObject(zeroVector, identityQuaternion, [0.1, 0.3, 0.3825], 3, [0, 0, 0, 0]);
        menuSnapNextFrame = true;
        Destroy(getComponent(menu, BoxCollider));
        const menuBackground = createOutlinedRoundedObject([0.1, 0, panelCenterZ], [0.1, 0.72, panelScaleZ], bgColor, menuOutlineColor, getTransform(menu), false, menuOutlineThickness);
        if (femboyThemeEnabled) {
            try { applyFemboyBgImage(menuBackground); } catch (_) {}
        }
        const canvasObject = createObject(zeroVector, identityQuaternion, oneVector, 3, [0, 0, 0, 0], getTransform(menu));
        const canvas = addComponent(canvasObject, Canvas);
        Destroy(getComponent(canvasObject, BoxCollider));
        const canvasScaler = addComponent(canvasObject, CanvasScaler);
        addComponent(canvasObject, GraphicRaycaster);
        canvas.method("set_renderMode").invoke(2);
        canvasScaler.method("set_dynamicPixelsPerUnit").invoke(1000.0);
        renderMenuText(canvasObject, "Synapse Menu", textColor, [0.11, 0, 0.103], [titleWidth, titleHeight]);
        if (time > notifactionResetTime)
            currentNotification = "";
        const disconnectButton = createOutlinedRoundedObject([0.1, 0.0, 0.142], [0.09, disconnectButtonWidth, 0.065], buttonColor, pageOutlineColor, getTransform(menu), true, controlOutlineThickness);
        disconnectButton.method("set_name").invoke(Il2Cpp.string("@Disconnect"));
        addComponent(disconnectButton, GorillaReportButton);
        getComponent(disconnectButton, Collider)
            .method("set_isTrigger")
            .invoke(true);
        renderMenuText(canvasObject, "Disconnect", textColor, [0.11, 0, 0.142], [0.6, 0.065]);
        {
            {
                const pageButton = createOutlinedRoundedObject([0.1, 0.14, pageCenterZ], [0.09, pageButtonWidth, pageScaleZ], buttonColor, pageOutlineColor, getTransform(menu), true, controlOutlineThickness);
                pageButton.method("set_name").invoke(Il2Cpp.string("@PreviousPage"));
                addComponent(pageButton, GorillaReportButton);
                getComponent(pageButton, Collider).method("set_isTrigger").invoke(true);
                renderMenuText(canvasObject, "<", textColor, [0.11, 0.14, pageCenterZ], [0.25, 0.075]);
            }
            {
                const pageButton = createOutlinedRoundedObject([0.1, -0.14, pageCenterZ], [0.09, pageButtonWidth, pageScaleZ], buttonColor, pageOutlineColor, getTransform(menu), true, controlOutlineThickness);
                pageButton.method("set_name").invoke(Il2Cpp.string("@NextPage"));
                addComponent(pageButton, GorillaReportButton);
                getComponent(pageButton, Collider).method("set_isTrigger").invoke(true);
                renderMenuText(canvasObject, ">", textColor, [0.11, -0.14, pageCenterZ], [0.25, 0.075]);
            }
        }
        let i = 0;
        targetMods.forEach((buttonData, index) => {
            const rowZ = rowStartZ - i * rowButtonSpacing;
            if (buttonData.stepDown && buttonData.stepUp) {
                const labelWidth = rowButtonWidth * 0.56;
                const sideWidth = rowButtonWidth * 0.18;
                const sideOffset = rowButtonWidth * 0.12;
                createOutlinedRoundedObject([0.105, 0, rowZ], [0.09, labelWidth, rowButtonHeight], buttonColor, buttonOutlineColor, getTransform(menu), false, rowOutlineThickness);
                for (const [control, y, symbol] of [
                    [buttonData.stepDown, sideOffset, "-"],
                    [buttonData.stepUp, -sideOffset, "+"],
                ] as Array<[
                    ButtonInfo,
                    number,
                    string
                ]>) {
                    const stepButton = createOutlinedRoundedObject([0.105, y, rowZ], [0.09, sideWidth, rowButtonHeight], buttonColor, buttonOutlineColor, getTransform(menu), true, rowOutlineThickness);
                    stepButton
                        .method("set_name")
                        .invoke(Il2Cpp.string("@" + control.activationId));
                    addComponent(stepButton, GorillaReportButton);
                    getComponent(stepButton, Collider).method("set_isTrigger").invoke(true);
                    renderMenuText(canvasObject, symbol, textColor, [0.11, y, rowZ], [sideWidth * 0.8, 0.045]);
                }
                let stepLabel = buttonData.buttonText;
                if (_pcMode && _pcMenuOpen && i === _pcMenuSelector)
                    stepLabel = "> " + stepLabel;
                renderMenuText(canvasObject, stepLabel, textColor, [0.11, 0, rowZ], [labelWidth * 0.92, 0.046]);
                i++;
                return;
            }
            const button = createOutlinedRoundedObject([0.105, 0, rowZ], [0.09, rowButtonWidth, rowButtonHeight], buttonColor, buttonOutlineColor, getTransform(menu), true, rowOutlineThickness);
            button
                .method("set_name")
                .invoke(Il2Cpp.string("@" + buttonData.activationId));
            addComponent(button, GorillaReportButton);
            getComponent(button, Collider).method("set_isTrigger").invoke(true);
            let finalBtnText = buttonData.buttonText;
            if (_pcMode && _pcMenuOpen && i === _pcMenuSelector) {
                finalBtnText = "> " + finalBtnText;
            }
            renderMenuText(canvasObject, finalBtnText, textColor, [0.11, 0, rowZ], [0.8, 0.048]);
            updateButtonColor(button, buttonData, i);
            i++;
        });
        getTransform(menu)
            .method("set_localScale")
            .invoke(Vector3.method("op_Multiply").invoke(Vector3.method("op_Multiply").invoke(getTransform(menu).method("get_localScale").invoke(), GTPlayer.field("<playerScale>k__BackingField").value), menuscale));
        menuClosing = false;
        recenterMenu();
    }
    function renderReference() {
        if (righthand) {
            reference = createObject(zeroVector, identityQuaternion, [0.01, 0.01, 0.01], 0, bgColor, leftHandTransform);
            referenceCollider = getComponent(reference, Collider);
            getTransform(reference)
                .method("set_localPosition")
                .invoke([0.01, -0.117, 0.05]);
            reference.method("set_layer").invoke(2);
            addComponent(reference, Rigidbody).method("set_isKinematic").invoke(true);
        }
        else {
            reference = createObject(zeroVector, identityQuaternion, [0.01, 0.01, 0.01], 0, bgColor, rightHandTransform);
            referenceCollider = getComponent(reference, Collider);
            getTransform(reference)
                .method("set_localPosition")
                .invoke([0.01, -0.117, 0.05]);
            reference.method("set_layer").invoke(2);
            addComponent(reference, Rigidbody).method("set_isKinematic").invoke(true);
        }
    }
    function recenterMenu() {
        try {
            if (!menu)
                return;
            const menuTransform = getTransform(menu);
            let targetPos: any = zeroVector;
            let targetRot: any = identityQuaternion;
            if (_pcMode) {
                const headTransform = getTransform(headCollider);
                if (headTransform && !headTransform.isNull?.()) {
                    const headPos = headTransform.method("get_position").invoke();
                    const headFwd = headTransform.method("get_forward").invoke();
                    const headRot = headTransform.method("get_rotation").invoke();
                    targetPos = Vector3.method("op_Addition").invoke(headPos, Vector3.method("op_Multiply", 2).invoke(headFwd, pcMenuDistance));
                    targetRot = Quaternion.method("op_Multiply").invoke(headRot, Quaternion.method("Euler").invoke(-90, 90, 0));
                }
            }
            else {
                const handTransform = righthand
                    ? rightHandTransform
                    : leftHandTransform;
                if (!handTransform || handTransform.isNull?.())
                    return;
                const handPos = handTransform.method("get_position").invoke();
                const handRight = handTransform.method("get_right").invoke();
                const palmInset = Vector3.method("op_Multiply").invoke(handRight, righthand ? vrMenuPalmInset : -vrMenuPalmInset);
                let viewRightOffset: any = zeroVector;
                try {
                    const headRight = getTransform(headCollider)
                        .method("get_right")
                        .invoke();
                    viewRightOffset = Vector3.method("op_Multiply", 2).invoke(headRight, vrMenuRightOffset);
                }
                catch (_) { }
                targetPos = Vector3.method("op_Addition").invoke(Vector3.method("op_Addition").invoke(Vector3.method("op_Addition").invoke(handPos, [0, vrMenuUpOffset, 0]), palmInset), viewRightOffset);
                targetRot = handTransform.method("get_rotation").invoke();
                if (righthand) {
                    targetRot = Quaternion.method("op_Multiply").invoke(targetRot, Quaternion.method("Euler").invoke(0, 0, 180));
                }
                targetRot = Quaternion.method("op_Multiply").invoke(targetRot, Quaternion.method("Euler").invoke(0, vrMenuTilt, 0));
            }
            if (menuSnapNextFrame || !LerpMenu) {
                menuTransform.method("set_position").invoke(targetPos);
                menuTransform.method("set_rotation").invoke(targetRot);
                menuSnapNextFrame = false;
                return;
            }
            const followAlpha = Math.min(1, Math.max(deltaTime, 0.0001) * Math.max(2, menuFollowSmoothness));
            menuTransform
                .method("set_position")
                .invoke(Vector3.method("Lerp").invoke(menuTransform.method("get_position").invoke(), targetPos, followAlpha));
            menuTransform
                .method("set_rotation")
                .invoke(Quaternion.method("Slerp").invoke(menuTransform.method("get_rotation").invoke(), targetRot, followAlpha));
        }
        catch (_) { }
    }
    function reloadMenu() {
        if (menu != null) {
            menuReloading = true;
            Object.method("Destroy", 1).invoke(menu);
            menu = null;
            menuAnimation = 1;
        }
    }
    function updateMenuAnimation(opening: boolean) {
        if (!menu)
            return;
        const speed = opening ? menuOpenSpeed : menuCloseSpeed;
        menuAnimation += (opening ? 1 : -1) * deltaTime * speed;
        menuAnimation = Math.max(0, Math.min(1, menuAnimation));
        const eased = opening
            ? 1 - Math.pow(1 - menuAnimation, 3)
            : menuAnimation * menuAnimation;
        const playerScale = GTPlayer.field("<playerScale>k__BackingField").value;
        const animatedScale = Math.max(0.025, eased) * menuscale * playerScale;
        getTransform(menu)
            .method("set_localScale")
            .invoke(Vector3.method("op_Multiply").invoke([0.1, 0.3, 0.3825], animatedScale));
    }
    function updateButtonColor(button: any, buttonData: ButtonInfo, index: number = -1) {
        const RendererClass = Il2Cpp.domain
            .assembly("UnityEngine.CoreModule")
            .image.class("UnityEngine.Renderer");
        const finalColor = buttonData.enabled ? buttonPressedColor : buttonColor;
        try {
            const renderer = getComponent(button, RendererClass);
            if (!renderer || renderer.isNull?.())
                return;
            renderer
                .method("get_material")
                .invoke()
                .method("set_color")
                .invoke(finalColor);
        }
        catch (_) { }
    }
    function createEmbeddedCustomClickClip() {
        if (customClickClip && customClickAudioSource)
            return;
        let setupStage = "decode PCM";
        try {
            const convert = Il2Cpp.corlib.class("System.Convert");
            const pcmBytes = convert
                .method("FromBase64String", 1)
                .invoke(Il2Cpp.string(CLICK_PCM_BASE64));
            const floats = new Float32Array(CLICK_PCM_SAMPLES);
            for (let i = 0; i < CLICK_PCM_SAMPLES; i++) {
                const lo = Number(pcmBytes.get(i * 2)) & 0xff;
                const hi = Number(pcmBytes.get(i * 2 + 1)) & 0xff;
                let sample = lo | (hi << 8);
                if (sample >= 0x8000)
                    sample -= 0x10000;
                floats[i] = sample / 32768;
            }
            setupStage = "create AudioClip";
            const audioClipClass = images["UnityEngine.AudioModule"].class("UnityEngine.AudioClip");
            customClickClip = audioClipClass
                .method("Create", 5)
                    .invoke(Il2Cpp.string("SynapseClick"), CLICK_PCM_SAMPLES, 1, CLICK_PCM_RATE, false);
            const sampleArray = Il2Cpp.array(Il2Cpp.corlib.class("System.Single"), CLICK_PCM_SAMPLES);
            setupStage = "upload samples";
            sampleArray.elements.write(floats);
            customClickClip.method("SetData", 2).invoke(sampleArray, 0);
            setupStage = "create AudioSource";
            const audioObject = GameObject.alloc();
                audioObject.method(".ctor", 1).invoke(Il2Cpp.string("SynapseMenuAudio"));
            customClickAudioSource = addComponent(audioObject, AudioSource);
            customClickAudioSource.method("set_spatialBlend").invoke(0);
            customClickAudioSource.method("set_volume").invoke(1);
            syteLog("[+] Custom click sound ready");
        }
        catch (e) {
            customClickClip = null;
            customClickAudioSource = null;
            syteError("Custom click PCM setup failed (" + setupStage + "): " + e);
        }
    }
    function beginCustomClickLoad() {
        if (customClickLoadAttempted)
            return;
        customClickLoadAttempted = true;
        createEmbeddedCustomClickClip();
    }
    function updateCustomClickLoad() {
        if (!customClickLoadAttempted)
            beginCustomClickLoad();
    }
    function playButtonSound() {
        if (customClickAudioSource && customClickClip) {
            try {
                customClickAudioSource.method("PlayOneShot", 1).invoke(customClickClip);
                return;
            }
            catch (_) { }
        }
        const sound = buttonSound;
        const NetworkRunner = SFXManager.method("get__currentRunner").invoke();
        SFXManager.method("RPC_PlaySFX").invoke(NetworkRunner, sound, 1, leftHandTransform.method("get_position").invoke(), 1.0);
    }
    function styleActionButton(label: string, action: () => void): ButtonInfo {
        return new ButtonInfo({
            buttonText: label,
            method: () => {
                action();
                reloadMenu();
            },
            isTogglable: false,
            toolTip: "Menu style: " + label,
        });
    }
    function styleStepper(label: string, decrease: () => void, increase: () => void): ButtonInfo {
        const down = styleActionButton(label + " -", decrease);
        const up = styleActionButton(label + " +", increase);
        return new ButtonInfo({
            buttonText: label,
            method: () => {
                increase();
                reloadMenu();
            },
            isTogglable: false,
            stepDown: down,
            stepUp: up,
        });
    }
    const selectionStepperRefreshers: Array<() => void> = [];
    function selectionStepper(label: string, selectedValue: () => string, decrease: () => void, increase: () => void): ButtonInfo {
        let selector: ButtonInfo;
        const refreshLabel = () => {
            selector.buttonText = label + ": " + selectedValue();
        };
        const changeSelection = (change: () => void) => {
            change();
            selectionStepperRefreshers.forEach((refresh) => refresh());
            sendNotification(selector.buttonText, false);
        };
        const down = new ButtonInfo({
            buttonText: "Previous " + label,
            method: () => changeSelection(decrease),
            isTogglable: false,
        });
        const up = new ButtonInfo({
            buttonText: "Next " + label,
            method: () => changeSelection(increase),
            isTogglable: false,
        });
        selector = new ButtonInfo({
            buttonText: label + ": " + selectedValue(),
            method: () => changeSelection(increase),
            isTogglable: false,
            stepDown: down,
            stepUp: up,
        });
        selectionStepperRefreshers.push(refreshLabel);
        refreshLabel();
        return selector;
    }
    function styleToggleButton(label: string, enabled: boolean, enable: () => void, disable: () => void, toolTip: string): ButtonInfo {
        const button = new ButtonInfo({
            buttonText: label,
            enableMethod: enable,
            disableMethod: disable,
            isTogglable: true,
            toolTip,
        });
        button.enabled = enabled;
        return button;
    }
    const TEMPLATE_MENU_BUTTONS = [
        {
            category: "player",
            entries: [
                {
                    buttonText: "Minigun: Random Items",
                    enableMethod: () => { minigunRandomItemsEnabled = true; minigunRareItemsEnabled = false; minigunLastFireTime = 0; gunLibMinigunMode = true; try { createGunLib() } catch(_) {}; sendNotification("Minigun Random: ON", false, 2) },
                    disableMethod: () => { minigunRandomItemsEnabled = false; gunLibMinigunMode = false; try { destroyGunLib() } catch(_) {}; sendNotification("Minigun Random: OFF", false, 2) },
                    method: () => {
                      try {
                        if (!minigunRandomItemsEnabled) return
                        var gripping = righthand ? leftGrab : rightGrab
                        var triggerPressed = righthand ? leftTrigger : rightTrigger
                        if (!gripping || !triggerPressed) return
                        if (time - minigunLastFireTime < minigunRate) return
                        minigunLastFireTime = time
                        var handTransform = getTransform(righthand ? leftHandTransform : rightHandTransform)
                        var pos = handTransform.method("get_position").invoke()
                        var fwd = handTransform.method("get_forward").invoke()
                        var spawnPos = Vector3.method("op_Addition").invoke(pos, Vector3.method("op_Multiply").invoke(fwd, 0.3))
                        var count = minigunBurst
                        for (var i = 0; i < count; i++) {
                          var idx = Math.floor(Math.random() * itemIDs.length)
                          var item = itemIDs[idx]
                          var spreadX = (Math.random() - 0.5) * minigunSpread
                          var spreadY = (Math.random() - 0.5) * minigunSpread
                          var finalPos = Vector3.method("op_Addition").invoke(spawnPos, Vector3.method("op_Multiply").invoke(fwd, 0.15 * i))
                          var obj = spawnNetworkPrefab(item, finalPos, identityQuaternion)
                          if (obj && !obj.isNull?.()) {
                            try {
                              var renderer = obj.method("GetComponentInChildren", 0).inflate(Renderer).invoke(true)
                              if (renderer && !renderer.isNull?.()) {
                                var mat = renderer.method("get_material").invoke()
                                var c = minigunRainbowColors[minigunColorIndex % minigunRainbowColors.length]
                                mat.method("set_color").invoke(c)
                              }
                            } catch (_) {}
                          }
                          minigunColorIndex++
                        }
                      } catch(e) { console.error("[MinigunRandom]", e) }
                    },
                    isTogglable: true,
                    toolTip: "Minigun: Random Items (Grip+Trigger to fire)"
                  },
                      {
                    buttonText: "Minigun: Rare Items",
                    enableMethod: () => { minigunRareItemsEnabled = true; minigunRandomItemsEnabled = false; minigunLastFireTime = 0; gunLibMinigunMode = true; try { createGunLib() } catch(_) {}; sendNotification("Minigun Rare: ON", false, 2) },
                    disableMethod: () => { minigunRareItemsEnabled = false; gunLibMinigunMode = false; try { destroyGunLib() } catch(_) {}; sendNotification("Minigun Rare: OFF", false, 2) },
                    method: () => {
                      try {
                        if (!minigunRareItemsEnabled) return
                        var gripping = righthand ? leftGrab : rightGrab
                        var triggerPressed = righthand ? leftTrigger : rightTrigger
                        if (!gripping || !triggerPressed) return
                        if (time - minigunLastFireTime < minigunRate) return
                        minigunLastFireTime = time
                        var handTransform = getTransform(righthand ? leftHandTransform : rightHandTransform)
                        var pos = handTransform.method("get_position").invoke()
                        var fwd = handTransform.method("get_forward").invoke()
                        var spawnPos = Vector3.method("op_Addition").invoke(pos, Vector3.method("op_Multiply").invoke(fwd, 0.3))
                        var rareItems = ["item_rpg","item_grenade_launcher","item_shotgun_viper","item_demon_sword","item_stellarsword_gold","item_stellarsword_blue","item_alienblaster","item_radiation_gun","item_hookshot_sword","item_wyrmpiercer","item_sawblade_launcher"]
                        var count = minigunBurst
                        for (var i = 0; i < count; i++) {
                          var item = rareItems[Math.floor(Math.random() * rareItems.length)]
                          var finalPos = Vector3.method("op_Addition").invoke(spawnPos, Vector3.method("op_Multiply").invoke(fwd, 0.15 * i))
                          var obj = spawnNetworkPrefab(item, finalPos, identityQuaternion)
                          if (obj && !obj.isNull?.()) {
                            try {
                              var renderer = obj.method("GetComponentInChildren", 0).inflate(Renderer).invoke(true)
                              if (renderer && !renderer.isNull?.()) {
                                var mat = renderer.method("get_material").invoke()
                                var c = minigunRainbowColors[minigunColorIndex % minigunRainbowColors.length]
                                mat.method("set_color").invoke(c)
                              }
                            } catch (_) {}
                          }
                          minigunColorIndex++
                        }
                      } catch(e) { console.error("[MinigunRare]", e) }
                    },
                    isTogglable: true,
                    toolTip: "Minigun: Rare Items (Grip+Trigger to fire)"
                  },
                      {
                    buttonText: "Minigun Rate -",
                    method: () => { minigunRate = Math.max(0.02, minigunRate - 0.02); sendNotification("Rate: " + minigunRate.toFixed(3), false, 2) },
                    isTogglable: false,
                    toolTip: "Minigun Rate -"
                  },
                      {
                    buttonText: "Minigun Rate +",
                    method: () => { minigunRate = Math.min(0.5, minigunRate + 0.02); sendNotification("Rate: " + minigunRate.toFixed(3), false, 2) },
                    isTogglable: false,
                    toolTip: "Minigun Rate +"
                  },
                      {
                    buttonText: "Minigun Burst -",
                    method: () => { minigunBurst = Math.max(1, minigunBurst - 1); sendNotification("Burst: " + minigunBurst, false, 2) },
                    isTogglable: false,
                    toolTip: "Minigun Burst -"
                  },
                      {
                    buttonText: "Minigun Burst +",
                    method: () => { minigunBurst = Math.min(20, minigunBurst + 1); sendNotification("Burst: " + minigunBurst, false, 2) },
                    isTogglable: false,
                    toolTip: "Minigun Burst +"
                  },
                      {
                    buttonText: "Minigun Spread -",
                    method: () => { minigunSpread = Math.max(0, minigunSpread - 0.01); sendNotification("Spread: " + minigunSpread.toFixed(3), false, 2) },
                    isTogglable: false,
                    toolTip: "Minigun Spread -"
                  },
                      {
                    buttonText: "Minigun Spread +",
                    method: () => { minigunSpread = Math.min(0.5, minigunSpread + 0.01); sendNotification("Spread: " + minigunSpread.toFixed(3), false, 2) },
                    isTogglable: false,
                    toolTip: "Minigun Spread +"
                  },
                      {
                    buttonText: "Spawn Item",
                    method: () => {
                      try {
                        var pos = getTransform(righthand ? rightHandTransform : leftHandTransform).method("get_position").invoke()
                        var fwd = getTransform(righthand ? rightHandTransform : leftHandTransform).method("get_forward").invoke()
                        var spawnPos = Vector3.method("op_Addition").invoke(pos, Vector3.method("op_Multiply").invoke(fwd, 0.5))
                        var item = itemIDs[selectedItemIndex]
                        spawnNetworkPrefab(item, spawnPos, identityQuaternion)
                        sendNotification("Spawned: " + item, false, 2)
                        selectedItemIndex = (selectedItemIndex + 1) % itemIDs.length
                      } catch(e) { console.error("[SpawnItem]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Spawn Item"
                  },
                      {
                    buttonText: "Spawn Mob",
                    method: () => {
                      try {
                        var pos = getTransform(righthand ? rightHandTransform : leftHandTransform).method("get_position").invoke()
                        var fwd = getTransform(righthand ? rightHandTransform : leftHandTransform).method("get_forward").invoke()
                        var spawnPos = Vector3.method("op_Addition").invoke(pos, Vector3.method("op_Multiply").invoke(fwd, 1.0))
                        if (mobList.length === 0) buildMobList()
                        var mob = mobList[selectedMobIndex]
                        spawnMobAtPos(mob, spawnPos, identityQuaternion)
                        sendNotification("Spawned: " + mob.name, false, 2)
                        selectedMobIndex = (selectedMobIndex + 1) % mobList.length
                      } catch(e) { console.error("[SpawnMob]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Spawn Mob"
                  },
                      {
                    buttonText: "Spawn VFX",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var pos = getTransform(localP).method("get_position").invoke()
                        var vfx = vfxList[selectedVFXIndex]
                        localP.method("RPC_PlayVFX").invoke(vfx.id, pos)
                        sendNotification("VFX: " + vfx.name, false, 2)
                        selectedVFXIndex = (selectedVFXIndex + 1) % vfxList.length
                      } catch(e) { console.error("[SpawnVFX]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Spawn VFX"
                  },
                      {
                    buttonText: "Add Money",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var amounts = [1000, 10000, 100000, 1000000, 10000000]
                        var amt = amounts[moneyTier] || 1000
                        localP.method("RPC_AddPlayerMoney").invoke(amt)
                        sendNotification("+$" + amt, false, 2)
                      } catch(e) { console.error("[AddMoney]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Add Money"
                  },
                      {
                    buttonText: "Money Tier",
                    method: () => { moneyTier = (moneyTier + 1) % 5; sendNotification("Money Tier: " + (moneyTier + 1), false, 2) },
                    isTogglable: false,
                    toolTip: "Money Tier"
                  },
                      {
                    buttonText: "Kick Random Player",
                    method: () => {
                      try {
                        var players = getAllNetPlayersList(false)
                        if (players.length === 0) { sendNotification("No players to kick", false, 2); return }
                        var target = players[Math.floor(Math.random() * players.length)]
                        target.method("RPC_KickPlayer").invoke()
                        sendNotification("Kicked a player", false, 2)
                      } catch(e) { console.error("[KickRandom]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Kick Random Player"
                  },
                      {
                    buttonText: "Spawn Money",
                    method: () => {
                      try {
                        var pos = getTransform(righthand ? rightHandTransform : leftHandTransform).method("get_position").invoke()
                        var fwd = getTransform(righthand ? rightHandTransform : leftHandTransform).method("get_forward").invoke()
                        var spawnPos = Vector3.method("op_Addition").invoke(pos, Vector3.method("op_Multiply").invoke(fwd, 0.5))
                        spawnNetworkPrefab("item_goldcoin", spawnPos, identityQuaternion)
                        sendNotification("Spawned money", false, 2)
                      } catch(e) { console.error("[SpawnMoney]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Spawn Money"
                  },
                      {
                    buttonText: "Tsar Bomba",
                    method: () => {
                      try {
                        var rayData = doGunRaycast()
                        var explosionPos = rayData.point
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        localP.method("RPC_PlayVFX").invoke(33, explosionPos)
                        localP.method("RPC_PlayVFX").invoke(183, explosionPos)
                        localP.method("RPC_PlayVFX").invoke(174, explosionPos)
                        var players = getAllNetPlayersList(false)
                        for (var i = 0; i < players.length; i++) {
                          try {
                            var pPos = getTransform(players[i]).method("get_position").invoke()
                            var dist = Vector3.method("Distance").invoke(explosionPos, pPos)
                            if (dist < 20) {
                              var force = [0, 5000 / (dist + 1), 0]
                              players[i].method("RPC_AddForce").invoke(force)
                              players[i].method("RPC_PlayerHit").invoke(999, explosionPos, AssemblyCSharp.class("AnimalCompany.DamageSourceInfo").method("get_Null").invoke())
                            }
                          } catch(_) {}
                        }
                        sendNotification("TSAR BOMBA!", false, 3)
                      } catch(e) { console.error("[TsarBomba]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Tsar Bomba"
                  },
                      {
                    buttonText: "Spawn Truss",
                    method: () => {
                      try {
                        var pos = getTransform(righthand ? rightHandTransform : leftHandTransform).method("get_position").invoke()
                        var fwd = getTransform(righthand ? rightHandTransform : leftHandTransform).method("get_forward").invoke()
                        var spawnPos = Vector3.method("op_Addition").invoke(pos, Vector3.method("op_Multiply").invoke(fwd, 0.5))
                        spawnNetworkPrefab("item_truss", spawnPos, identityQuaternion)
                        sendNotification("Spawned truss", false, 2)
                      } catch(e) { console.error("[SpawnTruss]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Spawn Truss"
                  },
                      {
                    buttonText: "Item Rain",
                    enableMethod: () => { itemRainEnabled = true; sendNotification("Item Rain ON", false) },
                    disableMethod: () => { itemRainEnabled = false; sendNotification("Item Rain OFF", false) },
                    method: () => {
                      try {
                        if (!itemRainEnabled) return
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var pos = getTransform(localP).method("get_position").invoke()
                        var spawnPos = [pos.field("x").value + (Math.random()-0.5)*5, pos.field("y").value + 5, pos.field("z").value + (Math.random()-0.5)*5]
                        var item = itemIDs[Math.floor(Math.random() * itemIDs.length)]
                        spawnNetworkPrefab(item, spawnPos, identityQuaternion)
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Item Rain"
                  },
                      {
                    buttonText: "High Gravity",
                    enableMethod: () => {
                      highGravityEnabled = true; lowGravityEnabled = false;
                      try {
                        const g = Physics.method("get_gravity").invoke();
                        originalGravityY = g.field("y").value;
                        Physics.method("set_gravity").invoke([g.field("x").value, originalGravityY * 3.0, g.field("z").value]);
                      } catch(_) {}
                      sendNotification("High Gravity ON", false, 2);
                    },
                    disableMethod: () => {
                      highGravityEnabled = false;
                      try {
                        const g = Physics.method("get_gravity").invoke();
                        Physics.method("set_gravity").invoke([g.field("x").value, originalGravityY, g.field("z").value]);
                      } catch(_) {}
                      sendNotification("High Gravity OFF", false, 2);
                    },
                    method: () => {},
                    isTogglable: true,
                    toolTip: "Makes gravity 3x stronger.",
                  },
                      {
                    buttonText: "Low Gravity",
                    enableMethod: () => {
                      lowGravityEnabled = true; highGravityEnabled = false;
                      try {
                        const g = Physics.method("get_gravity").invoke();
                        originalGravityY = g.field("y").value;
                        Physics.method("set_gravity").invoke([g.field("x").value, originalGravityY * 0.25, g.field("z").value]);
                      } catch(_) {}
                      sendNotification("Low Gravity ON", false, 2);
                    },
                    disableMethod: () => {
                      lowGravityEnabled = false;
                      try {
                        const g = Physics.method("get_gravity").invoke();
                        Physics.method("set_gravity").invoke([g.field("x").value, originalGravityY, g.field("z").value]);
                      } catch(_) {}
                      sendNotification("Low Gravity OFF", false, 2);
                    },
                    method: () => {},
                    isTogglable: true,
                    toolTip: "Makes gravity 0.25x (moon gravity).",
                  }
            ]
        }
        ,
        {
            category: "others",
            entries: [
                {
                    buttonText: "God Mode",
                    enableMethod: () => { godModeEnabled = true; infHealthEnabled = true; sendNotification("God Mode ON", false) },
                    disableMethod: () => { godModeEnabled = false; infHealthEnabled = false; sendNotification("God Mode OFF", false) },
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        try { localP.field("healthPoints").value = 99999 } catch(_) {}
                        try { localP.method("set_isInvincible").invoke(true) } catch(_) {}
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "God Mode"
                  },
                      {
                    buttonText: "Infinite Health",
                    enableMethod: () => { infHealthEnabled = true; sendNotification("Infinite Health ON", false) },
                    disableMethod: () => { infHealthEnabled = false; sendNotification("Infinite Health OFF", false) },
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        try { localP.field("healthPoints").value = 99999 } catch(_) {}
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Infinite Health"
                  },
                      {
                    buttonText: "Infinite Stamina",
                    enableMethod: () => { sendNotification("Infinite Stamina ON", false) },
                    disableMethod: () => { sendNotification("Infinite Stamina OFF", false) },
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        try { localP.field("staminaPoints").value = 100 } catch(_) {}
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Infinite Stamina"
                  },
                      {
                    buttonText: "No Hunger",
                    enableMethod: () => { sendNotification("No Hunger ON", false) },
                    disableMethod: () => { sendNotification("No Hunger OFF", false) },
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        try { localP.field("hungerPoints").value = 100 } catch(_) {}
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "No Hunger"
                  },
                      {
                    buttonText: "No Thirst",
                    enableMethod: () => { sendNotification("No Thirst ON", false) },
                    disableMethod: () => { sendNotification("No Thirst OFF", false) },
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        try { localP.field("thirstPoints").value = 100 } catch(_) {}
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "No Thirst"
                  },
                      {
                    buttonText: "Infinite Oxygen",
                    enableMethod: () => { sendNotification("Infinite Oxygen ON", false) },
                    disableMethod: () => { sendNotification("Infinite Oxygen OFF", false) },
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        try { localP.field("oxygenPoints").value = 100 } catch(_) {}
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Infinite Oxygen"
                  },
                      {
                    buttonText: "No Radiation",
                    enableMethod: () => { sendNotification("No Radiation ON", false) },
                    disableMethod: () => { sendNotification("No Radiation OFF", false) },
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        try { localP.field("radiationPoints").value = 0 } catch(_) {}
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "No Radiation"
                  },
                      {
                    buttonText: "Invincible",
                    enableMethod: () => { sendNotification("Invincible ON", false) },
                    disableMethod: () => { sendNotification("Invincible OFF", false) },
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        try { localP.method("set_isInvincible").invoke(true) } catch(_) {}
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Invincible"
                  },
                      {
                    buttonText: "Invisible",
                    enableMethod: () => { invisibleEnabled = true; sendNotification("Invisible ON", false) },
                    disableMethod: () => { invisibleEnabled = false; sendNotification("Invisible OFF", false) },
                    method: () => {
                      try {
                        if (!invisibleEnabled) return
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        try { localP.method("set_isHide").invoke(true) } catch(_) {}
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Invisible"
                  },
                      {
                    buttonText: "Fly Hack",
                    enableMethod: () => { flyEnabled = true; sendNotification("Fly Hack ON", false) },
                    disableMethod: () => { flyEnabled = false; sendNotification("Fly Hack OFF", false) },
                    method: () => {
                      try {
                        if (!flyEnabled) return
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var go = localP.method("get_gameObject").invoke()
                        if (!go || go.isNull?.()) return
                        var rb = go.method("GetComponent", 0).inflate(Rigidbody).invoke()
                        if (!rb || rb.isNull?.()) return
                        rb.method("set_useGravity").invoke(false)
                        var handTransform = getTransform(righthand ? rightHandTransform : leftHandTransform)
                        var fwd = handTransform.method("get_forward").invoke()
                        var lhY = getTransform(leftHandTransform).method("get_position").invoke().field("y").value
                        var rhY = getTransform(rightHandTransform).method("get_position").invoke().field("y").value
                        var speed = 12.0
                        var vx = fwd.field("x").value * speed
                        var vz = fwd.field("z").value * speed
                        var vy = 0.1
                        if ((rhY - lhY) > 0.4) { vy = speed + 3; vx = fwd.field("x").value * speed; vz = fwd.field("z").value * speed }
                        else if ((lhY - rhY) > 0.4) { vy = -5 }
                        rb.method("set_linearVelocity").invoke([vx, vy, vz])
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Fly Hack (R hand up = fly, L hand up = descend)"
                  },
                      {
                    buttonText: "Hand Fly",
                    enableMethod: () => { handFlyEnabled = true; sendNotification("Hand Fly ON", false) },
                    disableMethod: () => { handFlyEnabled = false; sendNotification("Hand Fly OFF", false) },
                    method: () => {
                      try {
                        if (!handFlyEnabled) return
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var go = localP.method("get_gameObject").invoke()
                        if (!go || go.isNull?.()) return
                        var handGo = getTransform(righthand ? rightHandTransform : leftHandTransform).method("get_gameObject").invoke()
                        if (!handGo || handGo.isNull?.()) return
                        var rb = handGo.method("GetComponent", 0).inflate(Rigidbody).invoke()
                        if (rb && !rb.isNull?.()) {
                          rb.method("set_linearVelocity").invoke(zeroVector)
                          rb.method("set_useGravity").invoke(false)
                        }
                        if (noclipEnabled) {
                          var fwd = getTransform(righthand ? rightHandTransform : leftHandTransform).method("get_forward").invoke()
                          var handT = getTransform(righthand ? rightHandTransform : leftHandTransform)
                          var curPos = handT.method("get_position").invoke()
                          var speed = 0.5
                          var newPos = Vector3.method("op_Addition").invoke(curPos, Vector3.method("op_Multiply").invoke(fwd, speed))
                          handT.method("set_position").invoke(newPos)
                          var localTf = getTransform(localP)
                          localTf.method("set_position").invoke(newPos)
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Hand Fly (combine with Noclip)"
                  },
                      {
                    buttonText: "Speed Hack",
                    enableMethod: () => { speedHackEnabled = true; speedMultiplier = 2.0; sendNotification("Speed Hack ON", false) },
                    disableMethod: () => { speedHackEnabled = false; speedMultiplier = 1.0; sendNotification("Speed Hack OFF", false) },
                    method: () => {
                      try {
                        if (!speedHackEnabled) return
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        try { localP.field("runSpeedMultiplier").value = speedMultiplier } catch(_) {}
                        try { localP.field("walkSpeedMultiplier").value = speedMultiplier } catch(_) {}
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Speed Hack"
                  },
                      {
                    buttonText: "Speed -",
                    method: () => { speedMultiplier = Math.max(1.0, speedMultiplier - 0.5); sendNotification("Speed: " + speedMultiplier.toFixed(1) + "x", false, 2) },
                    isTogglable: false,
                    toolTip: "Speed -"
                  },
                      {
                    buttonText: "Speed +",
                    method: () => { speedMultiplier = Math.min(10.0, speedMultiplier + 0.5); sendNotification("Speed: " + speedMultiplier.toFixed(1) + "x", false, 2) },
                    isTogglable: false,
                    toolTip: "Speed +"
                  },
                      {
                    buttonText: "Noclip",
                    enableMethod: () => { noclipEnabled = true; sendNotification("Noclip ON", false) },
                    disableMethod: () => {
                      noclipEnabled = false
                      try {
                        var localP = getLocalPlayer()
                        if (localP && !localP.isNull?.()) {
                          var go = localP.method("get_gameObject").invoke()
                          if (go && !go.isNull?.()) {
                            var cols = go.method("GetComponentsInChildren", 0).inflate(Collider).invoke(true)
                            if (cols) { for (var i = 0; i < cols.length; i++) { try { cols.get(i).method("set_enabled").invoke(true) } catch(_) {} } }
                          }
                        }
                      } catch(_) {}
                      sendNotification("Noclip OFF", false)
                    },
                    method: () => {
                      try {
                        if (!noclipEnabled) return
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var go = localP.method("get_gameObject").invoke()
                        if (!go || go.isNull?.()) return
                        var cols = go.method("GetComponentsInChildren", 0).inflate(Collider).invoke(true)
                        if (cols) {
                          for (var i = 0; i < cols.length; i++) {
                            try { cols.get(i).method("set_enabled").invoke(false) } catch(_) {}
                          }
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Noclip"
                  },
                      {
                    buttonText: "Long Arms",
                    method: () => { armScaleIndex = 1; longArmsEnabled = true; sendNotification("Long Arms (1.5x)", false, 2) },
                    isTogglable: false,
                    toolTip: "Long Arms"
                  },
                      {
                    buttonText: "Longer Arms",
                    method: () => { armScaleIndex = 2; longArmsEnabled = true; sendNotification("Longer Arms (2x)", false, 2) },
                    isTogglable: false,
                    toolTip: "Longer Arms"
                  },
                      {
                    buttonText: "Longerer Arms",
                    method: () => { armScaleIndex = 3; longArmsEnabled = true; sendNotification("Longerer Arms (3x)", false, 2) },
                    isTogglable: false,
                    toolTip: "Longerer Arms"
                  },
                      {
                    buttonText: "Longererer Arms",
                    method: () => { armScaleIndex = 4; longArmsEnabled = true; sendNotification("Longererer Arms (5x)", false, 2) },
                    isTogglable: false,
                    toolTip: "Longererer Arms"
                  },
                      {
                    buttonText: "Platforms",
                    enableMethod: () => { platformsEnabled = true; platformObjects = []; sendNotification("Platforms ON", false) },
                    disableMethod: () => { platformsEnabled = false; for (var i = 0; i < platformObjects.length; i++) { try { Destroy(platformObjects[i]) } catch(_) {} } platformObjects = []; sendNotification("Platforms OFF", false) },
                    method: () => {
                      try {
                        if (!platformsEnabled) return
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var pos = getTransform(localP).method("get_position").invoke()
                        var platPos = [pos.field("x").value, pos.field("y").value - 0.5, pos.field("z").value]
                        var plat = spawnNetworkPrefab("item_truss", platPos, identityQuaternion)
                        if (plat && !plat.isNull?.()) platformObjects.push(plat)
                        if (platformObjects.length > 20) {
                          try { Destroy(platformObjects.shift()) } catch(_) {}
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Platforms (spawns truss under feet)"
                  },
                      {
                    buttonText: "Rocket Fists",
                    enableMethod: () => { rocketFistsEnabled = true; sendNotification("Rocket Fists ON", false) },
                    disableMethod: () => { rocketFistsEnabled = false; sendNotification("Rocket Fists OFF", false) },
                    method: () => {
                      try {
                        if (!rocketFistsEnabled) return
                        if (time - minigunLastFireTime < 0.15) return
                        minigunLastFireTime = time
                        var pos = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_position").invoke()
                        var fwd = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_forward").invoke()
                        var spawnPos = Vector3.method("op_Addition").invoke(pos, Vector3.method("op_Multiply").invoke(fwd, 0.3))
                        var rot = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_rotation").invoke()
                        spawnNetworkPrefab("item_rpg_ammo", spawnPos, rot)
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Rocket Fists (spawns rockets from hands)"
                  },
                      {
                    buttonText: "Save Position",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var pos = getTransform(localP).method("get_position").invoke()
                        savedPosition = readVec3Components(pos)
                        sendNotification("Position saved!", false, 2)
                      } catch(e) { console.error("[SavePos]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Save Position"
                  },
                      {
                    buttonText: "Teleport Saved",
                    method: () => {
                      try {
                        if (!savedPosition) { sendNotification("No position saved", false, 2); return }
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        localP.method("RPC_Teleport").invoke(savedPosition)
                        sendNotification("Teleported to saved position", false, 2)
                      } catch(e) { console.error("[TeleportSaved]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Teleport Saved"
                  },
                      {
                    buttonText: "Ghost Mode",
                    enableMethod: () => { ghostModeEnabled = true; sendNotification("Ghost Mode ON", false) },
                    disableMethod: () => {
                      ghostModeEnabled = false
                      try {
                        var localP = getLocalPlayer()
                        if (localP && !localP.isNull?.()) {
                          var go = localP.method("get_gameObject").invoke()
                          if (go && !go.isNull?.()) {
                            var renderers = go.method("GetComponentsInChildren", 0).inflate(Renderer).invoke(true)
                            if (renderers) { for (var i = 0; i < renderers.length; i++) { try { renderers.get(i).method("set_enabled").invoke(true) } catch(_) {} } }
                          }
                        }
                      } catch(_) {}
                      sendNotification("Ghost Mode OFF", false)
                    },
                    method: () => {
                      try {
                        if (!ghostModeEnabled) return
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        try { localP.method("set_isHide").invoke(true) } catch(_) {}
                        var go = localP.method("get_gameObject").invoke()
                        if (go && !go.isNull?.()) {
                          var renderers = go.method("GetComponentsInChildren", 0).inflate(Renderer).invoke(true)
                          if (renderers) {
                            for (var i = 0; i < renderers.length; i++) {
                              try { renderers.get(i).method("set_enabled").invoke(false) } catch(_) {}
                            }
                          }
                        }
                        var cols = go.method("GetComponentsInChildren", 0).inflate(Collider).invoke(true)
                        if (cols) {
                          for (var i = 0; i < cols.length; i++) {
                            try { cols.get(i).method("set_enabled").invoke(false) } catch(_) {}
                          }
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Ghost Mode (invisible + noclip)"
                  },
                      {
                    buttonText: "Launch Me Up",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        localP.method("RPC_AddForce").invoke([0, 10000, 0])
                        sendNotification("Launched!", false, 2)
                      } catch(e) { console.error("[LaunchMe]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Launch Me Up"
                  },
                      {
                    buttonText: "Set Wanted",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        try { localP.method("set_isWanted").invoke(true) } catch(_) {}
                        sendNotification("Set wanted!", false, 2)
                      } catch(e) { console.error("[SetWanted]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Set Wanted"
                  },
                      {
                    buttonText: "Kill Me",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        try { localP.method("RPC_DoPlayerDie").invoke(true) } catch(_) {}
                        sendNotification("Killed self", false, 2)
                      } catch(e) { console.error("[KillMe]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Kill Me"
                  },
                      {
                    buttonText: "Revive Me",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        try { localP.method("RPC_DoPlayerDie").invoke(false) } catch(_) {}
                        sendNotification("Revived!", false, 2)
                      } catch(e) { console.error("[ReviveMe]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Revive Me"
                  }
            ]
        }
        ,
        {
            category: "users",
            entries: [
                {
                    buttonText: "RPC Kill All Loop",
                    enableMethod: () => { rpcKillAllLoopEnabled = true; sendNotification("RPC Kill All Loop ON", false) },
                    disableMethod: () => { rpcKillAllLoopEnabled = false; sendNotification("RPC Kill All Loop OFF", false) },
                    method: () => { rpcLoopFrameCounter++; if (!rpcKillAllLoopEnabled || rpcLoopFrameCounter % 30 !== 0) return; try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_DoPlayerDie").invoke(true) } catch(_) {} } } catch(e) {} },
                    isTogglable: true,
                    toolTip: "RPC Kill All Loop"
                  },
                      {
                    buttonText: "RPC Stun All Loop",
                    enableMethod: () => { rpcStunAllLoopEnabled = true; sendNotification("RPC Stun All Loop ON", false) },
                    disableMethod: () => { rpcStunAllLoopEnabled = false; sendNotification("RPC Stun All Loop OFF", false) },
                    method: () => { rpcLoopFrameCounter++; if (!rpcStunAllLoopEnabled || rpcLoopFrameCounter % 30 !== 0) return; try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { var pos = getTransform(p[i]).method("get_position").invoke(); p[i].method("RPC_PlayerStun").invoke(pos, 5, 5, 1) } catch(_) {} } } catch(e) {} },
                    isTogglable: true,
                    toolTip: "RPC Stun All Loop"
                  },
                      {
                    buttonText: "RPC Bounce All Loop",
                    enableMethod: () => { rpcBounceAllLoopEnabled = true; sendNotification("RPC Bounce All Loop ON", false) },
                    disableMethod: () => { rpcBounceAllLoopEnabled = false; sendNotification("RPC Bounce All Loop OFF", false) },
                    method: () => { rpcLoopFrameCounter++; if (!rpcBounceAllLoopEnabled || rpcLoopFrameCounter % 20 !== 0) return; try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_AddForce").invoke([0, 3000, 0]) } catch(_) {} } } catch(e) {} },
                    isTogglable: true,
                    toolTip: "RPC Bounce All Loop"
                  },
                      {
                    buttonText: "RPC Hit All Loop",
                    enableMethod: () => { rpcHitAllLoopEnabled = true; sendNotification("RPC Hit All Loop ON", false) },
                    disableMethod: () => { rpcHitAllLoopEnabled = false; sendNotification("RPC Hit All Loop OFF", false) },
                    method: () => { rpcLoopFrameCounter++; if (!rpcHitAllLoopEnabled || rpcLoopFrameCounter % 30 !== 0) return; try { var dmg = AssemblyCSharp.class("AnimalCompany.DamageSourceInfo").method("get_Null").invoke(); var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { var pos = getTransform(p[i]).method("get_position").invoke(); p[i].method("RPC_PlayerHit").invoke(50, pos, dmg) } catch(_) {} } } catch(e) {} },
                    isTogglable: true,
                    toolTip: "RPC Hit All Loop"
                  },
                      {
                    buttonText: "RPC Ragdoll All Loop",
                    enableMethod: () => { rpcRagdollAllLoopEnabled = true; sendNotification("RPC Ragdoll All Loop ON", false) },
                    disableMethod: () => { rpcRagdollAllLoopEnabled = false; sendNotification("RPC Ragdoll All Loop OFF", false) },
                    method: () => { rpcLoopFrameCounter++; if (!rpcRagdollAllLoopEnabled || rpcLoopFrameCounter % 40 !== 0) return; try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_ForceRagdoll").invoke(true) } catch(_) {} } } catch(e) {} },
                    isTogglable: true,
                    toolTip: "RPC Ragdoll All Loop"
                  },
                      {
                    buttonText: "RPC Color Rainbow Loop",
                    enableMethod: () => { rpcColorRainbowLoopEnabled = true; sendNotification("RPC Color Rainbow Loop ON", false) },
                    disableMethod: () => { rpcColorRainbowLoopEnabled = false; sendNotification("RPC Color Rainbow Loop OFF", false) },
                    method: () => { rpcLoopFrameCounter++; if (!rpcColorRainbowLoopEnabled || rpcLoopFrameCounter % 10 !== 0) return; try { var h = ((rpcLoopFrameCounter * 7) % 360) / 360; var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_SetColor").invoke(h, 1, 1, 1) } catch(_) {} } } catch(e) {} },
                    isTogglable: true,
                    toolTip: "RPC Color Rainbow Loop"
                  },
                      {
                    buttonText: "RPC Chaos All Loop",
                    enableMethod: () => { rpcChaosAllLoopEnabled = true; sendNotification("RPC Chaos All Loop ON", false) },
                    disableMethod: () => { rpcChaosAllLoopEnabled = false; sendNotification("RPC Chaos All Loop OFF", false) },
                    method: () => { rpcLoopFrameCounter++; if (!rpcChaosAllLoopEnabled || rpcLoopFrameCounter % 20 !== 0) return; try { rpcChaosLoop() } catch(e) {} },
                    isTogglable: true,
                    toolTip: "RPC Chaos All Loop"
                  },
                      {
                    buttonText: "RPC Kill Me Loop",
                    enableMethod: () => { rpcKillMeLoopEnabled = true; sendNotification("RPC Kill Me Loop ON", false) },
                    disableMethod: () => { rpcKillMeLoopEnabled = false; sendNotification("RPC Kill Me Loop OFF", false) },
                    method: () => { rpcLoopFrameCounter++; if (!rpcKillMeLoopEnabled || rpcLoopFrameCounter % 30 !== 0) return; try { var lp = getLocalPlayer(); if (!lp || lp.isNull?.()) return; lp.method("RPC_DoPlayerDie").invoke(true) } catch(e) {} },
                    isTogglable: true,
                    toolTip: "RPC Kill Me Loop"
                  },
                      {
                    buttonText: "RPC Fake Death Loop",
                    enableMethod: () => { rpcFakeDeathLoopEnabled = true; sendNotification("RPC Fake Death Loop ON", false) },
                    disableMethod: () => { rpcFakeDeathLoopEnabled = false; sendNotification("RPC Fake Death Loop OFF", false) },
                    method: () => { rpcLoopFrameCounter++; if (!rpcFakeDeathLoopEnabled || rpcLoopFrameCounter % 60 !== 0) return; try { var lp = getLocalPlayer(); if (!lp || lp.isNull?.()) return; lp.method("RPC_DoPlayerDie").invoke(true); setTimeout(function() { try { lp.method("RPC_Revive").invoke() } catch(_) {} }, 500) } catch(e) {} },
                    isTogglable: true,
                    toolTip: "RPC Fake Death Loop"
                  },
                      {
                    buttonText: "RPC Wanted All Loop",
                    enableMethod: () => { rpcWantedAllLoopEnabled = true; sendNotification("RPC Wanted All Loop ON", false) },
                    disableMethod: () => { rpcWantedAllLoopEnabled = false; sendNotification("RPC Wanted All Loop OFF", false) },
                    method: () => { rpcLoopFrameCounter++; if (!rpcWantedAllLoopEnabled || rpcLoopFrameCounter % 60 !== 0) return; try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("set_isWanted").invoke(true) } catch(_) {} } } catch(e) {} },
                    isTogglable: true,
                    toolTip: "RPC Wanted All Loop"
                  },
                      {
                    buttonText: "RPC All Kill Revive Loop",
                    enableMethod: () => { rpcAllKillReviveLoopEnabled = true; sendNotification("RPC All Kill Revive Loop ON", false) },
                    disableMethod: () => { rpcAllKillReviveLoopEnabled = false; sendNotification("RPC All Kill Revive Loop OFF", false) },
                    method: () => { rpcLoopFrameCounter++; if (!rpcAllKillReviveLoopEnabled || rpcLoopFrameCounter % 40 !== 0) return; try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_DoPlayerDie").invoke(true) } catch(_) {} } setTimeout(function() { try { var p2 = getAllNetPlayersList(false); for (var i = 0; i < p2.length; i++) { try { p2[i].method("RPC_Revive").invoke() } catch(_) {} } } catch(_) {} }, 500) } catch(e) {} },
                    isTogglable: true,
                    toolTip: "RPC All Kill Revive Loop"
                  },
                      {
                    buttonText: "RPC VFX Spam Loop",
                    enableMethod: () => { rpcVFXSpamLoopEnabled = true; sendNotification("RPC VFX Spam Loop ON", false) },
                    disableMethod: () => { rpcVFXSpamLoopEnabled = false; sendNotification("RPC VFX Spam Loop OFF", false) },
                    method: () => { rpcLoopFrameCounter++; if (!rpcVFXSpamLoopEnabled || rpcLoopFrameCounter % 5 !== 0) return; try { var lp = getLocalPlayer(); if (!lp || lp.isNull?.()) return; var pos = getTransform(lp).method("get_position").invoke(); var v = [174, 180, 33, 42, 183, 44]; lp.method("RPC_PlayVFX").invoke(v[rpcLoopFrameCounter % v.length], pos) } catch(e) {} },
                    isTogglable: true,
                    toolTip: "RPC VFX Spam Loop"
                  },
                      {
                    buttonText: "RPC VFX All Spam Loop",
                    enableMethod: () => { rpcVFXAllSpamLoopEnabled = true; sendNotification("RPC VFX All Spam Loop ON", false) },
                    disableMethod: () => { rpcVFXAllSpamLoopEnabled = false; sendNotification("RPC VFX All Spam Loop OFF", false) },
                    method: () => { rpcLoopFrameCounter++; if (!rpcVFXAllSpamLoopEnabled || rpcLoopFrameCounter % 5 !== 0) return; try { var p = getAllNetPlayersList(false); var v = [174, 180, 33, 42, 183, 44]; for (var i = 0; i < p.length; i++) { try { var pos = getTransform(p[i]).method("get_position").invoke(); p[i].method("RPC_PlayVFX").invoke(v[rpcLoopFrameCounter % v.length], pos) } catch(_) {} } } catch(e) {} },
                    isTogglable: true,
                    toolTip: "RPC VFX All Spam Loop"
                  },
                      {
                    buttonText: "RPC Inf Money All",
                    enableMethod: () => { rpcInfMoneyAllEnabled = true; sendNotification("RPC Inf Money All ON", false) },
                    disableMethod: () => { rpcInfMoneyAllEnabled = false; sendNotification("RPC Inf Money All OFF", false) },
                    method: () => { rpcLoopFrameCounter++; if (!rpcInfMoneyAllEnabled || rpcLoopFrameCounter % 60 !== 0) return; try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_AddPlayerMoney").invoke(10000000) } catch(_) {} } } catch(e) {} },
                    isTogglable: true,
                    toolTip: "RPC Inf Money All"
                  },
                      {
                    buttonText: "RPC Gun Kill",
                    enableMethod: () => { rpcGunKillEnabled = true; sendNotification("RPC Gun Kill ON", false) },
                    disableMethod: () => { rpcGunKillEnabled = false; sendNotification("RPC Gun Kill OFF", false) },
                    method: () => { if (!rpcGunKillEnabled) return; try { var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { target.method("RPC_DoPlayerDie").invoke(true) } } catch(e) {} },
                    isTogglable: true,
                    toolTip: "RPC Gun Kill"
                  },
                      {
                    buttonText: "RPC Gun Revive",
                    enableMethod: () => { rpcGunReviveEnabled = true; sendNotification("RPC Gun Revive ON", false) },
                    disableMethod: () => { rpcGunReviveEnabled = false; sendNotification("RPC Gun Revive OFF", false) },
                    method: () => { if (!rpcGunReviveEnabled) return; try { var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { target.method("RPC_Revive").invoke() } } catch(e) {} },
                    isTogglable: true,
                    toolTip: "RPC Gun Revive"
                  },
                      {
                    buttonText: "RPC Gun Launch",
                    enableMethod: () => { rpcGunLaunchEnabled = true; sendNotification("RPC Gun Launch ON", false) },
                    disableMethod: () => { rpcGunLaunchEnabled = false; sendNotification("RPC Gun Launch OFF", false) },
                    method: () => { if (!rpcGunLaunchEnabled) return; try { var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { target.method("RPC_AddForce").invoke([0, 8000, 0]) } } catch(e) {} },
                    isTogglable: true,
                    toolTip: "RPC Gun Launch"
                  },
                      {
                    buttonText: "RPC Gun Stun",
                    enableMethod: () => { rpcGunStunEnabled = true; sendNotification("RPC Gun Stun ON", false) },
                    disableMethod: () => { rpcGunStunEnabled = false; sendNotification("RPC Gun Stun OFF", false) },
                    method: () => { if (!rpcGunStunEnabled) return; try { var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { var pos = getTransform(target).method("get_position").invoke(); target.method("RPC_PlayerStun").invoke(pos, 5, 5, 1) } } catch(e) {} },
                    isTogglable: true,
                    toolTip: "RPC Gun Stun"
                  },
                      {
                    buttonText: "RPC Gun Freeze",
                    enableMethod: () => { rpcGunFreezeEnabled = true; sendNotification("RPC Gun Freeze ON", false) },
                    disableMethod: () => { rpcGunFreezeEnabled = false; sendNotification("RPC Gun Freeze OFF", false) },
                    method: () => { if (!rpcGunFreezeEnabled) return; try { var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { var go = target.method("get_gameObject").invoke(); if (go && !go.isNull?.()) { var rb = go.method("GetComponent", 0).inflate(AssemblyCSharp.class("UnityEngine.Rigidbody")).invoke(0); if (rb && !rb.isNull?.()) { rb.method("set_isKinematic").invoke(true); rb.method("set_linearVelocity").invoke([0, 0, 0]); setTimeout(function() { try { rb.method("set_isKinematic").invoke(false) } catch(_) {} }, 3000) } } } } catch(e) {} },
                    isTogglable: true,
                    toolTip: "RPC Gun Freeze"
                  },
                      {
                    buttonText: "RPC Gun Color",
                    enableMethod: () => { rpcGunColorEnabled = true; sendNotification("RPC Gun Color ON", false) },
                    disableMethod: () => { rpcGunColorEnabled = false; sendNotification("RPC Gun Color OFF", false) },
                    method: () => { if (!rpcGunColorEnabled) return; try { var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { target.method("RPC_SetColor").invoke(Math.random(), Math.random(), Math.random(), 1) } } catch(e) {} },
                    isTogglable: true,
                    toolTip: "RPC Gun Color"
                  },
                      {
                    buttonText: "RPC Gun Scale Big",
                    enableMethod: () => { rpcGunScaleBigEnabled = true; sendNotification("RPC Gun Scale Big ON", false) },
                    disableMethod: () => { rpcGunScaleBigEnabled = false; sendNotification("RPC Gun Scale Big OFF", false) },
                    method: () => { if (!rpcGunScaleBigEnabled) return; try { var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { getTransform(target.method("get_gameObject").invoke()).method("set_localScale").invoke([2, 2, 2]) } } catch(e) {} },
                    isTogglable: true,
                    toolTip: "RPC Gun Scale Big"
                  },
                      {
                    buttonText: "RPC Gun Scale Tiny",
                    enableMethod: () => { rpcGunScaleTinyEnabled = true; sendNotification("RPC Gun Scale Tiny ON", false) },
                    disableMethod: () => { rpcGunScaleTinyEnabled = false; sendNotification("RPC Gun Scale Tiny OFF", false) },
                    method: () => { if (!rpcGunScaleTinyEnabled) return; try { var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { getTransform(target.method("get_gameObject").invoke()).method("set_localScale").invoke([0.1, 0.1, 0.1]) } } catch(e) {} },
                    isTogglable: true,
                    toolTip: "RPC Gun Scale Tiny"
                  },
                      {
                    buttonText: "RPC Gun Buff Speed",
                    enableMethod: () => { rpcGunBuffSpeedEnabled = true; sendNotification("RPC Gun Buff Speed ON", false) },
                    disableMethod: () => { rpcGunBuffSpeedEnabled = false; sendNotification("RPC Gun Buff Speed OFF", false) },
                    method: () => { if (!rpcGunBuffSpeedEnabled) return; try { var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { target.method("RPC_ApplyBuff").invoke(0, 30) } } catch(e) {} },
                    isTogglable: true,
                    toolTip: "RPC Gun Buff Speed"
                  },
                      {
                    buttonText: "RPC Gun AntiGrav",
                    enableMethod: () => { rpcGunAntiGravEnabled = true; sendNotification("RPC Gun AntiGrav ON", false) },
                    disableMethod: () => { rpcGunAntiGravEnabled = false; sendNotification("RPC Gun AntiGrav OFF", false) },
                    method: () => { if (!rpcGunAntiGravEnabled) return; try { var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { target.method("RPC_AddForce").invoke([0, 2000, 0]) } } catch(e) {} },
                    isTogglable: true,
                    toolTip: "RPC Gun AntiGrav"
                  },
                      {
                    buttonText: "RPC Gun Void",
                    enableMethod: () => { rpcGunVoidEnabled = true; sendNotification("RPC Gun Void ON", false) },
                    disableMethod: () => { rpcGunVoidEnabled = false; sendNotification("RPC Gun Void OFF", false) },
                    method: () => { if (!rpcGunVoidEnabled) return; try { var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { target.method("RPC_Teleport").invoke([0, -1000, 0]) } } catch(e) {} },
                    isTogglable: true,
                    toolTip: "RPC Gun Void"
                  },
                      {
                    buttonText: "RPC Gun Hit 50",
                    enableMethod: () => { rpcGunHit50Enabled = true; sendNotification("RPC Gun Hit 50 ON", false) },
                    disableMethod: () => { rpcGunHit50Enabled = false; sendNotification("RPC Gun Hit 50 OFF", false) },
                    method: () => { if (!rpcGunHit50Enabled) return; try { var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { target.method("RPC_PlayerHit").invoke(50, getGunModAimPoint(), AssemblyCSharp.class("AnimalCompany.DamageSourceInfo").method("get_Null").invoke()) } } catch(e) {} },
                    isTogglable: true,
                    toolTip: "RPC Gun Hit 50"
                  }
            ]
        }
        ,
        {
            category: "items",
            entries: [
                {
                    buttonText: "Spawn All OG Items",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var pos = getTransform(localP).method("get_position").invoke()
                        var ogItems = ["item_pickaxe","item_axe","item_hatchet","item_crowbar","item_shovel","item_baseball_bat","item_crossbow","item_revolver","item_shotgun","item_rpg","item_grenade","item_flashlight","item_hookshot","item_bamboo_fishing_rod","item_broom","item_frying_pan","item_hammer_candy_cane","item_great_sword","item_demon_sword","item_balloon","item_boomerang","item_glowstick"]
                        for (var i = 0; i < ogItems.length; i++) {
                          var angle = (Math.PI * 2 / ogItems.length) * i
                          var r = 3
                          var spawnPos = [pos.field("x").value + Math.cos(angle)*r, pos.field("y").value + 1, pos.field("z").value + Math.sin(angle)*r]
                          spawnNetworkPrefab(ogItems[i], spawnPos, identityQuaternion)
                        }
                        sendNotification("Spawned " + ogItems.length + " OG items", false, 3)
                      } catch(e) { console.error("[SpawnOG]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Spawn All OG Items"
                  },
                      {
                    buttonText: "Spawn All Golden Items",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var pos = getTransform(localP).method("get_position").invoke()
                        var goldItems = ["item_goldbar","item_goldcoin","item_revolver_gold","item_ukulele_gold","item_stellarsword_gold"]
                        for (var i = 0; i < goldItems.length; i++) {
                          var angle = (Math.PI * 2 / goldItems.length) * i
                          var spawnPos = [pos.field("x").value + Math.cos(angle)*3, pos.field("y").value + 1, pos.field("z").value + Math.sin(angle)*3]
                          spawnNetworkPrefab(goldItems[i], spawnPos, identityQuaternion)
                        }
                        sendNotification("Spawned " + goldItems.length + " golden items", false, 3)
                      } catch(e) { console.error("[SpawnGold]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Spawn All Golden Items"
                  },
                      {
                    buttonText: "Spawn All Steampunk Items",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var pos = getTransform(localP).method("get_position").invoke()
                        var steamItems = ["item_steampunk_clip","item_steampunk_coils_big","item_steampunk_coils_small","item_steampunk_gear_big","item_steampunk_gear_open_big","item_steampunk_gear_open_small","item_steampunk_gear_small","item_steampunk_gear_spikes_big","item_steampunk_gear_spikes_small","item_steampunk_gear_wheels","item_steampunk_lamp","item_steampunk_lightbulb","item_steampunk_scaffolding","item_steampunk_smokestack","item_steampunk_wings","item_steampunk_redgreen_hand"]
                        for (var i = 0; i < steamItems.length; i++) {
                          var angle = (Math.PI * 2 / steamItems.length) * i
                          var spawnPos = [pos.field("x").value + Math.cos(angle)*4, pos.field("y").value + 1, pos.field("z").value + Math.sin(angle)*4]
                          spawnNetworkPrefab(steamItems[i], spawnPos, identityQuaternion)
                        }
                        sendNotification("Spawned " + steamItems.length + " steampunk items", false, 3)
                      } catch(e) { console.error("[SpawnSteam]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Spawn All Steampunk Items"
                  },
                      {
                    buttonText: "Spawn All UFOs",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var pos = getTransform(localP).method("get_position").invoke()
                        var ufoItems = ["item_hoverpad","item_jetpack","item_robo_monke"]
                        for (var i = 0; i < ufoItems.length; i++) {
                          var spawnPos = [pos.field("x").value + (Math.random()-0.5)*6, pos.field("y").value + 3, pos.field("z").value + (Math.random()-0.5)*6]
                          spawnNetworkPrefab(ufoItems[i], spawnPos, identityQuaternion)
                        }
                        sendNotification("Spawned " + ufoItems.length + " UFO items", false, 3)
                      } catch(e) { console.error("[SpawnUFO]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Spawn All UFOs"
                  },
                      {
                    buttonText: "Spawn All Tapes",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var pos = getTransform(localP).method("get_position").invoke()
                        var tapeItems = ["item_electrical_tape","item_tapedispenser","item_steampunk_clip"]
                        for (var i = 0; i < tapeItems.length; i++) {
                          var spawnPos = [pos.field("x").value + (Math.random()-0.5)*4, pos.field("y").value + 1, pos.field("z").value + (Math.random()-0.5)*4]
                          spawnNetworkPrefab(tapeItems[i], spawnPos, identityQuaternion)
                        }
                        sendNotification("Spawned tape items", false, 3)
                      } catch(e) { console.error("[SpawnTapes]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Spawn All Tapes"
                  },
                      {
                    buttonText: "Spawn All Modules",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var pos = getTransform(localP).method("get_position").invoke()
                        var moduleItems = ["item_module_blast_1","item_module_blast_2","item_module_blast_3","item_module_boost_1","item_module_boost_2","item_module_boost_3","item_module_gravity_1","item_module_minigun_1","item_module_minigun_2","item_module_minigun_3","item_module_stasis_1"]
                        for (var i = 0; i < moduleItems.length; i++) {
                          var angle = (Math.PI * 2 / moduleItems.length) * i
                          var spawnPos = [pos.field("x").value + Math.cos(angle)*3, pos.field("y").value + 1, pos.field("z").value + Math.sin(angle)*3]
                          spawnNetworkPrefab(moduleItems[i], spawnPos, identityQuaternion)
                        }
                        sendNotification("Spawned " + moduleItems.length + " modules", false, 3)
                      } catch(e) { console.error("[SpawnModules]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Spawn All Modules"
                  },
                      {
                    buttonText: "Spawn Suitcases",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var pos = getTransform(localP).method("get_position").invoke()
                        var caseItems = ["item_pelican_case","item_cardboard_box"]
                        for (var i = 0; i < 10; i++) {
                          var spawnPos = [pos.field("x").value + (Math.random()-0.5)*5, pos.field("y").value + 2, pos.field("z").value + (Math.random()-0.5)*5]
                          spawnNetworkPrefab(caseItems[i % caseItems.length], spawnPos, identityQuaternion)
                        }
                        sendNotification("Spawned 10 suitcases", false, 3)
                      } catch(e) { console.error("[SpawnSuitcases]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Spawn Suitcases"
                  },
                      {
                    buttonText: "Spawn All Crates",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var pos = getTransform(localP).method("get_position").invoke()
                        var crateItems = ["item_crate","item_randombox_mobloot_big","item_randombox_mobloot_medium","item_randombox_mobloot_small","item_randombox_mobloot_weapons","item_randombox_mobloot_zombie","item_randombox_modules"]
                        for (var i = 0; i < crateItems.length; i++) {
                          var spawnPos = [pos.field("x").value + (Math.random()-0.5)*6, pos.field("y").value + 1, pos.field("z").value + (Math.random()-0.5)*6]
                          spawnNetworkPrefab(crateItems[i], spawnPos, identityQuaternion)
                        }
                        sendNotification("Spawned " + crateItems.length + " crates", false, 3)
                      } catch(e) { console.error("[SpawnCrates]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Spawn All Crates"
                  },
                      {
                    buttonText: "Spawn All Eggs",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var pos = getTransform(localP).method("get_position").invoke()
                        spawnNetworkPrefab("item_egg", [pos.field("x").value, pos.field("y").value + 2, pos.field("z").value], identityQuaternion)
                        sendNotification("Spawned egg", false, 2)
                      } catch(e) { console.error("[SpawnEggs]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Spawn All Eggs"
                  },
                      {
                    buttonText: "Spawn All Ships",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var pos = getTransform(localP).method("get_position").invoke()
                        var shipItems = ["item_robo_monke"]
                        for (var i = 0; i < shipItems.length; i++) {
                          spawnNetworkPrefab(shipItems[i], [pos.field("x").value, pos.field("y").value + 3, pos.field("z").value], identityQuaternion)
                        }
                        sendNotification("Spawned ships", false, 2)
                      } catch(e) { console.error("[SpawnShips]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Spawn All Ships"
                  },
                      {
                    buttonText: "Spawn Clones",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var pos = getTransform(localP).method("get_position").invoke()
                        for (var i = 0; i < 5; i++) {
                          var angle = (Math.PI * 2 / 5) * i
                          var spawnPos = [pos.field("x").value + Math.cos(angle)*2, pos.field("y").value, pos.field("z").value + Math.sin(angle)*2]
                          spawnNetworkPrefab("item_fake_gorilla", spawnPos, identityQuaternion)
                        }
                        sendNotification("Spawned 5 clones", false, 2)
                      } catch(e) { console.error("[SpawnClones]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Spawn Clones"
                  },
                      {
                    buttonText: "Saturn Clones",
                    enableMethod: () => { saturnClonesEnabled = true; sendNotification("Saturn Clones ON", false) },
                    disableMethod: () => { saturnClonesEnabled = false; sendNotification("Saturn Clones OFF", false) },
                    method: () => {
                      try {
                        if (!saturnClonesEnabled) return
                        if (time - minigunLastFireTime < 0.5) return
                        minigunLastFireTime = time
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var pos = getTransform(localP).method("get_position").invoke()
                        for (var i = 0; i < 8; i++) {
                          var angle = (Math.PI * 2 / 8) * i
                          var spawnPos = [pos.field("x").value + Math.cos(angle)*3, pos.field("y").value, pos.field("z").value + Math.sin(angle)*3]
                          spawnNetworkPrefab("item_clone_gold", spawnPos, identityQuaternion)
                        }
                      } catch(e) { console.error("[SaturnClones]", e) }
                    },
                    isTogglable: true,
                    toolTip: "Saturn Clones (toggleable)"
                  },
                      {
                    buttonText: "Christmas Present Dome",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var pos = getTransform(localP).method("get_position").invoke()
                        for (var angle = 0; angle < Math.PI * 2; angle += 0.3) {
                          for (var y = 0; y < 3; y++) {
                            var x = pos.field("x").value + Math.cos(angle) * 5
                            var z = pos.field("z").value + Math.sin(angle) * 5
                            var spawnPos = [x, pos.field("y").value + y * 1.5, z]
                            spawnNetworkPrefab("item_momboss_box", spawnPos, identityQuaternion)
                          }
                        }
                        sendNotification("Christmas Present Dome!", false, 3)
                      } catch(e) { console.error("[PresentDome]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Christmas Present Dome"
                  },
                      {
                    buttonText: "Selling Machine Dome",
                    method: () => { spawnSellingDome() },
                    isTogglable: false,
                    toolTip: "Selling Machine Dome"
                  },
                      {
                    buttonText: "Spawn Full Shredder",
                    method: () => {
                      try {
                        var pos = getTransform(righthand ? rightHandTransform : leftHandTransform).method("get_position").invoke()
                        spawnNetworkPrefab("item_shredder", pos, identityQuaternion)
                        sendNotification("Spawned shredder", false, 2)
                      } catch(e) { console.error("[SpawnShredder]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Spawn Full Shredder"
                  },
                      {
                    buttonText: "Spawn Pumpkins",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var pos = getTransform(localP).method("get_position").invoke()
                        for (var i = 0; i < 15; i++) {
                          var angle = (Math.PI * 2 / 15) * i
                          var spawnPos = [pos.field("x").value + Math.cos(angle)*3, pos.field("y").value + 1, pos.field("z").value + Math.sin(angle)*3]
                          spawnNetworkPrefab("item_pumpkinjack", spawnPos, identityQuaternion)
                        }
                        sendNotification("Spawned 15 pumpkins", false, 2)
                      } catch(e) { console.error("[SpawnPumpkins]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Spawn Pumpkins"
                  },
                      {
                    buttonText: "Machine to Me",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var pos = getTransform(localP).method("get_position").invoke()
                        var localPos = readVec3Components(pos)
                        var smClass = AssemblyCSharp.class("AnimalCompany.ItemSellingMachineController")
                        var allMachines = Object.method("FindObjectsByType", 0).inflate(smClass).invoke(0)
                        if (allMachines && allMachines.length > 0) {
                          for (var i = 0; i < allMachines.length; i++) {
                            try {
                              var machine = allMachines.get(i)
                              if (machine && !machine.isNull?.()) {
                                var t = getTransform(machine)
                                if (t && !t.isNull?.()) {
                                  t.method("set_position").invoke([localPos[0] + 2, localPos[1], localPos[2]])
                                }
                              }
                            } catch(_) {}
                          }
                          sendNotification("Machines moved to you!", false, 2)
                        } else {
                          spawnNetworkPrefab("item_selling_machine", [localPos[0] + 1, localPos[1], localPos[2]], identityQuaternion)
                          sendNotification("Spawned selling machine", false, 2)
                        }
                      } catch(e) { console.error("[MachineToMe]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Machine to Me"
                  }
            ]
        }
        ,
        {
            category: "combat",
            entries: [
                {
                    buttonText: "Blackhole Launcher",
                    enableMethod: () => { blackholeLauncherEnabled = true; gunLibMinigunMode = false; try { createGunLib() } catch(_) {}; sendNotification("Blackhole Launcher ON", false) },
                    disableMethod: () => { blackholeLauncherEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("Blackhole Launcher OFF", false) },
                    method: () => {
                      try {
                        if (!blackholeLauncherEnabled) return
                        var gripHeld = righthand ? leftGrab : rightGrab
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        if (!gripHeld || !triggerHeld) return
                        if (time - minigunLastFireTime < minigunRate) return
                        minigunLastFireTime = time
                        var pos = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_position").invoke()
                        var fwd = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_forward").invoke()
                        var spawnPos = Vector3.method("op_Addition").invoke(pos, Vector3.method("op_Multiply").invoke(fwd, 0.5))
                        spawnNetworkPrefab("item_impulse_grenade", spawnPos, identityQuaternion)
                      } catch(e) { console.error("[BlackholeLauncher]", e) }
                    },
                    isTogglable: true,
                    toolTip: "Blackhole Launcher (Grip+Trigger)"
                  },
                      {
                    buttonText: "Rocket Launcher",
                    enableMethod: () => { rocketLauncherEnabled = true; gunLibMinigunMode = false; try { createGunLib() } catch(_) {}; sendNotification("Rocket Launcher ON", false) },
                    disableMethod: () => { rocketLauncherEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("Rocket Launcher OFF", false) },
                    method: () => {
                      try {
                        if (!rocketLauncherEnabled) return
                        var gripHeld = righthand ? leftGrab : rightGrab
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        if (!gripHeld || !triggerHeld) return
                        if (time - minigunLastFireTime < minigunRate) return
                        minigunLastFireTime = time
                        var pos = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_position").invoke()
                        var fwd = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_forward").invoke()
                        var spawnPos = Vector3.method("op_Addition").invoke(pos, Vector3.method("op_Multiply").invoke(fwd, 0.5))
                        spawnNetworkPrefab("item_rpg_ammo", spawnPos, identityQuaternion)
                      } catch(e) { console.error("[RocketLauncher]", e) }
                    },
                    isTogglable: true,
                    toolTip: "Rocket Launcher - spawns RPG ammo (Grip+Trigger)"
                  },
                      {
                    buttonText: "Snowball Launcher",
                    enableMethod: () => { snowballLauncherEnabled = true; gunLibMinigunMode = false; try { createGunLib() } catch(_) {}; sendNotification("Snowball Launcher ON", false) },
                    disableMethod: () => { snowballLauncherEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("Snowball Launcher OFF", false) },
                    method: () => {
                      try {
                        if (!snowballLauncherEnabled) return
                        var gripHeld = righthand ? leftGrab : rightGrab
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        if (!gripHeld || !triggerHeld) return
                        if (time - minigunLastFireTime < minigunRate) return
                        minigunLastFireTime = time
                        var pos = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_position").invoke()
                        var fwd = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_forward").invoke()
                        var spawnPos = Vector3.method("op_Addition").invoke(pos, Vector3.method("op_Multiply").invoke(fwd, 0.5))
                        spawnNetworkPrefab("item_snowball", spawnPos, identityQuaternion)
                      } catch(e) { console.error("[SnowballLauncher]", e) }
                    },
                    isTogglable: true,
                    toolTip: "Snowball Launcher (Grip+Trigger)"
                  },
                      {
                    buttonText: "Flaregun Launcher",
                    enableMethod: () => { flaregunLauncherEnabled = true; gunLibMinigunMode = false; try { createGunLib() } catch(_) {}; sendNotification("Flaregun Launcher ON", false) },
                    disableMethod: () => { flaregunLauncherEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("Flaregun Launcher OFF", false) },
                    method: () => {
                      try {
                        if (!flaregunLauncherEnabled) return
                        var gripHeld = righthand ? leftGrab : rightGrab
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        if (!gripHeld || !triggerHeld) return
                        if (time - minigunLastFireTime < minigunRate) return
                        minigunLastFireTime = time
                        var pos = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_position").invoke()
                        var fwd = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_forward").invoke()
                        var spawnPos = Vector3.method("op_Addition").invoke(pos, Vector3.method("op_Multiply").invoke(fwd, 0.5))
                        spawnNetworkPrefab("item_flaregun", spawnPos, identityQuaternion)
                      } catch(e) { console.error("[FlaregunLauncher]", e) }
                    },
                    isTogglable: true,
                    toolTip: "Flaregun Launcher (Grip+Trigger)"
                  },
                      {
                    buttonText: "Bootzooka Launcher",
                    enableMethod: () => { bootzookaLauncherEnabled = true; gunLibMinigunMode = false; try { createGunLib() } catch(_) {}; sendNotification("Bootzooka Launcher ON", false) },
                    disableMethod: () => { bootzookaLauncherEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("Bootzooka Launcher OFF", false) },
                    method: () => {
                      try {
                        if (!bootzookaLauncherEnabled) return
                        var gripHeld = righthand ? leftGrab : rightGrab
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        if (!gripHeld || !triggerHeld) return
                        if (time - minigunLastFireTime < minigunRate) return
                        minigunLastFireTime = time
                        var pos = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_position").invoke()
                        var fwd = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_forward").invoke()
                        var spawnPos = Vector3.method("op_Addition").invoke(pos, Vector3.method("op_Multiply").invoke(fwd, 0.5))
                        spawnNetworkPrefab("item_dynamite", spawnPos, identityQuaternion)
                      } catch(e) { console.error("[BootzookaLauncher]", e) }
                    },
                    isTogglable: true,
                    toolTip: "Bootzooka Launcher (Grip+Trigger)"
                  },
                      {
                    buttonText: "Bomb Arrow Launcher",
                    enableMethod: () => { bombArrowLauncherEnabled = true; gunLibMinigunMode = false; try { createGunLib() } catch(_) {}; sendNotification("Bomb Arrow Launcher ON", false) },
                    disableMethod: () => { bombArrowLauncherEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("Bomb Arrow Launcher OFF", false) },
                    method: () => {
                      try {
                        if (!bombArrowLauncherEnabled) return
                        var gripHeld = righthand ? leftGrab : rightGrab
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        if (!gripHeld || !triggerHeld) return
                        if (time - minigunLastFireTime < minigunRate) return
                        minigunLastFireTime = time
                        var pos = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_position").invoke()
                        var fwd = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_forward").invoke()
                        var spawnPos = Vector3.method("op_Addition").invoke(pos, Vector3.method("op_Multiply").invoke(fwd, 0.5))
                        spawnNetworkPrefab("item_arrow_bomb", spawnPos, identityQuaternion)
                      } catch(e) { console.error("[BombArrowLauncher]", e) }
                    },
                    isTogglable: true,
                    toolTip: "Bomb Arrow Launcher (Grip+Trigger)"
                  },
                      {
                    buttonText: "Rainbow Item Launcher",
                    enableMethod: () => { rainbowLauncherEnabled = true; gunLibMinigunMode = false; try { createGunLib() } catch(_) {}; sendNotification("Rainbow Launcher ON", false) },
                    disableMethod: () => { rainbowLauncherEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("Rainbow Launcher OFF", false) },
                    method: () => {
                      try {
                        if (!rainbowLauncherEnabled) return
                        var gripHeld = righthand ? leftGrab : rightGrab
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        if (!gripHeld || !triggerHeld) return
                        if (time - minigunLastFireTime < minigunRate) return
                        minigunLastFireTime = time
                        var pos = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_position").invoke()
                        var fwd = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_forward").invoke()
                        var spawnPos = Vector3.method("op_Addition").invoke(pos, Vector3.method("op_Multiply").invoke(fwd, 0.5))
                        var rainbowItems = ["item_balloon","item_balloon_heart","item_glowstick","item_boomerang","item_stellarsword_blue","item_stellarsword_gold"]
                        var obj = spawnNetworkPrefab(rainbowItems[Math.floor(Math.random()*rainbowItems.length)], spawnPos, identityQuaternion)
                        if (obj && !obj.isNull?.()) {
                          try {
                            var renderer = obj.method("GetComponentInChildren", 0).inflate(Renderer).invoke(true)
                            if (renderer && !renderer.isNull?.()) {
                              var mat = renderer.method("get_material").invoke()
                              var c = minigunRainbowColors[minigunColorIndex % minigunRainbowColors.length]
                              mat.method("set_color").invoke(c)
                              minigunColorIndex++
                            }
                          } catch (_) {}
                        }
                      } catch(e) { console.error("[RainbowLauncher]", e) }
                    },
                    isTogglable: true,
                    toolTip: "Rainbow Item Launcher (Grip+Trigger)"
                  },
                      {
                    buttonText: "Galaxy Item Launcher",
                    enableMethod: () => { galaxyLauncherEnabled = true; gunLibMinigunMode = false; try { createGunLib() } catch(_) {}; sendNotification("Galaxy Launcher ON", false) },
                    disableMethod: () => { galaxyLauncherEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("Galaxy Launcher OFF", false) },
                    method: () => {
                      try {
                        if (!galaxyLauncherEnabled) return
                        var gripHeld = righthand ? leftGrab : rightGrab
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        if (!gripHeld || !triggerHeld) return
                        if (time - minigunLastFireTime < minigunRate) return
                        minigunLastFireTime = time
                        var pos = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_position").invoke()
                        var fwd = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_forward").invoke()
                        var spawnPos = Vector3.method("op_Addition").invoke(pos, Vector3.method("op_Multiply").invoke(fwd, 0.5))
                        var galaxyItems = ["item_stellarsword_blue","item_stellarsword_gold","item_backpack_space"]
                        spawnNetworkPrefab(galaxyItems[Math.floor(Math.random()*galaxyItems.length)], spawnPos, identityQuaternion)
                      } catch(e) { console.error("[GalaxyLauncher]", e) }
                    },
                    isTogglable: true,
                    toolTip: "Galaxy Item Launcher (Grip+Trigger)"
                  },
                      {
                    buttonText: "RPG Out Of Head",
                    enableMethod: () => { rpgHeadEnabled = true; gunLibMinigunMode = false; try { createGunLib() } catch(_) {}; sendNotification("RPG Head ON", false) },
                    disableMethod: () => { rpgHeadEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("RPG Head OFF", false) },
                    method: () => {
                      try {
                        if (!rpgHeadEnabled) return
                        if (time - minigunLastFireTime < minigunRate) return
                        minigunLastFireTime = time
                        var headPos = getTransform(headCollider).method("get_position").invoke()
                        var spawnPos = [headPos.field("x").value, headPos.field("y").value + 0.3, headPos.field("z").value]
                        spawnNetworkPrefab("item_rpg_ammo", spawnPos, identityQuaternion)
                      } catch(e) { console.error("[RPGHead]", e) }
                    },
                    isTogglable: true,
                    toolTip: "RPG Out Of Head (auto-fires)"
                  },
                      {
                    buttonText: "Spawn Mob Gun",
                    enableMethod: () => { spawnMobGunCat3Enabled = true; sendNotification("Spawn Mob Gun ON", false) },
                    disableMethod: () => { spawnMobGunCat3Enabled = false; sendNotification("Spawn Mob Gun OFF", false) },
                    method: () => {
                      try {
                        if (!spawnMobGunCat3Enabled) return
                        var gripHeld = righthand ? leftGrab : rightGrab
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        if (!gripHeld || !triggerHeld) return
                        if (time - minigunLastFireTime < minigunRate) return
                        minigunLastFireTime = time
                        var pos = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_position").invoke()
                        var fwd = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_forward").invoke()
                        var spawnPos = Vector3.method("op_Addition").invoke(pos, Vector3.method("op_Multiply").invoke(fwd, 0.5))
                        if (mobList.length === 0) buildMobList()
                        var mob = mobList[selectedMobIndex % mobList.length]
                        spawnMobAtPos(mob, spawnPos, identityQuaternion)
                        selectedMobIndex = (selectedMobIndex + 1) % mobList.length
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Spawn Mob Gun (Grip+Trigger)"
                  },
                      {
                    buttonText: "Spawn Items Gun",
                    enableMethod: () => { spawnItemsGunEnabled = true; sendNotification("Spawn Items Gun ON", false) },
                    disableMethod: () => { spawnItemsGunEnabled = false; sendNotification("Spawn Items Gun OFF", false) },
                    method: () => {
                      try {
                        if (!spawnItemsGunEnabled) return
                        var gripHeld = righthand ? leftGrab : rightGrab
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        if (!gripHeld || !triggerHeld) return
                        if (time - minigunLastFireTime < minigunRate) return
                        minigunLastFireTime = time
                        var pos = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_position").invoke()
                        var fwd = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_forward").invoke()
                        var spawnPos = Vector3.method("op_Addition").invoke(pos, Vector3.method("op_Multiply").invoke(fwd, 0.5))
                        var item = itemIDs[selectedItemIndex % itemIDs.length]
                        spawnNetworkPrefab(item, spawnPos, identityQuaternion)
                        selectedItemIndex = (selectedItemIndex + 1) % itemIDs.length
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Spawn Items Gun (Grip+Trigger)"
                  },
                      {
                    buttonText: "Fling Player",
                    method: () => {
                      try {
                        var target = getGunModTarget()
                        if (!target || target.isNull?.()) { sendNotification("No target", false, 2); return }
                        target.method("RPC_AddForce").invoke([0, 8000, 0])
                        sendNotification("Flinging player!", false, 2)
                      } catch(e) { console.error("[FlingPlayer]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Fling Player"
                  }
            ]
        }
        ,
        {
            category: "world",
            entries: [
                {
                    buttonText: "Infinite Ammo",
                    enableMethod: () => { infAmmoEnabled2 = true; sendNotification("Infinite Ammo ON", false) },
                    disableMethod: () => { infAmmoEnabled2 = false; sendNotification("Infinite Ammo OFF", false) },
                    method: () => {
                      try {
                        if (!infAmmoEnabled2) return
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var go = localP.method("get_gameObject").invoke()
                        if (!go || go.isNull?.()) return
                        var fields = ["currentAmmo","_ammo","ammoCount","currentClip"]
                        var guns = go.method("GetComponentsInChildren", 0).inflate(AssemblyCSharp.class("AnimalCompany.Gun")).invoke(true)
                        if (guns) {
                          for (var i = 0; i < guns.length; i++) {
                            try {
                              for (var f = 0; f < fields.length; f++) {
                                try { guns.get(i).field(fields[f]).value = 999 } catch(_) {}
                              }
                              try { guns.get(i).field("_currentAmmo").value = 999 } catch(_) {}
                              try { guns.get(i).field("ammo").value = 999 } catch(_) {}
                            } catch(_) {}
                          }
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Infinite Ammo"
                  },
                      {
                    buttonText: "No Recoil",
                    enableMethod: () => { noRecoilEnabled = true; sendNotification("No Recoil ON", false) },
                    disableMethod: () => { noRecoilEnabled = false; sendNotification("No Recoil OFF", false) },
                    method: () => {
                      try {
                        if (!noRecoilEnabled) return
                        var gunClass = AssemblyCSharp.class("AnimalCompany.Gun")
                        var fields = ["_recoilAmount","recoilAmount","_recoil","recoil"]
                        var methods = gunClass.methods
                        for (var i = 0; i < methods.length; i++) {
                          try {
                            var mname = methods[i].name.to()
                            if (mname.includes("Recoil") || mname.includes("recoil")) {
                              methods[i].implementation = function() { return 0 }
                            }
                          } catch(_) {}
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "No Recoil"
                  },
                      {
                    buttonText: "Rapid Fire",
                    enableMethod: () => { rapidFireEnabled = true; sendNotification("Rapid Fire ON", false) },
                    disableMethod: () => { rapidFireEnabled = false; sendNotification("Rapid Fire OFF", false) },
                    method: () => {
                      try {
                        if (!rapidFireEnabled) return
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var go = localP.method("get_gameObject").invoke()
                        if (!go || go.isNull?.()) return
                        var guns = go.method("GetComponentsInChildren", 0).inflate(AssemblyCSharp.class("AnimalCompany.Gun")).invoke(true)
                        if (guns) {
                          for (var i = 0; i < guns.length; i++) {
                            try {
                              var fields2 = ["_fireRate","fireRate","cooldown","_cooldown","shootInterval"]
                              for (var f = 0; f < fields2.length; f++) {
                                try { guns.get(i).field(fields2[f]).value = 0.01 } catch(_) {}
                              }
                            } catch(_) {}
                          }
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Rapid Fire"
                  },
                      {
                    buttonText: "No Shotgun Cooldown",
                    enableMethod: () => { sendNotification("No Shotgun Cooldown ON", false) },
                    disableMethod: () => { sendNotification("No Shotgun Cooldown OFF", false) },
                    method: () => {
                      try {
                        var gunClass = AssemblyCSharp.class("AnimalCompany.Shotgun")
                        var methods = gunClass.methods
                        for (var i = 0; i < methods.length; i++) {
                          try {
                            var mname = methods[i].name.to()
                            if (mname.includes("Cooldown") || mname.includes("cooldown") || mname.includes("FireRate") || mname.includes("CanShoot")) {
                              methods[i].implementation = function() { return true }
                            }
                          } catch(_) {}
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "No Shotgun Cooldown"
                  },
                      {
                    buttonText: "Shotgun Fix",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var go = localP.method("get_gameObject").invoke()
                        if (!go || go.isNull?.()) return
                        var guns = go.method("GetComponentsInChildren", 0).inflate(AssemblyCSharp.class("AnimalCompany.Shotgun")).invoke(true)
                        if (guns) {
                          for (var i = 0; i < guns.length; i++) {
                            try {
                              try { guns.get(i).field("_fireRate").value = 0.05 } catch(_) {}
                              try { guns.get(i).field("cooldownTime").value = 0.05 } catch(_) {}
                            } catch(_) {}
                          }
                        }
                        sendNotification("Shotgun fixed", false, 2)
                      } catch(e) { console.error("[ShotgunFix]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Shotgun Fix"
                  },
                      {
                    buttonText: "One Hit Kill",
                    enableMethod: () => { sendNotification("One Hit Kill ON", false) },
                    disableMethod: () => { sendNotification("One Hit Kill OFF", false) },
                    method: () => {
                      try {
                        var gunClass = AssemblyCSharp.class("AnimalCompany.Gun")
                        var fields = ["_damageAmount","damageAmount","damage","_damage"]
                        var methods = gunClass.methods
                        for (var i = 0; i < methods.length; i++) {
                          try {
                            var mname = methods[i].name.to()
                            if (mname.includes("Damage") || mname.includes("damage")) {
                              methods[i].implementation = function() { return 99999 }
                            }
                          } catch(_) {}
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "One Hit Kill"
                  },
                      {
                    buttonText: "Inf Damage",
                    enableMethod: () => { sendNotification("Inf Damage ON", false) },
                    disableMethod: () => { sendNotification("Inf Damage OFF", false) },
                    method: () => {
                      try {
                        var gunClass = AssemblyCSharp.class("AnimalCompany.Gun")
                        var allGuns = Object.method("FindObjectsByType", 0).inflate(gunClass).invoke(0)
                        if (allGuns) {
                          for (var i = 0; i < allGuns.length; i++) {
                            try {
                              try { allGuns.get(i).field("_damageAmount").value = 99999 } catch(_) {}
                              try { allGuns.get(i).field("damageAmount").value = 99999 } catch(_) {}
                            } catch(_) {}
                          }
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Inf Damage"
                  },
                      {
                    buttonText: "Freeze Mobs",
                    enableMethod: () => { freezeMobsEnabled = true; sendNotification("Freeze Mobs ON", false) },
                    disableMethod: () => { freezeMobsEnabled = false; sendNotification("Freeze Mobs OFF", false) },
                    method: () => {
                      try {
                        if (!freezeMobsEnabled) return
                        var mobClass = AssemblyCSharp.class("AnimalCompany.MobBase")
                        var allMobs = Object.method("FindObjectsByType", 0).inflate(mobClass).invoke(0)
                        if (allMobs) {
                          for (var i = 0; i < allMobs.length; i++) {
                            try {
                              var rb = allMobs.get(i).method("GetComponent", 0).inflate(Rigidbody).invoke()
                              if (rb && !rb.isNull?.()) {
                                rb.method("set_linearVelocity").invoke(zeroVector)
                                rb.method("set_angularVelocity").invoke(zeroVector)
                              }
                            } catch(_) {}
                          }
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Freeze Mobs"
                  },
                      {
                    buttonText: "Infinite Bag",
                    enableMethod: () => { infiniteBagEnabled = true; installContainerFreedom(); sendNotification("Infinite Bag ON", false) },
                    disableMethod: () => { infiniteBagEnabled = false; sendNotification("Infinite Bag OFF", false) },
                    method: () => {},
                    isTogglable: true,
                    toolTip: "Infinite Bag"
                  },
                      {
                    buttonText: "Give Fly All",
                    enableMethod: () => { giveFlyAllEnabled2 = true; sendNotification("Give Fly All ON", false) },
                    disableMethod: () => { giveFlyAllEnabled2 = false; sendNotification("Give Fly All OFF", false) },
                    method: () => {
                      try {
                        if (!giveFlyAllEnabled2) return
                        var players = getAllNetPlayersList(false)
                        for (var i = 0; i < players.length; i++) {
                          try {
                            var methods = ["RPC_SetFlyEnabled","set_canFly","set_flyEnabled"]
                            for (var m = 0; m < methods.length; m++) {
                              try { players[i].method(methods[m]).invoke(true) } catch(_) {}
                            }
                          } catch(_) {}
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Give Fly All"
                  },
                      {
                    buttonText: "Give Gun All",
                    method: () => {
                      try {
                        var players = getAllNetPlayersList(false)
                        for (var i = 0; i < players.length; i++) {
                          try {
                            var go = players[i].method("get_gameObject").invoke()
                            if (!go || go.isNull?.()) continue
                            var pos = getTransform(go).method("get_position").invoke()
                            spawnNetworkPrefab("item_revolver", pos, identityQuaternion)
                          } catch(_) {}
                        }
                        sendNotification("Gave guns to all", false, 2)
                      } catch(e) { console.error("[GiveGunAll]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Give Gun All"
                  },
                      {
                    buttonText: "Teleport Loot",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var pos = getTransform(localP).method("get_position").invoke()
                        var itemClass = AssemblyCSharp.class("AnimalCompany.GrabbableObject")
                        var allItems = Object.method("FindObjectsByType", 0).inflate(itemClass).invoke(0)
                        if (allItems) {
                          var count = Math.min(allItems.length, 30)
                          for (var i = 0; i < count; i++) {
                            try {
                              var item = allItems.get(i)
                              if (!item || item.isNull?.()) continue
                              var itemGo = item.method("get_gameObject").invoke()
                              if (!itemGo || itemGo.isNull?.()) continue
                              var t = getTransform(itemGo)
                              var offset = [(Math.random()-0.5)*2, Math.random()*2, (Math.random()-0.5)*2]
                              t.method("set_position").invoke(Vector3.method("op_Addition").invoke(pos, offset))
                            } catch(_) {}
                          }
                        }
                        sendNotification("Teleported loot!", false, 2)
                      } catch(e) { console.error("[TP loot]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Teleport Loot"
                  },
                      {
                    buttonText: "Drop All Items",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var go = localP.method("get_gameObject").invoke()
                        if (!go || go.isNull?.()) return
                        try { localP.method("RPC_DropAllItems").invoke() } catch(_) {}
                        sendNotification("Dropped all items", false, 2)
                      } catch(e) { console.error("[DropAll]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Drop All Items"
                  },
                      {
                    buttonText: "RP Earn",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        try { localP.method("RPC_EarnResearchPoints").invoke(1000) } catch(_) {}
                        sendNotification("+1000 RP", false, 2)
                      } catch(e) { console.error("[RPEarn]", e) }
                    },
                    isTogglable: false,
                    toolTip: "RP Earn"
                  },
                      {
                    buttonText: "Crash Lobby",
                    method: () => {
                      try {
                        for (var i = 0; i < 50; i++) {
                          var pos = [Math.random()*200-100, Math.random()*200, Math.random()*200-100]
                          spawnNetworkPrefab("item_crate", pos, identityQuaternion)
                        }
                        sendNotification("Crash attempt!", false, 2)
                      } catch(e) { console.error("[CrashLobby]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Crash Lobby"
                  },
                      {
                    buttonText: "Set Kills +10",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        try { localP.method("set_killCount").invoke(10) } catch(_) {}
                        try { localP.field("kills").value = 10 } catch(_) {}
                        sendNotification("Kills set to 10", false, 2)
                      } catch(e) { console.error("[SetKills]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Set Kills +10"
                  },
                      {
                    buttonText: "Set Deaths 0",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        try { localP.method("set_deathCount").invoke(0) } catch(_) {}
                        try { localP.field("deaths").value = 0 } catch(_) {}
                        sendNotification("Deaths set to 0", false, 2)
                      } catch(e) { console.error("[SetDeaths]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Set Deaths 0"
                  },
                      {
                    buttonText: "Award Kill All",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var players = getAllNetPlayersList(false)
                        for (var i = 0; i < players.length; i++) {
                          try {
                            var pos = getTransform(players[i]).method("get_position").invoke()
                            var dmgNull = AssemblyCSharp.class("AnimalCompany.DamageSourceInfo").method("get_Null").invoke()
                            localP.method("RPC_PlayerHit").invoke(999, pos, dmgNull)
                          } catch(_) {}
                        }
                        sendNotification("Award kill all!", false, 2)
                      } catch(e) { console.error("[AwardKillAll]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Award Kill All"
                  }
            ]
        }
        ,
        {
            category: "overpowered",
            entries: [
                {
                    buttonText: "Item Launcher Gun",
                    enableMethod: () => { itemLauncherGunEnabled = true; sendNotification("Item Launcher Gun ON", false) },
                    disableMethod: () => { itemLauncherGunEnabled = false; sendNotification("Item Launcher Gun OFF", false) },
                    method: () => {
                      try {
                        if (!itemLauncherGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        var aimPoint = getGunModAimPoint()
                        var item = itemIDs[Math.floor(Math.random() * itemIDs.length)]
                        spawnNetworkPrefab(item, aimPoint, identityQuaternion)
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Item Launcher Gun"
                  },
                      {
                    buttonText: "Delete Obj Gun",
                    enableMethod: () => { deleteObjGunEnabled = true; sendNotification("Delete Obj Gun ON (items/players only)", false) },
                    disableMethod: () => { deleteObjGunEnabled = false; sendNotification("Delete Obj Gun OFF", false) },
                    method: () => {
                      try {
                        if (!deleteObjGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        var rayData = doGunRaycast()
                        if (rayData.collider && !rayData.collider.isNull?.()) {
                          var go = rayData.collider.method("get_gameObject").invoke()
                          if (go && !go.isNull?.()) {
                            var name = go.method("get_name").invoke().to()
                            if (name.indexOf("Terrain") >= 0 || name.indexOf("Ground") >= 0 || name.indexOf("Floor") >= 0 || name.indexOf("Wall") >= 0 || name.indexOf("Ceiling") >= 0 || name.indexOf("Roof") >= 0 || name.indexOf("Platform") >= 0 || name.indexOf("Spawn") >= 0 || name.indexOf("Arena") >= 0 || name.indexOf("Map") >= 0 || name.indexOf("Sky") >= 0) return
                            try {
                              var itemClass = AssemblyCSharp.class("AnimalCompany.GrabbableObject")
                              var grabbable = go.method("GetComponent", 0).inflate(itemClass).invoke()
                              if (grabbable && !grabbable.isNull?.()) { Destroy(go); return }
                            } catch(_) {}
                            try {
                              var playerClass = NetPlayer
                              var playerDict = playerClass.field("playerIDToNetPlayer").value
                              if (playerDict && !playerDict.isNull()) {
                                var vals = playerDict.method("get_Values").invoke()
                                var en = vals.method("GetEnumerator").invoke()
                                while (en.method("MoveNext").invoke()) {
                                  var p = en.method("get_Current").invoke()
                                  if (p && !p.isNull?.()) {
                                    var pGo = p.method("get_gameObject").invoke()
                                    if (pGo && pGo.handle && pGo.handle.equals(go.handle)) return
                                  }
                                }
                              }
                            } catch(_) {}
                            Destroy(go)
                          }
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Delete Obj Gun (items only, safe)"
                  },
                      {
                    buttonText: "TP ALL Gun",
                    enableMethod: () => { tpAllGunEnabled = true; sendNotification("TP ALL Gun ON", false) },
                    disableMethod: () => { tpAllGunEnabled = false; sendNotification("TP ALL Gun OFF", false) },
                    method: () => {
                      try {
                        if (!tpAllGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        var aimPoint = getGunModAimPoint()
                        var players = getAllNetPlayersList(false)
                        for (var i = 0; i < players.length; i++) {
                          try { players[i].method("RPC_Teleport").invoke(readVec3Components(aimPoint)) } catch(_) {}
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "TP ALL Gun"
                  },
                      {
                    buttonText: "Spawn Mob Gun",
                    enableMethod: () => { spawnMobGunEnabled = true; sendNotification("Spawn Mob Gun ON", false) },
                    disableMethod: () => { spawnMobGunEnabled = false; sendNotification("Spawn Mob Gun OFF", false) },
                    method: () => {
                      try {
                        if (!spawnMobGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        var aimPoint = getGunModAimPoint()
                        if (mobList.length === 0) buildMobList()
                        var mob = mobList[selectedMobIndex % mobList.length]
                        spawnMobAtPos(mob, aimPoint, identityQuaternion)
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Spawn Mob Gun"
                  },
                      {
                    buttonText: "Insta Kill Gun",
                    enableMethod: () => { instaKillGunEnabled = true; sendNotification("Insta Kill Gun ON", false) },
                    disableMethod: () => { instaKillGunEnabled = false; sendNotification("Insta Kill Gun OFF", false) },
                    method: () => {
                      try {
                        if (!instaKillGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        var target = getGunModTarget()
                        if (target && !target.isNull?.()) {
                          try { target.method("RPC_DoPlayerDie").invoke(true) } catch(_) {}
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Insta Kill Gun"
                  },
                      {
                    buttonText: "Kick Gun",
                    enableMethod: () => { kickGunEnabled = true; sendNotification("Kick Gun ON", false) },
                    disableMethod: () => { kickGunEnabled = false; sendNotification("Kick Gun OFF", false) },
                    method: () => {
                      try {
                        if (!kickGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        var target = getGunModTarget()
                        if (target && !target.isNull?.()) {
                          try { target.method("RPC_KickPlayer").invoke() } catch(_) {}
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Kick Gun"
                  },
                      {
                    buttonText: "Kick All",
                    method: () => {
                      try {
                        var players = getAllNetPlayersList(false)
                        for (var i = 0; i < players.length; i++) {
                          try { players[i].method("RPC_KickPlayer").invoke() } catch(_) {}
                        }
                        sendNotification("Kicked all players", false, 2)
                      } catch(e) { console.error("[KickAll]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Kick All"
                  },
                      {
                    buttonText: "Ban Gun",
                    enableMethod: () => { banGunEnabled = true; sendNotification("Ban Gun ON", false) },
                    disableMethod: () => { banGunEnabled = false; sendNotification("Ban Gun OFF", false) },
                    method: () => {
                      try {
                        if (!banGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        var target = getGunModTarget()
                        if (target && !target.isNull?.()) {
                          try { target.method("RPC_KickPlayer").invoke() } catch(_) {}
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Ban Gun"
                  },
                      {
                    buttonText: "Get Player Info Gun",
                    enableMethod: () => { getInfoGunEnabled = true; sendNotification("Get Player Info Gun ON", false) },
                    disableMethod: () => { getInfoGunEnabled = false; sendNotification("Get Player Info Gun OFF", false) },
                    method: () => {
                      try {
                        if (!getInfoGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        getPlayerInfoGun()
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Get Player Info Gun"
                  },
                      {
                    buttonText: "Delete Player Gun",
                    enableMethod: () => { deletePlayerGunEnabled = true; sendNotification("Delete Player Gun ON", false) },
                    disableMethod: () => { deletePlayerGunEnabled = false; sendNotification("Delete Player Gun OFF", false) },
                    method: () => {
                      try {
                        if (!deletePlayerGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        var target = getGunModTarget()
                        if (target && !target.isNull?.()) {
                          try { target.method("RPC_KickPlayer").invoke() } catch(_) {}
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Delete Player Gun"
                  },
                      {
                    buttonText: "Bring All Items Gun",
                    enableMethod: () => { bringAllItemsGunEnabled = true; sendNotification("Bring All Items Gun ON", false) },
                    disableMethod: () => { bringAllItemsGunEnabled = false; sendNotification("Bring All Items Gun OFF", false) },
                    method: () => {
                      try {
                        if (!bringAllItemsGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        var aimPoint = getGunModAimPoint()
                        var itemClass = AssemblyCSharp.class("AnimalCompany.GrabbableObject")
                        var allItems = Object.method("FindObjectsByType", 0).inflate(itemClass).invoke(0)
                        if (allItems) {
                          var count = Math.min(allItems.length, 30)
                          for (var i = 0; i < count; i++) {
                            try {
                              var item = allItems.get(i)
                              var itemGo = item.method("get_gameObject").invoke()
                              if (itemGo && !itemGo.isNull?.()) {
                                var t = getTransform(itemGo)
                                t.method("set_position").invoke(aimPoint)
                              }
                            } catch(_) {}
                          }
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Bring All Items Gun"
                  },
                      {
                    buttonText: "Stinky Gun",
                    enableMethod: () => { stinkyGunEnabled = true; sendNotification("Stinky Gun ON", false) },
                    disableMethod: () => { stinkyGunEnabled = false; sendNotification("Stinky Gun OFF", false) },
                    method: () => {
                      try {
                        if (!stinkyGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        var target = getGunModTarget()
                        if (target && !target.isNull?.()) {
                          try { target.method("set_isStinky").invoke(true) } catch(_) {}
                          try { target.method("RPC_SetStinky").invoke(true) } catch(_) {}
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Stinky Gun"
                  },
                      {
                    buttonText: "Disintegrate Gun",
                    enableMethod: () => { disintegrateGunEnabled = true; sendNotification("Disintegrate Gun ON", false) },
                    disableMethod: () => { disintegrateGunEnabled = false; sendNotification("Disintegrate Gun OFF", false) },
                    method: () => {
                      try {
                        if (!disintegrateGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        var target = getGunModTarget()
                        var aimPoint = getGunModAimPoint()
                        if (target && !target.isNull?.()) {
                          var dmgNull = AssemblyCSharp.class("AnimalCompany.DamageSourceInfo").method("get_Null").invoke()
                          try { target.method("RPC_PlayerHit").invoke(99999, aimPoint, dmgNull) } catch(_) {}
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Disintegrate Gun"
                  },
                      {
                    buttonText: "Select Obj Gun",
                    enableMethod: () => { selectObjGunEnabled = true; sendNotification("Select Obj Gun ON", false) },
                    disableMethod: () => { selectObjGunEnabled = false; sendNotification("Select Obj Gun OFF", false) },
                    method: () => {
                      try {
                        if (!selectObjGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        var rayData = doGunRaycast()
                        if (rayData.hit && rayData.collider && !rayData.collider.isNull?.()) {
                          var go = rayData.collider.method("get_gameObject").invoke()
                          if (go && !go.isNull?.()) {
                            console.log("[SelectObj] Selected: " + go.method("get_name").invoke().to())
                            sendNotification("Selected: " + go.method("get_name").invoke().to(), false, 2)
                          }
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Select Obj Gun"
                  },
                      {
                    buttonText: "VFX Gun",
                    enableMethod: () => { vfxGunEnabled = true; sendNotification("VFX Gun ON", false) },
                    disableMethod: () => { vfxGunEnabled = false; sendNotification("VFX Gun OFF", false) },
                    method: () => {
                      try {
                        if (!vfxGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        var target = getGunModTarget()
                        var aimPoint = getGunModAimPoint()
                        var localP = getLocalPlayer()
                        if (target && !target.isNull?.()) {
                          try { target.method("RPC_PlayVFX").invoke(174, aimPoint) } catch(_) {}
                        } else if (localP && !localP.isNull?.()) {
                          try { localP.method("RPC_PlayVFX").invoke(174, aimPoint) } catch(_) {}
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "VFX Gun"
                  },
                      {
                    buttonText: "Prefab Spawn Gun",
                    enableMethod: () => { prefabSpawnGunEnabled = true; sendNotification("Prefab Spawn Gun ON", false) },
                    disableMethod: () => { prefabSpawnGunEnabled = false; sendNotification("Prefab Spawn Gun OFF", false) },
                    method: () => {
                      try {
                        if (!prefabSpawnGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        var aimPoint = getGunModAimPoint()
                        var item = itemIDs[selectedItemIndex % itemIDs.length]
                        spawnNetworkPrefab(item, aimPoint, identityQuaternion)
                        selectedItemIndex = (selectedItemIndex + 1) % itemIDs.length
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Prefab Spawn Gun"
                  },
                      {
                    buttonText: "Revive Gun",
                    enableMethod: () => { reviveGunEnabled = true; sendNotification("Revive Gun ON", false) },
                    disableMethod: () => { reviveGunEnabled = false; sendNotification("Revive Gun OFF", false) },
                    method: () => {
                      try {
                        if (!reviveGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        var target = getGunModTarget()
                        if (target && !target.isNull?.()) {
                          try { target.method("RPC_Revive").invoke() } catch(_) {}
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Revive Gun"
                  },
                      {
                    buttonText: "Color Gun",
                    enableMethod: () => { colorGunEnabled = true; sendNotification("Color Gun ON", false) },
                    disableMethod: () => { colorGunEnabled = false; sendNotification("Color Gun OFF", false) },
                    method: () => {
                      try {
                        if (!colorGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        var target = getGunModTarget()
                        if (target && !target.isNull?.()) {
                          try { target.method("RPC_SetColor").invoke(Math.random(), Math.random(), Math.random(), 1) } catch(_) {}
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Color Gun"
                  },
                      {
                    buttonText: "Freeze Gun",
                    enableMethod: () => { freezeGunEnabled = true; sendNotification("Freeze Gun ON", false) },
                    disableMethod: () => { freezeGunEnabled = false; sendNotification("Freeze Gun OFF", false) },
                    method: () => {
                      try {
                        if (!freezeGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        var target = getGunModTarget()
                        if (target && !target.isNull?.()) {
                          var go = target.method("get_gameObject").invoke()
                          if (go && !go.isNull?.()) {
                            var rb = go.method("GetComponent", 0).inflate(Rigidbody).invoke()
                            if (rb && !rb.isNull?.()) {
                              rb.method("set_linearVelocity").invoke(zeroVector)
                              rb.method("set_angularVelocity").invoke(zeroVector)
                              rb.method("set_isKinematic").invoke(true)
                              setTimeout(function() { try { rb.method("set_isKinematic").invoke(false) } catch(_) {} }, 3000)
                            }
                          }
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Freeze Gun"
                  },
                      {
                    buttonText: "Buff Gun",
                    enableMethod: () => { buffGunEnabled = true; sendNotification("Buff Gun ON", false) },
                    disableMethod: () => { buffGunEnabled = false; sendNotification("Buff Gun OFF", false) },
                    method: () => {
                      try {
                        if (!buffGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        var target = getGunModTarget()
                        if (target && !target.isNull?.()) {
                          try { target.method("RPC_ApplyBuff").invoke(0, 30) } catch(_) {}
                          try { target.method("RPC_ApplyBuff").invoke(1, 30) } catch(_) {}
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Buff Gun"
                  },
                      {
                    buttonText: "Launch Gun",
                    enableMethod: () => { launchGunEnabled = true; sendNotification("Launch Gun ON", false) },
                    disableMethod: () => { launchGunEnabled = false; sendNotification("Launch Gun OFF", false) },
                    method: () => {
                      try {
                        if (!launchGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        var target = getGunModTarget()
                        if (target && !target.isNull?.()) {
                          var fwd = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_forward").invoke()
                          var force = Vector3.method("op_Multiply").invoke(fwd, 8000)
                          target.method("RPC_AddForce").invoke(readVec3Components(force))
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Launch Gun"
                  },
                      {
                    buttonText: "Void Gun",
                    enableMethod: () => { voidGunEnabled = true; sendNotification("Void Gun ON", false) },
                    disableMethod: () => { voidGunEnabled = false; sendNotification("Void Gun OFF", false) },
                    method: () => {
                      try {
                        if (!voidGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        var target = getGunModTarget()
                        if (target && !target.isNull?.()) {
                          try { target.method("RPC_Teleport").invoke([0, -1000, 0]) } catch(_) {}
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Void Gun"
                  },
                      {
                    buttonText: "Blind Gun",
                    enableMethod: () => { blindGunEnabled = true; sendNotification("Blind Gun ON", false) },
                    disableMethod: () => { blindGunEnabled = false; sendNotification("Blind Gun OFF", false) },
                    method: () => {
                      try {
                        if (!blindGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        var target = getGunModTarget()
                        var aimPoint = getGunModAimPoint()
                        if (target && !target.isNull?.()) {
                          try { target.method("RPC_PlayVFX").invoke(180, aimPoint) } catch(_) {}
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Blind Gun"
                  },
                      {
                    buttonText: "Steal Items Gun",
                    enableMethod: () => { stealItemsGunEnabled = true; sendNotification("Steal Items Gun ON", false) },
                    disableMethod: () => { stealItemsGunEnabled = false; sendNotification("Steal Items Gun OFF", false) },
                    method: () => {
                      try {
                        if (!stealItemsGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        var target = getGunModTarget()
                        if (target && !target.isNull?.()) {
                          try { target.method("RPC_Drop").invoke() } catch(_) {}
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Steal Items Gun"
                  },
                      {
                    buttonText: "Push Everyone Gun",
                    enableMethod: () => { pushEveryoneGunEnabled = true; sendNotification("Push Everyone Gun ON", false) },
                    disableMethod: () => { pushEveryoneGunEnabled = false; sendNotification("Push Everyone Gun OFF", false) },
                    method: () => {
                      try {
                        if (!pushEveryoneGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        var fwd = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_forward").invoke()
                        var force = readVec3Components(Vector3.method("op_Multiply").invoke(fwd, 5000))
                        var players = getAllNetPlayersList(false)
                        for (var i = 0; i < players.length; i++) {
                          try { players[i].method("RPC_AddForce").invoke(force) } catch(_) {}
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Push Everyone Gun"
                  },
                      {
                    buttonText: "Kidnap Gun",
                    enableMethod: () => { kidnapGunEnabled = true; sendNotification("Kidnap Gun ON", false) },
                    disableMethod: () => { kidnapGunEnabled = false; sendNotification("Kidnap Gun OFF", false) },
                    method: () => {
                      try {
                        if (!kidnapGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        var target = getGunModTarget()
                        if (target && !target.isNull?.()) {
                          var handPos = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_position").invoke()
                          try { target.method("RPC_Teleport").invoke(readVec3Components(handPos)) } catch(_) {}
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Kidnap Gun"
                  },
                      {
                    buttonText: "Kidnap With Grip",
                    method: () => {
                      try {
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld) return
                        var target = getGunModTarget()
                        if (target && !target.isNull?.()) {
                          var handPos = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_position").invoke()
                          try { target.method("RPC_Teleport").invoke(readVec3Components(handPos)) } catch(_) {}
                        }
                      } catch(_) {}
                    },
                    isTogglable: false,
                    toolTip: "Kidnap With Grip"
                  },
                      {
                    buttonText: "Give Fly Gun",
                    enableMethod: () => { giveFlyGunEnabled = true; sendNotification("Give Fly Gun ON", false) },
                    disableMethod: () => { giveFlyGunEnabled = false; sendNotification("Give Fly Gun OFF", false) },
                    method: () => {
                      try {
                        if (!giveFlyGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        var target = getGunModTarget()
                        if (target && !target.isNull?.()) {
                          try { target.method("RPC_SetFlyEnabled").invoke(true) } catch(_) {}
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Give Fly Gun"
                  },
                      {
                    buttonText: "Rig Gun",
                    enableMethod: () => { rigGunEnabled = true; sendNotification("Rig Gun ON", false) },
                    disableMethod: () => { rigGunEnabled = false; sendNotification("Rig Gun OFF", false) },
                    method: () => {
                      try {
                        if (!rigGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        var target = getGunModTarget()
                        var aimPoint = getGunModAimPoint()
                        if (target && !target.isNull?.()) {
                          try { target.method("RPC_PlayVFX").invoke(183, aimPoint) } catch(_) {}
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Rig Gun"
                  },
                      {
                    buttonText: "Force Grab",
                    method: () => {
                      try {
                        var handPos = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_position").invoke()
                        var itemClass = AssemblyCSharp.class("AnimalCompany.GrabbableObject")
                        var allItems = Object.method("FindObjectsByType", 0).inflate(itemClass).invoke(0)
                        if (allItems && allItems.length > 0) {
                          var closest = null
                          var closestDist = 999999
                          for (var i = 0; i < Math.min(allItems.length, 50); i++) {
                            try {
                              var itemGo = allItems.get(i).method("get_gameObject").invoke()
                              if (!itemGo || itemGo.isNull?.()) continue
                              var t = getTransform(itemGo)
                              var pos = t.method("get_position").invoke()
                              var dist = Vector3.method("Distance").invoke(handPos, pos)
                              if (dist < closestDist) { closestDist = dist; closest = t }
                            } catch(_) {}
                          }
                          if (closest && closestDist < 10) {
                            closest.method("set_position").invoke(handPos)
                          }
                        }
                      } catch(e) { console.error("[ForceGrab]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Force Grab"
                  },
                      {
                    buttonText: "Force Grab Gun",
                    enableMethod: () => { forceGrabGunEnabled = true; sendNotification("Force Grab Gun ON", false) },
                    disableMethod: () => { forceGrabGunEnabled = false; sendNotification("Force Grab Gun OFF", false) },
                    method: () => {
                      try {
                        if (!forceGrabGunEnabled) return
                        var triggerHeld = righthand ? leftTrigger : rightTrigger
                        var gripHeld = righthand ? leftGrab : rightGrab
                        if (!gripHeld || !triggerHeld) return
                        var rayData = doGunRaycast()
                        if (rayData.hit && rayData.collider && !rayData.collider.isNull?.()) {
                          var go = rayData.collider.method("get_gameObject").invoke()
                          if (go && !go.isNull?.()) {
                            var handPos = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_position").invoke()
                            getTransform(go).method("set_position").invoke(handPos)
                          }
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Force Grab Gun"
                  },
                      {
                    buttonText: "Delete Held Item",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        try { localP.method("RPC_Drop").invoke() } catch(_) {}
                        sendNotification("Deleted held item", false, 2)
                      } catch(e) { console.error("[DeleteHeld]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Delete Held Item"
                  }
            ]
        }
        ,
        {
            category: "blueprints",
            entries: [
                {
                    buttonText: "RPC Kill All",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_DoPlayerDie").invoke(true) } catch(_) {} } sendNotification("Killed all!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Kill All"
                  },
                      {
                    buttonText: "RPC Revive All",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_Revive").invoke() } catch(_) {} } sendNotification("Revived all!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Revive All"
                  },
                      {
                    buttonText: "RPC Stun All",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { var pos = getTransform(p[i]).method("get_position").invoke(); p[i].method("RPC_PlayerStun").invoke(pos, 5, 5, 1) } catch(_) {} } sendNotification("Stunned all!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Stun All"
                  },
                      {
                    buttonText: "RPC Bounce All",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_AddForce").invoke([0, 3000, 0]) } catch(_) {} } sendNotification("Bounced all!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Bounce All"
                  },
                      {
                    buttonText: "RPC Launch All",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_AddForce").invoke([(Math.random()-0.5)*2000, 5000, (Math.random()-0.5)*2000]) } catch(_) {} } sendNotification("Launched all!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Launch All"
                  },
                      {
                    buttonText: "Launch All Down",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_AddForce").invoke([0, -8000, 0]) } catch(_) {} } sendNotification("Launched all down!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Launch All Down"
                  },
                      {
                    buttonText: "RPC TP All 2 Me",
                    method: () => { try { var lp = getLocalPlayer(); if (!lp || lp.isNull?.()) return; var pos = getTransform(lp).method("get_position").invoke(); var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_Teleport").invoke(readVec3Components(pos)) } catch(_) {} } sendNotification("TP'd all to me!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC TP All 2 Me"
                  },
                      {
                    buttonText: "RPC TP All 2 Void",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_Teleport").invoke([0, -1000, 0]) } catch(_) {} } sendNotification("TP'd all to void!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC TP All 2 Void"
                  },
                      {
                    buttonText: "RPC Shake All Screens",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_ShakeScreen").invoke() } catch(_) {} } sendNotification("Shook all screens!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Shake All Screens"
                  },
                      {
                    buttonText: "RPC Force Ragdoll",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_ForceRagdoll").invoke(true) } catch(_) {} } sendNotification("Ragdolled all!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Force Ragdoll"
                  },
                      {
                    buttonText: "RPC Tag Stinky All",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_SetStinky").invoke(true) } catch(_) {} } sendNotification("Stinkied all!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Tag Stinky All"
                  },
                      {
                    buttonText: "RPC Hit All 50",
                    method: () => { try { var dmg = AssemblyCSharp.class("AnimalCompany.DamageSourceInfo").method("get_Null").invoke(); var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { var pos = getTransform(p[i]).method("get_position").invoke(); p[i].method("RPC_PlayerHit").invoke(50, pos, dmg) } catch(_) {} } sendNotification("Hit all for 50!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Hit All 50"
                  },
                      {
                    buttonText: "RPC Explode All Items",
                    method: () => { try { var cls = AssemblyCSharp.class("AnimalCompany.GrabbableObject"); var items = Object.method("FindObjectsByType", 0).inflate(cls).invoke(0); if (items) { for (var i = 0; i < items.length; i++) { try { items.get(i).method("RPC_BlowUp").invoke() } catch(_) {} } } sendNotification("Exploded all items!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Explode All Items"
                  },
                      {
                    buttonText: "RPC Explode All Bags",
                    method: () => { try { var cls = AssemblyCSharp.class("AnimalCompany.BackpackItem"); var bags = Object.method("FindObjectsByType", 0).inflate(cls).invoke(0); if (bags) { for (var i = 0; i < bags.length; i++) { try { bags.get(i).method("RPC_Explode").invoke() } catch(_) {} } } sendNotification("Exploded all bags!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Explode All Bags"
                  },
                      {
                    buttonText: "RPC Set Red Team",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_SetTeam").invoke(0) } catch(_) {} } sendNotification("Set all to red team", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Set Red Team"
                  },
                      {
                    buttonText: "RPC Set Blue Team",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_SetTeam").invoke(1) } catch(_) {} } sendNotification("Set all to blue team", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Set Blue Team"
                  },
                      {
                    buttonText: "RPC Buff All Speed",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_ApplyBuff").invoke(0, 30) } catch(_) {} } sendNotification("Speed buffed all!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Buff All Speed"
                  },
                      {
                    buttonText: "RPC Buff All Damage",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_ApplyBuff").invoke(1, 30) } catch(_) {} } sendNotification("Damage buffed all!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Buff All Damage"
                  },
                      {
                    buttonText: "RPC Force All Invisible",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("set_isHide").invoke(true) } catch(_) {} } sendNotification("Hid all players!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Force All Invisible"
                  },
                      {
                    buttonText: "RPC Force All Visible",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("set_isHide").invoke(false) } catch(_) {} } sendNotification("Showed all players!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Force All Visible"
                  },
                      {
                    buttonText: "RPC Give Me Invincible",
                    method: () => { try { var lp = getLocalPlayer(); if (!lp || lp.isNull?.()) return; try { lp.method("set_isInvincible").invoke(true) } catch(_) {} sendNotification("Invincible!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Give Me Invincible"
                  },
                      {
                    buttonText: "RPC Give Me Money",
                    method: () => { try { var lp = getLocalPlayer(); if (!lp || lp.isNull?.()) return; try { lp.method("RPC_AddPlayerMoney").invoke(10000000) } catch(_) {} sendNotification("+$10M!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Give Me Money"
                  },
                      {
                    buttonText: "RPC Money All +10M",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_AddPlayerMoney").invoke(10000000) } catch(_) {} } sendNotification("Gave $10M to all!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Money All +10M"
                  },
                      {
                    buttonText: "RPC Money Drain All",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_AddPlayerMoney").invoke(-999999999) } catch(_) {} } sendNotification("Drained all money!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Money Drain All"
                  },
                      {
                    buttonText: "RPC Color All Red",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_SetColor").invoke(1, 0, 0, 1) } catch(_) {} } sendNotification("All red!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Color All Red"
                  },
                      {
                    buttonText: "RPC Color All Blue",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_SetColor").invoke(0, 0, 1, 1) } catch(_) {} } sendNotification("All blue!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Color All Blue"
                  },
                      {
                    buttonText: "RPC Color All Green",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_SetColor").invoke(0, 1, 0, 1) } catch(_) {} } sendNotification("All green!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Color All Green"
                  },
                      {
                    buttonText: "RPC Color All Purple",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_SetColor").invoke(0.5, 0, 0.5, 1) } catch(_) {} } sendNotification("All purple!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Color All Purple"
                  },
                      {
                    buttonText: "RPC Color All Pink",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_SetColor").invoke(1, 0.5, 0.8, 1) } catch(_) {} } sendNotification("All pink!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Color All Pink"
                  },
                      {
                    buttonText: "RPC Heal Me",
                    method: () => { try { var lp = getLocalPlayer(); if (!lp || lp.isNull?.()) return; try { lp.field("healthPoints").value = 99999 } catch(_) {} try { lp.method("RPC_Revive").invoke() } catch(_) {} sendNotification("Healed!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Heal Me"
                  },
                      {
                    buttonText: "RPC Self Buff All",
                    method: () => { try { var lp = getLocalPlayer(); if (!lp || lp.isNull?.()) return; try { lp.method("RPC_ApplyBuff").invoke(0, 60) } catch(_) {} try { lp.method("RPC_ApplyBuff").invoke(1, 60) } catch(_) {} try { lp.method("set_isInvincible").invoke(true) } catch(_) {} sendNotification("Self buffed all!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Self Buff All"
                  },
                      {
                    buttonText: "RPC Explosive Launch Me",
                    method: () => { try { var lp = getLocalPlayer(); if (!lp || lp.isNull?.()) return; lp.method("RPC_AddForce").invoke([0, 15000, 0]); sendNotification("Explosive launch!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Explosive Launch Me"
                  },
                      {
                    buttonText: "RPC Stun Me",
                    method: () => { try { var lp = getLocalPlayer(); if (!lp || lp.isNull?.()) return; var pos = getTransform(lp).method("get_position").invoke(); lp.method("RPC_PlayerStun").invoke(pos, 10, 5, 1); sendNotification("Stunned self!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Stun Me"
                  },
                      {
                    buttonText: "RPC Teleport Up",
                    method: () => { try { var lp = getLocalPlayer(); if (!lp || lp.isNull?.()) return; var pos = getTransform(lp).method("get_position").invoke(); lp.method("RPC_Teleport").invoke([pos.field("x").value, pos.field("y").value + 50, pos.field("z").value]); sendNotification("Teleported up!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Teleport Up"
                  },
                      {
                    buttonText: "RPC VFX Spam",
                    method: () => { try { var lp = getLocalPlayer(); if (!lp || lp.isNull?.()) return; var pos = getTransform(lp).method("get_position").invoke(); var v = [174, 180, 33, 42, 183, 44, 39, 40, 41]; for (var i = 0; i < v.length; i++) { try { lp.method("RPC_PlayVFX").invoke(v[i], pos) } catch(_) {} } sendNotification("VFX spam!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC VFX Spam"
                  },
                      {
                    buttonText: "RPC VFX All Spam",
                    method: () => { try { var p = getAllNetPlayersList(false); var v = [174, 180, 33, 42, 183, 44]; for (var i = 0; i < p.length; i++) { try { var pos = getTransform(p[i]).method("get_position").invoke(); for (var j = 0; j < 5; j++) { p[i].method("RPC_PlayVFX").invoke(v[j % v.length], pos) } } catch(_) {} } sendNotification("VFX all spam!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC VFX All Spam"
                  },
                      {
                    buttonText: "RPC Buff Scale Big All",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { var go = p[i].method("get_gameObject").invoke(); if (go && !go.isNull?.()) getTransform(go).method("set_localScale").invoke([2, 2, 2]) } catch(_) {} } sendNotification("Scaled all big!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Buff Scale Big All"
                  },
                      {
                    buttonText: "RPC Award Kill All",
                    method: () => { try { var lp = getLocalPlayer(); if (!lp || lp.isNull?.()) return; var dmg = AssemblyCSharp.class("AnimalCompany.DamageSourceInfo").method("get_Null").invoke(); var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { var pos = getTransform(p[i]).method("get_position").invoke(); lp.method("RPC_PlayerHit").invoke(999, pos, dmg) } catch(_) {} } sendNotification("Award kill all!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "RPC Award Kill All"
                  }
            ]
        }
    ];
    const TEMPLATE_MENU_CATEGORIES = [
        {
            title: "Other Players",
            toolTip: "Other Players mods",
            entries: [
                {
                    buttonText: "Jelly All",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_SetJellyEffect").invoke(true) } catch(_) {} } sendNotification("Jellied all!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Jelly All"
                  },
                      {
                    buttonText: "Muffle All Voices",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_SetMuffledVoiceEnabled").invoke(true) } catch(_) {} } sendNotification("Muffled all!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Muffle All Voices"
                  },
                      {
                    buttonText: "Squeaky All Voices",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_SetSqueakyVoiceEnabled").invoke(true) } catch(_) {} } sendNotification("Squeakied all!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Squeaky All Voices"
                  },
                      {
                    buttonText: "Radioactive All",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_SetRadioActive").invoke(true) } catch(_) {} } sendNotification("Radioactive all!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Radioactive All"
                  },
                      {
                    buttonText: "Stinky All",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_SetStinky").invoke(true) } catch(_) {} } sendNotification("Stinkied all!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Stinky All"
                  },
                      {
                    buttonText: "Shake All Screens",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_ShakeScreen").invoke() } catch(_) {} } sendNotification("Shook all screens!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Shake All Screens"
                  },
                      {
                    buttonText: "Hide All Players",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("set_isHide").invoke(true) } catch(_) {} } sendNotification("Hid all players!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Hide All Players"
                  },
                      {
                    buttonText: "Show All Players",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("set_isHide").invoke(false) } catch(_) {} } sendNotification("Showed all players!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Show All Players"
                  },
                      {
                    buttonText: "Scale All Tiny",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { var go = p[i].method("get_gameObject").invoke(); if (go && !go.isNull?.()) getTransform(go).method("set_localScale").invoke([0.1, 0.1, 0.1]) } catch(_) {} } sendNotification("Scaled all tiny!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Scale All Tiny"
                  },
                      {
                    buttonText: "Scale All Big",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { var go = p[i].method("get_gameObject").invoke(); if (go && !go.isNull?.()) getTransform(go).method("set_localScale").invoke([2, 2, 2]) } catch(_) {} } sendNotification("Scaled all big!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Scale All Big"
                  },
                      {
                    buttonText: "Scale All Normal",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { var go = p[i].method("get_gameObject").invoke(); if (go && !go.isNull?.()) getTransform(go).method("set_localScale").invoke([1, 1, 1]) } catch(_) {} } sendNotification("Scaled all normal!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Scale All Normal"
                  },
                      {
                    buttonText: "Color All Red",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_SetColor").invoke(1, 0, 0, 1) } catch(_) {} } sendNotification("Colored all red!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Color All Red"
                  },
                      {
                    buttonText: "Color All Blue",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_SetColor").invoke(0, 0, 1, 1) } catch(_) {} } sendNotification("Colored all blue!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Color All Blue"
                  },
                      {
                    buttonText: "Color All Green",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_SetColor").invoke(0, 1, 0, 1) } catch(_) {} } sendNotification("Colored all green!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Color All Green"
                  },
                      {
                    buttonText: "Color All Purple",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_SetColor").invoke(0.5, 0, 0.5, 1) } catch(_) {} } sendNotification("Colored all purple!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Color All Purple"
                  },
                      {
                    buttonText: "Color All Pink",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_SetColor").invoke(1, 0.5, 0.8, 1) } catch(_) {} } sendNotification("Colored all pink!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Color All Pink"
                  },
                      {
                    buttonText: "Color All Yellow",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_SetColor").invoke(1, 1, 0, 1) } catch(_) {} } sendNotification("Colored all yellow!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Color All Yellow"
                  },
                      {
                    buttonText: "Rainbow All Items",
                    method: () => { try { var cls = AssemblyCSharp.class("AnimalCompany.GrabbableObject"); var items = Object.method("FindObjectsByType", 0).inflate(cls).invoke(0); if (items) { for (var i = 0; i < Math.min(items.length, 50); i++) { try { var r = items.get(i).method("get_gameObject").invoke(); if (r && !r.isNull?.()) { var renderer = r.method("GetComponent", 0).inflate(Renderer).invoke(); if (renderer && !renderer.isNull?.()) { var mat = renderer.method("get_material").invoke(); mat.method("set_color").invoke([Math.random(), Math.random(), Math.random(), 1]) } } } catch(_) {} } } sendNotification("Rainbowed all items!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Rainbow All Items"
                  },
                      {
                    buttonText: "Remove All Gravity",
                    method: () => { try { var items = Object.method("FindObjectsByType", 0).inflate(Rigidbody).invoke(0); if (items) { for (var i = 0; i < items.length; i++) { try { items.get(i).method("set_useGravity").invoke(false); items.get(i).method("set_linearVelocity").invoke([0, 2, 0]) } catch(_) {} } } sendNotification("Removed all gravity!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Remove All Gravity"
                  },
                      {
                    buttonText: "Sell All Items",
                    method: () => { try { var cls = AssemblyCSharp.class("AnimalCompany.GrabbableObject"); var items = Object.method("FindObjectsByType", 0).inflate(cls).invoke(0); if (items) { for (var i = 0; i < items.length; i++) { try { items.get(i).method("RPC_Sell").invoke() } catch(_) {} } } sendNotification("Sold all items!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Sell All Items"
                  },
                      {
                    buttonText: "Delete All Lobby Items",
                    method: () => { try { var cls = AssemblyCSharp.class("AnimalCompany.GrabbableObject"); var items = Object.method("FindObjectsByType", 0).inflate(cls).invoke(0); if (items) { for (var i = 0; i < items.length; i++) { try { var go = items.get(i).method("get_gameObject").invoke(); if (go && !go.isNull?.()) Destroy(go) } catch(_) {} } } sendNotification("Deleted all lobby items!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Delete All Lobby Items"
                  },
                      {
                    buttonText: "Lag All Items",
                    method: () => { try { var items = Object.method("FindObjectsByType", 0).inflate(Rigidbody).invoke(0); if (items) { for (var i = 0; i < items.length; i++) { try { items.get(i).method("set_maxAngularVelocity").invoke(1000); items.get(i).method("AddForce").invoke([(Math.random()-0.5)*5000, Math.random()*3000, (Math.random()-0.5)*5000]) } catch(_) {} } } sendNotification("Lagged all items!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Lag All Items"
                  },
                      {
                    buttonText: "Cage All Players",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { var pos = getTransform(p[i]).method("get_position").invoke(); for (var j = 0; j < 6; j++) { var off = [[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]][j]; var boxPos = [pos.field("x").value+off[0]*0.6, pos.field("y").value+off[1]*0.6, pos.field("z").value+off[2]*0.6]; spawnNetworkPrefab("item_crate", boxPos, identityQuaternion) } } catch(_) {} } sendNotification("Caged all players!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Cage All Players"
                  },
                      {
                    buttonText: "Piss Mod",
                    enableMethod: () => { pissModEnabled = true; sendNotification("Piss Mod ON", false) },
                    disableMethod: () => { pissModEnabled = false; sendNotification("Piss Mod OFF", false) },
                    method: () => { try { if (!pissModEnabled) return; var lp = getLocalPlayer(); if (!lp || lp.isNull?.()) return; var pos = getTransform(lp).method("get_position").invoke(); lp.method("RPC_PlayVFX").invoke(182, [pos.field("x").value, pos.field("y").value - 0.5, pos.field("z").value]) } catch(_) {} },
                    isTogglable: true,
                    toolTip: "Piss Mod"
                  },
                      {
                    buttonText: "Orbit Players",
                    enableMethod: () => { orbitPlayersEnabled2 = true; sendNotification("Orbit Players ON", false) },
                    disableMethod: () => { orbitPlayersEnabled2 = false; sendNotification("Orbit Players OFF", false) },
                    method: () => { try { if (!orbitPlayersEnabled2) return; var lp = getLocalPlayer(); if (!lp || lp.isNull?.()) return; var myPos = getTransform(lp).method("get_position").invoke(); var p = getAllNetPlayersList(false); orbitAngle += deltaTime * 2; for (var i = 0; i < p.length; i++) { try { var angle = orbitAngle + (Math.PI * 2 / p.length) * i; var tp = [myPos.field("x").value + Math.cos(angle) * 3, myPos.field("y").value + 1, myPos.field("z").value + Math.sin(angle) * 3]; p[i].method("RPC_Teleport").invoke(tp) } catch(_) {} } } catch(_) {} },
                    isTogglable: true,
                    toolTip: "Orbit Players"
                  },
                      {
                    buttonText: "Orbit Players Fast",
                    enableMethod: () => { orbitPlayersFastEnabled = true; sendNotification("Orbit Players Fast ON", false) },
                    disableMethod: () => { orbitPlayersFastEnabled = false; sendNotification("Orbit Players Fast OFF", false) },
                    method: () => { try { if (!orbitPlayersFastEnabled) return; var lp = getLocalPlayer(); if (!lp || lp.isNull?.()) return; var myPos = getTransform(lp).method("get_position").invoke(); var p = getAllNetPlayersList(false); orbitAngle += deltaTime * 8; for (var i = 0; i < p.length; i++) { try { var angle = orbitAngle + (Math.PI * 2 / p.length) * i; var tp = [myPos.field("x").value + Math.cos(angle) * 2, myPos.field("y").value + 1, myPos.field("z").value + Math.sin(angle) * 2]; p[i].method("RPC_Teleport").invoke(tp) } catch(_) {} } } catch(_) {} },
                    isTogglable: true,
                    toolTip: "Orbit Players Fast"
                  },
                      {
                    buttonText: "Give All Coins",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { var pos = getTransform(p[i]).method("get_position").invoke(); spawnNetworkPrefab("item_goldcoin", [pos.field("x").value, pos.field("y").value + 1, pos.field("z").value], identityQuaternion) } catch(_) {} } sendNotification("Gave coins to all!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Give All Coins"
                  },
                      {
                    buttonText: "Bounce All",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_AddForce").invoke([0, 3000, 0]) } catch(_) {} } sendNotification("Bounced all!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Bounce All"
                  },
                      {
                    buttonText: "Rainbow All",
                    method: () => { try { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_SetColor").invoke(Math.random(), Math.random(), Math.random(), 1) } catch(_) {} } sendNotification("Rainbowed all!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Rainbow All"
                  }
            ]
        }
        ,
        {
            title: "Exploits",
            toolTip: "Exploits mods",
            entries: [
                {
                    buttonText: "Bypass Sell Limit",
                    enableMethod: () => { bypassSellLimitEnabled = true; installSellValueMult(); sendNotification("Bypass Sell Limit ON", false) },
                    disableMethod: () => { bypassSellLimitEnabled = false; sendNotification("Bypass Sell Limit OFF", false) },
                    method: () => {},
                    isTogglable: true,
                    toolTip: "Bypass Sell Limit"
                  },
                      {
                    buttonText: "Sell Value MAX",
                    method: () => { try { var cls = AssemblyCSharp.class("AnimalCompany.GrabbableObject"); var methods = cls.methods; for (var i = 0; i < methods.length; i++) { try { var n = methods[i].name.to(); if (n.includes("sellValue") || n.includes("SellValue")) { methods[i].implementation = function() { return 300000 } } } catch(_) {} } sendNotification("Sell Value MAX!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Sell Value MAX"
                  },
                      {
                    buttonText: "Sell Value Reset",
                    method: () => { try { sendNotification("Sell Value reset (reload needed)", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Sell Value Reset"
                  },
                      {
                    buttonText: "Save Machine No Limit",
                    enableMethod: () => { sendNotification("Save Machine No Limit ON", false) },
                    disableMethod: () => { sendNotification("Save Machine No Limit OFF", false) },
                    method: () => {},
                    isTogglable: true,
                    toolTip: "Save Machine No Limit"
                  },
                      {
                    buttonText: "No Container Restrictions",
                    enableMethod: () => { containerFreedomEnabled = true; installContainerFreedom(); sendNotification("No Container Restrictions ON", false) },
                    disableMethod: () => { containerFreedomEnabled = false; sendNotification("No Container Restrictions OFF", false) },
                    method: () => {},
                    isTogglable: true,
                    toolTip: "No Container Restrictions"
                  },
                      {
                    buttonText: "Grant All Stash Slots",
                    method: () => { grantAllStashSlots(); sendNotification("All stash slots granted!", false, 2) },
                    isTogglable: false,
                    toolTip: "Grant All Stash Slots"
                  },
                      {
                    buttonText: "Stash Dupe",
                    enableMethod: () => { stashDupeEnabled = true; sendNotification("Stash Dupe ON", false) },
                    disableMethod: () => { stashDupeEnabled = false; sendNotification("Stash Dupe OFF", false) },
                    method: () => {},
                    isTogglable: true,
                    toolTip: "Stash Dupe"
                  },
                      {
                    buttonText: "Right Hand Duper",
                    enableMethod: () => { rightHandDuperEnabled = true; sendNotification("Right Hand Duper ON", false) },
                    disableMethod: () => { rightHandDuperEnabled = false; sendNotification("Right Hand Duper OFF", false) },
                    method: () => {},
                    isTogglable: true,
                    toolTip: "Right Hand Duper"
                  },
                      {
                    buttonText: "Multi Buy",
                    enableMethod: () => { multiBuyEnabled = true; installMultiBuyHook(); sendNotification("Multi Buy ON", false) },
                    disableMethod: () => { multiBuyEnabled = false; sendNotification("Multi Buy OFF", false) },
                    method: () => {},
                    isTogglable: true,
                    toolTip: "Multi Buy"
                  },
                      {
                    buttonText: "Change Multi Buy",
                    method: () => { sendNotification("Multi buy active - buy items freely", false, 2) },
                    isTogglable: false,
                    toolTip: "Change Multi Buy"
                  },
                      {
                    buttonText: "Dev Mode",
                    enableMethod: () => { enableDevMode(); sendNotification("Dev Mode ON", false) },
                    disableMethod: () => { sendNotification("Dev Mode OFF (restart to apply)", false) },
                    method: () => {},
                    isTogglable: true,
                    toolTip: "Dev Mode"
                  },
                      {
                    buttonText: "Force Dev Mode",
                    enableMethod: () => { forceDevModeEnabled = true; enableDevMode(); sendNotification("Force Dev Mode ON", false) },
                    disableMethod: () => { forceDevModeEnabled = false; sendNotification("Force Dev Mode OFF", false) },
                    method: () => { try { if (!forceDevModeEnabled) return; enableDevMode() } catch(_) {} },
                    isTogglable: true,
                    toolTip: "Force Dev Mode"
                  },
                      {
                    buttonText: "Unlock All",
                    method: () => { try { grantAllStashSlots(); enableDevMode(); sendNotification("Unlocked all!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Unlock All"
                  },
                      {
                    buttonText: "Give Masterclient",
                    enableMethod: () => { sendNotification("Give Masterclient ON", false) },
                    disableMethod: () => { sendNotification("Give Masterclient OFF", false) },
                    method: () => { try { var lp = getLocalPlayer(); if (!lp || lp.isNull?.()) return; try { lp.method("set_isMasterClient").invoke(true) } catch(_) {} } catch(_) {} },
                    isTogglable: true,
                    toolTip: "Give Masterclient"
                  },
                      {
                    buttonText: "Block RPCs",
                    enableMethod: () => { blockRPCsEnabled = true; installRPCProtection(); sendNotification("Block RPCs ON", false) },
                    disableMethod: () => { blockRPCsEnabled = false; sendNotification("Block RPCs OFF", false) },
                    method: () => {},
                    isTogglable: true,
                    toolTip: "Block RPCs"
                  },
                      {
                    buttonText: "Spoof Photon ID",
                    enableMethod: () => { spoofPhotonIDEnabled = true; sendNotification("Spoof Photon ID ON", false) },
                    disableMethod: () => { spoofPhotonIDEnabled = false; sendNotification("Spoof Photon ID OFF", false) },
                    method: () => {},
                    isTogglable: true,
                    toolTip: "Spoof Photon ID"
                  },
                      {
                    buttonText: "No Gravity On Held Item",
                    enableMethod: () => { noGravityHeldEnabled = true; sendNotification("No Gravity Held ON", false) },
                    disableMethod: () => { noGravityHeldEnabled = false; sendNotification("No Gravity Held OFF", false) },
                    method: () => { try { if (!noGravityHeldEnabled) return; var lp = getLocalPlayer(); if (!lp || lp.isNull?.()) return; var go = lp.method("get_gameObject").invoke(); if (!go || go.isNull?.()) return; var rbs = go.method("GetComponentsInChildren", 0).inflate(Rigidbody).invoke(true); if (rbs) { for (var i = 0; i < rbs.length; i++) { try { rbs.get(i).method("set_useGravity").invoke(false) } catch(_) {} } } } catch(_) {} },
                    isTogglable: true,
                    toolTip: "No Gravity On Held Item"
                  },
                      {
                    buttonText: "No Gravity All Items",
                    enableMethod: () => { noGravityAllItemsEnabled = true; sendNotification("No Gravity All Items ON", false) },
                    disableMethod: () => { noGravityAllItemsEnabled = false; sendNotification("No Gravity All Items OFF", false) },
                    method: () => { try { if (!noGravityAllItemsEnabled) return; var rbs = Object.method("FindObjectsByType", 0).inflate(Rigidbody).invoke(0); if (rbs) { for (var i = 0; i < rbs.length; i++) { try { rbs.get(i).method("set_useGravity").invoke(false) } catch(_) {} } } } catch(_) {} },
                    isTogglable: true,
                    toolTip: "No Gravity All Items"
                  },
                      {
                    buttonText: "Rainbow Held Item",
                    enableMethod: () => { rainbowHeldEnabled = true; sendNotification("Rainbow Held ON", false) },
                    disableMethod: () => { rainbowHeldEnabled = false; sendNotification("Rainbow Held OFF", false) },
                    method: () => { try { if (!rainbowHeldEnabled) return; var lp = getLocalPlayer(); if (!lp || lp.isNull?.()) return; var go = lp.method("get_gameObject").invoke(); if (!go || go.isNull?.()) return; var renderers = go.method("GetComponentsInChildren", 0).inflate(Renderer).invoke(true); if (renderers) { for (var i = 0; i < renderers.length; i++) { try { var mat = renderers.get(i).method("get_material").invoke(); mat.method("set_color").invoke([Math.sin(time*3)*0.5+0.5, Math.sin(time*3+2)*0.5+0.5, Math.sin(time*3+4)*0.5+0.5, 1]) } catch(_) {} } } } catch(_) {} },
                    isTogglable: true,
                    toolTip: "Rainbow Held Item"
                  },
                      {
                    buttonText: "Lock Item Position",
                    enableMethod: () => { lockItemPosEnabled = true; sendNotification("Lock Item Position ON", false) },
                    disableMethod: () => { lockItemPosEnabled = false; sendNotification("Lock Item Position OFF", false) },
                    method: () => {},
                    isTogglable: true,
                    toolTip: "Lock Item Position"
                  }
            ]
        }
        ,
        {
            title: "Spammers",
            toolTip: "Spammers mods",
            entries: [
                {
                    buttonText: "Goop Spammer",
                    enableMethod: () => { goopSpammerEnabled = true; sendNotification("Goop Spammer ON", false) },
                    disableMethod: () => { goopSpammerEnabled = false; sendNotification("Goop Spammer OFF", false) },
                    isTogglable: true,
                    toolTip: "Goop Spammer",
                    method: () => { rpcLoopFrameCounter++; if (rpcLoopFrameCounter % 30 !== 0) return; try { var lp = getLocalPlayer(); if (!lp || lp.isNull?.()) return; var pos = getTransform(lp).method("get_position").invoke(); spawnNetworkPrefab("item_goop", [pos.field("x").value+(Math.random()-0.5)*3, pos.field("y").value+2, pos.field("z").value+(Math.random()-0.5)*3], identityQuaternion) } catch(_) {} }
                  },
                      {
                    buttonText: "Goopfish Pointer Spammer",
                    enableMethod: () => { goopfishPointerSpammerEnabled = true; sendNotification("Goopfish Pointer ON", false) },
                    disableMethod: () => { goopfishPointerSpammerEnabled = false; sendNotification("Goopfish Pointer OFF", false) },
                    isTogglable: true,
                    toolTip: "Goopfish Pointer Spammer",
                    method: () => { rpcLoopFrameCounter++; if (rpcLoopFrameCounter % 20 !== 0) return; try { var pos = getTransform(righthand ? rightHandTransform : leftHandTransform).method("get_position").invoke(); spawnNetworkPrefab("item_goopfish", [pos.field("x").value, pos.field("y").value, pos.field("z").value], identityQuaternion) } catch(_) {} }
                  },
                      {
                    buttonText: "Mimic Spammer",
                    enableMethod: () => { mimicSpammerEnabled = true; sendNotification("Mimic Spammer ON", false) },
                    disableMethod: () => { mimicSpammerEnabled = false; sendNotification("Mimic Spammer OFF", false) },
                    isTogglable: true,
                    toolTip: "Mimic Spammer",
                    method: () => { rpcLoopFrameCounter++; if (rpcLoopFrameCounter % 30 !== 0) return; try { var pos = getTransform(righthand ? rightHandTransform : leftHandTransform).method("get_position").invoke(); var fwd = getTransform(righthand ? rightHandTransform : leftHandTransform).method("get_forward").invoke(); var sp = Vector3.method("op_Addition").invoke(pos, Vector3.method("op_Multiply").invoke(fwd, 2)); spawnMobAtPos({name:"Mimic", id:31}, sp, identityQuaternion) } catch(_) {} }
                  },
                      {
                    buttonText: "Swarm Spammer",
                    enableMethod: () => { swarmSpammerEnabled = true; sendNotification("Swarm Spammer ON", false) },
                    disableMethod: () => { swarmSpammerEnabled = false; sendNotification("Swarm Spammer OFF", false) },
                    isTogglable: true,
                    toolTip: "Swarm Spammer",
                    method: () => { rpcLoopFrameCounter++; if (rpcLoopFrameCounter % 25 !== 0) return; try { var pos = getTransform(righthand ? rightHandTransform : leftHandTransform).method("get_position").invoke(); var fwd = getTransform(righthand ? rightHandTransform : leftHandTransform).method("get_forward").invoke(); var sp = Vector3.method("op_Addition").invoke(pos, Vector3.method("op_Multiply").invoke(fwd, 2)); spawnMobAtPos({name:"FlyingSwarm", id:20}, sp, identityQuaternion) } catch(_) {} }
                  },
                      {
                    buttonText: "Elevator Spam",
                    enableMethod: () => { elevatorSpamEnabled = true; sendNotification("Elevator Spam ON", false) },
                    disableMethod: () => { elevatorSpamEnabled = false; sendNotification("Elevator Spam OFF", false) },
                    isTogglable: true,
                    toolTip: "Elevator Spam",
                    method: () => { rpcLoopFrameCounter++; if (rpcLoopFrameCounter % 15 !== 0) return; try { var lp = getLocalPlayer(); if (!lp || lp.isNull?.()) return; var pos = getTransform(lp).method("get_position").invoke(); spawnNetworkPrefab("item_trampoline", [pos.field("x").value, pos.field("y").value-1, pos.field("z").value], identityQuaternion) } catch(_) {} }
                  },
                      {
                    buttonText: "Start Arena",
                    method: () => { try { sendNotification("Starting arena...", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Start Arena"
                  },
                      {
                    buttonText: "End Arena",
                    method: () => { try { sendNotification("Ending arena...", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "End Arena"
                  },
                      {
                    buttonText: "Arena Spammer",
                    enableMethod: () => { arenaSpammerEnabled = true; sendNotification("Arena Spammer ON", false) },
                    disableMethod: () => { arenaSpammerEnabled = false; sendNotification("Arena Spammer OFF", false) },
                    isTogglable: true,
                    toolTip: "Arena Spammer",
                    method: () => { rpcLoopFrameCounter++; if (rpcLoopFrameCounter % 20 !== 0) return; try { var lp = getLocalPlayer(); if (!lp || lp.isNull?.()) return; var pos = getTransform(lp).method("get_position").invoke(); var mobs = ["Chicken","Spider","Bomber","Cyst"]; var m = mobs[Math.floor(Math.random()*mobs.length)]; spawnMobAtPos({name:m, id:acMobIdByName[m]||0}, [pos.field("x").value+(Math.random()-0.5)*10, pos.field("y").value+1, pos.field("z").value+(Math.random()-0.5)*10], identityQuaternion) } catch(_) {} }
                  },
                      {
                    buttonText: "Arena ESP",
                    enableMethod: () => { arenaESPEnabled = true; sendNotification("Arena ESP ON", false) },
                    disableMethod: () => { arenaESPEnabled = false; sendNotification("Arena ESP OFF", false) },
                    isTogglable: true,
                    toolTip: "Arena ESP",
                    method: () => {}
                  },
                      {
                    buttonText: "Repeat Voice",
                    enableMethod: () => { repeatVoiceEnabled = true; sendNotification("Repeat Voice ON", false) },
                    disableMethod: () => { repeatVoiceEnabled = false; sendNotification("Repeat Voice OFF", false) },
                    isTogglable: true,
                    toolTip: "Repeat Voice",
                    method: () => {}
                  },
                      {
                    buttonText: "Play Sounds",
                    method: () => { try { spamSFXNetwork(); sendNotification("Played sound!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Play Sounds"
                  },
                      {
                    buttonText: "Reload Sounds",
                    method: () => { try { sendNotification("Sounds reloaded!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Reload Sounds"
                  }
            ]
        }
        ,
        {
            title: "Whitelist/Visual",
            toolTip: "Whitelist/Visual mods",
            entries: [
                {
                    buttonText: "Toggle Whitelist",
                    enableMethod: () => { whitelistEnabled = true; whitelistPlayers = []; sendNotification("Whitelist ON", false) },
                    disableMethod: () => { whitelistEnabled = false; whitelistPlayers = []; sendNotification("Whitelist OFF", false) },
                    isTogglable: true,
                    toolTip: "Toggle Whitelist",
                    method: () => {}
                  },
                      {
                    buttonText: "WL Gun Add",
                    method: () => { try { var target = getGunModTarget(); if (!target || target.isNull?.()) { sendNotification("No target", false, 2); return } if (whitelistPlayers.indexOf(target) === -1) whitelistPlayers.push(target); sendNotification("Added to WL (" + whitelistPlayers.length + ")", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "WL Gun Add"
                  },
                      {
                    buttonText: "WL Gun Remove",
                    method: () => { try { var target = getGunModTarget(); if (!target || target.isNull?.()) { sendNotification("No target", false, 2); return } var idx = whitelistPlayers.indexOf(target); if (idx >= 0) whitelistPlayers.splice(idx, 1); sendNotification("Removed from WL (" + whitelistPlayers.length + ")", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "WL Gun Remove"
                  },
                      {
                    buttonText: "Clear Whitelist",
                    method: () => { whitelistPlayers = []; sendNotification("Whitelist cleared!", false, 2) },
                    isTogglable: false,
                    toolTip: "Clear Whitelist"
                  },
                      {
                    buttonText: "List Whitelist",
                    method: () => { sendNotification("WL: " + whitelistPlayers.length + " players", false, 3) },
                    isTogglable: false,
                    toolTip: "List Whitelist"
                  },
                      {
                    buttonText: "WL Kill Gun",
                    enableMethod: () => { wlKillGunEnabled = true; sendNotification("WL Kill Gun ON", false) },
                    disableMethod: () => { wlKillGunEnabled = false; sendNotification("WL Kill Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL Kill Gun",
                    method: () => { try { if (!wlKillGunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; try { target.method("RPC_DoPlayerDie").invoke(true) } catch(_) {} } } catch(_) {} }
                  },
                      {
                    buttonText: "WL Scale Big Gun",
                    enableMethod: () => { wlScaleBigGunEnabled = true; sendNotification("WL Scale Big Gun ON", false) },
                    disableMethod: () => { wlScaleBigGunEnabled = false; sendNotification("WL Scale Big Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL Scale Big Gun",
                    method: () => { try { if (!wlScaleBigGunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; var go = target.method("get_gameObject").invoke(); if (go && !go.isNull?.()) getTransform(go).method("set_localScale").invoke([2,2,2]) } } catch(_) {} }
                  },
                      {
                    buttonText: "WL Scale Tiny Gun",
                    enableMethod: () => { wlScaleTinyGunEnabled = true; sendNotification("WL Scale Tiny Gun ON", false) },
                    disableMethod: () => { wlScaleTinyGunEnabled = false; sendNotification("WL Scale Tiny Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL Scale Tiny Gun",
                    method: () => { try { if (!wlScaleTinyGunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; var go = target.method("get_gameObject").invoke(); if (go && !go.isNull?.()) getTransform(go).method("set_localScale").invoke([0.1,0.1,0.1]) } } catch(_) {} }
                  },
                      {
                    buttonText: "WL Invisible Gun",
                    enableMethod: () => { wlInvisibleGunEnabled = true; sendNotification("WL Invisible Gun ON", false) },
                    disableMethod: () => { wlInvisibleGunEnabled = false; sendNotification("WL Invisible Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL Invisible Gun",
                    method: () => { try { if (!wlInvisibleGunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; try { target.method("set_isHide").invoke(true) } catch(_) {} } } catch(_) {} }
                  },
                      {
                    buttonText: "WL Money Gun",
                    enableMethod: () => { wlMoneyGunEnabled = true; sendNotification("WL Money Gun ON", false) },
                    disableMethod: () => { wlMoneyGunEnabled = false; sendNotification("WL Money Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL Money Gun",
                    method: () => { try { if (!wlMoneyGunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; try { target.method("RPC_AddPlayerMoney").invoke(10000000) } catch(_) {} } } catch(_) {} }
                  },
                      {
                    buttonText: "WL Stinky Gun",
                    enableMethod: () => { wlStinkyGunEnabled = true; sendNotification("WL Stinky Gun ON", false) },
                    disableMethod: () => { wlStinkyGunEnabled = false; sendNotification("WL Stinky Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL Stinky Gun",
                    method: () => { try { if (!wlStinkyGunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; try { target.method("RPC_SetStinky").invoke(true) } catch(_) {} } } catch(_) {} }
                  },
                      {
                    buttonText: "WL Speed Buff Gun",
                    enableMethod: () => { wlSpeedBuffGunEnabled = true; sendNotification("WL Speed Buff Gun ON", false) },
                    disableMethod: () => { wlSpeedBuffGunEnabled = false; sendNotification("WL Speed Buff Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL Speed Buff Gun",
                    method: () => { try { if (!wlSpeedBuffGunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; try { target.method("RPC_ApplyBuff").invoke(0, 30) } catch(_) {} } } catch(_) {} }
                  },
                      {
                    buttonText: "WL Color Gun",
                    enableMethod: () => { wlColorGunEnabled = true; sendNotification("WL Color Gun ON", false) },
                    disableMethod: () => { wlColorGunEnabled = false; sendNotification("WL Color Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL Color Gun",
                    method: () => { try { if (!wlColorGunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; try { target.method("RPC_SetColor").invoke(Math.random(), Math.random(), Math.random(), 1) } catch(_) {} } } catch(_) {} }
                  },
                      {
                    buttonText: "WL Disintegrate Gun",
                    enableMethod: () => { wlDisintegrateGunEnabled = true; sendNotification("WL Disintegrate Gun ON", false) },
                    disableMethod: () => { wlDisintegrateGunEnabled = false; sendNotification("WL Disintegrate Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL Disintegrate Gun",
                    method: () => { try { if (!wlDisintegrateGunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; var dmg = AssemblyCSharp.class("AnimalCompany.DamageSourceInfo").method("get_Null").invoke(); var aim = getGunModAimPoint(); try { target.method("RPC_PlayerHit").invoke(99999, aim, dmg) } catch(_) {} } } catch(_) {} }
                  },
                      {
                    buttonText: "WL TP To Me Gun",
                    enableMethod: () => { wlTPToMeGunEnabled = true; sendNotification("WL TP To Me Gun ON", false) },
                    disableMethod: () => { wlTPToMeGunEnabled = false; sendNotification("WL TP To Me Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL TP To Me Gun",
                    method: () => { try { if (!wlTPToMeGunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; var handPos = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_position").invoke(); try { target.method("RPC_Teleport").invoke(readVec3Components(handPos)) } catch(_) {} } } catch(_) {} }
                  },
                      {
                    buttonText: "WL Launch Gun",
                    enableMethod: () => { wlLaunchGunEnabled = true; sendNotification("WL Launch Gun ON", false) },
                    disableMethod: () => { wlLaunchGunEnabled = false; sendNotification("WL Launch Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL Launch Gun",
                    method: () => { try { if (!wlLaunchGunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; try { target.method("RPC_AddForce").invoke([0, 8000, 0]) } catch(_) {} } } catch(_) {} }
                  },
                      {
                    buttonText: "WL Hit 50 Gun",
                    enableMethod: () => { wlHit50GunEnabled = true; sendNotification("WL Hit 50 Gun ON", false) },
                    disableMethod: () => { wlHit50GunEnabled = false; sendNotification("WL Hit 50 Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL Hit 50 Gun",
                    method: () => { try { if (!wlHit50GunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; var dmg = AssemblyCSharp.class("AnimalCompany.DamageSourceInfo").method("get_Null").invoke(); var aim = getGunModAimPoint(); try { target.method("RPC_PlayerHit").invoke(50, aim, dmg) } catch(_) {} } } catch(_) {} }
                  },
                      {
                    buttonText: "WL Freeze Gun",
                    enableMethod: () => { wlFreezeGunEnabled = true; sendNotification("WL Freeze Gun ON", false) },
                    disableMethod: () => { wlFreezeGunEnabled = false; sendNotification("WL Freeze Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL Freeze Gun",
                    method: () => { try { if (!wlFreezeGunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; var go = target.method("get_gameObject").invoke(); if (go && !go.isNull?.()) { var rb = go.method("GetComponent", 0).inflate(Rigidbody).invoke(); if (rb && !rb.isNull?.()) { rb.method("set_linearVelocity").invoke(zeroVector); rb.method("set_isKinematic").invoke(true); setTimeout(function() { try { rb.method("set_isKinematic").invoke(false) } catch(_) {} }, 3000) } } } } catch(_) {} }
                  },
                      {
                    buttonText: "WL Revive Gun",
                    enableMethod: () => { wlReviveGunEnabled = true; sendNotification("WL Revive Gun ON", false) },
                    disableMethod: () => { wlReviveGunEnabled = false; sendNotification("WL Revive Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL Revive Gun",
                    method: () => { try { if (!wlReviveGunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; try { target.method("RPC_Revive").invoke() } catch(_) {} } } catch(_) {} }
                  },
                      {
                    buttonText: "WL VFX Spam Gun",
                    enableMethod: () => { wlVFXSpamGunEnabled = true; sendNotification("WL VFX Spam Gun ON", false) },
                    disableMethod: () => { wlVFXSpamGunEnabled = false; sendNotification("WL VFX Spam Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL VFX Spam Gun",
                    method: () => { try { if (!wlVFXSpamGunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; var pos = getTransform(target).method("get_position").invoke(); var v = [174,180,33,42,183,44]; for (var i = 0; i < v.length; i++) { try { target.method("RPC_PlayVFX").invoke(v[i], pos) } catch(_) {} } } } catch(_) {} }
                  },
                      {
                    buttonText: "WL Void Gun",
                    enableMethod: () => { wlVoidGunEnabled = true; sendNotification("WL Void Gun ON", false) },
                    disableMethod: () => { wlVoidGunEnabled = false; sendNotification("WL Void Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL Void Gun",
                    method: () => { try { if (!wlVoidGunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; try { target.method("RPC_Teleport").invoke([0, -1000, 0]) } catch(_) {} } } catch(_) {} }
                  },
                      {
                    buttonText: "WL Rainbow Loop",
                    enableMethod: () => { wlRainbowLoopEnabled = true; sendNotification("WL Rainbow Loop ON", false) },
                    disableMethod: () => { wlRainbowLoopEnabled = false; sendNotification("WL Rainbow Loop OFF", false) },
                    isTogglable: true,
                    toolTip: "WL Rainbow Loop",
                    method: () => { rpcLoopFrameCounter++; if (rpcLoopFrameCounter % 10 !== 0) return; try { if (whitelistPlayers.length === 0) return; for (var i = 0; i < whitelistPlayers.length; i++) { try { var c = ((rpcLoopFrameCounter * 7 + i * 50) % 360) / 360; whitelistPlayers[i].method("RPC_SetColor").invoke(c, 1, 1, 1) } catch(_) {} } } catch(_) {} }
                  },
                      {
                    buttonText: "WL Invincible Gun",
                    enableMethod: () => { wlInvincibleGunEnabled = true; sendNotification("WL Invincible Gun ON", false) },
                    disableMethod: () => { wlInvincibleGunEnabled = false; sendNotification("WL Invincible Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL Invincible Gun",
                    method: () => { try { if (!wlInvincibleGunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; try { target.method("set_isInvincible").invoke(true) } catch(_) {} } } catch(_) {} }
                  },
                      {
                    buttonText: "WL Heal Gun",
                    enableMethod: () => { wlHealGunEnabled = true; sendNotification("WL Heal Gun ON", false) },
                    disableMethod: () => { wlHealGunEnabled = false; sendNotification("WL Heal Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL Heal Gun",
                    method: () => { try { if (!wlHealGunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; try { target.field("healthPoints").value = 99999 } catch(_) {} try { target.method("RPC_Revive").invoke() } catch(_) {} } } catch(_) {} }
                  },
                      {
                    buttonText: "WL Give All Buff",
                    method: () => { try { if (whitelistPlayers.length === 0) { sendNotification("No WL players", false, 2); return } for (var i = 0; i < whitelistPlayers.length; i++) { try { whitelistPlayers[i].method("RPC_ApplyBuff").invoke(0, 60); whitelistPlayers[i].method("RPC_ApplyBuff").invoke(1, 60) } catch(_) {} } sendNotification("Buffed all WL players!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "WL Give All Buff"
                  },
                      {
                    buttonText: "WL Add Money All",
                    method: () => { try { if (whitelistPlayers.length === 0) { sendNotification("No WL players", false, 2); return } for (var i = 0; i < whitelistPlayers.length; i++) { try { whitelistPlayers[i].method("RPC_AddPlayerMoney").invoke(10000000) } catch(_) {} } sendNotification("Gave $10M to all WL!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "WL Add Money All"
                  },
                      {
                    buttonText: "WL Revive All",
                    method: () => { try { if (whitelistPlayers.length === 0) { sendNotification("No WL players", false, 2); return } for (var i = 0; i < whitelistPlayers.length; i++) { try { whitelistPlayers[i].method("RPC_Revive").invoke() } catch(_) {} } sendNotification("Revived all WL!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "WL Revive All"
                  },
                      {
                    buttonText: "WL TP All 2 Me",
                    method: () => { try { if (whitelistPlayers.length === 0) { sendNotification("No WL players", false, 2); return } var lp = getLocalPlayer(); if (!lp || lp.isNull?.()) return; var pos = getTransform(lp).method("get_position").invoke(); for (var i = 0; i < whitelistPlayers.length; i++) { try { whitelistPlayers[i].method("RPC_Teleport").invoke(readVec3Components(pos)) } catch(_) {} } sendNotification("TP'd all WL to me!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "WL TP All 2 Me"
                  },
                      {
                    buttonText: "WL Clear Invincible",
                    method: () => { try { if (whitelistPlayers.length === 0) { sendNotification("No WL players", false, 2); return } for (var i = 0; i < whitelistPlayers.length; i++) { try { whitelistPlayers[i].method("set_isInvincible").invoke(false) } catch(_) {} } sendNotification("Cleared WL invincible!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "WL Clear Invincible"
                  },
                      {
                    buttonText: "Anti-Cheat Bypass",
                    enableMethod: () => { antiCheatBypassEnabled = true; sendNotification("Anti-Cheat Bypass ON", false) },
                    disableMethod: () => { antiCheatBypassEnabled = false; sendNotification("Anti-Cheat Bypass OFF", false) },
                    isTogglable: true,
                    toolTip: "Anti-Cheat Bypass",
                    method: () => {}
                  },
                      {
                    buttonText: "Anti Kick",
                    enableMethod: () => { antiKickEnabled = true; sendNotification("Anti Kick ON", false) },
                    disableMethod: () => { antiKickEnabled = false; sendNotification("Anti Kick OFF", false) },
                    isTogglable: true,
                    toolTip: "Anti Kick",
                    method: () => {}
                  },
                      {
                    buttonText: "Anti Ban",
                    enableMethod: () => { antiBanEnabled = true; sendNotification("Anti Ban ON", false) },
                    disableMethod: () => { antiBanEnabled = false; sendNotification("Anti Ban OFF", false) },
                    isTogglable: true,
                    toolTip: "Anti Ban",
                    method: () => {}
                  },
                      {
                    buttonText: "Player ESP",
                    enableMethod: () => { espPlayersEnabled = true; sendNotification("Player ESP ON", false) },
                    disableMethod: () => { espPlayersEnabled = false; for (var i = 0; i < espPlayerObjects.length; i++) { try { Destroy(espPlayerObjects[i]) } catch(_) {} } espPlayerObjects = []; sendNotification("Player ESP OFF", false) },
                    isTogglable: true,
                    toolTip: "Player ESP",
                    method: () => { try { if (!espPlayersEnabled) return; var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { if (playerIsLocal(p[i])) continue; var pos = getTransform(p[i]).method("get_position").invoke(); var headPos = [pos.field("x").value, pos.field("y").value + 1.5, pos.field("z").value]; var name = ""; try { name = p[i].method("get_Alias").invoke().to() } catch(_) {} console.log("[ESP] " + name + " at " + readVec3Components(pos)) } catch(_) {} } } catch(_) {} }
                  },
                      {
                    buttonText: "Night Vision",
                    enableMethod: () => { sendNotification("Night Vision ON", false) },
                    disableMethod: () => { sendNotification("Night Vision OFF", false) },
                    isTogglable: true,
                    toolTip: "Night Vision",
                    method: () => { try { var cam = Camera.method("get_main").invoke(); if (cam && !cam.isNull?.()) { try { cam.field("clearFlags").value = 1 } catch(_) {} } } catch(_) {} }
                  },
                      {
                    buttonText: "Player Color",
                    method: () => { try { var lp = getLocalPlayer(); if (!lp || lp.isNull?.()) return; lp.method("RPC_SetColor").invoke(Math.random(), Math.random(), Math.random(), 1); sendNotification("Color changed!", false, 2) } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Player Color"
                  },
                      {
                    buttonText: "Scale Up",
                    method: () => { try { var lp = getLocalPlayer(); if (!lp || lp.isNull?.()) return; var go = lp.method("get_gameObject").invoke(); if (go && !go.isNull?.()) { var cur = getTransform(go).method("get_localScale").invoke(); var s = cur.field("x").value * 1.5; getTransform(go).method("set_localScale").invoke([s, s, s]); sendNotification("Scale: " + s.toFixed(1), false, 2) } } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Scale Up"
                  },
                      {
                    buttonText: "Scale Down",
                    method: () => { try { var lp = getLocalPlayer(); if (!lp || lp.isNull?.()) return; var go = lp.method("get_gameObject").invoke(); if (go && !go.isNull?.()) { var cur = getTransform(go).method("get_localScale").invoke(); var s = cur.field("x").value / 1.5; getTransform(go).method("set_localScale").invoke([s, s, s]); sendNotification("Scale: " + s.toFixed(1), false, 2) } } catch(e) {} },
                    isTogglable: false,
                    toolTip: "Scale Down"
                  },
                      {
                    buttonText: "Theme: Royal Blue",
                    method: () => {
                      bgColor = [0.05, 0.10, 0.35, 0.95]
                      textColor = [0.7, 0.85, 1.0, 1.0]
                      buttonColor = [0.10, 0.25, 0.60, 0.95]
                      buttonPressedColor = [0.20, 0.40, 0.80, 1.0]
                      borderColor = [0.30, 0.50, 0.90, 1.0]
                      femboyThemeEnabled = false
                      reloadMenu()
                    },
                    isTogglable: false,
                    toolTip: "Apply Theme: Royal Blue theme."
                  },
                      {
                    buttonText: "Theme: Rainbow",
                    method: () => {
                      bgColor = [0.15, 0.15, 0.15, 0.95]
                      textColor = [1.0, 0.4, 0.7, 1.0]
                      buttonColor = [0.20, 0.60, 0.80, 0.95]
                      buttonPressedColor = [0.40, 0.80, 1.0, 1.0]
                      borderColor = [0.80, 0.40, 0.90, 1.0]
                      femboyThemeEnabled = false
                      reloadMenu()
                    },
                    isTogglable: false,
                    toolTip: "Apply Theme: Rainbow theme."
                  },
                      {
                    buttonText: "Theme: Neon Green",
                    method: () => {
                      bgColor = [0.02, 0.15, 0.02, 0.95]
                      textColor = [0.0, 1.0, 0.3, 1.0]
                      buttonColor = [0.05, 0.25, 0.05, 0.95]
                      buttonPressedColor = [0.10, 0.45, 0.10, 1.0]
                      borderColor = [0.20, 0.80, 0.20, 1.0]
                      femboyThemeEnabled = false
                      reloadMenu()
                    },
                    isTogglable: false,
                    toolTip: "Apply Theme: Neon Green theme."
                  },
                      {
                    buttonText: "Theme: Blood Red",
                    method: () => {
                      bgColor = [0.20, 0.02, 0.02, 0.95]
                      textColor = [1.0, 0.8, 0.8, 1.0]
                      buttonColor = [0.40, 0.05, 0.05, 0.95]
                      buttonPressedColor = [0.60, 0.10, 0.10, 1.0]
                      borderColor = [0.80, 0.15, 0.15, 1.0]
                      femboyThemeEnabled = false
                      reloadMenu()
                    },
                    isTogglable: false,
                    toolTip: "Apply Theme: Blood Red theme."
                  },
                      {
                    buttonText: "Theme: Stupid Orange",
                    method: () => {
                      bgColor = [0.25, 0.12, 0.02, 0.95]
                      textColor = [1.0, 0.9, 0.7, 1.0]
                      buttonColor = [0.50, 0.25, 0.05, 0.95]
                      buttonPressedColor = [0.70, 0.35, 0.10, 1.0]
                      borderColor = [0.90, 0.50, 0.15, 1.0]
                      femboyThemeEnabled = false
                      reloadMenu()
                    },
                    isTogglable: false,
                    toolTip: "Apply Theme: Stupid Orange theme."
                  },
                      {
                    buttonText: "Theme: Toxic Lime",
                    method: () => {
                      bgColor = [0.08, 0.18, 0.02, 0.95]
                      textColor = [0.7, 1.0, 0.2, 1.0]
                      buttonColor = [0.15, 0.35, 0.05, 0.95]
                      buttonPressedColor = [0.25, 0.55, 0.10, 1.0]
                      borderColor = [0.40, 0.85, 0.20, 1.0]
                      femboyThemeEnabled = false
                      reloadMenu()
                    },
                    isTogglable: false,
                    toolTip: "Apply Theme: Toxic Lime theme."
                  },
                      {
                    buttonText: "Theme: Sunset Pink",
                    method: () => {
                      bgColor = [0.20, 0.05, 0.12, 0.95]
                      textColor = [1.0, 0.85, 0.90, 1.0]
                      buttonColor = [0.40, 0.12, 0.25, 0.95]
                      buttonPressedColor = [0.60, 0.20, 0.38, 1.0]
                      borderColor = [0.80, 0.30, 0.50, 1.0]
                      femboyThemeEnabled = false
                      reloadMenu()
                    },
                    isTogglable: false,
                    toolTip: "Apply Theme: Sunset Pink theme."
                  },
                      {
                    buttonText: "Theme: Ice Cyan",
                    method: () => {
                      bgColor = [0.02, 0.12, 0.18, 0.95]
                      textColor = [0.8, 1.0, 1.0, 1.0]
                      buttonColor = [0.05, 0.25, 0.40, 0.95]
                      buttonPressedColor = [0.10, 0.40, 0.60, 1.0]
                      borderColor = [0.20, 0.70, 0.90, 1.0]
                      femboyThemeEnabled = false
                      reloadMenu()
                    },
                    isTogglable: false,
                    toolTip: "Apply Theme: Ice Cyan theme."
                  },
                      {
                    buttonText: "Theme: Gold Black",
                    method: () => {
                      bgColor = [0.08, 0.06, 0.02, 0.95]
                      textColor = [1.0, 0.9, 0.4, 1.0]
                      buttonColor = [0.18, 0.14, 0.05, 0.95]
                      buttonPressedColor = [0.35, 0.28, 0.08, 1.0]
                      borderColor = [0.80, 0.65, 0.15, 1.0]
                      femboyThemeEnabled = false
                      reloadMenu()
                    },
                    isTogglable: false,
                    toolTip: "Apply Theme: Gold Black theme."
                  },
                      {
                    buttonText: "Theme: Plasma Purple",
                    method: () => {
                      bgColor = [0.15, 0.02, 0.20, 0.95]
                      textColor = [0.9, 0.7, 1.0, 1.0]
                      buttonColor = [0.30, 0.05, 0.40, 0.95]
                      buttonPressedColor = [0.45, 0.10, 0.60, 1.0]
                      borderColor = [0.70, 0.20, 0.90, 1.0]
                      femboyThemeEnabled = false
                      reloadMenu()
                    },
                    isTogglable: false,
                    toolTip: "Apply Theme: Plasma Purple theme."
                  },
                      {
                    buttonText: "Theme: Blackout Orange",
                    method: () => {
                      bgColor = [0.02, 0.02, 0.02, 0.95]
                      textColor = [1.0, 0.6, 0.0, 1.0]
                      buttonColor = [0.10, 0.08, 0.02, 0.95]
                      buttonPressedColor = [0.25, 0.18, 0.05, 1.0]
                      borderColor = [0.60, 0.35, 0.05, 1.0]
                      femboyThemeEnabled = false
                      reloadMenu()
                    },
                    isTogglable: false,
                    toolTip: "Apply Theme: Blackout Orange theme."
                  },
                      {
                    buttonText: "Theme: InvinciBlue",
                    method: () => {
                      bgColor = [0.02, 0.05, 0.20, 0.95]
                      textColor = [0.5, 0.8, 1.0, 1.0]
                      buttonColor = [0.05, 0.12, 0.40, 0.95]
                      buttonPressedColor = [0.10, 0.22, 0.60, 1.0]
                      borderColor = [0.20, 0.40, 0.90, 1.0]
                      femboyThemeEnabled = false
                      reloadMenu()
                    },
                    isTogglable: false,
                    toolTip: "Apply Theme: InvinciBlue theme."
                  },
                      {
                    buttonText: "Theme: Ying Yang",
                    method: () => {
                      bgColor = [0.95, 0.95, 0.95, 0.95]
                      textColor = [0.0, 0.0, 0.0, 1.0]
                      buttonColor = [0.10, 0.10, 0.10, 0.95]
                      buttonPressedColor = [0.0, 0.0, 0.0, 1.0]
                      borderColor = [0.5, 0.5, 0.5, 1.0]
                      femboyThemeEnabled = false
                      reloadMenu()
                    },
                    isTogglable: false,
                    toolTip: "Apply Theme: Ying Yang theme."
                  },
                      {
                    buttonText: "Theme: Femboy",
                    method: () => {
                      bgColor = [0.95, 0.85, 0.90, 0.95]
                      textColor = [0.3, 0.1, 0.15, 1.0]
                      buttonColor = [0.90, 0.70, 0.80, 0.95]
                      buttonPressedColor = [0.95, 0.60, 0.72, 1.0]
                      borderColor = [0.92, 0.65, 0.78, 1.0]
                      textGradientDarkTone = 200
                      textGradientLightTone = 255
                      textGradientSpeed = 3.0
                      textGradientEnabled = true
                      femboyThemeEnabled = true
                      reloadMenu()
                    },
                    isTogglable: false,
                    toolTip: "Apply Theme: Femboy theme."
                  },
                      {
                    buttonText: "Server Spoof",
                    method: () => { sendNotification("Server Spoof: not implemented", false, 2) },
                    isTogglable: false,
                    toolTip: "Server Spoof"
                  }
            ]
        }
    ];
    function openTemplateCategory(label: string, category: number): ButtonInfo {
        return new ButtonInfo({
            buttonText: label,
            method: () => {
                currentCategory = category;
                currentPage = 0;
                _pcMenuSelector = 0;
            },
            isTogglable: false,
            toolTip: label,
        });
    }
    function templateBackButton(label: string = "Back to Main", category: number = 0): ButtonInfo {
        return new ButtonInfo({
            buttonText: label,
            method: () => {
                currentCategory = category;
                currentPage = 0;
                _pcMenuSelector = 0;
            },
            isTogglable: false,
            toolTip: label,
        });
    }
    const allSettingsButtons: ButtonInfo[] = [
        new ButtonInfo({
            buttonText: "Back to Main",
            method: () => {
                currentCategory = 0;
                currentPage = 0;
            },
            isTogglable: false,
            toolTip: "Returns to main category.",
        }),
        new ButtonInfo({
            buttonText: "Outlines",
            enableMethod: () => {
                outlinesEnabled = true;
            },
            disableMethod: () => {
                outlinesEnabled = false;
            },
            isTogglable: true,
        }),
        styleStepper("Outline", () => {
            menuOutlineThickness = Math.max(0.002, menuOutlineThickness - 0.001);
            controlOutlineThickness = Math.max(0.0015, controlOutlineThickness - 0.001);
            rowOutlineThickness = Math.max(0.001, rowOutlineThickness - 0.001);
        }, () => {
            menuOutlineThickness = Math.min(0.014, menuOutlineThickness + 0.001);
            controlOutlineThickness = Math.min(0.014, controlOutlineThickness + 0.001);
            rowOutlineThickness = Math.min(0.012, rowOutlineThickness + 0.001);
        }),
        styleStepper("Outline Shade", () => {
            const shade = Math.max(0.04, menuOutlineColor[0] - 0.02);
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [
                shade,
                shade,
                Math.min(0.35, shade + 0.015),
                1,
            ];
        }, () => {
            const shade = Math.min(0.3, menuOutlineColor[0] + 0.02);
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [
                shade,
                shade,
                Math.min(0.35, shade + 0.015),
                1,
            ];
        }),
        styleStepper("Corner Roundness", () => {
            cornerRoundness = Math.max(0.12, cornerRoundness - 0.04);
        }, () => {
            cornerRoundness = Math.min(0.44, cornerRoundness + 0.04);
        }),
        styleStepper("Background Shade", () => {
            bgColor = [0.045, 0.045, 0.05, bgColor[3]];
        }, () => {
            bgColor = [0.13, 0.13, 0.14, bgColor[3]];
        }),
        styleStepper("Button Shade", () => {
            buttonColor = [0.1, 0.1, 0.11, buttonColor[3]];
        }, () => {
            buttonColor = [0.22, 0.22, 0.235, buttonColor[3]];
        }),
        styleStepper("Enabled Shade", () => {
            buttonPressedColor = [0.2, 0.2, 0.215, buttonPressedColor[3]];
        }, () => {
            buttonPressedColor = [0.4, 0.4, 0.43, buttonPressedColor[3]];
        }),
        styleToggleButton("Text Gradient", textGradientEnabled, () => {
            textGradientEnabled = true;
        }, () => {
            textGradientEnabled = false;
        }, "Animate menu text between the selected dark and light tones."),
        styleStepper("Gradient Speed", () => {
            textGradientSpeed = Math.max(0.4, textGradientSpeed - 0.4);
        }, () => {
            textGradientSpeed = Math.min(6, textGradientSpeed + 0.4);
        }),
        styleStepper("Gradient Dark", () => {
            textGradientDarkTone = Math.max(24, textGradientDarkTone - 8);
        }, () => {
            textGradientDarkTone = Math.min(textGradientLightTone - 16, textGradientDarkTone + 8);
        }),
        styleStepper("Gradient Light", () => {
            textGradientLightTone = Math.max(textGradientDarkTone + 16, textGradientLightTone - 8);
        }, () => {
            textGradientLightTone = Math.min(255, textGradientLightTone + 8);
        }),
        styleStepper("Panel Opacity", () => {
            bgColor = [bgColor[0], bgColor[1], bgColor[2], Math.max(0.35, bgColor[3] - 0.05)];
        }, () => {
            bgColor = [bgColor[0], bgColor[1], bgColor[2], Math.min(1, bgColor[3] + 0.05)];
        }),
        styleStepper("Button Opacity", () => {
            buttonColor = [
                buttonColor[0], buttonColor[1], buttonColor[2],
                Math.max(0.35, buttonColor[3] - 0.05),
            ];
            buttonPressedColor = [
                buttonPressedColor[0], buttonPressedColor[1], buttonPressedColor[2],
                Math.max(0.35, buttonPressedColor[3] - 0.05),
            ];
        }, () => {
            buttonColor = [
                buttonColor[0], buttonColor[1], buttonColor[2],
                Math.min(1, buttonColor[3] + 0.05),
            ];
            buttonPressedColor = [
                buttonPressedColor[0], buttonPressedColor[1], buttonPressedColor[2],
                Math.min(1, buttonPressedColor[3] + 0.05),
            ];
        }),
        styleStepper("Menu Size", () => {
            menuscale = Math.max(0.7, menuscale - 0.05);
        }, () => {
            menuscale = Math.min(1.2, menuscale + 0.05);
        }),
        styleStepper("Button Height", () => {
            rowButtonHeight = Math.max(0.054, rowButtonHeight - 0.004);
            rowButtonSpacing = Math.max(0.026, rowButtonSpacing - 0.002);
        }, () => {
            rowButtonHeight = Math.min(0.082, rowButtonHeight + 0.004);
            rowButtonSpacing = Math.min(0.036, rowButtonSpacing + 0.002);
        }),
        styleStepper("Button Width", () => {
            rowButtonWidth = Math.max(0.56, rowButtonWidth - 0.02);
        }, () => {
            rowButtonWidth = Math.min(0.72, rowButtonWidth + 0.02);
        }),
        styleStepper("Disconnect Width", () => {
            disconnectButtonWidth = Math.max(0.5, disconnectButtonWidth - 0.03);
        }, () => {
            disconnectButtonWidth = Math.min(0.76, disconnectButtonWidth + 0.03);
        }),
        styleStepper("Page Button Width", () => {
            pageButtonWidth = Math.max(0.1, pageButtonWidth - 0.01);
        }, () => {
            pageButtonWidth = Math.min(0.19, pageButtonWidth + 0.01);
        }),
        styleStepper("Row Spacing", () => {
            rowButtonSpacing = Math.max(0.025, rowButtonSpacing - 0.0015);
        }, () => {
            rowButtonSpacing = Math.min(0.036, rowButtonSpacing + 0.0015);
        }),
        styleStepper("Title Size", () => {
            titleWidth = Math.max(0.48, titleWidth - 0.04);
            titleHeight = Math.max(0.048, titleHeight - 0.003);
        }, () => {
            titleWidth = Math.min(0.72, titleWidth + 0.04);
            titleHeight = Math.min(0.068, titleHeight + 0.003);
        }),
        styleStepper("PC Distance", () => {
            pcMenuDistance = Math.max(0.48, pcMenuDistance - 0.05);
        }, () => {
            pcMenuDistance = Math.min(1.05, pcMenuDistance + 0.05);
        }),
        styleStepper("VR Menu Height", () => {
            vrMenuUpOffset = Math.max(-0.2, vrMenuUpOffset - 0.02);
            menuSnapNextFrame = true;
        }, () => {
            vrMenuUpOffset = Math.min(0.35, vrMenuUpOffset + 0.02);
            menuSnapNextFrame = true;
        }),
        styleStepper("VR Palm Offset", () => {
            vrMenuPalmInset = Math.max(0, vrMenuPalmInset - 0.01);
            menuSnapNextFrame = true;
        }, () => {
            vrMenuPalmInset = Math.min(0.12, vrMenuPalmInset + 0.01);
            menuSnapNextFrame = true;
        }),
        styleStepper("VR Menu Tilt", () => {
            vrMenuTilt = Math.max(-30, vrMenuTilt - 2);
            menuSnapNextFrame = true;
        }, () => {
            vrMenuTilt = Math.min(20, vrMenuTilt + 2);
            menuSnapNextFrame = true;
        }),
        styleToggleButton("Right-Hand Menu", righthand, () => {
            righthand = true;
            menuSnapNextFrame = true;
        }, () => {
            righthand = false;
            menuSnapNextFrame = true;
        }, "Use the right controller for the regular hand menu."),
        styleActionButton("Compact Spacing", () => {
            rowButtonHeight = 0.056;
            rowButtonSpacing = 0.0265;
        }),
        (() => {
            const smoothMenuButton = new ButtonInfo({
                buttonText: "Smooth Menu",
                enableMethod: () => {
                    LerpMenu = true;
                    menuSnapNextFrame = true;
                },
                disableMethod: () => {
                    LerpMenu = false;
                },
                isTogglable: true,
                toolTip: "Smoothly follows your hand or head.",
            });
            smoothMenuButton.enabled = LerpMenu;
            return smoothMenuButton;
        })(),
        styleStepper("Menu Smoothness", () => {
            menuFollowSmoothness = Math.max(2, menuFollowSmoothness - 1);
        }, () => {
            menuFollowSmoothness = Math.min(30, menuFollowSmoothness + 1);
        }),
        styleStepper("Animation Speed", () => {
            menuOpenSpeed = Math.max(2.5, menuOpenSpeed - 0.75);
            menuCloseSpeed = Math.max(3.0, menuCloseSpeed - 0.75);
        }, () => {
            menuOpenSpeed = Math.min(10, menuOpenSpeed + 0.75);
            menuCloseSpeed = Math.min(12, menuCloseSpeed + 0.75);
        }),
        styleActionButton("Reset Menu Settings", () => {
            menuscale = 1.0;
            menuOutlineColor = [0.18, 0.18, 0.195, 1];
            pageOutlineColor = menuOutlineColor;
            buttonOutlineColor = menuOutlineColor;
            menuOutlineThickness = 0.009;
            controlOutlineThickness = 0.0075;
            rowOutlineThickness = 0.0065;
            outlinesEnabled = true;
            rowButtonHeight = 0.06;
            rowButtonWidth = 0.61;
            rowButtonSpacing = 0.032;
            disconnectButtonWidth = 0.62;
            pageButtonWidth = 0.135;
            cornerRoundness = 0.28;
            titleWidth = 0.6;
            titleHeight = 0.057;
            pcMenuDistance = 0.7;
            vrMenuUpOffset = 0.08;
            vrMenuPalmInset = 0.045;
            vrMenuRightOffset = 0.025;
            vrMenuTilt = -8;
            bgColor = [0.08, 0.08, 0.08, 0.98];
            buttonColor = [0.15, 0.15, 0.15, 0.95];
            buttonPressedColor = [0.3, 0.3, 0.3, 0.95];
            textColor = [0.95, 0.95, 0.95, 1];
            textGradientEnabled = true;
            textGradientSpeed = 2.4;
            textGradientDarkTone = 112;
            textGradientLightTone = 222;
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.18, 0.18, 0.195, 1];
            menuOpenSpeed = 2.5;
            menuCloseSpeed = 3.0;
            LerpMenu = true;
            menuFollowSmoothness = 15;
            menuSnapNextFrame = true;
            righthand = false;
            const smoothMenuButton = findExistingButton("Smooth Menu");
            if (smoothMenuButton)
                smoothMenuButton.enabled = true;
            const textGradientButton = findExistingButton("Text Gradient");
            if (textGradientButton)
                textGradientButton.enabled = true;
            const menuHandButton = findExistingButton("Right-Hand Menu");
            if (menuHandButton)
                menuHandButton.enabled = false;
        }),
        styleActionButton("Theme: Dark", () => {
            bgColor = [0.08, 0.08, 0.08, 0.98];
            buttonColor = [0.15, 0.15, 0.15, 0.95];
            buttonPressedColor = [0.3, 0.3, 0.3, 0.95];
            textColor = [0.95, 0.95, 0.95, 1];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.18, 0.18, 0.195, 1];
            femboyThemeEnabled = false;
        }),
        styleActionButton("Theme: Plasma Purple", () => {
            bgColor = [0.075, 0.045, 0.11, 0.98];
            buttonColor = [0.2, 0.1, 0.29, 0.96];
            buttonPressedColor = [0.46, 0.2, 0.68, 0.98];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.3, 0.16, 0.42, 1];
        }),
        styleActionButton("Theme: Toxic Green", () => {
            bgColor = [0.035, 0.075, 0.045, 0.98];
            buttonColor = [0.08, 0.19, 0.1, 0.96];
            buttonPressedColor = [0.16, 0.5, 0.22, 0.98];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.1, 0.3, 0.14, 1];
        }),
        styleActionButton("Theme: Blood Red", () => {
            bgColor = [0.09, 0.035, 0.04, 0.98];
            buttonColor = [0.22, 0.07, 0.08, 0.96];
            buttonPressedColor = [0.56, 0.12, 0.14, 0.98];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.34, 0.08, 0.09, 1];
        }),
        styleActionButton("Theme: Ocean", () => {
            bgColor = [0.025, 0.07, 0.1, 0.98];
            buttonColor = [0.04, 0.16, 0.23, 0.96];
            buttonPressedColor = [0.05, 0.38, 0.56, 0.98];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.06, 0.25, 0.36, 1];
        }),
        styleActionButton("Theme: Gold", () => {
            bgColor = [0.1, 0.075, 0.025, 0.98];
            buttonColor = [0.22, 0.16, 0.04, 0.96];
            buttonPressedColor = [0.58, 0.4, 0.08, 0.98];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.36, 0.26, 0.06, 1];
        }),
        styleActionButton("Theme: Ice", () => {
            bgColor = [0.055, 0.085, 0.11, 0.98];
            buttonColor = [0.11, 0.2, 0.27, 0.96];
            buttonPressedColor = [0.32, 0.64, 0.82, 0.98];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.2, 0.42, 0.56, 1];
        }),
        styleActionButton("Theme: Femboy", () => {
            bgColor = [0.95, 0.85, 0.90, 0.95];
            buttonColor = [0.90, 0.70, 0.80, 0.95];
            buttonPressedColor = [0.95, 0.60, 0.72, 0.98];
            textColor = [0.3, 0.1, 0.15, 1];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.92, 0.65, 0.78, 1];
            textGradientDarkTone = 200;
            textGradientLightTone = 255;
            textGradientSpeed = 3.0;
            textGradientEnabled = true;
            femboyThemeEnabled = true;
        }),
    ];
    buttons = Array.from({ length: 16 }, () => [] as ButtonInfo[]);
    buttons[0] = [
        openTemplateCategory("Settings", 10),
        openTemplateCategory("Player", 2),
        openTemplateCategory("Others", 3),
        openTemplateCategory("Users", 4),
        openTemplateCategory("Items", 5),
        openTemplateCategory("Combat", 6),
        openTemplateCategory("World", 7),
        openTemplateCategory("Overpowered", 8),
        openTemplateCategory("Blueprints", 9),
        openTemplateCategory("Credits", 11),
    ];
    buttons[1] = [
        new ButtonInfo({
            buttonText: "Disconnect",
            method: () => {
                const networkrunner = SFXManager.method("get__currentRunner").invoke();
                const manager = NManager.method("get_instance").invoke();
                manager.method("OnPlayerLeft").invoke(networkrunner, networkrunner.method("get_LocalPlayer").invoke());
            },
            isTogglable: false,
            toolTip: "Disconnects you from the room.",
        }),
        new ButtonInfo({
            buttonText: "PreviousPage",
            method: () => {
                const lastPage = Math.max(Math.ceil(buttons[currentCategory].length / getButtonsPerPage()) - 1, 0);
                currentPage = currentPage <= 0 ? lastPage : currentPage - 1;
            },
            isTogglable: false,
        }),
        new ButtonInfo({
            buttonText: "NextPage",
            method: () => {
                const pageCount = Math.max(Math.ceil(buttons[currentCategory].length / getButtonsPerPage()), 1);
                currentPage = (currentPage + 1) % pageCount;
            },
            isTogglable: false,
        }),
        templateBackButton("GlobalReturn", 0),
    ];
    for (let category = 2; category <= 9; category++) {
        buttons[category] = [templateBackButton()];
    }
    buttons[11] = [templateBackButton()];
    function findExistingButton(label: string): ButtonInfo | null {
        for (const page of buttons) {
            const found = page.find((button) => button.buttonText === label);
            if (found)
                return found;
        }
        const pending = allSettingsButtons.find((button) => button.buttonText === label);
        return pending || null;
    }
    function settingsRange(startLabel: string, endLabel: string | null): ButtonInfo[] {
        const start = allSettingsButtons.findIndex((button) => button.buttonText === startLabel);
        const end = endLabel
            ? allSettingsButtons.findIndex((button) => button.buttonText === endLabel)
            : allSettingsButtons.length;
        if (start < 0)
            return [];
        return allSettingsButtons.slice(start, end >= 0 ? end : allSettingsButtons.length);
    }
    const appearanceCategory = buttons.length;
    const layoutCategory = appearanceCategory + 1;
    const motionCategory = appearanceCategory + 2;
    const themesCategory = appearanceCategory + 3;
    buttons.push([templateBackButton("Back to Settings", 10), ...settingsRange("Outlines", "Menu Size")], [templateBackButton("Back to Settings", 10), ...settingsRange("Menu Size", "Smooth Menu")], [templateBackButton("Back to Settings", 10), ...settingsRange("Smooth Menu", "Reset Menu Settings")], [templateBackButton("Back to Settings", 10), ...settingsRange("Theme: Dark", null)]);
    const resetMenuSettings = allSettingsButtons.find((button) => button.buttonText === "Reset Menu Settings");
    buttons[10] = [
        templateBackButton(),
        ...(resetMenuSettings ? [resetMenuSettings] : []),
        openTemplateCategory("Appearance", appearanceCategory),
        openTemplateCategory("Layout", layoutCategory),
        openTemplateCategory("Motion", motionCategory),
        openTemplateCategory("Themes", themesCategory),
    ];
    function installTemplateButtons(additions: MenuTemplateAddition[]) {
        const categoryIndexes: Record<string, number> = {
            main: 0,
            player: 2,
            others: 3,
            users: 4,
            items: 5,
            combat: 6,
            world: 7,
            overpowered: 8,
            blueprints: 9,
            settings: 10,
            credits: 11,
        };
        for (const addition of additions) {
            const categoryIndex = categoryIndexes[addition.category.toLowerCase()];
            if (categoryIndex === undefined || !buttons[categoryIndex]) {
                syteError("Unknown template category: " + addition.category);
                continue;
            }
            buttons[categoryIndex].push(...addition.entries.map((entry) => new ButtonInfo(entry)));
        }
    }
    function installTemplateCategory(definition: MenuTemplateCategory, parentCategory: number, parentTitle: string): number {
        const categoryIndex = buttons.length;
        buttons.push([]);
        const pageButtons: ButtonInfo[] = [
            new ButtonInfo(menuButton("Back to " + parentTitle, () => {
                currentCategory = parentCategory;
                currentPage = 0;
                _pcMenuSelector = 0;
            })),
        ];
        for (const entry of definition.entries) {
            if ((entry as MenuTemplateCategory).kind === "category") {
                const child = entry as MenuTemplateCategory;
                const childIndex = installTemplateCategory(child, categoryIndex, definition.title);
                pageButtons.push(new ButtonInfo(menuButton(child.title, () => {
                    currentCategory = childIndex;
                    currentPage = 0;
                    _pcMenuSelector = 0;
                }, child.toolTip || child.title)));
            }
            else {
                pageButtons.push(new ButtonInfo(entry as ButtonInfoConfig));
            }
        }
        buttons[categoryIndex] = pageButtons;
        return categoryIndex;
    }
    function installTemplateMenu(definitions: MenuTemplateCategory[]) {
        const mainButtons: ButtonInfo[] = [];
        for (const definition of definitions) {
            const categoryIndex = installTemplateCategory(definition, 0, "Main");
            mainButtons.push(new ButtonInfo(menuButton(definition.title, () => {
                currentCategory = categoryIndex;
                currentPage = 0;
                _pcMenuSelector = 0;
            }, definition.toolTip || definition.title)));
        }
        const creditsIndex = buttons[0].findIndex((button) => button.buttonText === "Credits");
        const insertAt = creditsIndex >= 0 ? creditsIndex : buttons[0].length;
        buttons[0].splice(insertAt, 0, ...mainButtons);
    }
    installTemplateButtons(TEMPLATE_MENU_BUTTONS);
    installTemplateMenu(TEMPLATE_MENU_CATEGORIES);
    let buttonMap: Map<string, ButtonInfo> = new Map();
    function rebuildButtonMap(): void {
        buttonMap.clear();
        buttons.forEach(function (buttonArray, categoryIndex) {
            buttonArray.forEach(function (button) {
                buttonMap.set(button.activationId, button);
                if (categoryIndex === 1)
                    buttonMap.set(button.buttonText, button);
                if (button.stepDown)
                    buttonMap.set(button.stepDown.activationId, button.stepDown);
                if (button.stepUp)
                    buttonMap.set(button.stepUp.activationId, button.stepUp);
            });
        });
    }
    rebuildButtonMap();
    function getIndex(activationId: string): ButtonInfo {
        return buttonMap.get(activationId)!;
    }
    const ButtonActivation = GorillaReportButton.method("OnTriggerEnter");
    ButtonActivation.implementation = function (collider) {
        const rawName = this.method("get_name").invoke().toString();
        if (rawName.length > 1 && rawName[1] == "@") {
            if (collider.handle.equals(referenceCollider.handle)) {
                const goName = rawName.substring(2, rawName.length - 1);
                const _time = Time.method("get_time").invoke();
                if (_time > buttonClickDelay) {
                    buttonClickDelay = _time + 0.2;
                    const button = getIndex(goName);
                    playButtonSound();
                    if (button) {
                        if (button.isTogglable) {
                            button.enabled = !button.enabled;
                            reloadMenu();
                            if (button.enabled) {
                                button.enableMethod?.();
                                if (button.toolTip && buttonNotifications)
                                    sendNotification("<color=grey>[</color><color=green>ON</color><color=grey>]</color> " +
                                        button.toolTip, false);
                            }
                            else {
                                button.disableMethod?.();
                                if (button.toolTip && buttonNotifications)
                                    sendNotification("<color=grey>[</color><color=red>OFF</color><color=grey>]</color> " +
                                        button.toolTip, false);
                            }
                        }
                        else {
                            reloadMenu();
                            button.method?.();
                            if (button.toolTip && buttonNotifications)
                                sendNotification("<color=grey>[</color><color=green>OK</color><color=grey>]</color> " +
                                    button.toolTip, false);
                        }
                    }
                }
            }
            return;
        }
        return this.method("OnTriggerEnter").invoke(collider);
    };
    function updateInput() {
        const leftDevice = InputDevices.method("GetDeviceAtXRNode", 1).invoke(4);
        const rightDevice = InputDevices.method("GetDeviceAtXRNode", 1).invoke(5);
        const outBool = Il2Cpp.alloc(1);
        leftDevice
            .method("TryGetFeatureValue", 2)
            .invoke(CommonUsages.field("primaryButton").value, outBool);
        leftPrimary = outBool.readU8() !== 0;
        leftDevice
            .method("TryGetFeatureValue", 2)
            .invoke(CommonUsages.field("secondaryButton").value, outBool);
        leftSecondary = outBool.readU8() !== 0;
        leftDevice
            .method("TryGetFeatureValue", 2)
            .invoke(CommonUsages.field("gripButton").value, outBool);
        leftGrab = outBool.readU8() !== 0;
        leftDevice
            .method("TryGetFeatureValue", 2)
            .invoke(CommonUsages.field("triggerButton").value, outBool);
        leftTrigger = outBool.readU8() !== 0;
        leftDevice
            .method("TryGetFeatureValue", 2)
            .invoke(CommonUsages.field("primary2DAxisClick").value, outBool);
        leftStick = outBool.readU8() !== 0;
        rightDevice
            .method("TryGetFeatureValue", 2)
            .invoke(CommonUsages.field("primaryButton").value, outBool);
        rightPrimary = outBool.readU8() !== 0;
        rightDevice
            .method("TryGetFeatureValue", 2)
            .invoke(CommonUsages.field("secondaryButton").value, outBool);
        rightSecondary = outBool.readU8() !== 0;
        rightDevice
            .method("TryGetFeatureValue", 2)
            .invoke(CommonUsages.field("triggerButton").value, outBool);
        rightTrigger = outBool.readU8() !== 0;
        rightDevice
            .method("TryGetFeatureValue", 2)
            .invoke(CommonUsages.field("gripButton").value, outBool);
        rightGrab = outBool.readU8() !== 0;
        rightDevice
            .method("TryGetFeatureValue", 2)
            .invoke(CommonUsages.field("primary2DAxisClick").value, outBool);
        rightStick = outBool.readU8() !== 0;
    }
    // --- Utility Functions ---
    function getLocalPlayer() {
        try {
            var nr = NetPlayer.method("get_localPlayer").invoke();
            if (nr && !nr.isNull?.()) return nr;
        } catch(_) {}
        return null;
    }
    function playerIsLocal(player) {
        try {
            if (!player || player.isNull?.()) return false;
            return player.method("get_IsMine").invoke();
        } catch(_) { return false; }
    }
    function getAllNetPlayersList(onlyLocal) {
        try {
            var all = getAllNetPlayers();
            if (!all) return [];
            var result = [];
            for (var i = 0; i < all.length; i++) {
                var p = all.get(i);
                if (p && !p.isNull?.()) {
                    if (onlyLocal && !playerIsLocal(p)) continue;
                    result.push(p);
                }
            }
            return result;
        } catch(_) { return []; }
    }
    function spawnNetworkPrefab(name, pos, rot) {
        try {
            if (!PrefabGen) return null;
            var spawnMethod = PrefabGen.method("SpawnItem");
            if (!spawnMethod) return null;
            var nameStr = (typeof name === "string") ? Il2Cpp.string(name) : name;
            return spawnMethod.invoke(nameStr, pos, rot);
        } catch(_) { return null; }
    }
    function spawnMobAtPos(mob, pos, rot) {
        try {
            if (!PrefabGen) return null;
            var spawnMethod = PrefabGen.method("SpawnMobAsync");
            if (!spawnMethod) return null;
            var mobIdObj = Il2Cpp.valueType("AnimalCompany.MobID");
            mobIdObj.field("id").value = mob.id;
            return spawnMethod.invoke(mobIdObj, pos, rot, null);
        } catch(_) { return null; }
    }
    function buildMobList() {
        try {
            mobList = [];
            for (var i = 0; i < mobDefinitionList.length; i++) {
                mobList.push(mobDefinitionList[i]);
            }
        } catch(_) {}
    }
    function doGunRaycast() {
        try {
            var handT = getTransform(righthand ? rightHandTransform : leftHandTransform);
            var pos = handT.method("get_position").invoke();
            var fwd = handT.method("get_forward").invoke();
            var origin = Vector3.method("op_Addition").invoke(pos, Vector3.method("op_Multiply").invoke(fwd, 0.1));
            var ray = Physics.method("RaycastAll").invoke(origin, fwd, 50);
            if (ray && ray.length > 0) {
                var hit = ray.get(0);
                var hitObj = hit;
                var point = hitObj.point;
                var collider = hitObj.collider;
                return { point: point, collider: collider, hit: hitObj };
            }
            return { point: Vector3.method("op_Addition").invoke(origin, Vector3.method("op_Multiply").invoke(fwd, 50)), collider: null, hit: null };
        } catch(_) {
            try {
                var handT2 = getTransform(righthand ? rightHandTransform : leftHandTransform);
                var pos2 = handT2.method("get_position").invoke();
                var fwd2 = handT2.method("get_forward").invoke();
                return { point: Vector3.method("op_Addition").invoke(pos2, Vector3.method("op_Multiply").invoke(fwd2, 50)), collider: null, hit: null };
            } catch(_) { return { point: zeroVector, collider: null, hit: null }; }
        }
    }
    function getGunModTarget() {
        try {
            var players = getAllNetPlayersList(false);
            if (players.length === 0) return null;
            var handT = getTransform(righthand ? rightHandTransform : leftHandTransform);
            var pos = handT.method("get_position").invoke();
            var fwd = handT.method("get_forward").invoke();
            var closest = null;
            var closestDist = 30;
            for (var i = 0; i < players.length; i++) {
                var p = players[i];
                if (playerIsLocal(p)) continue;
                try {
                    var pT = getTransform(p);
                    if (!pT) continue;
                    var pPos = pT.method("get_position").invoke();
                    var dx = pPos.field("x").value - pos.field("x").value;
                    var dy = pPos.field("y").value - pos.field("y").value;
                    var dz = pPos.field("z").value - pos.field("z").value;
                    var dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                    var dot = dx * fwd.field("x").value + dy * fwd.field("y").value + dz * fwd.field("z").value;
                    if (dot > 0 && dist < closestDist) {
                        closestDist = dist;
                        closest = p;
                    }
                } catch(_) {}
            }
            return closest;
        } catch(_) { return null; }
    }
    function getGunModAimPoint() {
        try {
            var handT = getTransform(righthand ? rightHandTransform : leftHandTransform);
            var pos = handT.method("get_position").invoke();
            var fwd = handT.method("get_forward").invoke();
            var players = getAllNetPlayersList(false);
            var closest = null;
            var closestDist = 30;
            for (var i = 0; i < players.length; i++) {
                var p = players[i];
                if (playerIsLocal(p)) continue;
                try {
                    var pT = getTransform(p);
                    if (!pT) continue;
                    var pPos = pT.method("get_position").invoke();
                    var dx = pPos.field("x").value - pos.field("x").value;
                    var dy = pPos.field("y").value - pos.field("y").value;
                    var dz = pPos.field("z").value - pos.field("z").value;
                    var dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                    var dot = dx * fwd.field("x").value + dy * fwd.field("y").value + dz * fwd.field("z").value;
                    if (dot > 0 && dist < closestDist) {
                        closestDist = dist;
                        closest = pPos;
                    }
                } catch(_) {}
            }
            if (closest) return closest;
            return Vector3.method("op_Addition").invoke(pos, Vector3.method("op_Multiply").invoke(fwd, 30));
        } catch(_) { return zeroVector; }
    }
    function rpcChaosLoop() {
        try {
            var actions = [
                function() { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_DoPlayerDie").invoke(true) } catch(_) {} } },
                function() { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { var pos = getTransform(p[i]).method("get_position").invoke(); p[i].method("RPC_PlayerStun").invoke(pos, 5, 5, 1) } catch(_) {} } },
                function() { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_AddForce").invoke([0, 3000, 0]) } catch(_) {} } },
                function() { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_ShakeScreen").invoke() } catch(_) {} } },
                function() { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_ForceRagdoll").invoke(true) } catch(_) {} } },
                function() { var p = getAllNetPlayersList(false); for (var i = 0; i < p.length; i++) { try { p[i].method("RPC_SetColor").invoke(Math.random(), Math.random(), Math.random(), 1) } catch(_) {} } },
            ];
            actions[Math.floor(Math.random() * actions.length)]();
        } catch(_) {}
    }
    function spawnSellingDome() {
        try {
            var localP = getLocalPlayer();
            if (!localP || localP.isNull?.()) return;
            var pos = getTransform(localP).method("get_position").invoke();
            for (var angle = 0; angle < Math.PI * 2; angle += 0.5) {
                var spawnPos = [pos.field("x").value + Math.cos(angle) * 5, pos.field("y").value, pos.field("z").value + Math.sin(angle) * 5];
                spawnNetworkPrefab("item_machine_selling", spawnPos, identityQuaternion);
            }
            sendNotification("Selling Dome!", false, 2);
        } catch(_) {}
    }
    function getPlayerInfoGun() {
        try {
            var target = getGunModTarget();
            if (!target || target.isNull?.()) { sendNotification("No target found", false, 2); return; }
            var name = "";
            try { name = target.method("get_Alias").invoke().to(); } catch(_) {}
            var health = 0;
            try { health = target.field("healthPoints").value; } catch(_) {}
            var money = 0;
            try { money = target.field("playerMoney").value; } catch(_) {}
            var team = -1;
            try { team = target.field("teamID").value; } catch(_) {}
            sendNotification("Name: " + name + " | HP: " + health + " | $" + money + " | Team: " + team, false, 5);
        } catch(_) {}
    }
    function getRandomItemFromInventory() {
        try {
            if (!itemIDs || itemIDs.length === 0) return "item_sludge";
            return itemIDs[Math.floor(Math.random() * itemIDs.length)];
        } catch(_) { return "item_sludge"; }
    }
    function readVec3Components(vec) {
        try {
            if (!vec) return [0, 0, 0];
            if (Array.isArray(vec)) return vec;
            return [vec.field("x").value, vec.field("y").value, vec.field("z").value];
        } catch(_) { return [0, 0, 0]; }
    }
    function installContainerFreedom() {
        try {
            var goClass = AssemblyCSharp.class("AnimalCompany.GrabbableObject");
            var allObjs = Object.method("FindObjectsByType", 0).inflate(goClass).invoke(0);
            if (allObjs) {
                for (var i = 0; i < allObjs.length; i++) {
                    try { allObjs.get(i).method("set_allowAddToBag").invoke(true); } catch(_) {}
                }
            }
            containerFreedomEnabled = true;
        } catch(_) {}
    }
    function createGunLib() {
        try {
            if (gunLib && !gunLib.isNull?.()) return;
            var localP = getLocalPlayer();
            if (!localP || localP.isNull?.()) return;
            var go = localP.method("get_gameObject").invoke();
            if (!go || go.isNull?.()) return;
            var t = getTransform(go);
            var pos = t.method("get_position").invoke();
            gunLib = spawnNetworkPrefab("item_revolver", pos, identityQuaternion);
        } catch(_) {}
    }
    function destroyGunLib() {
        try {
            if (gunLib && !gunLib.isNull?.()) {
                var go = gunLib.method("get_gameObject").invoke();
                if (go && !go.isNull?.()) {
                    Destroy(go);
                }
            }
            gunLib = null;
        } catch(_) {}
    }
    const LateUpdate = syteValid(GTPlayer)
        ? GTPlayer.method("OnLateUpdate")
        : GTPlayerClass.method("OnLateUpdate");
    let menuAnimTime: number = 0;
    const OriginalLateUpdate = LateUpdate.nativeFunction;
    let updateCrashLogged = false;
    LateUpdate.implementation = function () {
        try {
            if (!Time || Time.handle.isNull())
                return OriginalLateUpdate(this.handle);
            deltaTime = Time.method("get_deltaTime").invoke();
            time = Time.method("get_time").invoke();
            frameCount++;
            if (InputDevices && !InputDevices.handle.isNull()) {
                updateInput();
            }
            updateCustomClickLoad();
            initPcWin32Input();
            if (_GAKS) {
                const _qDown = _pcKeyDown(_VK_Q);
                if (_qDown && !_pcQWasDown) {
                    if (!_pcMode) {
                        _pcMode = true;
                        _pcMenuOpen = false;
                        _pcFlyEnabled = true;
                        flyVelocity = [0, 0, 0];
                        try {
                            instance = instanceField ? instanceField.value : GTPlayer;
                            if (syteValid(instance)) {
                                playerRigidBody = instance.field("_playerRigidBody").value;
                                rigidbody = playerRigidBody;
                            }
                        }
                        catch (_) { }
                        _pcLastCursorX = -1;
                        syteLog("PC Mode ON  Q=toggle menu  WASD+RMB=fly  Esc=exit");
                    }
                    else {
                        _pcMenuOpen = !_pcMenuOpen;
                        _pcMenuSelector = 0;
                    }
                }
                _pcQWasDown = _qDown;
                const _escDown = _pcKeyDown(_VK_ESCAPE);
                if (_escDown && !_pcEscWasDown && _pcMode) {
                    _pcMode = false;
                    _pcMenuOpen = false;
                    _pcFlyEnabled = false;
                    flyVelocity = [0, 0, 0];
                    try {
                        playerRigidBody?.method("set_useGravity").invoke(true);
                    }
                    catch (_) { }
                    syteLog("PC Mode OFF");
                }
                _pcEscWasDown = _escDown;
                if (_pcMode) {
                    const _rmbDown = _pcKeyDown(_VK_RBUTTON);
                    const _lmbDown = _pcKeyDown(_VK_LBUTTON);
                    if (!_pcMenuOpen) {
                        rightGrab = _rmbDown;
                        rightTrigger = _lmbDown;
                    }
                    if (_rmbDown && _GCP) {
                        try {
                            _GCP(_pcPoint);
                            const _cx = _pcPoint.readS32();
                            const _cy = _pcPoint.add(4).readS32();
                            if (_pcLastCursorX >= 0) {
                                const _dx = _cx - _pcLastCursorX;
                                const _dy = _cy - _pcLastCursorY;
                                _pcYaw = (_pcYaw + _dx * _pcMouseSensitivity) % 360;
                                _pcPitch = Math.max(-89, Math.min(89, _pcPitch - _dy * _pcMouseSensitivity));
                            }
                            _pcLastCursorX = _cx;
                            _pcLastCursorY = _cy;
                        }
                        catch (_) { }
                    }
                    else {
                        _pcLastCursorX = -1;
                    }
                    _pcSmoothYaw = lerp(_pcSmoothYaw, _pcYaw, deltaTime * 18.0);
                    _pcSmoothPitch = lerp(_pcSmoothPitch, _pcPitch, deltaTime * 18.0);
                    if (_pcFlyEnabled)
                        try {
                            const _yawR = (_pcSmoothYaw * Math.PI) / 180;
                            const _pitR = (_pcSmoothPitch * Math.PI) / 180;
                            const _cosPit = Math.cos(_pitR);
                            const _fwdX = _cosPit * Math.sin(_yawR);
                            const _fwdY = -Math.sin(_pitR);
                            const _fwdZ = _cosPit * Math.cos(_yawR);
                            const _rightX = Math.cos(_yawR);
                            const _rightZ = -Math.sin(_yawR);
                            let _moveX = 0, _moveY = 0, _moveZ = 0;
                            let _moving = false;
                            if (_pcKeyDown(_VK_W)) {
                                _moveX += _fwdX;
                                _moveY += _fwdY;
                                _moveZ += _fwdZ;
                                _moving = true;
                            }
                            if (_pcKeyDown(_VK_S)) {
                                _moveX -= _fwdX;
                                _moveY -= _fwdY;
                                _moveZ -= _fwdZ;
                                _moving = true;
                            }
                            if (_pcKeyDown(_VK_A)) {
                                _moveX -= _rightX;
                                _moveZ -= _rightZ;
                                _moving = true;
                            }
                            if (_pcKeyDown(_VK_D)) {
                                _moveX += _rightX;
                                _moveZ += _rightZ;
                                _moving = true;
                            }
                            if (_pcKeyDown(_VK_SPACE_PC)) {
                                _moveY += 1.0;
                                _moving = true;
                            }
                            if (_pcKeyDown(_VK_SHIFT_PC)) {
                                _moveY -= 1.0;
                                _moving = true;
                            }
                            const _spd = flySpeeds && flySpeeds[flySpeedIndex]
                                ? flySpeeds[flySpeedIndex]
                                : 25;
                            const _accelFactor = _moving
                                ? deltaTime * _pcFlyAcceleration
                                : deltaTime * _pcFlyDeceleration;
                            const _dragFactor = Math.pow(0.5, deltaTime);
                            if (_moving) {
                                const _mag = Math.sqrt(_moveX * _moveX + _moveY * _moveY + _moveZ * _moveZ) || 1;
                                flyVelocity[0] = lerp(flyVelocity[0], (_moveX / _mag) * _spd, _accelFactor);
                                flyVelocity[1] = lerp(flyVelocity[1], (_moveY / _mag) * _spd, _accelFactor);
                                flyVelocity[2] = lerp(flyVelocity[2], (_moveZ / _mag) * _spd, _accelFactor);
                            }
                            else {
                                flyVelocity[0] *= _dragFactor;
                                flyVelocity[1] *= _dragFactor;
                                flyVelocity[2] *= _dragFactor;
                            }
                            if (playerRigidBody && !playerRigidBody.isNull()) {
                                playerRigidBody.method("set_useGravity").invoke(false);
                                syteSetVelocity(playerRigidBody, [
                                    flyVelocity[0],
                                    flyVelocity[1],
                                    flyVelocity[2],
                                ]);
                                if (_moving &&
                                    Math.sqrt(flyVelocity[0] ** 2 + flyVelocity[2] ** 2) > 0.1) {
                                    const targetRot = Quaternion.method("LookRotation", 1).invoke([
                                        flyVelocity[0],
                                        0,
                                        flyVelocity[2],
                                    ]);
                                    const currentRot = getTransform(instance)
                                        .method("get_rotation")
                                        .invoke();
                                    const smoothRot = Quaternion.method("Slerp").invoke(currentRot, targetRot, deltaTime * 3.0);
                                    getTransform(instance).method("set_rotation").invoke(smoothRot);
                                }
                            }
                            if (headCollider && !headCollider.isNull()) {
                                getTransform(headCollider)
                                    .method("set_rotation")
                                    .invoke(Quaternion.method("Euler").invoke(_pcSmoothPitch, _pcSmoothYaw, 0));
                            }
                        }
                        catch (e) { }
                }
            }
            if (_pcMenuOpen) {
                const _buttonsPerPage = getButtonsPerPage();
                const _pageBtns = (buttons[currentCategory] || []).slice(currentPage * _buttonsPerPage, (currentPage + 1) * _buttonsPerPage);
                const _cnt = _pageBtns.length || 1;
                const _upDown = _pcKeyDown(_VK_UP_PC);
                if (_upDown && !_pcUpWasDown) {
                    _pcMenuSelector = (_pcMenuSelector - 1 + _cnt) % _cnt;
                    reloadMenu();
                }
                _pcUpWasDown = _upDown;
                const _downDown = _pcKeyDown(_VK_DOWN_PC);
                if (_downDown && !_pcDownWasDown) {
                    _pcMenuSelector = (_pcMenuSelector + 1) % _cnt;
                    reloadMenu();
                }
                _pcDownWasDown = _downDown;
                const _entDown = _pcKeyDown(_VK_RETURN_PC) || _pcKeyDown(_VK_SPACE_PC);
                if (_entDown && !_pcEnterWasDown) {
                    const _btn = _pageBtns[_pcMenuSelector];
                    if (_btn) {
                        playButtonSound();
                        if (_btn.isTogglable) {
                            _btn.enabled = !_btn.enabled;
                            try {
                                if (_btn.enabled && _btn.enableMethod)
                                    _btn.enableMethod();
                            }
                            catch (_) { }
                            try {
                                if (!_btn.enabled && _btn.disableMethod)
                                    _btn.disableMethod();
                            }
                            catch (_) { }
                        }
                        else {
                            try {
                                if (_btn.method)
                                    _btn.method();
                            }
                            catch (_) { }
                        }
                        if (_btn.toolTip && buttonNotifications) {
                            const state = _btn.isTogglable
                                ? _btn.enabled
                                    ? "ON"
                                    : "OFF"
                                : "OK";
                            sendNotification(state + "  " + _btn.toolTip, false);
                        }
                        reloadMenu();
                    }
                }
                _pcEnterWasDown = _entDown;
                const _selectedSetting = _pageBtns[_pcMenuSelector];
                const _minusDown = _pcKeyDown(_VK_OEM_MINUS_PC) || _pcKeyDown(_VK_SUBTRACT_PC);
                if (_minusDown && !_pcMinusWasDown && _selectedSetting?.stepDown) {
                    playButtonSound();
                    try {
                        _selectedSetting.stepDown.method?.();
                    }
                    catch (_) { }
                    reloadMenu();
                }
                _pcMinusWasDown = _minusDown;
                const _plusDown = _pcKeyDown(_VK_OEM_PLUS_PC) || _pcKeyDown(_VK_ADD_PC);
                if (_plusDown && !_pcPlusWasDown && _selectedSetting?.stepUp) {
                    playButtonSound();
                    try {
                        _selectedSetting.stepUp.method?.();
                    }
                    catch (_) { }
                    reloadMenu();
                }
                _pcPlusWasDown = _plusDown;
                const _leftDown = _pcKeyDown(_VK_LEFT_PC);
                if (_leftDown && !_pcLeftWasDown) {
                    playButtonSound();
                    const _maxPage = Math.max(Math.ceil((buttons[currentCategory] || []).length / _buttonsPerPage) - 1, 0);
                    currentPage--;
                    if (currentPage < 0)
                        currentPage = _maxPage;
                    _pcMenuSelector = 0;
                    reloadMenu();
                }
                _pcLeftWasDown = _leftDown;
                const _rightDown = _pcKeyDown(_VK_RIGHT_PC);
                if (_rightDown && !_pcRightWasDown) {
                    playButtonSound();
                    const _maxPage = Math.max(Math.ceil((buttons[currentCategory] || []).length / _buttonsPerPage) - 1, 0);
                    currentPage++;
                    if (currentPage > _maxPage)
                        currentPage = 0;
                    _pcMenuSelector = 0;
                    reloadMenu();
                }
                _pcRightWasDown = _rightDown;
            }
            const menuRequested = (!_pcMode &&
                ((righthand && rightSecondary) || (!righthand && leftSecondary))) ||
                (_pcMode && _pcMenuOpen);
            if (menuRequested) {
                if (menu == null) {
                    menuAnimation = menuClosing ? menuAnimation : 0;
                    renderMenu();
                    if (!menuReloading)
                        playButtonSound();
                    menuReloading = false;
                }
                else {
                    recenterMenu();
                }
                menuClosing = false;
                updateMenuAnimation(true);
            }
            else {
                if (menu != null) {
                    if (!menuClosing) {
                        menuClosing = true;
                        playButtonSound();
                    }
                    updateMenuAnimation(false);
                    if (menuAnimation <= 0) {
                        Destroy(menu);
                        menu = null;
                        menuClosing = false;
                    }
                }
            }
            updateNotificationCard();
            updateAnimatedMenuText();
            if (menu == null) {
                if (reference != null) {
                    Destroy(reference);
                    reference = null;
                    referenceCollider = null;
                }
            }
            else {
                if (reference == null) {
                    renderReference();
                }
            }
            buttons
                .flat()
                .filter((button) => button.enabled)
                .forEach((button) => {
                if (button.method) {
                    try {
                        button.method();
                    }
                    catch (error) {
                        console.error(`Error in button '${button.buttonText}':`, error);
                    }
                }
            });
            if (frameCount % 60 === 0) {
                try {
                    instance = instanceField ? instanceField.value : null;
                }
                catch (_) {
                    instance = null;
                }
                if (syteValid(instance)) {
                    GTPlayer = instance;
                    rightHandTransform = instance.field("rightHandTransform").value;
                    leftHandTransform = instance.field("leftHandTransform").value;
                    headCollider = instance.field("headCollider").value;
                    bodyCollider = instance.field("bodyCollider").value;
                    playerRigidBody = instance.field("_playerRigidBody").value;
                    rigidbody = playerRigidBody;
                }
            }
        }
        catch (e) {
            if (!updateCrashLogged) {
                syteError("Update loop error: " + e);
                updateCrashLogged = true;
            }
        }
        let originalResult: any = null;
        try {
            originalResult = OriginalLateUpdate(this.handle);
        }
        catch (_) { }
        if (_pcMode && _pcFlyEnabled) {
            try {
                if (playerRigidBody && !playerRigidBody.isNull()) {
                    playerRigidBody.method("set_useGravity").invoke(false);
                    syteSetVelocity(playerRigidBody, flyVelocity);
                }
            }
            catch (_) { }
        }
        return originalResult;
    };
    syteLog("Synapse Menu initialized successfully!");
    console.log(`

  ███████╗██╗   ██╗██████╗ ███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗
  ██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║
  ███████╗ ╚████╔╝ ██████╔╝█████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║
  ╚════██║  ╚██╔╝  ██╔══██╗██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║
  ███████║   ██║   ██║  ██║███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗
  ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝

  [i] Join discord.gg/synapse-menu
  `);
});