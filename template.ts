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
let bypassSellLimitEnabled = false;
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
let femboyBgTried = false;
let menuBgTexture: any = null;
let shrekBgTexture: any = null;
let shrekBgTried = false;
let shrekThemeActive = false;
let femboyBgBase64 = "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";
const SHREK_BG_B64 = "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";
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
let toastRoot: any = null;
let toastTextComp: any = null;
let toastText: string = "";
let toastExpire: number = 0;
let toastBgObj: any = null;
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
let minigunRainbowColors = [[1,0,0,1],[1,0.5,0,1],[1,1,0,1],[0,1,0,1],[0,0.5,1,1],[0,0,1,1],[0.5,0,1,1]];
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

let omniFloatVictims: any[] = [];
let omniFloatBalls: any[] = [];
let omniKidnapTarget: any = null;
function omniFindAllClass(_className: string): any[] {
    try {
        const _cls = acImage.class(_className);
        const _arr = UnityObjectCls.method("FindObjectsOfType", 0)
            .inflate(_cls)
            .invoke();
        const _out: any[] = [];
        let _len = 0;
        try {
            if (_arr && typeof _arr.length === "number")
                _len = _arr.length;
        }
        catch (_) { }
        try {
            if (!_len && _arr && _arr.method)
                _len = _arr.method("get_Length").invoke();
        }
        catch (_) { }
        for (let _i = 0; _i < _len; _i++) {
            try {
                let _o: any = null;
                try { _o = _arr.get ? _arr.get(_i) : null; } catch (_e) { }
                try { if (!_o && _arr.method) _o = _arr.method("GetValue").invoke(_i); } catch (_e) { }
                if (!_o) _o = _arr[_i];
                if (_o && (!_o.handle || !_o.handle.isNull()))
                    _out.push(_o);
            }
            catch (_) { }
        }
        return _out;
    }
    catch (_) {
        return [];
    }
}
function omniAllNetPlayers(): any[] {
    const _out: any[] = [];
    const _push = (_pl: any) => {
        try {
            if (_pl && (!_pl.handle || !_pl.handle.isNull()))
                _out.push(_pl);
        }
        catch (_) { }
    };
    try {
        const _net = acImage.class("AnimalCompany.NetPlayer");
        for (const _src of [
            () => _net.method("get_spawnedPlayers").invoke(),
            () => _net.field("_spawnedPlayers").value,
            () => _net.field("playerIDToNetPlayer").value,
        ]) {
            try {
                for (const _pl of omniCollectionToArray(_src()))
                    _push(_pl);
            }
            catch (_) { }
        }
        try { _push(_net.method("get_localPlayer").invoke()); } catch (_) { }
    }
    catch (_) { }
    const _dedup: any[] = [], _seen = new Set();
    for (const _pl of _out) {
        let _key = "";
        try { _key = omniGetPlayerUserId(_pl) || String(_pl.handle || _pl); }
        catch (_) { _key = String(_pl); }
        if (_seen.has(_key)) continue;
        _seen.add(_key);
        _dedup.push(_pl);
    }
    return _dedup;
}
function omniAllRemoteUsers(): any[] {
    const _out: any[] = [];
    for (const _pl of omniAllNetPlayers()) {
        try {
            if (!_pl || (_pl.handle && _pl.handle.isNull()) || omniIsLocalPlayer(_pl))
                continue;
            _out.push(_pl);
        }
        catch (_) { }
    }
    return _out;
}
function omniIsLocalPlayer(_rig: any): boolean {
    try { return !!_rig.method("get_IsMine").invoke(); } catch (_) { }
    try { return !!_rig.property("IsMine").value; } catch (_) { }
    return false;
}
function omniGetPlayerUserId(_rig: any): string {
    try {
        const _s = omniValueString(_rig.method("get_userID").invoke());
        if (_s && _s !== "null" && _s !== "???" && _s !== "[object Object]") return _s;
    }
    catch (_) { }
    try {
        const _s = omniValueString(_rig.field("_userID").value);
        if (_s && _s !== "null" && _s !== "???" && _s !== "[object Object]") return _s;
    }
    catch (_) { }
    try {
        const _pid = _rig.method("get_playerID").invoke();
        return "pid:" + _pid;
    }
    catch (_) { }
    return "";
}
function omniValueString(_v: any): string {
    try { if (_v && typeof _v.content === "string") return _v.content; } catch (_) { }
    try { if (_v && _v.value !== undefined) return omniValueString(_v.value); } catch (_) { }
    try { if (_v && _v.method) return omniValueString(_v.method("get_Value").invoke()); } catch (_) { }
    try {
        const _m = omniManagedString(_v);
        if (_m && _m !== "???" && _m !== "null" && _m !== "undefined" && _m !== "[object Object]") return _m;
    }
    catch (_) { }
    try { if (_v && _v.toString) return String(_v.toString()); } catch (_) { }
    return String(_v || "");
}
function omniCollectionToArray(_col: any): any[] {
    const _out: any[] = [];
    if (!_col || (_col.handle && _col.handle.isNull())) return _out;
    let _vals = _col;
    try { _vals = _col.method("get_Values").invoke(); } catch (_) { }
    try { _vals = _col.field("Values").value; } catch (_) { }
    try {
        const _en = _vals.method("GetEnumerator").invoke();
        while (_en.method("MoveNext").invoke()) {
            let _cur = _en.method("get_Current").invoke();
            try { _cur = _cur.method("get_Value").invoke(); } catch (_) { }
            try { if (_cur && _cur.field) { const _v = _cur.field("value").value; if (_v) _cur = _v; } } catch (_) { }
            if (_cur && (!_cur.handle || !_cur.handle.isNull()))
                _out.push(_cur);
        }
    }
    catch (_) { }
    return _out;
}
function omniManagedString(_s: any): string {
    try { if (_s && typeof _s.content === "string") return _s.content; } catch (_) { }
    try { if (_s && _s.content) return String(_s.content); } catch (_) { }
    return String(_s);
}
function destroyObject(_obj: any) {
    Object.method("Destroy", 1).invoke(_obj);
}
let handFlyEnabled = false;
let speedHackEnabled = false;
let armScaleIndex = 0;
let rocketFistsEnabled = false;
let rocketRideEnabled = false;
let rocketRideInterval: any = null;
Il2Cpp.perform(() => {
    if ((globalThis as any).syteInitialized)
        return;
    (globalThis as any).syteInitialized = true;
    function syteLog(msg: string) {
        console.log("[+] " + msg);
        if (msg.indexOf("[+]") === 0 || msg.indexOf("[-]") === 0) {
            showToast(msg.replace(/^\[\+\]\s*/, "").replace(/^\[-\]\s*/, ""), 2.5);
        }
    }
    function syteError(msg: string) {
        console.log("[-] " + msg);
    }
    function showToast(msg: string, duration: number = 3.0) {
        toastText = msg;
        toastExpire = time + duration;
        try {
            if (!toastRoot || toastRoot.isNull?.()) {
                const head = headCollider && !headCollider.isNull?.() ? headCollider : null;
                const followTarget = head ? getTransform(head) : null;
                toastRoot = createObject(zeroVector, identityQuaternion, oneVector, 3, [0, 0, 0, 0], followTarget);
                const t = getTransform(toastRoot);
                t.method("set_localPosition").invoke([0, -0.5, 0.8]);
                t.method("set_localRotation").invoke(identityQuaternion);
                t.method("set_localScale").invoke(oneVector);
                toastBgObj = createObject(zeroVector, identityQuaternion, oneVector, 3, [0.35, 0.20, 0.50, 0.92], getTransform(toastRoot));
                const bgT = getTransform(toastBgObj);
                bgT.method("set_localPosition").invoke([0, 0, 0]);
                bgT.method("set_localScale").invoke([0.5, 0.07, 0.01]);
                ensureShaders();
                if (UberShader) {
                    try { getComponent(toastBgObj, Renderer).method("get_material").invoke().method("set_shader").invoke(UberShader); } catch (_) {}
                }
                ensureFont();
                const textObj = createObject(zeroVector, identityQuaternion, oneVector, 3, [0, 0, 0, 0], getTransform(toastRoot));
                textObj.method("set_localPosition").invoke([0, 0, -0.006]);
                toastTextComp = addComponent(textObj, Text);
                toastTextComp.method("set_font").invoke(menuFont);
                toastTextComp.method("set_fontSize").invoke(1);
                toastTextComp.method("set_color").invoke([1, 1, 1, 1]);
                toastTextComp.method("set_alignment").invoke(4);
                toastTextComp.method("set_supportRichText").invoke(true);
                toastTextComp.method("set_resizeTextForBestFit").invoke(true);
                toastTextComp.method("set_resizeTextMinSize").invoke(0);
                const rt = getComponent(toastTextComp, RectTransform);
                rt.method("set_sizeDelta").invoke([0.46, 0.04]);
                rt.method("set_localPosition").invoke([0, 0, 0]);
            }
            if (toastTextComp && !toastTextComp.isNull?.()) {
                toastTextComp.method("set_text").invoke(Il2Cpp.string(msg));
            }
        } catch (_) {}
    }
    function updateToast() {
        if (!toastRoot || toastRoot.isNull?.()) return;
        if (time > toastExpire) {
            try { Destroy(toastRoot); } catch (_) {}
            toastRoot = null;
            toastTextComp = null;
            toastBgObj = null;
            return;
        }
        const remaining = toastExpire - time;
        const fade = Math.min(1, remaining / 0.4);
        try {
            if (headCollider && !headCollider.isNull?.()) {
                const headT = getTransform(headCollider);
                const headPos = headT.method("get_position").invoke();
                const headForward = headT.method("get_forward").invoke();
                const t = getTransform(toastRoot);
                const px = headPos.field("x").value + headForward.field("x").value * 0.8;
                const py = headPos.field("y").value - 0.5;
                const pz = headPos.field("z").value + headForward.field("z").value * 0.8;
                t.method("set_position").invoke([px, py, pz]);
                t.method("set_rotation").invoke(headT.method("get_rotation").invoke());
            }
            const bgRenderer = toastBgObj && !toastBgObj.isNull?.() ? getComponent(toastBgObj, Renderer) : null;
            if (bgRenderer && !bgRenderer.isNull?.()) {
                const mat = bgRenderer.method("get_material").invoke();
                mat.method("set_color").invoke([0.35, 0.20, 0.50, 0.92 * fade]);
            }
            if (toastTextComp && !toastTextComp.isNull?.()) {
                toastTextComp.method("set_color").invoke([1, 1, 1, fade]);
            }
        } catch (_) {}
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
    let Renderer: any = null, Shader: any = null, Color: any = null, Mesh: any = null, MeshFilter: any = null, RectTransform: any = null, LineRenderer: any = null, Camera: any = null, PlayerPrefs: any = null, GBOClass: any = null, BackpackItemClass: any = null, Light: any = null, AudioSource: any = null, MeshCollider: any = null, BoxCollider: any = null, SphereCollider: any = null, Collider: any = null, Rigidbody: any = null, Physics: any = null;
    let Canvas: any = null, CanvasScaler: any = null, GraphicRaycaster: any = null, Text: any = null, Font: any = null;
    GTPlayer = null;
    instance = null;
    UberShader = null;
    TextShader = null;
    GTPlayerClass = AssemblyCSharp.class("AnimalCompany.GorillaLocomotion");
    PCClass = AssemblyCSharp.class("AnimalCompany.PlayerController");
    NetPlayer = AssemblyCSharp.class("AnimalCompany.NetPlayer");
    var NetPlayerCls = NetPlayer;
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
    SphereCollider = UnityEnginePhysics.class("UnityEngine.SphereCollider");
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
            const tex = Texture2DClass.alloc();
            tex.method(".ctor", 4).invoke(64, 64, 4, true);
            const w = 64, h = 64;
            const ColorClass = UnityEngineCore.class("UnityEngine.Color");
            const SetPixel = tex.method("SetPixel", 3);
            for (let y = 0; y < h; y++) {
                for (let x = 0; x < w; x++) {
                    const nx = x / w, ny = y / h;
                    const wave1 = 0.5 + 0.5 * Math.sin(nx * 6.28 + ny * 4);
                    const wave2 = 0.5 + 0.5 * Math.sin(nx * 4 - ny * 6.28 + 1);
                    const r = 0.95 - wave1 * 0.25 + wave2 * 0.15;
                    const g = 0.75 - wave1 * 0.15 + wave2 * 0.10;
                    const b = 0.88 + wave1 * 0.10 + wave2 * 0.12;
                    const col = Memory.alloc(16);
                    col.writeF32(r);
                    col.add(4).writeF32(g);
                    col.add(8).writeF32(b);
                    col.add(12).writeF32(1.0);
                    SetPixel.invoke(x, y, Il2Cpp.pointer(col));
                }
            }
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
            if (femboyThemeEnabled) {
                const pr = Math.round(255 * (1 - wave) + 180 * wave);
                const pg = Math.round(105 * (1 - wave) + 140 * wave);
                const pb = Math.round(180 * (1 - wave) + 255 * wave);
                const rHex = pr.toString(16).padStart(2, "0");
                const gHex = pg.toString(16).padStart(2, "0");
                const bHex = pb.toString(16).padStart(2, "0");
                result += `<color=#${rHex}${gHex}${bHex}>${character}</color>`;
            } else {
                const grey = Math.round(textGradientDarkTone +
                    wave * (textGradientLightTone - textGradientDarkTone));
                const hex = grey.toString(16).padStart(2, "0");
                result += `<color=#${hex}${hex}${hex}>${character}</color>`;
            }
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
        if (primitiveType !== 0) {
            try { Destroy(getComponent(obj, BoxCollider)); } catch (_) { }
            try { Destroy(getComponent(obj, MeshCollider)); } catch (_) { }
            try { Destroy(getComponent(obj, Collider)); } catch (_) { }
            try {
                const rb = getComponent(obj, Rigidbody);
                if (rb && !rb.isNull?.()) Destroy(rb);
            } catch (_) { }
        }
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
            if (keepCollider) {
                try {
                    const bc = addComponent(layer, BoxCollider);
                    bc.method("set_isTrigger").invoke(true);
                } catch (_) { }
            }
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
        const menuBackground = createOutlinedRoundedObject([0.1, 0, panelCenterZ], [0.1, 0.72, panelScaleZ], bgColor, menuOutlineColor, getTransform(menu), false, menuOutlineThickness);
        if (femboyThemeEnabled && menuBgTexture && !menuBgTexture.isNull?.()) {
            try { applyMenuBgTexture(menuBackground); } catch (_) {}
        } else if (femboyThemeEnabled) {
            try { applyFemboyBgImage(menuBackground); } catch (_) {}
        } else if (shrekThemeActive && menuBgTexture && !menuBgTexture.isNull?.()) {
            try { applyMenuBgTexture(menuBackground); } catch (_) {}
        }
        const canvasObject = createObject(zeroVector, identityQuaternion, oneVector, 3, [0, 0, 0, 0], getTransform(menu));
        const canvas = addComponent(canvasObject, Canvas);
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
            reference.method("set_layer").invoke(2);
            referenceCollider = addComponent(reference, SphereCollider);
            addComponent(reference, Rigidbody).method("set_isKinematic").invoke(true);
            getTransform(reference)
                .method("set_localPosition")
                .invoke([0.01, -0.117, 0.05]);
        }
        else {
            reference = createObject(zeroVector, identityQuaternion, [0.01, 0.01, 0.01], 0, bgColor, rightHandTransform);
            reference.method("set_layer").invoke(2);
            referenceCollider = addComponent(reference, SphereCollider);
            addComponent(reference, Rigidbody).method("set_isKinematic").invoke(true);
            getTransform(reference)
                .method("set_localPosition")
                .invoke([0.01, -0.117, 0.05]);
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
    
        function getFemboyBgTexture() {
        if (femboyBgTexture && !femboyBgTexture.isNull?.())
            return femboyBgTexture;
        if (femboyBgTried)
            return null;
        femboyBgTried = true;
        try {
            const Convert = Il2Cpp.domain.assembly("mscorlib").image.class("System.Convert");
            const bytes = Convert.method("FromBase64String", 1).invoke(Il2Cpp.string(femboyBgBase64));
            if (!bytes || bytes.isNull?.())
                return null;
            const Texture2D = UnityEngineCore.class("UnityEngine.Texture2D");
            const tex = Texture2D.alloc();
            tex.method(".ctor", 2).overload("System.Int32", "System.Int32").invoke(2, 2);
            const ImageConversion = Il2Cpp.domain.assembly("UnityEngine.ImageConversionModule").image.class("UnityEngine.ImageConversion");
            const ok = ImageConversion.method("LoadImage", 2).overload("UnityEngine.Texture2D", "System.Byte[]").invoke(tex, bytes);
            if (ok === false)
                return null;
            try {
                tex.method("Apply", 0).invoke();
            }
            catch (_) { }
            femboyBgTexture = tex;
            return tex;
        }
        catch (_) {
            return null;
        }
    }
        function getShrekBgTexture() {
        if (shrekBgTexture && !shrekBgTexture.isNull?.())
            return shrekBgTexture;
        if (shrekBgTried)
            return null;
        shrekBgTried = true;
        try {
            const Convert = Il2Cpp.domain.assembly("mscorlib").image.class("System.Convert");
            const bytes = Convert.method("FromBase64String", 1).invoke(Il2Cpp.string(SHREK_BG_B64));
            if (!bytes || bytes.isNull?.())
                return null;
            const Texture2D = UnityEngineCore.class("UnityEngine.Texture2D");
            const tex = Texture2D.alloc();
            tex.method(".ctor", 2).overload("System.Int32", "System.Int32").invoke(2, 2);
            const ImageConversion = Il2Cpp.domain.assembly("UnityEngine.ImageConversionModule").image.class("UnityEngine.ImageConversion");
            const ok = ImageConversion.method("LoadImage", 2).overload("UnityEngine.Texture2D", "System.Byte[]").invoke(tex, bytes);
            if (ok === false)
                return null;
            try {
                tex.method("Apply", 0).invoke();
            }
            catch (_) { }
            shrekBgTexture = tex;
            return tex;
        }
        catch (_) {
            return null;
        }
    }
        function applyMenuBgTexture(obj: any) {
        try {
            if (!menuBgTexture || menuBgTexture.isNull?.())
                return;
            const rend = getComponent(obj, Renderer);
            if (!rend || rend.isNull?.())
                return;
            const mat = rend.method("get_material").invoke();
            if (!mat || mat.isNull?.())
                return;
            const white = [1, 1, 1, bgColor[3]];
            try {
                mat.method("SetTexture", 2).overload("System.String", "UnityEngine.Texture").invoke(Il2Cpp.string("_BaseMap"), menuBgTexture);
            }
            catch (_) { }
            try {
                mat.method("SetTexture", 2).overload("System.String", "UnityEngine.Texture").invoke(Il2Cpp.string("_MainTex"), menuBgTexture);
            }
            catch (_) { }
            try {
                mat.method("set_mainTexture").invoke(menuBgTexture);
            }
            catch (_) { }
            try {
                mat.method("SetColor", 2).overload("System.String", "UnityEngine.Color").invoke(Il2Cpp.string("_BaseColor"), white);
            }
            catch (_) { }
            try {
                mat.method("set_color").invoke(white);
            }
            catch (_) { }
        }
        catch (_) { }
    }

    
    let mmYeetDelay = 0;
    function mmYeetFire() {
        if (time <= mmYeetDelay) return;
        mmYeetDelay = time + 0.05;
        try {
            let img = acImage;
            if (!img) {
                try { img = Il2Cpp.domain.assembly("AnimalCompany").image; } catch (_) { }
            }
            if (!img) return;
            const rpcsClass = img.class("AnimalCompany.NetSessionRPCs");
            if (!rpcsClass) return;
            const sessionRPCs = rpcsClass.field("_instance").value;
            if (!sessionRPCs || sessionRPCs.isNull?.()) return;
            const netPlayerClass = img.class("AnimalCompany.NetPlayer");
            let localPlayer = null;
            try { localPlayer = netPlayerClass.method("get_localPlayer").invoke(); } catch (_) { }
            if (!localPlayer || localPlayer.isNull?.()) {
                try {
                    const dict = netPlayerClass.field("playerIDToNetPlayer").value;
                    if (dict && !dict.isNull?.()) {
                        const en = dict.method("get_Values").invoke().method("GetEnumerator").invoke();
                        while (en.method("MoveNext").invoke()) {
                            const p = en.method("get_Current").invoke();
                            if (p && !p.isNull?.() && p.method("get_IsMine").invoke()) {
                                localPlayer = p;
                                break;
                            }
                        }
                    }
                }
                catch (_) { }
            }
            if (!localPlayer || localPlayer.isNull?.()) return;
            const playerID = localPlayer.method("get_playerID").invoke();
            try {
                sessionRPCs.method("RPC_NotifyYeetStarted").invoke(playerID, 1);
            }
            catch (_) {
                try {
                    sessionRPCs.method("RPC_NotifyYeetStarted").invoke(playerID, 0);
                }
                catch (_) { }
            }
        }
        catch (e) {
            try { console.error("Yeet Spam: " + e); } catch (_) { }
        }
    }
function styleActionButton(label: string, action: () => void): ButtonInfo {
        return new ButtonInfo({
            buttonText: label,
            method: () => {
                menuBgTexture = null;
                shrekThemeActive = false;
                femboyThemeEnabled = false;
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
                    buttonText: "Fly",
                    enableMethod: () => { flyEnabled = true; sendNotification("Fly ON", false) },
                    disableMethod: () => { flyEnabled = false; sendNotification("Fly OFF", false) },
                    method: () => {},
                    onUpdate: () => {
                      if (!flyEnabled) return;
                      try {
                        if (!playerRigidBody || playerRigidBody.isNull?.()) {
                          var localP = getLocalPlayer();
                          if (!localP || localP.isNull?.()) return;
                          var go = localP.method("get_gameObject").invoke();
                          if (!go || go.isNull?.()) return;
                          playerRigidBody = go.method("GetComponent", 0).inflate(Rigidbody).invoke();
                        }
                        if (!playerRigidBody || playerRigidBody.isNull?.()) return;
                        playerRigidBody.method("set_useGravity").invoke(false);
                        if (rightTrigger || rightGrab) {
                          var fwd = rightHandTransform.method("get_forward").invoke();
                          var force = Vector3.method("op_Multiply", 2).invoke(fwd, flySpeed * deltaTime * 1.5);
                          playerRigidBody.method("AddForce", 2).invoke(force, 2);
                        }
                        if (leftTrigger || leftGrab) {
                          var fwd = leftHandTransform.method("get_forward").invoke();
                          var force = Vector3.method("op_Multiply", 2).invoke(fwd, flySpeed * deltaTime * 1.5);
                          playerRigidBody.method("AddForce", 2).invoke(force, 2);
                        }
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Fly (R/L trigger = fly in hand direction, faster)"
                  },
                      {
                    buttonText: "Fly Speed",
                    method: () => { flySpeedIndex = (flySpeedIndex + 1) % flySpeeds.length; flySpeed = flySpeeds[flySpeedIndex]; sendNotification("Fly Speed: " + flySpeed, false, 2) },
                    isTogglable: false,
                    toolTip: "Cycle fly speed: 2, 5, 12, 28"
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
                        var handT = getTransform(righthand ? leftHandTransform : leftHandTransform)
                        var pos = handT.method("get_position").invoke()
                        var fwd = handT.method("get_forward").invoke()
                        var spawnPos = Vector3.method("op_Addition").invoke(pos, Vector3.method("op_Multiply").invoke(fwd, 1.0))
                        var rot = handT.method("get_rotation").invoke()
                        spawnNetworkPrefab("item_rpg_cny", spawnPos, rot)
                      } catch(_) {}
                    },
                    isTogglable: true,
                    toolTip: "Rocket Fists (spawns launched rockets from hands)"
                  },
                      {
                    buttonText: "Rocket Ride",
                    enableMethod: () => {
                      rocketRideEnabled = true;
                      try {
                        var localP = getLocalPlayer();
                        if (!localP || localP.isNull?.()) { rocketRideEnabled = false; return; }
                        var pos = getTransform(localP).method("get_position").invoke();
                        var fwd = getTransform(headCollider).method("get_forward").invoke();
                        var spawnPos = Vector3.method("op_Addition").invoke(pos, Vector3.method("op_Multiply").invoke(fwd, 2.0));
                        spawnNetworkPrefab("item_rpg_cny", spawnPos, identityQuaternion);
                        sendNotification("ROCKET RIDE: RPG spawned! Riding rocket...", false, 3);
                        var rocketPos = Vector3.method("op_Addition").invoke(pos, Vector3.method("op_Multiply").invoke(fwd, 3.0));
                        var rocket = spawnNetworkPrefab("item_rpg_cny", rocketPos, identityQuaternion);
                        var rideStart = time;
                        rocketRideInterval = setInterval(function() {
                          try {
                            if (!rocketRideEnabled) { clearInterval(rocketRideInterval); return; }
                            var lp = getLocalPlayer();
                            if (!lp || lp.isNull?.()) { clearInterval(rocketRideInterval); rocketRideEnabled = false; return; }
                            var elapsed = time - rideStart;
                            var speed = 15;
                            rocketPos = Vector3.method("op_Addition").invoke(rocketPos, Vector3.method("op_Multiply").invoke(fwd, speed * 0.05));
                            rocketPos = Vector3.method("op_Addition").invoke(rocketPos, [0, 0.02, 0]);
                            var lpT = getTransform(lp);
                            lpT.method("set_position").invoke(rocketPos);
                            lpT.method("set_rotation").invoke(getTransform(headCollider).method("get_rotation").invoke());
                            lp.method("RPC_PlayVFX").invoke(33, rocketPos);
                            if (elapsed > 5) {
                              clearInterval(rocketRideInterval);
                              rocketRideEnabled = false;
                              sendNotification("ROCKET RIDE: Duration ended!", false, 3);
                            }
                          } catch(e) { clearInterval(rocketRideInterval); rocketRideEnabled = false; }
                        }, 50);
                      } catch(e) { console.error("[RocketRide]", e); rocketRideEnabled = false; }
                    },
                    disableMethod: () => {
                      rocketRideEnabled = false;
                      if (rocketRideInterval) { clearInterval(rocketRideInterval); rocketRideInterval = null; }
                      sendNotification("ROCKET RIDE: OFF", false, 2);
                    },
                    method: () => {},
                    isTogglable: true,
                    toolTip: "Rocket Ride (spawn RPG and ride the rocket)"
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
                    buttonText: "Spawn All VHS Tapes",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var pos = getTransform(localP).method("get_position").invoke()
                        var vhsItems = ["item_quest_vhs","item_quest_vhs_asteroids","item_quest_vhs_backlots","item_quest_vhs_basement","item_quest_vhs_cave","item_quest_vhs_circus_day","item_quest_vhs_circus_ext","item_quest_vhs_circus_fac","item_quest_vhs_dam_facility","item_quest_vhs_dam_servers","item_quest_vhs_dark_forest","item_quest_vhs_derelictvessel","item_quest_vhs_eden","item_quest_vhs_forest","item_quest_vhs_foundation","item_quest_vhs_graveyard","item_quest_vhs_haunted_house","item_quest_vhs_hell","item_quest_vhs_lab","item_quest_vhs_lake","item_quest_vhs_lobby","item_quest_vhs_megalodon","item_quest_vhs_megalodon_lake","item_quest_vhs_mines","item_quest_vhs_moon","item_quest_vhs_moon_horror_rocket","item_quest_vhs_mountain","item_quest_vhs_mountainbot","item_quest_vhs_mountainshack","item_quest_vhs_mountainvault","item_quest_vhs_obsidianhalls","item_quest_vhs_odd_core","item_quest_vhs_office","item_quest_vhs_office_basement","item_quest_vhs_powerplant_microwave","item_quest_vhs_powerplant_reactorcore","item_quest_vhs_powerplant_security","item_quest_vhs_powerplant_supportfacility","item_quest_vhs_sandbox","item_quest_vhs_sewers","item_quest_vhs_vhs-core","item_quest_vhs_wormhole"]
                        for (var i = 0; i < vhsItems.length; i++) {
                          var angle = (Math.PI * 2 / vhsItems.length) * i
                          var r = 5
                          var spawnPos = [pos.field("x").value + Math.cos(angle)*r, pos.field("y").value + 1, pos.field("z").value + Math.sin(angle)*r]
                          spawnNetworkPrefab(vhsItems[i], spawnPos, identityQuaternion)
                        }
                        sendNotification("Spawned " + vhsItems.length + " VHS tapes", false, 3)
                      } catch(e) { console.error("[SpawnVHS]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Spawn All VHS Tapes"
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
                    buttonText: "Spawn All Rainbow Items",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var pos = getTransform(localP).method("get_position").invoke()
                        var rainbowItems = ["item_balloon","item_balloon_heart","item_balloon_smiley","item_glowstick","item_boomerang","item_fish_rainbow_trout","item_stellarsword_blue","item_stellarsword_gold","item_energy_sword_green","item_energy_sword_red","item_energy_sword_dual","item_bubble_gun","item_ringmaster_staff","item_fish_diamond_jade_koi","item_fish_gold_fish"]
                        for (var i = 0; i < rainbowItems.length; i++) {
                          var angle = (Math.PI * 2 / rainbowItems.length) * i
                          var r = 5
                          var spawnPos = [pos.field("x").value + Math.cos(angle)*r, pos.field("y").value + 1, pos.field("z").value + Math.sin(angle)*r]
                          spawnNetworkPrefab(rainbowItems[i], spawnPos, identityQuaternion)
                        }
                        sendNotification("Spawned " + rainbowItems.length + " rainbow items", false, 3)
                      } catch(e) { console.error("[SpawnRainbow]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Spawn All Rainbow Items"
                  },
                      {
                    buttonText: "Spawn All Fish Items",
                    method: () => {
                      try {
                        var localP = getLocalPlayer()
                        if (!localP || localP.isNull?.()) return
                        var pos = getTransform(localP).method("get_position").invoke()
                        var fishItems = ["item_fish_anglerfish","item_fish_big_shark","item_fish_boomfish","item_fish_carp","item_fish_chewna","item_fish_cowfish","item_fish_crappie","item_fish_crispie","item_fish_diamond_jade_koi","item_fish_dollar_bill","item_fish_dragonfish","item_fish_fishsword","item_fish_ghost_sword","item_fish_gold_fish","item_fish_hydracarp","item_fish_irontusk","item_fish_kissy","item_fish_magma_carp","item_fish_nebula_fish","item_fish_nutfish","item_fish_pufferfish","item_fish_rainbow_trout","item_fish_rotten_fish","item_fish_salmon","item_fish_salmonster","item_fish_scaldfish","item_fish_seahorse","item_fish_seamine","item_fish_shellfish_shield","item_fish_spicy_salmon","item_fish_teeth","item_fish_triclops","item_fish_tuna","item_fish_yellowcake","item_fish_redacted"]
                        for (var i = 0; i < fishItems.length; i++) {
                          var angle = (Math.PI * 2 / fishItems.length) * i
                          var r = 6
                          var spawnPos = [pos.field("x").value + Math.cos(angle)*r, pos.field("y").value + 1, pos.field("z").value + Math.sin(angle)*r]
                          spawnNetworkPrefab(fishItems[i], spawnPos, identityQuaternion)
                        }
                        sendNotification("Spawned " + fishItems.length + " fish items", false, 3)
                      } catch(e) { console.error("[SpawnFish]", e) }
                    },
                    isTogglable: false,
                    toolTip: "Spawn All Fish/Scale Items"
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
                        spawnNetworkPrefab("item_rpg_cny", spawnPos, identityQuaternion)
                      } catch(e) {}
                    },
                    isTogglable: true,
                    toolTip: "Rocket Launcher - spawns RPG (Grip+Trigger)"
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
                        spawnNetworkPrefab("item_rpg_cny", spawnPos, identityQuaternion)
                      } catch(e) {}
                    },
                    isTogglable: true,
                    toolTip: "RPG Out Of Head (auto-fires)"
                  },
                      {
                    buttonText: "Spawn Mob Gun",
                    enableMethod: () => { spawnMobGunCat3Enabled = true; try { createGunLib() } catch(_) {}; sendNotification("Spawn Mob Gun ON", false) },
                    disableMethod: () => { spawnMobGunCat3Enabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("Spawn Mob Gun OFF", false) },
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
                    enableMethod: () => { spawnItemsGunEnabled = true; try { createGunLib() } catch(_) {}; sendNotification("Spawn Items Gun ON", false) },
                    disableMethod: () => { spawnItemsGunEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("Spawn Items Gun OFF", false) },
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
                    enableMethod: () => { spawnMobGunEnabled = true; try { createGunLib() } catch(_) {}; sendNotification("Spawn Mob Gun ON", false) },
                    disableMethod: () => { spawnMobGunEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("Spawn Mob Gun OFF", false) },
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
                    enableMethod: () => { instaKillGunEnabled = true; try { createGunLib() } catch(_) {}; sendNotification("Insta Kill Gun ON", false) },
                    disableMethod: () => { instaKillGunEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("Insta Kill Gun OFF", false) },
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
                    enableMethod: () => { kickGunEnabled = true; try { createGunLib() } catch(_) {}; sendNotification("Kick Gun ON", false) },
                    disableMethod: () => { kickGunEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("Kick Gun OFF", false) },
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
                    enableMethod: () => { reviveGunEnabled = true; try { createGunLib() } catch(_) {}; sendNotification("Revive Gun ON", false) },
                    disableMethod: () => { reviveGunEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("Revive Gun OFF", false) },
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
                    enableMethod: () => { colorGunEnabled = true; try { createGunLib() } catch(_) {}; sendNotification("Color Gun ON", false) },
                    disableMethod: () => { colorGunEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("Color Gun OFF", false) },
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
                    enableMethod: () => { freezeGunEnabled = true; try { createGunLib() } catch(_) {}; sendNotification("Freeze Gun ON", false) },
                    disableMethod: () => { freezeGunEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("Freeze Gun OFF", false) },
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
                    enableMethod: () => { buffGunEnabled = true; try { createGunLib() } catch(_) {}; sendNotification("Buff Gun ON", false) },
                    disableMethod: () => { buffGunEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("Buff Gun OFF", false) },
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
                    enableMethod: () => { launchGunEnabled = true; try { createGunLib() } catch(_) {}; sendNotification("Launch Gun ON", false) },
                    disableMethod: () => { launchGunEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("Launch Gun OFF", false) },
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
                    enableMethod: () => { voidGunEnabled = true; try { createGunLib() } catch(_) {}; sendNotification("Void Gun ON", false) },
                    disableMethod: () => { voidGunEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("Void Gun OFF", false) },
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
                    enableMethod: () => { blindGunEnabled = true; try { createGunLib() } catch(_) {}; sendNotification("Blind Gun ON", false) },
                    disableMethod: () => { blindGunEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("Blind Gun OFF", false) },
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
                  },
                      {
                    buttonText: "Float All",
                    method: () => {
                      try {
                        var players = getAllNetPlayersList(false)
                        for (var i = 0; i < players.length; i++) {
                          try {
                            var p = players[i]
                            if (p && !p.isNull?.() && !p.method("get_IsMine").invoke()) {
                              omniFloatVictims.push(p)
                              var handPos = getTransform(righthand ? leftHandTransform : rightHandTransform).method("get_position").invoke()
                              var ballPos = [readVec3Components(handPos)[0], readVec3Components(handPos)[1] + 3, readVec3Components(handPos)[2]]
                              spawnNetworkPrefab("item_snowball", ballPos, identityQuaternion)
                            }
                          } catch(_) {}
                        }
                        sendNotification("Float All ON", false, 2)
                      } catch(e) {}
                    },
                    isTogglable: false,
                    toolTip: "Float all players"
                  },
                      {
                    buttonText: "Yeet Spam",
                    method: () => { mmYeetFire(); },
                    isTogglable: false,
                    toolTip: "Spam yeet RPCs"
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
                    method: () => { try { var cls = AssemblyCSharp.class("AnimalCompany.GrabbableObject"); var methods = cls.methods; for (var i = 0; i < methods.length; i++) { try { var n = methods[i].name.to(); if ((n.includes("sellValue") || n.includes("SellValue")) && !n.startsWith("set_")) { methods[i].implementation = function() { return 300000 } } } catch(_) {} } sendNotification("Sell Value MAX!", false, 2) } catch(e) {} },
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
                    enableMethod: () => { blockAllRpcs(); blockRPCsEnabled = true; sendNotification("Block RPCs ON", false) },
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
                    buttonText: "Arena Spammer",
                    enableMethod: () => { arenaSpammerEnabled = true; sendNotification("Arena Spammer ON", false) },
                    disableMethod: () => { arenaSpammerEnabled = false; sendNotification("Arena Spammer OFF", false) },
                    isTogglable: true,
                    toolTip: "Arena Spammer",
                    method: () => { rpcLoopFrameCounter++; if (rpcLoopFrameCounter % 20 !== 0) return; try { var lp = getLocalPlayer(); if (!lp || lp.isNull?.()) return; var pos = getTransform(lp).method("get_position").invoke(); var mobs = ["Chicken","Spider","Bomber","Cyst"]; var m = mobs[Math.floor(Math.random()*mobs.length)]; spawnMobAtPos({name:m, id:acMobIdByName[m]||0}, [pos.field("x").value+(Math.random()-0.5)*10, pos.field("y").value+1, pos.field("z").value+(Math.random()-0.5)*10], identityQuaternion) } catch(_) {} }
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
                    enableMethod: () => { wlKillGunEnabled = true; try { createGunLib() } catch(_) {}; sendNotification("WL Kill Gun ON", false) },
                    disableMethod: () => { wlKillGunEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("WL Kill Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL Kill Gun",
                    method: () => { try { if (!wlKillGunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; try { target.method("RPC_DoPlayerDie").invoke(true) } catch(_) {} } } catch(_) {} }
                  },
                      {
                    buttonText: "WL Scale Big Gun",
                    enableMethod: () => { wlScaleBigGunEnabled = true; try { createGunLib() } catch(_) {}; sendNotification("WL Scale Big Gun ON", false) },
                    disableMethod: () => { wlScaleBigGunEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("WL Scale Big Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL Scale Big Gun",
                    method: () => { try { if (!wlScaleBigGunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; var go = target.method("get_gameObject").invoke(); if (go && !go.isNull?.()) getTransform(go).method("set_localScale").invoke([2,2,2]) } } catch(_) {} }
                  },
                      {
                    buttonText: "WL Scale Tiny Gun",
                    enableMethod: () => { wlScaleTinyGunEnabled = true; try { createGunLib() } catch(_) {}; sendNotification("WL Scale Tiny Gun ON", false) },
                    disableMethod: () => { wlScaleTinyGunEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("WL Scale Tiny Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL Scale Tiny Gun",
                    method: () => { try { if (!wlScaleTinyGunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; var go = target.method("get_gameObject").invoke(); if (go && !go.isNull?.()) getTransform(go).method("set_localScale").invoke([0.1,0.1,0.1]) } } catch(_) {} }
                  },
                      {
                    buttonText: "WL Invisible Gun",
                    enableMethod: () => { wlInvisibleGunEnabled = true; try { createGunLib() } catch(_) {}; sendNotification("WL Invisible Gun ON", false) },
                    disableMethod: () => { wlInvisibleGunEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("WL Invisible Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL Invisible Gun",
                    method: () => { try { if (!wlInvisibleGunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; try { target.method("set_isHide").invoke(true) } catch(_) {} } } catch(_) {} }
                  },
                      {
                    buttonText: "WL Money Gun",
                    enableMethod: () => { wlMoneyGunEnabled = true; try { createGunLib() } catch(_) {}; sendNotification("WL Money Gun ON", false) },
                    disableMethod: () => { wlMoneyGunEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("WL Money Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL Money Gun",
                    method: () => { try { if (!wlMoneyGunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; try { target.method("RPC_AddPlayerMoney").invoke(10000000) } catch(_) {} } } catch(_) {} }
                  },
                      {
                    buttonText: "WL Stinky Gun",
                    enableMethod: () => { wlStinkyGunEnabled = true; try { createGunLib() } catch(_) {}; sendNotification("WL Stinky Gun ON", false) },
                    disableMethod: () => { wlStinkyGunEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("WL Stinky Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL Stinky Gun",
                    method: () => { try { if (!wlStinkyGunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; try { target.method("RPC_SetStinky").invoke(true) } catch(_) {} } } catch(_) {} }
                  },
                      {
                    buttonText: "WL Speed Buff Gun",
                    enableMethod: () => { wlSpeedBuffGunEnabled = true; try { createGunLib() } catch(_) {}; sendNotification("WL Speed Buff Gun ON", false) },
                    disableMethod: () => { wlSpeedBuffGunEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("WL Speed Buff Gun OFF", false) },
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
                    enableMethod: () => { wlLaunchGunEnabled = true; try { createGunLib() } catch(_) {}; sendNotification("WL Launch Gun ON", false) },
                    disableMethod: () => { wlLaunchGunEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("WL Launch Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL Launch Gun",
                    method: () => { try { if (!wlLaunchGunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; try { target.method("RPC_AddForce").invoke([0, 8000, 0]) } catch(_) {} } } catch(_) {} }
                  },
                      {
                    buttonText: "WL Hit 50 Gun",
                    enableMethod: () => { wlHit50GunEnabled = true; try { createGunLib() } catch(_) {}; sendNotification("WL Hit 50 Gun ON", false) },
                    disableMethod: () => { wlHit50GunEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("WL Hit 50 Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL Hit 50 Gun",
                    method: () => { try { if (!wlHit50GunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; var dmg = AssemblyCSharp.class("AnimalCompany.DamageSourceInfo").method("get_Null").invoke(); var aim = getGunModAimPoint(); try { target.method("RPC_PlayerHit").invoke(50, aim, dmg) } catch(_) {} } } catch(_) {} }
                  },
                      {
                    buttonText: "WL Freeze Gun",
                    enableMethod: () => { wlFreezeGunEnabled = true; try { createGunLib() } catch(_) {}; sendNotification("WL Freeze Gun ON", false) },
                    disableMethod: () => { wlFreezeGunEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("WL Freeze Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL Freeze Gun",
                    method: () => { try { if (!wlFreezeGunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; var go = target.method("get_gameObject").invoke(); if (go && !go.isNull?.()) { var rb = go.method("GetComponent", 0).inflate(Rigidbody).invoke(); if (rb && !rb.isNull?.()) { rb.method("set_linearVelocity").invoke(zeroVector); rb.method("set_isKinematic").invoke(true); setTimeout(function() { try { rb.method("set_isKinematic").invoke(false) } catch(_) {} }, 3000) } } } } catch(_) {} }
                  },
                      {
                    buttonText: "WL Revive Gun",
                    enableMethod: () => { wlReviveGunEnabled = true; try { createGunLib() } catch(_) {}; sendNotification("WL Revive Gun ON", false) },
                    disableMethod: () => { wlReviveGunEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("WL Revive Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL Revive Gun",
                    method: () => { try { if (!wlReviveGunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; try { target.method("RPC_Revive").invoke() } catch(_) {} } } catch(_) {} }
                  },
                      {
                    buttonText: "WL VFX Spam Gun",
                    enableMethod: () => { wlVFXSpamGunEnabled = true; try { createGunLib() } catch(_) {}; sendNotification("WL VFX Spam Gun ON", false) },
                    disableMethod: () => { wlVFXSpamGunEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("WL VFX Spam Gun OFF", false) },
                    isTogglable: true,
                    toolTip: "WL VFX Spam Gun",
                    method: () => { try { if (!wlVFXSpamGunEnabled) return; var g = righthand ? leftGrab : rightGrab; var t = righthand ? leftTrigger : rightTrigger; if (!g || !t) return; var target = getGunModTarget(); if (target && !target.isNull?.()) { if (whitelistPlayers.length > 0 && whitelistPlayers.indexOf(target) < 0) return; var pos = getTransform(target).method("get_position").invoke(); var v = [174,180,33,42,183,44]; for (var i = 0; i < v.length; i++) { try { target.method("RPC_PlayVFX").invoke(v[i], pos) } catch(_) {} } } } catch(_) {} }
                  },
                      {
                    buttonText: "WL Void Gun",
                    enableMethod: () => { wlVoidGunEnabled = true; try { createGunLib() } catch(_) {}; sendNotification("WL Void Gun ON", false) },
                    disableMethod: () => { wlVoidGunEnabled = false; try { destroyGunLib() } catch(_) {}; sendNotification("WL Void Gun OFF", false) },
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
            menuBgTexture = getFemboyBgTexture();
        }),
        styleActionButton("Theme: Shrek", () => {
            bgColor = [0.06, 0.16, 0.03, 0.92];
            buttonColor = [0.16, 0.34, 0.06, 0.94];
            buttonPressedColor = [0.4, 0.68, 0.12, 0.96];
            textColor = [0.92, 1, 0.8, 1];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.28, 0.5, 0.08, 1];
            textGradientDarkTone = 40;
            textGradientLightTone = 180;
            textGradientSpeed = 3.0;
            textGradientEnabled = true;
            femboyThemeEnabled = false;
            menuBgTexture = getShrekBgTexture();
            shrekThemeActive = true;
        }),
        styleActionButton("Theme: Royal Blue", () => {
            bgColor = [0.05, 0.10, 0.35, 0.95];
            buttonColor = [0.10, 0.25, 0.60, 0.95];
            buttonPressedColor = [0.20, 0.40, 0.80, 1.0];
            textColor = [0.7, 0.85, 1.0, 1.0];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.30, 0.50, 0.90, 1.0];
            femboyThemeEnabled = false;
        }),
        styleActionButton("Theme: Rainbow", () => {
            bgColor = [0.15, 0.15, 0.15, 0.95];
            buttonColor = [0.20, 0.60, 0.80, 0.95];
            buttonPressedColor = [0.40, 0.80, 1.0, 1.0];
            textColor = [1.0, 0.4, 0.7, 1.0];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.80, 0.40, 0.90, 1.0];
            femboyThemeEnabled = false;
        }),
        styleActionButton("Theme: Neon Green", () => {
            bgColor = [0.02, 0.15, 0.02, 0.95];
            buttonColor = [0.05, 0.25, 0.05, 0.95];
            buttonPressedColor = [0.10, 0.45, 0.10, 1.0];
            textColor = [0.0, 1.0, 0.3, 1.0];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.20, 0.80, 0.20, 1.0];
            femboyThemeEnabled = false;
        }),
        styleActionButton("Theme: Stupid Orange", () => {
            bgColor = [0.25, 0.12, 0.02, 0.95];
            buttonColor = [0.50, 0.25, 0.05, 0.95];
            buttonPressedColor = [0.70, 0.35, 0.10, 1.0];
            textColor = [1.0, 0.9, 0.7, 1.0];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.90, 0.50, 0.15, 1.0];
            femboyThemeEnabled = false;
        }),
        styleActionButton("Theme: Toxic Lime", () => {
            bgColor = [0.08, 0.18, 0.02, 0.95];
            buttonColor = [0.15, 0.35, 0.05, 0.95];
            buttonPressedColor = [0.25, 0.55, 0.10, 1.0];
            textColor = [0.7, 1.0, 0.2, 1.0];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.40, 0.85, 0.20, 1.0];
            femboyThemeEnabled = false;
        }),
        styleActionButton("Theme: Sunset Pink", () => {
            bgColor = [0.20, 0.05, 0.12, 0.95];
            buttonColor = [0.40, 0.12, 0.25, 0.95];
            buttonPressedColor = [0.60, 0.20, 0.38, 1.0];
            textColor = [1.0, 0.85, 0.90, 1.0];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.80, 0.30, 0.50, 1.0];
            femboyThemeEnabled = false;
        }),
        styleActionButton("Theme: Ice Cyan", () => {
            bgColor = [0.02, 0.12, 0.18, 0.95];
            buttonColor = [0.05, 0.25, 0.40, 0.95];
            buttonPressedColor = [0.10, 0.40, 0.60, 1.0];
            textColor = [0.8, 1.0, 1.0, 1.0];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.20, 0.70, 0.90, 1.0];
            femboyThemeEnabled = false;
        }),
        styleActionButton("Theme: Gold Black", () => {
            bgColor = [0.08, 0.06, 0.02, 0.95];
            buttonColor = [0.18, 0.14, 0.05, 0.95];
            buttonPressedColor = [0.35, 0.28, 0.08, 1.0];
            textColor = [1.0, 0.9, 0.4, 1.0];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.80, 0.65, 0.15, 1.0];
            femboyThemeEnabled = false;
        }),
        styleActionButton("Theme: Blackout Orange", () => {
            bgColor = [0.02, 0.02, 0.02, 0.95];
            buttonColor = [0.10, 0.08, 0.02, 0.95];
            buttonPressedColor = [0.25, 0.18, 0.05, 1.0];
            textColor = [1.0, 0.6, 0.0, 1.0];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.60, 0.35, 0.05, 1.0];
            femboyThemeEnabled = false;
        }),
        styleActionButton("Theme: InvinciBlue", () => {
            bgColor = [0.02, 0.05, 0.20, 0.95];
            buttonColor = [0.05, 0.12, 0.40, 0.95];
            buttonPressedColor = [0.10, 0.22, 0.60, 1.0];
            textColor = [0.5, 0.8, 1.0, 1.0];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.20, 0.40, 0.90, 1.0];
            femboyThemeEnabled = false;
        }),
        styleActionButton("Theme: Ying Yang", () => {
            bgColor = [0.95, 0.95, 0.95, 0.95];
            buttonColor = [0.10, 0.10, 0.10, 0.95];
            buttonPressedColor = [0.0, 0.0, 0.0, 1.0];
            textColor = [0.0, 0.0, 0.0, 1.0];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.5, 0.5, 0.5, 1.0];
            femboyThemeEnabled = false;
        }),
    ];
    buttons = Array.from({ length: 16 }, () => [] as ButtonInfo[]);
    buttons[0] = [
        openTemplateCategory("Settings", 10),
        openTemplateCategory("Player", 2),
        openTemplateCategory("RPCs", 3),
        openTemplateCategory("Spawning", 5),
        openTemplateCategory("Combat", 6),
        openTemplateCategory("World", 7),
        openTemplateCategory("Overpowered", 8),
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
    
    function kickPlayer(player: any) {
        try {
            const rpcs = AssemblyCSharp.class("AnimalCompany.NetSessionRPCs");
            const netinst = rpcs.field("_instance").value;
            if (!netinst)
                return;
            const plrID = player.field("_userID").value;
            if (!plrID)
                return;
            const parsed = Il2Cpp.corlib.class("System.Guid").method("Parse").invoke(plrID);
            netinst.method("RPC_KickPlayer").invoke(parsed);
            rpcs.method("KickPlayer").invoke(plrID);
        }
        catch (_) { }
    }
    let acAntiCheatBypassInstalled = false;
    function installAntiCheatBypass() {
        try {
            try {
                AssemblyCSharp.class("AnimalCompany.AntiCheatSystem").method("OnUpdate").implementation = function () { return; };
            }
            catch (e) { }
            try {
                AssemblyCSharp.class("AnimalCompany.VPNDetector").method("CheckVPNIsActive").implementation = function () { return; };
            }
            catch (e) { }
            try {
                AssemblyCSharp.class("AnimalCompany.VPNDetector").method("Update").implementation = function () { return; };
            }
            catch (_) { }
            try {
                const completed = Il2Cpp.corlib.class("System.Threading.Tasks.Task").method("get_CompletedTask").invoke();
                if (completed && !completed.isNull?.()) {
                    AssemblyCSharp.class("AnimalCompany.API.AnimalCompanyAPI").method("AntiCheatCheck", 3).implementation = function () { return completed; };
                }
            }
            catch (e) { }
            try {
                AssemblyCSharp.class("AnimalCompany.NotificationManager").method("FormatModerationTranscript", 1).implementation = function () { return Il2Cpp.string(""); };
            }
            catch (_) { }
            try {
                AssemblyCSharp.class("AnimalCompany.VoiceModSurvey").method("Start").implementation = function () { return; };
            }
            catch (_) { }
            try {
                AssemblyCSharp.class("AnimalCompany.VoiceModSurvey").method("OnSelectedChoice", 1).implementation = function () { return; };
            }
            catch (_) { }
            try {
                AssemblyCSharp.class("AnimalCompany.NetPlayer").method("set_accumLocalVoiceBroadcastSeconds").implementation = function () { return; };
            }
            catch (_) { }
            for (const argc of [1, 2, 4]) {
                try {
                    const completed2 = Il2Cpp.corlib.class("System.Threading.Tasks.Task").method("get_CompletedTask").invoke();
                    AssemblyCSharp.class("AnimalCompany.API.AnimalCompanyAPI").method("AntiCheatCheck", argc).implementation = function () { return completed2; };
                }
                catch (_) { }
            }
            acAntiCheatBypassInstalled = true;
        }
        catch (e) { }
    }
    let antiBanEnabled = false;
    let antiKickEnabled = false;
    let blockRPCsEnabled = false;
    let blockKickEnabled = false;
    let safetyHooked = false;
    function rpcKickPlayer() {
        if (safetyHooked)
            return;
        safetyHooked = true;
        try {
            const vz = acImage.class("AnimalCompany.NetPlayer");
            try {
                const vA = vz.method("RPC_KickPlayer");
                if (vA) {
                    vA.implementation = function (...vB: any[]) {
                        if (antiKickEnabled) {
                            sendNotification("don't work", false);
                            return;
                        }
                        return vA.invokeRaw(this, ...vB);
                    };
                }
            }
            catch (_) { }
            try {
                const banNames = ["RPC_BanUser", "RPC_BanPlayer", "BanPlayer", "RPC_Ban"];
                for (const name of banNames) {
                    try {
                        const vE = vz.method(name);
                        if (vE) {
                            vE.implementation = function (...vF: any[]) {
                                if (antiBanEnabled) {
                                    sendNotification("don't work", false);
                                    return;
                                }
                                return vE.invokeRaw(this, ...vF);
                            };
                            break;
                        }
                    }
                    catch (_) { }
                }
            }
            catch (_) { }
        }
        catch (_) { }
    }
    function blockAllRpcs() {
        if (blockKickEnabled)
            return;
        blockKickEnabled = true;
        try {
            const vA = (vG: any) => { try {
                if (vG === undefined || vG === null)
                    return "";
                return String(vG);
            }
            catch (_) {
                return "";
            } };
            const vC = (vG: any) => vA(vG).indexOf("RPC_") === 0;
            let vD = 0;
            const vE = (vG: any) => {
                try {
                    const vH = vA(vG?.name);
                    if (!vC(vH))
                        return;
                    if (!vG || (vG as any).__antiRpcBlockHooked)
                        return;
                    const vI = vG;
                    (vG as any).__antiRpcBlockHooked = true;
                    vI.implementation = function (...vK: any[]) {
                        if (blockRPCsEnabled)
                            return;
                        return vI.invokeRaw(this, ...vK);
                    };
                    vD++;
                }
                catch (_) { }
            };
            const vF = (vG: any) => {
                try {
                    for (const vH of vG?.classes ?? []) {
                        try {
                            for (const vI of vH?.methods ?? []) {
                                vE(vI);
                            }
                        }
                        catch (_) { }
                    }
                }
                catch (_) { }
            };
            try {
                for (const vG of Il2Cpp.domain.assemblies ?? []) {
                    try {
                        vF(vG.image);
                    }
                    catch (_) { }
                }
            }
            catch (_) {
                for (const vJ of ["AnimalCompany", "Assembly-CSharp", "Fusion.Runtime"]) {
                    try {
                        vF(Il2Cpp.domain.assembly(vJ).image);
                    }
                    catch (_) { }
                }
            }
            try {
                const vL = acImage.class("AnimalCompany.NetSessionRPCs");
                for (const vM of ["RPC_KickPlayer", "RPC_RefreshPrivateRoomInfo", "RPC_NotifyYeetStarted"]) {
                    for (const vN of [0, 1, 2, 3, 4]) {
                        try {
                            vE(vL.method(vM, vN));
                        }
                        catch (_) { }
                    }
                    try {
                        vE(vL.method(vM));
                    }
                    catch (_) { }
                }
            }
            catch (_) { }
        }
        catch (_) {
            blockKickEnabled = false;
        }
    }

    
    
    const SAFETY_CATEGORY_BUTTONS = [
        menuToggle("Anti Ban", {
            onEnable: () => { rpcKickPlayer(); antiBanEnabled = true; sendNotification("don't work", false); },
            onDisable: () => { antiBanEnabled = false; sendNotification("don't work", false); },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Anti Kick", {
            onEnable: () => { rpcKickPlayer(); antiKickEnabled = true; sendNotification("don't work", false); },
            onDisable: () => { antiKickEnabled = false; sendNotification("don't work", false); },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Block RPCs", {
            onEnable: () => { blockAllRpcs(); blockRPCsEnabled = true; sendNotification("don't work", false); },
            onDisable: () => { blockRPCsEnabled = false; sendNotification("don't work", false); },
            toolTip: "tooltip no workie"
        }),
    ];
    const LAUNCHERS_CATEGORY_BUTTONS = [
        menuToggle("Rocket Launcher", { onUpdate: () => mmFireLauncher("RPGRocket", "rocket", 0), toolTip: "tooltip no workie" }),
        menuToggle("Robot Rocket Launcher", { onUpdate: () => mmFireLauncher("RobotDogRPG", "robot rocket", 0), toolTip: "tooltip no workie" }),
        menuToggle("Rocket Spear Launcher", { onUpdate: () => mmFireLauncher("RPGRocketSpear", "rocket spear", 0), toolTip: "tooltip no workie" }),
        menuToggle("Rocket Egg Launcher", { onUpdate: () => mmFireLauncher("RPGRocketEgg", "rocket egg", 0), toolTip: "tooltip no workie" }),
        menuToggle("Flare Launcher", { onUpdate: () => mmFireLauncher("FlareGunProjectile", "flare", 75, 0.05), toolTip: "tooltip no workie" }),
        menuToggle("Buggy Launcher", { onUpdate: () => mmFireLauncher("Vehicle_Buggy", "buggy", 85, 0), toolTip: "tooltip no workie" }),
        menuToggle("Thunder Launcher", { onUpdate: () => mmFireLauncher("ThunderController", "thunder", 90, 0), toolTip: "tooltip no workie" }),
        menuToggle("Thunder Gun", {
            onUpdate: () => {
                if (!rightGrab)
                    return;
                const gd = omniRenderGun();
                if (!rightTrigger || time < mmThunderGunDelay)
                    return;
                mmThunderGunDelay = time + 0.25;
                try {
                    if (!gd.endPosition)
                        return;
                    const obj = mmSpawnNetworkPrefab("ThunderController", gd.endPosition, identityQuaternion);
                    if (obj && !obj.isNull?.()) {
                        try { obj.method("Strike").invoke(); } catch (_) { }
                        try { obj.method("RPC_Strike").invoke(7, Math.floor(Math.random() * 255)); } catch (_) { }
                    }
                    sendNotification("don't work", false, 1);
                }
                catch (e) { }
            },
            toolTip: "tooltip no workie"
        }),
    ];
    let mmOrigName: string | null = null;
    let mmStealNameDelay = 0;
    function mmSetName(name: string) {
        try {
            const lp = NetPlayerCls.method("get_localPlayer").invoke();
            if (!lp || lp.isNull?.())
                return;
            if (mmOrigName === null) {
                try {
                    mmOrigName = lp.method("get_displayName").invoke()?.content ?? "";
                }
                catch (_) { }
            }
            lp.method("set_displayName").invoke(Il2Cpp.string(name.replace(/<color=[^>]+>/gi, "").replace(/<\/color>/gi, "")));
        }
        catch (e) { }
    }
    const MM_PRESET_NAMES = ["omni", "Larper", "Skidder", "meat_beater", "coda", "ILoveFemboys", "TuffBoy69", "xXSniperXx", "ProGamer", "NoobMaster", "GorillaGod", "BananaKing", "MonkeLord", "ShadowStrike", "CoolDude420", "xX_Dark_Xx", "ViperKing", "NightHawk", "BlazeFury", "StormBreaker"];
    const MM_RANDOM_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
    function mmRandomName(): string {
        var len = 6 + Math.floor(Math.random() * 10);
        var result = "";
        for (var i = 0; i < len; i++) {
            result += MM_RANDOM_CHARS[Math.floor(Math.random() * MM_RANDOM_CHARS.length)];
        }
        return result;
    }
    function mmSetRandomName() {
        mmSetName(mmRandomName());
    }
    const NAME_MODS_CATEGORY_BUTTONS = [
        menuToggle("Steal Name Gun", {
            onUpdate: () => {
                if (!rightGrab)
                    return;
                const gd = omniRenderGun();
                if (!rightTrigger || time <= mmStealNameDelay)
                    return;
                mmStealNameDelay = time + 0.4;
                const t = resolveGunTargetPlayer(gd, 30.0);
                if (!t || t.isNull?.() || t.method("get_IsMine").invoke()) {
                    sendNotification("don't work", false);
                    return;
                }
                try {
                    const nm = t.method("get_displayName").invoke()?.content ?? "unknown";
                    mmSetName(nm);
                    sendNotification("don't work" + nm, false);
                }
                catch (e) { }
            },
            onDisable: () => {
                if (mmOrigName !== null) {
                    try {
                        NetPlayerCls.method("get_localPlayer").invoke().method("set_displayName").invoke(Il2Cpp.string(mmOrigName));
                    }
                    catch (_) { }
                    sendNotification("don't work", false);
                }
            },
            toolTip: "tooltip no workie"
        }),
        menuButton("Restore My Name", () => {
            if (mmOrigName !== null) {
                try {
                    NetPlayerCls.method("get_localPlayer").invoke().method("set_displayName").invoke(Il2Cpp.string(mmOrigName));
                    sendNotification("don't work" + mmOrigName, false);
                }
                catch (_) { }
            }
            else
                sendNotification("don't work", false);
        }, "reset your display name to the original."),
        menuButton("Random Name", () => { mmSetRandomName(); }, "set a random display name."),
        menuButton("ID Changer", () => {
            try {
                var lp = NetPlayerCls.method("get_localPlayer").invoke();
                if (!lp || lp.isNull?.()) return;
                var currentId = lp.method("get_playerId").invoke();
                sendNotification("Your Player ID: " + currentId, false, 5);
            } catch(_) { sendNotification("Could not read ID", false); }
        }, "shows your player ID."),
        ...MM_PRESET_NAMES.map((nm: string) => menuButton("Set Name: " + nm, () => { mmSetName(nm); sendNotification("Name set to " + nm, false); }, "set your display name to '" + nm + "'.")),
    ];
    const MM_SPACE_CAR_IDS = Array.from({ length: 8 }, (_: any, i: number) => "Vehicle_Spaceship_" + i);
    let mmSpaceCarIndex = 0, mmSpaceCarGunDelay = 0;
    let mmSpaceCars: any[] = [];
    let mmSpaceBoxCars: any[] = [];
    function mmDespawnObj(obj: any) {
        try {
            const r = obj.method("get_Runner").invoke();
            if (r && !r.isNull?.()) {
                r.method("Despawn").invoke(obj);
                return true;
            }
        }
        catch (_) { }
        return false;
    }
    const SPACE_CATEGORY_BUTTONS = [
        menuButton("Space Car +", () => { mmSpaceCarIndex = (mmSpaceCarIndex + 1) % MM_SPACE_CAR_IDS.length; sendNotification("don't work" + MM_SPACE_CAR_IDS[mmSpaceCarIndex], false); }, "cycle to the next spaceship prefab."),
        menuButton("Space Car -", () => { mmSpaceCarIndex = (mmSpaceCarIndex - 1 + MM_SPACE_CAR_IDS.length) % MM_SPACE_CAR_IDS.length; sendNotification("don't work" + MM_SPACE_CAR_IDS[mmSpaceCarIndex], false); }, "cycle to the previous spaceship prefab."),
        menuButton("Spawn Space Car", () => {
            mmSpaceCars = mmSpaceCars.filter((e: any) => e && !e.isNull?.());
            const p = rightHandTransform.method("get_position").invoke();
            const r = rightHandTransform.method("get_rotation").invoke();
            const nm = MM_SPACE_CAR_IDS[mmSpaceCarIndex];
            const obj = mmSpawnNetworkPrefab(nm, p, r);
            if (obj && !obj.isNull?.())
                mmSpaceCars.push(obj);
            sendNotification("don't work", false);
        }, "spawn the selected spaceship at your hand."),
        menuToggle("Space Car Spawn Gun", {
            onUpdate: () => {
                if (!rightGrab)
                    return;
                const gd = omniRenderGun();
                if (!rightTrigger || time < mmSpaceCarGunDelay)
                    return;
                mmSpaceCarGunDelay = time + 0.3;
                if (!gd.endPosition)
                    return;
                mmSpaceCars = mmSpaceCars.filter((e: any) => e && !e.isNull?.());
                const obj = mmSpawnNetworkPrefab(MM_SPACE_CAR_IDS[mmSpaceCarIndex], gd.endPosition, identityQuaternion);
                if (obj && !obj.isNull?.())
                    mmSpaceCars.push(obj);
            },
            toolTip: "tooltip no workie"
        }),
        menuButton("Delete All Ships", () => {
            mmSpaceCars = mmSpaceCars.filter((e: any) => e && !e.isNull?.());
            let n = 0;
            for (const obj of mmSpaceCars) {
                if (mmDespawnObj(obj))
                    n++;
            }
            mmSpaceCars = [];
            sendNotification("don't work", false);
        }, "despawn every spaceship you've spawned."),
        menuToggle("Box of Ships", {
            onEnable: () => {
                try {
                    const local = NetPlayerCls.method("get_localPlayer").invoke();
                    if (!local || local.handle.isNull())
                        return;
                    const head = getTransform(local).method("get_position").invoke();
                    const hx = head.field("x").value, hy = head.field("y").value, hz = head.field("z").value;
                    const count = 8, spread = 4;
                    mmSpaceBoxCars = [];
                    for (let i = 0; i < count; i++) {
                        try {
                            const angle = (Math.PI * 2 / count) * i;
                            const ox = Math.cos(angle) * spread, oz = Math.sin(angle) * spread, oy = Math.sin(angle * 2) * 2 + 1;
                            const obj = mmSpawnNetworkPrefab(MM_SPACE_CAR_IDS[mmSpaceCarIndex], [hx + ox, hy + oy, hz + oz], identityQuaternion);
                            if (obj && !obj.isNull?.())
                                mmSpaceBoxCars.push({ obj, ox, oy, oz });
                        }
                        catch (_) { }
                    }
                    sendNotification("don't work" + mmSpaceBoxCars.length + " spawned", false);
                }
                catch (e) { }
            },
            onUpdate: () => {
                try {
                    if (mmSpaceBoxCars.length === 0)
                        return;
                    const local = NetPlayerCls.method("get_localPlayer").invoke();
                    if (!local || local.handle.isNull())
                        return;
                    const head = getTransform(local).method("get_position").invoke();
                    const hx = head.field("x").value, hy = head.field("y").value, hz = head.field("z").value;
                    for (let i = mmSpaceBoxCars.length - 1; i >= 0; i--) {
                        const e = mmSpaceBoxCars[i];
                        if (!e || !e.obj || e.obj.isNull?.()) {
                            mmSpaceBoxCars.splice(i, 1);
                            continue;
                        }
                        try {
                            e.obj.method("get_transform").invoke().method("set_position").invoke([hx + e.ox, hy + e.oy, hz + e.oz]);
                        }
                        catch (_) {
                            mmSpaceBoxCars.splice(i, 1);
                        }
                    }
                }
                catch (_) { }
            },
            onDisable: () => {
                for (const e of mmSpaceBoxCars) {
                    try {
                        if (e && e.obj && !e.obj.isNull?.())
                            mmDespawnObj(e.obj);
                    }
                    catch (_) { }
                }
                mmSpaceBoxCars = [];
                sendNotification("don't work", false);
            },
            toolTip: "tooltip no workie"
        }),
    ];
    
    let mmLauncherDelay = 0, mmThunderGunDelay = 0;
    function mmFireLauncher(prefabName: string, label: string, power: number, cooldown: number = 0) {
        if (!rightGrab)
            return;
        omniRenderGun();
        if (!rightTrigger || time < mmLauncherDelay)
            return;
        mmLauncherDelay = time + cooldown;
        try {
            const handPos = rightHandTransform.method("get_position").invoke();
            const handRot = rightHandTransform.method("get_rotation").invoke();
            const handFwd = rightHandTransform.method("get_forward").invoke();
            const spawnPos = Vector3.method("op_Addition").invoke(handPos, Vector3.method("op_Multiply", 2).invoke(handFwd, 0.65));
            const obj = mmSpawnNetworkPrefab(prefabName, spawnPos, handRot);
            if (obj && !obj.isNull?.() && power > 0)
                mmLaunchObj(obj, handFwd, power);
            sendNotification("don't work" + label, false, 1);
        }
        catch (e) { }
    }
    function mmLaunchObj(obj: any, dirVec: any, power: number) {
        try {
            const go = obj.method("get_gameObject").invoke();
            if (!go || go.isNull?.())
                return;
            let rb: any = null;
            try {
                rb = go.method("GetComponent", 1).inflate(Rigidbody).invoke();
            }
            catch (_) { }
            if ((!rb || rb.handle.isNull()) && go) {
                try {
                    rb = go.method("GetComponentInChildren", 1).inflate(Rigidbody).invoke();
                }
                catch (_) { }
            }
            if (rb && !rb.handle.isNull()) {
                try {
                    rb.method("set_isKinematic").invoke(false);
                }
                catch (_) { }
                const vel = Vector3.method("op_Multiply", 2).invoke(dirVec, power);
                try {
                    rb.method("set_velocity").invoke(vel);
                }
                catch (_) {
                    try {
                        rb.method("AddForce", 2).invoke(vel, 2);
                    }
                    catch (__) { }
                }
            }
        }
        catch (_) { }
    }
    function normalizeSpawnPos(pos) {
        if (Array.isArray(pos)) return pos;
        if (pos == null) return [0, 0, 0];
        if (typeof pos === "object" && pos.field) {
            try { return [pos.field("x").value, pos.field("y").value, pos.field("z").value]; } catch(_) {}
            try { return readVec3Components(pos); } catch(_) {}
        }
        return [0, 0, 0];
    }
    let _spawnNullDelegate: any = undefined;
    function getSpawnNullDelegate() {
        if (_spawnNullDelegate === undefined) {
            try {
                _spawnNullDelegate = Il2Cpp.reference(Il2Cpp.domain.assembly("mscorlib").image.class("System.Object").alloc());
            } catch(_) { _spawnNullDelegate = NULL; }
        }
        return _spawnNullDelegate;
    }
    function resolveItemPrefab(bareID) {
        const bare = String(bareID || "").replace(/^item_prefab\//, "");
        for (const nm of [bare, "item_prefab/" + bare]) {
            try {
                const prefab = PrefabGen.method("GetItemPrefab", 1).invoke(Il2Cpp.string(nm));
                if (prefab && !prefab.isNull?.()) return prefab;
            } catch(_) { }
        }
        return null;
    }
    function spawnItemFromPrefab(prefab, pos, rot) {
        pos = normalizeSpawnPos(pos);
        const rotation = rot || identityQuaternion;
        const del = getSpawnNullDelegate();
        try {
            const r = PrefabGen.method("SpawnItem", 5)
                .overload("AnimalCompany.GrabbableItemPrefab", "UnityEngine.Vector3", "UnityEngine.Quaternion", "Fusion.NetworkRunner.OnBeforeSpawned", "AnimalCompany.ItemSpawnSource")
                .invoke(prefab, pos, rotation, del, 1);
            if (r && !r.isNull?.()) return r;
        } catch(_) { }
        try {
            const r = PrefabGen.method("SpawnItem", 5).invoke(prefab, pos, rotation, del, 1);
            if (r && !r.isNull?.()) return r;
        } catch(_) { }
        return null;
    }
    function spawnItemAtPos(bareID, pos, rot) {
        pos = normalizeSpawnPos(pos);
        const rotation = rot || identityQuaternion;
        const del = getSpawnNullDelegate();
        const bare = String(bareID || "").replace(/^item_prefab\//, "");
        const variants = [bare];
        if (bare.indexOf("item_") === 0) variants.push(bare.substring(5));
        variants.push("item_prefab/" + bare);
        for (const name of variants) {
            let r = null;
            try {
                const prefab = PrefabGen.method("GetItemPrefab", 1).invoke(Il2Cpp.string(name));
                if (prefab && !prefab.isNull?.()) {
                    r = PrefabGen.method("SpawnItem", 5)
                        .overload("AnimalCompany.GrabbableItemPrefab", "UnityEngine.Vector3", "UnityEngine.Quaternion", "Fusion.NetworkRunner.OnBeforeSpawned", "AnimalCompany.ItemSpawnSource")
                        .invoke(prefab, pos, rotation, del, 1);
                }
            } catch(_) { }
            if (r && !r.isNull?.()) return r;
            try {
                r = PrefabGen.method("SpawnItem", 5)
                    .overload("System.String", "UnityEngine.Vector3", "UnityEngine.Quaternion", "Fusion.NetworkRunner.OnBeforeSpawned", "AnimalCompany.ItemSpawnSource")
                    .invoke(Il2Cpp.string(name), pos, rotation, del, 1);
            } catch(_) { }
            if (r && !r.isNull?.()) return r;
        }
        return null;
    }
    let hlSpawnSourceCached: any = null;
    function hlNewSpawnSource() {
        if (hlSpawnSourceCached !== null) return hlSpawnSourceCached;
        try {
            const cls = AssemblyCSharp.class("AnimalCompany.ItemSpawnSource");
            for (const n of ["None", "Unknown", "Debug", "Spawned", "Shop", "Chest", "Gift", "Default"]) {
                try { hlSpawnSourceCached = cls.field(n).value; return hlSpawnSourceCached; } catch(_) { }
            }
        } catch(_) { }
        hlSpawnSourceCached = 0;
        return hlSpawnSourceCached;
    }
    function hlSpawnItem(name, pos, rot) {
        pos = normalizeSpawnPos(pos);
        const str = typeof name === "string" ? Il2Cpp.string(name) : name;
        const src = hlNewSpawnSource();
        try {
            const r = PrefabGen.method("SpawnItem", 5)
                .overload("System.String", "UnityEngine.Vector3", "UnityEngine.Quaternion", "Fusion.NetworkRunner.OnBeforeSpawned", "AnimalCompany.ItemSpawnSource")
                .invoke(str, pos, rot, getSpawnNullDelegate(), src);
            if (r && !r.isNull?.()) return r;
        } catch(_) { }
        try {
            const r = PrefabGen.method("SpawnItem", 5).invoke(str, pos, rot, NULL, src);
            if (r && !r.isNull?.()) return r;
        } catch(_) { }
        try {
            PrefabGen.method("SpawnItemAsync", 5)
                .overload("System.String", "UnityEngine.Vector3", "UnityEngine.Quaternion", "Fusion.NetworkObjectSpawnDelegate", "AnimalCompany.ItemSpawnSource")
                .invoke(str, pos, rot, NULL, src);
        } catch(_) { }
        return null;
    }
    function hlSpawnItem2(name, pos, rot) {
        pos = normalizeSpawnPos(pos);
        try {
            const prefab = PrefabGen.method("GetItemPrefab", 1).invoke(Il2Cpp.string(name));
            if (!prefab || prefab.isNull?.()) return null;
            const r = PrefabGen.method("SpawnItem", 5)
                .overload("AnimalCompany.GrabbableItemPrefab", "UnityEngine.Vector3", "UnityEngine.Quaternion", "Fusion.NetworkRunner.OnBeforeSpawned", "AnimalCompany.ItemSpawnSource")
                .invoke(prefab, pos, rot, getSpawnNullDelegate(), hlNewSpawnSource());
            if (r && !r.isNull?.()) return r;
        } catch(_) { }
        try {
            const prefab = PrefabGen.method("GetItemPrefab", 1).invoke(Il2Cpp.string(name));
            if (!prefab || prefab.isNull?.()) return null;
            const r = PrefabGen.method("SpawnItem", 5).invoke(prefab, pos, rot, NULL, hlNewSpawnSource());
            if (r && !r.isNull?.()) return r;
        } catch(_) { }
        return null;
    }
    function spawnItemAsync(bareID, pos, rot, delegateCallback?) {
        pos = normalizeSpawnPos(pos);
        const rotation = rot || identityQuaternion;
        const prefab = resolveItemPrefab(bareID);
        if (prefab) {
            const r = spawnItemFromPrefab(prefab, pos, rotation);
            if (r && !r.isNull?.()) return r;
        }
        try {
            const r = hlSpawnItem(bareID, pos, rotation);
            if (r && !r.isNull?.()) return r;
        } catch(_) { }
        try {
            const r = hlSpawnItem2(bareID, pos, rotation);
            if (r && !r.isNull?.()) return r;
        } catch(_) { }
        try {
            const source = hlNewSpawnSource();
            const cb = delegateCallback || NULL;
            return PrefabGen.method("SpawnItemAsync", 5)
                .overload("System.String", "UnityEngine.Vector3", "UnityEngine.Quaternion", "Fusion.NetworkObjectSpawnDelegate", "AnimalCompany.ItemSpawnSource")
                .invoke(Il2Cpp.string(bareID), pos, rotation, cb, source);
        } catch(_) { return null; }
    }
    function mmSpawnNetworkPrefab(prefabName: string, pos: any, rot: any): any {
        try {
            const runner = PrefabGen.field("_instance").value.method("get_runner").invoke();
            if (!runner || runner.isNull()) return null;
            const sources = runner.field("_config").value.field("PrefabTable").value.field("_sources").value;
            const count = sources.method("get_Count").invoke();
            for (let i = 0; i < count; i++) {
                try {
                    const source = sources.method("get_Item").invoke(i);
                    const desc = source.method("get_Description").invoke().toString();
                    if (!desc.toLowerCase().includes(String(prefabName).toLowerCase()))
                        continue;
                    var no;
                    try { no = source.method("WaitForResult").invoke(); } catch(_) {}
                    if (!no || (no && no.isNull())) continue;
                    const makeZero = (type) => {
                        if (type.class.isEnum || type.isPrimitive) return 0;
                        if (!type.class.isValueType) return NULL;
                        const fs = type.class.fields.filter((f) => !f.isStatic);
                        if (fs.length === 0) return 0;
                        return fs.map((f) => makeZero(f.type));
                    };
                    const buildNullable = (nt, has, val) => {
                        const fs = nt.class.fields.filter((f) => !f.isStatic);
                        return fs.map((f) => {
                            const ln = f.name.toLowerCase();
                            if (ln.includes("hasvalue")) return has ? 1 : 0;
                            if (ln === "value") return has ? val : makeZero(f.type);
                            return makeZero(f.type);
                        });
                    };
                    const normalize = (type, value) => {
                        if (typeof value === "boolean") return value ? 1 : 0;
                        if (value instanceof Il2Cpp.ValueType) {
                            const fs = type.class.fields.filter((f) => !f.isStatic);
                            if (fs.length === 0) return 0;
                            return fs.map((f) => normalize(f.type, f.bind(value).value));
                        }
                        if (Array.isArray(value)) return value.map((v) => normalize(type, v));
                        return value;
                    };
                    const buildFromVT = (nt, vt) => buildNullable(nt, true, normalize(vt.type, vt));
                    let spawnMethod = null;
                    for (const m of runner.method("Spawn").overloads()) {
                        if (m.parameterCount !== 6 || m.isGeneric) continue;
                        const pr = m.parameters;
                        if (pr[0].type.name.includes("Fusion.NetworkObject") &&
                            pr[1].type.name.startsWith("System.Nullable") && pr[1].type.name.includes("Vector3") &&
                            pr[2].type.name.startsWith("System.Nullable") && pr[2].type.name.includes("Quaternion") &&
                            pr[3].type.name.startsWith("System.Nullable") && pr[3].type.name.includes("PlayerRef") &&
                            pr[4].type.name.includes("OnBeforeSpawned") &&
                            pr[5].type.name.includes("NetworkSpawnFlags")) {
                            spawnMethod = m;
                            break;
                        }
                    }
                    if (!spawnMethod) return null;
                    const posArg = buildFromVT(spawnMethod.parameters[1].type, pos);
                    const rotArg = buildFromVT(spawnMethod.parameters[2].type, rot);
                    const authArg = buildNullable(spawnMethod.parameters[3].type, false, makeZero(spawnMethod.parameters[3].type));
                    const onBefore = spawnMethod.parameters[4].type.class.isValueType ? makeZero(spawnMethod.parameters[4].type) : NULL;
                    return spawnMethod.bind(runner).invoke(no, posArg, rotArg, authArg, onBefore, 0);
                }
                catch (_) { }
            }
        }
        catch (e) { }
        return null;
    }
    function mmAddCategory(title: string, entries: ButtonInfoConfig[], toolTip: string = ""): number {
        const idx = buttons.length;
        const page: ButtonInfo[] = [
            new ButtonInfo(menuButton("Back to Main", () => { currentCategory = 0; currentPage = 0; _pcMenuSelector = 0; })),
        ];
        for (const e of entries)
            page.push(new ButtonInfo(e));
        buttons.push(page);
        const mainBtn = new ButtonInfo(menuButton(title, () => { currentCategory = idx; currentPage = 0; _pcMenuSelector = 0; }, toolTip || title));
        const creditsIndex = buttons[0].findIndex((b: ButtonInfo) => b.buttonText === "Credits");
        const insertAt = creditsIndex >= 0 ? creditsIndex : buttons[0].length;
        buttons[0].splice(insertAt, 0, mainBtn);
        return idx;
    }
    function installTemplateButtons(additions: MenuTemplateAddition[]) {
        const categoryIndexes: Record<string, number> = {
            main: 0,
            player: 2,
            others: 3,
            rpcs: 3,
            users: 3,
            items: 5,
            spawning: 5,
            combat: 6,
            world: 7,
            overpowered: 8,
            settings: 10,
            credits: 11,
            spammers: 3,
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
    installTemplateMenu([
        menuCategory("IDs", [
            menuCategory("Item IDs", itemIDs.map((id, i) =>
                menuButton(id, () => { selectedItemIndex = i; sendNotification("Selected item: " + id, false, 2); }, id)
            ), "Browse all item IDs in order. Click to select."),
            menuCategory("Mob IDs", mobIDs.map((mob, i) =>
                menuButton(mob.name + " (" + mob.id + ")", () => { selectedMobIndex = i; sendNotification("Selected mob: " + mob.name, false, 2); }, "ID: " + mob.id)
            ), "Browse all mob IDs in order. Click to select."),
            menuCategory("Prefab IDs", prefabList.map((id) =>
                menuButton(id, () => { sendNotification("Selected prefab: " + id, false, 2); }, id)
            ), "Browse all prefab IDs in order. Click to select."),
            menuCategory("Mob Def IDs", mobDefinitionList.map((mob) =>
                menuButton(mob.name + " (" + mob.id + ")", () => { sendNotification("Selected: " + mob.name + " = " + mob.id, false, 2); }, mob.id)
            ), "Browse all mob definition IDs in order. Click to select."),
        ], "Browse Item, Mob, and Prefab IDs")
    ]);
    installTemplateButtons([
        {
            category: "others",
            entries: [
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
            ]
        },
        {
            category: "world",
            entries: [
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
                },
            ]
        },
        {
            category: "spammers",
            entries: [
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
            ]
        },
        {
            category: "overpowered",
            entries: [
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
                    buttonText: "Hollow Purple",
                    method: () => {
                      try {
                        var localP = getLocalPlayer();
                        if (!localP || localP.isNull?.()) return;
                        var headPos = getTransform(headCollider).method("get_position").invoke();
                        var headFwd = getTransform(headCollider).method("get_forward").invoke();
                        var headRight = getTransform(headCollider).method("get_right").invoke();
                        var mergePos = Vector3.method("op_Addition").invoke(headPos, Vector3.method("op_Multiply").invoke(headFwd, 2.0));
                        mergePos = Vector3.method("op_Addition").invoke(mergePos, [0, 0.5, 0]);
                        for (var g2 = 0; g2 < 15; g2++) {
                          var gOff = [(Math.random()-0.5)*6, Math.random()*3, (Math.random()-0.5)*6];
                          spawnNetworkPrefab("item_rpg_cny", Vector3.method("op_Addition").invoke(mergePos, gOff), identityQuaternion);
                        }
                        var players = getAllNetPlayersList(false);
                        for (var p = 0; p < players.length; p++) {
                          try {
                            players[p].method("RPC_PlayerHit").invoke(999, mergePos, AssemblyCSharp.class("AnimalCompany.DamageSourceInfo").method("get_Null").invoke());
                            players[p].method("RPC_AddForce").invoke([0, 8000, 0]);
                            players[p].method("RPC_PlayVFX").invoke(33, mergePos);
                            players[p].method("RPC_PlayVFX").invoke(183, mergePos);
                            players[p].method("RPC_PlayVFX").invoke(174, mergePos);
                          } catch(_) {}
                        }
                        sendNotification("HOLLOW PURPLE: DOMAIN EXPANSION - ALL KILLED!", false, 5);
                      } catch(_) {}
                    },
                    isTogglable: false,
                    toolTip: "Hollow Purple: 15 RPGs rain down + kills all players"
                },
            ]
        },
    ]);
    mmAddCategory("Safety", SAFETY_CATEGORY_BUTTONS, "Anti Ban, Anti Kick, Block RPCs.");
    mmAddCategory("Launchers", LAUNCHERS_CATEGORY_BUTTONS, "rocket / flare / buggy / thunder projectile launchers.");
    mmAddCategory("Name Mods", NAME_MODS_CATEGORY_BUTTONS, "steal names, preset names, restore your name.");
    mmAddCategory("Space", SPACE_CATEGORY_BUTTONS, "spawn / gun / delete spaceships + box-of-ships follower.");

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
        return mmSpawnNetworkPrefab(name, pos, rot);
    }
    function spawnMobAtPos(mob, pos, rot) {
        return mmSpawnNetworkPrefab(mob.name || mob.id, pos, rot);
    }
    function omniGetAimTransform() {
        return getTransform(righthand ? rightHandTransform : leftHandTransform);
    }
    function omniRenderGun() {
        try {
            var aimT = omniGetAimTransform();
            var startPos = aimT.method("get_position").invoke();
            var dir = aimT.method("get_forward").invoke();
            var rayStart = Vector3.method("op_Addition").invoke(startPos, Vector3.method("op_Multiply").invoke(dir, 0.1));
            var hits = Physics.method("RaycastAll").invoke(rayStart, dir, 50);
            var finalDist = 999999, finalRay = null;
            if (hits) {
                for (var i = 0; i < hits.length; i++) {
                    try {
                        var pt = hits[i].method("get_point").invoke();
                        var d = Vector3.method("Distance").invoke(pt, startPos);
                        if (typeof d === "number" && !isNaN(d) && d < finalDist) {
                            finalRay = hits[i];
                            finalDist = d;
                        }
                    } catch(_) {}
                }
            }
            var endPos;
            if (finalRay) {
                endPos = finalRay.method("get_point").invoke();
            } else {
                endPos = Vector3.method("op_Addition").invoke(startPos, Vector3.method("op_Multiply").invoke(dir, 50));
            }
            if (!GunPointer || GunPointer.isNull?.()) {
                GunPointer = createObject(endPos, identityQuaternion, [0.02, 0.02, 0.02], 0, [0, 0.5, 1, 0.85]);
                try { Destroy(getComponent(GunPointer, SphereCollider)); } catch(_) {}
            }
            GunPointer.method("SetActive").invoke(true);
            getTransform(GunPointer).method("set_position").invoke(endPos);
            if (!GunLine || GunLine.isNull?.()) {
                var lineObj = createObject(zeroVector, identityQuaternion, oneVector, 0, [0, 0, 0, 0]);
                try { Destroy(getComponent(lineObj, SphereCollider)); } catch(_) {}
                GunLine = addComponent(lineObj, LineRenderer);
                ensureShaders();
                if (TextShader) {
                    try { GunLine.method("get_material").invoke().method("set_shader").invoke(TextShader); } catch(_) {}
                }
                GunLine.method("set_startWidth").invoke(0.008);
                GunLine.method("set_endWidth").invoke(0.008);
                GunLine.method("set_useWorldSpace").invoke(true);
            }
            GunLine.method("get_gameObject").invoke().method("SetActive").invoke(true);
            var lineColor = rightTrigger ? [0, 0.25, 0.6, 0.9] : [0, 0.5, 1, 0.5];
            GunLine.method("set_startColor").invoke(lineColor);
            GunLine.method("set_endColor").invoke(lineColor);
            GunLine.method("set_positionCount").invoke(2);
            GunLine.method("SetPosition").invoke(0, startPos);
            GunLine.method("SetPosition").invoke(1, endPos);
            return { ray: finalRay, gunPointer: GunPointer, endPosition: endPos };
        } catch(_) {
            return { ray: null, gunPointer: null, endPosition: null };
        }
    }
    function resolveGunTargetPlayer(gd, maxDist) {
        maxDist = maxDist || 30.0;
        if (!gd) return null;
        try {
            var ray = gd.ray;
            if (ray && !ray.isNull?.()) {
                try {
                    var hc = ray.method("get_collider").invoke();
                    if (hc && !hc.isNull?.()) {
                        try {
                            var dp = hc.method("GetComponentInParent", 0).inflate(NetPlayerCls).invoke();
                            if (dp && !dp.isNull?.()) return dp;
                        } catch(_) {}
                        try {
                            var hgo = hc.method("get_gameObject").invoke();
                            if (hgo && !hgo.isNull?.()) {
                                var hp = hgo.method("GetComponentInParent", 0).inflate(NetPlayerCls).invoke();
                                if (hp && !hp.isNull?.()) return hp;
                            }
                        } catch(_) {}
                    }
                } catch(_) {}
            }
        } catch(_) {}
        try {
            var pp = gd.endPosition;
            if (!pp) return null;
            var nearest = null, nd = maxDist;
            var players = getAllNetPlayersList(false);
            for (var i = 0; i < players.length; i++) {
                try {
                    var pos = getTransform(players[i]).method("get_position").invoke();
                    var d = Vector3.method("Distance").invoke(pp, pos);
                    if (d < nd) { nd = d; nearest = players[i]; }
                } catch(_) {}
            }
            return nearest;
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
    function installSellValueMult() {
        try {
            var cls = AssemblyCSharp.class("AnimalCompany.GrabbableObject");
            var methods = cls.methods;
            for (var i = 0; i < methods.length; i++) {
                try {
                    var n = methods[i].name.to();
                    if (n === "get_sellValue" || n === "get_SellValue" || n === "get_baseSellValue") {
                        methods[i].implementation = function() { return 999999; };
                    }
                } catch(_) {}
            }
        } catch(_) {}
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
            var handT = righthand ? rightHandTransform : leftHandTransform;
            if (!handT || handT.isNull?.()) return;
            var go = GameObject.method("CreatePrimitive").invoke(0);
            try { Destroy(getComponent(go, SphereCollider)); } catch(_) {}
            try { Destroy(getComponent(go, BoxCollider)); } catch(_) {}
            getTransform(go).method("set_localScale").invoke([0.01, 0.01, 0.01]);
            var lr = addComponent(go, LineRenderer);
            ensureShaders();
            if (UberShader) {
                try {
                    var mats = lr.method("get_materials").invoke();
                    if (mats && !mats.isNull?.()) {
                        for (var i = 0; i < mats.length; i++) {
                            try { mats.get(i).method("set_shader").invoke(UberShader); } catch(_) {}
                        }
                    }
                } catch(_) {}
            }
            lr.method("set_positionCount").invoke(2);
            lr.method("set_startWidth").invoke(0.008);
            lr.method("set_endWidth").invoke(0.003);
            lr.method("set_startColor").invoke([0.6, 0.2, 1, 0.9]);
            lr.method("set_endColor").invoke([0.4, 0, 0.8, 0.3]);
            lr.method("set_useWorldSpace").invoke(true);
            lr.method("set_enabled").invoke(false);
            var gt = getTransform(go);
            gt.method("set_parent").invoke(handT);
            gt.method("set_localPosition").invoke([0, 0, 0]);
            gt.method("set_localRotation").invoke(identityQuaternion);
            go.method("set_layer").invoke(2);
            gunLib = go;
        } catch(_) {}
    }
    function destroyGunLib() {
        try {
            if (gunLib && !gunLib.isNull?.()) {
                try {
                    var t = getTransform(gunLib);
                    if (t && !t.isNull?.())
                        t.method("set_parent").invoke(null);
                } catch(_) {}
                try { Destroy(gunLib); } catch(_) {}
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
                try { updateInput(); } catch (_) {}
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
            updateToast();
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
            try {
                var anyGunLibActive = minigunRandomItemsEnabled || minigunRareItemsEnabled || blackholeLauncherEnabled || rocketLauncherEnabled || snowballLauncherEnabled || flaregunLauncherEnabled || bootzookaLauncherEnabled || bombArrowLauncherEnabled || rainbowLauncherEnabled || galaxyLauncherEnabled || rpgHeadEnabled || spawnMobGunCat3Enabled || spawnItemsGunEnabled || spawnMobGunEnabled || instaKillGunEnabled || reviveGunEnabled || launchGunEnabled || blindGunEnabled || kickGunEnabled || colorGunEnabled || freezeGunEnabled || buffGunEnabled || voidGunEnabled || wlKillGunEnabled || wlLaunchGunEnabled || wlReviveGunEnabled || wlScaleBigGunEnabled || wlScaleTinyGunEnabled || wlInvisibleGunEnabled || wlMoneyGunEnabled || wlStinkyGunEnabled || wlSpeedBuffGunEnabled || wlHit50GunEnabled || wlFreezeGunEnabled || wlVFXSpamGunEnabled || wlVoidGunEnabled;
                if (anyGunLibActive && gunLib && !gunLib.isNull?.()) {
                    var handT = righthand ? rightHandTransform : leftHandTransform;
                    if (handT && !handT.isNull?.()) {
                        var lr = getComponent(gunLib, LineRenderer);
                        if (lr && !lr.isNull?.()) {
                            var hT = getTransform(handT);
                            var hPos = hT.method("get_position").invoke();
                            var hFwd = hT.method("get_forward").invoke();
                            var startPos = Vector3.method("op_Addition").invoke(hPos, Vector3.method("op_Multiply").invoke(hFwd, 0.1));
                            var rayOrigin = startPos;
                            var rayDir = hFwd;
                            var hits = Physics.method("RaycastAll").invoke(rayOrigin, rayDir, 50);
                            var endPos = Vector3.method("op_Addition").invoke(startPos, Vector3.method("op_Multiply").invoke(rayDir, 50));
                            var finalRay = null;
                            if (hits) {
                                var minD = 999999;
                                for (var hi = 0; hi < hits.length; hi++) {
                                    try {
                                        var pt = hits[hi].method("get_point").invoke();
                                        var d = Vector3.method("Distance").invoke(pt, startPos);
                                        if (typeof d === "number" && !isNaN(d) && d < minD) { minD = d; finalRay = hits[hi]; }
                                    } catch(_) {}
                                }
                            }
                            if (finalRay) {
                                endPos = finalRay.method("get_point").invoke();
                            }
                            lr.method("SetPosition").invoke(0, startPos);
                            lr.method("SetPosition").invoke(1, endPos);
                            var gripHeld = righthand ? leftGrab : rightGrab;
                            var triggerHeld = righthand ? leftTrigger : rightTrigger;
                            if (gripHeld || triggerHeld) {
                                lr.method("set_startColor").invoke([0.7, 0.2, 1, 1]);
                                lr.method("set_endColor").invoke([0.5, 0, 0.9, 0.8]);
                                lr.method("set_startWidth").invoke(0.015);
                                lr.method("set_enabled").invoke(true);
                            } else {
                                lr.method("set_startColor").invoke([0.5, 0.2, 0.8, 0.5]);
                                lr.method("set_endColor").invoke([0.3, 0.1, 0.6, 0.2]);
                                lr.method("set_startWidth").invoke(0.006);
                                lr.method("set_enabled").invoke(true);
                            }
                            if (!GunPointer || GunPointer.isNull?.()) {
                                GunPointer = createObject(endPos, identityQuaternion, [0.02, 0.02, 0.02], 0, [0.6, 0.2, 1, 0.85]);
                                try { Destroy(getComponent(GunPointer, SphereCollider)); } catch(_) {}
                            }
                            GunPointer.method("SetActive").invoke(true);
                            getTransform(GunPointer).method("set_position").invoke(endPos);
                        }
                    }
                } else if (gunLib && !gunLib.isNull?.()) {
                    var lr2 = getComponent(gunLib, LineRenderer);
                    if (lr2 && !lr2.isNull?.()) {
                        lr2.method("set_enabled").invoke(false);
                    }
                    if (GunPointer && !GunPointer.isNull?.()) {
                        GunPointer.method("SetActive").invoke(false);
                    }
                }
            } catch(_) {}
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
  ███████║   ██║   ██║  ██║███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████║
  ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝

  [i] Join discord.gg/synapse-menu
  `);
    (function _autoPcMode() {
        try {
            const kernel32 = Process.getModuleByName("kernel32.dll");
            const pGetFileAttributesA = kernel32.getExportByName("GetFileAttributesA");
            const getFileAttributes = new NativeFunction(pGetFileAttributesA, "uint32", ["pointer"]);
            const gameDir = Process.enumerateModules()[0].path.replace(/[\\/][^\\/]+$/, "");
            const flagPaths = [
                gameDir + "\\pc_mode.flag",
                Process.cwd() + "\\pc_mode.flag"
            ];
            for (let fi = 0; fi < flagPaths.length; fi++) {
                const fullPath = flagPaths[fi];
                const pathPtr = Memory.allocUtf8String(fullPath);
                const attrs = getFileAttributes(pathPtr);
                if (attrs !== 0xFFFFFFFF) {
                    _pcMode = true;
                    _pcMenuOpen = false;
                    _pcFlyEnabled = true;
                    flyVelocity = [0, 0, 0];
                    try {
                        const inst = instanceField ? instanceField.value : GTPlayer;
                        if (syteValid(inst)) {
                            playerRigidBody = inst.field("_playerRigidBody").value;
                            rigidbody = playerRigidBody;
                        }
                    }
                    catch (_) { }
                    _pcLastCursorX = -1;
                    syteLog("[Synapse PC] PC Mode auto-enabled via loader (Q=toggle menu  WASD+RMB=fly  Esc=exit)");
                    try {
                        const fs = Process.getModuleByName("kernel32.dll");
                        const pDeleteFileA = fs.getExportByName("DeleteFileA");
                        const deleteFile = new NativeFunction(pDeleteFileA, "int", ["pointer"]);
                        deleteFile(pathPtr);
                    }
                    catch (_) { }
                    return;
                }
            }
        }
        catch (_) { }
    })();
});